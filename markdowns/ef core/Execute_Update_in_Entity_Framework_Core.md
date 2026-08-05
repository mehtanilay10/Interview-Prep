# Execute Update in Entity Framework Core

> **TL;DR:** Always use `ExecuteUpdate` instead of `SaveChanges` when updating many entities with the same values. It’s faster and uses less memory.

`ExecuteUpdate` was introduced in EF Core 7 to perform update operations **without loading entities into the context**.

It runs the SQL command directly in the database, so the update happens immediately — no entity tracking, no `SaveChanges()` call needed.

It does have some limits — the update part is less flexible than a normal per-entity update. It works best when you need to set **the same values for all matched rows**, such as deactivating all customers with no activity in the last two years. You can use a LINQ query to filter the rows you want to update.

```
// Before with SaveChanges
var list = Context.TestEntities
    .Where(x => x.LastLogin < DateTime.Now.AddYears(-2))
    .ToList();
list.ForEach(x => x.IsActive = false);
Context.SaveChanges();

// Now with ExecuteUpdate
Context.TestEntities
    .Where(x => x.LastLogin < DateTime.Now.AddYears(-2))
    .ExecuteUpdate(x => x.SetProperty(y => y.IsActive, false));
```

Keep in mind that inside `SetProperty`, you can only use **simple value assignments or expressions** that can be translated to SQL (for example, setting a constant value or a basic math operation). You **cannot** use C# methods, custom logic, or reference other entities.

## How did it work before with `SaveChanges`?

-   A `SELECT` was executed using the LINQ expression

-   All entities were materialized (loaded into the context)
-   You modified the entities, marking them as `Modified` in the `ChangeTracker`

-   You called `SaveChanges` to persist the changes

```
var list = Context.TestEntities
    .Where(x => x.LastLogin < DateTime.Now.AddYears(-2))
    .ToList();
list.ForEach(x => x.IsActive = false);
Context.SaveChanges();
```

This approach works, but it comes with a cost — **every entity must be loaded and tracked in memory** before being updated.

When dealing with a large number of records, this quickly becomes slow and consumes a lot of memory.

## How does it work now with `ExecuteUpdate`?

-   A single `UPDATE` statement is executed directly from the LINQ expression

-   That’s it — no entities are loaded, no tracking, no extra steps!

```
Context.TestEntities
    .Where(x => x.LastLogin < DateTime.Now.AddYears(-2))
    .ExecuteUpdate(x => x.SetProperty(y => y.IsActive, false));
```

The code is cleaner, easier to use, and much more efficient since the update operation runs **directly in the database** without going through the change tracker.

There’s also no need to call `SaveChanges()` — the update is executed immediately.

However, note that since entities are not tracked, **any entities already loaded in the `ChangeTracker` will not be updated in memory**. If you still have those entities in your context, they will now be **out of sync** with the database values until reloaded.

## EF Core 10 Improvement

Starting with EF Core 10, [`ExecuteUpdate` and `ExecuteUpdateAsync` now accept a regular (non-expression) lambda](https://learn.microsoft.com/en-us/ef/core/what-is-new/ef-core-10.0/whatsnew#executeupdateasync-now-accepts-a-regular-non-expression-lambda).

In short, you can now use normal C# control flow — like `if`, `else if`, and `else` — inside the lambda to decide which `SetProperty` calls to apply.

Only the `SetProperty` calls are translated to SQL. For example:

```
query.ExecuteUpdate(b =>
{
    if (someCondition)
        b.SetProperty(e => e.Something, "Something");
    else
        b.SetProperty(e => e.Foo, "Foo");

    b.SetProperty(e => e.Bar, "Bar");
});
```

This improvement makes `ExecuteUpdate` more flexible by allowing conditions and branching logic.

However, the same SQL translation rules still apply — the expressions **inside** each `SetProperty` must be SQL-translatable (constants, columns, basic math), and you still can’t call C# methods or use values that come from memory.

## Performance

Is it really that much faster? **Yes!**

The more rows you need to update, the greater the performance gain. Even better — memory usage stays low since only a single SQL statement is generated, and entities are **never loaded into memory**.

You can clearly see the difference in both speed and memory consumption in the following [benchmark](https://github.com/zzzprojects/learnentityframeworkcore/blob/main/benchmarks/EFCore/EFCore.Benchmarks/Benchmarks/ExecuteUpdateVsSaveChanges.cs).

The improvement is dramatic:

![EF Core - ExecuteUpdate vs SaveChanges](https://raw.githubusercontent.com/zzzprojects/learnentityframeworkcore/refs/heads/main/benchmarks/EFCore/benchmark-result/ExecuteUpdate-vs-SaveChanges.png)

## Conclusion

`ExecuteUpdate` is one of the most practical performance improvements introduced in EF Core 7 — and even more flexible in EF Core 10.

It lets you update large sets of data **directly in the database**, without loading entities, tracking them, or calling `SaveChanges()`.

For simple updates that affect many rows, it’s the clear choice — **faster, cleaner, and lighter on memory**.

Just remember its limits:

-   Updates apply to **all matched rows with the same values**

-   Only SQL-translatable expressions are supported inside `SetProperty`
-   Entities already tracked in the context won’t automatically reflect database changes

If you need to perform complex per-entity logic, `SaveChanges()` still has its place.

But for most bulk updates, `ExecuteUpdate` is simply better — and now with EF Core 10, it’s also more flexible than ever.

---
Source: [Execute Update in Entity Framework Core](https://www.entityframeworktutorial.net/efcore/execute-update.aspx)