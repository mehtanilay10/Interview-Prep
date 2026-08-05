# SQL Server SELECT INTO Statement Explained By Examples

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-into/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `SELECT INTO` statement to copy a table.

## Introduction to SQL Server SELECT INTO statement [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-into/#introduction-to-sql-server-select-into-statement "Anchor for Introduction to SQL Server <code>SELECT INTO</code> statement")

The `SELECT INTO` statement [creates a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) and [inserts rows](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) from the query into it.

The following `SELECT INTO` statement creates the `destination` table and copies rows, which satisfy the `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` condition, from the `source` table to the `destination` table:

```
SELECT 
    select_list
INTO 
    destination
FROM 
    source
[WHERE condition]
```

If you want to copy the partial data from the `source` table, you use the `WHERE` clause to specify which rows to copy. Similarly, you can specify which columns from the the `source` table to copy to the `destination` table by specifying them in the select list.

Note that `SELECT INTO` statement does not copy constraints such as [primary key](https://www.sqlservertutorial.net/sql-server-basics/sql-server-primary-key/) and indexes from the `source` table to the `destination` table.

Let’s take some examples of using the `SELECT INTO` statement.

### A) Using SQL Server SELECT INTO to copy table within the same database example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-into/#a-using-sql-server-select-into-to-copy-table-within-the-same-database-example "Anchor for A) Using SQL Server <code>SELECT INTO</code> to copy table within the same database example")

First, create a new schema for storing the new table.

```
CREATE SCHEMA marketing;
GO
```

Second, create the `marketing.customers` table like the `sales.customers` table and copy all rows from the `sales.customers` table to the `marketing.customers` table:

```
SELECT 
    *
INTO 
    marketing.customers
FROM 
    sales.customers;
```

Third, query data from the the `marketing.customers` table to verify the copy:

```
SELECT 
    *
FROM 
    marketing.customers;
```

The following picture shows the partial output:

![SQL Server SELECT INTO example 1](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-INTO-example-1.png)

### B) Using SQL Server SELECT INTO statement to copy table across databases [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-into/#b-using-sql-server-select-into-statement-to-copy-table-across-databases "Anchor for B) Using SQL Server <code>SELECT INTO</code> statement to copy table across databases")

First, [create a new database](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-database/) named `TestDb` for testing:

```
CREATE DATABASE TestDb;
GO
```

Second, copy the `sales.customers` from the current database (`BikeStores`) to the `TestDb.dbo.customers` table. This time, we just copy the customer identification, first name, last name, and email of customers who locate in `California`:

```
SELECT    
    customer_id, 
    first_name, 
    last_name, 
    email
INTO 
    TestDb.dbo.customers
FROM    
    sales.customers
WHERE 
    state = 'CA';
```

Third, query data from the `TestDb.dbo.customers` to verify the copy:

```
SELECT 
    * 
FROM 
    TestDb.dbo.customers;
```

Here is the partial result set:

![SQL Server SELECT INTO example 2](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-INTO-example-2.png)

In this tutorial, you have learned how to use the SQL Server `SELECT INTO` statement to copy a table within the same database or across databases.

Was this tutorial helpful?

---
Source: [SQL Server SELECT INTO Statement Explained By Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-into/)