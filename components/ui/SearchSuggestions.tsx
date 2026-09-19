'use client';

import { useState, useEffect, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight } from 'lucide-react';
import { searchAll, getSearchResultHref } from '@/lib/content';
import type { SearchResult } from '@/types';
import { cn } from '@/lib/utils';

export interface SearchSuggestionsHandle {
  focus: () => void;
}

interface SearchSuggestionsProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
  size?: 'sm' | 'md';
}

const TYPE_LABEL: Record<string, string> = {
  lesson: 'Lesson',
  module: 'Module',
  course: 'Course',
  cheatsheet: 'Cheatsheet',
};

export const SearchSuggestions = forwardRef<SearchSuggestionsHandle, SearchSuggestionsProps>(
  function SearchSuggestions(
    {
      value,
      onChange,
      onSearch,
      placeholder = 'Search…',
      className,
      autoFocus = false,
      size = 'md',
    },
    ref
  ) {
    const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
    }));

    useEffect(() => {
      if (!value.trim()) {
        setSuggestions([]);
        setIsOpen(false);
        return;
      }

      const results = searchAll(value.trim());
      setSuggestions(results);
      setIsOpen(results.length > 0);
      setSelectedIndex(-1);
    }, [value]);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
          setSelectedIndex(-1);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
      if (selectedIndex >= 0 && listRef.current) {
        const items = listRef.current.querySelectorAll('[role="option"]');
        items[selectedIndex]?.scrollIntoView({ block: 'nearest' });
      }
    }, [selectedIndex]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!isOpen || suggestions.length === 0) {
          if (e.key === 'Enter') {
            e.preventDefault();
            if (value.trim() && onSearch) {
              onSearch(value.trim());
            }
          }
          return;
        }

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
            navigateToResult(suggestions[selectedIndex]);
          } else if (value.trim() && onSearch) {
            onSearch(value.trim());
          }
        } else if (e.key === 'Escape') {
          setIsOpen(false);
          setSelectedIndex(-1);
          inputRef.current?.blur();
        }
      },
      [isOpen, suggestions, selectedIndex, value, onSearch]
    );

    const navigateToResult = useCallback(
      (result: SearchResult) => {
        const href = getSearchResultHref(result);
        onChange('');
        setIsOpen(false);
        setSelectedIndex(-1);
        router.push(href);
      },
      [onChange, router]
    );

    const handleClear = useCallback(() => {
      onChange('');
      setIsOpen(false);
      setSelectedIndex(-1);
      inputRef.current?.focus();
    }, [onChange]);

    return (
      <div ref={containerRef} className={cn('relative', className)}>
        <div className="relative">
          <Search
            className={cn(
              'pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-muted',
              size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'
            )}
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            type="search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => {
              if (suggestions.length > 0) setIsOpen(true);
            }}
            onBlur={() => {
              setTimeout(() => setIsOpen(false), 150);
            }}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoFocus={autoFocus}
            role="combobox"
            aria-expanded={isOpen}
            aria-controls="search-suggestions-list"
            aria-autocomplete="list"
            className={cn(
              'w-full rounded-lg border border-border bg-canvas text-fg-default placeholder:text-fg-subtle',
              'transition-colors focus:border-accent-fg focus:outline-none focus:ring-2 focus:ring-accent-fg/20',
              size === 'sm' ? 'py-1.5 pl-9 pr-8 text-sm' : 'py-2 pl-10 pr-10 text-sm',
              'dark:bg-canvas-subtle'
            )}
            aria-label={placeholder}
          />
          {value && (
            <button
              type="button"
              onClick={handleClear}
              className={cn(
                'absolute right-3 top-1/2 -translate-y-1/2 text-fg-muted transition-colors hover:text-fg-default'
              )}
              aria-label="Clear search"
            >
              <X className={size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'} />
            </button>
          )}
        </div>

        {isOpen && suggestions.length > 0 && (
          <ul
            ref={listRef}
            id="search-suggestions-list"
            role="listbox"
            className="absolute z-50 mt-1 max-h-80 w-full overflow-auto rounded-lg border border-border bg-canvas shadow-lg"
          >
            {suggestions.map((result, index) => {
              const href = getSearchResultHref(result);
              const label = TYPE_LABEL[result.type] || result.type;
              const isSelected = index === selectedIndex;

              return (
                <li
                  key={`${result.type}-${result.slug}`}
                  role="option"
                  aria-selected={isSelected}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 cursor-pointer transition-colors',
                    isSelected ? 'bg-accent-subtle' : 'hover:bg-canvas-subtle'
                  )}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    navigateToResult(result);
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <span
                    className={cn(
                      'shrink-0 rounded-md border border-border bg-canvas-subtle px-2 py-0.5 text-xs font-medium',
                      'text-fg-subtle'
                    )}
                  >
                    {label}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm font-medium text-fg-default">{result.title}</p>
                    {result.description && (
                      <p className="truncate text-xs text-fg-muted">{result.description}</p>
                    )}
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-fg-subtle" aria-hidden="true" />
                </li>
              );
            })}
            {value.trim() && (
              <li
                role="option"
                className={cn(
                  'flex items-center gap-2 px-3 py-2 cursor-pointer transition-colors border-t border-border',
                  selectedIndex === suggestions.length ? 'bg-accent-subtle' : 'hover:bg-canvas-subtle'
                )}
                onMouseDown={(e) => {
                  e.preventDefault();
                  if (onSearch) {
                    onChange('');
                    setIsOpen(false);
                    onSearch(value.trim());
                  }
                }}
                onMouseEnter={() => setSelectedIndex(suggestions.length)}
              >
                <span className="text-xs text-fg-muted">View all results for &ldquo;{value.trim()}&rdquo;</span>
                <ArrowRight className="h-3 w-3 text-fg-subtle" aria-hidden="true" />
              </li>
            )}
          </ul>
        )}
      </div>
    );
  }
);
