/**
 * Selftest: validates the whole media pipeline against the real article corpus
 * without touching the database or any external service.
 *
 * This is the fast proof that the compiler works end-to-end (plan §13b):
 * accuracy gate, narration, subtitles, scene plan and QA all run against real
 * lessons, so a failure here means the pipeline itself is broken — not a
 * database or network issue.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { scanLessons, stableStringify } from './content/scan.js';
import { createScriptWriter } from './script/llm.js';
import { checkTraceability } from './script/traceability.js';
import { validateScript } from './script/stage.js';
import { narrate, isNarrationError } from './stages/voice.js';
import { buildScenes, scenesDurationMs } from './video/scenes.js';
import { DryRunRenderer } from './video/renderer.js';
import { NoopRasterizer } from './video/raster.js';
import { runQaChecks } from './stages/qa.js';
import { parseSrt } from './audio/srt.js';
import { articleUrl } from './config.js';
import type { PipelineConfig } from './config.js';

export interface SelfTestOptions {
  config: PipelineConfig;
  sample?: number;
  courseFilter?: string;
}

export interface SelfTestResult {
  articlesScanned: number;
  tested: number;
  passed: number;
  skipped: number;
  failed: number;
  failures: Array<{ lesson: string; reason: string }>;
  durationMs: number;
}

export async function runSelftest(options: SelfTestOptions): Promise<SelfTestResult> {
  const { config } = options;
  const started = Date.now();
  const scanned = await scanLessons(config.repoRoot);
  const filter = options.courseFilter;
  const candidates = filter
    ? scanned.filter((item) => item.lesson.courseSlug === filter)
    : scanned;

  const sample = pickSample(candidates, options.sample ?? 5);
  const writer = createScriptWriter({
    provider: config.llmProvider,
    apiKey: config.llmApiKey,
    model: config.llmModel,
  });

  const failures: Array<{ lesson: string; reason: string }> = [];
  const skips: Array<{ lesson: string; reason: string }> = [];
  const workRoot = path.join(config.workDir, 'selftest');
  await fs.rm(workRoot, { recursive: true, force: true }).catch(() => undefined);

  for (const item of sample) {
    const lesson = `${item.area}/${item.lesson.courseSlug}/${item.lesson.moduleSlug}/${item.lesson.slug}`;
    try {
      const ctaText = `The full article is at ${articleUrl(config, item.area, item.lesson.courseSlug, item.lesson.moduleSlug, item.lesson.slug)}`;
      const written = await writer.write({ lesson: item.lesson, area: item.area, ctaText });

      const validation = validateScript(written.script);
      if (!validation.ok) {
        // Articles too small to narrate are a permanent dead-letter in the real
        // pipeline (article-too-small), not a defect: report them as skips so a
        // green run means the *pipeline* works.
        if (validation.reason.includes('too short')) {
          skips.push({ lesson, reason: validation.reason });
          console.log(`  SKIP ${lesson} — ${validation.reason}`);
          continue;
        }
        throw new Error(`script invalid: ${validation.reason}`);
      }

      const traceability = checkTraceability(item.lesson, written.script);
      if (!traceability.ok) {
        throw new Error(`traceability: ${traceability.violations.map((v) => `${v.rule}: ${v.detail}`).join('; ')}`);
      }

      const outputDir = path.join(workRoot, `${item.area}-${item.lesson.slug}`);
      const narration = await narrate(config, written.script, outputDir, undefined);
      if (isNarrationError(narration)) {
        throw new Error(`narration: ${narration.errorMessage ?? narration.errorCode}`);
      }

      // Subtitles must line up with the audio that was actually produced.
      // wavDuration returns milliseconds, matching totalDurationMs.
      const audioMs = await wavDuration(await fs.readFile(narration.narrationPath));
      const cues = parseSrt(await fs.readFile(narration.srtPath, 'utf8'));
      if (cues.length === 0) throw new Error('no subtitle cues produced');
      const lastCueEnd = cues[cues.length - 1]?.endMs ?? 0;
      if (Math.abs(audioMs - narration.totalDurationMs) > 1500) {
        throw new Error(`audio/summary duration mismatch: ${audioMs}ms vs ${narration.totalDurationMs}ms`);
      }
      if (lastCueEnd > audioMs + 1000) throw new Error(`subtitles run past the audio (${lastCueEnd}ms > ${audioMs}ms)`);

      const chunks = cues.map((cue, index) => ({
        sectionId: written.script.sections[Math.min(index, written.script.sections.length - 1)]?.id ?? 'section-0',
        index: index + 1,
        text: cue.text,
        spoken: cue.text,
        durationMs: Math.max(0, cue.endMs - cue.startMs),
      }));

      const scenes = buildScenes(written.script, chunks);
      if (scenes.length === 0) throw new Error('no scenes produced');
      const scenesMs = scenesDurationMs(scenes);
      if (scenesMs < audioMs * 0.5) throw new Error(`scene list (${scenesMs}ms) does not cover narration (${audioMs}ms)`);

      const rasterizer = new NoopRasterizer();
      const frames = await rasterizer.rasterize(scenes, path.join(outputDir, 'frames'));
      const renderer = new DryRunRenderer();
      const rendered = await renderer.render({
        scenes,
        frames,
        narrationPath: narration.narrationPath,
        subtitlePath: narration.srtPath,
        outputPath: path.join(outputDir, 'video.mp4'),
        durationMs: audioMs,
        fps: config.fps,
      });
      if (!rendered.outputPath) throw new Error('render produced no output path');

      const report = await runQaChecks({
        lesson: item.lesson,
        scriptJson: JSON.parse(JSON.stringify(written.script)),
        outputDir,
        declaredDurationMs: audioMs,
        declaredWidth: rendered.width,
        declaredHeight: rendered.height,
        hasRealVideo: false,
      });
      if (!report.ok) {
        throw new Error(`qa: ${report.checks.filter((c) => !c.ok).map((c) => `${c.name} (${c.detail})`).join('; ')}`);
      }

      console.log(`  PASS ${lesson} — ${cues.length} cues, ${scenes.length} scenes, ${(audioMs / 1000).toFixed(1)}s`);
    } catch (error) {
      failures.push({ lesson, reason: (error as Error).message });
      console.log(`  FAIL ${lesson} — ${(error as Error).message}`);
    }
  }

  // Hash stability check: the same lesson must always hash to the same value.
  if (sample.length > 1) {
    const first = sample[0]!.lesson;
    const hashA = stableStringify(first);
    const hashB = stableStringify(JSON.parse(JSON.stringify(first)));
    if (hashA !== hashB) {
      failures.push({ lesson: 'hash-stability', reason: 'stableStringify is not stable across a JSON round-trip' });
    }
  }

  const result: SelfTestResult = {
    articlesScanned: scanned.length,
    tested: sample.length,
    passed: sample.length - failures.length - skips.length,
    skipped: skips.length,
    failed: failures.length,
    failures,
    durationMs: Date.now() - started,
  };

  console.log(
    `selftest: scanned=${result.articlesScanned} tested=${result.tested} passed=${result.passed} skipped(too-small)=${result.skipped} failed=${result.failed} in ${result.durationMs}ms`,
  );
  if (result.failed > 0) {
    process.exitCode = 1;
  }
  return result;
}

/** Measures narration length from the WAV header on disk. */
async function wavDuration(buffer: Buffer): Promise<number> {
  const { wavDurationMs } = await import('./audio/wav.js');
  return wavDurationMs(buffer);
}

/** Deterministic sample spread across the corpus so failures aren't localised. */
function pickSample<T extends { area: string; lesson: { courseSlug: string; slug: string } }>(items: T[], count: number): T[] {
  if (items.length <= count) return items;
  const stride = Math.floor(items.length / count);
  const sample: T[] = [];
  for (let i = 0; i < count; i += 1) {
    const item = items[Math.min(items.length - 1, i * stride)];
    if (item) sample.push(item);
  }
  return sample;
}
