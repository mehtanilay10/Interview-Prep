# React Course Audit Notes

## Duplicate Content

The following lessons contain overlapping content that should be consolidated or differentiated:

### react-fundamentals/01-getting-started/first-react-app.json
- Contains useState examples that overlap with 03-state-events/useState-hook.json
- Suggestion: Convert first-react-app to a static component example or move state introduction to the dedicated state module.

### react-fundamentals/02-components-props/props-basics.json vs react-fundamentals/02-components-props/composing-components.json
- Both cover component composition; ensure distinct focus (props passing vs component assembly).

### react-advanced-patterns/01-render-props/render-props-basics.json vs react-advanced-patterns/01-render-props/render-props-vs-hooks.json
- Render props pattern is covered in both lessons; consider merging or clearly differentiating.

### react-testing/01-testing-fundamentals/why-test-react.json vs react-testing/01-testing-fundamentals/testing-principles.json
- Both introduce testing motivation; consolidate into a single comprehensive lesson.

## Other Notes

- Several lessons across react-fundamentals, react-advanced-patterns, and react-testing had empty `relatedLessons` and `furtherReading` arrays. These have been removed per audit.
- Exercise blocks have been added to lessons missing them.
