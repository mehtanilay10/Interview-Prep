'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import { logger } from '@/lib/logger';
import { apiFetch } from '@/lib/apiFetch';

const STORAGE_KEY = 'interview_prep_preferences';

export type UserPreferences = {
  fontSize: string | null;
  density: string | null;
  codeFontSize: string | null;
  reducedMotion: boolean;
  autoExpandCode: boolean;
  showCompleted: boolean;
  defaultLanding: string | null;
};

const DEFAULT_PREFERENCES: UserPreferences = {
  fontSize: null,
  density: null,
  codeFontSize: null,
  reducedMotion: false,
  autoExpandCode: true,
  showCompleted: true,
  defaultLanding: null,
};

async function fetchPreferencesFromServer(): Promise<UserPreferences | null> {
  try {
    const res = await fetch('/api/user/preferences');
    if (!res.ok) return null;
    const data = await res.json();
    return {
      fontSize: data.fontSize ?? null,
      density: data.density ?? null,
      codeFontSize: data.codeFontSize ?? null,
      reducedMotion: data.reducedMotion ?? false,
      autoExpandCode: data.autoExpandCode ?? true,
      showCompleted: data.showCompleted ?? true,
      defaultLanding: data.defaultLanding ?? null,
    };
  } catch {
    return null;
  }
}

async function syncPreferencesToServer(preferences: UserPreferences): Promise<void> {
  try {
    await apiFetch('/api/user/preferences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(preferences),
    });
  } catch (err) {
    logger.warn('useUserPreferences', 'Failed to sync to server', err);
  }
}

function readLocalPreferences(): UserPreferences | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<UserPreferences>;
    if (!parsed || typeof parsed !== 'object') return null;
    return { ...DEFAULT_PREFERENCES, ...parsed };
  } catch {
    return null;
  }
}

export function useUserPreferences() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';
  const isLoggedOut = status === 'unauthenticated';

  const [serverPreferences, setServerPreferences] = useState<UserPreferences | null>(null);
  const [localPreferences, setLocalPreferences] = useState<UserPreferences | null>(null);
  const [mounted, setMounted] = useState(false);
  // Set when the value below was just fetched from the server, so the sync
  // effect does not echo it straight back (write amplification -> 429s).
  const skipNextSyncRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Logged-out users keep their appearance preferences in localStorage, so
  // read them back on mount instead of silently reverting to defaults.
  useEffect(() => {
    if (isLoggedIn) return;
    setLocalPreferences(readLocalPreferences());
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn && !serverPreferences) {
      fetchPreferencesFromServer().then((data) => {
        if (data) {
          skipNextSyncRef.current = true;
          setServerPreferences(data);
        }
      });
    }
  }, [isLoggedIn, serverPreferences]);

  const preferences = isLoggedIn ? (serverPreferences ?? DEFAULT_PREFERENCES) : (localPreferences ?? DEFAULT_PREFERENCES);

  const updatePreference = useCallback(
    <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => {
      const next = { ...preferences, [key]: value };
      if (isLoggedIn) {
        // A user-initiated change must always be synced; cancel any pending
        // "skip echo" from an in-flight server fetch.
        skipNextSyncRef.current = false;
        setServerPreferences(next);
      }
      if (isLoggedOut) {
        setLocalPreferences(next);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          // ignore storage errors
        }
      }
    },
    [isLoggedIn, isLoggedOut, preferences]
  );

  useEffect(() => {
    if (!isLoggedIn || !serverPreferences) return;
    if (skipNextSyncRef.current) {
      skipNextSyncRef.current = false;
      return;
    }
    syncPreferencesToServer(serverPreferences);
  }, [isLoggedIn, serverPreferences]);

  return {
    preferences,
    updatePreference,
    mounted,
    isLoggedIn,
    isLoggedOut,
  };
}
