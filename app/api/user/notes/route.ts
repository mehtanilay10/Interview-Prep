import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { sql } from '@/lib/neon';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const rows = await sql`
    SELECT course_slug, module_slug, lesson_slug, content, updated_at
    FROM user_lesson_notes
    WHERE user_id = ${user.id}
    ORDER BY updated_at DESC
  `;

  const notes = rows.map((row) => ({
    courseSlug: row.course_slug,
    moduleSlug: row.module_slug,
    lessonSlug: row.lesson_slug,
    content: row.content,
    updatedAt: row.updated_at,
  }));

  return NextResponse.json({ notes });
}

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { courseSlug, moduleSlug, lessonSlug, content } = await request.json();

  await sql`
    INSERT INTO user_lesson_notes (user_id, course_slug, module_slug, lesson_slug, content)
    VALUES (${user.id}, ${courseSlug}, ${moduleSlug}, ${lessonSlug}, ${content})
    ON CONFLICT (user_id, course_slug, module_slug, lesson_slug)
    DO UPDATE SET content = EXCLUDED.content, updated_at = NOW()
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
      DELETE FROM user_lesson_notes
      WHERE user_id = ${user.id}
        AND course_slug = ${courseSlug}
        AND module_slug = ${moduleSlug}
        AND lesson_slug = ${lessonSlug}
    `;
  } else {
    await sql`DELETE FROM user_lesson_notes WHERE user_id = ${user.id}`;
  }

  return NextResponse.json({ ok: true });
}
