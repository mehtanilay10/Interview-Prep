'use client';

import dynamic from 'next/dynamic';
import { useState, useCallback, useEffect } from 'react';
import { CalloutBox } from '@/components/ui/CalloutBox';
import { cn } from '@/lib/utils';
import type { ContentBlock } from '@/types';
import { ImageModal } from './ImageModal';

// Mermaid is loaded dynamically (client-side only)
const MermaidRenderer = dynamic(
  () => import('./MermaidRenderer').then((m) => m.MermaidRenderer),
  { ssr: false, loading: () => <div className="h-32 animate-pulse rounded-lg bg-canvas-subtle" /> }
);

interface ContentBlockRendererProps {
  blocks: ContentBlock[];
  className?: string;
}

function highlightCode(code: string, language?: string): string {
  try {
    const Prism = require('prismjs');
    const lang = language && Prism.languages[language] ? language : 'sql';
    return Prism.highlight(code, Prism.languages[lang], lang);
  } catch {
    return code;
  }
}

function CodeBlock({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const lines = code.split('\n');

  return (
    <div className="relative group">
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="absolute top-2 right-2 z-10 rounded-md border border-border bg-canvas px-2 py-1 text-xs text-fg-muted opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent-fg"
        aria-label="Copy code to clipboard"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
<pre className="flex rounded-lg bg-[#2d2d2d] p-3 overflow-x-auto text-sm leading-relaxed">
         <div className="mr-3 select-none text-right text-fg-muted/60 shrink-0" aria-hidden="true">
          {lines.map((_, i) => (
            <div key={i} className="min-h-[1.5em]">
              {i + 1}
            </div>
          ))}
        </div>
        <code className="flex-1" dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }} />
      </pre>
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
          {block.data.text}
        </p>
      );

    case 'heading': {
      const { level, text, anchor } = block.data;
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
                {item}
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
                {item}
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
          text={block.data.text}
          className="my-4"
        />
      );

    case 'quote':
      return (
        <blockquote
          key={idx}
          className="my-4 border-l-4 border-accent-fg pl-4 py-1"
        >
          <p className="text-fg-default italic leading-relaxed">&ldquo;{block.data.text}&rdquo;</p>
          {block.data.attribution && (
            <footer className="mt-1 text-xs text-fg-muted">— {block.data.attribution}</footer>
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
                <dd className="mt-0.5 text-sm text-fg-muted leading-relaxed">{term.definition}</dd>
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
               <CodeBlock code={code} language={language} />
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
          <p className="mb-3 text-sm text-fg-default">{block.data.description}</p>
          {block.data.steps && (
            <ol className="list-decimal space-y-1 pl-5">
              {block.data.steps.map((step, i) => (
                <li key={i} className="text-sm text-fg-default">
                  {step}
                </li>
              ))}
            </ol>
          )}
          {block.data.expectedOutcome && (
            <p className="mt-3 rounded-lg border border-accent-muted bg-canvas/60 px-3 py-2 text-xs text-fg-muted">
              <strong>Expected outcome:</strong> {block.data.expectedOutcome}
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
                  <span className="text-fg-default">{item.text}</span>
                  {item.hint && (
                    <span className="ml-1 text-xs text-fg-muted">— {item.hint}</span>
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
                <p className="mb-3 text-xs text-fg-muted">{card.description}</p>
                {card.pros && (
                  <div className="mb-2">
                    <p className="text-xs font-semibold text-success-fg mb-1">Pros</p>
                    <ul className="space-y-0.5">
                      {card.pros.map((p, pi) => (
                        <li key={pi} className="text-xs text-fg-default flex items-start gap-1">
                          <span className="text-success-fg">+</span> {p}
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
                          <span className="text-danger-fg">−</span> {c}
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
                {point}
              </li>
            ))}
          </ul>
          {block.data.takeaway && (
            <p className="mt-4 border-t border-border pt-3 text-sm font-medium text-fg-default">
              💡 {block.data.takeaway}
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
                <p className="mb-2 font-medium text-fg-default text-sm">{item.question}</p>
                <p className="text-sm text-fg-muted leading-relaxed">{item.answer}</p>
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

export function ContentBlockRenderer({ blocks, className }: ContentBlockRendererProps) {
  const [prismLoaded, setPrismLoaded] = useState(false);

  useEffect(() => {
    async function loadPrism() {
      try {
        await import('prismjs');
        await import('prismjs/components/prism-sql');
        await import('prismjs/themes/prism-dark.css');
        setPrismLoaded(true);
      } catch {
        // prismjs unavailable — code will render as plain text
      }
    }
    loadPrism();
  }, []);

  return (
    <div className={cn('lesson-prose', className)}>
      {blocks.map((block, idx) => renderBlock(block, idx))}
    </div>
  );
}
