# Interview Prep

A production-ready educational web app for learning AI — tools, prompting, automation, agents, RAG, and modern AI workflows. Built for beginners to intermediate users who want practical AI literacy.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS with GitHub-inspired design |
| Dark Mode | next-themes (`class` strategy) |
| Diagrams | Mermaid (client-side dynamic import) |
| Progress | localStorage (no backend required) |
| Content | TypeScript structured files in `/content/` |

---

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn (required — do not use npm)

### Install

```bash
yarn install
```

### Develop

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

### Test PWA on mobile

By default, PWA registration is disabled in development. To test installability intentionally, start the app with:

```bash
NEXT_PUBLIC_ENABLE_PWA_DEV=true yarn dev
```

Mobile browsers still require a secure context for service workers. `localhost` is allowed, but a phone opening `http://192.168.x.x:3000` will not be installable unless you serve the site over HTTPS.

### Build

```bash
yarn build
yarn start
```

### Type check

```bash
yarn typecheck
```

### Lint

```bash
yarn lint
```

---

## Project Structure

```
interview-prep/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (ThemeProvider, Navbar, Footer)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles + CSS custom properties
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── modules/
│   │   ├── page.tsx              # All modules listing
│   │   └── [moduleSlug]/
│   │       ├── page.tsx          # Module detail
│   │       └── [lessonSlug]/
│   │           └── page.tsx      # Lesson detail (main learning page)
│   ├── roadmap/page.tsx          # Visual roadmap + module table
│   ├── glossary/page.tsx         # Searchable AI glossary
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
│   │   ├── Navbar.tsx            # Sticky top nav with mobile menu
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
│   │   └── ThemeProvider.tsx     # next-themes wrapper
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
├── content/                      # All course content (TypeScript files)
│   ├── phases/index.ts           # Phase definitions (2 phases)
│   ├── modules/index.ts          # Module definitions (6 modules)
│   ├── lessons/index.ts          # Lesson definitions + content blocks
│   ├── glossary/index.ts         # Glossary terms (10 terms)
│   ├── tool-comparisons/index.ts # Tool entries (5 tools)
│   ├── weekly-plan/index.ts      # 90-day plan weeks
│   ├── projects/index.ts         # Mini projects (3)
│   ├── faqs/index.ts             # FAQ items (5)
│   └── prompts/index.ts          # Prompt templates (5)
│
├── hooks/
│   ├── useProgress.ts            # Lesson completion tracking (localStorage)
│   └── useLocalStorage.ts        # Generic typesafe localStorage hook
│
├── lib/
│   ├── content.ts                # Content loading helpers + search
│   ├── utils.ts                  # General utilities (cn, slugify, etc.)
│   └── seo.ts                    # Metadata builders for pages
│
├── types/
│   └── index.ts                  # All TypeScript interfaces
│
├── public/                       # Static assets
├── styles/                       # (globals.css lives in app/)
├── README.md
├── AGENTS.md
├── AGENTS.md
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Content System

All content is stored in TypeScript files under `/content/`. This gives you:

- **Type safety**: TypeScript validates all content structure
- **IDE support**: Autocomplete and error highlighting when adding content
- **No parsing**: Content is imported directly, no YAML/MDX parsing needed
- **Easy to search**: grep works across all content

### Adding a new lesson

1. Open `content/lessons/index.ts`
2. Create a new `Lesson` object following the existing structure
3. Add it to the `lessons` array
4. Add the lesson slug to the module's `lessonSlugs` in `content/modules/index.ts`

### Adding a new module

1. Open `content/modules/index.ts`
2. Create a new `Module` object
3. Add it to the `modules` array
4. Add the module slug to the phase's `moduleSlug` in `content/phases/index.ts`

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

User progress is stored in `localStorage` under the key `interview_prep_progress`. No backend, no account required.

Structure:
```typescript
{
  completedLessons: [{ lessonSlug, moduleSlug, completedAt }],
  lastVisitedLesson: string,
  startedAt: string
}
```

Use the `useProgress()` hook in any client component:
```typescript
const { isCompleted, markComplete, getModuleProgress } = useProgress();
```

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

Create `.env.local` for local overrides:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Contributing Content

See `AGENTS.md` for detailed guidelines for AI coding agents and content contributors.

Key rules:
1. Keep content in `/content/` — never hardcode lesson text in page components
2. All content must use the defined `ContentBlock` types
3. Run `yarn typecheck && yarn lint` before committing
4. Update navigation and indexes when adding pages
5. Keep difficulty labels accurate and honest
