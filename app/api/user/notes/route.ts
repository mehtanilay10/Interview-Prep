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

  const rows = await prisma.userLessonNote.findMany({
    where: { userId: databaseUser.id },
    orderBy: { updatedAt: 'desc' },
    select: {
      courseSlug: true,
      moduleSlug: true,
      lessonSlug: true,
      content: true,
      updatedAt: true,
    },
  });

  const notes = rows.map((row) => ({
    courseSlug: row.courseSlug,
    moduleSlug: row.moduleSlug,
    lessonSlug: row.lessonSlug,
    content: row.content,
    updatedAt: row.updatedAt.toISOString(),
  }));

  return NextResponse.json({ notes });
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
    typeof body.content !== 'string'
  ) {
    return NextResponse.json({ error: 'Invalid note payload' }, { status: 400 });
  }

  await prisma.userLessonNote.upsert({
    where: {
      userId_courseSlug_moduleSlug_lessonSlug: {
        userId: databaseUser.id,
        courseSlug: body.courseSlug,
        moduleSlug: body.moduleSlug,
        lessonSlug: body.lessonSlug,
      },
    },
    create: {
      userId: databaseUser.id,
      courseSlug: body.courseSlug,
      moduleSlug: body.moduleSlug,
      lessonSlug: body.lessonSlug,
      content: body.content,
    },
    update: {
      content: body.content,
      updatedAt: new Date(),
    },
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
    return NextResponse.json({ error: 'Invalid note delete payload' }, { status: 400 });
  }

  await prisma.userLessonNote.deleteMany({
    where: {
      userId: databaseUser.id,
      courseSlug: body.courseSlug,
      moduleSlug: body.moduleSlug,
      lessonSlug: body.lessonSlug,
    },
  });

  return NextResponse.json({ ok: true });
}
