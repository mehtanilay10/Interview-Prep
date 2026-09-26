'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { CalloutBox } from '@/components/ui/CalloutBox';
import { cn } from '@/lib/utils';
import type { ContentBlock } from '@/types';
import { ImageModal } from './ImageModal';

const ShikiHighlighter = dynamic(
  () => import('react-shiki').then((m) => m.ShikiHighlighter),
  { ssr: false, loading: () => <div className="h-32 animate-pulse rounded-lg bg-canvas-subtle" /> }
);

const INLINE_MARKDOWN_REGEX = /(\*\*[^*]+\*\*|~~[^~]+~~|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

function isUnsafeUrl(url: string | undefined): boolean {
  if (!url) return true;
  const trimmed = url.trim();
  if (!trimmed) return true;
  const lower = trimmed.toLowerCase();
  if (lower.startsWith('javascript:') || lower.startsWith('data:') || lower.startsWith('vbscript:')) {
    return true;
  }
  return false;
}

function renderInlineMarkdown(text: string | undefined | null): React.ReactNode[] {
  if (!text) return [];
  const tokens = text.split(INLINE_MARKDOWN_REGEX);
  return tokens.map((token, i) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return <strong key={i} className="font-semibold text-fg-default">{token.slice(2, -2)}</strong>;
    }
    if (token.startsWith('~~') && token.endsWith('~~')) {
      return <del key={i} className="text-fg-muted line-through">{token.slice(2, -2)}</del>;
    }
    if (token.startsWith('`') && token.endsWith('`') && token.length > 1) {
      return <code key={i}>{token.slice(1, -1)}</code>;
    }
    if (token.startsWith('[') && token.includes('](')) {
      const match = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (match) {
        const href = match[2];
        if (isUnsafeUrl(href)) {
          return <span key={i}>{match[1]}</span>;
        }
        const isExternal = href.startsWith('http');
        return (
          <a
            key={i}
            href={href}
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="text-accent-fg underline underline-offset-2 hover:text-accent-fg/80"
          >
            {match[1]}
          </a>
        );
      }
    }
    return token;
  });
}

// Mermaid is loaded dynamically (client-side only)
const MermaidRenderer = dynamic(
  () => import('./MermaidRenderer').then((m) => m.MermaidRenderer),
  { ssr: false, loading: () => <div className="h-32 animate-pulse rounded-lg bg-canvas-subtle" /> }
);

interface ContentBlockRendererProps {
  blocks: ContentBlock[];
  className?: string;
}

function CustomCodeBlock({ code, language }: { code: string; language?: string }) {
  const { resolvedTheme } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shikiTheme = resolvedTheme === 'dark' ? 'github-dark' : 'github-light';

  return (
    <div className="overflow-hidden rounded-xl border border-border shadow-sm">
      <div className="flex items-center justify-between border-b border-border bg-canvas-subtle px-4 py-2">
        <span className="text-xs font-medium text-fg-muted uppercase tracking-wider">
          {language || 'code'}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-md px-2 py-1 text-xs font-medium text-fg-muted transition-colors hover:bg-canvas hover:text-fg-default"
          aria-label={copied ? 'Copied' : 'Copy code'}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="overflow-x-auto bg-canvas text-sm">
        <ShikiHighlighter
          language={language || 'text'}
          theme={shikiTheme}
          showLineNumbers
          startingLineNumber={1}
          addDefaultStyles={false}
          className="rs-code-block"
        >
          {code}
        </ShikiHighlighter>
      </div>
    </div>
  );
}

function ImageBlock({ block }: { block: ContentBlock & { type: 'image' } }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <figure className="my-6 flex justify-center">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="cursor-zoom-in rounded-lg border border-border bg-canvas-subtle p-1 transition hover:border-accent-fg focus:outline-none focus:ring-2 focus:ring-accent-fg focus:ring-offset-2"
        aria-label={`Click to enlarge ${block.data.alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={block.data.src}
          alt={block.data.alt}
          className="max-h-[50vh] w-auto max-w-[150%] object-contain"
        />
      </button>
      {block.data.caption && (
        <figcaption className="mt-2 text-center text-xs text-fg-muted">
          {block.data.caption}
        </figcaption>
      )}
      {isOpen && (
        <ImageModal
          src={block.data.src}
          alt={block.data.alt}
          caption={block.data.caption}
          onClose={() => setIsOpen(false)}
        />
      )}
    </figure>
  );
}

function looksLikeCode(text: string): boolean {
  if (!text) return false;
  const trimmed = text.trim();
  if (!trimmed) return false;
  const lines = trimmed.split('\n');
  if (lines.length < 2) return false;
  const codeIndicators = ['{', '}', '(', ')', ';', 'public', 'private', 'protected', 'class ', 'def ', 'function ', 'import ', 'from ', 'return ', 'const ', 'let ', 'var ', 'async ', 'await ', '=>', '/*', '//', '#', 'SELECT', 'FROM', 'WHERE', 'INSERT', 'UPDATE', 'DELETE'];
  return codeIndicators.some((indicator) => trimmed.includes(indicator));
}

function renderExampleBlock(block: ContentBlock & { type: 'example' }, idx: number): React.ReactNode {
  const { title, content, code, language } = block.data;
  const effectiveCode = code ?? (content && looksLikeCode(content) ? content : '');
  const effectiveContent = code && content ? content : (effectiveCode ? '' : content);

  return (
    <div
      key={idx}
      className="my-3 rounded-xl border border-border bg-canvas-subtle overflow-hidden"
    >
      <div className="border-b border-border bg-canvas-inset px-4 py-2">
        <span className="text-xs font-semibold text-fg-muted">
          📌 {title ?? 'Example'}
        </span>
      </div>
      <div className="p-3">
        {effectiveContent && !effectiveCode && (
          <p className="whitespace-pre-line text-sm text-fg-default leading-relaxed">
            {effectiveContent}
          </p>
        )}
        {effectiveContent && effectiveCode && (
          <p className="mb-3 text-sm text-fg-default leading-relaxed">{effectiveContent}</p>
        )}
        {effectiveCode && (
          <CustomCodeBlock code={effectiveCode} language={language} />
        )}
      </div>
    </div>
  );
}

function renderSolutionBlock(block: ContentBlock & { type: 'solution' }, idx: number): React.ReactNode {
  const { title, content, code, language } = block.data;
  const effectiveCode = code ?? (content && looksLikeCode(content) ? content : '');
  const effectiveContent = code && content ? content : (effectiveCode ? '' : content);

  return (
    <div
      key={idx}
      className="my-3 rounded-xl border border-success-muted bg-success-subtle/50 overflow-hidden"
    >
      <div className="border-b border-success-muted bg-success-subtle px-4 py-2">
        <span className="text-xs font-semibold text-success-fg">
          ✅ {title ?? 'Solution'}
        </span>
      </div>
      <div className="p-3">
        {effectiveContent && (
          <p className="mb-3 text-sm text-fg-default leading-relaxed">{effectiveContent}</p>
        )}
        {effectiveCode && (
          <CustomCodeBlock code={effectiveCode} language={language} />
        )}
      </div>
    </div>
  );
}

function renderBlock(block: ContentBlock, idx: number): React.ReactNode {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={idx} className="mb-4 leading-relaxed text-fg-default">
          {renderInlineMarkdown(block.data.text)}
        </p>
      );

    case 'heading': {
      const data = (block as { data?: { level: 2 | 3 | 4; text: string; anchor?: string } }).data;
      const level = data?.level ?? (block as { level?: 2 | 3 | 4 }).level;
      const text = data?.text ?? (block as { text?: string }).text;
      const anchor = data?.anchor;
      if (!level || !text) return null;
      const Tag = `h${level}` as 'h2' | 'h3' | 'h4';
      const sizeMap = { 2: 'text-xl', 3: 'text-lg', 4: 'text-base' };
      return (
        <Tag
          key={idx}
          id={anchor}
          className={cn(
            'mt-8 mb-3 scroll-mt-20 font-semibold text-fg-default',
            sizeMap[level],
            level === 2 && 'border-b border-border pb-2'
          )}
        >
          {text}
        </Tag>
      );
    }

    case 'bullet-list':
      return (
        <div key={idx} className="mb-4">
          {block.data.title && (
            <p className="mb-2 font-medium text-fg-default">{block.data.title}</p>
          )}
          <ul className="list-disc space-y-1 pl-5 text-fg-default">
            {block.data.items.map((item, i) => (
              <li key={i} className="leading-relaxed text-sm">
                {renderInlineMarkdown(item)}
              </li>
            ))}
          </ul>
        </div>
      );

    case 'numbered-list':
      return (
        <div key={idx} className="mb-4">
          {block.data.title && (
            <p className="mb-2 font-medium text-fg-default">{block.data.title}</p>
          )}
          <ol className="list-decimal space-y-1 pl-5 text-fg-default">
            {block.data.items.map((item, i) => (
              <li key={i} className="leading-relaxed text-sm">
                {renderInlineMarkdown(item)}
              </li>
            ))}
          </ol>
        </div>
      );

    case 'callout':
      return (
        <CalloutBox
          key={idx}
          variant={block.data.variant}
          title={block.data.title}
          text={renderInlineMarkdown(block.data.text)}
          className="my-4"
        />
      );

    case 'quote':
      return (
        <blockquote
          key={idx}
          className="my-4 border-l-4 border-accent-fg pl-4 py-1"
        >
          <p className="text-fg-default italic leading-relaxed">&ldquo;{renderInlineMarkdown(block.data.text)}&rdquo;</p>
          {block.data.attribution && (
            <footer className="mt-1 text-xs text-fg-muted">— {renderInlineMarkdown(block.data.attribution)}</footer>
          )}
        </blockquote>
      );

    case 'key-terms':
      return (
        <div key={idx} className="my-4 rounded-xl border border-border bg-canvas-subtle p-4">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-fg-subtle">
            Key Terms
          </h4>
          <dl className="space-y-3">
            {block.data.terms.map((term, i) => (
              <div key={i}>
                <dt className="font-semibold text-fg-default text-sm">{term.term}</dt>
                <dd className="mt-0.5 text-sm text-fg-muted leading-relaxed">{renderInlineMarkdown(term.definition)}</dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case 'table':
      return (
        <div key={idx} className="my-4 overflow-x-auto rounded-lg border border-border">
          <table className="min-w-full text-sm">
            <thead className="bg-canvas-subtle">
              <tr>
                {block.data.headers.map((h, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="border-b border-border px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-fg-muted"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.data.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={cn(
                    'transition-colors',
                    ri % 2 === 0 ? 'bg-canvas' : 'bg-canvas-subtle'
                  )}
                >
                  {row.map((cell, ci) => (
                    <td key={ci} className="border-b border-border px-4 py-2 text-fg-default">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'example':
      return renderExampleBlock(block as ContentBlock & { type: 'example' }, idx);

    case 'solution':
      return renderSolutionBlock(block as ContentBlock & { type: 'solution' }, idx);

    case 'exercise':
      return (
        <div
          key={idx}
          className="my-4 rounded-xl border-2 border-accent-muted bg-accent-subtle p-5"
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="text-accent-fg text-lg" aria-hidden="true">✏️</span>
            <h4 className="font-semibold text-accent-fg">{block.data.title}</h4>
          </div>
          <p className="mb-3 text-sm text-fg-default">{renderInlineMarkdown(block.data.description)}</p>
          {block.data.steps && (
            <ol className="list-decimal space-y-1 pl-5">
              {block.data.steps.map((step, i) => (
                <li key={i} className="text-sm text-fg-default">
                  {renderInlineMarkdown(step)}
                </li>
              ))}
            </ol>
          )}
          {block.data.expectedOutcome && (
            <p className="mt-3 rounded-lg border border-accent-muted bg-canvas/60 px-3 py-2 text-xs text-fg-muted">
              <strong>Expected outcome:</strong> {renderInlineMarkdown(block.data.expectedOutcome)}
            </p>
          )}
        </div>
      );

    case 'checklist':
      return (
        <div key={idx} className="my-4 rounded-xl border border-border bg-canvas-subtle p-4">
          {block.data.title && (
            <h4 className="mb-3 font-semibold text-fg-default">{block.data.title}</h4>
          )}
          <ul className="space-y-2">
            {block.data.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span
                  className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-border bg-canvas text-fg-subtle"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <div>
                  <span className="text-fg-default">{renderInlineMarkdown(item.text)}</span>
                  {item.hint && (
                    <span className="ml-1 text-xs text-fg-muted">— {renderInlineMarkdown(item.hint)}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'mermaid':
      return (
        <MermaidRenderer
          key={idx}
          definition={block.data.definition}
          caption={block.data.caption}
          className="my-6"
        />
      );

    case 'comparison-cards': {
      const colorClasses = [
        'border-accent-muted bg-accent-subtle',
        'border-success-muted bg-success-subtle',
        'border-attention-muted bg-attention-subtle',
        'border-done-muted bg-done-muted',
      ];
      return (
        <div key={idx} className="my-6">
          {block.data.title && (
            <h4 className="mb-3 font-semibold text-fg-default">{block.data.title}</h4>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {block.data.cards.map((card, i) => (
              <div
                key={i}
                className={cn(
                  'rounded-xl border p-4',
                  colorClasses[i % colorClasses.length]
                )}
              >
                <h5 className="mb-1 font-semibold text-fg-default">{card.title}</h5>
                <p className="mb-3 text-xs text-fg-muted">{renderInlineMarkdown(card.description)}</p>
                {card.pros && (
                  <div className="mb-2">
                    <p className="text-xs font-semibold text-success-fg mb-1">Pros</p>
                    <ul className="space-y-0.5">
                      {card.pros.map((p, pi) => (
                        <li key={pi} className="text-xs text-fg-default flex items-start gap-1">
                          <span className="text-success-fg">+</span> {renderInlineMarkdown(p)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {card.cons && (
                  <div>
                    <p className="text-xs font-semibold text-danger-fg mb-1">Cons</p>
                    <ul className="space-y-0.5">
                      {card.cons.map((c, ci) => (
                        <li key={ci} className="text-xs text-fg-default flex items-start gap-1">
                          <span className="text-danger-fg">−</span> {renderInlineMarkdown(c)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {card.tags && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {card.tags.map((tag, ti) => (
                      <span key={ti} className="rounded-full border border-border bg-canvas/60 px-1.5 py-0.5 text-xs text-fg-subtle">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    case 'summary-box':
      return (
        <div
          key={idx}
          className="my-6 rounded-xl border-2 border-border bg-canvas-subtle p-5"
        >
          <h4 className="mb-3 flex items-center gap-2 font-semibold text-fg-default">
            <span aria-hidden="true">📋</span>
            {block.data.title ?? 'Summary'}
          </h4>
          <ul className="space-y-2">
            {block.data.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-fg-default">
                <span className="mt-0.5 text-accent-fg font-bold shrink-0">→</span>
                {renderInlineMarkdown(point)}
              </li>
            ))}
          </ul>
          {block.data.takeaway && (
            <p className="mt-4 border-t border-border pt-3 text-sm font-medium text-fg-default">
              💡 {renderInlineMarkdown(block.data.takeaway)}
            </p>
          )}
        </div>
      );

    case 'faq-block':
      return (
        <div key={idx} className="my-6">
          {block.data.title && (
            <h4 className="mb-3 font-semibold text-fg-default">{block.data.title}</h4>
          )}
          <div className="space-y-3">
            {block.data.items.map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-canvas-subtle p-4">
                <p className="mb-2 font-medium text-fg-default text-sm">{renderInlineMarkdown(item.question)}</p>
                <p className="text-sm text-fg-muted leading-relaxed">{renderInlineMarkdown(item.answer)}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'divider':
      return <hr key={idx} className="my-8 border-border" />;

    case 'image':
      return <ImageBlock key={idx} block={block} />;

    default:
      return null;
  }
}

function normalizeBlock(block: ContentBlock): ContentBlock {
  if ('data' in block && block.data) {
    if (block.type === 'comparison-cards' && (block.data as any).items && !(block.data as any).cards) {
      return {
        ...block,
        data: {
          title: block.data.title,
          cards: (block.data as any).items as { title: string; description: string; pros?: string[]; cons?: string[]; tags?: string[] }[],
        },
      } as ContentBlock;
    }
    if (block.type === 'summary-box' && (block.data as any).items && !(block.data as any).points) {
      return {
        ...block,
        data: {
          title: block.data.title,
          points: ((block.data as any).items as { text: string }[]).map((i) => i.text),
          takeaway: block.data.takeaway,
        },
      } as ContentBlock;
    }
    if (block.type === 'summary-box' && (block.data as any).text && !(block.data as any).points) {
      return {
        ...block,
        data: {
          title: block.data.title,
          points: (block.data as any).text as string[],
          takeaway: block.data.takeaway,
        },
      } as ContentBlock;
    }
    if (block.type === 'faq-block' && (block.data as any).faqs && !(block.data as any).items) {
      return {
        ...block,
        data: {
          title: block.data.title,
          items: (block.data as any).faqs as { question: string; answer: string }[],
        },
      } as ContentBlock;
    }
    return block;
  }

  const legacy = block as Record<string, unknown>;
  const common = { id: legacy.id as string | undefined };

  switch (block.type) {
    case 'paragraph':
      return { ...common, type: 'paragraph', data: { text: legacy.text as string } };
    case 'heading':
      return {
        ...common,
        type: 'heading',
        data: {
          level: legacy.level as 2 | 3 | 4,
          text: legacy.text as string,
          anchor: legacy.anchor as string | undefined,
        },
      };
    case 'bullet-list':
      return {
        ...common,
        type: 'bullet-list',
        data: { items: legacy.items as string[], title: legacy.title as string | undefined },
      };
    case 'numbered-list':
      return {
        ...common,
        type: 'numbered-list',
        data: { items: legacy.items as string[], title: legacy.title as string | undefined },
      };
    case 'callout':
      return {
        ...common,
        type: 'callout',
        data: {
          variant: legacy.variant as 'info' | 'tip' | 'warning' | 'note' | 'important',
          title: legacy.title as string | undefined,
          text: legacy.text as string,
        },
      };
    case 'quote':
      return {
        ...common,
        type: 'quote',
        data: { text: legacy.text as string, attribution: legacy.attribution as string | undefined },
      };
    case 'key-terms':
      return {
        ...common,
        type: 'key-terms',
        data: { terms: legacy.terms as { term: string; definition: string; learnMoreSlug?: string }[] },
      };
    case 'table':
      return {
        ...common,
        type: 'table',
        data: { headers: legacy.headers as string[], rows: legacy.rows as string[][] },
      };
    case 'example':
      return {
        ...common,
        type: 'example',
        data: {
          title: legacy.title as string | undefined,
          content: legacy.content as string,
          code: legacy.code as string | undefined,
          language: legacy.language as string | undefined,
        },
      };
    case 'solution':
      return {
        ...common,
        type: 'solution',
        data: {
          title: legacy.title as string | undefined,
          content: legacy.content as string,
          code: legacy.code as string,
          language: legacy.language as string | undefined,
        },
      };
    case 'exercise':
      return {
        ...common,
        type: 'exercise',
        data: {
          title: legacy.title as string,
          description: legacy.description as string,
          steps: legacy.steps as string[] | undefined,
          expectedOutcome: legacy.expectedOutcome as string | undefined,
        },
      };
    case 'checklist':
      return {
        ...common,
        type: 'checklist',
        data: {
          title: legacy.title as string | undefined,
          items: legacy.items as { text: string; hint?: string }[],
        },
      };
    case 'mermaid':
      return {
        ...common,
        type: 'mermaid',
        data: {
          id: legacy.id as string,
          caption: legacy.caption as string | undefined,
          definition: legacy.definition as string,
        },
      };
    case 'comparison-cards':
      return {
        ...common,
        type: 'comparison-cards',
        data: {
          title: legacy.title as string | undefined,
          cards: legacy.cards as { title: string; description: string; pros?: string[]; cons?: string[]; tags?: string[] }[],
        },
      };
    case 'summary-box':
      return {
        ...common,
        type: 'summary-box',
        data: {
          title: legacy.title as string | undefined,
          points: legacy.points as string[],
          takeaway: legacy.takeaway as string | undefined,
        },
      };
    case 'faq-block':
      return {
        ...common,
        type: 'faq-block',
        data: {
          title: legacy.title as string | undefined,
          items: legacy.items as { question: string; answer: string }[],
        },
      };
    case 'image':
      return {
        ...common,
        type: 'image',
        data: { src: legacy.src as string, alt: legacy.alt as string, caption: legacy.caption as string | undefined },
      };
    default:
      return block;
  }
}

export function ContentBlockRenderer({ blocks, className }: ContentBlockRendererProps) {
  const normalizedBlocks = blocks.map(normalizeBlock);

  return (
    <div className={cn('lesson-prose', className)}>
      {normalizedBlocks.map((block, idx) => renderBlock(block, idx))}
    </div>
  );
}
