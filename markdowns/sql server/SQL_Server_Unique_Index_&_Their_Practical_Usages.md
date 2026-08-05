# SQL Server Unique Index & Their Practical Usages

**Summary**: in this tutorial, you will learn about SQL Server unique indexes and how to use them to enforce the uniqueness of values in one or more columns of a table.

## SQL Server unique index overview [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-unique-index/#sql-server-unique-index-overview "Anchor for SQL Server unique index overview")

A unique index ensures the index key columns do not contain any duplicate values.

A unique index may consist of one or many columns. If a unique index has one column, the values in this column will be unique. In case the unique index has multiple columns, the combination of values in these columns is unique.

Any attempt to [insert](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) or [update](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/) data into the unique index key columns that cause the duplicate will result in an error.

A unique index can be [clustered](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-clustered-indexes/) or [non-clustered](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-create-index/).

To create a unique index, you use the `CREATE UNIQUE INDEX` statement as follows:

```
CREATE UNIQUE INDEX index_name
ON table_name(column_list);
```

In this syntax:

-   First, specify the name of the unique index after the `CREATE UNIQUE INDEX` keywords.

-   Second, specify the name of the table to which the index is associated and a list of columns that will be included in the index.

## SQL Server unique index examples [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-unique-index/#sql-server-unique-index-examples "Anchor for SQL Server unique index examples")

Let’s take some examples of using unique indexes.

### 1) Creating a SQL Server unique index for one column example [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-unique-index/#1-creating-a-sql-server-unique-index-for-one-column-example "Anchor for 1) Creating a SQL Server unique index for one column example")

This query finds the customer with the email `'caren.stephens@msn.com'`:

```
SELECT
    customer_id, 
    email 
FROM
    sales.customers
WHERE 
    email = 'caren.stephens@msn.com';
```

![SQL Server UNIQUE Index - Clustered Index Scan](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-UNIQUE-Index-Clustered-Index-Scan.png)

The query optimizer has to scan the whole clustered index to find the row.

To speed up the retrieval of the query, you can add a non-clustered index to the `email` column.

However, with the assumption that each customer will have a unique email, you can create a unique index for the `email` column.

Because the `sales.customers` table already has data, you need to check duplicate values in the `email` column first:

```
SELECT 
    email, 
    COUNT(email)
FROM 
    sales.customers
GROUP BY 
    email
HAVING 
    COUNT(email) > 1;
```

The query returns an empty result set. It means that there are no duplicate values in the `email` column.

Therefore, you can go ahead to create a unique index for the `email` column of the `sales.customers` table:

```
CREATE UNIQUE INDEX ix_cust_email 
ON sales.customers(email);
```

From now on, the query optimizer will leverage the `ix_cust_email` index and use the `index seek` method to search for rows by email.

![SQL Server UNIQUE Index - Index Seek](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-UNIQUE-Index-Index-Seek.png)

### 2) Creating a SQL Server unique index for multiple columns [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-unique-index/#2-creating-a-sql-server-unique-index-for-multiple-columns "Anchor for 2) Creating a SQL Server unique index for multiple columns")

First, [create a table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `t1` that has two columns for the demonstration:

```
CREATE TABLE t1 (
    a INT, 
    b INT
);
```

Next, create a unique index that includes both `a` and `b` columns:

```
CREATE UNIQUE INDEX ix_uniq_ab 
ON t1(a, b);
```

Then, [insert a new row](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) into the `t1` table:

```
INSERT INTO t1(a,b) VALUES(1,1);
```

After that, insert another row into the `t1` table. Note that the value 1 is repeated in the `a` column, but the combination of values in the column `a` and `b` is not duplicate:

```
INSERT INTO t1(a,b) VALUES(1,2);
```

Finally, insert a row that already exists into the `t1` table:

```
INSERT INTO t1(a,b) VALUES(1,2);
```

SQL Server issues an error::

```
Cannot insert duplicate key row in object 'dbo.t1' with unique index 'ix_ab'. The duplicate key value is (1, 2).
```

## SQL Server unique index and NULL [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-unique-index/#sql-server-unique-index-and-null "Anchor for SQL Server unique index and NULL")

[NULL](https://www.sqlservertutorial.net/sql-server-basics/sql-server-null/) is special. It is a marker that indicates the missing information or not applicable.

NULL is not even equal to itself. However, when it comes to a unique index, SQL Server treats NULL values the same. It means that if you create a unique index on a nullable column, you can have only one NULL value in this column

The following statements [create a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `t2` and define a unique index on the `a` column:

```
CREATE TABLE t2(
    a INT
);

CREATE UNIQUE INDEX a_uniq_t2
ON t2(a);
```

This query inserts NULL into the `a` column of the `t2` table:

```
INSERT INTO t2(a) VALUES(NULL);
```

However, when executing the above query again, the SQL Server issues an error due to duplicate NULL values:

```
]Cannot insert duplicate key row in object 'dbo.t2' with unique index 'a_uniq_t2'. The duplicate key value is (<NULL>). (2601)
```

## Unique index vs. UNIQUE constraint [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-unique-index/#unique-index-vs-unique-constraint "Anchor for Unique index vs. <code>UNIQUE</code> constraint")

Both unique index and [`UNIQUE` constraint](https://www.sqlservertutorial.net/sql-server-basics/sql-server-unique-constraint/) enforces the uniqueness of values in one or many columns. SQL Server validates duplicates in the same manner for both unique index and unique constraint.

When you create a unique constraint, behind the scene, SQL Server creates a unique index associated with this constraint.

However, creating a unique constraint on columns makes the objective of the unique index clear.

In this tutorial, you have learned about the SQL Server unique index and how to create a unique index for one or many columns of a table.

Was this tutorial helpful?

---
Source: [SQL Server Unique Index & Their Practical Usages](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-unique-index/)