/**
 * Review queue API: claim (soft lock) and decide (approve / reject).
 *
 * Approving enqueues a `publish` job; rejecting enqueues a regeneration job for
 * the next version. Both behaviours keep the article's current video online
 * until a replacement is approved (plan §6 change detection).
 */
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { isReviewerEmail } from '@/lib/videoReviewer';
import { logError, AuthError, ValidationError, DatabaseError } from '@/lib/errorHandler';

const CLAIM_MINUTES = 15;

const requestSchema = z.discriminatedUnion('action', [
  z.object({ action: z.literal('claim'), assetId: z.string().uuid() }),
  z.object({
    action: z.literal('decide'),
    assetId: z.string().uuid(),
    decision: z.enum(['approve', 'reject']),
    reason: z.string().max(1000).optional(),
  }),
]);

export async function GET(): Promise<NextResponse> {
  const queue = await prisma.videoAsset.findMany({
    where: { status: 'awaiting_review' },
    orderBy: { createdAt: 'asc' },
    take: 25,
    include: { article: true, publications: { select: { youtubeVideoId: true }, take: 1 } },
  });

  return NextResponse.json({
    queue: queue.map((asset) => ({
      assetId: asset.id,
      title: asset.article.title,
      area: asset.article.area,
      version: asset.version,
      createdAt: asset.createdAt,
      youtubeVideoId: asset.publications[0]?.youtubeVideoId ?? null,
      claimedBy: asset.reviewClaimEmail,
    })),
  });
}

export async function POST(request: Request): Promise<NextResponse> {
  // The reviewer identity is the verified Google email from the session; the
  // allowlist is the authorisation boundary (decision D5).
  const { auth } = await import('@/auth');
  const session = await auth();
  const email = session?.user?.email;
  if (!email || !isReviewerEmail(email)) {
    const error = new AuthError('You are not an authorised video reviewer');
    logError('videos/review:POST', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  let payload: z.infer<typeof requestSchema>;
  try {
    payload = requestSchema.parse(await request.json());
  } catch (parseError) {
    const error = new ValidationError('Invalid review payload');
    logError('videos/review:POST', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: 400 });
  }

  try {
    if (payload.action === 'claim') {
      const claimExpiresAt = new Date(Date.now() + CLAIM_MINUTES * 60_000);
      const asset = await prisma.videoAsset.findUnique({ where: { id: payload.assetId } });
      if (!asset) {
        return NextResponse.json({ ok: false, message: 'Asset not found' }, { status: 404 });
      }

      // Respect an existing unexpired claim held by someone else.
      const claimActive = asset.reviewClaimEmail && asset.reviewClaimExpiresAt && asset.reviewClaimExpiresAt > new Date();
      if (claimActive && asset.reviewClaimEmail !== email) {
        return NextResponse.json({ ok: false, message: `Already claimed by ${asset.reviewClaimEmail}` }, { status: 409 });
      }

      await prisma.videoAsset.update({
        where: { id: payload.assetId },
        data: { reviewClaimEmail: email, reviewClaimExpiresAt: claimExpiresAt },
      });
      return NextResponse.json({ ok: true, claimExpiresAt });
    }

    const asset = await prisma.videoAsset.findUnique({
      where: { id: payload.assetId },
      include: { article: true, publications: true },
    });
    if (!asset) {
      return NextResponse.json({ ok: false, message: 'Asset not found' }, { status: 404 });
    }
    if (asset.status !== 'awaiting_review') {
      return NextResponse.json({ ok: false, message: `Asset is "${asset.status}", not awaiting review` }, { status: 409 });
    }

    if (payload.decision === 'approve') {
      if (!asset.publications[0]) {
        return NextResponse.json(
          { ok: false, message: 'No uploaded video yet; the upload stage must run before approving.' },
          { status: 409 },
        );
      }

      await prisma.$transaction([
        prisma.videoReviewDecision.create({
          data: {
            assetId: asset.id,
            reviewerEmail: email,
            ...(session?.user?.id ? { reviewerUserId: session.user.id } : {}),
            decision: 'approved',
          },
        }),
        prisma.videoAsset.update({
          where: { id: asset.id },
          data: { status: 'approved', reviewClaimEmail: null, reviewClaimExpiresAt: null, lastError: null },
        }),
        prisma.videoJob.create({
          data: {
            articleId: asset.articleId,
            assetId: asset.id,
            stage: 'publish',
            kind: 'publish',
            priority: 80,
          },
        }),
      ]);

      return NextResponse.json({ ok: true, message: 'Approved; queued for publishing.' });
    }

    // Reject: record the decision and rebuild the next version from current content.
    await prisma.$transaction([
      prisma.videoReviewDecision.create({
        data: {
          assetId: asset.id,
          reviewerEmail: email,
          ...(session?.user?.id ? { reviewerUserId: session.user.id } : {}),
          decision: 'rejected',
          ...(payload.reason ? { reason: payload.reason } : {}),
        },
      }),
      prisma.videoAsset.update({
        where: { id: asset.id },
        data: {
          status: 'rejected',
          reviewClaimEmail: null,
          reviewClaimExpiresAt: null,
          lastError: `rejected by reviewer: ${payload.reason ?? 'no reason given'}`.slice(0, 1000),
        },
      }),
      prisma.videoAsset.create({
        data: {
          articleId: asset.articleId,
          version: asset.version + 1,
          sourceHash: asset.article.contentHash,
          status: 'pending',
          narrative: asset.narrative,
          templateVersion: asset.templateVersion,
        },
      }),
    ]);

    const newest = await prisma.videoAsset.findFirst({
      where: { articleId: asset.articleId },
      orderBy: { version: 'desc' },
    });
    if (newest) {
      await prisma.videoJob.create({
        data: {
          articleId: asset.articleId,
          assetId: newest.id,
          stage: 'script',
          kind: 'regenerate',
          priority: 95,
        },
      });
    }

    return NextResponse.json({ ok: true, message: 'Rejected; a new version has been queued.' });
  } catch (error) {
    const dbError = new DatabaseError('Review action failed', error);
    logError('videos/review:POST', dbError);
    return NextResponse.json({ code: dbError.code, message: dbError.message }, { status: dbError.statusCode });
  }
}
