/**
 * Deterministic narrative builder.
 *
 * This is the offline fallback writer used when no LLM key is configured
 * (`PIPELINE_LLM_PROVIDER=local`) and the reference implementation the LLM path
 * is validated against. Because every cue is copied straight out of the article,
 * scripts built here satisfy the traceability invariant by construction — this
 * is what makes the pipeline safe to run and test without an AI service.
 */
import type { Lesson } from '../../../types/index.js';
import {
  type NarrativeShape,
  type ScriptDocument,
  type ScriptSection,
  type VisualCue,
  countWords,
  SECTION_NARRATION_WORD_BUDGET,
  NARRATION_MAX_WORDS,
} from '../types.js';
import { cleanSpokenText } from './lexicon.js';

interface Block {
  type: string;
  data?: Record<string, unknown>;
  [key: string]: unknown;
}

/** Shape of `example`/`solution` block data: the code plus optional prose. */
interface CodeBlockData extends Record<string, unknown> {
  code: string;
  language?: string;
  title?: string;
  content?: string;
  description?: string;
  explanation?: string;
}

function blocksOf(lesson: Lesson): Block[] {
  return (lesson.blocks ?? []) as unknown as Block[];
}

function headingText(block: Block): string | undefined {
  const data = block.data as { text?: string } | undefined;
  return typeof data?.text === 'string' ? data.text : undefined;
}

function paragraphText(block: Block): string | undefined {
  const data = block.data as { text?: string } | undefined;
  return typeof data?.text === 'string' ? data.text : undefined;
}

function codeOf(block: Block): { code: string; language: string; title?: string; content?: string } | null {
  const data = block.data as CodeBlockData | undefined;
  if (typeof data?.code !== 'string' || data.code.trim() === '') return null;
  return {
    code: data.code,
    language: data.language ?? 'text',
    title: data.title,
    content: data.content ?? data.description ?? data.explanation,
  };
}

function bulletItems(block: Block): string[] | null {
  const data = block.data as { items?: unknown } | undefined;
  if (!Array.isArray(data?.items)) return null;
  const items = data.items.filter((item): item is string => typeof item === 'string' && item.trim() !== '');
  return items.length > 0 ? items : null;
}

/** Spoken-text wrapper for a source string: markdown is stripped. */
function spoken(text: string): string {
  return cleanSpokenText(text);
}

/** Groups consecutive blocks under the most recent heading. */
function sectionsFromLesson(lesson: Lesson): Array<{ heading: string; blocks: Block[] }> {
  const sections: Array<{ heading: string; blocks: Block[] }> = [];
  let current: { heading: string; blocks: Block[] } | null = null;

  for (const block of blocksOf(lesson)) {
    if (block.type === 'heading') {
      const text = headingText(block);
      if (text) {
        current = { heading: text, blocks: [] };
        sections.push(current);
      }
      continue;
    }
    if (!current) {
      current = { heading: 'Introduction', blocks: [] };
      sections.push(current);
    }
    current.blocks.push(block);
  }
  return sections;
}

export function narrativeForArea(area: 'courses' | 'problems'): NarrativeShape {
  return area === 'problems' ? 'walkthrough' : 'explainer';
}

/**
 * Builds an explainer script from a course lesson:
 * Introduction → one section per article heading → Summary → CTA.
 */
export function buildExplainerScript(lesson: Lesson, ctaText: string): ScriptDocument {
  const sections: ScriptSection[] = [];

  const introParagraphs = introText(lesson);
  if (introParagraphs) {
    sections.push({
      id: 'introduction',
      heading: 'Introduction',
      narration: introParagraphs,
      cues: [{ kind: 'title', text: lesson.title, subtitle: lesson.description }],
    });
  }

  const groups = sectionsFromLesson(lesson);
  for (const [groupIndex, group] of groups.entries()) {
    const body = sectionBody(group.blocks, group.heading, groupIndex === 0);
    if (!body) continue;
    sections.push({
      id: slugify(`${group.heading}-${sections.length}`),
      heading: group.heading,
      narration: body.narration,
      cues: body.cues,
    });
  }

  const summary = summarySection(lesson);
  if (summary) sections.push(summary);

  // A closing recap built only from the article's own headings (and related
  // lessons when present), so it stays traceable even for lessons without a
  // summary box.
  const recap = recapSection(lesson, groups);
  if (recap) sections.push(recap);

  sections.push({
    id: 'cta',
    heading: 'Related lessons',
    narration: ctaText,
    cues: [{ kind: 'cta', text: ctaText }],
  });

  return {
    schemaVersion: 1,
    title: lesson.title,
    description: lesson.description ?? lesson.title,
    narrative: 'explainer',
    area: 'courses',
    language: 'en',
    cta: ctaText,
    sections: sections.filter((section) => countWords(section.narration) > 0 || section.cues.length > 0),
  };
}

/**
 * Builds a walkthrough script from a problem lesson:
 * Problem → Approach → Solution(s) → Complexity → CTA.
 */
export function buildWalkthroughScript(lesson: Lesson, ctaText: string): ScriptDocument {
  const blocks = blocksOf(lesson);
  const sections: ScriptSection[] = [];

  sections.push({
    id: 'problem',
    heading: 'Problem',
    narration: `${spoken(lesson.description ?? lesson.title)} Take a moment to read the requirements on screen.`,
    cues: [{ kind: 'title', text: lesson.title, subtitle: lesson.description }],
  });

  // Everything before the first solution/example is the approach explanation.
  const solutionIndex = blocks.findIndex((b) => b.type === 'solution' || b.type === 'example');
  const approachBlocks = blocks.slice(0, solutionIndex === -1 ? blocks.length : solutionIndex);
  const approachBody = sectionBody(approachBlocks, 'Approach', true);
  if (approachBody) {
    sections.push({
      id: 'approach',
      heading: 'Approach',
      narration: `${approachBody.narration} Keep this strategy in mind while we walk through the code.`,
      cues: approachBody.cues,
    });
  }

  const solutionBlocks = solutionIndex === -1 ? [] : blocks.slice(solutionIndex);
  let counter = 0;
  for (const block of solutionBlocks) {
    const code = codeOf(block);
    if (!code) continue;
    counter += 1;
    // The section heading stays structural ("Solution"); the article's own code
    // title lives in the cue so the heading remains traceable.
    const title = code.title ?? `Solution ${counter}`;
    const intro = spoken(code.content ?? '');
    sections.push({
      id: slugify(`solution-${counter}`),
      heading: 'Solution',
      narration: [
        `${title}.`,
        intro,
        `Watch the ${code.language} code on screen and follow it line by line.`,
        counter === 1 ? 'This is the approach we described a moment ago.' : 'Compare this with the previous solution.',
      ]
        .filter((part) => part !== '')
        .join(' '),
      cues: [{ kind: 'code', code: code.code, language: code.language, title }],
    });
  }

  const complexity = complexitySection(lesson);
  if (complexity) sections.push(complexity);

  const summary = summarySection(lesson);
  if (summary) sections.push(summary);

  const recap = recapSection(lesson, sectionsFromLesson(lesson));
  if (recap) sections.push(recap);

  sections.push({
    id: 'cta',
    heading: 'Keep practicing',
    narration: ctaText,
    cues: [{ kind: 'cta', text: ctaText }],
  });

  return {
    schemaVersion: 1,
    title: lesson.title,
    description: lesson.description ?? lesson.title,
    narrative: 'walkthrough',
    area: 'problems',
    language: 'en',
    cta: ctaText,
    sections: sections.filter((section) => countWords(section.narration) > 0 || section.cues.length > 0),
  };
}

interface SectionBody {
  narration: string;
  cues: VisualCue[];
}

/**
 * Builds the spoken body of one section. Framing sentences ("Let's look at…")
 * are added for the ear, but every factual claim still comes from the article —
 * this is what keeps the deterministic writer inside the traceability contract.
 * A per-section word budget keeps very long articles from producing runaway
 * narration; whole blocks are dropped once it is reached.
 */
function sectionBody(blocks: Block[], heading: string, isFirst: boolean): SectionBody | null {
  const narrationParts: string[] = [];
  const cues: VisualCue[] = [];
  let factualWords = 0;

  const pushFacts = (text: string): boolean => {
    const words = countWords(text);
    if (factualWords + words > SECTION_NARRATION_WORD_BUDGET) return false;
    factualWords += words;
    narrationParts.push(text);
    return true;
  };

  if (!isFirst) {
    narrationParts.push(`Next, ${heading}.`);
  }

  for (const block of blocks) {
    switch (block.type) {
      case 'paragraph': {
        const text = paragraphText(block);
        if (text) {
          pushFacts(spoken(text));
        }
        break;
      }
      case 'bullet-list':
      case 'numbered-list': {
        const items = bulletItems(block);
        if (items) {
          pushFacts(`Here is what matters. ${items.map(spoken).join('. ')}.`);
          cues.push({ kind: 'bullets', items: items.map(spoken) });
        }
        break;
      }
      case 'example': {
        const code = codeOf(block);
        if (code) {
          pushFacts(
            [
              code.title ? `${code.title}.` : 'Look at this example.',
              spoken(code.content ?? 'Here is a short example.'),
              `The ${code.language} code is on screen. The article contains the complete version.`,
            ]
              .filter((part) => part !== '')
              .join(' '),
          );
          cues.push({ kind: 'code', code: code.code, language: code.language, title: code.title });
        }
        break;
      }
      case 'solution': {
        const code = codeOf(block);
        if (code) {
          pushFacts(
            [
              code.title ? `${code.title}.` : 'Here is a solution.',
              spoken(code.content ?? 'Here is the solution.'),
              `Follow the ${code.language} code on screen.`,
            ]
              .filter((part) => part !== '')
              .join(' '),
          );
          cues.push({ kind: 'code', code: code.code, language: code.language, title: code.title });
        }
        break;
      }
      case 'callout': {
        const data = block.data as { text?: string; title?: string; variant?: string } | undefined;
        if (typeof data?.text === 'string' && data.text.trim() !== '') {
          pushFacts(`${data.title ? `${data.title}. ` : ''}${spoken(data.text)}`);
          cues.push({ kind: 'quote', text: cleanSpokenText(data.text) });
        }
        break;
      }
      case 'quote': {
        const data = block.data as { text?: string } | undefined;
        if (typeof data?.text === 'string' && data.text.trim() !== '') {
          pushFacts(spoken(data.text));
          cues.push({ kind: 'quote', text: cleanSpokenText(data.text) });
        }
        break;
      }
      case 'key-terms': {
        const data = block.data as { terms?: Array<{ term?: string; definition?: string }> } | undefined;
        const terms = (data?.terms ?? [])
          .filter((t): t is { term: string; definition: string } => typeof t?.term === 'string' && typeof t?.definition === 'string')
          .slice(0, 4);
        if (terms.length > 0) {
          pushFacts(`Let's define a few terms. ${terms.map((t) => `${t.term}: ${spoken(t.definition)}`).join('. ')}.`);
          cues.push({ kind: 'terms', items: terms });
        }
        break;
      }
      case 'table': {
        const data = block.data as { title?: string; headers?: unknown; rows?: unknown } | undefined;
        if (typeof data?.title === 'string' && data.title.trim() !== '') {
          pushFacts(`${spoken(data.title)} The full table is in the article.`);
        }
        break;
      }
      case 'mermaid': {
        const definition = mermaidDefinition(block);
        const caption = (block.data as { caption?: string } | undefined)?.caption;
        if (definition) {
          narrationParts.push('The diagram on screen summarises this part.');
          cues.push({ kind: 'diagram', mermaid: definition, ...(caption !== undefined ? { caption } : {}) });
        }
        break;
      }
      case 'summary-box': {
        // handled separately by summarySection()
        break;
      }
      case 'faq-block': {
        const data = block.data as { items?: Array<{ question?: string; answer?: string }> } | undefined;
        const items = (data?.items ?? []).flatMap((item) =>
          typeof item?.question === 'string' && typeof item?.answer === 'string'
            ? [{ question: item.question, answer: item.answer }]
            : [],
        );
        for (const item of items.slice(0, 3)) {
          pushFacts(`${item.question} ${spoken(item.answer)}`);
        }
        break;
      }
      default:
        break;
    }
  }

  if (narrationParts.length === 0 && cues.length === 0) return null;
  return { narration: narrationParts.join(' '), cues };
}

function introText(lesson: Lesson): string | null {
  const first = blocksOf(lesson).find((b) => b.type === 'paragraph');
  const fromBlock = first ? paragraphText(first) : undefined;
  const description = lesson.description ?? '';
  const headings = sectionsFromLesson(lesson)
    .map((group) => group.heading)
    .filter((heading) => heading !== 'Introduction');
  const roadmap = headings.length > 1 ? ` We will cover ${listForSpeech(headings)}.` : '';

  const opening = fromBlock ?? description;
  if (countWords(spoken(opening)) < 8) {
    return `In this lesson you will learn about ${lesson.title}. ${spoken(description)}${roadmap}`.trim();
  }
  return `${spoken(opening)}${roadmap}`.trim();
}

function summarySection(lesson: Lesson): ScriptSection | null {
  const summaryBlock = blocksOf(lesson).find((b) => b.type === 'summary-box');
  const data = summaryBlock?.data as { title?: string; points?: unknown; takeaway?: string } | undefined;
  const points = Array.isArray(data?.points)
    ? data.points.filter((p): p is string => typeof p === 'string' && p.trim() !== '').slice(0, 5)
    : [];
  if (points.length === 0) return null;
  const narration = `Key takeaways. ${points.map(spoken).join('. ')}.${data?.takeaway ? ` ${spoken(data.takeaway)}` : ''}`;
  return {
    id: 'summary',
    heading: 'Key takeaways',
    narration,
    cues: [{ kind: 'summary', title: data?.title, points: points.map(spoken), takeaway: data?.takeaway }],
  };
}

function complexitySection(lesson: Lesson): ScriptSection | null {
  const complexityBlocks = blocksOf(lesson).filter((b) => {
    const heading = b.type === 'heading' ? headingText(b) : undefined;
    if (heading && /complex|trade-?off|big-?o|performance/i.test(heading)) return true;
    return false;
  });
  const body = sectionBody(complexityBlocks.flatMap((b) => (b.type === 'heading' ? [] : [b])), 'Complexity and trade-offs', false);
  if (!body) return null;
  return {
    id: 'complexity',
    heading: 'Complexity and trade-offs',
    narration: body.narration,
    cues: body.cues,
  };
}

/**
 * Closing recap built from the article's own headings (and related lessons when
 * present). Every item is traceable, so the recap is safe even for lessons that
 * have no summary box.
 */
function recapSection(lesson: Lesson, groups: Array<{ heading: string; blocks: Block[] }>): ScriptSection | null {
  const headings = groups.map((group) => group.heading);
  if (headings.length === 0) return null;

  const points = headings.map((heading) => heading);
  const narration = `What you learned. We covered ${listForSpeech(headings)}.`;
  const related = (lesson.relatedLessons ?? []).slice(0, 3);
  const relatedNarration = related.length > 0 ? ` Related lessons worth reading next: ${listForSpeech(related)}.` : '';

  return {
    id: 'recap',
    heading: 'What you learned',
    narration: `${narration}${relatedNarration}`,
    cues: related.length > 0 ? [{ kind: 'bullets', title: 'Related lessons', items: related }] : [{ kind: 'summary', title: 'What you learned', points }],
  };
}

/** "a, b and c" phrasing for spoken lists. */
function listForSpeech(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0] ?? '';
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

function mermaidDefinition(block: Block): string | null {
  const data = block.data as { definition?: string; code?: string; diagram?: string } | undefined;
  const value = data?.definition ?? data?.code ?? data?.diagram;
  return typeof value === 'string' && value.trim() !== '' ? value : null;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'section';
}

/** Entry point used by the script stage. */
export function buildScript(lesson: Lesson, ctaText: string): ScriptDocument {
  const narrative = narrativeForArea(isProblemLesson(lesson) ? 'problems' : 'courses');
  const script = narrative === 'walkthrough' ? buildWalkthroughScript(lesson, ctaText) : buildExplainerScript(lesson, ctaText);
  return applyTotalBudget(script);
}

/**
 * Enforces the total narration budget across the whole script.
 *
 * Sections are dropped from the end first (the CTA and the introduction are
 * always kept), and if a single section is still too long its narration is
 * trimmed at a word boundary. Deterministic, so the same article always yields
 * the same script.
 */
export function applyTotalBudget(script: ScriptDocument): ScriptDocument {
  const sections = [...script.sections];
  const total = () => sections.reduce((sum, section) => sum + countWords(section.narration), 0);

  while (total() > NARRATION_MAX_WORDS) {
    // Drop the last droppable section (never the intro or the CTA).
    let dropIndex = -1;
    for (let i = sections.length - 1; i >= 0; i -= 1) {
      const id = sections[i]?.id ?? '';
      if (id !== 'cta' && id !== 'introduction') {
        dropIndex = i;
        break;
      }
    }
    if (dropIndex === -1) break;
    sections.splice(dropIndex, 1);
  }

  // Still too long: trim the longest sections proportionally.
  if (total() > NARRATION_MAX_WORDS && sections.length > 0) {
    const perSection = Math.floor(NARRATION_MAX_WORDS / sections.length);
    for (const [index, section] of sections.entries()) {
      if (section.id === 'cta') continue;
      const words = section.narration.split(/\s+/);
      if (words.length > perSection) {
        sections[index] = { ...section, narration: `${words.slice(0, perSection).join(' ')}.` };
      }
    }
  }

  return { ...script, sections };
}

export function isProblemLesson(lesson: Lesson): boolean {
  // Problem lessons live in the problems area; their course slugs are the
  // problem course slugs (see lib/contentAreas.ts).
  return lesson.courseSlug?.endsWith('-problems') === true || lesson.courseSlug === 'system-design';
}
