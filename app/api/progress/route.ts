import { NextResponse } from 'next/server';
import { createApiAuthHandler } from '@/lib/authMiddleware';
import { ValidationError, DatabaseError } from '@/lib/errorHandler';
import { logError } from '@/lib/errorHandler';
import { rateLimit } from '@/lib/rateLimit';
import { validateCsrf, generateCsrfToken, setCsrfCookie } from '@/lib/csrf';
import { ProgressPayloadSchema } from '@/lib/validators';
import { getCached, setCache } from '@/lib/cache';
import { lessons } from '@/content/lessons';
import type { ProgressCategory } from '@prisma/client';

function isProgressCategory(value: unknown): value is ProgressCategory {
  return value === 'lessons' || value === 'problems' || value === 'interviewQuestions';
}

function buildLessonHref(category: ProgressCategory, moduleSlug: string, lessonSlug: string): string {
  const lesson = lessons.find((l) => l.moduleSlug === moduleSlug && l.slug === lessonSlug);
  if (!lesson) {
    if (category === 'interviewQuestions') {
      return `/interview-questions/${moduleSlug}/${lessonSlug}`;
    }
    const prefix = category === 'problems' ? 'problems' : 'courses';
    return `/${prefix}/${moduleSlug}/${lessonSlug}`;
  }

  if (category === 'interviewQuestions') {
    return `/interview-questions/${lesson.moduleSlug}/${lesson.slug}`;
  }

  const prefix = category === 'problems' ? 'problems' : 'courses';
  return `/${prefix}/${lesson.courseSlug}/${lesson.moduleSlug}/${lesson.slug}`;
}

export const GET = createApiAuthHandler(async (databaseUser) => {
  const { prisma } = await import('@/lib/prisma');

  const cacheKey = `progress:${databaseUser.id}`;
  const cached = getCached<Record<string, Array<{ lessonSlug: string; moduleSlug: string; completedAt: string; title: string; href: string }>>>(cacheKey);
  if (cached) {
    return NextResponse.json({ progress: cached });
  }

  const rows = await prisma.userProgress.findMany({
    where: { userId: databaseUser.id },
    orderBy: { completedAt: 'desc' },
    select: {
      category: true,
      lessonSlug: true,
      moduleSlug: true,
      completedAt: true,
    },
  });

  const progress: Record<string, Array<{ lessonSlug: string; moduleSlug: string; completedAt: string; title: string; href: string }>> = {};
  for (const row of rows) {
    if (!progress[row.category]) {
      progress[row.category] = [];
    }

    const lesson = lessons.find((l) => l.moduleSlug === row.moduleSlug && l.slug === row.lessonSlug);
    const title = lesson?.title ?? row.lessonSlug.replace(/-/g, ' ');

    progress[row.category].push({
      lessonSlug: row.lessonSlug,
      moduleSlug: row.moduleSlug,
      completedAt: row.completedAt.toISOString(),
      title,
      href: buildLessonHref(row.category, row.moduleSlug, row.lessonSlug),
    });
  }

  setCache(cacheKey, progress, 30_000);
  return NextResponse.json({ progress });
});

export const POST = createApiAuthHandler(async (databaseUser, request) => {
  const { prisma } = await import('@/lib/prisma');

  const csrfResult = validateCsrf(request);
  if (!csrfResult.valid) {
    const error = new ValidationError(csrfResult.error ?? 'Invalid CSRF token');
    logError('progress:POST', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  const rateLimitResult = rateLimit(request, { limit: 30, windowMs: 60_000 });
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
    const error = new ValidationError('Invalid progress payload');
    logError('progress:POST', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  const parseResult = ProgressPayloadSchema.safeParse(rawBody);
  if (!parseResult.success) {
    const error = new ValidationError('Invalid progress payload');
    logError('progress:POST', { ...error, details: parseResult.error.issues });
    return NextResponse.json({ code: error.code, message: error.message, details: parseResult.error.issues }, { status: error.statusCode });
  }

  const payload = parseResult.data;
  const entries = payload.entries ?? [rawBody] as Array<{ category: ProgressCategory; lessonSlug: string; moduleSlug: string }>;

  const validEntries: Array<{ category: ProgressCategory; lessonSlug: string; moduleSlug: string }> = [];

  for (const entry of entries) {
    if (
      isProgressCategory(entry.category) &&
      typeof entry.lessonSlug === 'string' &&
      typeof entry.moduleSlug === 'string'
    ) {
      validEntries.push({
        category: entry.category,
        lessonSlug: entry.lessonSlug,
        moduleSlug: entry.moduleSlug,
      });
    }
  }

  if (validEntries.length === 0 && entries.length !== 0) {
    const error = new ValidationError('Invalid progress payload');
    logError('progress:POST', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  try {
    await prisma.userProgress.createMany({
      data: validEntries.map((entry) => ({
        userId: databaseUser.id,
        category: entry.category,
        lessonSlug: entry.lessonSlug,
        moduleSlug: entry.moduleSlug,
      })),
      skipDuplicates: true,
    });
  } catch (error) {
    const dbError = new DatabaseError('Failed to save progress', error);
    logError('progress:POST', dbError);
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
    logError('progress:DELETE', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  const rateLimitResult = rateLimit(request, { limit: 10, windowMs: 60_000 });
  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      { code: 'RATE_LIMITED', message: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil((rateLimitResult.retryAfterMs ?? 1000) / 1000)) } }
    );
  }

  try {
    await prisma.userProgress.deleteMany({ where: { userId: databaseUser.id } });
  } catch (error) {
    const dbError = new DatabaseError('Failed to delete progress', error);
    logError('progress:DELETE', dbError);
    return NextResponse.json({ code: dbError.code, message: dbError.message }, { status: dbError.statusCode });
  }

  return NextResponse.json({ ok: true });
});
