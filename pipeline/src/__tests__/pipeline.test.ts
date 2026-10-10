/**
 * Unit tests for the deterministic parts of the video pipeline.
 *
 * These run without a database or network (`node --import tsx --test`). The
 * database-level proofs (claim races, lease recovery, upload idempotency) are
 * documented in pipeline/README.md and live behind DATABASE_URL.
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { checkTraceability } from '../script/traceability.js';
import { buildScript, buildExplainerScript, buildWalkthroughScript } from '../script/builder.js';
import { validateScript } from '../script/stage.js';
import { normalizeForSpeech, cleanSpokenText } from '../script/lexicon.js';
import { buildSrt, splitSentences, parseSrt, wrapSubtitleText, formatSrtTimestamp, parseSrtTimestamp } from '../audio/srt.js';
import { decodeWav, encodeWav, concatWavs, wavDurationMs, wavRms, wavPeak, isSilent } from '../audio/wav.js';
import { buildScenes, scenesDurationMs } from '../video/scenes.js';
import { buildFfmpegArgs } from '../video/renderer.js';
import { tokenizeCode } from '../video/slides.js';
import { scriptDocumentSchema, countWords } from '../types.js';
import { stableStringify, resolveArea } from '../content/scan.js';
import { backoffMs } from '../queue/jobs.js';
import { subtitleCues } from '../stages/voice.js';
import type { Lesson } from '../../../types/index.js';
import type { ScriptDocument } from '../types.js';

function lessonFixture(overrides: Partial<Lesson> = {}): Lesson {
  return {
    id: 'lesson-test',
    slug: 'test-lesson',
    moduleSlug: 'test-module',
    courseSlug: 'test-course',
    title: 'Test Lesson',
    description: 'A lesson used to test the pipeline.',
    order: 1,
    difficulty: 'beginner',
    estimatedMinutes: 10,
    tags: ['test'],
    blocks: [
      { type: 'paragraph', data: { text: 'Variables store values that a program can use later. In C#, every variable has a type that decides what it can hold.' } },
      { type: 'heading', data: { text: 'Declaring variables', level: 2 } },
      { type: 'paragraph', data: { text: 'Declaring a variable tells the compiler its name and type before you use it in an expression.' } },
      {
        type: 'example',
        data: {
          title: 'Declaring an integer',
          language: 'csharp',
          code: 'int age = 30;\nstring name = "Ada";',
          content: 'This declares an integer and a string.',
        },
      },
      { type: 'bullet-list', data: { items: ['int stores whole numbers', 'double stores decimals', 'bool stores true or false'] } },
      {
        type: 'key-terms',
        data: { terms: [{ term: 'Variable', definition: 'A named storage location for a value.' }] },
      },
      { type: 'mermaid', data: { caption: 'Variable lifecycle', definition: 'flowchart TD\n  A[Declare] --> B[Assign] --> B --> C[Use]' } },
      { type: 'summary-box', data: { title: 'Summary', points: ['Variables have a type', 'Types decide the stored values'], takeaway: 'Always declare variables before use.' } },
    ],
    ...overrides,
  } as Lesson;
}

describe('script builder', () => {
  test('explainer script maps every section to a source heading', () => {
    const lesson = lessonFixture();
    const script = buildExplainerScript(lesson, 'Read more at https://example.test');
    const headings = new Set(
      lesson.blocks
        .filter((block) => block.type === 'heading')
        .map((block) => (block.data as { text: string }).text.toLowerCase()),
    );

    for (const section of script.sections) {
      const heading = section.heading.toLowerCase();
      const structural = ['introduction', 'summary', 'key takeaways', 'what you learned', 'related lessons'];
      assert.ok(
        headings.has(heading) || structural.includes(heading),
        `section heading "${section.heading}" is not traceable`,
      );
    }
  });

  test('traceability passes for built scripts', () => {
    const lesson = lessonFixture();
    const script = buildScript(lesson, 'Read more at https://example.test');
    const result = checkTraceability(lesson, script);
    assert.ok(result.ok, `traceability failed: ${JSON.stringify(result.violations)}`);
  });

  test('scripts pass the schema and length validation', () => {
    const lesson = lessonFixture();
    const script = buildScript(lesson, 'Read more at https://example.test');
    assert.ok(scriptDocumentSchema.safeParse(script).success);
    const validation = validateScript(script);
    assert.ok(validation.ok, validation.ok ? '' : validation.reason);
  });

  test('walkthrough script keeps solution headings structural', () => {
    const lesson = lessonFixture({
      courseSlug: 'csharp-problems',
      blocks: [
        { type: 'heading', data: { text: 'Two Sum', level: 2 } },
        { type: 'paragraph', data: { text: 'Given an array of integers and a target, return the indices of the two numbers that add up to the target.' } },
        {
          type: 'solution',
          data: {
            title: 'Hash map solution',
            language: 'csharp',
            content: 'Store each seen number and its index, then check for the complement.',
            code: 'var seen = new Dictionary<int, int>();\nfor (int i = 0; i < nums.Length; i++) { }',
          },
        },
      ],
    });
    const script = buildWalkthroughScript(lesson, 'Practise more');
    const headings = script.sections.map((section) => section.heading);
    assert.ok(headings.includes('Problem'), 'walkthrough needs a Problem section');
    assert.ok(headings.includes('Solution'), 'walkthrough needs a Solution section');
    assert.ok(!headings.includes('Hash map solution'), 'article code titles must not become headings');
  });
});

describe('traceability gate', () => {
  const lesson = lessonFixture();

  test('rejects code that is not verbatim from the article', () => {
    const script = buildScript(lesson, 'cta');
    const mutated: ScriptDocument = {
      ...script,
      sections: [{ id: 'x', heading: 'Declaring variables', narration: 'Look at this code.', cues: [{ kind: 'code', code: 'int made = 999;', language: 'csharp' }] }],
    };
    const result = checkTraceability(lesson, mutated);
    assert.ok(!result.ok);
    assert.ok(result.violations.some((v) => v.rule === 'code-not-verbatim'));
  });

  test('rejects invented headings', () => {
    const script = buildScript(lesson, 'cta');
    const mutated: ScriptDocument = { ...script, sections: [{ id: 'y', heading: 'Quantum caching internals', narration: 'Words.', cues: [] }] };
    const result = checkTraceability(lesson, mutated);
    assert.ok(!result.ok);
    assert.ok(result.violations.some((v) => v.rule === 'heading-not-in-source'));
  });

  test('rejects key terms that are not defined in the article', () => {
    const script = buildScript(lesson, 'cta');
    const mutated: ScriptDocument = {
      ...script,
      sections: [{ id: 'z', heading: 'Introduction', narration: 'Words.', cues: [{ kind: 'terms', items: [{ term: 'Invented', definition: 'Not from the article.' }] }] }],
    };
    const result = checkTraceability(lesson, mutated);
    assert.ok(!result.ok);
    assert.ok(result.violations.some((v) => v.rule === 'term-not-in-source'));
  });

  test('rejects diagrams that are not from the article', () => {
    const script = buildScript(lesson, 'cta');
    const mutated: ScriptDocument = {
      ...script,
      sections: [{ id: 'd', heading: 'Introduction', narration: 'Words.', cues: [{ kind: 'diagram', mermaid: 'flowchart TD\n X --> Y' }] }],
    };
    const result = checkTraceability(lesson, mutated);
    assert.ok(!result.ok);
    assert.ok(result.violations.some((v) => v.rule === 'diagram-not-in-source'));
  });
});

describe('pronunciation', () => {
  test('rewrites technical tokens for speech without touching the article text', () => {
    assert.equal(normalizeForSpeech('C# and ASP.NET Core use LINQ.'), 'C sharp and A S P dot net core use link.');
    assert.equal(normalizeForSpeech('Query the SQL database.'), 'Query the sequel database.');
  });

  test('strips markdown formatting from spoken text', () => {
    assert.equal(cleanSpokenText('**Bold** and `code` and [link](https://x.test)'), 'Bold and code and link');
  });
});

describe('subtitles', () => {
  test('srt timestamps round-trip', () => {
    assert.equal(formatSrtTimestamp(0), '00:00:00,000');
    assert.equal(formatSrtTimestamp(3_661_500), '01:01:01,500');
    assert.equal(parseSrtTimestamp(formatSrtTimestamp(3_661_500)), 3_661_500);
  });

  test('wraps subtitle text without losing words', () => {
    const wrapped = wrapSubtitleText('this is a fairly long sentence that must wrap across two lines nicely', 30, 2);
    const lines = wrapped.split('\n');
    assert.equal(lines.length, 2);
    for (const line of lines) assert.ok(line.length <= 30, `line too long: ${line}`);
  });

  test('builds and parses a valid srt document', () => {
    const srt = buildSrt([
      { startMs: 0, endMs: 2000, text: 'First line of narration.' },
      { startMs: 2000, endMs: 4500, text: 'Second line of narration.' },
    ]);
    const cues = parseSrt(srt);
    assert.equal(cues.length, 2);
    assert.equal(cues[1]?.startMs, 2000);
    assert.match(srt, /1\n00:00:00,000 --> 00:00:02,000/);
  });

  test('sentence splitting respects technical punctuation', () => {
    const sentences = splitSentences('Use C# to write code. Version 3.5 is current. Declare int age = 30; then run it.');
    assert.equal(sentences.length, 3, JSON.stringify(sentences));
    assert.ok(sentences[0]?.includes('C#'));
    assert.ok(sentences[1]?.startsWith('Version 3.5'));
  });
});

describe('audio', () => {
  test('wav encode/decode round-trips samples', () => {
    const samples = new Int16Array([0, 1000, -1000, 32767, -32768]);
    const buffer = encodeWav(samples, 22050, 1);
    const decoded = decodeWav(buffer);
    assert.equal(decoded.sampleRate, 22050);
    assert.equal(decoded.channels, 1);
    assert.deepEqual(Array.from(decoded.samples), Array.from(samples));
  });

  test('wav duration is computed from samples and rate', () => {
    const buffer = encodeWav(new Int16Array(22050), 22050, 1);
    assert.equal(wavDurationMs(buffer), 1000);
  });

  test('concatenation sums durations and rejects mixed formats', () => {
    // 11025 samples at 22050 Hz is exactly 500ms each.
    const a = encodeWav(new Int16Array(11025), 22050, 1);
    const b = encodeWav(new Int16Array(11025), 22050, 1);
    assert.equal(wavDurationMs(concatWavs([a, b])), 1000);
    const three = encodeWav(new Int16Array(33075), 22050, 1);
    assert.equal(wavDurationMs(concatWavs([a, b, three])), 2500);
    const stereo = encodeWav(new Int16Array(11025), 22050, 2);
    assert.throws(() => concatWavs([a, stereo]));
  });

  test('silence detection and loudness reporting', () => {
    const silence = encodeWav(new Int16Array(1000), 22050, 1);
    assert.ok(isSilent(silence));
    assert.equal(wavRms(silence), 0);
    const loud = encodeWav(new Int16Array(1000).fill(30000), 22050, 1);
    assert.ok(!isSilent(loud));
    assert.ok(wavRms(loud) > 0.9);
    assert.ok(wavPeak(loud) > 0.9);
  });

  test('decode rejects non-wav input', () => {
    assert.throws(() => decodeWav(Buffer.from('not a wav file at all')));
  });
});

describe('scenes and rendering', () => {
  test('scene list covers the narration duration', () => {
    const lesson = lessonFixture();
    const script = buildScript(lesson, 'cta');
    const chunks = script.sections.flatMap((section) => [
      { sectionId: section.id, index: 1, text: section.narration, spoken: section.narration, durationMs: 5000 },
    ]);

    const scenes = buildScenes(script, chunks);
    assert.ok(scenes.length >= script.sections.length, 'each section needs at least one scene');
    const total = scenesDurationMs(scenes);
    const narration = chunks.reduce((sum, chunk) => sum + chunk.durationMs, 0);
    assert.ok(total >= narration * 0.5, `scene total ${total} does not cover narration ${narration}`);
    for (const scene of scenes) {
      assert.ok(scene.endMs > scene.startMs, 'scenes must have positive duration');
      assert.ok(scene.slide.svg.length > 0, 'each scene carries rendered slide markup');
    }
  });

  test('subtitle cues derived from chunks line up with the audio', () => {
    const cues = subtitleCues([
      { sectionId: 'a', index: 1, text: 'one', spoken: 'one', durationMs: 1000 },
      { sectionId: 'a', index: 2, text: 'two', spoken: 'two', durationMs: 1500 },
    ]);
    assert.equal(cues.length, 2);
    assert.equal(cues[0]?.startMs, 0);
    assert.equal(cues[1]?.startMs, 1000);
    assert.ok((cues[1]?.endMs ?? 0) >= 2500, 'last cue must reach the end of the audio');
  });

  test('ffmpeg command includes one input per frame and the audio', () => {
    const lesson = lessonFixture();
    const script = buildScript(lesson, 'cta');
    const chunks = script.sections.map((section) => ({ sectionId: section.id, index: 1, text: section.narration, spoken: section.narration, durationMs: 3000 }));
    const scenes = buildScenes(script, chunks);
    const frames = scenes.map((scene, index) => ({ slideId: scene.slide.id, pngPath: `/tmp/frame-${index}.png` }));

    const args = buildFfmpegArgs({
      scenes,
      frames,
      narrationPath: '/tmp/narration.wav',
      subtitlePath: '/tmp/narration.srt',
      outputPath: '/tmp/video.mp4',
      durationMs: 6000,
      fps: 30,
    });

    assert.ok(args.includes('-i'));
    assert.equal(args.filter((arg) => arg === '-i').length, frames.length + 1);
    assert.ok(args.includes('-filter_complex'));
    assert.ok(args.includes('/tmp/narration.wav'));
    assert.ok(args.includes('libx264'));
    assert.ok(args.includes('/tmp/video.mp4'));
  });
});

describe('slides', () => {
  test('code tokenizer classifies keywords, strings and comments', () => {
    const tokens = tokenizeCode('int age = 30; // a number\nstring s = "hi";', 'csharp');
    const kinds = tokens.map((token) => `${token.kind}:${token.text}`);
    assert.ok(kinds.includes('keyword:int'));
    assert.ok(kinds.includes('number:30'));
    assert.ok(kinds.some((entry) => entry.startsWith('string:') && entry.includes('"hi"')));
    assert.ok(kinds.some((entry) => entry.startsWith('comment:')));
  });
});

describe('content scanning and hashing', () => {
  test('stableStringify is stable regardless of key order', () => {
    const a = stableStringify({ b: 1, a: [{ d: 2, c: 3 }] });
    const b = stableStringify({ a: [{ c: 3, d: 2 }], b: 1 });
    assert.equal(a, b);
    assert.equal(stableStringify({ b: 1, a: null }), stableStringify({ b: 1, a: null }));
  });

  test('area comes from the directory, not the slug', () => {
    const lesson = lessonFixture({ courseSlug: 'api-design-problems' });
    // Paths are relative to the repository root, so they start with content/.
    assert.equal(resolveArea('content/problems/api-design/x/lesson.json', lesson), 'problems');
    assert.equal(resolveArea('content/courses/csharp-fundamentals/x/lesson.json', lesson), 'courses');
    // Without a recognizable directory the slug heuristic is the fallback.
    assert.equal(resolveArea('other/x/lesson.json', lesson), 'problems');
  });
});

describe('retry policy', () => {
  test('backoff doubles and caps', () => {
    assert.equal(backoffMs(1), 30_000);
    assert.equal(backoffMs(2), 60_000);
    assert.equal(backoffMs(3), 120_000);
    assert.equal(backoffMs(20), 900_000);
  });
});

describe('word counting', () => {
  test('counts words and ignores empty strings', () => {
    assert.equal(countWords('one two three'), 3);
    assert.equal(countWords('   '), 0);
    assert.equal(countWords(''), 0);
  });
});
