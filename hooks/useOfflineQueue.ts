'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
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

  const [localQueue, setLocalQueue] = useState<OfflineQueueItem[]>([]);
  const [serverQueue, setServerQueue] = useState<OfflineQueueItem[] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem('interview_prep_offline_queue');
      if (stored) {
        setLocalQueue(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && !serverQueue) {
      fetchQueueFromServer().then((data) => {
        if (data) {
          setServerQueue(data);
        }
      });
    }
  }, [isLoggedIn, serverQueue]);

  const activeQueue = isLoggedIn && serverQueue ? serverQueue : localQueue;

  const isQueued = useCallback(
    (courseSlug: string, moduleSlug: string, lessonSlug: string): boolean => {
      return activeQueue.some((item) => item.courseSlug === courseSlug && item.moduleSlug === moduleSlug && item.lessonSlug === lessonSlug);
    },
    [activeQueue]
  );

  const addToQueue = useCallback(
    (courseSlug: string, moduleSlug: string, lessonSlug: string, title: string) => {
      const item: OfflineQueueItem = {
        courseSlug,
        moduleSlug,
        lessonSlug,
        title,
        queuedAt: new Date().toISOString(),
      };

      if (isLoggedIn) {
        setServerQueue((prev) => {
          const next = prev ? [...prev.filter((q) => !(q.courseSlug === courseSlug && q.moduleSlug === moduleSlug && q.lessonSlug === lessonSlug)), item] : [item];
          return next;
        });
        syncQueueToServer(item);
      } else {
        setLocalQueue((prev) => {
          const next = [...prev.filter((q) => !(q.courseSlug === courseSlug && q.moduleSlug === moduleSlug && q.lessonSlug === lessonSlug)), item];
          try {
            localStorage.setItem('interview_prep_offline_queue', JSON.stringify(next));
          } catch {
            // ignore
          }
          return next;
        });
      }
    },
    [isLoggedIn]
  );

  const removeFromQueue = useCallback(
    (courseSlug: string, moduleSlug: string, lessonSlug: string) => {
      if (isLoggedIn) {
        setServerQueue((prev) => {
          const next = prev ? prev.filter((q) => !(q.courseSlug === courseSlug && q.moduleSlug === moduleSlug && q.lessonSlug === lessonSlug)) : [];
          return next;
        });
        fetch('/api/user/offline-queue', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ courseSlug, moduleSlug, lessonSlug }),
        }).catch(() => undefined);
      } else {
        setLocalQueue((prev) => {
          const next = prev.filter((q) => !(q.courseSlug === courseSlug && q.moduleSlug === moduleSlug && q.lessonSlug === lessonSlug));
          try {
            localStorage.setItem('interview_prep_offline_queue', JSON.stringify(next));
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
    queue: activeQueue,
    isQueued,
    addToQueue,
    removeFromQueue,
    mounted,
    isLoggedIn,
    isLoggedOut,
  };
}
