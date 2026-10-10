/**
 * Video pipeline data access for the Next.js app.
 *
 * The app only *reads* pipeline state here (plus small admin writes in
 * /api/videos/*). All heavy work happens in the pipeline package; this module
 * is the boundary between the two worlds.
 *
 * Every function tolerates a database that has not had the video migration
 * applied yet: article pages keep rendering without a video instead of failing.
 */
import { cacheLife, cacheTag } from 'next/cache';
import { prisma } from '@/lib/prisma';
import type { VideoArea, VideoAssetStatus } from '@prisma/client';
import type { VideoScriptDocument, VideoQaReport } from '@/types';

/**
 * Key of the runtime publish-budget setting in `video_pipeline_settings`.
 *
 * NOTE: the pipeline owns the same key in `pipeline/src/stages/publish.ts`
 * (PUBLISH_BUDGET_KEY there). The app cannot import pipeline code (see
 * AGENTS.md), so the string is duplicated deliberately — change both.
 */
export const VIDEO_PUBLISH_BUDGET_SETTING_KEY = 'publish_budget_per_day';

export interface PublishedVideo {
  youtubeVideoId: string;
  title: string;
  description: string | null;
  publishedAt: Date | null;
  articleTitle: string;
}

/**
 * Logs a video lookup failure once per process.
 *
 * A page that cannot reach the video tables must degrade to "no video" rather
 * than fail, and with thousands of lesson pages a per-page warning would flood
 * the logs, so only the first occurrence is reported.
 */
let videoLookupFailureLogged = false;

function warnVideoLookupFailure(context: string, error: Error): void {
  if (videoLookupFailureLogged) return;
  videoLookupFailureLogged = true;
  console.warn(`getPublishedVideoForLesson failed (${context}): ${error.message}`);
}

/**
 * Cached variant used by lesson pages.
 *
 * Lesson pages stay prerenderable under `cacheComponents`, while the video
 * lookup refreshes every 15 minutes so a newly published video appears without
 * a redeploy (plan §9). The tag lets an admin action invalidate it on demand.
 */
export async function getPublishedVideoCached(
  area: VideoArea,
  courseSlug: string,
  moduleSlug: string,
  lessonSlug: string,
): Promise<PublishedVideo | null> {
  'use cache';
  cacheTag('video-published');
  cacheLife({ stale: 60, revalidate: 900, expire: 86_400 });

  return getPublishedVideoForLesson(area, courseSlug, moduleSlug, lessonSlug);
}

/** Looks up the published video for a lesson; returns null when there is none. */
export async function getPublishedVideoForLesson(
  area: VideoArea,
  courseSlug: string,
  moduleSlug: string,
  lessonSlug: string,
): Promise<PublishedVideo | null> {
  try {
    const article = await prisma.videoArticle.findUnique({
      where: { area_courseSlug_moduleSlug_lessonSlug: { area, courseSlug, moduleSlug, lessonSlug } },
      include: {
        assets: {
          orderBy: { version: 'desc' },
          take: 1,
          include: {
            publications: {
              where: { privacyStatus: { in: ['public'] }, removedAt: null },
              orderBy: { publishedAt: 'desc' },
              take: 1,
            },
          },
        },
      },
    });

    const publication = article?.assets[0]?.publications[0];
    if (!article || !publication) return null;

    return {
      youtubeVideoId: publication.youtubeVideoId,
      title: publication.title,
      description: publication.description,
      publishedAt: publication.publishedAt,
      articleTitle: article.title,
    };
  } catch (error) {
    // Missing tables must never take a lesson page down.
    warnVideoLookupFailure(`${area}:${lessonSlug}`, error as Error);
    return null;
  }
}

export interface VideoStatusCount {
  status: VideoAssetStatus;
  count: number;
}

export interface VideoDashboardStats {
  totals: VideoStatusCount[];
  articles: { total: number; withVideo: number; deleted: number };
  queue: {
    awaitingReview: number;
    approved: number;
    rejected: number;
    failed: number;
    stale: number;
    published: number;
  };
  recentRuns: Array<{
    id: string;
    kind: string;
    trigger: string;
    startedAt: Date;
    finishedAt: Date | null;
    jobsClaimed: number;
    jobsSucceeded: number;
    jobsFailed: number;
    error: string | null;
  }>;
  perCourse: Array<{ courseSlug: string; area: VideoArea; title: string; total: number; published: number; awaitingReview: number }>;
  eta: { reviewsPerDay: number | null; daysRemaining: number | null };
}

export async function getVideoDashboardStats(): Promise<VideoDashboardStats> {
  const empty: VideoDashboardStats = {
    totals: [],
    articles: { total: 0, withVideo: 0, deleted: 0 },
    queue: { awaitingReview: 0, approved: 0, rejected: 0, failed: 0, stale: 0, published: 0 },
    recentRuns: [],
    perCourse: [],
    eta: { reviewsPerDay: null, daysRemaining: null },
  };

  try {
    const grouped = await prisma.videoAsset.groupBy({ by: ['status'], _count: { _all: true } });
    const totals: VideoStatusCount[] = grouped.map((row) => ({ status: row.status, count: row._count._all }));
    const countFor = (status: VideoAssetStatus) => totals.find((t) => t.status === status)?.count ?? 0;

    const [articleCount, withVideo, deleted] = await Promise.all([
      prisma.videoArticle.count(),
      prisma.videoArticle.count({ where: { assets: { some: { status: { in: ['awaiting_review', 'approved', 'uploading', 'published'] } } } } }),
      prisma.videoArticle.count({ where: { deletedAt: { not: null } } }),
    ]);

    const recentRuns = await prisma.videoPipelineRun.findMany({
      orderBy: { startedAt: 'desc' },
      take: 12,
      select: {
        id: true,
        kind: true,
        trigger: true,
        startedAt: true,
        finishedAt: true,
        jobsClaimed: true,
        jobsSucceeded: true,
        jobsFailed: true,
        error: true,
      },
    });

    const perCourse = await prisma.videoArticle.groupBy({
      by: ['courseSlug', 'area'],
      _count: { _all: true },
      orderBy: { _count: { courseSlug: 'desc' } },
      take: 25,
    });

    const publishedArticleIds = new Set(
      (await prisma.videoAsset.findMany({ where: { status: 'published' }, select: { articleId: true } })).map((row) => row.articleId),
    );

    const perCourseWithTitle = await Promise.all(
      perCourse.map(async (row) => {
        const first = await prisma.videoArticle.findFirst({
          where: { courseSlug: row.courseSlug },
          select: { title: true, courseTitle: true },
        });
        return {
          courseSlug: row.courseSlug,
          area: row.area,
          title: first?.courseTitle ?? first?.title ?? row.courseSlug,
          total: row._count._all,
          published: 0,
          awaitingReview: 0,
        };
      }),
    );

    // Measured review throughput from the review decision log.
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const decisions = await prisma.videoReviewDecision.findMany({
      where: { createdAt: { gte: sevenDaysAgo }, decision: 'approved' },
      select: { createdAt: true },
    });
    const reviewsPerDay = decisions.length > 0 ? decisions.length / 7 : null;
    const remaining = countFor('awaiting_review') + countFor('approved');
    const daysRemaining = reviewsPerDay && reviewsPerDay > 0 ? Math.round(remaining / reviewsPerDay) : null;

    return {
      totals,
      articles: { total: articleCount, withVideo, deleted },
      queue: {
        awaitingReview: countFor('awaiting_review'),
        approved: countFor('approved'),
        rejected: countFor('rejected'),
        failed: countFor('failed'),
        stale: countFor('stale'),
        published: countFor('published'),
      },
      recentRuns,
      perCourse: perCourseWithTitle,
      eta: { reviewsPerDay, daysRemaining },
    };
  } catch (error) {
    console.warn('getVideoDashboardStats failed', (error as Error).message);
    return empty;
  }
}

export interface ReviewQueueItem {
  assetId: string;
  articleId: string;
  title: string;
  description: string | null;
  area: VideoArea;
  courseTitle: string | null;
  moduleTitle: string | null;
  version: number;
  sourceHash: string;
  durationMs: number | null;
  createdAt: Date;
  claimedBy: string | null;
  claimExpiresAt: Date | null;
  youtubeVideoId: string | null;
  script: VideoScriptDocument | null;
  qa: VideoQaReport | null;
  canonicalUrl: string;
}

/** The shared review queue: oldest first, with claim state for collision safety. */
export async function getReviewQueue(limit = 25): Promise<ReviewQueueItem[]> {
  const now = new Date();
  const assets = await prisma.videoAsset.findMany({
    where: {
      status: 'awaiting_review',
      OR: [{ reviewClaimEmail: null }, { reviewClaimExpiresAt: { lt: now } }],
    },
    orderBy: { createdAt: 'asc' },
    take: limit,
    include: {
      article: true,
      publications: { select: { youtubeVideoId: true }, take: 1 },
    },
  });

  return assets.map((asset) => ({
    assetId: asset.id,
    articleId: asset.articleId,
    title: asset.article.title,
    description: asset.article.description,
    area: asset.article.area,
    courseTitle: asset.article.courseTitle,
    moduleTitle: asset.article.moduleTitle,
    version: asset.version,
    sourceHash: asset.sourceHash,
    durationMs: asset.durationMs,
    createdAt: asset.createdAt,
    claimedBy: asset.reviewClaimEmail,
    claimExpiresAt: asset.reviewClaimExpiresAt,
    youtubeVideoId: asset.publications[0]?.youtubeVideoId ?? null,
    script: (asset.scriptJson as VideoScriptDocument | null) ?? null,
    qa: (asset.qaJson as VideoQaReport | null) ?? null,
    canonicalUrl: asset.article.canonicalUrl,
  }));
}

export interface VideoFailure {
  assetId: string;
  articleId: string;
  title: string;
  area: VideoArea;
  version: number;
  failureCount: number;
  lastError: string | null;
  durationMs: number | null;
  updatedAt: Date;
}

export async function getVideoFailures(limit = 50): Promise<VideoFailure[]> {
  const assets = await prisma.videoAsset.findMany({
    where: { status: 'failed' },
    orderBy: { updatedAt: 'desc' },
    take: limit,
    include: { article: { select: { title: true, area: true } } },
  });

  return assets.map((asset) => ({
    assetId: asset.id,
    articleId: asset.articleId,
    title: asset.article.title,
    area: asset.article.area,
    version: asset.version,
    failureCount: asset.failureCount,
    lastError: asset.lastError,
    durationMs: asset.durationMs,
    updatedAt: asset.updatedAt,
  }));
}

export async function getStaleVideoCount(): Promise<number> {
  return prisma.videoAsset.count({ where: { status: 'stale' } });
}
