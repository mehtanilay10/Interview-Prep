'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import type { BookmarkState, BookmarkItem } from '@/types';

const DEFAULT_BOOKMARKS: BookmarkState = { items: [] };

async function fetchBookmarksFromServer(): Promise<BookmarkState | null> {
  try {
    const res = await fetch('/api/bookmarks');
    if (!res.ok) return null;
    const data = await res.json();
    return { items: data.items || [] };
  } catch {
    return null;
  }
}

async function syncBookmarksToServer(bookmarks: BookmarkState): Promise<void> {
  try {
    await fetch('/api/bookmarks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: bookmarks.items }),
    });
  } catch (err) {
    console.warn('[useBookmarks] Failed to sync to server', err);
  }
}

export function useBookmarks() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';
  const isLoggedOut = status === 'unauthenticated';

  const [serverBookmarks, setServerBookmarks] = useState<BookmarkState | null>(null);
  const [mounted, setMounted] = useState(false);
  const [syncedToServer, setSyncedToServer] = useState(false);
  const serverBookmarksRef = useRef(serverBookmarks);
  serverBookmarksRef.current = serverBookmarks;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isLoggedIn || serverBookmarks) return;
    setSyncedToServer(false);
    let cancelled = false;
    fetchBookmarksFromServer().then((data) => {
      if (cancelled) return;
      if (data) {
        setServerBookmarks(data);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [isLoggedIn]); // intentionally ignore serverBookmarks to avoid refetch loops

  useEffect(() => {
    if (!isLoggedIn || !serverBookmarksRef.current || syncedToServer) return;
    syncBookmarksToServer(serverBookmarksRef.current);
    setSyncedToServer(true);
  }, [isLoggedIn, serverBookmarks, syncedToServer]);

  useEffect(() => {
    if (isLoggedOut) {
      setServerBookmarks(null);
      setSyncedToServer(false);
    }
  }, [isLoggedOut]);

  const activeBookmarks = isLoggedIn && serverBookmarks ? serverBookmarks : DEFAULT_BOOKMARKS;

  const setActiveBookmarks = useCallback(
    (updater: BookmarkState | ((prev: BookmarkState) => BookmarkState)) => {
      if (!isLoggedIn) return;
      setServerBookmarks((prev) => {
        const current = prev ?? DEFAULT_BOOKMARKS;
        if (typeof updater === 'function') {
          return (updater as (prev: BookmarkState) => BookmarkState)(current);
        }
        return updater;
      });
    },
    [isLoggedIn]
  );

  const addBookmark = useCallback(
    (item: Omit<BookmarkItem, 'id' | 'addedAt'>) => {
      if (!isLoggedIn) return;
      setActiveBookmarks((prev) => {
        const exists = prev.items.some((b) => b.slug === item.slug && b.type === item.type);
        if (exists) return prev;
        const newItem: BookmarkItem = {
          ...item,
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          addedAt: new Date().toISOString(),
        };
        return { ...prev, items: [...prev.items, newItem] };
      });
    },
    [setActiveBookmarks, isLoggedIn]
  );

  const removeBookmark = useCallback(
    (id: string) => {
      if (!isLoggedIn) return;
      setActiveBookmarks((prev) => ({
        ...prev,
        items: prev.items.filter((b) => b.id !== id),
      }));
    },
    [setActiveBookmarks, isLoggedIn]
  );

  const toggleBookmark = useCallback(
    (item: Omit<BookmarkItem, 'id' | 'addedAt'>) => {
      if (!isLoggedIn) return;
      const exists = activeBookmarks.items.some((b) => b.slug === item.slug && b.type === item.type);
      if (exists) {
        const existing = activeBookmarks.items.find((b) => b.slug === item.slug && b.type === item.type);
        if (existing) {
          removeBookmark(existing.id);
        }
      } else {
        addBookmark(item);
      }
    },
    [activeBookmarks, addBookmark, removeBookmark, isLoggedIn]
  );

  const isBookmarked = useCallback(
    (slug: string, type: BookmarkItem['type']): boolean => {
      return activeBookmarks.items.some((b) => b.slug === slug && b.type === type);
    },
    [activeBookmarks]
  );

  const getBookmarksByType = useCallback(
    (type: BookmarkItem['type']): BookmarkItem[] => {
      return activeBookmarks.items.filter((b) => b.type === type);
    },
    [activeBookmarks]
  );

  const stats = useMemo(() => {
    return {
      total: activeBookmarks.items.length,
      lessons: activeBookmarks.items.filter((b) => b.type === 'lesson').length,
      problems: activeBookmarks.items.filter((b) => b.type === 'problem').length,
      interview: activeBookmarks.items.filter((b) => b.type === 'interview').length,
      cheatsheet: activeBookmarks.items.filter((b) => b.type === 'cheatsheet').length,
    };
  }, [activeBookmarks]);

  const resetBookmarks = useCallback(() => {
    if (!isLoggedIn) return;
    setServerBookmarks(DEFAULT_BOOKMARKS);
    syncBookmarksToServer(DEFAULT_BOOKMARKS);
  }, [isLoggedIn]);

  return {
    bookmarks: activeBookmarks,
    setBookmarks: setActiveBookmarks,
    resetBookmarks,
    addBookmark,
    removeBookmark,
    toggleBookmark,
    isBookmarked,
    getBookmarksByType,
    stats,
    mounted,
    isLoggedIn: isLoggedIn,
    isLoggedOut,
  };
}
