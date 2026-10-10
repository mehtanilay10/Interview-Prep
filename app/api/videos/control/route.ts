/**
 * Pipeline controls available to reviewers from the app.
 *
 * All of these exist so the operator never has to run SQL or a CLI to recover:
 * re-queue dead-lettered work, requeue everything for an article, read the
 * publish budget, or change it (decision D6: the quota is a runtime setting).
 */
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { isReviewerEmail } from '@/lib/videoReviewer';
import { logError, AuthError, ValidationError, DatabaseError } from '@/lib/errorHandler';
import { VIDEO_PUBLISH_BUDGET_SETTING_KEY } from '@/lib/videoAssets';

const requestSchema = z.discriminatedUnion('action', [
  z.object({ action: z.literal('requeue-job'), jobId: z.string().uuid() }),
  z.object({ action: z.literal('requeue-article'), articleId: z.string().uuid() }),
  z.object({ action: z.literal('set-publish-budget'), budgetPerDay: z.number().int().min(0).max(100_000) }),
]);

async function requireReviewer(): Promise<NextResponse | null> {
  const { auth } = await import('@/auth');
  const session = await auth();
  const email = session?.user?.email;
  if (!email || !isReviewerEmail(email)) {
    const error = new AuthError('You are not an authorised video reviewer');
    logError('videos/control', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }
  return null;
}

export async function GET(): Promise<NextResponse> {
  const denied = await requireReviewer();
  if (denied) return denied;

  try {
    const setting = await prisma.videoPipelineSetting.findUnique({ where: { key: VIDEO_PUBLISH_BUDGET_SETTING_KEY } });
    return NextResponse.json({
      publishBudgetPerDay: setting ? Number(setting.value) : Number(process.env.PIPELINE_PUBLISH_BUDGET_PER_DAY ?? 6),
      settingKey: VIDEO_PUBLISH_BUDGET_SETTING_KEY,
    });
  } catch (error) {
    const dbError = new DatabaseError('Could not read pipeline settings', error);
    logError('videos/control:GET', dbError);
    return NextResponse.json({ code: dbError.code, message: dbError.message }, { status: dbError.statusCode });
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  const denied = await requireReviewer();
  if (denied) return denied;

  let payload: z.infer<typeof requestSchema>;
  try {
    payload = requestSchema.parse(await request.json());
  } catch {
    const error = new ValidationError('Invalid control payload');
    logError('videos/control:POST', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: 400 });
  }

  try {
    if (payload.action === 'requeue-job') {
      const job = await prisma.videoJob.findUnique({ where: { id: payload.jobId } });
      if (!job) return NextResponse.json({ ok: false, message: 'Job not found' }, { status: 404 });
      await prisma.videoJob.update({
        where: { id: payload.jobId },
        data: { state: 'pending', leaseOwner: null, leaseExpiresAt: null, notBefore: null, lastError: null },
      });
      return NextResponse.json({ ok: true, message: 'Job requeued.' });
    }

    if (payload.action === 'requeue-article') {
      const jobs = await prisma.videoJob.findMany({
        where: { articleId: payload.articleId, state: { in: ['failed', 'cancelled'] } },
        select: { id: true },
      });
      if (jobs.length === 0) {
        return NextResponse.json({ ok: false, message: 'No failed jobs for this article.' }, { status: 404 });
      }
      await prisma.videoJob.updateMany({
        where: { id: { in: jobs.map((job) => job.id) } },
        data: { state: 'pending', leaseOwner: null, leaseExpiresAt: null, notBefore: null, lastError: null },
      });
      return NextResponse.json({ ok: true, message: `Requeued ${jobs.length} job(s).` });
    }

    await prisma.videoPipelineSetting.upsert({
      where: { key: VIDEO_PUBLISH_BUDGET_SETTING_KEY },
      update: { value: String(payload.budgetPerDay) },
      create: { key: VIDEO_PUBLISH_BUDGET_SETTING_KEY, value: String(payload.budgetPerDay) },
    });
    return NextResponse.json({ ok: true, message: `Publish budget set to ${payload.budgetPerDay}/day.` });
  } catch (error) {
    const dbError = new DatabaseError('Control action failed', error);
    logError('videos/control:POST', dbError);
    return NextResponse.json({ code: dbError.code, message: dbError.message }, { status: dbError.statusCode });
  }
}
