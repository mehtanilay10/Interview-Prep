---
name: write-artical
description: 'Enrich and expand JSON content for AI learning web apps. Use when users ask to add details, enrich JSON, expand content, add learning material, improve article JSON, write article content, add Mermaid diagrams, add references, add code examples, or fill more educational blocks in AI/ML course files.'
argument-hint: 'Path or JSON to enrich, audience level, and depth target'
---

# Write Artical

## Purpose
Expand a lesson/article JSON file with high-quality educational content while preserving the existing schema and existing values.

## Use When
- User asks to add more details to a lesson JSON.
- User asks to enrich, expand, or improve article JSON.
- User shares JSON and asks to add content blocks, diagrams, references, or code examples.
- User asks to write article content for an AI/ML learning module.

## Do Not Use When
- The task is to redesign the schema.
- The user asks to remove or rewrite existing content in place.
- The request is mainly quizzes, assignments, or assessment generation.

## Hard Rules
1. Preserve schema exactly: do not add, rename, or remove top-level keys.
2. Never delete existing data.
3. Return valid JSON only when the user asks for output content.
4. Do not add exercises, homework, quizzes, or todo checklists.
5. Keep scope inside the current topic file; avoid sibling-topic content drift.
6. Prefer depth and clarity over broad but shallow additions.

## Workflow
1. Read the current JSON and infer its schema from existing keys and block shapes.
2. Determine topic boundary from the file slug and existing blocks.
3. Find content gaps across levels:
- Beginner: definitions, mental models, plain-language framing.
- Intermediate: comparisons, architecture flow, practical examples.
- Advanced: nuances, tradeoffs, pitfalls, best practices.
4. Plan additive insertions only:
- Keep all existing blocks unchanged.
- Insert new blocks where they improve narrative flow.
5. Generate additions using existing block types only:
- explanatory text
- Mermaid diagrams
- short illustrative code snippets
- reference links from stable sources
- comparison tables and terminology where schema supports them
6. Validate quality and safety:
- JSON parses successfully.
- Mermaid syntax is renderable.
- References are authoritative and relevant.
- No off-topic leakage into neighboring lesson domains.
7. Return final enriched JSON.

## Decision Points
- If schema is unclear: mirror the nearest valid existing block shape instead of inventing one.
- If a concept belongs to another lesson: add a short in-scope mention only, avoid deep expansion.
- If the lesson is beginner-focused: keep examples concrete and reduce jargon density.
- If user asks for large expansion: interleave content in multiple sections instead of appending one long tail.

## Completion Checks
- Original content remains present and unchanged.
- Output is valid parseable JSON.
- Added blocks are on-topic and educational.
- Added content improves progression from basic to advanced understanding.
- No quiz or assignment style content added.

## Topic Boundary Guardrail
Avoid importing deep content that belongs to sibling files such as prompt internals, agent architecture internals, vector DB implementation details, enterprise governance policy detail, or unrelated tooling deep-dives unless the current file already centers that topic.
