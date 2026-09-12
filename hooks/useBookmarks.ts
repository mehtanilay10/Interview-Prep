'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useLocalStorage } from './useLocalStorage';
import type { BookmarkState, BookmarkItem } from '@/types';

const STORAGE_KEY = 'interview_prep_bookmarks';

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

  const [localBookmarks, setLocalBookmarks, resetLocal] = useLocalStorage<BookmarkState>(
    STORAGE_KEY,
    DEFAULT_BOOKMARKS
  );
  const [serverBookmarks, setServerBookmarks] = useState<BookmarkState | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeBookmarks = isLoggedIn && serverBookmarks ? serverBookmarks : localBookmarks;
  const setActiveBookmarks = isLoggedIn
    ? (updater: BookmarkState | ((prev: BookmarkState) => BookmarkState)) => {
        const next = typeof updater === 'function' ? updater(activeBookmarks) : updater;
        setServerBookmarks(next);
        syncBookmarksToServer(next);
      }
    : setLocalBookmarks;

  useEffect(() => {
    if (isLoggedIn && !serverBookmarks) {
      fetchBookmarksFromServer().then((data) => {
        if (data) {
          setServerBookmarks(data);
        }
      });
    }
  }, [isLoggedIn, serverBookmarks]);

  useEffect(() => {
    if (isLoggedIn && localBookmarks !== DEFAULT_BOOKMARKS) {
      const hasLocalData = localBookmarks.items.length > 0;
      if (hasLocalData) {
        syncBookmarksToServer(localBookmarks);
      }
    }
  }, [isLoggedIn, localBookmarks]);

  const addBookmark = useCallback(
    (item: Omit<BookmarkItem, 'id' | 'addedAt'>) => {
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
    [setActiveBookmarks]
  );

  const removeBookmark = useCallback(
    (id: string) => {
      setActiveBookmarks((prev) => ({
        ...prev,
        items: prev.items.filter((b) => b.id !== id),
      }));
    },
    [setActiveBookmarks]
  );

  const toggleBookmark = useCallback(
    (item: Omit<BookmarkItem, 'id' | 'addedAt'>) => {
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
    [activeBookmarks, addBookmark, removeBookmark]
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
    setLocalBookmarks(DEFAULT_BOOKMARKS);
    if (isLoggedIn) {
      setServerBookmarks(DEFAULT_BOOKMARKS);
      syncBookmarksToServer(DEFAULT_BOOKMARKS);
    }
  }, [setLocalBookmarks, isLoggedIn]);

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
