# AGENTS.md — Instructions for AI Coding Agents

This file gives instructions to AI coding agents (GitHub Copilot, Claude, Cursor, etc.) working on the Interview Prep codebase.

Read this before making any changes.

---

## Project overview

Interview Prep is a **Next.js 16 + React 19 + TypeScript** educational web app for teaching software engineering interview preparation. It includes:
- Structured courses (C#, SQL, React, ASP.NET Core, OOP, etc.)
- Coding problems with multiple solutions (`content/<category>/problems/`)
- Interview Q&A organized by technology (`content/interview-qa/`)
- Cheat sheets for quick reference (`content/<category>/cheatsheet/`)
- User authentication via **NextAuth v5** with **Google OAuth**
- Per-user progress and bookmarks stored in **Neon PostgreSQL**
- PWA support via `@ducanh2912/next-pwa`

---

## Core principles — never violate these

### 1. Content belongs in `/content/`, not in page components
- **DO**: Add lesson text as `ContentBlock[]` in lesson JSON files under `/content/`
- **DO NOT**: Hardcode paragraphs, lists, or lesson content inside `app/` page files
- Page components should only import from `lib/content.ts` and render components

### 2. Use the structured content block system
Every lesson is built from typed `ContentBlock` objects. See `types/index.ts`.
Before adding a new type of content element, check if an existing block type covers it.
If you add a new block type:
- Add it to the `ContentBlock` discriminated union in `types/index.ts`
- Add a rendering case in `components/content/ContentBlockRenderer.tsx`

### 3. Keep components modular and reusable
- Components in `components/` should not import from `app/`
- Components that use `useState`, `useEffect`, or browser APIs must have `'use client'` at the top
- Server components should stay server components unless interactivity is needed

### 4. Maintain accessibility
- All interactive elements must have accessible labels (`aria-label`, `aria-expanded`, etc.)
- Images must have `alt` text
- Use semantic HTML (`nav`, `article`, `section`, `h1-h6` hierarchy)
- `role="note"` on callouts, `aria-live` on dynamic status messages

### 5. Keep the beginner-friendly UX
This course is for non-technical users. When modifying lesson pages:
- Explain concepts progressively — start simple, add complexity gradually
- Use plain language in headings and descriptions
- Keep callouts honest and helpful, not condescending
- Preserve the visual hierarchy: eyebrow → heading → description

### 6. Always label difficulty accurately
Use the `Difficulty` type: `'beginner' | 'intermediate' | 'advanced'`
- `beginner`: No prior programming or technical background needed
- `intermediate`: Comfortable with basic programming concepts, ready for more depth
- `advanced`: Technical concepts that require understanding of preceding modules

---

## Content structure

Content is organized category-first, where a **category** is a top-level directory
(`ai`, `architecture`, `backend`, `database`, `devops`, `frontend`, `fundamentals`).
Each category groups the content sections that belong to it:

```
content/
  [category]/
    courses/                  # Structured courses
      [courseSlug]/
        content.json          # Course metadata
        [moduleSlug]/
          content.json        # Module metadata + lessonSlugs[]
          [lessonSlug].json   # Lesson metadata + blocks[]
    problems/                 # Coding problems (courseSlug: "csharp-problems" / "sql-problems")
      [courseSlug]/
        content.json          # "Course" metadata
        [moduleSlug]/
          content.json        # Module metadata + lessonSlugs[]
          [lessonSlug].json   # Problem lesson
    cheatsheet/               # Cheat sheets (courseSlug: "cheatsheet")
      [technology]/
        content.json          # Module metadata (one module per technology)
        cheatsheet.json       # Lesson file (slug: "cheatsheet"), code-only examples
  interview-qa/               # Interview questions (not a course; spans technologies)
    content.json              # "Course" metadata (isInterview: true)
    [moduleSlug]/
      content.json            # Module metadata + lessonSlugs[]
      [lessonSlug].json       # Lesson; lessons carry a `technology` field
  cheatsheet.json             # Cheatsheet section "Course" metadata (category: "cheatsheet")
  ai/
    glossary/                 # AI glossary terms (glossary/<topic>/[term].json)
    prompts/                  # AI prompt templates (prompts/<topic>/[prompt].json)
    roadmaps/                 # Roadmap definitions (roadmaps/<course>-roadmap.json)
  courses.ts                  # Auto-generated exports all courses
  modules.ts                  # Auto-generated exports all modules (courses + problems + cheatsheet + interview-qa)
  lessons.ts                  # Auto-generated exports all lessons (courses + problems + cheatsheet + interview-qa)
  categories.ts               # Auto-generated slug -> URL category maps (lightweight, client-safe)
```

> The generated aggregator files (`content/courses.ts`, `content/modules.ts`,
> `content/lessons.ts`) are flat files at the root of `content/`, so the import
> specifiers `@/content/courses`, `@/content/modules`, and `@/content/lessons` are unchanged.
> `content/categories.ts` only contains small string maps (`COURSE_URL_CATEGORY`,
> `PROBLEM_COURSE_SLUGS`), so it is safe to import from client components.

### Adding a course
1. Create `content/[category]/courses/[courseSlug]/content.json`
2. Add module folders with `content.json` and lesson JSON files
3. Update `app/sitemap.ts` if needed
4. Run `yarn generate:content` to regenerate index files (or just run `yarn dev` / `yarn build`, which trigger it automatically via `predev`/`prebuild`)

### Adding a module
1. Create `content/[category]/courses/[courseSlug]/[moduleSlug]/content.json`
2. Create lesson JSON files in the module folder
3. Add module slug to the course's `moduleSlugs` array in `content/[category]/courses/[courseSlug]/content.json`
4. Run `yarn generate:content` to regenerate index files

### Adding a lesson
1. Create `content/[category]/courses/[courseSlug]/[moduleSlug]/[lessonSlug].json`
2. Add lesson slug to the module's `lessonSlugs` array in `content/[category]/courses/[courseSlug]/[moduleSlug]/content.json`
3. Ensure `courseSlug` and `moduleSlug` match the parent directories
4. Run `yarn generate:content` to regenerate index files

### Special content areas

**Problems** live under `content/[category]/problems/` and reuse the course/module/lesson model.
Each problem set is a course (e.g. `courseSlug: "csharp-problems"`). Modules group problems
by topic (arrays, strings, recursion, bitwise, etc.). Problem lessons carry `difficulty`
and `estimatedMinutes` and typically include multiple solution approaches using
`example` blocks. They are served at `/[category]/problems/[courseSlug]/[moduleSlug]/[lessonSlug]`.

**Cheat sheets** live under `content/[category]/cheatsheet/` and reuse the course/module/lesson model
with `courseSlug: "cheatsheet"`. Each technology is one module whose lesson file is named
`cheatsheet.json` (the lesson `slug` is `"cheatsheet"`). Cheat-sheet modules and their
single lesson are registered in `content/modules.ts` and `content/lessons.ts`.
They are served at `/[category]/cheatsheets` and `/[category]/cheatsheets/[technology]`.

**Interview questions** live under `content/interview-qa/` (a separate, technology-based
section that is *not* organized by category). Their lesson JSON carries a
`technology` string (e.g. `"C#"`, `"JavaScript"`) used by `getInterviewTechnologies()` /
`getInterviewQuestions()` to group questions. They are served at `/interview-questions`.
Technology URL slugs come from `getInterviewTechSlug()` in `lib/content-hrefs.ts`
(e.g. `C#` → `csharp`, `CI/CD Pipelines` → `cicd-pipelines`) — use that helper instead of
lowercasing/replacing spaces inline.

### Lesson JSON structure
```json
{
  "id": "lesson-...",
  "slug": "...",
  "moduleSlug": "...",
  "courseSlug": "...",
  "title": "...",
  "description": "...",
  "order": 1,
  "difficulty": "beginner",
  "estimatedMinutes": 10,
  "tags": [],
  "blocks": [],
  "technology": "C#",              // optional; on interview-qa lessons to group by topic
  "relatedLessons": [],             // optional; lesson slugs for "next steps" links
  "relatedGlossaryTerms": [],       // optional; glossary term slugs shown as related links
  "furtherReading": []              // optional; FurtherReadingItem[] (article/video/course/tool)
}
```

### Available ContentBlock types
See `types/index.ts` for the full list. Current types:
- `paragraph`, `heading`, `bullet-list`, `numbered-list`
- `callout`, `quote`, `key-terms`, `table`
- `example`, `code`, `solution`, `exercise`, `checklist`
- `mermaid`, `comparison-cards`, `summary-box`, `faq-block`
- `divider`, `image`

`faq-block` data should use `items: { question: string; answer: string }[]`. Legacy content may use `faqs`; `ContentBlockRenderer` normalizes this automatically.

---

## Routes

- `/` — Home page
- `/[category]/courses` — Category course listing
- `/[category]/courses/[courseSlug]` — Course overview
- `/[category]/courses/[courseSlug]/[moduleSlug]` — Module overview
- `/[category]/courses/[courseSlug]/[moduleSlug]/[lessonSlug]` — Lesson page
- `/[category]/problems` — Category problem listing
- `/[category]/problems/[courseSlug]` — Problem course overview
- `/[category]/problems/[courseSlug]/[moduleSlug]` — Problem module overview
- `/[category]/problems/[courseSlug]/[moduleSlug]/[lessonSlug]` — Problem lesson page
- `/[category]/cheatsheets` — Category cheat sheet listing
- `/[category]/cheatsheets/[technology]` — Individual cheat sheet
- `/interview-questions` — Interview question listing
- `/interview-questions/[technology]` — Technology-specific questions
- `/interview-questions/[technology]/[slug]` — Individual question
- `/roadmaps` — Learning roadmaps
- `/ai/glossary` — AI glossary
- `/ai/prompts` — Prompt templates
- `/search` — Search page
- `/user/login` — Google sign-in page
- `/user/progress` — Progress dashboard (requires login)
- `/user/bookmarks` — Bookmarks (requires login)
- `/user/notes` — Lesson notes (requires login)
- `/user/personalization` — Preferences (requires login)

There are no longer top-level `/courses`, `/problems`, or `/cheatsheet` pages — those listings
live under each category (`/[category]/…`).

## Navigation and indexing

The top navigation bar and the footer's "Browse by Category" column are computed
server-side from content — there are no hardcoded category lists:

- `getNavigationCategories()` in `lib/content.ts` builds the nav-bar category
  dropdowns (desktop + mobile accordion) from the content directory structure.
  Each category lists the sections that actually exist (`Courses` / `Problems` /
  `Cheat Sheets`). The `AI` category additionally carries two static sections —
  `Glossary` (`/ai/glossary`) and `Prompt Templates` (`/ai/prompts`) — appended
  inside `computeNavigationCategories()`.
- New categories are picked up automatically; add display metadata to
  `CATEGORY_META` / `CATEGORY_ORDER` in `lib/content.ts`. Categories listed in
  `HIDDEN_CATEGORIES` (currently `fundamentals`) are intentionally omitted from
  the nav bar but remain browsable by URL.
- The footer's static columns are the `LEARN_LINKS`, `ACCOUNT_LINKS`, and
  `ABOUT_LINKS` arrays in `components/layout/Footer.tsx`; "Popular Courses"
  comes from `getPopularCourses()`.
- `app/sitemap.ts` lists the static top-level routes and then walks all content.
  It de-duplicates URLs, so a page may appear in both places safely.
  Do **not** add login-gated `/user/*` pages to the sitemap.
- `app/robots.ts` allows everything except `/api/` and `/user/` and points crawlers
  at the sitemap.

Whenever you add a new top-level page:
1. Add it to the appropriate link array in `components/layout/Footer.tsx`
   (or to a nav category section in `lib/content.ts` if it belongs under a category)
2. Add it to `app/sitemap.ts` in the static routes array (unless it requires login)
3. If the page should be crawl-restricted, add it to `app/robots.ts`
4. Add it to the Routes list above

## Module ordering

Module order within a course is determined by the `order` field in each module's `content.json`.
- Always set explicit numeric `order` values when creating or reorganizing modules.
- `getModulesByCourse()` and `getLessonsForCourse()` sort by `module.order`, so missing or `null` values produce unstable ordering.
- The `postgresql` course has 19 modules, each with explicit `order` values.

## Authentication and user data

- Login is optional. Content browsing is public.
- Progress, bookmarks, and last-visited path require login to persist to the server.
- Logged-out users fall back to `localStorage` for these features.
- When a logged-out user tries to bookmark or mark complete, show the inline `SignInPrompt` component — do not redirect automatically.
- `useProgress()` and `useBookmarks()` are context-based hooks from `ProgressProvider` and `BookmarkProvider`. When logged in, they sync with Prisma-backed APIs; when logged out, they read/write `localStorage` only.
- `ContinuePrompt` uses the DB for logged-in users and `localStorage` for logged-out users.
- Auth is powered by **NextAuth v5** (`auth.ts`) with **Google OAuth** (`openid profile email` scopes, offline access, consent prompt) and the **Prisma Adapter**.
- User-specific data lives in **Neon PostgreSQL** through the singleton Prisma client in `lib/prisma.ts`. The source of truth is `prisma/schema.prisma`; migrations are in `prisma/migrations/`, and `scripts/schema.sql` is an idempotent SQL equivalent. The Auth.js adapter tables are `accounts`, `sessions`, `verification_tokens`, and `authenticators`.
- API routes for user data:
  - `app/api/progress/route.ts` — GET/POST/DELETE progress
  - `app/api/bookmarks/route.ts` — GET/POST/DELETE bookmarks
  - `app/api/last-path/route.ts` — GET/POST last visited path
  - `app/api/user/theme/route.ts` — GET/POST user theme preference
  - `app/api/user/offline-queue/route.ts` — GET/POST offline action queue
  - `app/api/user/notes/route.ts` — GET/POST/DELETE lesson notes
  - `app/api/user/preferences/route.ts` — GET/POST personalization preferences (font size, density, motion, landing page)
  - `app/api/search/route.ts` — GET search
- The progress dashboard at `/user/progress` is a protected route that redirects unauthenticated users to `/user/login`.

---

## TypeScript rules

- All content files must be fully type-safe — no `as any` or `// @ts-ignore`
- Use the existing types from `types/index.ts` — extend them don't bypass them
- Run `yarn typecheck` before finalizing any change
- New utility functions go in `lib/utils.ts`; content helpers go in `lib/content.ts`
- Content-free href/slug helpers (`getContentItemHref`, `getSearchResultHref`, `getCourseCategory`, `isProblemCourseSlug`, `getInterviewTechSlug`, `getInterviewTechName`) live in `lib/content-hrefs.ts` (re-exported from `lib/content.ts`) so client components can build links without bundling lesson JSON
- **`'use client'` components must never import `@/lib/content` directly.** That module pulls in every lesson JSON file (~19 MB), which bloats the client bundle for every page. Pass content data down as props from a server component, enrich it in an API route, or import the lightweight `@/lib/content-hrefs` / `@/content/categories` helpers instead
- SEO metadata helpers (`buildMetadata`, `buildLessonMetadata`, `buildModuleMetadata`) live in `lib/seo.ts`
- Auth helpers live in `lib/auth.ts`
- API-route helpers live in `lib/authMiddleware.ts` (authenticated handler wrapper), `lib/errorHandler.ts`, `lib/logger.ts`, `lib/rateLimit.ts`, `lib/csrf.ts`, `lib/validators.ts`, and `lib/cache.ts`; client-side fetching goes through `lib/apiFetch.ts`

---

## Styling rules

- Use Tailwind CSS exclusively — no inline styles except for dynamic values (e.g., `style={{ width: \`${percent}%\` }}`)
- Use the semantic color tokens (`text-accent-fg`, `bg-canvas-subtle`, `border-border`) not raw hex values
- Dark mode works automatically via CSS variables — test both modes when adding new UI
- `cn()` from `lib/utils.ts` (a clsx + tailwind-merge wrapper) for conditional classes
- Mobile-first: design for small screens, enhance for `sm:`, `md:`, `lg:`

---

## Code blocks and syntax highlighting

- Use `react-shiki` (`ShikiHighlighter` from `react-shiki`) for syntax highlighting — it is the only code-highlighting dependency in this project
- Code blocks are rendered in `components/content/ContentBlockRenderer.tsx` via the `CustomCodeBlock` component (loaded with `dynamic()` to avoid SSR)
- The active theme is driven by `next-themes` (`useTheme()`): `github-dark` in dark mode, `github-light` in light mode
- Do NOT import `prismjs` directly — it is no longer a dependency
- Do NOT use `react-code-block` — it has been removed
- Do NOT use `prism-react-renderer` / `themes.nightOwl` — these are no longer dependencies

### Cheatsheet example blocks
Cheatsheet `example` blocks are code-only: store the snippet in the `code` field, always include
a correct `language` tag, and avoid duplicate content.

### Image blocks
Content `image` blocks render a plain `<img>` inside a zoomable button that opens an `ImageModal`.
An `eslint-disable-next-line @next/next/no-img-element` comment is used because the `src` comes from lesson content. Follow the existing `ImageBlock`/`ImageModal` pattern in `ContentBlockRenderer.tsx` rather than introducing new image handling.

---

## Mermaid diagrams

- Always write readable, well-labeled Mermaid definitions
- Test diagram syntax at [mermaid.live](https://mermaid.live) before adding
- Include a `caption` for every diagram
- Give each diagram a unique `id`
- Keep diagrams focused — one concept per diagram
- Mermaid is loaded dynamically (client-side only) via `dynamic()` in `MermaidRenderer.tsx`

---

## PWA

- The app uses `@ducanh2912/next-pwa` configured in `next.config.ts`
- Service worker registration is disabled by default in development. To test installability, set `NEXT_PUBLIC_ENABLE_PWA_DEV=true` when running `yarn dev`
- Mobile browsers require a secure context for service worker installability. `localhost` is allowed; LAN IPs like `http://192.168.x.x:3000` are not unless served over HTTPS
- The manifest lives at `public/manifest.json`
- `PWARegistration` handles SW registration in the root layout
- `PWAInstallButton` provides an in-app install prompt

---

## Before finalizing any change

Run these in order:
```bash
yarn typecheck
yarn lint
yarn build   # optional but recommended for major changes
```

Fix all errors before calling the task complete. Do not suppress TypeScript errors to make them pass.

---

## Maintenance scripts

Utility scripts in `scripts/` help keep content consistent:
- `yarn db:generate` — generates the Prisma Client from `prisma/schema.prisma`
- `yarn db:push` — pushes the Prisma schema to the configured database without migration history
- `yarn db:studio` — opens Prisma Studio
- `yarn db:migrate` — creates/applies Prisma migrations during development
- `yarn vercel-build` — generates Prisma Client, deploys pending migrations, and builds Next.js
- `yarn generate:content` — regenerates `content/courses.ts`, `content/modules.ts`, `content/lessons.ts`, and `content/categories.ts`
- `yarn test:content` — runs content validation tests
- `node scripts/vercel-build.js` — Vercel build entrypoint

---

## What to watch out for

- **Hydration mismatches**: Any component that reads from `localStorage` or uses `window` must have `'use client'` and handle SSR gracefully (see `hooks/useLocalStorage.ts` for the pattern). The `ContinuePrompt` component additionally branches between DB and `localStorage` based on the NextAuth session status.
- **Mermaid SSR**: `mermaid` package cannot be imported server-side — always use the dynamic import pattern in `MermaidRenderer.tsx`
- **`next/link` vs `<a>`**: Use `next/link` for internal links; `<a target="_blank" rel="noopener noreferrer">` for external
- **Image optimization**: Content `image` blocks render with a plain `<img>` element (with an `@next/next/no-img-element` eslint-disable comment) because the `src` comes from lesson content and is opened in a modal; follow the existing `ImageBlock`/`ImageModal` pattern in `ContentBlockRenderer.tsx` rather than introducing new image handling.
- **Generate static params**: When adding a new dynamic route, implement `generateStaticParams()` for build-time generation
- **Content indexing**: When adding lessons/modules, always run `yarn generate:content` to update the generated aggregator files (`content/courses.ts`, `content/modules.ts`, `content/lessons.ts`, `content/categories.ts`). The build will not automatically discover new content files without running the generator.
- **Auth-aware hooks**: `useProgress` and `useBookmarks` are context-based hooks provided by `ProgressProvider` and `BookmarkProvider`. When logged in, they fetch from and write to `/api/progress` and `/api/bookmarks`. When logged out, they read/write `localStorage` only. Do not bypass these hooks with direct DB calls in client components.
- **Sign-in gating**: Do not redirect unauthenticated users away from the app. Show the inline `SignInPrompt` component when they try to use bookmark/progress features.
- **Error boundaries**: Wrap risky client-side rendering in `ErrorBoundaryWrapper` (`components/app/ErrorBoundaryWrapper.tsx`) to show a friendly fallback instead of crashing the whole page.
- **Offline support**: `OfflineIndicator` is rendered in the root layout to notify users when they are offline. The `useOfflineQueue` hook queues mutations for later sync.

---

## Important notes

- This project uses **Yarn 1.22+**. Use `yarn <script>` for project commands and `yarn prisma ...` for Prisma CLI commands.
- The `content/courses.ts`, `content/modules.ts`, `content/lessons.ts`, and `content/categories.ts` files are fully auto-generated by `scripts/generate-content-indices.ts`. They are regenerated automatically before `dev`/`build` via `predev`/`prebuild` scripts, or manually with `yarn generate:content`. Do not edit these files by hand.
- The cheatsheet and interview-qa "courses" (`content/cheatsheet.json`, `content/interview-qa/content.json`) are imported directly; their modules/lessons are registered in `content/modules.ts` and `content/lessons.ts`.
- Interview questions use a `technology` field on lessons to group them. See `lib/content.ts` helpers like `getInterviewTechnologies()` and `getInterviewQuestions()`.
- The `getLessonsForCourse()` function filters by both `moduleSlug` and `courseSlug` to prevent cross-course leakage.
- Auth is configured in `auth.ts` using NextAuth v5 with Google OAuth and `PrismaAdapter`. The API route is `app/api/auth/[...nextauth]/route.ts`. The `SessionProvider` wraps the app in `app/layout.tsx` via `AuthProvider`.
- The Prisma PostgreSQL connection is configured in `lib/prisma.ts` from `DATABASE_URL`. The schema is in `prisma/schema.prisma`, with migrations in `prisma/migrations/`; run `yarn vercel-build` or `yarn prisma migrate deploy` against your Neon database before using auth-dependent features.
- Environment variables: `AUTH_SECRET`, `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, and `DATABASE_URL` are required for auth and database features. For Auth.js v5, set `AUTH_URL` to the canonical application URL and set `AUTH_TRUST_HOST=true` when the application is behind a trusted reverse proxy. Keep `.env` and lockfiles generated by other package managers out of Git.
