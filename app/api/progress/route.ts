import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { getOrCreateUser, prisma } from '@/lib/prisma';
import type { ProgressCategory } from '@prisma/client';

function isProgressCategory(value: unknown): value is ProgressCategory {
  return value === 'lessons' || value === 'problems' || value === 'interviewQuestions';
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

  const progress: Record<string, Array<{ lessonSlug: string; moduleSlug: string; completedAt: string }>> = {};
  for (const row of rows) {
    if (!progress[row.category]) {
      progress[row.category] = [];
    }
    progress[row.category].push({
      lessonSlug: row.lessonSlug,
      moduleSlug: row.moduleSlug,
      completedAt: row.completedAt.toISOString(),
    });
  }

  return NextResponse.json({ progress });
}

export async function POST(request: Request) {
  const databaseUser = await getDatabaseUser();
  if (!databaseUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid progress payload' }, { status: 400 });
  }

  const entries = Array.isArray((body as any).entries)
    ? (body as any).entries
    : [body];

  const validEntries: Array<{ category: ProgressCategory; lessonSlug: string; moduleSlug: string }> = [];

  for (const entry of entries) {
    if (!entry || typeof entry !== 'object') continue;
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

  if (validEntries.length === 0) {
    return NextResponse.json({ error: 'Invalid progress payload' }, { status: 400 });
  }

  await prisma.userProgress.createMany({
    data: validEntries.map((entry) => ({
      userId: databaseUser.id,
      category: entry.category,
      lessonSlug: entry.lessonSlug,
      moduleSlug: entry.moduleSlug,
    })),
    skipDuplicates: true,
  });

  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const databaseUser = await getDatabaseUser();
  if (!databaseUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await prisma.userProgress.deleteMany({ where: { userId: databaseUser.id } });

  return NextResponse.json({ ok: true });
}
