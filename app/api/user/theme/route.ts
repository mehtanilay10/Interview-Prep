import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { getOrCreateUser, prisma } from '@/lib/prisma';
import type { UserTheme } from '@prisma/client';

function isUserTheme(value: unknown): value is UserTheme {
  return value === 'light' || value === 'dark' || value === 'system';
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

  const row = await prisma.userThemePreference.findUnique({
    where: { userId: databaseUser.id },
    select: { theme: true },
  });

  return NextResponse.json({ theme: row?.theme ?? 'system' });
}

export async function POST(request: Request) {
  const databaseUser = await getDatabaseUser();
  if (!databaseUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body || !isUserTheme(body.theme)) {
    return NextResponse.json({ error: 'Invalid theme payload' }, { status: 400 });
  }

  await prisma.userThemePreference.upsert({
    where: { userId: databaseUser.id },
    create: {
      userId: databaseUser.id,
      theme: body.theme,
    },
    update: {
      theme: body.theme,
      updatedAt: new Date(),
    },
  });

  return NextResponse.json({ ok: true });
}
