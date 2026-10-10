/**
 * Traceability gate — the accuracy invariant from the plan (§2.1, §11.8).
 *
 * A script may only contain material that is traceable to the source article:
 *  - code cues must appear verbatim in the article's example/solution blocks
 *  - diagram cues must match an article mermaid block
 *  - glossary cues must match the article's key-terms
 *  - every non-structural heading must match an article heading
 *
 * Anything else is rejected before a single frame is rendered.
 */
import type { Lesson } from '../../../types/index.js';
import { STRUCTURAL_HEADINGS, type NarrativeShape, type ScriptDocument } from '../types.js';

export interface TraceabilityViolation {
  rule: string;
  detail: string;
}

export interface TraceabilityResult {
  ok: boolean;
  violations: TraceabilityViolation[];
}

interface Block {
  type: string;
  data?: Record<string, unknown>;
}

function blocksOf(lesson: Lesson): Block[] {
  return (lesson.blocks ?? []) as unknown as Block[];
}

export function sourceCodeBlocks(lesson: Lesson): Array<{ code: string; language: string }> {
  const blocks = blocksOf(lesson).filter((b) => b.type === 'example' || b.type === 'solution' || b.type === 'exercise');
  return blocks.flatMap((block) => {
    const data = block.data as { code?: unknown } | undefined;
    if (typeof data?.code !== 'string' || data.code.trim() === '') return [];
    return [{ code: data.code, language: (block.data as { language?: string }).language ?? 'text' }];
  });
}

export function sourceHeadings(lesson: Lesson): string[] {
  return blocksOf(lesson)
    .filter((b) => b.type === 'heading')
    .map((b) => (b.data as { text?: string } | undefined)?.text)
    .filter((text): text is string => typeof text === 'string' && text.trim() !== '');
}

export function sourceKeyTerms(lesson: Lesson): Array<{ term: string; definition: string }> {
  return blocksOf(lesson).filter((b) => b.type === 'key-terms').flatMap((block) => {
    const data = block.data as { terms?: Array<{ term?: string; definition?: string }> } | undefined;
    return (data?.terms ?? [])
      .filter((t): t is { term: string; definition: string } => typeof t?.term === 'string' && typeof t?.definition === 'string')
      .map((t) => ({ term: t.term, definition: t.definition }));
  });
}

export function sourceDiagrams(lesson: Lesson): string[] {
  return blocksOf(lesson).filter((b) => b.type === 'mermaid').flatMap((block) => {
    const data = block.data as { definition?: string; code?: string; diagram?: string } | undefined;
    const value = data?.definition ?? data?.code ?? data?.diagram;
    return typeof value === 'string' && value.trim() !== '' ? [value] : [];
  });
}

function normaliseCode(code: string): string {
  return code.replace(/\r\n/g, '\n').trim();
}

export function checkTraceability(lesson: Lesson, script: ScriptDocument): TraceabilityResult {
  const violations: TraceabilityViolation[] = [];
  const codeBlocks = sourceCodeBlocks(lesson).map((c) => normaliseCode(c.code));
  const headings = new Set(sourceHeadings(lesson).map((h) => h.toLowerCase().trim()));
  const terms = new Map(sourceKeyTerms(lesson).map((t) => [t.term.toLowerCase().trim(), t.definition.trim()]));
  const diagrams = new Set(sourceDiagrams(lesson).map((d) => normaliseCode(d)));
  const structural = new Set((STRUCTURAL_HEADINGS[script.narrative as NarrativeShape] ?? []).map((h) => h.toLowerCase()));

  for (const section of script.sections) {
    const heading = section.heading.toLowerCase().trim();
    if (!structural.has(heading) && !headings.has(heading)) {
      violations.push({ rule: 'heading-not-in-source', detail: `section "${section.heading}" has no matching article heading` });
    }

    for (const cue of section.cues) {
      if (cue.kind === 'code') {
        const normalised = normaliseCode(cue.code);
        if (!codeBlocks.includes(normalised)) {
          violations.push({ rule: 'code-not-verbatim', detail: `code cue in "${section.heading}" is not a verbatim article code block` });
        }
      }
      if (cue.kind === 'diagram' && !diagrams.has(normaliseCode(cue.mermaid))) {
        violations.push({ rule: 'diagram-not-in-source', detail: `diagram cue in "${section.heading}" is not from the article` });
      }
      if (cue.kind === 'terms') {
        for (const item of cue.items) {
          const definition = terms.get(item.term.toLowerCase().trim());
          if (!definition) {
            violations.push({ rule: 'term-not-in-source', detail: `term "${item.term}" is not defined in the article` });
          } else if (definition !== item.definition.trim()) {
            violations.push({ rule: 'term-definition-changed', detail: `definition of "${item.term}" differs from the article` });
          }
        }
      }
    }
  }

  return { ok: violations.length === 0, violations };
}
