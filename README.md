# Interview Prep

A production-ready educational web app for software engineering interview preparation. Includes structured courses (C#, SQL, React, ASP.NET Core, OOP), coding problems with multiple solutions, interview Q&A by technology, cheat sheets, and SQL problem sets. Built with Next.js 15, TypeScript, and Tailwind CSS.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS with GitHub-inspired design |
| Dark Mode | next-themes (`class` strategy) |
| Diagrams | Mermaid (client-side dynamic import) |
| Auth | NextAuth v5 (Google OAuth) |
| Database | Neon PostgreSQL |
| Progress | Hybrid: localStorage (logged out) + Neon DB (logged in) |
| Content | TypeScript structured files in `/content/` |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm (included with Node.js)

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Test PWA on mobile

By default, PWA registration is disabled in development. To test installability intentionally, start the app with:

```bash
NEXT_PUBLIC_ENABLE_PWA_DEV=true npm run dev
```

Mobile browsers still require a secure context for service workers. `localhost` is allowed, but a phone opening `http://192.168.x.x:3000` will not be installable unless you serve the site over HTTPS.

### Build

```bash
npm run build
npm run start
```

### Type check

```bash
npm run typecheck
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
interview-prep/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (AuthProvider, ThemeProvider, Navbar, Footer)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles + CSS custom properties
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── login/page.tsx            # Google sign-in page
│   ├── progress/
│   │   ├── page.tsx              # Progress dashboard (server)
│   │   └── ProgressDashboardClient.tsx  # Progress dashboard (client)
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts  # NextAuth API route
│   │   ├── progress/route.ts     # Progress CRUD API
│   │   ├── bookmarks/route.ts    # Bookmarks CRUD API
│   │   └── last-path/route.ts    # Last-visited path API
│   ├── courses/
│   │   ├── page.tsx              # Course listing
│   │   └── [courseSlug]/
│   │       ├── page.tsx          # Course overview
│   │       └── [moduleSlug]/
│   │           ├── page.tsx      # Module overview
│   │           └── [lessonSlug]/
│   │               └── page.tsx  # Lesson detail
│   ├── problems/
│   │   ├── page.tsx              # Problems listing
│   │   └── [courseSlug]/
│   │       ├── page.tsx          # Problem course overview
│   │       └── [moduleSlug]/
│   │           ├── page.tsx      # Problem module overview
│   │           └── [lessonSlug]/
│   │               └── page.tsx  # Problem lesson
│   ├── interview-questions/
│   │   ├── page.tsx              # Interview question listing
│   │   └── [technology]/
│   │       ├── page.tsx          # Technology-specific questions
│   │       └── [slug]/
│   │           └── page.tsx      # Individual question
│   ├── cheatsheet/
│   │   ├── page.tsx              # Cheat sheet listing
│   │   └── [technology]/
│   │       └── page.tsx          # Individual cheat sheet
│   ├── search/page.tsx           # Search page
│   ├── roadmap/page.tsx          # Visual roadmap + module table
│   ├── glossary/page.tsx         # Searchable glossary
│   ├── tools/page.tsx            # Tool comparisons
│   ├── plan/page.tsx             # 90-day learning plan
│   ├── projects/page.tsx         # Mini projects
│   ├── prompts/page.tsx          # Prompt library
│   ├── safety/page.tsx           # Safety & responsible use
│   ├── faq/page.tsx              # FAQ accordion
│   ├── advanced/page.tsx         # Advanced concepts hub
│   └── about/page.tsx            # Course overview
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky top nav with mobile menu + auth user menu
│   │   ├── Footer.tsx            # Site footer with link columns
│   │   ├── Breadcrumbs.tsx       # Breadcrumb navigation
│   │   └── LessonSidebar.tsx     # Course/module/lesson sidebar
│   ├── ui/
│   │   ├── DifficultyBadge.tsx   # Beginner/Intermediate/Advanced badge
│   │   ├── ReadingTimeBadge.tsx  # "12 min" reading time indicator
│   │   ├── CalloutBox.tsx        # Info/tip/warning/note callouts
│   │   ├── SearchBar.tsx         # Reusable search input
│   │   ├── FilterBar.tsx         # Pill-style filter buttons
│   │   ├── EmptyState.tsx        # Empty list / no results state
│   │   ├── ThemeToggle.tsx       # Dark/light mode button
│   │   ├── BookmarkButton.tsx    # Bookmark toggle with sign-in gating
│   │   └── ThemeProvider.tsx     # next-themes wrapper
│   ├── auth/
│   │   ├── AuthProvider.tsx      # SessionProvider wrapper for NextAuth
│   │   └── SignInPrompt.tsx      # Inline sign-in modal for gated actions
│   ├── course/
│   │   ├── ModuleCard.tsx        # Module card (grid or compact)
│   │   ├── LessonCard.tsx        # Lesson card (grid or list)
│   │   ├── TableOfContents.tsx   # Sticky ToC with active tracking
│   │   ├── ProgressTracker.tsx   # Mark complete + module progress bar
│   │   └── RoadmapTimeline.tsx   # Phase-based roadmap visual
│   ├── content/
│   │   ├── ContentBlockRenderer.tsx  # Main lesson block renderer
│   │   ├── MermaidRenderer.tsx       # Client-side Mermaid diagram
│   │   ├── FAQAccordion.tsx          # Expandable FAQ items
│   │   ├── PromptCard.tsx            # Prompt template with copy button
│   │   ├── ProjectCard.tsx           # Mini project card
│   │   ├── ToolComparisonCard.tsx    # Tool entry with features table
│   │   └── GlossarySearch.tsx        # Live-filtered glossary list
│   └── sections/
│       ├── HeroSection.tsx       # Home page hero
│       └── SectionHeader.tsx     # Reusable eyebrow+title+description
│
├── content/                      # All course content (JSON/TypeScript files)
│   ├── courses/                  # Structured courses
│   ├── problems/                 # Coding problems (C#, SQL)
│   ├── sql-problems/             # SQL problem sets
│   ├── interview-qa/             # Interview Q&A by technology
│   ├── cheatsheet/               # Cheat sheets by technology
│   ├── modules/index.ts          # Module definitions
│   ├── lessons/index.ts          # Lesson definitions + content blocks
│   └── ...
│
├── hooks/
│   ├── useProgress.ts            # Hybrid progress tracking (localStorage + Neon DB)
│   ├── useBookmarks.ts           # Hybrid bookmark tracking (localStorage + Neon DB)
│   └── useLocalStorage.ts        # Generic typesafe localStorage hook
│
├── lib/
│   ├── content.ts                # Content loading helpers + search
│   ├── utils.ts                  # General utilities (cn, slugify, etc.)
│   ├── seo.ts                    # Metadata builders for pages
│   ├── neon.ts                   # Neon PostgreSQL connection
│   └── auth.ts                   # NextAuth server helpers
│
├── types/
│   └── index.ts                  # All TypeScript interfaces
│
├── scripts/
│   └── schema.sql                # Neon database schema
│
├── auth.ts                       # NextAuth v5 configuration
├── public/                       # Static assets
├── README.md
├── AGENTS.md
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Content System

All content is stored in JSON/TypeScript files under `/content/`. This gives you:

- **Type safety**: TypeScript validates all content structure
- **IDE support**: Autocomplete and error highlighting when adding content
- **No parsing**: Content is imported directly, no YAML/MDX parsing needed
- **Easy to search**: grep works across all content

### Content areas

| Area | Path | Purpose |
|---|---|---|
| Courses | `content/courses/` | Structured learning modules |
| Problems | `content/problems/` | Coding problems with multiple solutions |
| SQL Problems | `content/sql-problems/` | SQL problem sets |
| Interview Q&A | `content/interview-qa/` | Technology-grouped interview questions |
| Cheat sheets | `content/cheatsheet/` | Quick-reference code examples |

### Adding a new lesson

1. Create the lesson JSON file in the appropriate module folder
2. Import it in `content/lessons/index.ts`
3. Add the lesson slug to the module's `lessonSlugs` array in the module's `content.json`

### Adding a new module

1. Create `content/[area]/[courseSlug]/[moduleSlug]/content.json`
2. Create lesson JSON files in the module folder
3. Import the module in `content/modules/index.ts`
4. Add the module slug to the course's `moduleSlugs` array

### Adding a new course

1. Create `content/[area]/[courseSlug]/content.json`
2. Add module folders with `content.json` and lesson JSON files
3. Import course in `content/courses/index.ts` (if it's a regular course)
4. Add module imports to `content/modules/index.ts`
5. Add lesson imports to `content/lessons/index.ts`
6. Update `app/sitemap.ts` if needed

### Content blocks

Lessons are composed of typed `ContentBlock[]`. Available block types:

| Block type | Use for |
|---|---|
| `paragraph` | Regular text |
| `heading` | Section headings (h2/h3/h4) |
| `bullet-list` | Unordered lists |
| `numbered-list` | Ordered lists |
| `callout` | Info/tip/warning/note/important boxes |
| `quote` | Block quotes with attribution |
| `key-terms` | Definition lists with terms |
| `table` | Data tables |
| `example` | Code or content examples |
| `solution` | Final answer/solution blocks (green accent) |
| `exercise` | Hands-on practice exercises |
| `checklist` | Interactive-style checklists |
| `mermaid` | Mermaid diagram definitions |
| `comparison-cards` | Side-by-side comparison cards |
| `summary-box` | Summary with bullet points |
| `faq-block` | Inline FAQ items |
| `divider` | Horizontal rule |

---

## Design System

The app uses a GitHub-inspired color palette implemented as CSS custom properties and Tailwind color extensions.

Key CSS variables:
- `--color-canvas-default` / `subtle` / `inset` — Layer backgrounds
- `--color-fg-default` / `muted` / `subtle` — Text hierarchy
- `--color-border-default` / `muted` — Border colors
- `--color-accent-fg` / `emphasis` / `subtle` — Primary accent (blue)
- `--color-success-fg` — Green (beginner, complete)
- `--color-attention-fg` — Yellow (warning, intermediate)
- `--color-danger-fg` — Red (error, danger)
- `--color-done-fg` — Purple (advanced, complete)

Dark mode is applied via `.dark` class on `<html>` (controlled by `next-themes`).

---

## Progress Tracking

Progress and bookmarks use a **hybrid storage** approach:
- **Logged out:** Stored in `localStorage` — no account required.
- **Logged in:** Stored in Neon PostgreSQL and synced across devices.
- On first login, local data is automatically migrated to the server.

Use the `useProgress()` and `useBookmarks()` hooks in any client component:
```typescript
const { isCompleted, markComplete, getModuleProgress } = useProgress();
const { toggleBookmark, isBookmarked } = useBookmarks();
```

When a logged-out user clicks **Bookmark** or **Mark Complete**, an inline `SignInPrompt` is shown. They can dismiss it or sign in with Google to save their data.

---

## Mermaid Diagrams

Mermaid is rendered client-side using dynamic import (SSR-safe). Use the `mermaid` content block type:

```typescript
{
  type: 'mermaid',
  data: {
    id: 'unique-id',
    definition: `graph TD\n  A --> B`,
    caption: 'Optional caption text'
  }
}
```

Or use `<MermaidRenderer>` directly in any client component.

---

## Environment Variables

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://interview-prep.dev` | Used for SEO metadata and sitemap |
| `AUTH_SECRET` | *(required for auth)* | NextAuth secret for signing JWTs |
| `AUTH_GOOGLE_ID` | *(required for auth)* | Google OAuth client ID |
| `AUTH_GOOGLE_SECRET` | *(required for auth)* | Google OAuth client secret |
| `DATABASE_URL` | *(required for auth)* | Neon PostgreSQL connection string |

Create `.env` for local overrides:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
AUTH_SECRET=openssl-rand-base64-32
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret
DATABASE_URL=postgresql://user:password@ep-xxx.aws.neon.tech/neondb?sslmode=require
```

---

## Contributing Content

See `AGENTS.md` for detailed guidelines for AI coding agents and content contributors.

Key rules:
1. Keep content in `/content/` — never hardcode lesson text in page components
2. All content must use the defined `ContentBlock` types
3. Run `npm run typecheck && npm run lint` before committing
4. Update navigation and indexes when adding pages
5. Keep difficulty labels accurate and honest
