/**
 * Reconciler: repairs drift between the database and reality.
 *
 * Three kinds of drift are handled (plan §4.8):
 *  1. jobs stuck in leases whose runner vanished → back to `pending`
 *  2. records referring to videos that no longer exist on YouTube → flagged so
 *     a human can decide (published videos are never silently dropped)
 *  3. privacy drift between YouTube and our records → recorded, never unilaterally changed
 */
import { prisma } from '../db.js';
import type { PipelineConfig } from '../config.js';
import { YouTubeClient, createYouTubeClientFromEnv } from '../youtube.js';
import { requeueExpiredLeases } from '../queue/jobs.js';
import type { StageOutcome } from '../script/stage.js';

export interface ReconcileDeps {
  client?: YouTubeClient | null;
}

export async function runReconcile(config: PipelineConfig, deps: ReconcileDeps = {}): Promise<StageOutcome> {
  const requeued = await requeueExpiredLeases();

  if (config.dryRun) {
    return {
      ok: true,
      metrics: { leasesRequeued: requeued, dryRun: 1 },
    };
  }

  const client = deps.client ?? createYouTubeClientFromEnv();
  if (!client) {
    return {
      ok: true,
      metrics: { leasesRequeued: requeued, youtube: 'not-configured' },
    };
  }

  const remote = await client.listUploadedVideos(500);
  const remoteById = new Map(remote.map((video) => [video.videoId, video]));

  const publications = await prisma.videoPublication.findMany({
    where: { removedAt: null },
    include: { asset: { include: { article: true } } },
  });

  let missing = 0;
  let privacyDrift = 0;

  for (const publication of publications) {
    const remoteVideo = remoteById.get(publication.youtubeVideoId);
    await prisma.videoPublication.update({
      where: { id: publication.id },
      data: { lastSyncedAt: new Date() },
    });

    if (!remoteVideo) {
      missing += 1;
      await prisma.videoPublication.update({
        where: { id: publication.id },
        data: { removedAt: new Date() },
      });
      await prisma.videoAsset.update({
        where: { id: publication.assetId },
        data: { status: 'failed', lastError: `YouTube video ${publication.youtubeVideoId} no longer exists; needs regeneration or manual unpublish` },
      });
      continue;
    }

    if (remoteVideo.privacyStatus !== publication.privacyStatus) {
      privacyDrift += 1;
      await prisma.videoPublication.update({
        where: { id: publication.id },
        data: {
          privacyStatus:
            remoteVideo.privacyStatus === 'private' || remoteVideo.privacyStatus === 'deleted'
              ? publication.privacyStatus
              : (remoteVideo.privacyStatus as 'unlisted' | 'public' | 'private'),
        },
      });
    }
  }

  return {
    ok: true,
    metrics: {
      leasesRequeued: requeued,
      publicationsChecked: publications.length,
      missingOnYouTube: missing,
      privacyDrift,
    },
  };
}
