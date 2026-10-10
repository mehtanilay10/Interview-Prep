/**
 * Script stage: turns a claimed job into a stored ScriptDocument.
 *
 * Output is keyed by the article hash, so an unchanged article is rewritten at
 * most once even if the job is retried or re-discovered (decision D4).
 */
import path from 'node:path';
import fs from 'node:fs/promises';
import { prisma } from '../db.js';
import type { PipelineConfig } from '../config.js';
import type { Prisma } from '@prisma/client';
import { scriptDocumentSchema, scriptWordCount, NARRATION_MIN_WORDS, NARRATION_MAX_WORDS, countWords } from '../types.js';
import { checkTraceability } from './traceability.js';
import { createScriptWriter, type ScriptWriteResult } from './llm.js';
import { sha256, shortHash } from '../util/hash.js';
import type { ClaimedJob } from '../queue/jobs.js';
import type { Lesson } from '../../../types/index.js';
import { readLessonFile } from '../content/readLesson.js';

export interface StageOutcome {
  ok: boolean;
  errorCode?: string;
  errorMessage?: string;
  metrics?: Record<string, number | string>;
  /** When set, a failure is dead-lettered immediately instead of retried. */
  permanent?: boolean;
}

interface JobContext {
  articleId: string;
  assetId: string;
  area: 'courses' | 'problems';
  canonicalUrl: string;
  lesson: Lesson;
}

export function validateScript(script: unknown): { ok: true } | { ok: false; reason: string } {
  const parsed = scriptDocumentSchema.safeParse(script);
  if (!parsed.success) {
    const detail = parsed.error.issues.map((issue) => `${issue.path.join('.') || 'root'} ${issue.message}`).join('; ');
    return { ok: false, reason: `schema: ${detail}`.slice(0, 500) };
  }
  const words = scriptWordCount(parsed.data);
  if (words < NARRATION_MIN_WORDS) {
    return { ok: false, reason: `script too short (${words} words < ${NARRATION_MIN_WORDS})` };
  }
  if (words > NARRATION_MAX_WORDS) {
    return { ok: false, reason: `script too long (${words} words > ${NARRATION_MAX_WORDS})` };
  }
  return { ok: true };
}

export async function runScriptStage(config: PipelineConfig, job: ClaimedJob): Promise<StageOutcome> {
  const context = await loadJobContext(config, job);
  if ('error' in context) {
    return { ok: false, errorCode: 'context', errorMessage: context.error };
  }

  const { lesson, articleId, assetId } = context;

  const writer = createScriptWriter({
    provider: config.llmProvider,
    apiKey: config.llmApiKey,
    model: config.llmModel,
  });

  const ctaText = `The full article, code samples and links are at ${context.canonicalUrl}`;
  const written: ScriptWriteResult = await writer.write({ lesson, area: context.area, ctaText });

  const validation = validateScript(written.script);
  if (!validation.ok) {
    // A script below the minimum length means the article itself is too small
    // to narrate; retrying cannot fix that, so fail permanently and let the
    // dashboard show it instead of burning five attempts.
    const tooSmall = validation.reason.includes('too short');
    return {
      ok: false,
      errorCode: tooSmall ? 'article-too-small' : 'script-invalid',
      errorMessage: validation.reason,
      ...(tooSmall ? { permanent: true } : {}),
    };
  }

  const traceability = checkTraceability(lesson, written.script);
  if (!traceability.ok) {
    return {
      ok: false,
      errorCode: 'script-untraceable',
      errorMessage: traceability.violations.map((v) => `${v.rule}: ${v.detail}`).join('; ').slice(0, 2000),
    };
  }

  const scriptJson = JSON.parse(JSON.stringify(written.script)) as Prisma.InputJsonValue;
  const scriptHash = sha256(JSON.stringify(written.script));

  await prisma.videoAsset.update({
    where: { id: assetId },
    data: {
      scriptJson,
      scriptHash,
      status: 'generating',
      narrative: written.script.narrative,
      templateVersion: config.templateVersion,
      lastError: null,
    },
  });

  await writeScriptArtifact(config, context, written.script);

  await prisma.videoJob.create({
    data: { articleId, assetId, stage: 'voice', kind: job.kind, priority: 100 },
  });

  return {
    ok: true,
    metrics: {
      writer: written.usedLlm ? writer.name : `${writer.name}-fallback`,
      ...(written.fallbackReason ? { fallbackReason: written.fallbackReason.slice(0, 200) } : {}),
      words: scriptWordCount(written.script),
      sections: written.script.sections.length,
      codeCues: written.script.sections.reduce((total, s) => total + s.cues.filter((c) => c.kind === 'code').length, 0),
      scriptHash: shortHash(scriptHash),
    },
  };
}

async function loadJobContext(config: PipelineConfig, job: ClaimedJob): Promise<JobContext | { error: string }> {
  if (!job.assetId) return { error: 'script job has no asset' };

  const article = await prisma.videoArticle.findUnique({ where: { id: job.articleId } });
  if (!article) return { error: 'article row missing' };
  if (article.deletedAt) return { error: 'article was deleted from content' };

  const lesson = await readLessonFile(config.repoRoot, article);
  if ('error' in lesson) return lesson;

  return {
    articleId: article.id,
    assetId: job.assetId,
    area: article.area,
    canonicalUrl: article.canonicalUrl,
    lesson: lesson.lesson,
  };
}

async function writeScriptArtifact(config: PipelineConfig, context: JobContext, script: unknown): Promise<void> {
  const dir = path.join(config.workDir, 'scripts');
  await fs.mkdir(dir, { recursive: true });
  const slug = context.canonicalUrl.split('/').slice(-3).join('-');
  const name = `${context.area}-${slug}-${shortHash(sha256(JSON.stringify(script)))}.json`;
  await fs.writeFile(path.join(dir, name), JSON.stringify(script, null, 2), 'utf8');
}

/** Word count helper reused by QA and tests. */
export function narrationWordCount(script: { sections: Array<{ narration: string }> }): number {
  return script.sections.reduce((total, section) => total + countWords(section.narration), 0);
}
