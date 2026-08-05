# EF Core Table per Concrete Type (TPC) — Inheritance Strategy

Entity Framework Core supports three inheritance mapping strategies:

-   [Table per Hierarchy (TPH)](https://www.entityframeworktutorial.net/efcore/inheritance-tph.aspx)

-   [Table per Type (TPT)](https://www.entityframeworktutorial.net/efcore/inheritance-tpt.aspx)
-   **Table per Concrete Type (TPC)**

**Table per Concrete Type (TPC)** maps each concrete (non-abstract) type to its **own table**.

Each concrete table includes both the base properties and the properties specific to that type.  
There is **no shared base table**, which means base columns are duplicated across tables.

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

With TPC, EF stores `Cat` rows in the `Cat` table and `Dog` rows in the `Dog` table. Both tables include shared columns like `Id` and `Name`.

## What the Tables Look Like

In TPC, you typically get:

-   One table per **concrete type** (e.g., `Cat`, `Dog`)

-   Each table repeats the base columns (e.g., `Id`, `Name`)
-   No discriminator column

-   No base table

Polymorphic queries (querying the base type) are commonly translated using `UNION ALL` across the concrete tables.

## TL;DR — EF Core TPC

-   **Separate tables** for each concrete type

-   **No base table** and **no discriminator**
-   Base columns are **duplicated** in every concrete table

-   Polymorphic queries often use **`UNION ALL`**
-   Can be a good fit when avoiding `JOIN`s matters more than duplication

## When TPC Is a Good Fit

TPC can work well when:

-   You want to avoid `JOIN`s and prefer independent tables

-   Polymorphic queries are rare (you mostly query concrete types)
-   Duplicating base columns is acceptable for your schema

## When to Avoid TPC

TPC may be a poor fit when:

-   You need a strict normalized design (duplication is undesirable)

-   Polymorphic queries are frequent and `UNION ALL` becomes expensive
-   You rely heavily on shared base-type reporting across all derived types

## See Also

-   [Table per Hierarchy (TPH)](https://www.entityframeworktutorial.net/efcore/inheritance-tph.aspx)

-   [Table per Type (TPT)](https://www.entityframeworktutorial.net/efcore/inheritance-tpt.aspx)

## More (EF Core)

If you want a deeper EF Core article about TPC (with more details and examples), see:

-   [https://www.learnentityframeworkcore.com/inheritance](https://www.learnentityframeworkcore.com/inheritance)

-   [https://www.learnentityframeworkcore.com/inheritance/table-per-concrete](https://www.learnentityframeworkcore.com/inheritance/table-per-concrete)

---
Source: [EF Core Table per Concrete Type (TPC) — Inheritance Strategy](https://www.entityframeworktutorial.net/efcore/inheritance-tpc.aspx)