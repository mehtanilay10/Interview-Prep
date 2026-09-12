'use client';

import { useCallback, useMemo, useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { BookmarkState, BookmarkItem } from '@/types';

const STORAGE_KEY = 'interview_prep_bookmarks';

const DEFAULT_BOOKMARKS: BookmarkState = {
  items: [],
};

export function useBookmarks() {
  const [bookmarks, setBookmarks, resetBookmarks] = useLocalStorage<BookmarkState>(
    STORAGE_KEY,
    DEFAULT_BOOKMARKS
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const addBookmark = useCallback(
    (item: Omit<BookmarkItem, 'id' | 'addedAt'>) => {
      setBookmarks((prev) => {
        const exists = prev.items.some((b) => b.slug === item.slug && b.type === item.type);
        if (exists) return prev;
        const newItem: BookmarkItem = {
          ...item,
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          addedAt: new Date().toISOString(),
        };
        return {
          ...prev,
          items: [...prev.items, newItem],
        };
      });
    },
    [setBookmarks]
  );

  const removeBookmark = useCallback(
    (id: string) => {
      setBookmarks((prev) => ({
        ...prev,
        items: prev.items.filter((b) => b.id !== id),
      }));
    },
    [setBookmarks]
  );

  const toggleBookmark = useCallback(
    (item: Omit<BookmarkItem, 'id' | 'addedAt'>) => {
      const exists = bookmarks.items.some((b) => b.slug === item.slug && b.type === item.type);
      if (exists) {
        const existing = bookmarks.items.find((b) => b.slug === item.slug && b.type === item.type);
        if (existing) {
          removeBookmark(existing.id);
        }
      } else {
        addBookmark(item);
      }
    },
    [bookmarks, addBookmark, removeBookmark]
  );

  const isBookmarked = useCallback(
    (slug: string, type: BookmarkItem['type']): boolean => {
      return bookmarks.items.some((b) => b.slug === slug && b.type === type);
    },
    [bookmarks]
  );

  const getBookmarksByType = useCallback(
    (type: BookmarkItem['type']): BookmarkItem[] => {
      return bookmarks.items.filter((b) => b.type === type);
    },
    [bookmarks]
  );

  const stats = useMemo(() => {
    return {
      total: bookmarks.items.length,
      lessons: bookmarks.items.filter((b) => b.type === 'lesson').length,
      problems: bookmarks.items.filter((b) => b.type === 'problem').length,
      interview: bookmarks.items.filter((b) => b.type === 'interview').length,
      cheatsheet: bookmarks.items.filter((b) => b.type === 'cheatsheet').length,
    };
  }, [bookmarks]);

  const exportBookmarks = useCallback(() => {
    const data = JSON.stringify(bookmarks, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `interview-prep-bookmarks-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [bookmarks]);

  const importBookmarks = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target?.result as string) as BookmarkState;
          if (imported && Array.isArray(imported.items)) {
            setBookmarks(imported);
            alert('Bookmarks imported successfully!');
          } else {
            alert('Invalid bookmarks file.');
          }
        } catch {
          alert('Failed to parse bookmarks file.');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }, [setBookmarks]);

  return {
    bookmarks,
    setBookmarks,
    resetBookmarks,
    addBookmark,
    removeBookmark,
    toggleBookmark,
    isBookmarked,
    getBookmarksByType,
    stats,
    mounted,
    exportBookmarks,
    importBookmarks,
  };
}
