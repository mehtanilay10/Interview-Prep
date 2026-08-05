# SQL Server Cross Join

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cross-join/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `CROSS JOIN` to join two or more tables.

## Introduction to the SQL Server CROSS JOIN clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cross-join/#introduction-to-the-sql-server-cross-join-clause "Anchor for Introduction to the SQL Server CROSS JOIN clause")

A cross join allows you to combine rows from the first table with every row of the second table. In other words, it returns the Cartesian product of two tables.

Here’s the basic syntax for a cross join:

```
SELECT
  select_list
FROM
  T1
CROSS JOIN T2;
```

In this syntax:

-   `T1` and `T2` are the tables that you want to perform a cross join.

Unlike other join types such as `[INNER JOIN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-inner-join/)` or `[LEFT JOIN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-left-join/)`, the cross join does not require a join condition.

If `T1` table has `n` rows and `T2` table has `m` rows, the cross join will create a result set with `nxm` rows.

For example, if both tables `T1` and `T2` have `1000` rows, the cross join will return a result set with `1,000,000` rows.

Because a cross join may create a large number of rows in the result set, you should use it carefully to avoid performance issues.

### SQL Server Cross Join illustration [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cross-join/#sql-server-cross-join-illustration "Anchor for SQL Server Cross Join illustration")

Suppose the T1 table contains three rows 1, 2, and 3 and the T2 table contains three rows A, B, and C.

The `CROSS JOIN` combines each row from the first table (T1) with every row in the second table (T2), creating a new row for each combination. It repeats this process for each subsequent row in the first table (T1) and so on.

![SQL Server CROSS JOIN example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CROSS-JOIN-example.png)

In this illustration, the `CROSS JOIN` creates a total of nine rows.

## SQL Server CROSS JOIN examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cross-join/#sql-server-cross-join-examples "Anchor for SQL Server CROSS JOIN examples")

The following statement returns the combinations of all products and stores:

```
SELECT
    product_id,
    product_name,
    store_id,
    0 AS quantity
FROM
    production.products
CROSS JOIN sales.stores
ORDER BY
    product_name,
    store_id;
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CROSS-JOIN-stocktaking-example.png)

The result set can be used for the stocktaking procedure at the month-end or year-end closing.

The following statement finds the products that have no sales across the stores:

```
SELECT
    s.store_id,
    p.product_id,
    ISNULL(sales, 0) sales
FROM
    sales.stores s
CROSS JOIN production.products p
LEFT JOIN (
    SELECT
        s.store_id,
        p.product_id,
        SUM (quantity * i.list_price) sales
    FROM
        sales.orders o
    INNER JOIN sales.order_items i ON i.order_id = o.order_id
    INNER JOIN sales.stores s ON s.store_id = o.store_id
    INNER JOIN production.products p ON p.product_id = i.product_id
    GROUP BY
        s.store_id,
        p.product_id
) c ON c.store_id = s.store_id
AND c.product_id = p.product_id
WHERE
    sales IS NULL
ORDER BY
    product_id,
    store_id;
```

The following picture shows the partial result set:

![SQL Server Cross Join StockTaking example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CROSS-JOIN-report-example.png)

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cross-join/#summary "Anchor for Summary")

-   Use the `CROSS JOIN` to combine rows from the first table with every row from the second table.

Was this tutorial helpful?

---
Source: [SQL Server Cross Join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cross-join/)