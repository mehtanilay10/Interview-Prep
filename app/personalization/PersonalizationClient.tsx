'use client';

import { useEffect, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { useUserPreferences, type UserPreferences } from '@/hooks/useUserPreferences';
import { useUserTheme } from '@/hooks/useUserTheme';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';
import { User, Settings2, Palette, BookOpen, Accessibility, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface PersonalizationClientProps {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

type FontSize = 'sm' | 'md' | 'lg' | 'xl';
type CodeFontSize = 'sm' | 'md' | 'lg';
type Density = 'comfortable' | 'compact';
type LandingPage = '/courses' | '/problems' | '/interview-questions';

const FONT_SIZES: { value: FontSize; label: string }[] = [
  { value: 'sm', label: 'Small' },
  { value: 'md', label: 'Medium' },
  { value: 'lg', label: 'Large' },
  { value: 'xl', label: 'Extra Large' },
];

const CODE_FONT_SIZES: { value: CodeFontSize; label: string }[] = [
  { value: 'sm', label: 'Small' },
  { value: 'md', label: 'Medium' },
  { value: 'lg', label: 'Large' },
];

const DENSITIES: { value: Density; label: string }[] = [
  { value: 'comfortable', label: 'Comfortable' },
  { value: 'compact', label: 'Compact' },
];

const LANDING_PAGES: { value: LandingPage; label: string }[] = [
  { value: '/courses', label: 'Courses' },
  { value: '/problems', label: 'Problems' },
  { value: '/interview-questions', label: 'Interview Questions' },
];

function SectionHeading({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description?: string }) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-canvas text-fg-muted">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div>
        <h2 className="text-base font-semibold text-fg-default">{title}</h2>
        {description && <p className="text-sm text-fg-muted">{description}</p>}
      </div>
    </div>
  );
}

function RadioCardGroup<T extends string>({
  options,
  value,
  onChange,
  name,
}: {
  options: { value: T; label: string }[];
  value: T | null;
  onChange: (value: T) => void;
  name: string;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={name}>
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              'rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors',
              isActive
                ? 'border-accent-fg bg-accent-subtle text-accent-fg'
                : 'border-border bg-canvas text-fg-muted hover:border-fg-muted hover:text-fg-default'
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function Toggle({
  checked,
  onChange,
  label,
  description,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
  description?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-border bg-canvas p-4">
      <div className="flex-1">
        <p className="text-sm font-medium text-fg-default">{label}</p>
        {description && <p className="text-xs text-fg-muted">{description}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          'relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors',
          checked ? 'bg-accent-emphasis' : 'bg-canvas-inset'
        )}
      >
        <span
          className={cn(
            'inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform',
            checked ? 'translate-x-6' : 'translate-x-1'
          )}
        />
      </button>
    </div>
  );
}

export function PersonalizationClient({ user }: PersonalizationClientProps) {
  const { data: session } = useSession();
  const isLoggedIn = !!session?.user;
  const { preferences, updatePreference, mounted } = useUserPreferences();
  const { theme, setTheme } = useUserTheme();

  const htmlClasses = useMemo(() => {
    if (!mounted) return '';
    const classes = [preferences.fontSize ? `font-size-${preferences.fontSize}` : 'font-size-md'];
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
    const classesToRemove = [
      'font-size-sm', 'font-size-md', 'font-size-lg', 'font-size-xl',
      'font-size-code-sm', 'font-size-code-md', 'font-size-code-lg',
      'density-comfortable', 'density-compact',
      'reduced-motion',
    ];
    classesToRemove.forEach((cls) => root.classList.remove(cls));
    if (htmlClasses) {
      htmlClasses.split(' ').forEach((cls) => {
        if (cls) root.classList.add(cls);
      });
    }
  }, [htmlClasses]);

  if (!mounted) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="h-8 w-64 animate-pulse rounded bg-canvas-inset" />
        <div className="mt-6 space-y-4">
          <div className="h-48 animate-pulse rounded-xl bg-canvas-inset" />
          <div className="h-64 animate-pulse rounded-xl bg-canvas-inset" />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-fg-default">Personalization</h1>
        <p className="mt-2 text-fg-muted">
          Customize your learning experience to match your preferences.
        </p>
      </div>

      <div className="space-y-6">
        <section className="rounded-xl border border-border bg-canvas p-6">
          <SectionHeading icon={User} title="Profile" description="Your account information" />
          <div className="flex items-center gap-4">
            {user.image ? (
              <Image
                src={user.image}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover border border-border"
                unoptimized
              />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-canvas-subtle text-fg-muted">
                <User className="h-6 w-6" aria-hidden="true" />
              </div>
            )}
            <div className="min-w-0">
              <p className="text-sm font-semibold text-fg-default truncate">{user.name || 'User'}</p>
              <p className="text-sm text-fg-muted truncate">{user.email}</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-canvas p-6">
          <SectionHeading icon={Palette} title="Appearance" description="Visual theme and text size" />
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-fg-default">Theme</p>
                <p className="text-xs text-fg-muted">Choose between dark, light, or system preference</p>
              </div>
              <ThemeToggle />
            </div>
            <div>
              <p className="text-sm font-medium text-fg-default mb-2">Font size</p>
              <RadioCardGroup
                name="fontSize"
                options={FONT_SIZES}
                value={preferences.fontSize as FontSize | null}
                onChange={(value) => updatePreference('fontSize', value)}
              />
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-canvas p-6">
          <SectionHeading icon={BookOpen} title="Reading" description="Content display preferences" />
          <div className="space-y-3">
            <Toggle
              label="Content density"
              description="Comfortable adds more whitespace; compact fits more content"
              checked={preferences.density === 'compact'}
              onChange={(value) => updatePreference('density', value ? 'compact' : 'comfortable')}
            />
            <Toggle
              label="Show completed lessons"
              description="Display completed lessons in lists and progress views"
              checked={preferences.showCompleted}
              onChange={(value) => updatePreference('showCompleted', value)}
            />
            <Toggle
              label="Auto-expand code blocks"
              description="Automatically expand code blocks when viewing lessons"
              checked={preferences.autoExpandCode}
              onChange={(value) => updatePreference('autoExpandCode', value)}
            />
          </div>
        </section>

        <section className="rounded-xl border border-border bg-canvas p-6">
          <SectionHeading icon={Accessibility} title="Accessibility" description="Motion and readability" />
          <div className="space-y-5">
            <Toggle
              label="Reduced motion"
              description="Minimize animations and transitions across the app"
              checked={preferences.reducedMotion}
              onChange={(value) => updatePreference('reducedMotion', value)}
            />
            <div>
              <p className="text-sm font-medium text-fg-default mb-2">Code font size</p>
              <RadioCardGroup
                name="codeFontSize"
                options={CODE_FONT_SIZES}
                value={preferences.codeFontSize as CodeFontSize | null}
                onChange={(value) => updatePreference('codeFontSize', value)}
              />
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-canvas p-6">
          <SectionHeading icon={Settings2} title="Preferences" description="Default behavior" />
          <div>
            <label htmlFor="landing-page" className="text-sm font-medium text-fg-default mb-2 block">
              Default landing page
            </label>
            <div className="relative">
              <select
                id="landing-page"
                value={preferences.defaultLanding || '/courses'}
                onChange={(e) => updatePreference('defaultLanding', e.target.value)}
                className="w-full appearance-none rounded-lg border border-border bg-canvas px-3 py-2 pr-8 text-sm text-fg-default transition-colors hover:border-fg-muted focus:border-accent-fg focus:outline-none"
              >
                {LANDING_PAGES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-muted" aria-hidden="true" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
