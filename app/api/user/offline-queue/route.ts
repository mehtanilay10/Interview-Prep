import { NextResponse } from 'next/server';
import { createApiAuthHandler } from '@/lib/authMiddleware';
import { ValidationError, DatabaseError } from '@/lib/errorHandler';
import { logError } from '@/lib/errorHandler';
import { rateLimit } from '@/lib/rateLimit';
import { validateCsrf, generateCsrfToken } from '@/lib/csrf';
import { OfflineQueuePayloadSchema } from '@/lib/validators';

export const GET = createApiAuthHandler(async (databaseUser) => {
  const { prisma } = await import('@/lib/prisma');

  const rows = await prisma.offlineReadingQueue.findMany({
    where: { userId: databaseUser.id },
    orderBy: { queuedAt: 'desc' },
    select: {
      courseSlug: true,
      moduleSlug: true,
      lessonSlug: true,
      title: true,
      queuedAt: true,
    },
  });

  const queue = rows.map((row: { courseSlug: string; moduleSlug: string; lessonSlug: string; title: string; queuedAt: Date }) => ({
    courseSlug: row.courseSlug,
    moduleSlug: row.moduleSlug,
    lessonSlug: row.lessonSlug,
    title: row.title,
    queuedAt: row.queuedAt.toISOString(),
  }));

  return NextResponse.json({ queue });
});

export const POST = createApiAuthHandler(async (databaseUser, request) => {
  const { prisma } = await import('@/lib/prisma');

  const csrfResult = validateCsrf(request);
  if (!csrfResult.valid) {
    const error = new ValidationError(csrfResult.error ?? 'Invalid CSRF token');
    logError('offline-queue:POST', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  const rateLimitResult = rateLimit(request, { limit: 20, windowMs: 60_000 });
  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      { code: 'RATE_LIMITED', message: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil((rateLimitResult.retryAfterMs ?? 1000) / 1000)) } }
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    const error = new ValidationError('Invalid offline queue payload');
    logError('offline-queue:POST', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  const parseResult = OfflineQueuePayloadSchema.safeParse(rawBody);
  if (!parseResult.success) {
    const error = new ValidationError('Invalid offline queue payload');
    logError('offline-queue:POST', { ...error, details: parseResult.error.issues });
    return NextResponse.json({ code: error.code, message: error.message, details: parseResult.error.issues }, { status: error.statusCode });
  }

  const payload = parseResult.data;
  const entries = payload.entries ?? ([rawBody] as Array<{ courseSlug: string; moduleSlug: string; lessonSlug: string; title: string }>);

  const validEntries: Array<{ courseSlug: string; moduleSlug: string; lessonSlug: string; title: string }> = [];

  for (const entry of entries) {
    if (
      typeof entry.courseSlug === 'string' &&
      typeof entry.moduleSlug === 'string' &&
      typeof entry.lessonSlug === 'string' &&
      typeof entry.title === 'string'
    ) {
      validEntries.push({
        courseSlug: entry.courseSlug,
        moduleSlug: entry.moduleSlug,
        lessonSlug: entry.lessonSlug,
        title: entry.title,
      });
    }
  }

  if (validEntries.length === 0 && entries.length !== 0) {
    const error = new ValidationError('Invalid offline queue payload');
    logError('offline-queue:POST', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  try {
    await prisma.offlineReadingQueue.createMany({
      data: validEntries.map((entry) => ({
        userId: databaseUser.id,
        courseSlug: entry.courseSlug,
        moduleSlug: entry.moduleSlug,
        lessonSlug: entry.lessonSlug,
        title: entry.title,
      })),
      skipDuplicates: true,
    });
  } catch (error) {
    const dbError = new DatabaseError('Failed to save offline queue', error);
    logError('offline-queue:POST', dbError);
    return NextResponse.json({ code: dbError.code, message: dbError.message }, { status: dbError.statusCode });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set('interview_prep_csrf', generateCsrfToken(), {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
  });
  return response;
});

export const DELETE = createApiAuthHandler(async (databaseUser, request) => {
  const { prisma } = await import('@/lib/prisma');

  const csrfResult = validateCsrf(request);
  if (!csrfResult.valid) {
    const error = new ValidationError(csrfResult.error ?? 'Invalid CSRF token');
    logError('offline-queue:DELETE', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  const rateLimitResult = rateLimit(request, { limit: 10, windowMs: 60_000 });
  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      { code: 'RATE_LIMITED', message: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil((rateLimitResult.retryAfterMs ?? 1000) / 1000)) } }
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    const error = new ValidationError('Invalid offline queue delete payload');
    logError('offline-queue:DELETE', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  const payload = rawBody as Record<string, unknown>;
  if (
    !rawBody ||
    typeof rawBody !== 'object' ||
    typeof payload.courseSlug !== 'string' ||
    typeof payload.moduleSlug !== 'string' ||
    typeof payload.lessonSlug !== 'string'
  ) {
    const error = new ValidationError('Invalid offline queue delete payload');
    logError('offline-queue:DELETE', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  const { courseSlug, moduleSlug, lessonSlug } = payload;

  try {
    await prisma.offlineReadingQueue.deleteMany({
      where: {
        userId: databaseUser.id,
        courseSlug,
        moduleSlug,
        lessonSlug,
      },
    });
  } catch (error) {
    const dbError = new DatabaseError('Failed to delete offline queue item', error);
    logError('offline-queue:DELETE', dbError);
    return NextResponse.json({ code: dbError.code, message: dbError.message }, { status: dbError.statusCode });
  }

  return NextResponse.json({ ok: true });
});
