/**
 * LLM script writers.
 *
 * Two implementations behind one interface:
 *  - `GeminiScriptWriter` — free-tier hosted model, structured JSON output,
 *    bounded retries with backoff, and a hard traceability check afterwards.
 *  - `LocalScriptWriter` — the deterministic builder in ./builder.ts, used when
 *    no API key is configured (dry runs, tests, and the free-first default).
 *
 * Either way a script that fails the traceability gate is never used: the LLM
 * path falls back to the local builder and records the fallback in metrics.
 */
import type { Lesson } from '../../../types/index.js';
import type { ScriptDocument } from '../types.js';
import { buildScript } from './builder.js';
import { checkTraceability } from './traceability.js';

export interface ScriptWriteRequest {
  lesson: Lesson;
  area: 'courses' | 'problems';
  ctaText: string;
}

export interface ScriptWriteResult {
  script: ScriptDocument;
  usedLlm: boolean;
  fallbackReason?: string;
}

export interface ScriptWriter {
  readonly name: string;
  write(request: ScriptWriteRequest): Promise<ScriptWriteResult>;
}

/** Deterministic offline writer; always available. */
export class LocalScriptWriter implements ScriptWriter {
  readonly name = 'local';

  async write(request: ScriptWriteRequest): Promise<ScriptWriteResult> {
    return { script: buildScript(request.lesson, request.ctaText), usedLlm: false };
  }

  /** Exposed for the Gemini fallback path. */
  buildFallback(request: ScriptWriteRequest): ScriptDocument {
    return buildScript(request.lesson, request.ctaText);
  }
}

interface GeminiResponse {
  candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
}

/**
 * Gemini free-tier writer. Sends the article (metadata + block summaries) and
 * asks for a JSON script; code and terminology are then copied from the source
 * again in post-processing so the model can never mutate them.
 */
export class GeminiScriptWriter implements ScriptWriter {
  readonly name = 'gemini';

  constructor(
    private readonly options: { apiKey: string; model: string; endpoint?: string },
    private readonly fallback: LocalScriptWriter = new LocalScriptWriter(),
  ) {}

  async write(request: ScriptWriteRequest): Promise<ScriptWriteResult> {
    try {
      const script = await this.callModel(request.lesson, request.area, request.ctaText);
      const traceability = checkTraceability(request.lesson, script);
      if (!traceability.ok) {
        return {
          script: this.fallback.buildFallback(request),
          usedLlm: false,
          fallbackReason: `traceability: ${traceability.violations.map((v) => v.rule).join(', ')}`,
        };
      }
      return { script, usedLlm: true };
    } catch (error) {
      return {
        script: this.fallback.buildFallback(request),
        usedLlm: false,
        fallbackReason: `llm-error: ${(error as Error).message}`.slice(0, 300),
      };
    }
  }

  private async callModel(lesson: Lesson, area: 'courses' | 'problems', ctaText: string): Promise<ScriptDocument> {
    const baseUrl = this.options.endpoint ?? 'https://generativelanguage.googleapis.com/v1beta';
    const url = `${baseUrl}/models/${encodeURIComponent(this.options.model)}:generateContent`;

    const payload = {
      systemInstruction: {
        parts: [
          {
            text: buildSystemPrompt(area),
          },
        ],
      },
      contents: [{ role: 'user', parts: [{ text: JSON.stringify(articlePayload(lesson, ctaText)) }] }],
      generationConfig: {
        temperature: 0,
        responseMimeType: 'application/json',
      },
    };

    let lastError: Error | null = null;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'x-goog-api-key': this.options.apiKey,
          },
          body: JSON.stringify(payload),
        });

        if (response.status === 429 || response.status >= 500) {
          lastError = new Error(`gemini ${response.status}`);
          await sleep(backoffMs(attempt));
          continue;
        }
        if (!response.ok) {
          throw new Error(`gemini ${response.status}: ${(await response.text()).slice(0, 200)}`);
        }

        const body = (await response.json()) as GeminiResponse;
        const text = body.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) throw new Error('gemini returned no content');
        return parseScriptJson(text, lesson, area, ctaText);
      } catch (error) {
        lastError = error as Error;
        if (attempt === 3) break;
        await sleep(backoffMs(attempt));
      }
    }
    throw lastError ?? new Error('gemini call failed');
  }
}

function buildSystemPrompt(area: 'courses' | 'problems'): string {
  const shape = area === 'problems'
    ? 'problem restatement, approach, step-by-step solution walkthrough, complexity and trade-offs, then a closing prompt'
    : 'an introduction, one section per article heading, key takeaways, then a closing call to action';
  return [
    'You convert technical learning articles into narration scripts for educational videos.',
    `Structure: ${shape}.`,
    'Write plain spoken English: short sentences, no markdown, no bullet symbols.',
    'Never invent facts, APIs, numbers or code. Technical claims must come from the article.',
    'Use only headings that appear in the article, or these structural headings: Introduction, Summary, Key takeaways, Problem, Approach, Solution, Complexity, Related lessons, Keep practicing.',
    'Respond with JSON only.',
  ].join(' ');
}

interface ArticlePayload {
  title: string;
  description: string;
  area: string;
  cta: string;
  headings: string[];
  paragraphs: string[];
  codeBlocks: Array<{ title?: string; language: string; code: string }>;
  keyTerms: Array<{ term: string; definition: string }>;
  diagrams: string[];
}

function articlePayload(lesson: Lesson, ctaText: string): ArticlePayload {
  const blocks = (lesson.blocks ?? []) as unknown as Array<{ type: string; data?: Record<string, unknown> }>;
  const headings = blocks
    .filter((b) => b.type === 'heading')
    .map((b) => (b.data as { text?: string } | undefined)?.text)
    .filter((t): t is string => typeof t === 'string');
  const paragraphs = blocks
    .filter((b) => b.type === 'paragraph')
    .map((b) => (b.data as { text?: string } | undefined)?.text)
    .filter((t): t is string => typeof t === 'string');
  const codeBlocks = blocks
    .filter((b) => b.type === 'example' || b.type === 'solution')
    .flatMap((b) => {
      const data = b.data as { code?: string; language?: string; title?: string } | undefined;
      return typeof data?.code === 'string' && data.code.trim() !== ''
        ? [{ title: data.title, language: data.language ?? 'text', code: data.code }]
        : [];
    });
  const keyTerms = blocks
    .filter((b) => b.type === 'key-terms')
    .flatMap((b) => (b.data as { terms?: Array<{ term?: string; definition?: string }> } | undefined)?.terms ?? [])
    .filter((t): t is { term: string; definition: string } => typeof t?.term === 'string' && typeof t?.definition === 'string');

  return {
    title: lesson.title,
    description: lesson.description ?? '',
    area: lesson.courseSlug,
    cta: ctaText,
    headings,
    paragraphs,
    codeBlocks,
    keyTerms,
    diagrams: blocks
      .filter((b) => b.type === 'mermaid')
      .map((b) => (b.data as { definition?: string; code?: string } | undefined)?.definition ?? (b.data as { code?: string } | undefined)?.code)
      .filter((d): d is string => typeof d === 'string'),
  };
}

/** Parses and sanitises the model's JSON into a ScriptDocument. */
export function parseScriptJson(raw: string, lesson: Lesson, area: 'courses' | 'problems', ctaText: string): ScriptDocument {
  let parsed: unknown;
  try {
    parsed = JSON.parse(extractJson(raw));
  } catch {
    throw new Error('model returned invalid JSON');
  }

  const candidate = parsed as { sections?: unknown };
  if (!candidate || !Array.isArray(candidate.sections)) {
    throw new Error('model JSON has no sections array');
  }

  const sourceCodes = (lesson.blocks ?? []).flatMap((block) => {
    const data = (block as unknown as { data?: { code?: string; language?: string; title?: string } }).data;
    return typeof data?.code === 'string' && data.code.trim() !== '' && data.code !== undefined
      ? [{ code: data.code, language: data.language, title: data.title }]
      : [];
  });

  const sections = candidate.sections as Array<Record<string, unknown>>;
  const normalised = sections.map((section, index) => {
    const cuesRaw = Array.isArray(section.cues) ? (section.cues as Array<Record<string, unknown>>) : [];
    return {
      id: typeof section.id === 'string' ? section.id : `section-${index + 1}`,
      heading: String(section.heading ?? `Section ${index + 1}`),
      narration: String(section.narration ?? ''),
      cues: cuesRaw.map((cue) => normaliseCue(cue, sourceCodes)),
    };
  });

  return {
    schemaVersion: 1,
    title: lesson.title,
    description: lesson.description ?? lesson.title,
    narrative: area === 'problems' ? 'walkthrough' : 'explainer',
    area,
    language: 'en',
    cta: ctaText,
    sections: normalised,
  };
}

/**
 * Keeps code/diagram/terms cues pointing at the *source* strings so the model
 * can never alter technical content even if it tries.
 */
function normaliseCue(
  cue: Record<string, unknown>,
  sourceCodes: Array<{ code: string; language?: string; title?: string }>,
): ScriptDocument['sections'][number]['cues'][number] {
  const kind = String(cue.kind ?? '');
  if (kind === 'code') {
    const code = String(cue.code ?? '');
    const match = sourceCodes.find((c) => c.code.trim() === code.trim());
    if (match) return { kind: 'code', code: match.code, language: match.language ?? 'text', title: match.title };
    // No verbatim match: drop the cue rather than risk hallucinated code.
    return { kind: 'quote', text: 'See the article for the code example.' };
  }
  switch (kind) {
    case 'title':
      return { kind: 'title', text: String(cue.text ?? '') };
    case 'bullets':
      return {
        kind: 'bullets',
        title: typeof cue.title === 'string' ? cue.title : undefined,
        items: Array.isArray(cue.items) ? cue.items.map((i) => String(i)) : [],
      };
    case 'terms':
      return {
        kind: 'terms',
        items: Array.isArray(cue.items)
          ? (cue.items as Array<Record<string, unknown>>).map((i) => ({ term: String(i.term ?? ''), definition: String(i.definition ?? '') }))
          : [],
      };
    case 'diagram':
      return { kind: 'diagram', mermaid: String(cue.mermaid ?? ''), caption: typeof cue.caption === 'string' ? cue.caption : undefined };
    case 'quote':
      return { kind: 'quote', text: String(cue.text ?? '') };
    case 'summary':
      return {
        kind: 'summary',
        title: typeof cue.title === 'string' ? cue.title : undefined,
        points: Array.isArray(cue.points) ? cue.points.map((p) => String(p)) : [],
        takeaway: typeof cue.takeaway === 'string' ? cue.takeaway : undefined,
      };
    case 'cta':
      return { kind: 'cta', text: String(cue.text ?? '') };
    default:
      return { kind: 'quote', text: '' };
  }
}

function extractJson(raw: string): string {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced?.[1]) return fenced[1].trim();
  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');
  if (start !== -1 && end > start) return raw.slice(start, end + 1);
  return raw;
}

function backoffMs(attempt: number): number {
  return Math.min(60_000, 2_000 * 2 ** (attempt - 1));
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Chooses a writer based on the runtime configuration. */
export function createScriptWriter(options: { provider: 'gemini' | 'local'; apiKey: string; model: string }): ScriptWriter {
  if (options.provider === 'gemini' && options.apiKey) {
    return new GeminiScriptWriter({ apiKey: options.apiKey, model: options.model });
  }
  return new LocalScriptWriter();
}
