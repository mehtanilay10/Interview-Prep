import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { sql } from '@/lib/neon';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const rows = await sql`
    SELECT path FROM user_last_path WHERE user_id = ${user.id}
  `;

  const path = rows[0]?.path ?? null;
  return NextResponse.json({ path });
}

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { path } = await request.json();

  await sql`
    INSERT INTO user_last_path (user_id, path)
    VALUES (${user.id}, ${path})
    ON CONFLICT (user_id) DO UPDATE SET path = EXCLUDED.path, updated_at = NOW()
  `;

  return NextResponse.json({ ok: true });
}
