'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { SearchBar } from '@/components/ui/SearchBar';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getSearchResultHref } from '@/lib/content';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { SearchErrorBoundary } from '@/components/ui/SearchErrorBoundary';
import type { SearchResult } from '@/types';

const TYPE_LABEL: Record<string, string> = {
  lesson: 'Lesson',
  module: 'Module',
  course: 'Course',
  cheatsheet: 'Cheatsheet',
};

function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const escapedQuery = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="rounded bg-accent-subtle px-0.5 text-fg-default">{part}</mark>
    ) : (
      part
    )
  );
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebouncedValue(query, 300);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetch(`/api/search?q=${encodeURIComponent(debouncedQuery.trim())}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setResults(data.results ?? []);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [debouncedQuery]);

  const suggestion = useMemo(() => {
    if (results.length > 0 || !debouncedQuery.trim()) return null;
    const words = debouncedQuery.trim().split(/\s+/);
    if (words.length === 1) {
      return `Try searching for a broader term or check the spelling of "${debouncedQuery.trim()}".`;
    }
    return 'Try searching for fewer keywords or a broader term.';
  }, [debouncedQuery, results.length]);

  return (
    <SearchErrorBoundary>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <SectionHeader
          eyebrow="Search"
          title="Find lessons, modules, and courses"
          description="Search across all courses, problems, cheat sheets, and interview questions."
          titleAs="h1"
        />

        <div className="mb-8">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search lessons, modules, topics..."
            autoFocus
          />
        </div>

        {!query.trim() ? (
          <p className="text-sm text-fg-muted">Type a keyword above to search across the entire course library.</p>
        ) : loading ? (
          <p className="text-sm text-fg-muted">Searching…</p>
        ) : results.length === 0 ? (
          <div className="space-y-2">
            <p className="text-sm text-fg-muted">No results found.</p>
            {suggestion && (
              <p className="text-sm text-accent-fg">{suggestion}</p>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div aria-live="polite" className="sr-only">
              {results.length} search result{results.length === 1 ? '' : 's'} found
            </div>
            {results.map((result) => {
              const href = getSearchResultHref(result);

              return (
                <Link
                  key={`${result.type}-${result.slug}`}
                  href={href}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-canvas p-4 transition-all hover:border-accent-fg hover:shadow-sm"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-accent-fg">{TYPE_LABEL[result.type] ?? result.type}</span>
                      <p className="font-medium text-fg-default group-hover:text-accent-fg transition-colors">
                        {highlightText(result.title, debouncedQuery)}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-fg-muted line-clamp-1">
                      {highlightText(result.description, debouncedQuery)}
                    </p>
                    {result.tags && result.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {result.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border bg-canvas-subtle px-2 py-0.5 text-xs text-fg-subtle"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0 text-xs text-fg-subtle">
                    <span className="capitalize">{TYPE_LABEL[result.type] || result.type}</span>
                    {result.difficulty && (
                      <span className="rounded-full border border-border bg-canvas-subtle px-2 py-0.5 text-xs text-fg-subtle capitalize">
                        {result.difficulty}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </SearchErrorBoundary>
  );
}
