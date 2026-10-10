/**
 * Run bookkeeping. Every pipeline execution writes one row so the dashboard can
 * show progress, throughput and cost from the database instead of CI logs.
 */
import type { PipelineConfig } from './config.js';
import { prisma } from './db.js';

export interface RunHandle {
  id: string;
  kind: string;
}

export async function startRun(config: PipelineConfig, kind: string, trigger: string): Promise<RunHandle> {
  void config;
  const run = await prisma.videoPipelineRun.create({
    data: { kind, trigger },
    select: { id: true },
  });
  return { id: run.id, kind };
}

export interface RunTotals {
  jobsClaimed?: number;
  jobsSucceeded?: number;
  jobsFailed?: number;
  articlesSeen?: number;
  articlesAdded?: number;
  articlesStale?: number;
  uploads?: number;
  error?: string;
}

export async function finishRun(_config: PipelineConfig, run: RunHandle, totals: RunTotals): Promise<void> {
  await prisma.videoPipelineRun.update({
    where: { id: run.id },
    data: {
      finishedAt: new Date(),
      ...(totals.jobsClaimed !== undefined ? { jobsClaimed: totals.jobsClaimed } : {}),
      ...(totals.jobsSucceeded !== undefined ? { jobsSucceeded: totals.jobsSucceeded } : {}),
      ...(totals.jobsFailed !== undefined ? { jobsFailed: totals.jobsFailed } : {}),
      ...(totals.articlesSeen !== undefined ? { articlesSeen: totals.articlesSeen } : {}),
      ...(totals.articlesAdded !== undefined ? { articlesAdded: totals.articlesAdded } : {}),
      ...(totals.articlesStale !== undefined ? { articlesStale: totals.articlesStale } : {}),
      ...(totals.uploads !== undefined ? { uploads: totals.uploads } : {}),
      ...(totals.error !== undefined ? { error: totals.error.slice(0, 2000) } : {}),
    },
  });
}
