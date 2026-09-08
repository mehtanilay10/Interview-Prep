import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getModulesForCourse, getLessonsForCourse, getModuleBySlug, getLessonBySlug } from '@/lib/content';
import { formatHours } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Cheat Sheets',
  description: 'Quick reference cheat sheets for revising key programming concepts before interviews.',
};

const TECH_ICONS: Record<string, string> = {
  'csharp': '💻',
  'sql-server': '🗄️',
  'react': '⚛️',
  'redux': '🔄',
  'apollo': '🚀',
  'graphql': '◼️',
  'docker-compose': '🐳',
  'javascript': '⚡',
  'typescript': '📘',
  'react-router': '🧭',
};

const TECH_DESCRIPTIONS: Record<string, string> = {
  'csharp': 'Modern C# syntax, tuples, pattern matching, and local functions.',
  'sql-server': 'SELECT, JOINs, WHERE, GROUP BY, CTEs, and stored procedures.',
  'react': 'Components, hooks, state management, and JSX patterns.',
  'redux': 'Store setup, actions, reducers, middleware, and React Redux.',
  'apollo': 'Apollo Client setup, queries, mutations, caching, and error handling.',
  'graphql': 'Schema design, queries, mutations, filtering, and Hot Chocolate.',
  'docker-compose': 'Service configuration, networking, volumes, and common commands.',
  'javascript': 'ES6+ features: promises, async/await, destructuring, spread, modules.',
  'typescript': 'Types, interfaces, generics, decorators, and React typing.',
  'react-router': 'Route configuration, navigation, URL params, and nested routes.',
};

export default function CheatsheetsPage() {
  const modules = getModulesForCourse('cheatsheet');

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="⚡ Quick Reference"
        title="Cheat Sheets"
        description="Choose a technology to browse quick reference snippets for last-minute revision."
        titleAs="h1"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod) => {
          const lessons = getLessonsForCourse('cheatsheet').filter(l => l.moduleSlug === mod.slug);
          const lesson = lessons[0];
          return (
            <Link
              key={mod.slug}
              href={`/cheatsheet/${mod.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-canvas p-5 transition-all hover:border-accent-fg hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl leading-none" aria-hidden="true">
                  {TECH_ICONS[mod.slug] ?? '📝'}
                </span>
                <h3 className="font-semibold text-fg-default group-hover:text-accent-fg transition-colors">
                  {mod.title}
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-fg-muted line-clamp-2">
                {TECH_DESCRIPTIONS[mod.slug] ?? 'Quick reference cheat sheet.'}
              </p>
              <div className="mt-auto flex items-center gap-2 text-xs text-fg-subtle">
                <Zap className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{lesson ? `${lesson.estimatedMinutes} min` : 'Quick reference'}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
