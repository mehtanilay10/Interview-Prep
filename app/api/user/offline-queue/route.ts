import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { sql } from '@/lib/neon';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const rows = await sql`
    SELECT course_slug, module_slug, lesson_slug, title, queued_at
    FROM offline_reading_queue
    WHERE user_id = ${user.id}
    ORDER BY queued_at DESC
  `;

  const queue = rows.map((row) => ({
    courseSlug: row.course_slug,
    moduleSlug: row.module_slug,
    lessonSlug: row.lesson_slug,
    title: row.title,
    queuedAt: row.queued_at,
  }));

  return NextResponse.json({ queue });
}

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { courseSlug, moduleSlug, lessonSlug, title } = await request.json();

  await sql`
    INSERT INTO offline_reading_queue (user_id, course_slug, module_slug, lesson_slug, title)
    VALUES (${user.id}, ${courseSlug}, ${moduleSlug}, ${lessonSlug}, ${title})
    ON CONFLICT (user_id, course_slug, module_slug, lesson_slug) DO NOTHING
  `;

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { courseSlug, moduleSlug, lessonSlug } = await request.json().catch(() => ({
    courseSlug: null,
    moduleSlug: null,
    lessonSlug: null,
  }));

  if (courseSlug && moduleSlug && lessonSlug) {
    await sql`
      DELETE FROM offline_reading_queue
      WHERE user_id = ${user.id}
        AND course_slug = ${courseSlug}
        AND module_slug = ${moduleSlug}
        AND lesson_slug = ${lessonSlug}
    `;
  } else {
    await sql`DELETE FROM offline_reading_queue WHERE user_id = ${user.id}`;
  }

  return NextResponse.json({ ok: true });
}
