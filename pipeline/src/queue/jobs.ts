/**
 * Job queue primitives.
 *
 * Jobs are the unit of work: one stage of one asset version. Claiming is a
 * single atomic SQL statement (SELECT ... FOR UPDATE SKIP LOCKED wrapped in an
 * UPDATE) so two runners can never take the same job, and a lease with an
 * expiry means a runner that dies mid-job releases the job automatically.
 *
 * Everything here is written so that the same code path works for concurrent
 * workers: the winner of a claim is decided by the database, not by the process.
 */
import { Prisma, type VideoJob, type VideoJobStage, type VideoJobState } from '@prisma/client';
import { prisma } from '../db.js';

export interface ClaimedJob {
  id: string;
  articleId: string;
  assetId: string | null;
  stage: VideoJobStage;
  kind: string;
  attempts: number;
  maxAttempts: number;
}

export interface ClaimOptions {
  owner: string;
  limit: number;
  stages?: VideoJobStage[];
  leaseSeconds: number;
}

interface RawClaimedJob {
  id: string;
  articleId: string;
  assetId: string | null;
  stage: VideoJobStage;
  kind: string;
  attempts: number;
  maxAttempts: number;
}

/**
 * Atomically claims up to `limit` pending jobs, marking them processing under a
 * lease and incrementing their attempt counter. Uses SKIP LOCKED so concurrent
 * workers never block on each other and never double-claim.
 */
export async function claimJobs(options: ClaimOptions): Promise<ClaimedJob[]> {
  if (options.limit <= 0) return [];

  const stageFilter = options.stages && options.stages.length > 0
    ? Prisma.sql`AND j."stage" IN (${Prisma.join(options.stages)})`
    : Prisma.empty;

  const rows = await prisma.$queryRaw<RawClaimedJob[]>(Prisma.sql`
    UPDATE "video_jobs" j
    SET "state" = 'processing',
        "leaseOwner" = ${options.owner},
        "leaseExpiresAt" = now() + make_interval(secs => ${options.leaseSeconds}),
        "attempts" = j."attempts" + 1,
        "updatedAt" = now()
    WHERE j."id" IN (
      SELECT c."id"
      FROM "video_jobs" c
      WHERE c."state" = 'pending'
        AND (c."notBefore" IS NULL OR c."notBefore" <= now())
        ${stageFilter}
      ORDER BY c."priority" ASC, c."createdAt" ASC
      LIMIT ${options.limit}
      FOR UPDATE SKIP LOCKED
    )
    RETURNING j."id", j."articleId", j."assetId", j."stage", j."kind", j."attempts", j."maxAttempts"
  `);

  return rows.map((row) => ({
    id: row.id,
    articleId: row.articleId,
    assetId: row.assetId,
    stage: row.stage,
    kind: row.kind,
    attempts: Number(row.attempts),
    maxAttempts: Number(row.maxAttempts),
  }));
}

/** Records the start of an attempt for structured error reporting. */
export async function recordAttemptStart(jobId: string, attemptNo: number): Promise<string> {
  const attempt = await prisma.videoJobAttempt.create({
    data: { jobId, attemptNo, outcome: 'running' },
    select: { id: true },
  });
  return attempt.id;
}

export interface AttemptResult {
  success: boolean;
  errorCode?: string;
  errorMessage?: string;
  metrics?: Record<string, number | string>;
  /**
   * Permanent failures (for example an article too small to narrate) are
   * dead-lettered on the first attempt instead of being retried.
   */
  permanent?: boolean;
}

/**
 * Finishes an attempt: marks the job completed, or schedules a retry with
 * exponential backoff. Once `attempts >= maxAttempts` (or the failure is
 * permanent) the job is dead-lettered (state `failed`) with the error preserved
 * for the dashboard.
 */
export async function completeAttempt(
  jobId: string,
  attemptId: string,
  attemptNo: number,
  result: AttemptResult,
): Promise<{ state: VideoJobState; retryInMs: number | null }> {
  const job = await prisma.videoJob.findUnique({
    where: { id: jobId },
    select: { attempts: true, maxAttempts: true, assetId: true, articleId: true },
  });
  if (!job) throw new Error(`job ${jobId} vanished while finishing attempt`);

  await prisma.videoJobAttempt.update({
    where: { id: attemptId },
    data: {
      finishedAt: new Date(),
      outcome: result.success ? 'succeeded' : 'failed',
      errorCode: result.errorCode ?? null,
      errorMessage: result.errorMessage ?? null,
      metrics: result.metrics ? (result.metrics as object) : undefined,
    },
  });

  if (result.success) {
    await prisma.videoJob.update({
      where: { id: jobId },
      data: { state: 'completed', leaseOwner: null, leaseExpiresAt: null, notBefore: null, lastError: null },
    });
    return { state: 'completed', retryInMs: null };
  }

  const attemptsUsed = Number(job.attempts);
  const message = result.errorMessage ?? result.errorCode ?? 'unknown error';

  if (result.permanent === true || attemptsUsed >= Number(job.maxAttempts)) {
    await prisma.videoJob.update({
      where: { id: jobId },
      data: { state: 'failed', leaseOwner: null, leaseExpiresAt: null, lastError: message.slice(0, 2000) },
    });
    // Surface the failure on the asset so the dashboard can show it.
    if (job.assetId) {
      await prisma.videoAsset.update({
        where: { id: job.assetId },
        data: {
          status: 'failed',
          failureCount: { increment: 1 },
          lastError: message.slice(0, 2000),
        },
      });
    }
    return { state: 'failed', retryInMs: null };
  }

  const retryInMs = backoffMs(attemptNo);
  await prisma.videoJob.update({
    where: { id: jobId },
    data: {
      state: 'pending',
      leaseOwner: null,
      leaseExpiresAt: null,
      notBefore: new Date(Date.now() + retryInMs),
      lastError: message.slice(0, 2000),
    },
  });
  return { state: 'pending', retryInMs };
}

/** Exponential backoff with a cap: 30s, 1m, 2m, 4m, 8m, 15m ... */
export function backoffMs(attemptNo: number, baseMs = 30_000, capMs = 900_000): number {
  const exponent = Math.max(0, attemptNo - 1);
  return Math.min(capMs, baseMs * 2 ** exponent);
}

/** Releases jobs whose lease expired (runner died) back to pending. */
export async function requeueExpiredLeases(): Promise<number> {
  const result = await prisma.videoJob.updateMany({
    where: { state: 'processing', leaseExpiresAt: { lt: new Date() } },
    data: { state: 'pending', leaseOwner: null, leaseExpiresAt: null },
  });
  return result.count;
}

/** Releases the lease of a job this worker still holds (e.g. on shutdown). */
export async function releaseLease(jobId: string, owner: string): Promise<void> {
  await prisma.videoJob.updateMany({
    where: { id: jobId, leaseOwner: owner, state: 'processing' },
    data: { state: 'pending', leaseOwner: null, leaseExpiresAt: null },
  });
}

export async function getJob(jobId: string): Promise<VideoJob | null> {
  return prisma.videoJob.findUnique({ where: { id: jobId } });
}

/**
 * Re-queues a dead-lettered or cancelled job, resetting its backoff and attempt
 * pressure so the operator (or a config change such as switching to the LLM
 * writer) can pick the work up again.
 */
export async function requeueJob(jobId: string): Promise<VideoJob> {
  const job = await prisma.videoJob.findUnique({ where: { id: jobId } });
  if (!job) throw new Error(`job ${jobId} not found`);
  if (job.state === 'processing') throw new Error(`job ${jobId} is currently leased by another worker`);

  return prisma.videoJob.update({
    where: { id: jobId },
    data: {
      state: 'pending',
      leaseOwner: null,
      leaseExpiresAt: null,
      notBefore: null,
      lastError: null,
    },
  });
}

/** Re-queues every dead-lettered job for an article (used by the dashboard). */
export async function requeueArticleJobs(articleId: string): Promise<number> {
  const jobs = await prisma.videoJob.findMany({
    where: { articleId, state: { in: ['failed', 'cancelled'] } },
    select: { id: true },
  });
  let count = 0;
  for (const job of jobs) {
    await requeueJob(job.id);
    count += 1;
  }
  return count;
}
