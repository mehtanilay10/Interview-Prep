'use client';

import dynamic from 'next/dynamic';
import { useState, useCallback, useEffect } from 'react';
import { CalloutBox } from '@/components/ui/CalloutBox';
import { cn } from '@/lib/utils';
import type { ContentBlock } from '@/types';
import { ImageModal } from './ImageModal';
import { Highlight, themes } from "prism-react-renderer";


function renderInlineMarkdown(text: string | undefined | null): React.ReactNode[] {
  if (!text) return [];
  const tokens = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return tokens.map((token, i) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return <strong key={i} className="font-semibold text-fg-default">{token.slice(2, -2)}</strong>;
    }
    if (token.startsWith('[') && token.includes('](')) {
      const match = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (match) {
        const href = match[2];
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
  const displayLanguage = language || 'code';
  
  return (
    <div className="my-4 overflow-hidden rounded-xl border border-border shadow-sm">
      <div className="flex items-center justify-between border-b border-border bg-canvas-subtle px-4 py-2">
        <span className="text-xs font-medium text-fg-muted uppercase tracking-wider">
          {displayLanguage}
        </span>
      </div>
      <div className="overflow-x-auto bg-canvas">
        <Highlight theme={themes.nightOwl} code={code} language={language || "text"}>
            {({ style, tokens, getLineProps, getTokenProps }) => (
            <div className="flex">
              <div className="select-none border-r border-border bg-canvas-subtle px-4 py-3 text-right text-xs text-fg-subtle min-w-[3rem]" aria-hidden="true">
                {tokens.map((_, i) => (
                  <div key={i} className="leading-6 font-mono">
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="flex-1 p-4">
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })} className="table-row">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Highlight>
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

    case 'example': {
      const { title, content, code, language } = block.data;
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
            {content && !code && (
              <p className="whitespace-pre-line text-sm text-fg-default leading-relaxed">
                {content}
              </p>
            )}
            {content && code && (
              <p className="mb-3 text-sm text-fg-default leading-relaxed">{content}</p>
            )}
            {code && (
              <CustomCodeBlock code={code} language={language} />
            )}
          </div>
        </div>
      );
    }

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
  if ('data' in block && block.data) return block;

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
