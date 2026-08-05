# An Essential Guide to SQL Server EXCEPT By Examples

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-except/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `EXCEPT` operator to subtract a result set of a query from another result set of another query.

## Introduction to SQL Server EXCEPT operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-except/#introduction-to-sql-server-except-operator "Anchor for Introduction to SQL Server <code>EXCEPT</code> operator")

The SQL Server `EXCEPT` compares the result sets of two queries and returns the [distinct](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-distinct/) rows from the first query that are not output by the second query. In other words, the `EXCEPT` subtracts the result set of a query from another.

The following shows the syntax of the SQL Server `EXCEPT`:

```
query_1
EXCEPT
query_2
```

The following are the rules for combining the result sets of two queries in the above syntax:

-   The number and order of columns must be the same in both queries.

-   The [data types](https://www.sqlservertutorial.net/sql-server-basics/sql-server-data-types/) of the corresponding columns must be the same or compatible.

The following picture shows the `EXCEPT` operation of the two result sets T1 and T2:

![SQL Server EXCEPT illustration](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-EXCEPT-illustration.png)

In this illustration:

-   T1 result set includes 1, 2, and 3.

-   T2 result set includes 2, 3, and 4.

The `except` of the T1 and T2 returns 1 which is the distinct row from the T1 result set that does not appear in the T2 result set.

## SQL Server EXCEPT operator example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-except/#sql-server-except-operator-example "Anchor for SQL Server <code>EXCEPT</code> operator example")

See the following `products` and `order_items` tables from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/):

![](https://www.sqlservertutorial.net/wp-content/uploads/products-order_items.png)

### A) Simple EXCEPT example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-except/#a-simple-except-example "Anchor for A) Simple <code>EXCEPT</code> example")

The following example uses the `EXCEPT` operator to find the products that have no sales:

```
SELECT
    product_id
FROM
    production.products
EXCEPT
SELECT
    product_id
FROM
    sales.order_items;
```

![SQL Server EXCEPT example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-EXCEPT-example.png)

In this example, the first query returns all the products. The second query returns the products that have sales. Therefore, the result set includes only the products that have no sales.

### B) EXCEPT with ORDER BY example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-except/#b-except-with-order-by-example "Anchor for B) <code>EXCEPT</code> with <code>ORDER BY</code> example")

To sort the result set created by the `EXCEPT` operator, you add the `[ORDER BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/)` clause in the last query. For example, the following example finds the products that had no sales and sorts the products by their id in ascending order:

```
SELECT
    product_id
FROM
    production.products
EXCEPT
SELECT
    product_id
FROM
    sales.order_items
ORDER BY 
	product_id;
```

![SQL Server EXCEPT with ORDER BY example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-EXCEPT-with-ORDER-BY-example.png)

In this tutorial, you have learned how to use the SQL Server `EXCEPT` to combine result sets of two queries.

Was this tutorial helpful?

---
Source: [An Essential Guide to SQL Server EXCEPT By Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-except/)