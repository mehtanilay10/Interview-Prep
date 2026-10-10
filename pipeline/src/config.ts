/**
 * Runtime configuration for the video pipeline.
 *
 * Everything is read from the environment so that quotas, voices and providers
 * can be changed without a code change (decision D6: the YouTube quota is a
 * runtime setting, not a constant).
 */
import path from 'node:path';

export interface PipelineConfig {
  databaseUrl: string;
  siteUrl: string;
  /** Root of the repository (contains content/). */
  repoRoot: string;
  /** Ephemeral working directory for media artefacts (never committed). */
  workDir: string;

  // LLM script writer
  llmProvider: 'gemini' | 'local';
  llmApiKey: string;
  llmModel: string;

  // Text to speech
  ttsProvider: 'piper' | 'dryrun';
  piperBin: string;
  piperVoiceModel: string;
  ttsVoiceName: string;
  /** Words per second used for duration estimates and dry-run audio. */
  wordsPerSecond: number;

  // Rendering
  ffmpegBin: string;
  ffprobeBin: string;
  videoWidth: number;
  videoHeight: number;
  fps: number;
  templateVersion: string;

  // Pacing
  publishBudgetPerDay: number;
  /** Upper bound on videos sitting in the review queue (decision D5). */
  reviewWipCap: number;
  /** Lease duration; a runner that dies releases its job after this. */
  leaseSeconds: number;

  // Limits enforced by the QA gate
  minDurationMs: number;
  maxDurationMs: number;

  /** When true no network calls are made and audio is synthetic. */
  dryRun: boolean;
}

function readString(name: string, fallback = ''): string {
  const value = process.env[name];
  return value === undefined || value === '' ? fallback : value;
}

function readInt(name: string, fallback: number): number {
  const raw = readString(name);
  if (raw === '') return fallback;
  const parsed = Number.parseInt(raw, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function readFloat(name: string, fallback: number): number {
  const raw = readString(name);
  if (raw === '') return fallback;
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function readBool(name: string, fallback = false): boolean {
  const raw = readString(name).toLowerCase();
  if (raw === '') return fallback;
  return raw === '1' || raw === 'true' || raw === 'yes';
}

export function loadConfig(): PipelineConfig {
  const repoRoot = path.resolve(readString('PIPELINE_REPO_ROOT', process.cwd()));
  const dryRun = readBool('PIPELINE_DRY_RUN', false);
  const llmApiKey = readString('PIPELINE_LLM_API_KEY');

  return {
    databaseUrl: readString('PIPELINE_DATABASE_URL', readString('DATABASE_URL')),
    siteUrl: readString('PIPELINE_SITE_URL', readString('NEXT_PUBLIC_SITE_URL', 'https://interview-prep.dev')),
    repoRoot,
    workDir: path.resolve(repoRoot, readString('PIPELINE_WORK_DIR', '.pipeline-work')),

    llmProvider: readString('PIPELINE_LLM_PROVIDER', llmApiKey ? 'gemini' : 'local') as PipelineConfig['llmProvider'],
    llmApiKey,
    llmModel: readString('PIPELINE_LLM_MODEL', 'gemini-2.0-flash'),

    ttsProvider: (readString('PIPELINE_TTS_PROVIDER', 'dryrun') as PipelineConfig['ttsProvider']),
    piperBin: readString('PIPELINE_PIPER_BIN', 'piper'),
    piperVoiceModel: readString('PIPELINE_PIPER_VOICE_MODEL', 'en_US-lessac-medium'),
    ttsVoiceName: readString('PIPELINE_TTS_VOICE_NAME', 'piper-en_US-lessac-medium'),
    wordsPerSecond: readFloat('PIPELINE_WORDS_PER_SECOND', 2.7),

    ffmpegBin: readString('PIPELINE_FFMPEG_BIN', 'ffmpeg'),
    ffprobeBin: readString('PIPELINE_FFPROBE_BIN', 'ffprobe'),
    videoWidth: readInt('PIPELINE_VIDEO_WIDTH', 1920),
    videoHeight: readInt('PIPELINE_VIDEO_HEIGHT', 1080),
    fps: readInt('PIPELINE_FPS', 30),
    templateVersion: readString('PIPELINE_TEMPLATE_VERSION', 'v1'),

    publishBudgetPerDay: readInt('PIPELINE_PUBLISH_BUDGET_PER_DAY', 6),
    reviewWipCap: readInt('PIPELINE_REVIEW_WIP_CAP', 300),
    leaseSeconds: readInt('PIPELINE_LEASE_SECONDS', 900),

    minDurationMs: readInt('PIPELINE_MIN_DURATION_MS', 30_000),
    maxDurationMs: readInt('PIPELINE_MAX_DURATION_MS', 1_200_000),

    dryRun,
  };
}

/** Canonical public URL for an article, used for the in-video backlink. */
export function articleUrl(
  config: PipelineConfig,
  area: 'courses' | 'problems',
  courseSlug: string,
  moduleSlug: string,
  lessonSlug: string,
): string {
  const prefix = area === 'problems' ? 'problems' : 'courses';
  return `${config.siteUrl.replace(/\/$/, '')}/${prefix}/${courseSlug}/${moduleSlug}/${lessonSlug}`;
}
