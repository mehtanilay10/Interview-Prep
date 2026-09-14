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

  const row = await prisma.userLastPath.findUnique({
    where: { userId: databaseUser.id },
    select: { path: true },
  });

  return NextResponse.json({ path: row?.path ?? null });
}

export async function POST(request: Request) {
  const databaseUser = await getDatabaseUser();
  if (!databaseUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body.path !== 'string' || body.path.length === 0) {
    return NextResponse.json({ error: 'Invalid path payload' }, { status: 400 });
  }

  await prisma.userLastPath.upsert({
    where: { userId: databaseUser.id },
    create: {
      userId: databaseUser.id,
      path: body.path,
    },
    update: {
      path: body.path,
      updatedAt: new Date(),
    },
  });

  return NextResponse.json({ ok: true });
}
