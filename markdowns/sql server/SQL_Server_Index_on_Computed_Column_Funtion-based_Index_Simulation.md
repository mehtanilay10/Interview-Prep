# SQL Server Index on Computed Column: Funtion-based Index Simulation

[Skip to content](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-indexes-on-computed-columns/#primary)

**Summary**: in this tutorial, you will learn how to simulate function-based indexes in SQL Server using indexes on computed columns.

## Introduction to indexes on computed columns [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-indexes-on-computed-columns/#introduction-to-indexes-on-computed-columns "Anchor for Introduction to indexes on computed columns")

See the following `sales.customers` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/).

![customers](https://www.sqlservertutorial.net/wp-content/uploads/customers.png)

This query finds the customer whose local part of the email address is `'garry.espinoza'`;

```
SELECT    
    first_name,
    last_name,
    email
FROM    
    sales.customers
WHERE 
    SUBSTRING(email, 0, 
        CHARINDEX('@', email, 0)
    ) = 'garry.espinoza';
```

Here is the estimated execution plan of the query:

![SQL Server Index on computed column - clustered index scan](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Index-on-computed-column-clustered-index-scan.png)

As clearly shown in the output, the query optimizer needs to scan the whole clustered index for locating the customer, which is not efficient.

If you have worked with Oracle or PostgreSQL, you may know that Oracle supports [function-based indexes](http://www.oracletutorial.com/oracle-index/oracle-function-based-index/) and PostgreSQL has [expression-based indexes](http://www.postgresqltutorial.com/postgresql-indexes/postgresql-index-on-expression/). These kinds of indexes allow you to index the result of a function or an expression which will improve the performance of queries whose `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause contains the function and expression.

In SQL Server, you can use an index on a computed column to achieve the similar effect of a function-based index:

-   First, create a computed column based on the expression on the `WHERE` clause.

-   Second, create a nonclustered index for the computed column.

For example, to search for customers based on local parts of their email addresses, you use these steps:

First, add a new computed column to the `sales.customers` table:

```
ALTER TABLE sales.customers
ADD 
    email_local_part AS 
        SUBSTRING(email, 
            0, 
            CHARINDEX('@', email, 0)
        );
```

Then, [create an index](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-create-index/) on the `email_local_part` column:

```
CREATE INDEX ix_cust_email_local_part
ON sales.customers(email_local_part);
```

Now, you can use the `email_local_part` column instead of the expression in the `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause to find customers by the local part of the email address:

```
SELECT    
    first_name,
    last_name,
    email
FROM    
    sales.customers
WHERE 
    email_local_part = 'garry.espinoza';
```

The query optimizer uses the index seek operation on the `ix_cust_email_local_part` index as shown in the following picture:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Index-on-computed-column-index-seek.png)

## Requirements for indexes on computed columns [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-indexes-on-computed-columns/#requirements-for-indexes-on-computed-columns "Anchor for Requirements for indexes on computed columns")

To [create an index](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-create-index/) on a computed column, the following requirements must be met:

-   The functions involved in the computed column expression must have the same owner as the table.

-   The computed column expression must be deterministic. It means that expression always returns the same result for a given set of inputs.
-   The computed column must be precise, which means its expression must not contain any `FLOAT` or `REAL` data types.

-   The result of the computed column expression cannot evaluate to the `TEXT`, `NTEXT`, or `IMAGE` data types.
-   The `ANSI_NULLS` option must be set to `ON` when the computed column is defined using the `CREATE TABLE` or `ALTER TABLE` statement. In addition, the options `ANSI_PADDING`, `ANSI_WARNINGS`, `ARITHABORT`, `QUOTED_IDENTIFIER`, and `CONCAT_NULL_YIELDS_NULL` must also be set to ON, and `NUMERIC_ROUNDABORT` must be set to `OFF`.

In this tutorial, you have learned how to use the SQL Server indexes on computed columns to improve the speed of queries that involved expressions.

Was this tutorial helpful?

---
Source: [SQL Server Index on Computed Column: Funtion-based Index Simulation](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-indexes-on-computed-columns/)