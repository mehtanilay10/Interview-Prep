# SQL Server Left Join

**Summary**: in this tutorial, you will learn about the SQL Server `LEFT JOIN` clause and how to query data from multiple tables.

## Introduction to SQL Server LEFT JOIN clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-left-join/#introduction-to-sql-server-left-join-clause "Anchor for Introduction to SQL Server LEFT JOIN clause")

The `LEFT JOIN` is a clause of the SELECT statement. The `LEFT JOIN` clause allows you to [query data](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/) from multiple tables.

The `LEFT JOIN` returns all rows from the left table and the matching rows from the right table. If no matching rows are found in the right table, `NULL` are used.

The following illustrates how to join two tables T1 and T2 using the `LEFT JOIN` clause:

```
SELECT
    select_list
FROM
    T1
LEFT JOIN T2 ON
    join_predicate;
```

In this syntax, T1 and T2 are the left and right tables, respectively.

For each row from the T1 table, the query compares it with all the rows from the T2 table. If a pair of rows causes the join predicate to evaluate to `TRUE`, the column values from these rows will be combined to form a new row which is then included in the result set.

If a row from the left table (T1) does not have any matching row from the T2 table, the query combines column values of the row from the left table with `NULL` for each column value from the right table.

In short, the `LEFT JOIN` clause returns all rows from the left table (T1) and matching rows or `NULL` values from the right table (T2).

The following illustrates the `LEFT JOIN` of two tables T1(1, 2, 3) and T2(A, B, C). The `LEFT JOIN` will match rows from the T1 table with the rows from the T2 table using patterns:

![SQL Server LEFT JOIN](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-LEFT-JOIN.png)

In this illustration, no row from the T2 table matches row 1 from the T1 table; therefore, NULL is used. Rows 2 and 3 from the T1 table match rows A and B from the T2 table, respectively.

## SQL Server LEFT JOIN example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-left-join/#sql-server-left-join-example "Anchor for SQL Server <code>LEFT JOIN</code> example")

See the following `products` and `order_items` tables:

![The order_items & products Tables](https://www.sqlservertutorial.net/wp-content/uploads/products-order_items.png)

Each sales order item includes one product. The link between the `order_items` and the `products` tables is the `product_id` column.

The following statement uses the `LEFT JOIN` clause to query data from the `products` and `order_items` tables:

```
SELECT
    product_name,
    order_id
FROM
    production.products p
LEFT JOIN sales.order_items o ON o.product_id = p.product_id
ORDER BY
    order_id;
```

![SQL Server Left Join example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Left-Join-example.png)

As you see clearly from the result set, a list of `NULL` in the `order_id` column indicates that the corresponding products have not been sold to any customer yet.

It is possible to use the `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause to limit the result set. The following query returns the products that do not appear in any sales order:

```
SELECT
    product_name,
    order_id
FROM
    production.products p
LEFT JOIN sales.order_items o ON o.product_id = p.product_id
WHERE order_id IS NULL
```

![SQL Server Left Join find unmatching rows](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Left-Join-find-unmatching-rows.png)

As always, SQL Server processes the `WHERE` clause after the `LEFT JOIN` clause.

The following example shows how to join three tables: `production.products`, `sales.orders`, and `sales.order_items` using the `LEFT JOIN` clauses:

![](https://www.sqlservertutorial.net/wp-content/uploads/orders-order_items-products.png)

```
SELECT
    p.product_name,
    o.order_id,
    i.item_id,
    o.order_date
FROM
    production.products p
	LEFT JOIN sales.order_items i
		ON i.product_id = p.product_id
	LEFT JOIN sales.orders o
		ON o.order_id = i.order_id
ORDER BY
    order_id;
```

Here is the output:

![SQL Server LEFT JOIN - join three tables](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-LEFT-JOIN-join-three-tables.png)

## SQL Server LEFT JOIN: conditions in ON vs. WHERE clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-left-join/#sql-server-left-join-conditions-in-on-vs-where-clause "Anchor for SQL Server LEFT JOIN: conditions in <code>ON</code> vs. <code>WHERE</code> clause")

The following query finds the products that belong to order id 100:

```
SELECT
    product_name,
    order_id
FROM
    production.products p
LEFT JOIN sales.order_items o 
   ON o.product_id = p.product_id
WHERE order_id = 100
ORDER BY
    order_id;
```

![SQL Server Left Join and WHERE clause](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Left-Join-and-WHERE-clause.png)

Let’s move the condition `order_id = 100` to the `ON` clause:

```
SELECT
    p.product_id,
    product_name,
    order_id
FROM
    production.products p
    LEFT JOIN sales.order_items o 
         ON o.product_id = p.product_id AND 
            o.order_id = 100
ORDER BY
    order_id DESC;
```

![SQL Server LEFT JOIN - move condition to ON clause](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-LEFT-JOIN-move-condition-to-ON-clause.png)

The query returned all products, but only the order with id 100 has the associated product’s information.

Note that for the `[INNER JOIN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-inner-join/)` clause, the condition in the `ON` clause is functionally equivalent if it is placed in the `WHERE` clause.

In this tutorial, you have learned how to use the SQL Server `LEFT JOIN` clause to retrieve data from multiple related tables.

Was this tutorial helpful?

---
Source: [SQL Server Left Join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-left-join/)