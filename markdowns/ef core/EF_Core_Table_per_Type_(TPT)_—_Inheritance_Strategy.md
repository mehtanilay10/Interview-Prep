# EF Core Table per Type (TPT) — Inheritance Strategy

Entity Framework Core supports three inheritance mapping strategies:

-   [Table per Hierarchy (TPH)](https://www.entityframeworktutorial.net/efcore/inheritance-tph.aspx)

-   **Table per Type (TPT)**
-   [Table per Concrete Type (TPC)](https://www.entityframeworktutorial.net/efcore/inheritance-tpc.aspx)

**Table per Type (TPT)** maps each type in the inheritance hierarchy to its **own database table**.

The base table stores shared properties, and each derived table stores only properties specific to that type.  
Derived tables are linked to the base table using a shared key (FK/PK relationship).

## Example Hierarchy

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

With TPT, EF stores shared columns in the `Animal` table, and type-specific columns in `Cat` and `Dog` tables.

## What the Tables Look Like

In TPT, you typically get:

-   A **base table** (e.g., `Animal`) with shared columns like `Id`, `Name`

-   One **derived table per derived type** (e.g., `Cat`, `Dog`)
-   A key relationship so each derived row matches exactly one base row

When you query a derived type, EF usually needs `JOIN`s to reconstruct the full entity.

## TL;DR — EF Core TPT

-   **Multiple related tables** (base + one per derived type)

-   Derived tables reference the base table (shared key)
-   Queries often require **JOIN** operations

-   Produces a **fully normalized schema**
-   Can become slower as the hierarchy grows or when polymorphic queries are common

## When TPT Is a Good Fit

TPT is commonly selected when:

-   You want a **normalized** schema

-   You prefer clear separation between base and derived data
-   You don’t mind `JOIN`s in exchange for schema clarity

## When to Avoid TPT

TPT may be a poor fit when:

-   Query performance is a priority and you want to avoid `JOIN`s

-   You run many polymorphic queries (base type queries across all derived types)
-   The hierarchy is large and queries become `JOIN`\-heavy

## See Also

-   [Table per Hierarchy (TPH)](https://www.entityframeworktutorial.net/efcore/inheritance-tph.aspx)

-   [Table per Concrete Type (TPC)](https://www.entityframeworktutorial.net/efcore/inheritance-tpc.aspx)

## More (EF Core)

If you want a deeper EF Core article about TPT (with more details and examples), see:

-   [https://www.learnentityframeworkcore.com/inheritance](https://www.learnentityframeworkcore.com/inheritance)

-   [https://www.learnentityframeworkcore.com/inheritance/table-per-type](https://www.learnentityframeworkcore.com/inheritance/table-per-type)

---
Source: [EF Core Table per Type (TPT) — Inheritance Strategy](https://www.entityframeworktutorial.net/efcore/inheritance-tpt.aspx)