import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { getOrCreateUser, prisma } from '@/lib/prisma';

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

  const queue = rows.map((row) => ({
    courseSlug: row.courseSlug,
    moduleSlug: row.moduleSlug,
    lessonSlug: row.lessonSlug,
    title: row.title,
    queuedAt: row.queuedAt.toISOString(),
  }));

  return NextResponse.json({ queue });
}

export async function POST(request: Request) {
  const databaseUser = await getDatabaseUser();
  if (!databaseUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (
    !body ||
    typeof body.courseSlug !== 'string' ||
    typeof body.moduleSlug !== 'string' ||
    typeof body.lessonSlug !== 'string' ||
    typeof body.title !== 'string'
  ) {
    return NextResponse.json({ error: 'Invalid offline queue payload' }, { status: 400 });
  }

  await prisma.offlineReadingQueue.createMany({
    data: {
      userId: databaseUser.id,
      courseSlug: body.courseSlug,
      moduleSlug: body.moduleSlug,
      lessonSlug: body.lessonSlug,
      title: body.title,
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
  if (
    !body ||
    typeof body !== 'object' ||
    typeof body.courseSlug !== 'string' ||
    typeof body.moduleSlug !== 'string' ||
    typeof body.lessonSlug !== 'string'
  ) {
    return NextResponse.json({ error: 'Invalid offline queue delete payload' }, { status: 400 });
  }

  await prisma.offlineReadingQueue.deleteMany({
    where: {
      userId: databaseUser.id,
      courseSlug: body.courseSlug,
      moduleSlug: body.moduleSlug,
      lessonSlug: body.lessonSlug,
    },
  });

  return NextResponse.json({ ok: true });
}
