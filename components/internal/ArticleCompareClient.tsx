'use client';

import { useState } from 'react';
import { AlertCircle, RefreshCw, Scale } from 'lucide-react';
import { ContentBlockRenderer } from '@/components/content/ContentBlockRenderer';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { ReadingTimeBadge } from '@/components/ui/ReadingTimeBadge';
import type { ContentBlock, Difficulty } from '@/types';
import { cn } from '@/lib/utils';

type ParsedArticle = {
  title: string;
  description?: string;
  difficulty?: Difficulty;
  estimatedMinutes?: number;
  tags: string[];
  blocks: ContentBlock[];
};

type ParseResult = {
  article: ParsedArticle | null;
  error: string | null;
};

const EXAMPLE_PLACEHOLDER = `{
  "title": "Example article",
  "description": "Paste a full lesson JSON or a blocks array.",
  "difficulty": "beginner",
  "estimatedMinutes": 8,
  "tags": ["example", "compare"],
  "blocks": [
    {
      "type": "heading",
      "data": { "level": 2, "text": "Section title", "anchor": "section-title" }
    },
    {
      "type": "paragraph",
      "data": { "text": "Rendered with the same block renderer as lesson pages." }
    }
  ]
}`;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function isDifficulty(value: unknown): value is Difficulty {
  return value === 'beginner' || value === 'intermediate' || value === 'advanced';
}

function isCalloutVariant(value: unknown): boolean {
  return ['info', 'tip', 'warning', 'note', 'important'].includes(String(value));
}

function isContentBlock(value: unknown): value is ContentBlock {
  if (!isRecord(value) || typeof value.type !== 'string' || !isRecord(value.data)) {
    return false;
  }

  switch (value.type) {
    case 'paragraph':
      return typeof value.data.text === 'string';
    case 'heading':
      return (
        (value.data.level === 2 || value.data.level === 3 || value.data.level === 4) &&
        typeof value.data.text === 'string' &&
        (value.data.anchor === undefined || typeof value.data.anchor === 'string')
      );
    case 'bullet-list':
    case 'numbered-list':
      return (
        isStringArray(value.data.items) &&
        (value.data.title === undefined || typeof value.data.title === 'string')
      );
    case 'callout':
      return (
        isCalloutVariant(value.data.variant) &&
        typeof value.data.text === 'string' &&
        (value.data.title === undefined || typeof value.data.title === 'string')
      );
    case 'quote':
      return (
        typeof value.data.text === 'string' &&
        (value.data.attribution === undefined || typeof value.data.attribution === 'string')
      );
    case 'key-terms':
      return (
        Array.isArray(value.data.terms) &&
        value.data.terms.every(
          (term) =>
            isRecord(term) &&
            typeof term.term === 'string' &&
            typeof term.definition === 'string' &&
            (term.learnMoreSlug === undefined || typeof term.learnMoreSlug === 'string')
        )
      );
    case 'table':
      return (
        isStringArray(value.data.headers) &&
        Array.isArray(value.data.rows) &&
        value.data.rows.every((row) => isStringArray(row))
      );
    case 'example':
      return (
        typeof value.data.content === 'string' &&
        (value.data.title === undefined || typeof value.data.title === 'string') &&
        (value.data.code === undefined || typeof value.data.code === 'string') &&
        (value.data.language === undefined || typeof value.data.language === 'string')
      );
    case 'exercise':
      return (
        typeof value.data.title === 'string' &&
        typeof value.data.description === 'string' &&
        (value.data.steps === undefined || isStringArray(value.data.steps)) &&
        (value.data.expectedOutcome === undefined || typeof value.data.expectedOutcome === 'string')
      );
    case 'checklist':
      return (
        (value.data.title === undefined || typeof value.data.title === 'string') &&
        Array.isArray(value.data.items) &&
        value.data.items.every(
          (item) =>
            isRecord(item) &&
            typeof item.text === 'string' &&
            (item.hint === undefined || typeof item.hint === 'string')
        )
      );
    case 'mermaid':
      return (
        typeof value.data.id === 'string' &&
        typeof value.data.definition === 'string' &&
        (value.data.caption === undefined || typeof value.data.caption === 'string')
      );
    case 'comparison-cards':
      return (
        (value.data.title === undefined || typeof value.data.title === 'string') &&
        Array.isArray(value.data.cards) &&
        value.data.cards.every(
          (card) =>
            isRecord(card) &&
            typeof card.title === 'string' &&
            typeof card.description === 'string' &&
            (card.pros === undefined || isStringArray(card.pros)) &&
            (card.cons === undefined || isStringArray(card.cons)) &&
            (card.tags === undefined || isStringArray(card.tags))
        )
      );
    case 'summary-box':
      return (
        (value.data.title === undefined || typeof value.data.title === 'string') &&
        isStringArray(value.data.points) &&
        (value.data.takeaway === undefined || typeof value.data.takeaway === 'string')
      );
    case 'faq-block':
      return (
        (value.data.title === undefined || typeof value.data.title === 'string') &&
        Array.isArray(value.data.items) &&
        value.data.items.every(
          (item) =>
            isRecord(item) &&
            typeof item.question === 'string' &&
            typeof item.answer === 'string'
        )
      );
    case 'divider':
      return true;
    default:
      return false;
  }
}

function normalizeArticle(candidate: unknown): ParsedArticle | null {
  if (Array.isArray(candidate)) {
    return candidate.every(isContentBlock)
      ? {
          title: 'Untitled blocks payload',
          tags: [],
          blocks: candidate,
        }
      : null;
  }

  if (!isRecord(candidate)) {
    return null;
  }

  const wrappedCandidate = [candidate, candidate.lesson, candidate.article, candidate.data].find(
    (value) => Array.isArray(value) || isRecord(value)
  );

  const source = wrappedCandidate ?? candidate;
  if (Array.isArray(source)) {
    return source.every(isContentBlock)
      ? {
          title: 'Untitled blocks payload',
          tags: [],
          blocks: source,
        }
      : null;
  }

  if (!isRecord(source) || !Array.isArray(source.blocks) || !source.blocks.every(isContentBlock)) {
    return null;
  }

  return {
    title: typeof source.title === 'string' ? source.title : 'Untitled article',
    description: typeof source.description === 'string' ? source.description : undefined,
    difficulty: isDifficulty(source.difficulty) ? source.difficulty : undefined,
    estimatedMinutes:
      typeof source.estimatedMinutes === 'number' && Number.isFinite(source.estimatedMinutes)
        ? source.estimatedMinutes
        : undefined,
    tags: isStringArray(source.tags) ? source.tags : [],
    blocks: source.blocks,
  };
}

function parseInput(raw: string): ParseResult {
  if (!raw.trim()) {
    return {
      article: null,
      error: 'Paste a JSON object or a blocks array to render this side.',
    };
  }

  try {
    const parsed = JSON.parse(raw);
    const article = normalizeArticle(parsed);

    if (!article) {
      return {
        article: null,
        error:
          'Unsupported JSON shape. Use a lesson-like object with a blocks array, or paste a blocks array directly.',
      };
    }

    return { article, error: null };
  } catch (error) {
    return {
      article: null,
      error: error instanceof Error ? error.message : 'Invalid JSON.',
    };
  }
}

function ArticlePreview({
  article,
  label,
  error,
}: {
  article: ParsedArticle | null;
  label: string;
  error: string | null;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-canvas shadow-sm">
      <div className="border-b border-border bg-canvas-subtle px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-subtle">{label}</p>
      </div>

      {error ? (
        <div className="flex min-h-64 items-start gap-3 p-5 text-sm text-danger-fg">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>{error}</p>
        </div>
      ) : article ? (
        <article className="min-h-64 px-5 py-6 sm:px-6">
          <header className="mb-8">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {article.difficulty && <DifficultyBadge difficulty={article.difficulty} size="md" />}
              {article.estimatedMinutes !== undefined && (
                <ReadingTimeBadge minutes={article.estimatedMinutes} />
              )}
            </div>
            <h2 className="mb-2 text-2xl font-bold leading-snug text-fg-default">
              {article.title}
            </h2>
            {article.description && (
              <p className="text-base text-fg-muted">{article.description}</p>
            )}
            {article.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-canvas-subtle px-2 py-0.5 text-xs text-fg-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <ContentBlockRenderer blocks={article.blocks} />
        </article>
      ) : (
        <div className="flex min-h-64 items-center justify-center p-5 text-sm text-fg-muted">
          Paste JSON above and click Compare.
        </div>
      )}
    </section>
  );
}

export function ArticleCompareClient() {
  const [leftInput, setLeftInput] = useState('');
  const [rightInput, setRightInput] = useState('');
  const [leftResult, setLeftResult] = useState<ParseResult>({ article: null, error: null });
  const [rightResult, setRightResult] = useState<ParseResult>({ article: null, error: null });

  function handleCompare() {
    setLeftResult(parseInput(leftInput));
    setRightResult(parseInput(rightInput));
  }

  function handleReset() {
    setLeftInput('');
    setRightInput('');
    setLeftResult({ article: null, error: null });
    setRightResult({ article: null, error: null });
  }

  return (
    <div className="min-h-screen bg-canvas">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-canvas-subtle via-canvas to-canvas p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-canvas px-3 py-1 text-xs font-medium text-fg-muted">
                <Scale className="h-3.5 w-3.5" aria-hidden="true" />
                Internal tool
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-fg-default sm:text-4xl">
                Compare two article JSON payloads
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-fg-muted sm:text-base">
                Paste two lesson-style JSON payloads or raw blocks arrays. Each side renders through the same content block renderer used on lesson pages.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleCompare}
                className="inline-flex items-center justify-center rounded-lg bg-accent-fg px-4 py-2.5 text-sm font-medium text-fg-on-emphasis transition-colors hover:bg-accent-emphasis"
              >
                Compare
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-canvas px-4 py-2.5 text-sm font-medium text-fg-default transition-colors hover:border-accent-fg hover:text-accent-fg"
              >
                <RefreshCw className="h-4 w-4" aria-hidden="true" />
                Reset
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2" aria-label="JSON editors">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-fg-default">Left JSON</span>
            <textarea
              value={leftInput}
              onChange={(event) => setLeftInput(event.target.value)}
              placeholder={EXAMPLE_PLACEHOLDER}
              spellCheck={false}
              className={cn(
                'min-h-[320px] w-full rounded-2xl border border-border bg-canvas px-4 py-3 font-mono text-sm leading-6 text-fg-default shadow-sm',
                'placeholder:text-fg-subtle focus:border-accent-fg focus:outline-none focus:ring-2 focus:ring-accent-fg/20'
              )}
              aria-label="Left article JSON"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-fg-default">Right JSON</span>
            <textarea
              value={rightInput}
              onChange={(event) => setRightInput(event.target.value)}
              placeholder={EXAMPLE_PLACEHOLDER}
              spellCheck={false}
              className={cn(
                'min-h-[320px] w-full rounded-2xl border border-border bg-canvas px-4 py-3 font-mono text-sm leading-6 text-fg-default shadow-sm',
                'placeholder:text-fg-subtle focus:border-accent-fg focus:outline-none focus:ring-2 focus:ring-accent-fg/20'
              )}
              aria-label="Right article JSON"
            />
          </label>
        </section>

        <section className="grid gap-6 xl:grid-cols-2" aria-label="Article previews">
          <ArticlePreview article={leftResult.article} error={leftResult.error} label="Left preview" />
          <ArticlePreview article={rightResult.article} error={rightResult.error} label="Right preview" />
        </section>
      </div>
    </div>
  );
}