# SQL Server UNION: The Ultimate Guide

**Summary**: in this tutorial, you will learn how to use the SQL Server `UNION` to combine the results of two or more queries into a single result set.

## Introduction to SQL Server UNION operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-union/#introduction-to-sql-server-union-operator "Anchor for Introduction to SQL Server <code>UNION</code> operator")

SQL Server `UNION` is one of the set operations that allow you to combine results of two `SELECT` statements into a single result set which includes all the rows that belong to the `SELECT` statements in the union.

The following illustrates the syntax of the SQL Server `UNION`:

```
query_1
UNION
query_2
```

The following are requirements for the queries in the syntax above:

-   The number and the order of the columns must be the same in both queries.

-   The data types of the corresponding columns must be the same or compatible.

The following Venn diagram illustrates how the result set of the T1 table unions with the result set of the T2 table:

![SQL Server UNION Venn Diagram](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-UNION-Venn-Diagram-300x175.png)

### UNION vs. UNION ALL [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-union/#union-vs-union-all "Anchor for <code>UNION</code> vs. <code>UNION ALL</code>")

By default, the `UNION` operator removes all duplicate rows from the result sets. However, if you want to retain the duplicate rows, you need to specify the `ALL` keyword is explicitly as shown below:

```
query_1
UNION ALL
query_2
```

In other words, the `UNION`  operator removes the duplicate rows while the `UNION ALL` operator includes the duplicate rows in the final result set.

### UNION vs. JOIN [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-union/#union-vs-join "Anchor for <code>UNION</code> vs. <code>JOIN</code>")

The join such as `[INNER JOIN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-inner-join/)` or `[LEFT JOIN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-left-join/)` combines **columns** from two tables while the `UNION` combines **rows** from two queries.

In other words, join appends the result sets horizontally while union appends the result set vertically.

The following picture illustrates the main difference between `UNION` and `JOIN`:

![SQL Server UNION vs JOIN](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-UNION-vs-JOIN.png)

## SQL Server UNION examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-union/#sql-server-union-examples "Anchor for SQL Server <code>UNION</code> examples")

See the following `staffs` and `customers` tables from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/):

![](https://www.sqlservertutorial.net/wp-content/uploads/staffs.png)

![](https://www.sqlservertutorial.net/wp-content/uploads/customers.png)

### UNION and UNION ALL examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-union/#union-and-union-all-examples "Anchor for <code>UNION</code> and <code>UNION ALL</code> examples")

The following example combines names of staff and customers into a single list:

```
SELECT
    first_name,
    last_name
FROM
    sales.staffs
UNION
SELECT
    first_name,
    last_name
FROM
    sales.customers;
```

![SQL Server UNION example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-UNION-example.png)

It returns 1,454 rows.

The `staffs` table has 10 rows and the customers table has 1,445 rows as shown in the following queries:

```
SELECT
    COUNT (*)
FROM
    sales.staffs;
-- 10       

SELECT
    COUNT (*)
FROM
    sales.customers;
-- 1454
```

Because the result set of the union returns only 1,454 rows, it means that one duplicate row was removed.

To include the duplicate row, you use the `UNION ALL` as shown in the following query:

```
SELECT
    first_name,
    last_name
FROM
    sales.staffs
UNION ALL
SELECT
    first_name,
    last_name
FROM
    sales.customers;
```

The query returns 1,455 rows as expected.

### UNION and ORDER BY example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-union/#union-and-order-by-example "Anchor for <code>UNION</code> and <code>ORDER BY</code> example")

To sort the result set returned by the `UNION` operator, you place the `[ORDER BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/)` clause in the last query as follows:

```
SELECT
    select_list
FROM
    table_1
UNION
SELECT
    select_list
FROM
    table_2
ORDER BY
    order_list;
```

For example, to sort the first names and last names of customers and staff, you use the following query:

```
SELECT
    first_name,
    last_name
FROM
    sales.staffs
UNION ALL
SELECT
    first_name,
    last_name
FROM
    sales.customers
ORDER BY
    first_name,
    last_name;
```

![SQL Server UNION ALL example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-UNION-ALL-example.png)

In this tutorial, you have learned how to use the SQL Server `UNION` to combine rows from multiple queries into a single result set.

Was this tutorial helpful?

---
Source: [SQL Server UNION: The Ultimate Guide](https://www.sqlservertutorial.net/sql-server-basics/sql-server-union/)