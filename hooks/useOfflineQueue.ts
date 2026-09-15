'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';

type OfflineQueueItem = {
  courseSlug: string;
  moduleSlug: string;
  lessonSlug: string;
  title: string;
  queuedAt: string;
};

async function fetchQueueFromServer(): Promise<OfflineQueueItem[] | null> {
  try {
    const res = await fetch('/api/user/offline-queue');
    if (!res.ok) return null;
    const data = await res.json();
    return data.queue ?? [];
  } catch {
    return null;
  }
}

async function syncQueueToServer(item: OfflineQueueItem): Promise<void> {
  try {
    await fetch('/api/user/offline-queue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
  } catch (err) {
    console.warn('[useOfflineQueue] Failed to sync to server', err);
  }
}

export function useOfflineQueue() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';
  const isLoggedOut = status === 'unauthenticated';

  const [serverQueue, setServerQueue] = useState<OfflineQueueItem[] | null>(null);
  const [mounted, setMounted] = useState(false);
  const [syncedToServer, setSyncedToServer] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const serverQueueRef = useRef(serverQueue);
  serverQueueRef.current = serverQueue;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isLoggedIn || serverQueue) return;
    setIsInitialLoad(true);
    setSyncedToServer(false);
    let cancelled = false;
    fetchQueueFromServer().then((data) => {
      if (cancelled) return;
      if (data) {
        setServerQueue(data);
      }
      setIsInitialLoad(false);
    });
    return () => {
      cancelled = true;
    };
  }, [isLoggedIn]); // intentionally ignore serverQueue to avoid refetch loops

  useEffect(() => {
    if (!isLoggedIn || !serverQueueRef.current || isInitialLoad) return;
    syncQueueToServer(serverQueueRef.current[serverQueueRef.current.length - 1] as OfflineQueueItem);
    setSyncedToServer(true);
  }, [isLoggedIn, serverQueue, isInitialLoad]);

  useEffect(() => {
    if (isLoggedOut) {
      setServerQueue(null);
      setSyncedToServer(false);
      setIsInitialLoad(true);
    }
  }, [isLoggedOut]);

  const activeQueue = isLoggedIn && serverQueue ? serverQueue : [];

  const isQueued = useCallback(
    (courseSlug: string, moduleSlug: string, lessonSlug: string): boolean => {
      return activeQueue.some((item) => item.courseSlug === courseSlug && item.moduleSlug === moduleSlug && item.lessonSlug === lessonSlug);
    },
    [activeQueue]
  );

  const addToQueue = useCallback(
    (courseSlug: string, moduleSlug: string, lessonSlug: string, title: string) => {
      if (!isLoggedIn) return;
      const item: OfflineQueueItem = {
        courseSlug,
        moduleSlug,
        lessonSlug,
        title,
        queuedAt: new Date().toISOString(),
      };

      setServerQueue((prev) => {
        const next = prev
          ? [...prev.filter((q) => !(q.courseSlug === courseSlug && q.moduleSlug === moduleSlug && q.lessonSlug === lessonSlug)), item]
          : [item];
        syncQueueToServer(item);
        return next;
      });
    },
    [isLoggedIn]
  );

  const removeFromQueue = useCallback(
    (courseSlug: string, moduleSlug: string, lessonSlug: string) => {
      if (!isLoggedIn) return;
      setServerQueue((prev) => {
        const next = prev
          ? prev.filter((q) => !(q.courseSlug === courseSlug && q.moduleSlug === moduleSlug && q.lessonSlug === lessonSlug))
          : [];
        return next;
      });
      fetch('/api/user/offline-queue', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseSlug, moduleSlug, lessonSlug }),
      }).catch(() => undefined);
    },
    [isLoggedIn]
  );

  return {
    queue: activeQueue,
    isQueued,
    addToQueue,
    removeFromQueue,
    mounted,
    isLoggedIn,
    isLoggedOut,
  };
}
