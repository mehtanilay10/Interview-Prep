# Standard Query Operators

Standard Query Operators in LINQ are actually extension methods for the `IEnumerable<T> and IQueryable<T>` types. They are defined in the `System.Linq.Enumerable` and `System.Linq.Queryable` classes. There are over 50 standard query operators available in LINQ that provide different functionalities like filtering, sorting, grouping, aggregation, concatenation, etc.

## Standard Query Operators in Query Syntax

![Standard Query Operators in Query Syntax](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Fstandard-query-operators-linq-query-syntax.webp&w=3840&q=75)

## Standard Query Operators in Method Syntax

![Standard Query Operators in Method Syntax](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Fstandard-query-operators-linq-method-syntax.webp&w=3840&q=75)

Standard query operators in query syntax is converted into extension methods at compile time. So both are same.

Standard Query Operators can be classified based on the functionality they provide. The following table lists all the classification of Standard Query Operators:

| Classification | Standard Query Operators |
| --- | --- |
| Filtering | Where, OfType |
| Sorting | OrderBy, OrderByDescending, ThenBy, ThenByDescending, Reverse |
| Grouping | GroupBy, ToLookup |
| Join | GroupJoin, Join |
| Projection | Select, SelectMany |
| Aggregation | Aggregate, Average, Count, LongCount, Max, Min, Sum |
| Quantifiers | All, Any, Contains |
| Elements | ElementAt, ElementAtOrDefault, First, FirstOrDefault, Last, LastOrDefault, Single, SingleOrDefault |
| Set | Distinct, Except, Intersect, Union |
| Partitioning | Skip, SkipWhile, Take, TakeWhile |
| Concatenation | Concat |
| Equality | SequenceEqual |
| Generation | DefaultEmpty, Empty, Range, Repeat |
| Conversion | AsEnumerable, AsQueryable, Cast, ToArray, ToDictionary, ToList |

Learn each Standard Query Operators in the next sections.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Standard Query Operators](https://www.tutorialsteacher.com/linq/linq-standard-query-operators)