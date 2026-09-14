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
  if (
    !body ||
    !isBookmarkType(body.type) ||
    typeof body.slug !== 'string' ||
    typeof body.title !== 'string' ||
    typeof body.courseSlug !== 'string' ||
    typeof body.moduleSlug !== 'string'
  ) {
    return NextResponse.json({ error: 'Invalid bookmark payload' }, { status: 400 });
  }

  await prisma.userBookmark.createMany({
    data: {
      userId: databaseUser.id,
      type: body.type,
      slug: body.slug,
      title: body.title,
      courseSlug: body.courseSlug,
      moduleSlug: body.moduleSlug,
    },
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
  if (body && typeof body.slug === 'string' && typeof body.type === 'string' && isBookmarkType(body.type)) {
    await prisma.userBookmark.deleteMany({
      where: {
        userId: databaseUser.id,
        slug: body.slug,
        type: body.type,
      },
    });
  } else {
    await prisma.userBookmark.deleteMany({ where: { userId: databaseUser.id } });
  }

  return NextResponse.json({ ok: true });
}
