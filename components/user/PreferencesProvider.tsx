'use client';

import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useUserPreferences, type UserPreferences } from '@/hooks/useUserPreferences';

interface PreferencesContextValue {
  preferences: UserPreferences;
  /** False until client-side preferences have loaded (avoids hydration flashes). */
  mounted: boolean;
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

const APPEARANCE_CLASSES = [
  'font-size-sm', 'font-size-md', 'font-size-lg', 'font-size-xl',
  'font-size-code-sm', 'font-size-code-md', 'font-size-code-lg',
  'density-comfortable', 'density-compact',
  'reduced-motion',
];

/**
 * Applies appearance preferences (font size, code font size, density, reduced
 * motion) to `<html>` for the whole app and exposes the full preference set to
 * any component that needs it (e.g. code blocks reading `autoExpandCode`).
 *
 * Previously these classes were only applied while the Personalization page
 * was mounted, so preferences silently reset as soon as the user navigated
 * away. Applying them here makes them take effect everywhere.
 */
export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const { preferences, mounted } = useUserPreferences();

  const htmlClasses = useMemo(() => {
    if (!mounted) return '';
    const classes = [`font-size-${preferences.fontSize ?? 'md'}`];
    if (preferences.codeFontSize) {
      classes.push(`font-size-code-${preferences.codeFontSize}`);
    }
    if (preferences.density) {
      classes.push(`density-${preferences.density}`);
    }
    if (preferences.reducedMotion) {
      classes.push('reduced-motion');
    }
    return classes.join(' ');
  }, [mounted, preferences.fontSize, preferences.codeFontSize, preferences.density, preferences.reducedMotion]);

  useEffect(() => {
    const root = document.documentElement;
    APPEARANCE_CLASSES.forEach((cls) => root.classList.remove(cls));
    if (htmlClasses) {
      htmlClasses.split(' ').forEach((cls) => {
        if (cls) root.classList.add(cls);
      });
    }
  }, [htmlClasses]);

  const value = useMemo<PreferencesContextValue>(
    () => ({ preferences, mounted }),
    [preferences, mounted]
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

/**
 * Reads the current preferences from context. Falls back to sensible defaults
 * when no provider is present so components stay usable in isolation (tests,
 * storybook-style previews) and during SSR.
 */
export function usePreferencesContext(): PreferencesContextValue {
  const ctx = useContext(PreferencesContext);
  return (
    ctx ?? {
      preferences: {
        fontSize: null,
        density: null,
        codeFontSize: null,
        reducedMotion: false,
        autoExpandCode: true,
        showCompleted: true,
        defaultLanding: null,
      },
      mounted: false,
    }
  );
}
