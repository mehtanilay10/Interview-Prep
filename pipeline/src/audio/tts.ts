/**
 * Text-to-speech providers.
 *
 * `PiperTtsProvider` shells out to the Piper binary (free, open-source, CPU
 * only) and measures the real duration of each produced chunk.
 * `DryRunTtsProvider` synthesises a silent WAV of exactly the estimated
 * duration so the whole pipeline — subtitles, timing, QA — runs without any
 * audio service. It is the default in tests and CI.
 */
import { execFile } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { encodeWav, wavDurationMs } from './wav.js';

const execFileAsync = promisify(execFile);

export interface TtsChunkResult {
  /** WAV bytes for the chunk. */
  wav: Buffer;
  durationMs: number;
}

export interface TtsProvider {
  readonly name: string;
  readonly voiceModel: string;
  /** Synthesises one chunk of spoken text. */
  synthesize(text: string): Promise<TtsChunkResult>;
}

export class DryRunTtsProvider implements TtsProvider {
  readonly name = 'dryrun';
  readonly voiceModel: string;

  constructor(
    private readonly options: { voiceModel: string; sampleRate?: number; wordsPerSecond: number },
  ) {
    this.voiceModel = options.voiceModel;
  }

  async synthesize(text: string): Promise<TtsChunkResult> {
    const words = text.split(/\s+/).filter((w) => w.length > 0).length;
    const seconds = Math.max(0.4, words / this.options.wordsPerSecond);
    const sampleRate = this.options.sampleRate ?? 22_050;
    const sampleCount = Math.round(seconds * sampleRate);
    const samples = new Int16Array(sampleCount);
    const wav = encodeWav(samples, sampleRate, 1);
    return { wav, durationMs: wavDurationMs(wav) };
  }
}

export class PiperTtsProvider implements TtsProvider {
  readonly name = 'piper';
  readonly voiceModel: string;

  constructor(
    private readonly options: { binary: string; voiceModel: string; timeoutMs?: number },
  ) {
    this.voiceModel = options.voiceModel;
  }

  async synthesize(text: string): Promise<TtsChunkResult> {
    if (text.trim() === '') {
      return { wav: encodeWav(new Int16Array(0), 22_050, 1), durationMs: 0 };
    }

    const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'pipeline-tts-'));
    const outputPath = path.join(dir, 'chunk.wav');
    try {
      // `input` is supported at runtime; it is missing from the older ExecFile
      // option typings, so the options go through a runtime-safe shape.
      const options = {
        timeout: this.options.timeoutMs ?? 120_000,
        maxBuffer: 1024 * 1024,
        input: text,
      } as Parameters<typeof execFileAsync>[2];
      await execFileAsync(this.options.binary, ['--model', this.options.voiceModel, '--output_file', outputPath], options);
      const wav = await fs.readFile(outputPath);
      return { wav, durationMs: wavDurationMs(wav) };
    } finally {
      await fs.rm(dir, { recursive: true, force: true }).catch(() => undefined);
    }
  }
}

/** Chooses a provider from the runtime configuration. */
export function createTtsProvider(options: { provider: 'piper' | 'dryrun'; piperBinary: string; voiceModel: string; wordsPerSecond: string | number }): TtsProvider {
  if (options.provider === 'piper') {
    return new PiperTtsProvider({ binary: options.piperBinary, voiceModel: options.voiceModel });
  }
  return new DryRunTtsProvider({ voiceModel: options.voiceModel, wordsPerSecond: Number(options.wordsPerSecond) });
}
