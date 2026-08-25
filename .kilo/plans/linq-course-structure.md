# LINQ Course Structure Plan

## Overview

Draft a course structure for LINQ (Language-Integrated Query) based on 40 unique markdown source files from `/markdowns/linq`. The course follows the existing project conventions (JSON content blocks, slugs, module/lesson hierarchy) and targets beginners progressing to intermediate C# developers.

## Source Files

40 unique markdown files (1 duplicate excluded: `Take_&_TakeWhile_-_Partitioning_Operators (1).md`).

## Module & Lesson Mapping

### Module 1: Getting Started with LINQ
- **slug**: `getting-started-linq`
- **difficulty**: `beginner`
- **estimatedHours**: 2
- **icon**: `🚀`
- **tags**: `["linq", "introduction", "fundamentals"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `what-is-linq` | What is LINQ? | `What_is_LINQ.md` |
| 2 | `why-linq` | Why Use LINQ? | `Why_LINQ.md` |
| 3 | `linq-api-in-net` | LINQ API in .NET | `LINQ_API_in_NET.md` |
| 4 | `learn-linq-step-by-step` | Learn LINQ: Step-by-Step Tutorials | `Learn_LINQ_using_Step-by-Step_Tutorials.md` |

### Module 2: LINQ Fundamentals — Syntax & Lambda Expressions
- **slug**: `linq-fundamentals-syntax`
- **difficulty**: `beginner`
- **estimatedHours**: 3
- **icon**: `📝`
- **tags**: `["linq", "syntax", "lambda", "query-syntax", "method-syntax"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `linq-query-syntax` | LINQ Query Expression Syntax | `LINQ_Query_Syntax.md` |
| 2 | `linq-method-syntax` | LINQ Method Syntax | `LINQ_Method_Syntax.md` |
| 3 | `anatomy-of-lambda-expression` | Anatomy of the Lambda Expression | `Anatomy_of_the_Lambda_Expression.md` |

### Module 3: Filtering & Projection
- **slug**: `filtering-projection`
- **difficulty**: `beginner`
- **estimatedHours**: 2
- **icon**: `🔍`
- **tags**: `["linq", "filtering", "where", "select", "projection"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `filtering-operator-where` | Filtering with Where | `Filtering_Operator_-_where.md` |
| 2 | `oftype-filtering-operator` | OfType Filtering Operator | `OfType_-_Filtering_Operator.md` |
| 3 | `projection-operators` | Projection Operators (Select & SelectMany) | `Projection_Operators.md` |

### Module 4: Sorting & Grouping
- **slug**: `sorting-grouping`
- **difficulty**: `beginner`
- **estimatedHours**: 3
- **icon**: `📊`
- **tags**: `["linq", "sorting", "orderby", "grouping", "groupby"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `orderby-orderbydescending` | Sorting with OrderBy & OrderByDescending | `OrderBy_&_OrderByDescending_-_Sorting_Operators.md` |
| 2 | `thenby-thenbydescending` | Secondary Sorting with ThenBy & ThenByDescending | `ThenBy_&_ThenByDescending_-_Sorting_Operators.md` |
| 3 | `grouping-operator-groupby-tolookup` | Grouping with GroupBy & ToLookup | `Grouping_Operator_GroupBy_&_ToLookup.md` |

### Module 5: Joining Data
- **slug**: `joining-data`
- **difficulty**: `intermediate`
- **estimatedHours**: 3
- **icon**: `🔗`
- **tags**: `["linq", "join", "groupjoin", "inner-join", "outer-join"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `join-operator` | Inner Join with Join | `Join_-_LINQ_Joining_Operator.md` |
| 2 | `groupjoin-operator` | Group Join with GroupJoin | `GroupJoin_-_Joining_Operator.md` |

### Module 6: Set Operations
- **slug**: `set-operations`
- **difficulty**: `intermediate`
- **estimatedHours**: 2
- **icon**: `🔄`
- **tags**: `["linq", "set", "distinct", "except", "intersect", "union"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `distinct-set-operator` | Distinct — Removing Duplicates | `Distinct_-_Set_operator.md` |
| 2 | `except-set-operator` | Except — Set Difference | `Except_-_LINQ_Set_operator.md` |
| 3 | `intersect-set-operator` | Intersect — Set Intersection | `Intersect_-_Set_operator.md` |
| 4 | `union-set-operator` | Union — Combining Sets | `Union_-_Set_operator.md` |
| 5 | `concat-concatenation-operator` | Concat — Concatenation | `Concat_-_Concatenation_Operator.md` |

### Module 7: Aggregation Operators
- **slug**: `aggregation-operators`
- **difficulty**: `intermediate`
- **estimatedHours`: 3
- **icon**: `📈`
- **tags**: `["linq", "aggregation", "count", "sum", "average", "max", "aggregate"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `aggregation-count` | Count Operator | `Aggregation_Operator_-_Count.md` |
| 2 | `aggregation-sum` | Sum Operator | `Aggregation_Operator_-_Sum.md` |
| 3 | `aggregation-average` | Average Operator | `Aggregation_Operator_-_Average.md` |
| 4 | `aggregation-max` | Max Operator | `Aggregation_Operators_-_Max.md` |
| 5 | `aggregation-aggregate` | Custom Aggregation with Aggregate | `Aggregation_Operators_Aggregate.md` |

### Module 8: Quantifiers & Element Operators
- **slug**: `quantifiers-element-operators`
- **difficulty**: `intermediate`
- **estimatedHours**: 3
- **icon**: `🎯`
- **tags**: `["linq", "quantifiers", "element", "first", "last", "single", "contains"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `quantifier-operators` | Quantifier Operators (All & Any) | `Quantifier_Operators.md` |
| 2 | `contains-quantifier-operator` | Contains Operator | `Contains_-_Quantifier_Operator.md` |
| 3 | `elementat-elementatordefault` | ElementAt & ElementAtOrDefault | `ElementAt_&_ElementAtOrDefault_-_Element_Operators.md` |
| 4 | `first-firstordefault` | First & FirstOrDefault | `First,_FirstOrDefault_-_Element_Operators.md` |
| 5 | `last-lastordefault` | Last & LastOrDefault | `Last,_LastOrDefault_-_Element_Operators.md` |
| 6 | `single-singleordefault` | Single & SingleOrDefault | `SingleSingleOrDefault_-_Element_Operators.md` |

### Module 9: Partitioning Operators
- **slug**: `partitioning-operators`
- **difficulty**: `intermediate`
- **estimatedHours`: 2
- **icon**: `✂️`
- **tags**: `["linq", "partitioning", "skip", "take", "skipwhile", "takewhile"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `skip-skipwhile` | Skip & SkipWhile | `Skip_&_SkipWhile_-_Partitioning_Operators.md` |
| 2 | `take-takewhile` | Take & TakeWhile | `Take_&_TakeWhile_-_Partitioning_Operators.md` |

### Module 10: Conversion & Generation Operators
- **slug**: `conversion-generation-operators`
- **difficulty**: `intermediate`
- **estimatedHours**: 2
- **icon**: `🔄`
- **tags**: `["linq", "conversion", "generation", "cast", "toarray", "tolist"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `conversion-operators` | Conversion Operators | `Conversion_Operators.md` |
| 2 | `generation-operators` | Generation Operators (Empty, Range, Repeat) | `Generation_Operators.md` |
| 3 | `defaultifempty-operator` | DefaultIfEmpty Operator | `C#_DefaultIfEmpty.md` |

### Module 11: Advanced LINQ Concepts
- **slug**: `advanced-linq-concepts`
- **difficulty**: `advanced`
- **estimatedHours**: 3
- **icon**: `🧠`
- **tags**: `["linq", "advanced", "expression-trees", "sequenceequal", "sample-queries"]`

| Order | Lesson Slug | Lesson Title | Source File |
|-------|------------|-------------|-------------|
| 1 | `expression-trees` | Expression Trees | `Expression_Tree.md` |
| 2 | `sequenceequal-operator` | SequenceEqual — LINQ Equality Operator | `SequenceEqual_-_LINQ_Equality_Operator.md` |
| 3 | `sample-linq-queries` | Sample LINQ Queries | `Sample_LINQ_Queries.md` |
| 4 | `standard-query-operators` | Standard Query Operators Overview | `Standard_Query_Operators.md` |

## Course Metadata

- **id**: `course-linq`
- **slug**: `linq`
- **title**: `LINQ — Language-Integrated Query`
- **subtitle**: `Master data querying in C# with LINQ from fundamentals to advanced concepts`
- **description**: `A comprehensive course covering LINQ fundamentals, query syntax, method syntax, lambda expressions, filtering, projection, sorting, grouping, joining, set operations, aggregation, quantifiers, element operators, partitioning, conversion, generation, and advanced concepts like expression trees.`
- **icon**: `🔵`
- **color**: `info`
- **order**: `4` (after ASP.NET Core)
- **moduleSlugs**: ordered list of all 11 module slugs above

## Implementation Notes

1. Each lesson JSON file should be placed in `content/courses/linq/<module-slug>/<lesson-slug>.json`
2. Each module needs a `content.json` in `content/courses/linq/<module-slug>/`
3. A course-level `content.json` goes in `content/courses/linq/content.json`
4. Update `content/courses/index.ts` to import the new course
5. Update `content/modules/index.ts` to import all new modules
6. Update `content/lessons/index.ts` to import all new lessons
7. Update `components/layout/Navbar.tsx` and `components/layout/Footer.tsx` to add `/courses/linq` link
8. Update `app/sitemap.ts` to include the new course route
9. Update `app/about/page.tsx` if the course is a major section
10. Run `yarn typecheck`, `yarn lint`, and `yarn build` to validate

## Duplicate Files (Excluded)

- `Take_&_TakeWhile_-_Partitioning_Operators (1).md` — duplicate of `Take_&_TakeWhile_-_Partitioning_Operators.md`
