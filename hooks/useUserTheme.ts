'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';

const STORAGE_KEY = 'interview_prep_theme';

type Theme = 'light' | 'dark' | 'system';

async function fetchThemeFromServer(): Promise<Theme | null> {
  try {
    const res = await fetch('/api/user/theme');
    if (!res.ok) return null;
    const data = await res.json();
    return data.theme ?? null;
  } catch {
    return null;
  }
}

async function syncThemeToServer(theme: Theme): Promise<void> {
  try {
    await fetch('/api/user/theme', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ theme }),
    });
  } catch (err) {
    console.warn('[useUserTheme] Failed to sync to server', err);
  }
}

export function useUserTheme() {
  const { data: session, status } = useSession();
  const { theme: resolvedTheme, setTheme } = useTheme();
  const isLoggedIn = status === 'authenticated';
  const isLoggedOut = status === 'unauthenticated';

  const [localTheme, setLocalTheme] = useState<Theme>('system');
  const [serverTheme, setServerTheme] = useState<Theme | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      setLocalTheme(stored);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && !serverTheme) {
      fetchThemeFromServer().then((data) => {
        if (data) {
          setServerTheme(data);
          setTheme(data);
        }
      });
    }
  }, [isLoggedIn, serverTheme, setTheme]);

  useEffect(() => {
    if (isLoggedIn && serverTheme) {
      syncThemeToServer(serverTheme);
    }
  }, [isLoggedIn, serverTheme]);

  const activeTheme = isLoggedIn && serverTheme ? serverTheme : localTheme;

  const updateTheme = useCallback(
    (theme: Theme) => {
      if (isLoggedIn) {
        setServerTheme(theme);
      } else {
        setLocalTheme(theme);
        localStorage.setItem(STORAGE_KEY, theme);
      }
      setTheme(theme);
    },
    [isLoggedIn, setTheme]
  );

  return {
    theme: activeTheme,
    setTheme: updateTheme,
    mounted,
    isLoggedIn,
    isLoggedOut,
  };
}
