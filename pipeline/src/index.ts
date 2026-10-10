#!/usr/bin/env node
/**
 * Video pipeline CLI.
 *
 * Commands:
 *   discover    Register articles, detect changes, enqueue jobs (no AI/YouTube calls)
 *   worker      Claim and run a batch of staged jobs
 *   publish     Publish approved videos (quota-budgeted)
 *   reconcile   Repair lease/upload/privacy drift
 *   requeue     Re-queue dead-lettered work (--article=<id> or --job=<id>)
 *   selftest    Validate the media stages against the real corpus, no database
 *
 * Examples:
 *   tsx pipeline/src/index.ts worker --batch=20
 *   tsx pipeline/src/index.ts selftest --course=csharp-fundamentals
 */
import { loadConfig } from './config.js';
import { runDiscover } from './stages/discover.js';
import { runWorker } from './worker.js';
import { runPublishStage } from './stages/publish.js';
import { prisma } from './db.js';
import { claimJobs, completeAttempt, recordAttemptStart, releaseLease } from './queue/jobs.js';
import { runSelftest } from './selftest.js';

interface CliArgs {
  command: string;
  flags: Map<string, string>;
  positional: string[];
}

export function parseArgs(argv: string[]): CliArgs {
  const [command = 'help', ...rest] = argv;
  const flags = new Map<string, string>();
  const positional: string[] = [];
  for (const arg of rest) {
    if (arg.startsWith('--')) {
      const [key, value = 'true'] = arg.slice(2).split('=');
      flags.set(key ?? '', value);
    } else {
      positional.push(arg);
    }
  }
  return { command, flags, positional };
}

async function main(): Promise<void> {
  const { command, flags, positional } = parseArgs(process.argv.slice(2));
  const config = loadConfig();

  const databaseRequired = command !== 'selftest' && command !== 'help';
  if (databaseRequired && !config.databaseUrl) {
    fail('DATABASE_URL (or PIPELINE_DATABASE_URL) is required for this command');
  }
  if (databaseRequired) {
    await prisma.$connect();
  }

  try {
    switch (command) {
      case 'discover': {
        const result = await runDiscover(config);
        report('discover', result);
        break;
      }
      case 'worker': {
        const batchSize = Number.parseInt(flags.get('batch') ?? '20', 10);
        const stages = flags.get('stages')?.split(',').filter(Boolean) as Parameters<typeof runWorker>[0]['stages'];
        const result = await runWorker({
          config,
          batchSize,
          ...(stages ? { stages } : {}),
          trigger: flags.get('trigger') ?? 'schedule',
          onJobDone: (summary) => {
            const status = summary.ok ? 'ok' : `fail:${summary.errorCode ?? 'unknown'}`;
            console.log(`  [${summary.stage}] ${status} attempt=${summary.attempts} job=${summary.jobId.slice(0, 8)} ${formatMetrics(summary.metrics)}`);
          },
        });
        report('worker', result);
        break;
      }
      case 'publish': {
        const result = await runPublishCommand(config, flags);
        report('publish', result);
        break;
      }
      case 'reconcile': {
        const { runReconcile } = await import('./stages/reconcile.js');
        const { startRun, finishRun } = await import('./runlog.js');
        const run = await startRun(config, 'reconcile', flags.get('trigger') ?? 'schedule');
        const outcome = await runReconcile(config);
        await finishRun(config, run, {
          jobsSucceeded: outcome.ok ? 1 : 0,
          jobsFailed: outcome.ok ? 0 : 1,
          error: outcome.ok ? undefined : outcome.errorMessage,
        });
        report('reconcile', outcome.metrics ?? {});
        break;
      }
      case 'requeue': {
        const { requeueArticleJobs, requeueJob } = await import('./queue/jobs.js');
        const target = flags.get('article') ?? positional[0];
        if (!target) fail('requeue needs --article=<articleId> or --job=<jobId>');
        const jobId = flags.get('job');
        const count = jobId ? 1 : await requeueArticleJobs(target as string);
        if (jobId) await requeueJob(jobId);
        report('requeue', { articlesOrJobs: count, target });
        break;
      }
      case 'selftest': {
        await runSelftest({
          config,
          ...(flags.has('sample') ? { sample: Number.parseInt(flags.get('sample') ?? '5', 10) } : {}),
          ...(flags.has('course') ? { courseFilter: flags.get('course') as string } : {}),
        });
        break;
      }
      default: {
        printHelp();
        break;
      }
    }
  } finally {
    if (databaseRequired) {
      await prisma.$disconnect();
    }
  }
}

/** Publishes approved videos by claiming their publish jobs directly. */
async function runPublishCommand(config: Parameters<typeof runWorker>[0]['config'], flags: Map<string, string>): Promise<Record<string, number | string>> {
  const limit = Number.parseInt(flags.get('batch') ?? '5', 10);
  const owner = `cli:${process.pid}`;
  const jobs = await claimJobs({ owner, limit, stages: ['publish'], leaseSeconds: config.leaseSeconds });
  let published = 0;
  let blocked = 0;
  let failed = 0;

  for (const job of jobs) {
    const attemptId = await recordAttemptStart(job.id, job.attempts);
    const outcome = await runPublishStage(config, job);
    if (outcome.ok) {
      published += 1;
      await completeAttempt(job.id, attemptId, job.attempts, { success: true, metrics: outcome.metrics });
      continue;
    }
    if (outcome.errorCode === 'quota-blocked') {
      blocked += 1;
      await releaseLease(job.id, owner);
      console.log(`  quota-blocked: ${outcome.errorMessage ?? ''}`);
      break;
    }
    failed += 1;
    await completeAttempt(job.id, attemptId, job.attempts, {
      success: false,
      errorCode: outcome.errorCode,
      errorMessage: outcome.errorMessage,
      metrics: outcome.metrics,
      permanent: outcome.permanent,
    });
  }

  return { claimed: jobs.length, published, quotaBlocked: blocked, failed };
}

function formatMetrics(metrics?: Record<string, number | string>): string {
  if (!metrics) return '';
  return Object.entries(metrics)
    .filter(([, value]) => value !== '' && value !== 0)
    .map(([key, value]) => `${key}=${value}`)
    .join(' ');
}

function report(label: string, payload: unknown): void {
  console.log(`${label}: ${JSON.stringify(payload)}`);
}

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function printHelp(): void {
  console.log(`Video pipeline commands:

  discover    Register articles, detect changes, enqueue jobs
  worker      Claim and run staged jobs (--batch=N --stages=script,voice,...)
  publish     Publish approved videos within the daily quota budget (--batch=N)
  reconcile   Repair leases, missing videos and privacy drift
  requeue     Re-queue dead-lettered work (--article=<id> or --job=<id>)
  selftest    Run the media stages against real articles with no database
              (--sample=N --course=courseSlug)

Environment:
  DATABASE_URL / PIPELINE_DATABASE_URL   Neon connection string
  PIPELINE_LLM_PROVIDER                  gemini | local (default: local without a key)
  PIPELINE_LLM_API_KEY                   free-tier LLM key for the script stage
  PIPELINE_TTS_PROVIDER                  piper | dryrun (default: dryrun)
  PIPELINE_DRY_RUN=1                     no network calls, synthetic audio, plan-only render
  YOUTUBE_CLIENT_ID/SECRET/REFRESH_TOKEN OAuth credentials for the channel
  YOUTUBE_PLAYLIST_ID                    optional playlist for uploads
`);
}

main().catch((error) => {
  console.error(`pipeline failed: ${(error as Error).message}`);
  process.exitCode = 1;
});
