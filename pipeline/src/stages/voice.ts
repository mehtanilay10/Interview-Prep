/**
 * Voice stage: narrates a stored ScriptDocument into audio + subtitles and
 * stores the text-to-speech mapping the reviewer and subtitles depend on.
 *
 * The chunk list, the concatenated narration and the SRT are all written to the
 * ephemeral work directory; only metadata (duration, voice model, chunk count)
 * is persisted, so nothing large ever lands in the database.
 */
import path from 'node:path';
import fs from 'node:fs/promises';
import { prisma } from '../db.js';
import type { PipelineConfig } from '../config.js';
import { normalizeForSpeech } from '../script/lexicon.js';
import { splitSentences, buildSrt } from '../audio/srt.js';
import { concatWavs } from '../audio/wav.js';
import { createTtsProvider, type TtsProvider } from '../audio/tts.js';
import { scriptDocumentSchema, type ScriptDocument } from '../types.js';
import { shortHash, sha256 } from '../util/hash.js';
import type { ClaimedJob } from '../queue/jobs.js';
import type { StageOutcome } from '../script/stage.js';
import { readLessonFile } from '../content/readLesson.js';
import { stableStringify } from '../content/scan.js';

export interface NarrationChunk {
  sectionId: string;
  index: number;
  text: string;
  /** Text after pronunciation normalisation (what was actually spoken). */
  spoken: string;
  durationMs: number;
}

export interface NarrationArtifacts {
  chunks: NarrationChunk[];
  narrationPath: string;
  srtPath: string;
  totalDurationMs: number;
}

export interface NarrationOptions {
  /** Provider override, used by tests. */
  provider?: TtsProvider;
}

export async function runVoiceStage(config: PipelineConfig, job: ClaimedJob): Promise<StageOutcome> {
  if (!job.assetId) return { ok: false, errorCode: 'context', errorMessage: 'voice job has no asset' };

  const asset = await prisma.videoAsset.findUnique({
    where: { id: job.assetId },
    include: { article: true },
  });
  if (!asset) return { ok: false, errorCode: 'context', errorMessage: 'asset row missing' };
  if (!asset.scriptJson) return { ok: false, errorCode: 'no-script', errorMessage: 'asset has no script yet' };

  const scriptParse = scriptDocumentSchema.safeParse(asset.scriptJson);
  if (!scriptParse.success) {
    return { ok: false, errorCode: 'script-invalid', errorMessage: 'stored script fails schema validation' };
  }
  const script = scriptParse.data;

  // Guard against content changing between the script stage and now.
  const lesson = await readLessonFile(config.repoRoot, asset.article);
  if ('error' in lesson) return { ok: false, errorCode: 'context', errorMessage: lesson.error };
  const currentHash = sha256(stableStringify(lesson.lesson));
  if (currentHash !== asset.sourceHash) {
    return {
      ok: false,
      errorCode: 'stale-asset',
      errorMessage: `article content changed since this version was scripted (${shortHash(asset.sourceHash)} → ${shortHash(currentHash)})`,
    };
  }

  const artifacts = await narrate(config, script, artifactDir(config, asset.id, asset.version), undefined);
  if (isNarrationError(artifacts)) return artifacts;

  await prisma.videoAsset.update({
    where: { id: asset.id },
    data: {
      durationMs: artifacts.totalDurationMs,
      voiceModel: providerVoiceModel(config),
      qaJson: {
        narration: {
          chunks: artifacts.chunks.length,
          totalDurationMs: artifacts.totalDurationMs,
          words: script.sections.reduce((total, section) => total + countWords(section.narration), 0),
          voiceModel: providerVoiceModel(config),
        },
      },
    },
  });

  await prisma.videoJob.create({
    data: { articleId: job.articleId, assetId: asset.id, stage: 'render', kind: job.kind, priority: 100 },
  });

  return {
    ok: true,
    metrics: {
      chunks: artifacts.chunks.length,
      durationMs: artifacts.totalDurationMs,
      ttsCalls: artifacts.chunks.length,
      voiceModel: providerVoiceModel(config),
    },
  };
}

/** Type guard separating narration errors from successful artifacts. */
export function isNarrationError(value: NarrationArtifacts | StageOutcome): value is StageOutcome {
  return 'ok' in value && value.ok === false;
}

function artifactDir(config: PipelineConfig, assetId: string, version: number): string {
  return path.join(config.workDir, 'assets', `${assetId}-v${version}`);
}

function providerVoiceModel(config: PipelineConfig): string {
  return `${config.ttsProvider}:${config.ttsVoiceName}`;
}

/** Speaks every section of the script, in order, and writes audio + SRT. */
export async function narrate(
  config: PipelineConfig,
  script: ScriptDocument,
  outputDir: string,
  providerOverride?: TtsProvider,
): Promise<NarrationArtifacts | StageOutcome> {
  await fs.mkdir(outputDir, { recursive: true });

  const tts = providerOverride ?? createTtsProvider({
    provider: config.ttsProvider,
    piperBinary: config.piperBin,
    voiceModel: config.piperVoiceModel,
    wordsPerSecond: config.wordsPerSecond,
  });

  const chunks: NarrationChunk[] = [];
  const wavs: Buffer[] = [];
  let cursorMs = 0;
  let index = 0;

  for (const section of script.sections) {
    const sentences = splitSentences(normalizeForSpeech(section.narration));
    if (sentences.length === 0) continue;

    for (const sentence of sentences) {
      index += 1;
      let result;
      try {
        result = await tts.synthesize(sentence);
      } catch (error) {
        return {
          ok: false,
          errorCode: 'tts-failed',
          errorMessage: `${(error as Error).message}`.slice(0, 500),
        };
      }

      wavs.push(result.wav);
      chunks.push({
        sectionId: section.id,
        index,
        text: sentence,
        spoken: sentence,
        durationMs: result.durationMs,
      });
      cursorMs += result.durationMs;
    }
  }

  if (chunks.length === 0) {
    return { ok: false, errorCode: 'empty-narration', errorMessage: 'script produced no speakable sentences' };
  }

  const narrationPath = path.join(outputDir, 'narration.wav');
  const srtPath = path.join(outputDir, 'narration.srt');

  await fs.writeFile(narrationPath, concatWavs(wavs));
  await fs.writeFile(srtPath, buildSrt(subtitleCues(chunks)), 'utf8');

  const totalDurationMs = chunks.reduce((total, chunk) => total + chunk.durationMs, 0);
  void cursorMs;
  return { chunks, narrationPath, srtPath, totalDurationMs };
}

/** Converts chunk durations into subtitle cues (one cue per chunk). */
export function subtitleCues(chunks: NarrationChunk[]): Array<{ startMs: number; endMs: number; text: string }> {
  const cues: Array<{ startMs: number; endMs: number; text: string }> = [];
  let cursor = 0;
  for (const chunk of chunks) {
    const start = cursor;
    const end = cursor + chunk.durationMs;
    cues.push({ startMs: start, endMs: Math.max(start + 120, end), text: chunk.text });
    cursor = end;
  }
  return cues;
}

function countWords(text: string): number {
  const trimmed = text.trim();
  return trimmed === '' ? 0 : trimmed.split(/\s+/).length;
}
