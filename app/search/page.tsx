'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, BookOpen, Clock } from 'lucide-react';
import { SearchBar } from '@/components/ui/SearchBar';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { formatMinutes } from '@/lib/utils';
import type { SearchResult } from '@/types';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetch(`/api/search?q=${encodeURIComponent(query.trim())}`)
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
  }, [query]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="Search"
        title="Find lessons and modules"
        description="Search across all courses and interview questions."
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
        <p className="text-sm text-fg-muted">No results found. Try a different keyword.</p>
      ) : (
        <div className="space-y-4">
          {results.map((result) => {
            const href =
              result.type === 'lesson'
                ? `/courses/${result.moduleSlug}/${result.slug}`
                : `/courses/${result.moduleSlug}`;

            return (
              <Link
                key={`${result.type}-${result.slug}`}
                href={href}
                className="group flex items-start gap-4 rounded-xl border border-border bg-canvas p-4 transition-all hover:border-accent-fg hover:shadow-sm"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-fg-default group-hover:text-accent-fg transition-colors">
                    {result.title}
                  </p>
                  <p className="mt-1 text-sm text-fg-muted line-clamp-1">
                    {result.description}
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
                  <span className="capitalize">{result.type}</span>
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
  );
}
