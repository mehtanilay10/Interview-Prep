# SQL Server RIGHT JOIN

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-right-join/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `RIGHT JOIN` clause to query data from two tables.

## Introduction to the SQL Server RIGHT JOIN clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-right-join/#introduction-to-the-sql-server-right-join-clause "Anchor for Introduction to the SQL Server RIGHT JOIN clause")

The `RIGHT JOIN` is a clause of the `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement. The `RIGHT JOIN` clause combines data from two or more tables.

The `RIGHT JOIN` clause starts selecting data from the right table and matching it with the rows from the left table. The `RIGHT JOIN` returns a result set that includes all rows in the right table, whether or not they have matching rows from the left table.

If a row in the right table does not have any matching rows from the left table, the column of the left table in the result set will have nulls.

The following shows the syntax of the `RIGHT JOIN` clause:

```
SELECT 
    select_list
FROM 
    T1
RIGHT JOIN T2 ON join_predicate;
```

In this syntax, T1 is the left table and T2 is the right table.

Note that `RIGHT JOIN` and `RIGHT OUTER JOIN` is the same. The `OUTER` keyword is optional.

The following Venn diagram illustrates the `RIGHT JOIN` operation:

![SQL Server RIGHT JOIN illustration](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-RIGHT-JOIN-illustration.png)

We will use the `sales.order_items` and `production.products` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) for the demonstration.

![products order_items](https://www.sqlservertutorial.net/wp-content/uploads/products-order_items.png)

The following statement returns all `order_id` from the `sales.order_items` and product name from the `production.products` table:

```
SELECT
    product_name,
    order_id
FROM
    sales.order_items o
    RIGHT JOIN production.products p 
        ON o.product_id = p.product_id
ORDER BY
    order_id;
```

Here is the output:

![SQL Server RIGHT JOIN example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-RIGHT-JOIN-example.png)

The query returned all rows from the `production.products` table (right table) and rows from `sales.order_items` table (left table). If a product does not have any sales, the `order_id` column will have a null.

To get the products that do not have any sales, you add a `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause to the above query to filter out the products that have sales:

```
SELECT
    product_name,
    order_id
FROM
    sales.order_items o
    RIGHT JOIN production.products p 
        ON o.product_id = p.product_id
WHERE 
    order_id IS NULL
ORDER BY
    product_name;
```

The following picture shows the output:

![SQL Server RIGHT JOIN - rows from the right table only](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-RIGHT-JOIN-rows-from-the-right-table-only.png)

The following Venn diagram illustrates the above `RIGHT JOIN` operation:

![SQL Server RIGHT JOIN - select only rows from the right table](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-RIGHT-JOIN-select-only-rows-from-the-right-table.png)

In this tutorial, you have learned how to use the SQL Server `RIGHT JOIN` to query data from two tables.

Was this tutorial helpful?

---
Source: [SQL Server RIGHT JOIN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-right-join/)