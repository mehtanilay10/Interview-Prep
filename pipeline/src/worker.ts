/**
 * Batch worker: claims jobs from Neon and runs their stage, one at a time,
 * writing progress back after each stage so a crash costs at most one job.
 *
 * Each claimed job is executed by the runner registered for its stage, which
 * enqueues the next stage on success. Failures go through the queue's
 * retry/backoff/dead-letter machinery (see queue/jobs.ts).
 */
import os from 'node:os';
import type { VideoJobStage } from '@prisma/client';
import { prisma } from './db.js';
import { claimJobs, completeAttempt, recordAttemptStart, releaseLease, requeueExpiredLeases } from './queue/jobs.js';
import { runScriptStage } from './script/stage.js';
import { runVoiceStage } from './stages/voice.js';
import { runRenderStage } from './stages/render.js';
import { runQaStage } from './stages/qa.js';
import { runUploadStage } from './stages/upload.js';
import { runPublishStage } from './stages/publish.js';
import type { StageOutcome } from './script/stage.js';
import type { ClaimedJob } from './queue/jobs.js';
import type { PipelineConfig } from './config.js';
import { finishRun, startRun, type RunHandle } from './runlog.js';

export const WORKER_STAGES: VideoJobStage[] = ['script', 'voice', 'render', 'qa', 'upload', 'publish'];

export interface WorkerOptions {
  config: PipelineConfig;
  batchSize: number;
  stages?: VideoJobStage[];
  trigger?: string;
  /** Called after each job for progress reporting. */
  onJobDone?: (summary: JobSummary) => void;
}

export interface JobSummary {
  jobId: string;
  stage: VideoJobStage;
  ok: boolean;
  attempts: number;
  errorCode?: string;
  metrics?: Record<string, number | string>;
}

const STAGE_RUNNERS: Partial<Record<VideoJobStage, (config: PipelineConfig, job: ClaimedJob) => Promise<StageOutcome>>> = {
  script: runScriptStage,
  voice: runVoiceStage,
  render: runRenderStage,
  qa: runQaStage,
  upload: runUploadStage,
  publish: runPublishStage,
};

export async function runWorker(options: WorkerOptions): Promise<{ claimed: number; succeeded: number; failed: number; runId: string }> {
  const owner = `${os.hostname()}:${process.pid}:${Date.now().toString(36)}`;
  const run: RunHandle = await startRun(options.config, 'worker', options.trigger ?? 'schedule');

  const stages = options.stages?.length ? options.stages : WORKER_STAGES;
  const jobs = await claimJobs({
    owner,
    limit: options.batchSize,
    stages,
    leaseSeconds: options.config.leaseSeconds,
  });

  let succeeded = 0;
  let failed = 0;

  for (const job of jobs) {
    const runner = STAGE_RUNNERS[job.stage];
    const attemptId = await recordAttemptStart(job.id, job.attempts);

    if (!runner) {
      await completeAttempt(job.id, attemptId, job.attempts, {
        success: false,
        errorCode: 'unknown-stage',
        errorMessage: `no runner for stage ${job.stage}`,
      });
      failed += 1;
      continue;
    }

    // Quota-blocked publishers are not failures: release the job untouched.
    let outcome: StageOutcome;
    try {
      outcome = await runner(options.config, job);
    } catch (error) {
      outcome = { ok: false, errorCode: 'stage-threw', errorMessage: (error as Error).message };
    }

    if (!outcome.ok && outcome.errorCode === 'quota-blocked') {
      await releaseLease(job.id, owner);
      options.onJobDone?.({ jobId: job.id, stage: job.stage, ok: true, attempts: job.attempts, errorCode: outcome.errorCode, metrics: outcome.metrics });
      continue;
    }

    const completion = await completeAttempt(job.id, attemptId, job.attempts, {
      success: outcome.ok,
      errorCode: outcome.ok ? undefined : outcome.errorCode,
      errorMessage: outcome.ok ? undefined : outcome.errorMessage,
      metrics: outcome.metrics,
      permanent: outcome.ok ? undefined : outcome.permanent,
    });

    if (completion.state === 'completed') succeeded += 1;
    else if (completion.state === 'failed') failed += 1;

    options.onJobDone?.({
      jobId: job.id,
      stage: job.stage,
      ok: outcome.ok,
      attempts: job.attempts,
      errorCode: outcome.ok ? undefined : outcome.errorCode,
      metrics: outcome.metrics,
    });

    // Record per-stage counters for the dashboard's cost model.
    await recordRunMetrics(run, job.stage, outcome);
  }

  await finishRun(options.config, run, {
    jobsClaimed: jobs.length,
    jobsSucceeded: succeeded,
    jobsFailed: failed,
  });

  // Always leave the queue healthy for the next run, even if this one crashed.
  await requeueExpiredLeases();

  return { claimed: jobs.length, succeeded, failed, runId: run.id };
}

async function recordRunMetrics(run: RunHandle, stage: VideoJobStage, outcome: StageOutcome): Promise<void> {
  const metrics = outcome.metrics ?? {};
  if (stage === 'script' && typeof metrics.words === 'number') {
    await prisma.videoPipelineRun.update({
      where: { id: run.id },
      data: { llmCalls: { increment: 1 } },
    }).catch(() => undefined);
  }
  if (stage === 'voice' && typeof metrics.chunks === 'number') {
    await prisma.videoPipelineRun.update({
      where: { id: run.id },
      data: { ttsCalls: { increment: Number(metrics.chunks) } },
    }).catch(() => undefined);
  }
  if (stage === 'publish' && typeof metrics.uploadsToday === 'number') {
    await prisma.videoPipelineRun.update({
      where: { id: run.id },
      data: { uploads: { increment: 1 } },
    }).catch(() => undefined);
  }
}

export { prisma };
