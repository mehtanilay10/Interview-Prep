'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

  const [serverNotes, setServerNotes] = useState<LessonNote[] | null>(null);
  const [mounted, setMounted] = useState(false);
  const [syncedToServer, setSyncedToServer] = useState(false);
  const serverNotesRef = useRef(serverNotes);
  serverNotesRef.current = serverNotes;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isLoggedIn || serverNotes) return;
    setSyncedToServer(false);
    let cancelled = false;
    fetchNotesFromServer().then((data) => {
      if (cancelled) return;
      if (data) {
        setServerNotes(data);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [isLoggedIn]); // intentionally ignore serverNotes to avoid refetch loops

  useEffect(() => {
    if (!isLoggedIn || !serverNotesRef.current || syncedToServer) return;
    syncNoteToServer(serverNotesRef.current[serverNotesRef.current.length - 1] as LessonNote);
    setSyncedToServer(true);
  }, [isLoggedIn, serverNotes, syncedToServer]);

  useEffect(() => {
    if (isLoggedOut) {
      setServerNotes(null);
      setSyncedToServer(false);
    }
  }, [isLoggedOut]);

  const activeNotes = isLoggedIn && serverNotes
    ? Object.fromEntries(serverNotes.map((n) => [`${n.courseSlug}:${n.moduleSlug}:${n.lessonSlug}`, n]))
    : {};

  const getNote = useCallback(
    (courseSlug: string, moduleSlug: string, lessonSlug: string): LessonNote | undefined => {
      return activeNotes[`${courseSlug}:${moduleSlug}:${lessonSlug}`];
    },
    [activeNotes]
  );

  const saveNote = useCallback(
    (courseSlug: string, moduleSlug: string, lessonSlug: string, content: string) => {
      if (!isLoggedIn) return;
      const note: LessonNote = {
        courseSlug,
        moduleSlug,
        lessonSlug,
        content,
        updatedAt: new Date().toISOString(),
      };

      setServerNotes((prev) => {
        const next = prev
          ? [...prev.filter((n) => !(n.courseSlug === courseSlug && n.moduleSlug === moduleSlug && n.lessonSlug === lessonSlug)), note]
          : [note];
        syncNoteToServer(note);
        return next;
      });
    },
    [isLoggedIn]
  );

  const deleteNote = useCallback(
    (courseSlug: string, moduleSlug: string, lessonSlug: string) => {
      if (!isLoggedIn) return;
      const key = `${courseSlug}:${moduleSlug}:${lessonSlug}`;
      setServerNotes((prev) => {
        const next = prev ? prev.filter((n) => !(n.courseSlug === courseSlug && n.moduleSlug === moduleSlug && n.lessonSlug === lessonSlug)) : [];
        return next;
      });
      fetch('/api/user/notes', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseSlug, moduleSlug, lessonSlug }),
      }).catch(() => undefined);
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
