# AGENTS.md — Instructions for AI Coding Agents

This file gives instructions to AI coding agents (GitHub Copilot, Claude, Cursor, etc.) working on the Interview Prep codebase.

Read this before making any changes.

---

## Project overview

Interview Prep is a **Next.js 15 + TypeScript educational web app** for teaching AI-powered interview preparation to everyday users. It uses:
- App Router (server components by default)
- Tailwind CSS with GitHub-inspired design tokens
- Structured content in `/content/` TypeScript/JSON files
- `localStorage` for progress tracking (no backend)
- Mermaid for diagrams (rendered client-side)
- `next-themes` for dark/light mode
- `prism-react-renderer` for syntax highlighting

---

## Core principles — never violate these

### 1. Content belongs in `/content/`, not in page components
- **DO**: Add lesson text as `ContentBlock[]` in `/content/lessons/index.ts`
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
- `beginner`: No AI or technical background needed
- `intermediate`: Comfortable with basic AI tools, ready for more depth
- `advanced`: Technical concepts that require understanding of preceding modules

---

## Content structure

Content is organized hierarchically:
```
content/
  courses/
    [courseSlug]/
      content.json          # Course metadata
      [moduleSlug]/
        content.json        # Module metadata + lessonSlugs[]
        [lessonSlug].json   # Lesson metadata + blocks[]
  courses/index.ts          # Exports all courses
  modules/index.ts          # Exports all modules
  lessons/index.ts          # Exports all lessons
```

### Adding a course
1. Create `content/courses/[courseSlug]/content.json`
2. Add module folders with `content.json` and lesson JSON files
3. Import course in `content/courses/index.ts`
4. Add module imports to `content/modules/index.ts`
5. Add lesson imports to `content/lessons/index.ts`
6. Update `app/sitemap.ts` if needed

### Adding a module
1. Create `content/courses/[courseSlug]/[moduleSlug]/content.json`
2. Create lesson JSON files in the module folder
3. Import module in `content/modules/index.ts`
4. Add lesson imports to `content/lessons/index.ts`
5. Add module slug to the course's `moduleSlugs` array in `content/courses/[courseSlug]/content.json`

### Adding a lesson
1. Create `content/courses/[courseSlug]/[moduleSlug]/[lessonSlug].json`
2. Import lesson in `content/lessons/index.ts`
3. Add lesson slug to the module's `lessonSlugs` array in `content/courses/[courseSlug]/[moduleSlug]/content.json`
4. Ensure `courseSlug` and `moduleSlug` match the parent directories

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
  "blocks": []
}
```

### Available ContentBlock types
See `types/index.ts` for the full list. Current types:
- `paragraph`, `heading`, `bullet-list`, `numbered-list`
- `callout`, `quote`, `key-terms`, `table`
- `example`, `exercise`, `checklist`
- `mermaid`, `comparison-cards`, `summary-box`, `faq-block`
- `divider`, `image`

---

## Routes

- `/` — Home page
- `/courses` — Course listing
- `/courses/[courseSlug]` — Course overview
- `/courses/[courseSlug]/[moduleSlug]` — Module overview
- `/courses/[courseSlug]/[moduleSlug]/[lessonSlug]` — Lesson page
- `/interview-questions` — Interview question listing
- `/interview-questions/[technology]` — Technology-specific questions
- `/interview-questions/[technology]/[slug]` — Individual question
- `/search` — Search page

---

## Navigation and indexing

Whenever you add a new top-level page:
1. Add it to `NAV_LINKS` in `components/layout/Navbar.tsx`
2. Add it to `FOOTER_LINKS` in `components/layout/Footer.tsx`
3. Add it to `app/sitemap.ts` in the static routes array

---

## TypeScript rules

- All content files must be fully type-safe — no `as any` or `// @ts-ignore`
- Use the existing types from `types/index.ts` — extend them don't bypass them
- Run `npm run typecheck` before finalizing any change
- New utility functions go in `lib/utils.ts`; content helpers go in `lib/content.ts`

---

## Styling rules

- Use Tailwind CSS exclusively — no inline styles except for dynamic values (e.g., `style={{ width: \`${percent}%\` }}`)
- Use the semantic color tokens (`text-accent-fg`, `bg-canvas-subtle`, `border-border`) not raw hex values
- Dark mode works automatically via CSS variables — test both modes when adding new UI
- `cn()` from `lib/utils.ts` (a clsx + tailwind-merge wrapper) for conditional classes
- Mobile-first: design for small screens, enhance for `sm:`, `md:`, `lg:`

---

## Code blocks and syntax highlighting

- Use `prism-react-renderer` with `themes.nightOwl` for syntax highlighting
- Code blocks are rendered in `components/content/ContentBlockRenderer.tsx` via the `CustomCodeBlock` component
- Do NOT import `prismjs` directly — it is no longer a dependency
- Do NOT use `react-code-block` — it has been removed

---

## Mermaid diagrams

- Always write readable, well-labeled Mermaid definitions
- Test diagram syntax at [mermaid.live](https://mermaid.live) before adding
- Include a `caption` for every diagram
- Give each diagram a unique `id`
- Keep diagrams focused — one concept per diagram
- Mermaid is loaded dynamically (client-side only) via `dynamic()` in `MermaidRenderer.tsx`

---

## Before finalizing any change

Run these in order:
```bash
npm run typecheck
npm run lint
npm run build   # optional but recommended for major changes
```

Fix all errors before calling the task complete. Do not suppress TypeScript errors to make them pass.

---

## What to watch out for

- **Hydration mismatches**: Any component that reads from `localStorage` or uses `window` must have `'use client'` and handle SSR gracefully (see `hooks/useLocalStorage.ts` for the pattern)
- **Mermaid SSR**: `mermaid` package cannot be imported server-side — always use the dynamic import pattern in `MermaidRenderer.tsx`
- **`next/link` vs `<a>`**: Use `next/link` for internal links; `<a target="_blank" rel="noopener noreferrer">` for external
- **Image optimization**: Use `next/image` for all images (not `<img>``)
- **Generate static params**: When adding a new dynamic route, implement `generateStaticParams()` for build-time generation
- **Content indexing**: When adding lessons/modules, always update the corresponding `index.ts` files in `content/`. The build will not automatically discover new content files.

---

## Important notes

- This project uses **npm**, not yarn. Use `npm run <script>` not `yarn <script>`.
- The `content/modules/index.ts` and `content/lessons/index.ts` files are auto-generated in spirit but must be manually updated when adding content. Always verify new imports are included in the `rawModules`/`rawLessons` arrays.
- Interview questions use a `technology` field on lessons to group them. See `lib/content.ts` helpers like `getInterviewTechnologies()` and `getInterviewQuestions()`.
- The `getLessonsForCourse()` function filters by both `moduleSlug` and `courseSlug` to prevent cross-course leakage.
