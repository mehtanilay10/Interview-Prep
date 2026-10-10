/**
 * Upload stage: sends a QA-passed video to YouTube **as unlisted** so a human
 * reviewer has an embeddable player, then flips the asset to `awaiting_review`.
 *
 * The video is never made public here — publication happens only after a
 * reviewer approves it (decision D1). Publication rows carry a unique video id,
 * which is what makes a re-run after an interrupted upload impossible to
 * duplicate.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { prisma } from '../db.js';
import type { PipelineConfig } from '../config.js';
import { YouTubeClient, YouTubeError, createYouTubeClientFromEnv } from '../youtube.js';
import type { ClaimedJob } from '../queue/jobs.js';
import type { StageOutcome } from '../script/stage.js';

export interface UploadDeps {
  client?: YouTubeClient | null;
  /** Injected for tests; returns the file that would be uploaded. */
  resolveVideoPath?: (assetId: string, version: number) => Promise<string>;
}

export async function runUploadStage(config: PipelineConfig, job: ClaimedJob, deps: UploadDeps = {}): Promise<StageOutcome> {
  if (!job.assetId) return { ok: false, errorCode: 'context', errorMessage: 'upload job has no asset' };

  const asset = await prisma.videoAsset.findUnique({
    where: { id: job.assetId },
    include: { article: true },
  });
  if (!asset) return { ok: false, errorCode: 'context', errorMessage: 'asset row missing' };

  // Never upload the same asset version twice.
  const existing = await prisma.videoPublication.findFirst({ where: { assetId: asset.id } });
  if (existing) {
    await prisma.videoAsset.update({ where: { id: asset.id }, data: { status: 'awaiting_review' } });
    return {
      ok: true,
      metrics: { youtubeVideoId: existing.youtubeVideoId, deduplicated: 1 },
    };
  }

  const videoPath = deps.resolveVideoPath
    ? await deps.resolveVideoPath(asset.id, asset.version)
    : path.join(config.workDir, 'assets', `${asset.id}-v${asset.version}`, `video-v${asset.version}.mp4`);

  const description = buildDescription(config, asset.article.canonicalUrl, asset.article.title);

  if (config.dryRun) {
    // Dry run: record a deterministic placeholder id so downstream states and
    // the review UI can be exercised without touching YouTube.
    const publication = await prisma.videoPublication.create({
      data: {
        assetId: asset.id,
        youtubeVideoId: `dryrun-${asset.id.slice(0, 8)}-v${asset.version}`,
        privacyStatus: 'unlisted',
        title: `${asset.article.title} | Interview Prep`,
        description,
      },
    });
    await prisma.videoAsset.update({
      where: { id: asset.id },
      data: { status: 'awaiting_review', lastError: null },
    });
    return { ok: true, metrics: { youtubeVideoId: publication.youtubeVideoId, dryRun: 1 } };
  }

  const client = deps.client ?? createYouTubeClientFromEnv();
  if (!client) {
    return { ok: false, errorCode: 'youtube-not-configured', errorMessage: 'YOUTUBE_CLIENT_ID/SECRET/REFRESH_TOKEN are not set' };
  }

  const fileExists = await fs.access(videoPath).then(() => true).catch(() => false);
  if (!fileExists) {
    return { ok: false, errorCode: 'video-missing', errorMessage: `rendered video not found at ${videoPath}` };
  }

  await prisma.videoAsset.update({ where: { id: asset.id }, data: { status: 'uploading', lastError: null } });

  let upload;
  try {
    upload = await client.uploadVideo({
      filePath: videoPath,
      title: `${asset.article.title} | Interview Prep`.slice(0, 100),
      description,
      tags: buildTags(asset.article),
      categoryId: '27', // Education
      privacyStatus: 'unlisted',
      playlistId: process.env.YOUTUBE_PLAYLIST_ID,
    });
  } catch (error) {
    await prisma.videoAsset.update({ where: { id: asset.id }, data: { status: 'generating', lastError: (error as Error).message.slice(0, 1000) } });
    if (error instanceof YouTubeError && error.kind === 'quota_exceeded') {
      return { ok: false, errorCode: 'youtube-quota', errorMessage: 'YouTube upload quota exhausted; queue is paused until tomorrow' };
    }
    return { ok: false, errorCode: 'youtube-upload-failed', errorMessage: (error as Error).message };
  }

  const publication = await prisma.videoPublication.create({
    data: {
      assetId: asset.id,
      youtubeVideoId: upload.videoId,
      privacyStatus: 'unlisted',
      title: `${asset.article.title} | Interview Prep`,
      description,
      playlistId: process.env.YOUTUBE_PLAYLIST_ID ?? null,
      uploadAttempts: job.attempts,
    },
  });

  await prisma.videoAsset.update({ where: { id: asset.id }, data: { status: 'awaiting_review', lastError: null } });

  return {
    ok: true,
    metrics: {
      youtubeVideoId: upload.videoId,
      privacyStatus: upload.privacyStatus,
      sizeBytes: Number((await fs.stat(videoPath)).size),
    },
  };
}

/** Video description with the article backlink (the SEO flywheel from §8). */
export function buildDescription(config: PipelineConfig, canonicalUrl: string, title: string): string {
  return [
    `${title} — explained step by step.`,
    '',
    `Read the full article with every code sample: ${canonicalUrl}`,
    '',
    'Generated from the Interview Prep course content. Report issues on the article page.',
    '',
    '#interviewprep #programming #softwareengineering',
  ].join('\n');
}

function buildTags(article: { courseTitle?: string | null; moduleTitle?: string | null; difficulty?: string | null }): string[] {
  const tags = ['interview prep', 'programming tutorial', 'software engineering'];
  if (article.courseTitle) tags.push(...article.courseTitle.toLowerCase().split(/\s+/).slice(0, 3));
  if (article.moduleTitle) tags.push(...article.moduleTitle.toLowerCase().split(/\s+/).slice(0, 3));
  if (article.difficulty) tags.push(`${article.difficulty} tutorial`);
  return Array.from(new Set(tags)).slice(0, 12);
}
