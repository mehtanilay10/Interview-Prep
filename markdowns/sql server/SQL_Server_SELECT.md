# SQL Server SELECT

**Summary**: This tutorial introduces you to the basics of the SQL Server `SELECT` statement, focusing on how to retrieve data from a single table.

## Basic SQL Server SELECT statement [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/#basic-sql-server-select-statement "Anchor for Basic SQL Server SELECT statement")

In SQL Server, tables are objects that store all the data in a database. They organize data in a row-and-column format, similar to a spreadsheet. Each row represents a unique record in a table, and each column represents a field in that record.

For example, the following `customers` table contains customer data such as customer ID, first name, last name, phone, email, and address:

![Customers table](https://www.sqlservertutorial.net/wp-content/uploads/sql-server-select-customers-table.png)

SQL Server uses *schemas* to logically group tables and other database objects. For example, our [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) has two schemas: `sales` and `production`.

The `sales` schema includes all the sales-related tables, while the `production` schema groups all the production-related tables.

To retrieve data from a table, you use the `SELECT` statement with the following syntax:

```
SELECT
    select_list
FROM
    schema_name.table_name;
```

In this syntax:

-   First, specify a list of comma-separated columns from which you want to query data in the `SELECT` clause.

-   Second, specify the table name and its schema in the `FROM` clause.

When processing the `SELECT` statement, SQL Server first processes the `FROM` clause, followed by the `SELECT` clause, even though the `SELECT` clause appears before the `FROM` clause:

![SQL Server SELECT - clause order evaluation](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-clause-order-evaluation.png)

## SQL Server SELECT statement examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/#sql-server-select-statement-examples "Anchor for SQL Server SELECT statement examples")

Let’s use the `customers` table in the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) for the demonstration.

![](https://www.sqlservertutorial.net/wp-content/uploads/customers.png)

### 1) Basic SQL Server SELECT statement example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/#1-basic-sql-server-select-statement-example "Anchor for 1) Basic SQL Server SELECT statement example")

The following query uses a `SELECT` statement to retrieve the first and last names of all customers:

```
SELECT
    first_name,
    last_name
FROM
    sales.customers;
```

Here is the result:

![sql server select - some columns](https://www.sqlservertutorial.net/wp-content/uploads/sql-server-select-some-columns.png)

The result of a query is often called a **result set**.

The following statement uses the `SELECT` statement to retrieve the first name, last name, and email of all customers:

```
SELECT
    first_name,
    last_name,
    email
FROM
    sales.customers;
```

Output:

![sql server select - select three columns](https://www.sqlservertutorial.net/wp-content/uploads/sql-server-select-select-three-columns.png)

### 2) Using the SQL Server SELECT to retrieve all columns of a table [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/#2-using-the-sql-server-select-to-retrieve-all-columns-of-a-table "Anchor for 2) Using the SQL Server SELECT to retrieve all columns of a table")

To retrieve data from all table columns, you can specify all the columns in the `SELECT` list. Alternatively, you can also use `SELECT *` as a shorthand to select all columns:

```
SELECT * FROM sales.customers;
```

![sql server select - select all columns](https://www.sqlservertutorial.net/wp-content/uploads/sql-server-select-select-all-columns.png)

Using the `SELECT *` is useful for examining the table that you are not familiar with and it is particularly helpful for ad-hoc queries.

However, you should not use the `SELECT *` in production code for the following main reasons:

-   First, using `SELECT *` often retrieves more data than your application needs. This unnecessary data takes more time to transfer from the database server to the application, slowing down the application.

-   Second, if new columns are added to the table, `SELECT *` will retrieve all columns, including the new ones that your application may not expect. This could potentially cause the application to behave unexpectedly.

In the following section, we’ll briefly introduce the additional clauses of the SELECT statement:

-   [WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/) : filter rows in the result set.

-   [ORDER BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/): sort rows in the result set by one or more columns.
-   [GROUP BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/): group rows into groups.

-   [HAVING](https://www.sqlservertutorial.net/sql-server-basics/sql-server-having/): filter groups.

Please note that we’ll cover these clauses in greater detail in the upcoming tutorials.

### 3) Filtering rows using the WHERE clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/#3-filtering-rows-using-the-where-clause "Anchor for 3) Filtering rows using the WHERE clause")

To filter rows based on one or more conditions, you use a `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause.

For example, the following `SELECT` statement uses a `WHERE` clause to find customers located in `California`:

```
SELECT
    *
FROM
    sales.customers
WHERE
    state = 'CA';
```

![sql server select - where clause](https://www.sqlservertutorial.net/wp-content/uploads/sql-server-select-where-clause.png)

If the `SELECT` statement includes both [WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/) and `FROM` clauses, SQL Server processes them in the following sequence: `FROM`, `WHERE`, and `SELECT`.

![SQL Server SELECT - from where select](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-from-where-select.png)

### 4) Sorting rows using the ORDER BY clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/#4-sorting-rows-using-the-order-by-clause "Anchor for 4) Sorting rows using the ORDER BY clause")

To sort rows in a result set based, you use the `[ORDER BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/)` clause. For example, the following query uses the `ORDER BY` clause to sort customers by their first names in ascending order.

```
SELECT
    *
FROM
    sales.customers
WHERE
    state = 'CA'
ORDER BY
    first_name;
```

Output:

![sql server select - order by clause](https://www.sqlservertutorial.net/wp-content/uploads/sql-server-select-order-by-clause.png)

When the `SELECT` statement includes the `FROM`, `WHERE`, and `ORDER BY` clause, SQL Server processes them in the following order: `FROM`, `WHERE`, `SELECT`, and `ORDER BY`:

![SQL Server SELECT - from where select order by](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-from-where-select-order-by.png)

### 5) Grouping rows into groups [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/#5-grouping-rows-into-groups "Anchor for 5) Grouping rows into groups")

To group rows into groups, you use the `[GROUP BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/)` clause.

For example, the following statement returns all the cities of customers located in California and the number of customers in each city.

```
SELECT
    city,
    COUNT (*)
FROM
    sales.customers
WHERE
    state = 'CA'
GROUP BY
    city
ORDER BY
    city;
```

![sql server select - group by clause](https://www.sqlservertutorial.net/wp-content/uploads/sql-server-select-group-by-clause.png)

In this case, SQL Server processes the clauses in the following order: `FROM`, `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)`, `[GROUP BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/)`, `SELECT`, and `[ORDER BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/)`.

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-from-where-group-by-select-order-by.png)

### 6) Filtering groups using the HAVING clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/#6-filtering-groups-using-the-having-clause "Anchor for 6) Filtering groups using the HAVING clause")

To filter groups based on one or more conditions, you use the `[HAVING](https://www.sqlservertutorial.net/sql-server-basics/sql-server-having/)` clause.

For example, the following statement uses the `HAVING` clause to return the city in California, which has more than ten customers:

```
SELECT
    city,
    COUNT (*)
FROM
    sales.customers
WHERE
    state = 'CA'
GROUP BY
    city
HAVING
    COUNT (*) > 10
ORDER BY
    city;
```

![sql server select - having clause](https://www.sqlservertutorial.net/wp-content/uploads/sql-server-select-having-clause.png)

Notice that the `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause filters rows while the `HAVING` clause filter groups.

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/#summary "Anchor for Summary")

-   Use the SQL Server `SELECT` statement to retrieve data from a table.

Was this tutorial helpful?

---
Source: [SQL Server SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)