/**
 * Render stage: scene list → slides → frames → final video file.
 *
 * The narration produced by the voice stage is the clock: scene boundaries come
 * from actual chunk durations, so subtitles and visuals stay in sync with the
 * audio even when TTS speed varies per sentence.
 */
import path from 'node:path';
import fs from 'node:fs/promises';
import { prisma } from '../db.js';
import type { PipelineConfig } from '../config.js';
import { scriptDocumentSchema } from '../types.js';
import { buildScenes, scenesDurationMs } from '../video/scenes.js';
import { loadSharp, NoopRasterizer, SharpRasterizer, type Rasterizer, type RasterizedFrame } from '../video/raster.js';
import { DryRunRenderer, FfmpegRenderer, type RenderResult, type VideoRenderer } from '../video/renderer.js';
import { parseSrt } from '../audio/srt.js';
import type { ClaimedJob } from '../queue/jobs.js';
import type { StageOutcome } from '../script/stage.js';

export interface RenderStageResult extends StageOutcome {
  artifacts?: {
    videoPath: string;
    scenePlanPath: string;
    subtitlePath: string | null;
    durationMs: number;
    width: number;
    height: number;
    realVideo: boolean;
  };
}

export async function runRenderStage(config: PipelineConfig, job: ClaimedJob): Promise<RenderStageResult> {
  if (!job.assetId) return { ok: false, errorCode: 'context', errorMessage: 'render job has no asset' };

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

  const outputDir = path.join(config.workDir, 'assets', `${asset.id}-v${asset.version}`);
  const narrationPath = path.join(outputDir, 'narration.wav');
  const subtitlePath = path.join(outputDir, 'narration.srt');

  const narrationExists = await fileExists(narrationPath);
  if (!narrationExists) {
    return {
      ok: false,
      errorCode: 'missing-narration',
      errorMessage: `narration audio not found at ${narrationPath}; the voice stage must run in the same workspace`,
    };
  }

  // Chunk timings are rebuilt from the SRT written by the voice stage so a
  // render retry after a crash produces the same scene list.
  const subtitleCues = await fileExists(subtitlePath) ? parseSrt(await fs.readFile(subtitlePath, 'utf8')) : [];
  const chunks = subtitleCues.map((cue, index) => ({
    sectionId: sectionForTime(script, cue.startMs, index),
    index: index + 1,
    text: cue.text,
    spoken: cue.text,
    durationMs: Math.max(0, cue.endMs - cue.startMs),
  }));

  const scenes = buildScenes(script, chunks);
  const durationMs = Math.max(scenesDurationMs(scenes), asset.durationMs ?? 0);

  const rasterizer = await createRasterizer(config);
  const frames: RasterizedFrame[] = await rasterizer.rasterize(scenes, path.join(outputDir, 'frames'));

  const outputPath = path.join(outputDir, `video-v${asset.version}.mp4`);
  const renderer = await createRenderer(config);
  let result: RenderResult;
  try {
    result = await renderer.render({
      scenes,
      frames,
      narrationPath,
      subtitlePath: config.dryRun ? null : subtitlePath,
      outputPath,
      durationMs,
      fps: config.fps,
    });
  } catch (error) {
    return { ok: false, errorCode: 'render-failed', errorMessage: (error as Error).message };
  }

  const fileSizeBytes = Number((await fs.stat(result.outputPath)).size);
  await prisma.videoAsset.update({
    where: { id: asset.id },
    data: {
      status: 'generating',
      durationMs: result.durationMs,
      width: result.width,
      height: result.height,
      fileSizeBytes: BigInt(fileSizeBytes),
      lastError: null,
    },
  });

  await prisma.videoJob.create({
    data: { articleId: job.articleId, assetId: asset.id, stage: 'qa', kind: job.kind, priority: 100 },
  });

  return {
    ok: true,
    metrics: {
      scenes: scenes.length,
      frames: frames.length,
      renderer: renderer.name,
      rasterizer: rasterizer.name,
      durationMs: result.durationMs,
      sizeBytes: fileSizeBytes,
    },
    artifacts: {
      videoPath: result.outputPath,
      scenePlanPath: `${result.outputPath}.sceneplan.json`,
      subtitlePath: (await fileExists(subtitlePath)) ? subtitlePath : null,
      durationMs: result.durationMs,
      width: result.width,
      height: result.height,
      realVideo: result.real,
    },
  };
}

/**
 * Maps a subtitle cue back to the script section that was speaking then.
 * Subtitles are written in script order, so the cue index is the section index.
 */
function sectionForTime(
  script: Parameters<typeof buildScenes>[0],
  timeMs: number,
  index: number,
): string {
  void timeMs;
  const direct = script.sections[index]?.id;
  if (direct) return direct;
  // Fall back to the last section when cue and section counts differ.
  return script.sections[script.sections.length - 1]?.id ?? 'section-0';
}

async function createRasterizer(config: PipelineConfig): Promise<Rasterizer> {
  if (config.dryRun) return new NoopRasterizer();
  const sharp = await loadSharp();
  return sharp ? new SharpRasterizer(sharp) : new NoopRasterizer();
}

async function createRenderer(config: PipelineConfig): Promise<VideoRenderer> {
  if (config.dryRun) return new DryRunRenderer();
  return new FfmpegRenderer(config.ffmpegBin);
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}
