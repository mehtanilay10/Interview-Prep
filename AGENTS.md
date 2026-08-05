# AGENTS.md — Instructions for AI Coding Agents

This file gives instructions to AI coding agents (GitHub Copilot, Claude, Cursor, etc.) working on the Interview Prep codebase.

Read this before making any changes.

---

## Project overview

Interview Prep is a **Next.js 15 + TypeScript educational web app** for teaching AI-powered interview preparation to everyday users. It uses:
- App Router (server components by default)
- Tailwind CSS with GitHub-inspired design tokens
- Structured content in `/content/` TypeScript files
- `localStorage` for progress tracking (no backend)
- Mermaid for diagrams (rendered client-side)
- `next-themes` for dark/light mode

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

### 7. Keep advanced concepts clearly separated
The `/app/advanced/` page exists specifically for deep technical content.
Do not mix advanced technical content into beginner modules.
Add an `isOptional: true` flag and a `skipLabel` to any optional lesson.

---

## When adding content

### Adding a lesson
1. Add the `Lesson` object to `content/lessons/index.ts`
2. Include `blocks: ContentBlock[]` with the full content
3. Set accurate `estimatedMinutes`, `difficulty`, `tags`
4. Add the slug to the owning module's `lessonSlugs` in `content/modules/index.ts`
5. Set `relatedLessons` and `relatedGlossaryTerms` for cross-linking
6. Run `yarn typecheck` to confirm no type errors

### Adding a module
1. Add the `Module` object to `content/modules/index.ts`
2. Set `phaseSlug` to an existing phase slug
3. Include `whatYouLearn` array (4–6 bullet points)
4. Add the slug to the phase's `moduleSlug` array in `content/phases/index.ts`
5. Set realistic `estimatedHours`

### Adding a glossary term
1. Add the `GlossaryTerm` to `content/glossary/index.ts`
2. Include both `shortDefinition` and `fullDefinition`
3. Set an accurate `category` from the `GlossaryCategory` type
4. Add `examples` where possible (3 is ideal)
5. Link to the most relevant lesson via `learnMoreSlug`

### Adding a prompt template
1. Add to `content/prompts/index.ts`
2. Use `[BRACKETS]` for all user-replaceable placeholders
3. Include a concrete `example` showing filled-in values
4. Write 2–3 practical `tips`
5. Set `isStarter: true` only for the simplest, broadest templates

---

## Navigation and indexing

Whenever you add a new top-level page:
1. Add it to `NAV_LINKS` in `components/layout/Navbar.tsx`
2. Add it to `FOOTER_LINKS` in `components/layout/Footer.tsx`
3. Add it to `app/sitemap.ts` in the static routes array
4. Update `app/about/page.tsx` if it's a major course section

---

## TypeScript rules

- All content files must be fully type-safe — no `as any` or `// @ts-ignore`
- Use the existing types from `types/index.ts` — extend them don't bypass them
- Run `yarn typecheck` before finalizing any change
- New utility functions go in `lib/utils.ts`; content helpers go in `lib/content.ts`

---

## Styling rules

- Use Tailwind CSS exclusively — no inline styles except for dynamic values (e.g., `style={{ width: \`${percent}%\` }}`)
- Use the semantic color tokens (`text-accent-fg`, `bg-canvas-subtle`, `border-border`) not raw hex values
- Dark mode works automatically via CSS variables — test both modes when adding new UI
- `cn()` from `lib/utils.ts` (a clsx + tailwind-merge wrapper) for conditional classes
- Mobile-first: design for small screens, enhance for `sm:`, `md:`, `lg:`

---

## Mermaid diagrams

- Always write readable, well-labeled Mermaid definitions
- Test diagram syntax at [mermaid.live](https://mermaid.live) before adding
- Include a `caption` for every diagram
- Give each diagram a unique `id`
- Keep diagrams focused — one concept per diagram

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

## What to watch out for

- **Hydration mismatches**: Any component that reads from `localStorage` or uses `window` must have `'use client'` and handle SSR gracefully (see `useLocalStorage.ts` for the pattern)
- **Mermaid SSR**: `mermaid` package cannot be imported server-side — always use the dynamic import pattern in `MermaidRenderer.tsx`
- **`next/link` vs `<a>`**: Use `next/link` for internal links; `<a target="_blank" rel="noopener noreferrer">` for external
- **Image optimization**: Use `next/image` for all images (not `<img>`)
- **Generate static params**: When adding a new dynamic route, implement `generateStaticParams()` for build-time generation

---

## Content philosophy reminder

This is not a developer course. The audience is:
- People who want to use AI in their work and life
- Professionals with no technical background
- Anyone curious about AI but overwhelmed by jargon

Every lesson should be readable by someone with no AI background.
If a concept requires deep technical background to understand, it belongs in `/app/advanced/` with an `advanced` difficulty label.

Progressive disclosure: start simple, offer depth for those who want it.
Never make the user feel dumb. AI is complex — clarity is kindness.
