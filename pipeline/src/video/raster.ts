/**
 * Rasterizers turn SVG slides into PNG frames.
 *
 * `SharpRasterizer` is the production path (`sharp` is installed by the pipeline
 * package and handles SVG input natively). `NoopRasterizer` is used in dry runs
 * and tests where image output is not needed but the scene plan still is.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import type { Scene } from './scenes.js';

export interface RasterizedFrame {
  slideId: string;
  pngPath: string;
}

export interface Rasterizer {
  readonly name: string;
  /** Returns one frame per scene, in the same order as `scenes`. */
  rasterize(scenes: Scene[], outputDir: string): Promise<RasterizedFrame[]>;
}

export class NoopRasterizer implements Rasterizer {
  readonly name = 'noop';

  async rasterize(scenes: Scene[], outputDir: string): Promise<RasterizedFrame[]> {
    await fs.mkdir(outputDir, { recursive: true });
    const frames: RasterizedFrame[] = [];
    for (const [index, scene] of scenes.entries()) {
      const pngPath = path.join(outputDir, `frame-${String(index).padStart(4, '0')}-${scene.slide.id}.png`);
      await fs.writeFile(pngPath, '');
      frames.push({ slideId: scene.slide.id, pngPath });
    }
    return frames;
  }
}

/** The callable `sharp` factory (its default export is a constructor). */
export type SharpFactory = (input: Buffer, options?: { density?: number }) => import('sharp').Sharp;

export class SharpRasterizer implements Rasterizer {
  readonly name = 'sharp';

  constructor(private readonly sharp: SharpFactory) {}

  async rasterize(scenes: Scene[], outputDir: string): Promise<RasterizedFrame[]> {
    await fs.mkdir(outputDir, { recursive: true });
    const frames: RasterizedFrame[] = [];
    for (const [index, scene] of scenes.entries()) {
      const slide = scene.slide;
      const pngPath = path.join(outputDir, `frame-${String(index).padStart(4, '0')}-${slide.id}.png`);
      const buffer = await this.sharp(Buffer.from(slide.svg, 'utf8'), { density: 96 })
        .resize(slide.width, slide.height, { fit: 'fill' })
        .png()
        .toBuffer();
      await fs.writeFile(pngPath, buffer);
      frames.push({ slideId: slide.id, pngPath });
    }
    return frames;
  }
}

/** Tries to load `sharp`; returns null when it is not installed. */
export async function loadSharp(): Promise<SharpFactory | null> {
  try {
    const sharpModule = (await import('sharp')) as unknown as { default?: SharpFactory };
    return sharpModule.default ?? null;
  } catch {
    return null;
  }
}
