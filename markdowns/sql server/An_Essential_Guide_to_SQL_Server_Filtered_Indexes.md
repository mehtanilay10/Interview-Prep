# An Essential Guide to SQL Server Filtered Indexes

[Skip to content](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-filtered-indexes/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server filtered indexes to create optimized non-clustered indexes for tables.

## Introduction to SQL Server filtered indexes [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-filtered-indexes/#introduction-to-sql-server-filtered-indexes "Anchor for Introduction to SQL Server filtered indexes")

A [nonclustered index](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-create-index/), when used properly, can greatly improve the performance of queries. However, the benefits of nonclustered indexes come at costs: storage and maintenance.

-   First, it takes additional storage to store the copy of data of the index key columns.

-   Second, when you [insert](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/), [update](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/), or [delete](https://www.sqlservertutorial.net/sql-server-basics/sql-server-delete/) rows from the table, SQL Server needs to update the associated non-clustered index.

It would be inefficient if applications just query a portion of rows of a table. This is why the filtered indexes come into play.

A filtered index is a nonclustered index with a predicate that allows you to specify which rows should be added to the index.

The following syntax illustrates how to create a filtered index:

```
CREATE INDEX index_name
ON table_name(column_list)
WHERE predicate;
```

In this syntax:

-   First, specify the name of the filtered index after the `[CREATE INDEX](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-create-index/)` clause.

-   Second, list the table name with a list of key columns that will be included in the index.
-   Third, use a `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause with a predicate to specify which rows of the table should be included in the index.

## SQL Server filtered index example [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-filtered-indexes/#sql-server-filtered-index-example "Anchor for SQL Server filtered index example")

We will use the `sales.customers` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) for the demonstration:

![customers](https://www.sqlservertutorial.net/wp-content/uploads/customers.png)

The `sales.customers` table has the `phone` column which contains many `NULL` values:

```
SELECT 
    SUM(CASE
            WHEN phone IS NULL
            THEN 1
            ELSE 0
        END) AS [Has Phone], 
    SUM(CASE
            WHEN phone IS NULL
            THEN 0
            ELSE 1
        END) AS [No Phone]
FROM 
    sales.customers;
```

```
Has Phone   No Phone
----------- -----------
1267        178

(1 row affected)
```

This `phone` column is a good candidate for the filtered index.

This statement creates a filtered index for the `phone` column of the `sales.customers` table:

```
CREATE INDEX ix_cust_phone
ON sales.customers(phone)
WHERE phone IS NOT NULL;
```

The following query finds the customer whose phone number is `(281) 363-3309`:

```
SELECT    
    first_name,
    last_name, 
    phone
FROM    
    sales.customers
WHERE phone = '(281) 363-3309';
```

Here is the estimated execution plan:

![SQL Server Filtered Index example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Filtered-Index-example.png)

The query optimizer can leverage the filtered index `ix_cust_phone` for searching.

Note that to improve the key lookup, you can use an [index with included columns](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-indexes-with-included-columns/), which includes both `first_name` and `last_name` columns in the index:

```
CREATE INDEX ix_cust_phone
ON sales.customers(phone)
INCLUDE (first_name, last_name)
WHERE phone IS NOT NULL;
```

## Benefits of filtered indexes [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-filtered-indexes/#benefits-of-filtered-indexes "Anchor for Benefits of filtered indexes")

As mentioned earlier, filtered indexes can help you save spaces especially when the index key columns are sparse. Sparse columns are the ones that have many NULL values.

In addition, filtered indexes reduce the maintenance cost because only a portion of data rows, not all, needs to be updated when the data in the associated table changes.

In this tutorial, you have learned how to use the SQL Server filtered indexes to create optimized nonclustered indexes for tables.

Was this tutorial helpful?

---
Source: [An Essential Guide to SQL Server Filtered Indexes](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-filtered-indexes/)