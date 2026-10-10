/**
 * Minimal WAV reader/writer for 16-bit PCM mono audio.
 *
 * The pipeline concatenates per-sentence TTS chunks into a single narration
 * track, so it needs to read real chunk durations (to build subtitles) and
 * rewrite RIFF headers after concatenation. Keeping this dependency-free means
 * the dry-run provider can synthesise audio of exactly the right duration
 * anywhere, including CI, with no native tools.
 */

export interface WavData {
  sampleRate: number;
  channels: number;
  bitsPerSample: number;
  /** Interleaved samples as signed 16-bit values. */
  samples: Int16Array;
}

/** Writes 16-bit PCM WAV bytes (the format both Piper and the dry-run use). */
export function encodeWav(samples: Int16Array, sampleRate: number, channels = 1): Buffer {
  const bytesPerSample = 2;
  const blockAlign = channels * bytesPerSample;
  const dataSize = samples.length * bytesPerSample;
  const buffer = Buffer.alloc(44 + dataSize);

  buffer.write('RIFF', 0, 'ascii');
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8, 'ascii');
  buffer.write('fmt ', 12, 'ascii');
  buffer.writeUInt32LE(16, 16); // PCM fmt chunk size
  buffer.writeUInt16LE(1, 20); // format = PCM
  buffer.writeUInt16LE(channels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * blockAlign, 28); // byte rate
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(bytesPerSample * 8, 34);
  buffer.write('data', 36, 'ascii');
  buffer.writeUInt32LE(dataSize, 40);

  for (let i = 0; i < samples.length; i += 1) {
    buffer.writeInt16LE(samples[i] ?? 0, 44 + i * 2);
  }
  return buffer;
}

export function decodeWav(buffer: Buffer): WavData {
  if (buffer.length < 44 || buffer.toString('ascii', 0, 4) !== 'RIFF' || buffer.toString('ascii', 8, 12) !== 'WAVE') {
    throw new Error('not a WAV file');
  }
  let offset = 12;
  let format: { audioFormat: number; channels: number; sampleRate: number; bitsPerSample: number } | null = null;
  let dataStart = -1;
  let dataSize = 0;

  while (offset + 8 <= buffer.length) {
    const chunkId = buffer.toString('ascii', offset, offset + 4);
    const chunkSize = buffer.readUInt32LE(offset + 4);
    const bodyStart = offset + 8;
    if (chunkId === 'fmt ') {
      format = {
        audioFormat: buffer.readUInt16LE(bodyStart),
        channels: buffer.readUInt16LE(bodyStart + 2),
        sampleRate: buffer.readUInt32LE(bodyStart + 4),
        bitsPerSample: buffer.readUInt16LE(bodyStart + 14),
      };
    }
    if (chunkId === 'data') {
      dataStart = bodyStart;
      dataSize = Math.min(chunkSize, buffer.length - bodyStart);
    }
    offset = bodyStart + chunkSize + (chunkSize % 2); // chunks are word-aligned
  }

  if (!format || dataStart === -1) throw new Error('WAV missing fmt or data chunk');
  if (format.bitsPerSample !== 16) throw new Error(`unsupported WAV bit depth ${format.bitsPerSample}`);

  const sampleCount = Math.floor(dataSize / 2);
  const samples = new Int16Array(sampleCount);
  for (let i = 0; i < sampleCount; i += 1) {
    samples[i] = buffer.readInt16LE(dataStart + i * 2);
  }
  return { sampleRate: format.sampleRate, channels: format.channels, bitsPerSample: 16, samples };
}

/** Concatenates WAV buffers. All inputs must share format; result is re-headed. */
export function concatWavs(buffers: Buffer[]): Buffer {
  if (buffers.length === 0) throw new Error('no audio to concatenate');
  const parsed = buffers.map(decodeWav);
  const first = parsed[0]!;
  const totalSamples = parsed.reduce((sum, wav) => sum + wav.samples.length, 0);
  const merged = new Int16Array(totalSamples);
  let cursor = 0;
  for (const wav of parsed) {
    if (wav.sampleRate !== first.sampleRate || wav.channels !== first.channels) {
      throw new Error('cannot concatenate WAVs with different formats');
    }
    merged.set(wav.samples, cursor);
    cursor += wav.samples.length;
  }
  return encodeWav(merged, first.sampleRate, first.channels);
}

/** Duration in milliseconds of a WAV buffer. */
export function wavDurationMs(buffer: Buffer): number {
  const { samples, sampleRate, channels } = decodeWav(buffer);
  return Math.round((samples.length / channels / sampleRate) * 1000);
}

/** True when every sample is silent. */
export function isSilent(buffer: Buffer): boolean {
  const { samples } = decodeWav(buffer);
  for (let i = 0; i < samples.length; i += 1) {
    if ((samples[i] ?? 0) !== 0) return false;
  }
  return true;
}

/** RMS amplitude in the 0..1 range (used by the loudness QA check). */
export function wavRms(buffer: Buffer): number {
  const { samples } = decodeWav(buffer);
  let sum = 0;
  for (let i = 0; i < samples.length; i += 1) {
    const value = (samples[i] ?? 0) / 32768;
    sum += value * value;
  }
  if (samples.length === 0) return 0;
  return Math.sqrt(sum / samples.length);
}

/** Peak absolute amplitude in the 0..1 range. */
export function wavPeak(buffer: Buffer): number {
  const { samples } = decodeWav(buffer);
  let peak = 0;
  for (let i = 0; i < samples.length; i += 1) {
    peak = Math.max(peak, Math.abs((samples[i] ?? 0) / 32768));
  }
  return peak;
}
