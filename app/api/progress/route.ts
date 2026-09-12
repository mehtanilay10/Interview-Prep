import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { sql } from '@/lib/neon';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const rows = await sql`
    SELECT category, lesson_slug, module_slug, completed_at
    FROM user_progress
    WHERE user_id = ${user.id}
    ORDER BY completed_at DESC
  `;

  const progress: Record<string, Array<{ lessonSlug: string; moduleSlug: string; completedAt: string }>> = {};
  for (const row of rows) {
    const cat = row.category as string;
    if (!progress[cat]) progress[cat] = [];
    progress[cat].push({
      lessonSlug: row.lesson_slug,
      moduleSlug: row.module_slug,
      completedAt: row.completed_at,
    });
  }

  return NextResponse.json({ progress });
}

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { category, lessonSlug, moduleSlug } = await request.json();

  await sql`
    INSERT INTO user_progress (user_id, category, lesson_slug, module_slug)
    VALUES (${user.id}, ${category}, ${lessonSlug}, ${moduleSlug})
    ON CONFLICT (user_id, category, lesson_slug) DO NOTHING
  `;

  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await sql`DELETE FROM user_progress WHERE user_id = ${user.id}`;

  return NextResponse.json({ ok: true });
}
