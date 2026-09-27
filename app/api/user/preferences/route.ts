import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { getOrCreateUser, prisma } from '@/lib/prisma';
import type { UserPreference } from '@prisma/client';

type PreferencesPayload = Partial<Pick<UserPreference, 'fontSize' | 'density' | 'codeFontSize' | 'reducedMotion' | 'autoExpandCode' | 'showCompleted' | 'defaultLanding'>>;

function isValidPreference(key: string, value: unknown): boolean {
  if (key === 'reducedMotion' || key === 'autoExpandCode' || key === 'showCompleted') {
    return typeof value === 'boolean';
  }
  if (key === 'fontSize' || key === 'density' || key === 'codeFontSize' || key === 'defaultLanding') {
    return typeof value === 'string' || value === null;
  }
  return false;
}

async function getDatabaseUser() {
  const user = await getCurrentUser();
  if (!user) return null;
  return getOrCreateUser(user);
}

export async function GET() {
  const databaseUser = await getDatabaseUser();
  if (!databaseUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const row = await prisma.userPreference.findUnique({
    where: { userId: databaseUser.id },
  });

  return NextResponse.json({
    fontSize: row?.fontSize ?? null,
    density: row?.density ?? null,
    codeFontSize: row?.codeFontSize ?? null,
    reducedMotion: row?.reducedMotion ?? false,
    autoExpandCode: row?.autoExpandCode ?? true,
    showCompleted: row?.showCompleted ?? true,
    defaultLanding: row?.defaultLanding ?? null,
  });
}

export async function POST(request: Request) {
  const databaseUser = await getDatabaseUser();
  if (!databaseUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => null) as PreferencesPayload | null;
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const allowedKeys: (keyof PreferencesPayload)[] = ['fontSize', 'density', 'codeFontSize', 'reducedMotion', 'autoExpandCode', 'showCompleted', 'defaultLanding'];
  const updates: Record<string, unknown> = {};

  for (const key of allowedKeys) {
    const value = body[key];
    if (value !== undefined && isValidPreference(key, value)) {
      updates[key] = value;
    }
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 });
  }

  const data = await prisma.userPreference.upsert({
    where: { userId: databaseUser.id },
    create: {
      userId: databaseUser.id,
      ...(updates as PreferencesPayload),
    },
    update: {
      ...(updates as PreferencesPayload),
      updatedAt: new Date(),
    },
  });

  return NextResponse.json({
    fontSize: data.fontSize ?? null,
    density: data.density ?? null,
    codeFontSize: data.codeFontSize ?? null,
    reducedMotion: data.reducedMotion ?? false,
    autoExpandCode: data.autoExpandCode ?? true,
    showCompleted: data.showCompleted ?? true,
    defaultLanding: data.defaultLanding ?? null,
  });
}
