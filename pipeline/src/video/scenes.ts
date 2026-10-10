/**
 * Scene list: maps a ScriptDocument (plus chunk timings) into an ordered list of
 * timed scenes. Deterministic by construction — the same script and timings
 * always produce the same scene list.
 */
import type { ScriptDocument, ScriptSection, VisualCue } from '../types.js';
import type { NarrationChunk } from '../stages/voice.js';
import type { Slide } from './slides.js';
import { codeSlide, ctaSlide, diagramSlide, quoteSlide, sectionSlide, summarySlide, termsSlide, titleSlide } from './slides.js';

export interface Scene {
  id: string;
  sectionId: string;
  heading: string;
  slide: Slide;
  /** Start/end of the scene within the final video (ms). */
  startMs: number;
  endMs: number;
  /** Minimum on-screen time so very short scenes are still readable. */
  minDurationMs: number;
}

export interface SceneOptions {
  /** Pause after a slide before it changes. */
  tailPadMs?: number;
  /** Minimum duration of any scene. */
  minSceneMs?: number;
}

export function buildScenes(script: ScriptDocument, chunks: NarrationChunk[], options: SceneOptions = {}): Scene[] {
  const tailPad = options.tailPadMs ?? 350;
  const minScene = options.minSceneMs ?? 900;

  // Accumulate narration duration per section from the chunk timings.
  const durationBySection = new Map<string, number>();
  for (const chunk of chunks) {
    durationBySection.set(chunk.sectionId, (durationBySection.get(chunk.sectionId) ?? 0) + chunk.durationMs);
  }

  const scenes: Scene[] = [];
  let cursor = 0;

  for (const section of script.sections) {
    const narrated = durationBySection.get(section.id) ?? 0;
    const sectionEnd = cursor + Math.max(narrated, 1200);
    const cues = section.cues.length > 0 ? section.cues : [fallbackCue(section)];
    const perCueMs = Math.max(minScene, (sectionEnd - cursor) / cues.length);

    for (const [index, cue] of cues.entries()) {
      const start = cursor;
      const end = Math.min(sectionEnd, cursor + perCueMs);
      scenes.push({
        id: `${section.id}-${index}`,
        sectionId: section.id,
        heading: section.heading,
        slide: slideForCue(cue, section),
        startMs: start,
        endMs: Math.max(end, start + minScene),
        minDurationMs: minScene,
      });
      cursor = Math.min(sectionEnd, start + perCueMs);
    }
    cursor = sectionEnd + tailPad;
  }

  return scenes;
}

function fallbackCue(section: ScriptSection): VisualCue {
  return { kind: 'title', text: section.heading, subtitle: undefined };
}

function slideForCue(cue: VisualCue, section: ScriptSection): Slide {
  switch (cue.kind) {
    case 'title':
      return titleSlide(cue.text, cue.subtitle ?? section.heading);
    case 'bullets':
      return sectionSlide(cue.title ?? section.heading, cue.items);
    case 'terms':
      return termsSlide(cue.items);
    case 'code':
      return codeSlide(cue.code, cue.language, cue.title ?? section.heading);
    case 'diagram':
      return diagramSlide(cue.caption ?? section.heading);
    case 'quote':
      return quoteSlide(cue.text);
    case 'summary':
      return summarySlide(cue.title ?? section.heading, cue.points, cue.takeaway);
    case 'cta':
      return ctaSlide(cue.text);
    default:
      return titleSlide(section.heading, undefined);
  }
}

/** Total runtime implied by the scene list. */
export function scenesDurationMs(scenes: Scene[]): number {
  return scenes.reduce((max, scene) => Math.max(max, scene.endMs), 0);
}
