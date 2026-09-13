import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { sql } from '@/lib/neon';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const rows = await sql`
    SELECT theme FROM user_theme_preferences WHERE user_id = ${user.id}
  `;

  const theme = rows[0]?.theme ?? 'system';
  return NextResponse.json({ theme });
}

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { theme } = await request.json();

  await sql`
    INSERT INTO user_theme_preferences (user_id, theme)
    VALUES (${user.id}, ${theme})
    ON CONFLICT (user_id) DO UPDATE SET theme = EXCLUDED.theme, updated_at = NOW()
  `;

  return NextResponse.json({ ok: true });
}
