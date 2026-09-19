'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

interface BookmarkContextValue {
  bookmarks: BookmarkState;
  setBookmarks: (updater: BookmarkState | ((prev: BookmarkState) => BookmarkState)) => void;
  resetBookmarks: () => void;
  addBookmark: (item: Omit<BookmarkItem, 'id' | 'addedAt'>) => void;
  removeBookmark: (id: string) => void;
  toggleBookmark: (item: Omit<BookmarkItem, 'id' | 'addedAt'>) => void;
  isBookmarked: (slug: string, type: BookmarkItem['type']) => boolean;
  getBookmarksByType: (type: BookmarkItem['type']) => BookmarkItem[];
  stats: {
    total: number;
    lessons: number;
    problems: number;
    interview: number;
    cheatsheet: number;
  };
  mounted: boolean;
  isLoggedIn: boolean;
  isLoggedOut: boolean;
}

const BookmarkContext = React.createContext<BookmarkContextValue | null>(null);

export function useBookmarks(): BookmarkContextValue {
  const context = React.useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
}

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';
  const isLoggedOut = status === 'unauthenticated';

  const [serverBookmarks, setServerBookmarks] = useState<BookmarkState | null>(null);
  const [mounted, setMounted] = useState(false);
  const [syncedToServer, setSyncedToServer] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const serverBookmarksRef = useRef(serverBookmarks);
  serverBookmarksRef.current = serverBookmarks;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isLoggedIn || serverBookmarks) return;
    setIsInitialLoad(true);
    setSyncedToServer(false);
    let cancelled = false;
    fetchBookmarksFromServer().then((data) => {
      if (cancelled) return;
      if (data) {
        setServerBookmarks(data);
      }
      setIsInitialLoad(false);
    });
    return () => {
      cancelled = true;
    };
  }, [isLoggedIn, serverBookmarks]);

  useEffect(() => {
    if (!isLoggedIn || !serverBookmarksRef.current || isInitialLoad) return;
    syncBookmarksToServer(serverBookmarksRef.current);
  }, [isLoggedIn, serverBookmarks, isInitialLoad]);

  useEffect(() => {
    if (isLoggedOut) {
      setServerBookmarks(null);
      setSyncedToServer(false);
      setIsInitialLoad(true);
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

  const value = useMemo(
    () => ({
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
      isLoggedIn,
      isLoggedOut,
    }),
    [
      activeBookmarks,
      setActiveBookmarks,
      resetBookmarks,
      addBookmark,
      removeBookmark,
      toggleBookmark,
      isBookmarked,
      getBookmarksByType,
      stats,
      mounted,
      isLoggedIn,
      isLoggedOut,
    ]
  );

  return <BookmarkContext.Provider value={value}>{children}</BookmarkContext.Provider>;
}
