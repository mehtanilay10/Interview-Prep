/**
 * Publish stage: flips approved (already uploaded, unlisted) videos to public,
 * respecting the daily quota budget (decision D6).
 *
 * The budget is a runtime setting (`publish_budget_per_day`, default 6 uploads
 * per day ≈ the default YouTube quota). When the budget is exhausted the stage
 * reports `quota-blocked` instead of failing the job: approved videos simply
 * wait in the queue and no state is corrupted.
 */
import { prisma } from '../db.js';
import type { PipelineConfig } from '../config.js';
import { YouTubeClient, YouTubeError, createYouTubeClientFromEnv } from '../youtube.js';
import type { ClaimedJob } from '../queue/jobs.js';
import type { StageOutcome } from '../script/stage.js';

/**
 * Key of the runtime publish-budget setting.
 *
 * NOTE: the app reads the same key in `lib/videoAssets.ts`
 * (VIDEO_PUBLISH_BUDGET_SETTING_KEY there — the app cannot import pipeline code,
 * see AGENTS.md, so the string is duplicated deliberately). Change both.
 */
export const PUBLISH_BUDGET_KEY = 'publish_budget_per_day';

export interface PublishDeps {
  client?: YouTubeClient | null;
  /** Overridable for tests. */
  now?: () => Date;
}

/** Uploads already performed today (UTC), used for the quota budget. */
export async function uploadsToday(now: () => Date = () => new Date()): Promise<number> {
  const startOfDay = new Date(now());
  startOfDay.setUTCHours(0, 0, 0, 0);
  return prisma.videoPublication.count({ where: { uploadedAt: { gte: startOfDay } } });
}

/** Reads the runtime publish budget (env default, DB override). */
export async function readPublishBudget(config: PipelineConfig): Promise<number> {
  const setting = await prisma.videoPipelineSetting.findUnique({ where: { key: PUBLISH_BUDGET_KEY } });
  if (setting) {
    const parsed = Number.parseInt(setting.value, 10);
    if (Number.isFinite(parsed) && parsed > 0) return parsed;
  }
  return config.publishBudgetPerDay;
}

export async function runPublishStage(config: PipelineConfig, job: ClaimedJob, deps: PublishDeps = {}): Promise<StageOutcome> {
  if (!job.assetId) return { ok: false, errorCode: 'context', errorMessage: 'publish job has no asset' };
  const now = deps.now ?? (() => new Date());

  const asset = await prisma.videoAsset.findUnique({
    where: { id: job.assetId },
    include: { article: true, publications: true },
  });
  if (!asset) return { ok: false, errorCode: 'context', errorMessage: 'asset row missing' };

  if (asset.status !== 'approved') {
    return {
      ok: false,
      errorCode: 'not-approved',
      errorMessage: `asset is "${asset.status}"; only reviewer-approved videos may be published`,
    };
  }

  const publication = asset.publications[0];
  if (!publication) {
    return { ok: false, errorCode: 'no-publication', errorMessage: 'approved asset has no uploaded video to publish' };
  }
  if (publication.privacyStatus === 'public') {
    await prisma.videoAsset.update({ where: { id: asset.id }, data: { status: 'published' } });
    return { ok: true, metrics: { deduplicated: 1, youtubeVideoId: publication.youtubeVideoId } };
  }

  const budget = await readPublishBudget(config);
  const usedToday = await uploadsToday(now);
  if (usedToday >= budget) {
    const tomorrow = new Date(now());
    tomorrow.setUTCHours(24, 0, 0, 0);
    return {
      ok: false,
      errorCode: 'quota-blocked',
      errorMessage: `daily publish budget reached (${usedToday}/${budget}); ${asset.article.title} stays approved and waits`,
      metrics: { budget, usedToday, resumeAfterMs: tomorrow.getTime() - now().getTime() },
    };
  }

  if (config.dryRun) {
    await prisma.videoPublication.update({
      where: { id: publication.id },
      data: { privacyStatus: 'public', publishedAt: now() },
    });
    await prisma.videoAsset.update({ where: { id: asset.id }, data: { status: 'published' } });
    return { ok: true, metrics: { youtubeVideoId: publication.youtubeVideoId, dryRun: 1 } };
  }

  const client = deps.client ?? createYouTubeClientFromEnv();
  if (!client) {
    return { ok: false, errorCode: 'youtube-not-configured', errorMessage: 'YOUTUBE_CLIENT_ID/SECRET/REFRESH_TOKEN are not set' };
  }

  try {
    await client.setPrivacyStatus(publication.youtubeVideoId, 'public');
  } catch (error) {
    if (error instanceof YouTubeError && error.kind === 'quota_exceeded') {
      return { ok: false, errorCode: 'quota-blocked', errorMessage: 'YouTube reported the quota as exhausted; the queue resumes tomorrow' };
    }
    return { ok: false, errorCode: 'youtube-publish-failed', errorMessage: (error as Error).message };
  }

  await prisma.$transaction([
    prisma.videoPublication.update({
      where: { id: publication.id },
      data: { privacyStatus: 'public', publishedAt: now(), lastSyncedAt: now() },
    }),
    prisma.videoAsset.update({ where: { id: asset.id }, data: { status: 'published' } }),
  ]);

  return { ok: true, metrics: { youtubeVideoId: publication.youtubeVideoId, uploadsToday: usedToday + 1, budget } };
}
