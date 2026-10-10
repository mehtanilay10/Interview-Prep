/**
 * Video renderer.
 *
 * Assembles rasterised slides + narration audio into an MP4 with burned-in
 * subtitles using ffmpeg (preinstalled on GitHub-hosted runners). The command
 * is built by a pure function so it can be unit-tested without ffmpeg present.
 *
 * Interfaces:
 *  - `FfmpegRenderer` — production path.
 *  - `DryRunRenderer` — writes the scene plan and a placeholder file so the
 *    rest of the pipeline (QA, review listing) works with no media toolchain.
 */
import { execFile } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import type { Scene } from './scenes.js';
import type { RasterizedFrame } from './raster.js';

const execFileAsync = promisify(execFile);

export interface RenderInput {
  scenes: Scene[];
  frames: RasterizedFrame[];
  narrationPath: string;
  subtitlePath: string | null;
  outputPath: string;
  /** Estimated total duration in ms (from narration chunks). */
  durationMs: number;
  fps: number;
}

export interface RenderResult {
  outputPath: string;
  durationMs: number;
  width: number;
  height: number;
  renderer: string;
  /** True when the output is a real encoded video (not a dry-run placeholder). */
  real: boolean;
}

export interface VideoRenderer {
  readonly name: string;
  render(input: RenderInput): Promise<RenderResult>;
}

/** Builds the ffmpeg argument list for a slideshow with crossfades. */
export function buildFfmpegArgs(input: RenderInput): string[] {
  const args: string[] = ['-y'];

  input.frames.forEach((frame, index) => {
    const scene = input.scenes[index];
    const durationSeconds = Math.max(0.9, ((scene?.endMs ?? 1000) - (scene?.startMs ?? 0)) / 1000);
    args.push('-loop', '1', '-t', durationSeconds.toFixed(3), '-i', frame.pngPath);
  });
  args.push('-i', input.narrationPath);

  const width = input.scenes[0]?.slide.width ?? 1920;
  const height = input.scenes[0]?.slide.height ?? 1080;

  const filterParts: string[] = [];
  const inputs = input.frames.length;
  for (let i = 0; i < inputs; i += 1) {
    filterParts.push(`[${i}:v]scale=${width}:${height}:force_original_aspect_ratio=decrease,pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=${input.fps},format=yuv420p[v${i}]`);
  }
  for (let i = 1; i < inputs; i += 1) {
    filterParts.push(`[v${i - 1}][v${i}]xfade=transition=fade:duration=0.4:offset=${xfadeOffset(input, i).toFixed(3)}[x${i}]`);
  }
  const videoLabel = inputs > 1 ? `x${inputs - 1}` : 'v0';

  filterParts.push(`[${videoLabel}]${input.subtitlePath ? `subtitles='${escapeFilterPath(input.subtitlePath)}',` : ''}format=yuv420p[vout]`);
  filterParts.push(`[${inputs}:a]aresample=48000[aout]`);

  args.push(
    '-filter_complex',
    filterParts.join(';'),
    '-map',
    '[vout]',
    '-map',
    '[aout]',
    '-c:v',
    'libx264',
    '-preset',
    'medium',
    '-crf',
    '21',
    '-pix_fmt',
    'yuv420p',
    '-c:a',
    'aac',
    '-b:a',
    '160k',
    '-movflags',
    '+faststart',
    '-shortest',
    input.outputPath,
  );

  return args;
}

function xfadeOffset(input: RenderInput, index: number): number {
  let offset = 0;
  for (let i = 0; i < index; i += 1) {
    const scene = input.scenes[i];
    offset += Math.max(0.5, ((scene?.endMs ?? 1000) - (scene?.startMs ?? 0)) / 1000 - 0.4);
  }
  return Math.max(0, offset);
}

function escapeFilterPath(filePath: string): string {
  return filePath.replace(/\\/g, '/').replace(/:/g, '\\:').replace(/'/g, "\\'");
}

export class FfmpegRenderer implements VideoRenderer {
  readonly name = 'ffmpeg';

  constructor(private readonly binary: string) {}

  async render(input: RenderInput): Promise<RenderResult> {
    await fs.mkdir(path.dirname(input.outputPath), { recursive: true });
    const args = buildFfmpegArgs(input);
    try {
      await execFileAsync(this.binary, args, { maxBuffer: 32 * 1024 * 1024, timeout: 600_000 });
    } catch (error) {
      const message = (error as Error).message;
      throw new Error(`ffmpeg render failed: ${message}`.slice(0, 1000));
    }

    const width = input.scenes[0]?.slide.width ?? 1920;
    const height = input.scenes[0]?.slide.height ?? 1080;
    return {
      outputPath: input.outputPath,
      durationMs: input.durationMs,
      width,
      height,
      renderer: this.name,
      real: true,
    };
  }
}

/** Writes a scene plan instead of media, so QA and review can proceed offline. */
export class DryRunRenderer implements VideoRenderer {
  readonly name = 'dryrun';

  async render(input: RenderInput): Promise<RenderResult> {
    await fs.mkdir(path.dirname(input.outputPath), { recursive: true });
    const plan = {
      renderer: this.name,
      outputPath: input.outputPath,
      durationMs: input.durationMs,
      fps: input.fps,
      scenes: input.scenes.map((scene) => ({
        id: scene.id,
        sectionId: scene.sectionId,
        heading: scene.heading,
        slideId: scene.slide.id,
        startMs: Math.round(scene.startMs),
        endMs: Math.round(scene.endMs),
      })),
    };
    await fs.writeFile(`${input.outputPath}.sceneplan.json`, JSON.stringify(plan, null, 2), 'utf8');
    await fs.writeFile(input.outputPath, 'DRY RUN PLACEHOLDER — no media encoded', 'utf8');
    return {
      outputPath: input.outputPath,
      durationMs: input.durationMs,
      width: input.scenes[0]?.slide.width ?? 1920,
      height: input.scenes[0]?.slide.height ?? 1080,
      renderer: this.name,
      real: false,
    };
  }
}
