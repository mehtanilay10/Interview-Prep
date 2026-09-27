'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { StickyNote } from 'lucide-react';
import { cn, formatRelativeTime } from '@/lib/utils';
import { getLessonBySlug } from '@/lib/content';

interface LessonNote {
  courseSlug: string;
  moduleSlug: string;
  lessonSlug: string;
  content: string;
  updatedAt: string;
}

interface ResolvedNote extends LessonNote {
  title: string;
  href: string;
}

interface NotesClientProps {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

interface ResolvedNote extends LessonNote {
  title: string;
  href: string;
}

function resolveLesson(note: LessonNote): { title: string; href: string } {
  const lesson = getLessonBySlug(note.lessonSlug, note.courseSlug);
  if (lesson) {
    if (note.courseSlug === 'interview-qa') {
      return { title: lesson.title, href: `/interview-questions/${note.moduleSlug}/${note.lessonSlug}` };
    }
    if (note.courseSlug.startsWith('problem')) {
      return { title: lesson.title, href: `/problems/${note.courseSlug}/${note.moduleSlug}/${note.lessonSlug}` };
    }
    return { title: lesson.title, href: `/courses/${note.courseSlug}/${note.moduleSlug}/${note.lessonSlug}` };
  }
  return {
    title: note.lessonSlug.replace(/-/g, ' '),
    href: note.courseSlug === 'interview-qa'
      ? `/interview-questions/${note.moduleSlug}/${note.lessonSlug}`
      : note.courseSlug.startsWith('problem')
        ? `/problems/${note.courseSlug}/${note.moduleSlug}/${note.lessonSlug}`
        : `/courses/${note.courseSlug}/${note.moduleSlug}/${note.lessonSlug}`,
  };
}

export function NotesClient({ user }: NotesClientProps) {
  const [notes, setNotes] = useState<LessonNote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/user/notes');
        if (res.ok) {
          const data = await res.json();
          setNotes(data.notes || []);
        }
      } catch (err) {
        console.error('Failed to fetch notes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const resolvedNotes = notes.slice(0, 50).map((note) => ({
    ...note,
    ...resolveLesson(note),
  })) as ResolvedNote[];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-fg-default">Notes</h1>
        <p className="mt-2 text-fg-muted">
          Your lesson notes and study reminders.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-canvas p-6">
        <div className="flex items-center gap-2 mb-4">
          <StickyNote className="h-5 w-5 text-accent-fg" aria-hidden="true" />
          <h2 className="text-lg font-semibold text-fg-default">Your Notes</h2>
        </div>
        {loading ? (
          <div className="space-y-2">
            <div className="h-16 animate-pulse rounded-lg bg-canvas-inset" />
            <div className="h-16 animate-pulse rounded-lg bg-canvas-inset" />
          </div>
        ) : resolvedNotes.length === 0 ? (
          <p className="text-sm text-fg-muted">No notes yet. Take notes while learning to remember key concepts.</p>
        ) : (
          <ul className="space-y-2">
            {resolvedNotes.map((note, idx) => (
              <li
                key={`${note.courseSlug}-${note.moduleSlug}-${note.lessonSlug}-${idx}`}
                className="rounded-lg border border-border bg-canvas-subtle px-3 py-2 transition-colors hover:border-accent-fg"
              >
                <Link href={note.href} className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-fg-default">{note.title}</p>
                  <p className="text-xs text-fg-muted line-clamp-2">{note.content}</p>
                  <span className="text-xs text-fg-subtle">{formatRelativeTime(note.updatedAt)}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
