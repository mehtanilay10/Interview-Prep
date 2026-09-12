import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { sql } from '@/lib/neon';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const rows = await sql`
    SELECT id, type, slug, title, course_slug, module_slug, added_at
    FROM user_bookmarks
    WHERE user_id = ${user.id}
    ORDER BY added_at DESC
  `;

  const items = rows.map((row) => ({
    id: row.id,
    type: row.type,
    slug: row.slug,
    title: row.title,
    courseSlug: row.course_slug,
    moduleSlug: row.module_slug,
    addedAt: row.added_at,
  }));

  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { type, slug, title, courseSlug, moduleSlug } = await request.json();

  await sql`
    INSERT INTO user_bookmarks (user_id, type, slug, title, course_slug, module_slug)
    VALUES (${user.id}, ${type}, ${slug}, ${title}, ${courseSlug}, ${moduleSlug})
    ON CONFLICT (user_id, type, slug) DO NOTHING
  `;

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { slug, type } = await request.json().catch(() => ({ slug: null, type: null }));

  if (slug && type) {
    await sql`
      DELETE FROM user_bookmarks
      WHERE user_id = ${user.id} AND slug = ${slug} AND type = ${type}
    `;
  } else {
    await sql`DELETE FROM user_bookmarks WHERE user_id = ${user.id}`;
  }

  return NextResponse.json({ ok: true });
}
