import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { getOrCreateUser, prisma } from '@/lib/prisma';
import type { BookmarkType } from '@prisma/client';

function isBookmarkType(value: unknown): value is BookmarkType {
  return value === 'lesson' || value === 'problem' || value === 'interview' || value === 'cheatsheet';
}

async function getDatabaseUser() {
  const user = await getCurrentUser();
  if (!user) {
    return null;
  }

  return getOrCreateUser(user);
}

export async function GET() {
  const databaseUser = await getDatabaseUser();
  if (!databaseUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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

  const items = rows.map((row) => ({
    id: row.id,
    type: row.type,
    slug: row.slug,
    title: row.title,
    courseSlug: row.courseSlug,
    moduleSlug: row.moduleSlug,
    addedAt: row.addedAt.toISOString(),
  }));

  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  const databaseUser = await getDatabaseUser();
  if (!databaseUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid bookmark payload' }, { status: 400 });
  }

  const items = Array.isArray((body as any).items)
    ? (body as any).items
    : [body];

  const validItems: Array<{
    type: BookmarkType;
    slug: string;
    title: string;
    courseSlug: string;
    moduleSlug: string;
  }> = [];

  for (const item of items) {
    if (!item || typeof item !== 'object') continue;
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

  if (validItems.length === 0) {
    return NextResponse.json({ error: 'Invalid bookmark payload' }, { status: 400 });
  }

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

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const databaseUser = await getDatabaseUser();
  if (!databaseUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== 'object' || typeof body.slug !== 'string' || typeof body.type !== 'string' || !isBookmarkType(body.type)) {
    return NextResponse.json({ error: 'Invalid bookmark delete payload' }, { status: 400 });
  }

  await prisma.userBookmark.deleteMany({
    where: {
      userId: databaseUser.id,
      slug: body.slug,
      type: body.type,
    },
  });

  return NextResponse.json({ ok: true });
}
