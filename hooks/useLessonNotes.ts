'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';

type LessonNote = {
  courseSlug: string;
  moduleSlug: string;
  lessonSlug: string;
  content: string;
  updatedAt: string;
};

async function fetchNotesFromServer(): Promise<LessonNote[] | null> {
  try {
    const res = await fetch('/api/user/notes');
    if (!res.ok) return null;
    const data = await res.json();
    return data.notes ?? [];
  } catch {
    return null;
  }
}

async function syncNoteToServer(note: LessonNote): Promise<void> {
  try {
    await fetch('/api/user/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
  } catch (err) {
    console.warn('[useLessonNotes] Failed to sync to server', err);
  }
}

export function useLessonNotes() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';
  const isLoggedOut = status === 'unauthenticated';

  const [localNotes, setLocalNotes] = useState<Record<string, LessonNote>>({});
  const [serverNotes, setServerNotes] = useState<LessonNote[] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem('interview_prep_lesson_notes');
      if (stored) {
        const parsed = JSON.parse(stored) as LessonNote[];
        const map: Record<string, LessonNote> = {};
        for (const note of parsed) {
          map[`${note.courseSlug}:${note.moduleSlug}:${note.lessonSlug}`] = note;
        }
        setLocalNotes(map);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && !serverNotes) {
      fetchNotesFromServer().then((data) => {
        if (data) {
          const map: Record<string, LessonNote> = {};
          for (const note of data) {
            map[`${note.courseSlug}:${note.moduleSlug}:${note.lessonSlug}`] = note;
          }
          setServerNotes(data);
        }
      });
    }
  }, [isLoggedIn, serverNotes]);

  const activeNotes = isLoggedIn && serverNotes
    ? Object.fromEntries(serverNotes.map((n) => [`${n.courseSlug}:${n.moduleSlug}:${n.lessonSlug}`, n]))
    : localNotes;

  const getNote = useCallback(
    (courseSlug: string, moduleSlug: string, lessonSlug: string): LessonNote | undefined => {
      return activeNotes[`${courseSlug}:${moduleSlug}:${lessonSlug}`];
    },
    [activeNotes]
  );

  const saveNote = useCallback(
    (courseSlug: string, moduleSlug: string, lessonSlug: string, content: string) => {
      const note: LessonNote = {
        courseSlug,
        moduleSlug,
        lessonSlug,
        content,
        updatedAt: new Date().toISOString(),
      };

      if (isLoggedIn) {
        setServerNotes((prev) => {
          const next = prev ? [...prev.filter((n) => !(n.courseSlug === courseSlug && n.moduleSlug === moduleSlug && n.lessonSlug === lessonSlug)), note] : [note];
          syncNoteToServer(note);
          return next;
        });
      } else {
        setLocalNotes((prev) => {
          const next = { ...prev, [`${courseSlug}:${moduleSlug}:${lessonSlug}`]: note };
          try {
            localStorage.setItem('interview_prep_lesson_notes', JSON.stringify(Object.values(next)));
          } catch {
            // ignore
          }
          return next;
        });
      }
    },
    [isLoggedIn]
  );

  const deleteNote = useCallback(
    (courseSlug: string, moduleSlug: string, lessonSlug: string) => {
      const key = `${courseSlug}:${moduleSlug}:${lessonSlug}`;

      if (isLoggedIn) {
        setServerNotes((prev) => {
          const next = prev ? prev.filter((n) => !(n.courseSlug === courseSlug && n.moduleSlug === moduleSlug && n.lessonSlug === lessonSlug)) : [];
          return next;
        });
        fetch('/api/user/notes', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ courseSlug, moduleSlug, lessonSlug }),
        }).catch(() => undefined);
      } else {
        setLocalNotes((prev) => {
          const next = { ...prev };
          delete next[key];
          try {
            localStorage.setItem('interview_prep_lesson_notes', JSON.stringify(Object.values(next)));
          } catch {
            // ignore
          }
          return next;
        });
      }
    },
    [isLoggedIn]
  );

  return {
    getNote,
    saveNote,
    deleteNote,
    mounted,
    isLoggedIn,
    isLoggedOut,
  };
}
