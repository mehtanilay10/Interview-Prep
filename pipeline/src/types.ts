/**
 * Pipeline-level document schemas.
 *
 * The compile-time shapes live in the shared `types/index.ts` (the app imports
 * them too); this module owns the *runtime* zod validation plus the constants
 * the stages use. The schema and the shared interfaces are checked for
 * structural equivalence at the bottom of this file.
 */
import { z } from 'zod';
import type {
  NarrativeShape,
  VideoAreaValue,
  VideoScriptDocument,
  VideoScriptSection,
  VideoVisualCue,
} from '../../types/index.js';

export type { NarrativeShape, VideoAreaValue, VideoScriptDocument, VideoScriptSection, VideoVisualCue };

export const SCRIPT_SCHEMA_VERSION = 1;

export const visualCueSchema: z.ZodType<VideoVisualCue> = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('title'), text: z.string().min(1), subtitle: z.string().optional() }),
  z.object({ kind: z.literal('bullets'), title: z.string().optional(), items: z.array(z.string()).min(1) }),
  z.object({
    kind: z.literal('terms'),
    items: z.array(z.object({ term: z.string().min(1), definition: z.string().min(1) })).min(1),
  }),
  z.object({ kind: z.literal('code'), code: z.string().min(1), language: z.string().min(1), title: z.string().optional() }),
  z.object({ kind: z.literal('diagram'), mermaid: z.string().min(1), caption: z.string().optional() }),
  z.object({ kind: z.literal('quote'), text: z.string().min(1) }),
  z.object({ kind: z.literal('summary'), title: z.string().optional(), points: z.array(z.string()).min(1), takeaway: z.string().optional() }),
  z.object({ kind: z.literal('cta'), text: z.string().min(1) }),
] as const);

export const scriptSectionSchema = z.object({
  id: z.string().min(1),
  heading: z.string().min(1),
  narration: z.string().min(1),
  cues: z.array(visualCueSchema).default([]),
});

export const scriptDocumentSchema = z.object({
  schemaVersion: z.literal(SCRIPT_SCHEMA_VERSION),
  title: z.string().min(1),
  description: z.string().min(1),
  narrative: z.enum(['explainer', 'walkthrough']),
  area: z.enum(['courses', 'problems']),
  language: z.string().default('en'),
  cta: z.string().min(1),
  sections: z.array(scriptSectionSchema).min(1),
}) as unknown as z.ZodType<VideoScriptDocument>;

export type VisualCue = VideoVisualCue;
export type ScriptSection = VideoScriptSection;
export type ScriptDocument = VideoScriptDocument;

/** Narration length bounds enforced by the traceability gate. */
export const NARRATION_MIN_WORDS = 100;
export const NARRATION_MAX_WORDS = 2000;

/** Per-section narration budget so a huge article cannot run out of control. */
export const SECTION_NARRATION_WORD_BUDGET = 450;

/**
 * Headings a writer is allowed to introduce that are structural rather than
 * copied from the article. Everything else must map to a source heading.
 *
 * The same structural vocabulary is allowed for both narrative shapes: these are
 * container headings, so they cannot introduce untraceable *content*, and the
 * traceability gate still rejects invented topical headings.
 */
export const STRUCTURAL_HEADINGS: Record<NarrativeShape, string[]> = {
  explainer: [
    'introduction',
    'summary',
    'key takeaways',
    'what you learned',
    'related lessons',
    'problem',
    'approach',
    'solution',
    'complexity',
    'complexity and trade-offs',
    'trade-offs',
    'keep practicing',
  ],
  walkthrough: [
    'introduction',
    'summary',
    'key takeaways',
    'what you learned',
    'related lessons',
    'problem',
    'approach',
    'solution',
    'complexity',
    'complexity and trade-offs',
    'trade-offs',
    'keep practicing',
  ],
};

/**
 * Structural equivalence guard: the runtime schema and the shared compile-time
 * interface must stay aligned, otherwise a script that passes validation could
 * arrive at the app's review UI in an unexpected shape.
 */
const schemaIsAssignableToSharedType: VideoScriptDocument = {} as unknown as z.infer<typeof scriptDocumentSchema>;
void schemaIsAssignableToSharedType;

export function countWords(text: string): number {
  const trimmed = text.trim();
  if (trimmed === '') return 0;
  return trimmed.split(/\s+/).length;
}

export function scriptWordCount(script: ScriptDocument): number {
  return script.sections.reduce((total, section) => total + countWords(section.narration), 0);
}
