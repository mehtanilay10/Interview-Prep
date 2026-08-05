# SQL Server INTERSECT Explained By Practical Examples

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-intersect/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `INTERSECT` operator to combine result sets of two input queries and return the distinct rows that appear in both inputs.

## Introduction to SQL Server INTERSECT [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-intersect/#introduction-to-sql-server-intersect "Anchor for Introduction to SQL Server <code>INTERSECT</code>")

The SQL Server `INTERSECT` combines result sets of two or more queries and returns distinct rows that are output by both queries.

The following illustrates the syntax of the SQL Server `INTERSECT`:

```
query_1
INTERSECT
query_2
```

Similar to the `[UNION](https://www.sqlservertutorial.net/sql-server-basics/sql-server-union/)` operator, the queries in the syntax above must conform to the following rules:

-   Both queries must have the same number and order of columns.

-   The data type of the corresponding columns must be the same or compatible.

![SQL Server INTERSECT Illustration](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-INTERSECT-Illustration.png)

The following picture illustrates the `INTERSECT` operation:

In this illustration, we had two result sets T1 and T2:

-   T1 result set includes 1, 2, and 3.

-   T2 result set includes 2, 3, and 4.

The intersection of T1 and T2 result sets returns the distinct rows which are 2 and 3.

## SQL Server INTERSECT example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-intersect/#sql-server-intersect-example "Anchor for SQL Server <code>INTERSECT</code> example")

Consider the following query:

```
SELECT
    city
FROM
    sales.customers
INTERSECT
SELECT
    city
FROM
    sales.stores
ORDER BY
    city;
```

![SQL Server INTERSECT example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-INTERSECT-example.png)

The first query finds all cities of the customers and the second query finds the cities of the stores. The whole query, which uses `INTERSECT`, returns the common cities of customers and stores, which are the cities output by both input queries.

Notice that we added the `[ORDER BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/)` clause to the last query to sort the result set.

In this tutorial, you have learned how to use the SQL Server `INTERSECT`  operator to return the intersection of the result sets of two queries.

Was this tutorial helpful?

---
Source: [SQL Server INTERSECT Explained By Practical Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-intersect/)