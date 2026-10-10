/**
 * Subtitle (SRT) generation from narration chunk timings.
 *
 * Durations come from the actual synthesised chunks when TTS is real, and from
 * the estimated speech rate when it is not — either way the subtitles on screen
 * match the audio that was actually produced.
 */

export interface SubtitleCue {
  index: number;
  startMs: number;
  endMs: number;
  text: string;
}

/** Wraps subtitle text to at most `maxChars` per line, `maxLines` lines. */
export function wrapSubtitleText(text: string, maxChars = 42, maxLines = 2): string {
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  if (words.length === 0) return '';
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const candidate = current === '' ? word : `${current} ${word}`;
    if (candidate.length <= maxChars) {
      current = candidate;
      continue;
    }
    if (current !== '') lines.push(current);
    current = word.length > maxChars ? word.slice(0, maxChars) : word;
    if (lines.length === maxLines) break;
  }
  if (current !== '' && lines.length < maxLines) lines.push(current);
  return lines.slice(0, maxLines).join('\n');
}

export function formatSrtTimestamp(ms: number): string {
  const clamped = Math.max(0, Math.round(ms));
  const hours = Math.floor(clamped / 3_600_000);
  const minutes = Math.floor((clamped % 3_600_000) / 60_000);
  const seconds = Math.floor((clamped % 60_000) / 1000);
  const millis = clamped % 1000;
  const pad = (value: number, size = 2) => String(value).padStart(size, '0');
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)},${pad(millis, 3)}`;
}

export function buildSrt(cues: Array<{ startMs: number; endMs: number; text: string }>, options?: { maxChars?: number; maxLines?: number }): string {
  return cues
    .map((cue, index) => {
      const wrapped = wrapSubtitleText(cue.text, options?.maxChars, options?.maxLines);
      return [
        String(index + 1),
        `${formatSrtTimestamp(cue.startMs)} --> ${formatSrtTimestamp(cue.endMs)}`,
        wrapped,
        '',
      ].join('\n');
    })
    .join('\n');
}

export function parseSrt(srt: string): SubtitleCue[] {
  const blocks = srt.replace(/\r/g, '').split(/\n\n+/);
  const cues: SubtitleCue[] = [];
  for (const block of blocks) {
    const lines = block.split('\n').filter((line) => line.trim() !== '');
    if (lines.length < 2) continue;
    const timeLine = lines[1] ?? '';
    const match = timeLine.match(/^(\d{2}:\d{2}:\d{2},\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2},\d{3})/);
    if (!match) continue;
    cues.push({
      index: Number(lines[0] ?? cues.length + 1),
      startMs: parseSrtTimestamp(match[1] ?? '00:00:00,000'),
      endMs: parseSrtTimestamp(match[2] ?? '00:00:00,000'),
      text: lines.slice(2).join('\n'),
    });
  }
  return cues;
}

export function parseSrtTimestamp(value: string): number {
  const match = value.match(/^(\d{2}):(\d{2}):(\d{2}),(\d{3})$/);
  if (!match) return 0;
  const [, h, m, s, ms] = match;
  return Number(h) * 3_600_000 + Number(m) * 60_000 + Number(s) * 1000 + Number(ms);
}

/** Splits narration into speakable sentences without breaking "C#." or "3.5". */
export function splitSentences(text: string): string[] {
  const protectedText = text
    .replace(/\b(C#|F#|C\+\+|\.NET)\./g, '$1\u0000')
    .replace(/(\d)\.(\d)/g, '$1\u0001$2')
    .replace(/\b(e\.g|i\.e|etc|vs)\./gi, '$1\u0002');

  const sentences = protectedText
    .split(/(?<=[.!?])\s+(?=[A-Z0-9"'\u201C(\u005B])/)
    .map((sentence) => sentence.replace(/\u0000/g, '.').replace(/\u0001/g, '.').replace(/\u0002/g, '.').trim())
    .filter((sentence) => sentence.length > 0);

  // Merge very short fragments (fewer than 4 words) so TTS chunks are never
  // tiny; longer sentences keep their own cue.
  const merged: string[] = [];
  for (const sentence of sentences) {
    const previous = merged[merged.length - 1];
    if (previous && sentence.split(/\s+/).length < 4) {
      merged[merged.length - 1] = `${previous} ${sentence}`;
    } else {
      merged.push(sentence);
    }
  }
  return merged;
}
