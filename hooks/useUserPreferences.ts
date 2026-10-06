'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { logger } from '@/lib/logger';

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
    await fetch('/api/user/preferences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(preferences),
    });
  } catch (err) {
    logger.warn('useUserPreferences', 'Failed to sync to server', err);
  }
}

export function useUserPreferences() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';
  const isLoggedOut = status === 'unauthenticated';

  const [serverPreferences, setServerPreferences] = useState<UserPreferences | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isLoggedIn && !serverPreferences) {
      fetchPreferencesFromServer().then((data) => {
        if (data) {
          setServerPreferences(data);
        }
      });
    }
  }, [isLoggedIn, serverPreferences]);

  const preferences = isLoggedIn ? (serverPreferences ?? DEFAULT_PREFERENCES) : DEFAULT_PREFERENCES;

  const updatePreference = useCallback(
    <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => {
      const next = { ...preferences, [key]: value };
      if (isLoggedIn) {
        setServerPreferences(next);
      }
      if (isLoggedOut) {
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
    if (isLoggedIn && serverPreferences) {
      syncPreferencesToServer(serverPreferences);
    }
  }, [isLoggedIn, serverPreferences]);

  return {
    preferences,
    updatePreference,
    mounted,
    isLoggedIn,
    isLoggedOut,
  };
}
