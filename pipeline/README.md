# Video pipeline

Turns Interview Prep articles into narrated, human-reviewed educational videos.

This package is deliberately isolated from the Next.js app: it has its own
`package.json` and `tsconfig.json`, is not part of the Vercel build, and is
never imported from `app/`, `components/` or `lib/`. The app and the pipeline
communicate **only through the shared Neon database tables** (see
`AGENTS.md#video-pipeline-article--video`).

## How it fits together

```
content/** (articles)  ──►  discover  ──►  video_articles / video_jobs  ──►  worker
                                     (nightly, no AI or YouTube calls)        │
                                     stages: script → voice → render → qa → upload (unlisted)
                                                                              ▼
                                                        /videos/review (approve / reject) ──► publish ──► YouTube public
```

- **`discover`** registers every lesson (courses + problems), hashes its content
  and enqueues work. Re-running it is safe: unchanged articles enqueue nothing.
- **`worker`** claims staged jobs from Neon with a lease (`FOR UPDATE SKIP
  LOCKED`), runs one stage, writes progress back, then moves on. A runner that
  dies simply has its lease expire.
- **`publish`** flips reviewer-approved videos to `public` inside the daily
  quota budget; when the budget is exhausted it pauses instead of failing.
- **`reconcile`** repairs drift: jobs whose runner vanished, videos deleted on
  YouTube and privacy mismatches.
- **`selftest`** runs the whole compiler against the real corpus with no
  database and no network — use it to verify a change in seconds.

### Where review fits in the state machine

`qa` gates into `upload`, which uploads the video as **unlisted** so a reviewer
has an embeddable player, and only then moves the asset to `awaiting_review`.
A reviewer's approval enqueues `publish`. Nothing ever becomes public without a
row in `video_review_decisions` (decision D1).

## Running it

All commands run from the repository root:

```bash
npm run pipeline:selftest   # no database, no network: proves the compiler works
npm run pipeline:discover   # register articles and enqueue jobs
npm run pipeline:worker -- --batch=20
npm run pipeline:publish -- --batch=5
npm run pipeline:reconcile
npm run pipeline:requeue -- --job=<id>   # or --article=<id>
npm run pipeline:typecheck
npm run pipeline:test
```

## Toolchain

| Stage | Real path | Test/CI path |
|---|---|---|
| Script | `PIPELINE_LLM_PROVIDER=gemini` (free tier) | `local` — deterministic builder, no key needed |
| Voice | `piper` binary + a voice model | `dryrun` — synthetic WAV of the right duration |
| Render | `ffmpeg` + `sharp` | `dryrun` — scene plan JSON, no media |
| YouTube | OAuth refresh token | never called in dry runs |

Install the real toolchain on a runner with:

```bash
sudo apt-get install -y ffmpeg
npm install sharp
# Piper: download a release binary plus a .onnx voice model, then set
# PIPELINE_PIPER_BIN and PIPELINE_PIPER_VOICE_MODEL.
```

`ffmpeg` is preinstalled on GitHub's `ubuntu-latest` runners.

## Configuration

Environment (all optional except the database):

| Variable | Default | Purpose |
|---|---|---|
| `DATABASE_URL` / `PIPELINE_DATABASE_URL` | — | Neon connection string |
| `PIPELINE_SITE_URL` | `https://interview-prep.dev` | Article backlinks in video descriptions |
| `PIPELINE_REPO_ROOT` | `cwd` | Repository root containing `content/` |
| `PIPELINE_WORK_DIR` | `.pipeline-work` | Ephemeral media directory (gitignored) |
| `PIPELINE_LLM_PROVIDER` / `PIPELINE_LLM_API_KEY` | `local` / — | Script writer |
| `PIPELINE_TTS_PROVIDER` | `dryrun` | `piper` or `dryrun` |
| `PIPELINE_PIPER_BIN` / `PIPELINE_PIPER_VOICE_MODEL` | `piper` / `en_US-lessac-medium` | Piper binary and voice |
| `PIPELINE_TTS_VOICE_NAME` | `piper-en_US-lessac-medium` | Recorded on each asset so voice upgrades are reproducible |
| `PIPELINE_FFMPEG_BIN` / `PIPELINE_FFPROBE_BIN` | `ffmpeg` / `ffprobe` | Media binaries |
| `PIPELINE_DRY_RUN` | `0` | No network, synthetic audio, plan-only render |
| `YOUTUBE_CLIENT_ID` / `YOUTUBE_CLIENT_SECRET` / `YOUTUBE_REFRESH_TOKEN` | — | Channel OAuth |
| `YOUTUBE_PLAYLIST_ID` / `YOUTUBE_CHANNEL_ID` | — | Optional playlist |
| `PIPELINE_PUBLISH_BUDGET_PER_DAY` | `6` | Daily upload budget (matches the default YouTube quota) |
| `PIPELINE_REVIEW_WIP_CAP` | `300` | Max videos kept waiting for review |
| `PIPELINE_LEASE_SECONDS` | `900` | Job lease duration |
| `PIPELINE_MIN_DURATION_MS` / `PIPELINE_MAX_DURATION_MS` | `30000` / `1200000` | QA duration gate |

The daily publish budget can also be changed at runtime from the dashboard
(`video_pipeline_settings`), which is how a quota increase is absorbed without a
deploy (decision D6).

## Database-level proofs

`selftest` and the unit tests cover everything that does not need Postgres.
These checks need a database — run them against a scratch branch/local DB:

1. **Atomic claim.** Start two `worker` runs at the same instant with the same
   batch size. The number of jobs reported as `jobsSucceeded + jobsFailed`
   across both runs must equal the claim count, and each job must have exactly
   one `video_job_attempts` row per attempt.
2. **Lease recovery.** Claim a job, then kill the worker mid-stage
   (`SIGKILL`). After `PIPELINE_LEASE_SECONDS`, `pipeline:reconcile` must return
   the job to `pending` and another worker must be able to claim it.
3. **Retry and dead-letter.** Force a transient failure (e.g. point
   `PIPELINE_LLM_API_KEY` at an invalid key with `gemini`). The job must retry
   with growing backoff (`notBefore` in the future) and dead-letter after
   `maxAttempts` with the error visible on the asset.
4. **Idempotent discovery.** Run `discover` three times: the second and third
   runs must enqueue zero jobs and change zero articles.
5. **Change detection.** Edit one lesson file, run `discover`, and confirm the
   existing asset becomes `stale` and exactly one regeneration job is enqueued;
   unchanged articles must enqueue nothing.
6. **Upload idempotency.** Interrupt an upload right after it succeeds
   (`video_publications` row deleted) and re-run the upload stage: the reconciler
   must detect the video already exists on YouTube rather than creating a
   duplicate. Duplicate uploads are prevented by the unique
   `video_publications.youtube_video_id`.
7. **Quota pause.** Set the publish budget to `0` and run `publish`: jobs must
   come back as `quota-blocked`, stay claimable, and leave approved videos
   waiting rather than failing.

## Known limits

- Articles whose narration reaches less than ~30 seconds fail QA with
  `article-too-small` (a permanent dead-letter, not a retry loop). Roughly 10%
  of the corpus is that small today; they are listed on `/videos` and can be
  requeued after the article is expanded, or after switching to the Gemini
  writer, which expands short outlines into full narration.
- The YouTube Data API quota (10,000 units/day, ~6 uploads/day by default) is
  the publishing ceiling until a quota extension is approved.
- Mermaid diagrams are rendered as caption slide cards here; the article page
  remains the place to read the full diagram.
- Videos are rendered at 1920x1080 with a single template. Template changes are
  applied by bumping `PIPELINE_TEMPLATE_VERSION`.
