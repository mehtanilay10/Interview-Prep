# EF Core Table per Hierarchy (TPH) — Inheritance Strategy

Entity Framework Core supports three inheritance mapping strategies:

-   **Table per Hierarchy (TPH)**

-   [Table per Type (TPT)](https://www.entityframeworktutorial.net/efcore/inheritance-tpt.aspx)
-   [Table per Concrete Type (TPC)](https://www.entityframeworktutorial.net/efcore/inheritance-tpc.aspx)

**Table per Hierarchy (TPH)** maps an inheritance hierarchy to **one single database table**.

A **discriminator column** is used to distinguish between the different derived types stored in that table.

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

With TPH, EF stores `Animal`, `Cat`, and `Dog` rows in the **same table**, and uses a discriminator value to tell which type each row represents.

## What the Table Looks Like

In TPH, a single table contains:

-   Base properties (e.g., `Id`, `Name`)

-   Derived properties (e.g., `Lives`, `IsGoodBoy`)
-   A discriminator column (e.g., `Discriminator`)

Rows that don’t use a derived property typically store `NULL` for that column.

## TL;DR — EF Core TPH

-   **One table** stores all types in the hierarchy

-   Uses a **discriminator** column to identify the derived type
-   **No JOINs** are required when querying derived types

-   Queries are often **simpler**
-   Some columns may be **nullable** (because not every derived type uses every column)

## When TPH Is a Good Fit

TPH is commonly selected when:

-   You want **simple queries**

-   You query derived entities frequently and want to avoid `JOIN`s
-   A **single-table** model is acceptable for your schema

## When to Avoid TPH

TPH may be a poor fit when:

-   You want a **fully normalized** schema

-   Many derived types create lots of **nullable columns**
-   You need strict table-level separation for reporting or constraints

## See Also

-   [Table per Type (TPT)](https://www.entityframeworktutorial.net/efcore/inheritance-tpt.aspx)

-   [Table per Concrete Type (TPC)](https://www.entityframeworktutorial.net/efcore/inheritance-tpc.aspx)

## More (EF Core)

If you want a deeper EF Core article about TPH (with more details and examples), see:

-   [https://www.learnentityframeworkcore.com/inheritance](https://www.learnentityframeworkcore.com/inheritance)

-   [https://www.learnentityframeworkcore.com/inheritance/table-per-hierarchy](https://www.learnentityframeworkcore.com/inheritance/table-per-hierarchy)

---
Source: [EF Core Table per Hierarchy (TPH) — Inheritance Strategy](https://www.entityframeworktutorial.net/efcore/inheritance-tph.aspx)