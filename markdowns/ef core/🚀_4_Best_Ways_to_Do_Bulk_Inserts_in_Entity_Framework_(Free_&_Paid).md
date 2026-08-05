# 🚀 4 Best Ways to Do Bulk Inserts in Entity Framework (Free & Paid)

Sooner or later, every developer using **Entity Framework (EF Core or EF6)** faces the same question:

**How can I insert my entities faster?**

-   Want your **apps** to handle thousands of inserts in no time?

-   Want your **users** to feel your system is faster and more responsive?
-   Want your **tests** to finish quicker so you can code more and wait less?

In **EF6**, saving data was painfully slow due to ChangeTracker and how entities was saved. With **EF Core**, performance improved — especially on SQL Server — but inserts can still become a bottleneck.

The good news? There are faster ways.

In this article, we’ll look at the **4 best solutions** for bulk inserts in EF:

-   **Pure Entity Framework (EF6 & EF Core)** — the default, no extra libraries

-   **Provider-level APIs** — built-in features like `SqlBulkCopy`, `MySqlBulkCopy`, and others
-   **Free third-party libraries** — open-source alternatives

-   **Commercial libraries** — maximum performance, features, and control

---

## Pure Entity Framework (EF6 & EF Core)

If you are using **EF Core**, make sure to also read the **EF6** section. Many misconceptions about EF Core performance come from how things worked in the old EF6 days.

### Bulk Inserts using EF6

EF6 had **no built-in support** for true bulk inserts. All inserts were executed **one row at a time**, making large saves painfully slow.

The only area developers could really optimize was the **ChangeTracker** — and that was **THE major problem**. As more entities were tracked, performance dropped drastically — even **before** calling `SaveChanges()`.

**How bad could the ChangeTracker get?** Some developers reported that inserting thousands of entities took **several hours**, and the worst part was that **nothing had been saved yet**.

That’s why most of the common “performance tricks” for EF6 focused on reducing the overhead caused by the ChangeTracker.

Because of this limitation, it was the **perfect time to use third-party libraries** such as [Entity Framework Extensions](https://entityframework-extensions.net/bulk-insert), which quickly became the go-to solution for inserting large numbers of entities efficiently.

#### ⚠️ The Problem – The ChangeTracker and `DetectChanges`

In EF6, the real performance killer was the **ChangeTracker**.

Entities weren’t even saved yet, and it could already take **minutes or even hours** just to add them into the tracker.

The main culprit was `DetectChanges()`. By default, it was called **for every entity** added with the `Add` method. Each time it ran, it didn’t just check the new entity — it **re-scanned all entities already being tracked**.

And the worst part? Performance got even worse when your entity had relationships, **even if those relationships weren’t populated**.

Take the following benchmark as an example. It measures how many milliseconds it takes to add **one** entity to the `ChangeTracker`, depending on how many items are already tracked (the **EntityCount**):

-   [EF6.Benchmarks – ChangeTracker AddNextEntity Performance](https://github.com/zzzprojects/entityframeworktutorial/blob/main/ef6/benchmarks/EF6.Benchmarks/Benchmarks/ChangeTracker_AddNextEntityPerformance.cs)

![EF6 - AddNextEntity Performance](https://raw.githubusercontent.com/zzzprojects/entityframeworktutorial/main/ef6/benchmarks/benchmark-result/ChangeTracker_AddNextEntityPerformance.png)

As shown in the benchmark results, with **1 million entities** already in the ChangeTracker:

-   Adding one more entity took **257 ms**.

-   If the entity had **one relationship (not populated)**, it jumped to **720 ms**.
-   With **two relationships (not populated)**, it took **over 1 second**.

Yes, you read that right — it took a **full second just to add a single entity** to the ChangeTracker. And remember, **we haven’t even saved it yet**!

At that speed, you could only add **3,600 entities per hour** in the `ChangeTracker` — That’s how easily the process could stretch into **many hours** or even **days** in real-world scenarios.

Adding entities with graphs in EF6 was nothing short of a nightmare, especially if you were using the `Add` method incorrectly.

👉 That’s why every EF6 workaround focused on one thing: **reducing the overhead of `DetectChanges()` in the ChangeTracker**.

#### ✅ Solution 1 – Use `AddRange` Instead of `Add`

When adding many entities in EF6, using `Add` inside a loop was extremely inefficient.

The reason is simple:

-   Each call to `Add` triggers **`DetectChanges()`**, which scans **all entities** in the ChangeTracker.

-   So, if you add **10,000 entities one by one**, `DetectChanges()` runs **10,000 times** — each time on the entire tracked list.

In the source code:

-   The [`Add` method](https://github.com/dotnet/ef6/blob/main/src/EntityFramework/Internal/Linq/InternalSet%60.cs#L353) calls [`ActOnSet`](https://github.com/dotnet/ef6/blob/main/src/EntityFramework/Internal/Linq/InternalSet%60.cs#L430), which in turn calls `DetectChanges()` **before** adding the entity.

-   The [`AddRange` method](https://github.com/dotnet/ef6/blob/main/src/EntityFramework/Internal/Linq/InternalSet%60.cs#L361) calls `DetectChanges()` **only once** before adding all entities in a single call to [`ActOnSet`](https://github.com/dotnet/ef6/blob/main/src/EntityFramework/Internal/Linq/InternalSet%60.cs#L453), which this time **does not call** `DetectChanges()` again.

Using the following [benchmark](https://github.com/zzzprojects/entityframeworktutorial/blob/main/ef6/benchmarks/EF6.Benchmarks/Benchmarks/ChangeTracker_AddVsAddRange.cs), the difference is dramatic:

![EF6 - Add vs AddRange Performance](https://raw.githubusercontent.com/zzzprojects/entityframeworktutorial/main/ef6/benchmarks/benchmark-result/ChangeTracker_AddVsAddRange.png)

**Benchmark results:**

-   **1 entity:** Performance is identical — no surprise.

-   **10 entities:** Still similar — no noticeable difference.
-   **100 entities:** The `Add` method starts slowing down.

-   **1,000 entities:** `Add` gets clearly slower, while `AddRange` scales smoothly.
-   **10,000 entities:** `Add` becomes **83× slower** and uses **325× more memory**.

-   **100,000 entities:** `Add` becomes completely unusable — **1,946× slower** and **3,275× more memory**.

This small change avoids thousands of unnecessary checks and makes adding entities **dozens to hundreds of times faster**, especially with large collections.

```
// Slower: DetectChanges runs for every entity
foreach (var customer in customers)
{
    context.Customers.Add(customer);
}

// Faster: DetectChanges runs only once
context.Customers.AddRange(customers);
```

#### ✅ Solution 2 – Disable `AutoDetectChangesEnabled`

By now, you already know that the main performance problem in EF6 was how many times the `DetectChanges()` method was called.

Another effective way to improve performance is to **temporarily disable automatic change detection**, add all your entities, and then **re-enable it** before saving.

```
using (var context = new EntityContext())
{
    context.Configuration.AutoDetectChangesEnabled = false;

    var customers = new List<Customer>();
    for (int i = 0; i < 2000; i++)
    {
        customers.Add(new Customer { /* ...set properties... */ });
    }

    context.Configuration.AutoDetectChangesEnabled = true;

    context.SaveChanges();
}
```

As shown in this [benchmark](https://github.com/zzzprojects/entityframeworktutorial/blob/main/ef6/benchmarks/EF6.Benchmarks/Benchmarks/ChangeTracker_AutoDetectChangesDisabled.cs), the performance difference between `Add` and `AddRange` becomes **minimal** when `AutoDetectChangesEnabled` is temporarily turned off:

![EF6 - AutoDetectChanges Disabled Performance](https://raw.githubusercontent.com/zzzprojects/entityframeworktutorial/main/ef6/benchmarks/benchmark-result/ChangeTracker_AutoDetectChangesDisabled.png)

You’ll often see people suggesting to *never re-enable* `AutoDetectChangesEnabled` or to disable `ValidateOnSaveEnabled` as well. Sure — that’s faster, but it can also lead to problems:

-   Some relationships may not be detected correctly.

-   Entities skip validation entirely.

You do want your entities validated, right?

Calling `DetectChanges()` **once** isn’t a problem, even with a million entities. Remember — the real issue was that it used to run **thousands of times**, once per added entity.

#### ✅ Solution 3 – Split Into Multiple Batches

Another way to improve performance in EF6 is to **save entities in smaller batches** instead of all at once.

The idea is simple:

-   The larger the `ChangeTracker`, the slower it becomes.

-   By creating a **new context for each batch**, you keep the number of tracked entities small.

Here’s an example of saving entities in chunks of 1,000:

```
const int batchSize = 1000;

for (int i = 0; i < customers.Count; i += batchSize)
{
    using (var context = new EntityContext())
    {
        var batch = customers.Skip(i).Take(batchSize).ToList();

        context.Customers.AddRange(batch);
        context.SaveChanges();
    }
}
```

Using the following [benchmark](https://github.com/zzzprojects/entityframeworktutorial/blob/main/ef6/benchmarks/EF6.Benchmarks/Benchmarks/ChangeTracker_BatchSave.cs):

![EF6 - Batch Save Performance](https://raw.githubusercontent.com/zzzprojects/entityframeworktutorial/main/ef6/benchmarks/benchmark-result/ChangeTracker_BatchSave.png)

We can see that:

-   There’s **no major performance gain** when batching over using the `Add` or `AddRange` methods correctly.

-   The `Add` method remains the slowest, even when batching, but since each context only tracks a limited number of entities, the slowdown is much less noticeable.

In short, batching can help **if you’re forced to use the `Add` method incorrectly**, but it doesn’t provide any additional benefit over the two previous solutions.

**Why this helps**

-   Each context only tracks a small number of entities.

-   After each batch, the context is disposed, and all tracking data is cleared.
-   This keeps the `ChangeTracker` light and avoids the slowdown caused by massive collections.

-   This approach is still useful when dealing with **memory constraints** or **transactional limits**, even if performance improvements are minor.

### Bulk Inserts using EF Core

In EF6, performance issues were mostly caused by how entities were added to the `ChangeTracker`, since there were no built-in bulk operations — unless you used a third-party library such as [Entity Framework Extensions](https://entityframework-extensions.net/).

With **EF Core**, things are different. The performance issues related to the `ChangeTracker` have been fixed, and overall performance has greatly improved. However, when you search for ways to improve performance even further, you’ll often find **misleading advice** online about “bulk inserts”.

Let’s clear things up.

### ❌ Lie #1 – Using `AddRange` or `AddRangeAsync` performs a Bulk Insert

Does calling `AddRange` mean EF Core will do a real bulk insert?

**No.** Using `Add` or `AddRange` has **no impact** on how entities are saved. The `AddRange` method has only one job — to add entities to the `ChangeTracker`, **not** to decide how they will be saved in the database.

Even more, unlike EF6, it doesn’t matter whether you use `Add` or `AddRange` for performance. Why?

Because in EF Core, `DetectChanges()` is executed only once during [SaveChanges](https://github.com/dotnet/efcore/blob/main/src/EFCore/DbContext.cs#L642) if [AutoDetectChangesEnabled](https://github.com/dotnet/efcore/blob/main/src/EFCore/DbContext.cs#L683) is set to `true`.

Using the following [benchmark](https://github.com/zzzprojects/learnentityframeworkcore/blob/main/benchmarks/EFCore/EFCore.Benchmarks/Benchmarks/ChangeTracker_AddVsAddRange.cs):

![EF Core - Add vs AddRange](https://raw.githubusercontent.com/zzzprojects/learnentityframeworkcore/main/benchmarks/EFCore/benchmark-result/ChangeTracker_AddVsAddRange.png)

We can clearly see that there is **no difference in performance** whether you use the `Add` or `AddRange` method.

So in short:

-   `AddRange` does **not** perform a Bulk Insert — it only adds entities to the `ChangeTracker`

-   `AddRange` is **not faster** than `Add` in EF Core

### ❌ Lie #2 – `SaveChanges` already does a Bulk Insert

Yes and no. There have been major improvements since EF6, but saying `SaveChanges` performs a *real* bulk insert isn’t quite accurate.

Here’s what actually happens, depending on the provider:

-   **SQL Server** – EF Core now uses a `MERGE` statement to insert multiple rows at once, a **similar strategy that [Entity Framework Extensions](https://entityframework-extensions.net/bulk-insert) introduced back in 2014**.
    -   This is a big step forward compared to EF6.
    -   However, EF Extensions still goes further by using **`SqlBulkCopy`** under the hood, which is much faster for large datasets.
    -   EF Core’s approach is also limited by SQL parameters (2,100 per batch), so performance drops quickly when entities have many columns.
-   **PostgreSQL** – Multiple single inserts are batched into one command.

-   **MySQL** – Multiple single inserts are batched into one command.
-   **MariaDB** – Multiple single inserts are batched into one command.

-   **Oracle** – Multiple single inserts are batched into one command.
-   **SQLite** – Inserts are still executed one by one.

**The truth:**

-   SQL Server is the only provider that comes close to a real bulk insert, but it still doesn’t match the raw performance of [Entity Framework Extensions](https://entityframework-extensions.net/bulk-insert).

-   For PostgreSQL, MySQL, MariaDB, and Oracle, EF Core just batches multiple inserts together — not a true bulk insert.
-   SQLite still performs single inserts, which, despite sounding inefficient, is actually the fastest method available for that provider.

---

### ❌ Lie #3 – `SaveChanges` makes a database round-trip for every entity

This is another **myth carried over from EF6**. In EF6, inserts were indeed sent **one by one**, meaning every entity caused a separate round-trip to the database.

But in EF Core, that’s no longer true — as we just saw in **Lie #2**.

-   **SQL Server** → Uses a bulk-style strategy with `MERGE` to insert multiple rows at once.

-   **PostgreSQL, MySQL, MariaDB, Oracle** → Batch multiple single inserts together into **one SQL command**.
-   **SQLite** → This provider still sends entities one by one, but that’s actually the most efficient approach for SQLite.

So no — `SaveChanges` does **not** make a database round-trip for every entity (except for SQLite). That misconception belongs to EF6, not EF Core.

---

## Provider-level APIs (SQL Server, PostgreSQL, Oracle, MySQL)

If you want **full control** and **maximum performance**, most database providers expose their **own bulk insert APIs**. These APIs bypass Entity Framework completely and write data directly to the database.

**Pros**

-   Fastest possible performance (these APIs are used internally by professional libraries like [Entity Framework Extensions](https://entityframework-extensions.net/bulk-insert))

-   Free to use and already included with most database providers
-   Works with both **EF6** and **EF Core**

**Cons**

-   Requires manual coding and additional testing

-   Must be updated whenever your model changes
-   Less maintainable compared to high-level EF solutions

**Examples**

-   **SQL Server** → `SqlBulkCopy` ([docs](https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlbulkcopy))

-   **PostgreSQL** → `BinaryCopy` ([docs](https://www.npgsql.org/doc/copy.html))
-   **MySQL** → `MySqlBulkCopy` ([docs](https://mysqlconnector.net/api/mysqlconnector/mysqlbulkcopytype/))

-   **Oracle** → `OracleBulkCopy` ([docs](https://docs.oracle.com/cd/E11882_01/win.112/e23174/OracleBulkCopyClass.htm))
-   **Oracle** → `Array Binding` ([docs](https://blogs.oracle.com/connect/post/put-your-arrays-in-a-bind))

Here’s a simple example for SQL Server:

```
using (var bulk = new SqlBulkCopy(connection))
{
    bulk.DestinationTableName = "Customers";
    bulk.WriteToServer(dataTable);
}
```

Using these APIs directly works great for basic scenarios, but they quickly become limited when you need to handle more advanced cases such as:

-   Returning identity values

-   Inserting only records that don’t already exist
-   Managing complex Entity Framework mappings (default values, complex types, owned types, etc.)

That’s why most developers prefer to use a **professional library** like [Entity Framework Extensions](https://entityframework-extensions.net/bulk-insert), which takes care of all these details and is already **well-tested with thousands of unit tests**.

---

## Free third-party libraries

### EF6 Free Bulk Insert third-party libraries

For EF6, there are currently no free third-party libraries that we can recommend.

A few exist, but they haven’t been updated since 2019 and are no longer supported:

-   [EntityFramework.BulkInsert-ef6-ext](https://www.nuget.org/packages/EntityFramework.BulkInsert-ef6-ext)

-   [EntityFramework6.BulkInsert](https://www.nuget.org/packages/EntityFramework6.BulkInsert)

Using an unsupported library is not something we would recommend in a production environment — you can try them at your own risk, but expect limitations and potential issues.

---

### EF Core Free Bulk Insert Libraries

For **EF Core**, the only free option worth mentioning at this moment is [**EFCore.BulkExtensions.MIT**](https://www.nuget.org/packages/EFCore.BulkExtensions.MIT) — a community fork of the original library, released under the **MIT license**.

It’s **completely free** for both personal and commercial use, supports **EF Core 6 to 9**, and includes a few extra bug fixes not merged into the main branch.

You can view benchmarks and details here: 👉 [Learn EF Core - EFCore.BulkExtensions.MIT](https://www.learnentityframeworkcore.com/extensions/efcore-bulkextensions-mit)

⚠️ **Important:** Don’t confuse it with [**EFCore.BulkExtensions**](https://www.nuget.org/packages/EFCore.BulkExtensions/), which now requires a **paid license** for most companies.

While the MIT fork works well for basic bulk operations, it’s **not actively maintained**, offers **limited community support**, and has **partial compatibility** outside of SQL Server.

---

## Commercial libraries

### Z.EntityFramework.Extensions (EF Extensions or EFE)

This is the library that **most developers recommend** when it comes to bulk operations in Entity Framework.

It supports both **EF6** and **EF Core**, and is the **most complete bulk extension library on the market**. Created in **2014**, it is now trusted by **5,000+ customers worldwide**.

-   👉 Benchmarks and examples: [GitHub Repository](https://github.com/zzzprojects/EntityFramework-Extensions)

-   👉 Full documentation: [Official Docs](https://entityframework-extensions.net/bulk-extensions)

The library includes everything you need for high-performance operations:

-   Bulk Insert

-   Bulk Update
-   Bulk Delete

-   Bulk Merge
-   Bulk Synchronize

-   WhereBulkContains
-   …and much more

All operations are also **highly customizable**, giving you full control over how your data is handled.

**Advantages**

-   Best performance (built on top of provider APIs like `SqlBulkCopy`).

-   Works with both EF6 and EF Core.
-   Covers the widest range of bulk operations.

-   Professional support with frequent updates (new versions every month).
-   Perpetual license with renewal discounts (cheaper long term than subscriptions).

### EFCore.BulkExtensions

We **do not recommend using EFCore.BulkExtensions** anymore.

Since moving to a [dual license in 2023](https://github.com/borisdj/EFCore.BulkExtensions/issues/1079), the library has lost most of its appeal. Commercial use is restricted to companies earning **under $1M per year**, and the license is **subscription-based**, requiring **annual renewals**.

Beyond licensing, the project is **no longer actively maintained** — most GitHub issues go unanswered, and there have been **no meaningful updates** for a long time. [**See for yourself**](https://github.com/borisdj/EFCore.BulkExtensions/issues/) — many open issues have been left without any reply.

You can read more details and benchmarks on [**Learn EF Core - EFCore.BulkExtensions**](https://www.learnentityframeworkcore.com/extensions/efcore-bulkextensions).

If you’re considering a **commercial library**, the difference is even clearer:

| Feature | **EFCore.BulkExtensions** | **Entity Framework Extensions (EFE)** |
| --- | --- | --- |
| License | Subscription (renew yearly) | Perpetual (renew optional) |
| Support | Minimal, mostly unanswered | Active, responsive, professional |
| Updates | Rare and irregular | Monthly, stable, and tested |
| Features | Basic bulk operations only | Full feature set with advanced mapping, identity handling, and support across all major database providers |
| Performance | Good in simple cases, slower in complex ones | Optimized for all scenarios |

**In short:**

EFCore.BulkExtensions is now the **outdated choice**:

-   For free use, go with **EFCore.BulkExtensions.MIT**.

-   For professional projects, **Entity Framework Extensions** is the clear winner — faster, better supported, and built for long-term reliability.

## Conclusion

At the end of the day, bulk inserting in Entity Framework comes down to two things: **performance** and **simplicity**.

You can try to optimize `SaveChanges()`, use provider APIs, or test open-source forks — but each of those paths comes with trade-offs: more code, more maintenance, and more risk.

If your goal is to **insert millions of rows quickly**, without rewriting your logic or managing database-specific quirks, there’s really one tool built for that job — **[Entity Framework Extensions](https://entityframework-extensions.net/bulk-insert)**.

It’s not just faster — it’s smarter:

-   Uses the **fastest provider APIs** like `SqlBulkCopy` under the hood

-   Handles **identity propagation**, **relationships**, and **complex mappings** automatically
-   Works with **EF6 and EF Core**, across **all major databases**

-   Backed by **monthly updates** and **professional support** since **2014**

You keep your existing code — just add “Bulk”. That’s all it takes to go from waiting minutes to finishing in seconds.

So if you care about **speed, reliability, and simplicity**, choose **Entity Framework Extensions** — and stop wasting time waiting on inserts.

---
Source: [🚀 4 Best Ways to Do Bulk Inserts in Entity Framework (Free & Paid)](https://www.entityframeworktutorial.net/efcore/4-best-ways-to-do-bulk-inserts-in-entity-framework.aspx)