/**
 * Discovery stage: registers every in-scope article, detects changes, and
 * enqueues work. Makes no AI or YouTube calls, so it is safe to run on a
 * schedule and on every push to content/.
 */
import path from 'node:path';
import type { VideoJobStage } from '@prisma/client';
import { prisma } from '../db.js';
import { loadTitles, scanLessons, type ScannedLesson } from '../content/scan.js';
import { articleUrl, type PipelineConfig } from '../config.js';
import { stableStringify } from '../content/scan.js';

export interface DiscoverResult {
  articlesSeen: number;
  articlesAdded: number;
  articlesChanged: number;
  articlesDeleted: number;
  jobsEnqueued: number;
  staleMarked: number;
}

/**
 * Upserts article rows and enqueues the first job of each pipeline.
 *
 * - New article → row + `script` job for a brand new asset.
 * - Changed article (hash differs from the hash its newest asset was built
 *   from) → newest asset marked `stale` + a regeneration job.
 * - Deleted file → `deletedAt` set so the reconciler can unpublish later;
 *   the video itself stays published until a human decides (see plan §11.10).
 */
export async function runDiscover(config: PipelineConfig): Promise<DiscoverResult> {
  const scanned = await scanLessons(config.repoRoot);
  const result: DiscoverResult = {
    articlesSeen: scanned.length,
    articlesAdded: 0,
    articlesChanged: 0,
    articlesDeleted: 0,
    jobsEnqueued: 0,
    staleMarked: 0,
  };

  const seenKeys = new Set<string>();

  for (const item of scanned) {
    seenKeys.add(articleKey(item));
    await processScanned(config, item, result);
  }

  result.articlesDeleted = await markDeleted(seenKeys);
  return result;
}

function articleKey(item: ScannedLesson): string {
  return `${item.area}:${item.lesson.courseSlug}:${item.lesson.moduleSlug}:${item.lesson.slug}`;
}

async function processScanned(config: PipelineConfig, item: ScannedLesson, result: DiscoverResult): Promise<void> {
  const { lesson, area, contentHash } = item;
  const { courseTitle, moduleTitle } = await loadTitles(config.repoRoot, area, lesson.courseSlug, lesson.moduleSlug);
  const canonicalUrl = articleUrl(config, area, lesson.courseSlug, lesson.moduleSlug, lesson.slug);

  const existing = await prisma.videoArticle.findUnique({
    where: { area_courseSlug_moduleSlug_lessonSlug: { area, courseSlug: lesson.courseSlug, moduleSlug: lesson.moduleSlug, lessonSlug: lesson.slug } },
    include: {
      assets: { orderBy: { version: 'desc' }, take: 1 },
    },
  });

  if (!existing) {
    const article = await prisma.videoArticle.create({
      data: {
        area,
        courseSlug: lesson.courseSlug,
        moduleSlug: lesson.moduleSlug,
        lessonSlug: lesson.slug,
        title: lesson.title,
        description: lesson.description ?? null,
        courseTitle: courseTitle ?? null,
        moduleTitle: moduleTitle ?? null,
        difficulty: lesson.difficulty ?? null,
        canonicalUrl,
        contentHash,
      },
    });
    result.articlesAdded += 1;
    await enqueueRegeneration(article.id, null, 'generate');
    result.jobsEnqueued += 1;
    return;
  }

  const newestAsset = existing.assets[0] ?? null;
  const inFlightOrLive = newestAsset !== null && ['generating', 'awaiting_review', 'approved', 'uploading'].includes(newestAsset.status);
  const needsRerun =
    existing.deletedAt !== null ||
    existing.contentHash !== contentHash ||
    newestAsset === null ||
    !inFlightOrLive;

  await prisma.videoArticle.update({
    where: { id: existing.id },
    data: {
      title: lesson.title,
      description: lesson.description ?? null,
      courseTitle: courseTitle ?? null,
      moduleTitle: moduleTitle ?? null,
      difficulty: lesson.difficulty ?? null,
      canonicalUrl,
      contentHash,
      deletedAt: null,
    },
  });

  if (existing.contentHash !== contentHash) result.articlesChanged += 1;

  if (!needsRerun) return;

  // The article changed underneath a video that is still mid-flight or already
  // waiting for review: mark the old asset stale (it stays published) and build
  // a new version.
  if (newestAsset && newestAsset.sourceHash !== contentHash && newestAsset.status !== 'failed') {
    await prisma.videoAsset.update({
      where: { id: newestAsset.id },
      data: { status: 'stale' },
    });
    result.staleMarked += 1;
  }

  await enqueueRegeneration(existing.id, newestAsset?.id ?? null, existing.contentHash === contentHash ? 'recover' : 'regenerate');
  result.jobsEnqueued += 1;
}

/**
 * Creates the next asset version for an article and enqueues its first job.
 * Idempotent: if a runnable job already exists for the newest version, nothing
 * is added, which is what makes `discover` safe to run repeatedly.
 */
async function enqueueRegeneration(articleId: string, previousAssetId: string | null, kind: string): Promise<void> {
  const article = await prisma.videoArticle.findUnique({
    where: { id: articleId },
    include: { assets: { orderBy: { version: 'desc' }, take: 1 } },
  });
  if (!article) throw new Error(`article ${articleId} vanished during discovery`);

  const newest = article.assets[0] ?? null;

  // A version is "runnable" if it is queued/in flight; reuse it instead of
  // creating a duplicate asset.
  const runnable = newest && !['published', 'stale', 'failed', 'rejected'].includes(newest.status);
  if (runnable && newest) {
    const alreadyQueued = await prisma.videoJob.findFirst({
      where: { assetId: newest.id, state: { in: ['pending', 'processing'] } },
    });
    if (!alreadyQueued) {
      await prisma.videoJob.create({
        data: {
          articleId,
          assetId: newest.id,
          stage: resumeStageForAsset(newest),
          kind,
          priority: 100,
        },
      });
    }
    return;
  }

  const version = (newest?.version ?? 0) + 1;
  const asset = await prisma.videoAsset.create({
    data: {
      articleId,
      version,
      sourceHash: article.contentHash,
      status: 'pending',
      narrative: article.area === 'problems' ? 'walkthrough' : 'explainer',
      templateVersion: `v1:${previousAssetId ? 'regen' : 'new'}`,
    },
  });

  await prisma.videoJob.create({
    data: {
      articleId,
      assetId: asset.id,
      stage: 'script',
      kind: version === 1 ? 'generate' : 'regenerate',
      priority: 100,
    },
  });
}

/**
 * Picks the stage that resumes a partially built asset, based on what has
 * actually been produced rather than a guess from the status alone.
 */
function resumeStageForAsset(asset: {
  status: string;
  scriptJson: unknown;
  durationMs: number | null;
}): VideoJobStage {
  if (asset.scriptJson === null) return 'script';
  if (asset.durationMs === null) return 'voice';
  if (asset.status === 'awaiting_review' || asset.status === 'approved' || asset.status === 'uploading') return 'upload';
  return 'render';
}

/** Marks articles whose file disappeared as deleted (soft delete). */
async function markDeleted(seenKeys: Set<string>): Promise<number> {
  const existingArticles = await prisma.videoArticle.findMany({
    where: { deletedAt: null },
    select: { id: true, area: true, courseSlug: true, moduleSlug: true, lessonSlug: true },
  });

  let deleted = 0;
  for (const article of existingArticles) {
    const key = `${article.area}:${article.courseSlug}:${article.moduleSlug}:${article.lessonSlug}`;
    if (seenKeys.has(key)) continue;

    // Never silently drop published work: flag it and let a human decide.
    await prisma.videoArticle.update({
      where: { id: article.id },
      data: { deletedAt: new Date() },
    });
    deleted += 1;
  }
  return deleted;
}

/** Helper for tests: canonical file identity of a scanned lesson. */
export function lessonRelativeKey(item: ScannedLesson): string {
  return item.relativePath.split(path.sep).join('/');
}

export { stableStringify };
