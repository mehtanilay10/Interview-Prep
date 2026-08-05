# Execute Delete in Entity Framework Core

> **TL;DR:** Always use `ExecuteDelete` instead of `RemoveRange` when deleting multiple entities and you can use a LINQ expression. It’s simply better — faster and uses less memory.

The `ExecuteDelete` method was introduced in EF Core 7 to efficiently handle delete operations **without loading data into the context first**. You can also combine it with LINQ queries, making it both powerful and convenient.

## How did it work before with `RemoveRange` + `SaveChanges`?

-   A `SELECT` was executed using the LINQ expression

-   All entities were materialized (loaded into the context)
-   You called `RemoveRange` to mark them as `Deleted`

-   You called `SaveChanges` to persist the deletes

```
var q = Context.TestEntities.Where(x => !x.IsActive);
Context.TestEntities.RemoveRange(q);
Context.SaveChanges();
```

This approach works, but it comes with a cost — **every entity must be loaded and tracked in memory** before being deleted, which can quickly slow things down and use more resources when dealing with many records.

## How does it work now with `ExecuteDelete`?

-   A single `DELETE` statement is executed directly using the LINQ expression

-   That’s it — no entities are loaded, no tracking, no extra steps!

```
Context.TestEntities.Where(x => !x.IsActive).ExecuteDelete();
```

The code is cleaner, easier to use, and much more efficient since the delete operation runs **directly in the database** without going through the change tracker.

## Performance

Is it really that much faster? **Yes!** The more rows you need to delete, the greater the performance gain. Even better — memory usage stays low since only a single SQL statement needs to be generated, and entities are **never loaded into memory**.

You can see the difference in both performance and memory consumption in the following [benchmark](https://github.com/zzzprojects/learnentityframeworkcore/blob/main/benchmarks/EFCore/EFCore.Benchmarks/Benchmarks/ExecuteDeleteVsSaveChanges.cs). The improvement is dramatic:

![EF Core - ExecuteDelete vs RemoveRange](https://raw.githubusercontent.com/zzzprojects/learnentityframeworkcore/refs/heads/main/benchmarks/EFCore/benchmark-result/ExecuteDelete-vs-SaveChanges.png)

## Conclusion

The `ExecuteDelete` method is a simple but powerful improvement in EF Core. It lets you delete large sets of data **directly in the database** — without the overhead of loading and tracking entities.

Compared to the old `RemoveRange` approach, it’s cleaner, faster, and far more memory-efficient. If you’re deleting multiple records and can express your condition with LINQ, there’s no reason not to use it.

In short: **less code, less memory, and much better performance.**

---
Source: [Execute Delete in Entity Framework Core](https://www.entityframeworktutorial.net/efcore/execute-delete.aspx)