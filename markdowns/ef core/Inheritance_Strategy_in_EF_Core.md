# Inheritance Strategy in EF Core

## Inheritance Strategy in Entity Framework Core

Inheritance lets you model **“is-a”** relationships (a base class with derived classes).

In EF Core, an inheritance hierarchy can be mapped to relational tables using three strategies: **TPH**, **TPT**, and **TPC**.

-   [Table per Hierarchy (TPH)](https://www.entityframeworktutorial.net/efcore/inheritance-tph.aspx) — one table for the whole hierarchy (uses a discriminator column)

-   [Table per Type (TPT)](https://www.entityframeworktutorial.net/efcore/inheritance-tpt.aspx) — one table per type (base + derived tables)
-   [Table per Concrete Type (TPC)](https://www.entityframeworktutorial.net/efcore/inheritance-tpc.aspx) — one table per concrete type (duplicates base columns)

Consider this simple hierarchy:

```
public abstract class Animal
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class Cat : Animal
{
    public int Lives { get; set; }
}

public class Dog : Animal
{
    public bool IsGoodBoy { get; set; }
}
```

The key question is: **how should this hierarchy be represented in a relational database?** Each strategy answers that differently and comes with trade-offs.

## Quick Comparison

| Strategy | Tables | How EF queries the hierarchy | Schema style | Typical characteristics |
| --- | --- | --- | --- | --- |
| **TPH** | Single table | Filtered `SELECT` | Denormalized | Simple queries, no `JOIN` |
| **TPT** | Base + derived tables | `JOIN` | Normalized | Clear separation, more complex queries |
| **TPC** | Concrete tables only | `UNION ALL` | Denormalized per type | No base table, duplicated base columns |

## Choosing the Right Strategy

There is no “best” inheritance strategy for every project. Choose based on what matters most:

-   Prefer **simplicity and faster queries** → start with **TPH**

-   Prefer a **fully normalized schema** → consider **TPT**
-   Prefer to **avoid JOINs** and accept duplication → consider **TPC**

> Note: EF6 also support this same exact inheritance strategy.

---
Source: [Inheritance Strategy in EF Core](https://www.entityframeworktutorial.net/efcore/inheritance.aspx)