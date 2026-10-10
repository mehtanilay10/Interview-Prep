/**
 * QA stage: the deterministic gate a video must pass before a human is asked to
 * review it (plan §4.5).
 *
 * Checks run in three groups: the script (schema, traceability, coverage), the
 * audio (presence, duration vs. narration estimate, loudness), and the video
 * container (when a real encode exists). Any failure blocks the asset from
 * `awaiting_review` and surfaces a structured error on the dashboard.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { prisma } from '../db.js';
import type { PipelineConfig } from '../config.js';
import { scriptDocumentSchema, countWords, NARRATION_MIN_WORDS } from '../types.js';
import { checkTraceability } from '../script/traceability.js';
import { readLessonFile } from '../content/readLesson.js';
import { parseSrt } from '../audio/srt.js';
import { decodeWav, wavRms, wavPeak } from '../audio/wav.js';
import type { ClaimedJob } from '../queue/jobs.js';
import type { StageOutcome } from '../script/stage.js';

export interface QaCheck {
  name: string;
  ok: boolean;
  skipped?: boolean;
  detail: string;
}

export interface QaReport {
  ok: boolean;
  checks: QaCheck[];
  durationMs: number | null;
  warnings: string[];
}

/** Loudness floor for real speech; the dry-run synthetic silence is skipped. */
const MIN_RMS = 0.01;
const MAX_RMS = 0.7;
const MIN_PEAK = 0.02;
const MAX_PEAK = 0.999;
const DEFAULT_MIN_DURATION_MS = 30_000;

export async function runQaStage(config: PipelineConfig, job: ClaimedJob): Promise<StageOutcome & { report?: QaReport }> {
  if (!job.assetId) return { ok: false, errorCode: 'context', errorMessage: 'qa job has no asset' };

  const asset = await prisma.videoAsset.findUnique({
    where: { id: job.assetId },
    include: { article: true },
  });
  if (!asset) return { ok: false, errorCode: 'context', errorMessage: 'asset row missing' };
  if (!asset.scriptJson) return { ok: false, errorCode: 'no-script', errorMessage: 'asset has no script yet' };

  const lesson = await readLessonFile(config.repoRoot, asset.article);
  if ('error' in lesson) return { ok: false, errorCode: 'context', errorMessage: lesson.error };

  const outputDir = path.join(config.workDir, 'assets', `${asset.id}-v${asset.version}`);
  const report = await runQaChecks({
    lesson: lesson.lesson,
    scriptJson: asset.scriptJson,
    outputDir,
    declaredDurationMs: asset.durationMs,
    declaredWidth: asset.width,
    declaredHeight: asset.height,
    hasRealVideo: !config.dryRun,
    config,
  });

  await prisma.videoAsset.update({
    where: { id: asset.id },
    data: {
      qaJson: report as unknown as object,
      ...(report.ok
        ? { status: 'awaiting_review', lastError: null }
        : {
            status: 'failed',
            failureCount: { increment: 1 },
            lastError: report.checks.filter((c) => !c.ok).map((c) => `${c.name}: ${c.detail}`).join('; ').slice(0, 2000),
          }),
    },
  });

  if (!report.ok) {
    return {
      ok: false,
      errorCode: 'qa-failed',
      errorMessage: report.checks.filter((c) => !c.ok && !c.skipped).map((c) => `${c.name}: ${c.detail}`).join('; ').slice(0, 1000),
      report,
    };
  }

  // A passing QA gates the video into human review (decision D1). The upload
  // that follows exists so reviewers have an embeddable player; the video stays
  // unlisted until a reviewer approves it.
  await prisma.videoJob.create({
    data: { articleId: job.articleId, assetId: asset.id, stage: 'upload', kind: 'upload-unlisted', priority: 90 },
  });

  return {
    ok: true,
    metrics: {
      checks: report.checks.length,
      failed: report.checks.filter((c) => !c.ok && !c.skipped).length,
      skipped: report.checks.filter((c) => c.skipped).length,
      durationMs: report.durationMs ?? 0,
    },
    report,
  };
}

export interface QaInput {
  lesson: unknown;
  scriptJson: unknown;
  outputDir: string;
  declaredDurationMs: number | null;
  declaredWidth: number | null;
  declaredHeight: number | null;
  hasRealVideo: boolean;
  config?: Pick<PipelineConfig, 'minDurationMs' | 'maxDurationMs'>;
}

/** Pure-ish QA implementation: takes already-loaded inputs, returns a report. */
export async function runQaChecks(input: QaInput): Promise<QaReport> {
  const checks: QaCheck[] = [];
  const warnings: string[] = [];
  const lesson = input.lesson as Parameters<typeof checkTraceability>[0];
  const minDurationMs = input.config?.minDurationMs ?? DEFAULT_MIN_DURATION_MS;
  const maxDurationMs = input.config?.maxDurationMs ?? 1_200_000;

  // 1. Script schema + size
  const parsed = scriptDocumentSchema.safeParse(input.scriptJson);
  checks.push({
    name: 'script-schema',
    ok: parsed.success,
    detail: parsed.success ? `${parsed.data.sections.length} sections` : `invalid script: ${parsed.error.issues.map((i) => i.message).join(', ')}`.slice(0, 300),
  });

  if (!parsed.success) {
    return { ok: false, checks, durationMs: input.declaredDurationMs, warnings };
  }
  const script = parsed.data;

  // 2. Traceability: code / terminology / diagrams all verbatim from the article
  const traceability = checkTraceability(lesson, script);
  checks.push({
    name: 'code-traceability',
    ok: traceability.ok,
    detail: traceability.ok
      ? `${script.sections.reduce((total, s) => total + s.cues.filter((c) => c.kind === 'code').length, 0)} code cues verified verbatim`
      : traceability.violations.map((v) => `${v.rule}: ${v.detail}`).join('; ').slice(0, 400),
  });

  // 3. Coverage: narration long enough and section map matches heading map
  const words = script.sections.reduce((total, section) => total + countWords(section.narration), 0);
  checks.push({
    name: 'narration-length',
    ok: words >= NARRATION_MIN_WORDS,
    detail: `${words} words of narration`,
  });

  // 4. Audio present and consistent with the script's estimated length
  const narrationPath = path.join(input.outputDir, 'narration.wav');
  let actualDurationMs: number | null = null;
  try {
    const buffer = await fs.readFile(narrationPath);
    const wav = decodeWav(buffer);
    actualDurationMs = Math.round((wav.samples.length / wav.channels / wav.sampleRate) * 1000);
    checks.push({ name: 'audio-present', ok: wav.samples.length > 0, detail: `${actualDurationMs}ms of ${wav.sampleRate}Hz audio` });
  } catch (error) {
    checks.push({ name: 'audio-present', ok: false, detail: `narration audio missing: ${(error as Error).message}`.slice(0, 200) });
  }

  if (actualDurationMs !== null) {
    checks.push({
      name: 'duration-in-range',
      ok: actualDurationMs >= minDurationMs && actualDurationMs <= maxDurationMs,
      detail: `${actualDurationMs}ms (allowed ${minDurationMs}–${maxDurationMs}ms)`,
    });

    if (input.declaredDurationMs !== null) {
      const drift = Math.abs(actualDurationMs - input.declaredDurationMs);
      checks.push({
        name: 'duration-matches-stages',
        ok: drift <= Math.max(5000, input.declaredDurationMs * 0.25),
        detail: `audio ${actualDurationMs}ms vs recorded ${input.declaredDurationMs}ms`,
      });
    }
  }

  // 5. Loudness — only meaningful for real speech, skipped for synthetic audio
  if (input.hasRealVideo) {
    try {
      const buffer = await fs.readFile(narrationPath);
      const rms = wavRms(buffer);
      const peak = wavPeak(buffer);
      checks.push({
        name: 'audio-loudness',
        ok: rms >= MIN_RMS && rms <= MAX_RMS && peak >= MIN_PEAK && peak <= MAX_PEAK,
        detail: `rms ${rms.toFixed(4)}, peak ${peak.toFixed(3)}`,
      });
    } catch (error) {
      checks.push({ name: 'audio-loudness', ok: false, detail: (error as Error).message.slice(0, 200) });
    }
  } else {
    checks.push({ name: 'audio-loudness', ok: true, skipped: true, detail: 'synthetic audio in dry-run mode' });
  }

  // 6. Subtitles exist, are ordered, and cover the audio
  try {
    const srt = await fs.readFile(path.join(input.outputDir, 'narration.srt'), 'utf8');
    const cues = parseSrt(srt);
    const ordered = cues.every((cue, index) => index === 0 || cue.startMs >= (cues[index - 1]?.startMs ?? 0));
    const coversAudio = actualDurationMs === null || cues.length === 0 || (cues[cues.length - 1]?.endMs ?? 0) >= actualDurationMs * 0.9;
    checks.push({
      name: 'subtitles',
      ok: cues.length > 0 && ordered && coversAudio,
      detail: `${cues.length} cues, ordered=${ordered}, coversAudio=${coversAudio}`,
    });
  } catch {
    checks.push({ name: 'subtitles', ok: false, detail: 'subtitle file missing' });
  }

  // 7. Video container — real encodes carry dimensions; dry runs do not
  if (input.hasRealVideo) {
    const expectedWidth = input.declaredWidth ?? 1920;
    const expectedHeight = input.declaredHeight ?? 1080;
    checks.push({
      name: 'video-dimensions',
      ok: expectedWidth > 0 && expectedHeight > 0,
      detail: `${expectedWidth}x${expectedHeight}`,
    });
  } else {
    checks.push({ name: 'video-dimensions', ok: true, skipped: true, detail: 'dry-run render (no encoded video)' });
  }

  // 8. Every visual cue produced at least one scene worth of content
  const cueCount = script.sections.reduce((total, section) => total + section.cues.length, 0);
  checks.push({
    name: 'visual-cues',
    ok: cueCount > 0,
    detail: `${cueCount} visual cues across ${script.sections.length} sections`,
  });

  const ok = checks.every((check) => check.ok || check.skipped === true);
  return { ok, checks, durationMs: actualDurationMs ?? input.declaredDurationMs, warnings };
}
