import { NextResponse } from 'next/server';
import { createApiAuthHandler } from '@/lib/authMiddleware';
import { ValidationError, DatabaseError } from '@/lib/errorHandler';
import { logError } from '@/lib/errorHandler';
import { rateLimit } from '@/lib/rateLimit';
import { validateCsrf, generateCsrfToken } from '@/lib/csrf';
import { BookmarkPayloadSchema } from '@/lib/validators';
import { getCached, setCache } from '@/lib/cache';
import type { BookmarkType } from '@prisma/client';

function isBookmarkType(value: unknown): value is BookmarkType {
  return value === 'lesson' || value === 'problem' || value === 'interview' || value === 'cheatsheet';
}

export const GET = createApiAuthHandler(async (databaseUser) => {
  const { prisma } = await import('@/lib/prisma');

  const cacheKey = `bookmarks:${databaseUser.id}`;
  const cached = getCached<Array<{ id: string; type: string; slug: string; title: string; courseSlug: string; moduleSlug: string; addedAt: string }>>(cacheKey);
  if (cached) {
    return NextResponse.json({ items: cached });
  }

  const rows = await prisma.userBookmark.findMany({
    where: { userId: databaseUser.id },
    orderBy: { addedAt: 'desc' },
    select: {
      id: true,
      type: true,
      slug: true,
      title: true,
      courseSlug: true,
      moduleSlug: true,
      addedAt: true,
    },
  });

  const items = rows.map((row: { id: string; type: BookmarkType; slug: string; title: string; courseSlug: string; moduleSlug: string; addedAt: Date }) => ({
    id: row.id,
    type: row.type,
    slug: row.slug,
    title: row.title,
    courseSlug: row.courseSlug,
    moduleSlug: row.moduleSlug,
    addedAt: row.addedAt.toISOString(),
  }));

  setCache(cacheKey, items, 30_000);
  return NextResponse.json({ items });
});

export const POST = createApiAuthHandler(async (databaseUser, request) => {
  const { prisma } = await import('@/lib/prisma');

  const csrfResult = validateCsrf(request);
  if (!csrfResult.valid) {
    const error = new ValidationError(csrfResult.error ?? 'Invalid CSRF token');
    logError('bookmarks:POST', error);
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
    const error = new ValidationError('Invalid bookmark payload');
    logError('bookmarks:POST', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  const parseResult = BookmarkPayloadSchema.safeParse(rawBody);
  if (!parseResult.success) {
    const error = new ValidationError('Invalid bookmark payload');
    logError('bookmarks:POST', { ...error, details: parseResult.error.issues });
    return NextResponse.json({ code: error.code, message: error.message, details: parseResult.error.issues }, { status: error.statusCode });
  }

  const payload = parseResult.data;
  const items = payload.items ?? ([rawBody] as Array<{ type: BookmarkType; slug: string; title: string; courseSlug: string; moduleSlug: string }>);

  const validItems: Array<{
    type: BookmarkType;
    slug: string;
    title: string;
    courseSlug: string;
    moduleSlug: string;
  }> = [];

  for (const item of items) {
    if (
      isBookmarkType(item.type) &&
      typeof item.slug === 'string' &&
      typeof item.title === 'string' &&
      typeof item.courseSlug === 'string' &&
      typeof item.moduleSlug === 'string'
    ) {
      validItems.push({
        type: item.type,
        slug: item.slug,
        title: item.title,
        courseSlug: item.courseSlug,
        moduleSlug: item.moduleSlug,
      });
    }
  }

  if (validItems.length === 0 && items.length !== 0) {
    const error = new ValidationError('Invalid bookmark payload');
    logError('bookmarks:POST', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  try {
    await prisma.userBookmark.createMany({
      data: validItems.map((item) => ({
        userId: databaseUser.id,
        type: item.type,
        slug: item.slug,
        title: item.title,
        courseSlug: item.courseSlug,
        moduleSlug: item.moduleSlug,
      })),
      skipDuplicates: true,
    });
  } catch (error) {
    const dbError = new DatabaseError('Failed to save bookmarks', error);
    logError('bookmarks:POST', dbError);
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
    logError('bookmarks:DELETE', error);
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
    const error = new ValidationError('Invalid bookmark delete payload');
    logError('bookmarks:DELETE', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  const payload = rawBody as Record<string, unknown>;
  if (
    !rawBody ||
    typeof rawBody !== 'object' ||
    typeof payload.slug !== 'string' ||
    typeof payload.type !== 'string' ||
    !isBookmarkType(payload.type)
  ) {
    const error = new ValidationError('Invalid bookmark delete payload');
    logError('bookmarks:DELETE', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }

  const { slug, type } = payload;

  try {
    await prisma.userBookmark.deleteMany({
      where: {
        userId: databaseUser.id,
        slug,
        type,
      },
    });
  } catch (error) {
    const dbError = new DatabaseError('Failed to delete bookmarks', error);
    logError('bookmarks:DELETE', dbError);
    return NextResponse.json({ code: dbError.code, message: dbError.message }, { status: dbError.statusCode });
  }

  return NextResponse.json({ ok: true });
});
