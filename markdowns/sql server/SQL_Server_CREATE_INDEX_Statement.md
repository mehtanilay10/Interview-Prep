# SQL Server CREATE INDEX Statement

**Summary**: in this tutorial, you will learn how to use the SQL Server `CREATE INDEX` statement to create nonclustered indexes for tables.

## Introduction to SQL Server non-clustered indexes [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-create-index/#introduction-to-sql-server-non-clustered-indexes "Anchor for Introduction to SQL Server non-clustered indexes")

A nonclustered index is a data structure that improves the speed of data retrieval from tables. Unlike a [clustered index](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-clustered-indexes/), a nonclustered index sorts and stores data separately from the data rows in the table. It is a copy of selected columns of data from a table with the links to the associated table.

Like a clustered index, a nonclustered index uses the B-tree structure to organize its data.

A table may have one or more nonclustered indexes and each non-clustered index may include one or more columns in a table.

The following picture illustrates the structure of a non-clustered index:

![SQL Server nonclustered index](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-nonclustered-index.png)

Besides storing the index key values, the leaf nodes also store row pointers to the data rows that contain the key values. These row pointers are also known as row locators.

If the underlying table is a clustered table, the row pointer is the clustered index key. In case the underlying table is a heap, the row pointer points to the row of the table.

To create a non-clustered index, you use the `CREATE INDEX` statement:

```
CREATE [NONCLUSTERED] INDEX index_name
ON table_name(column_list);
```

In this syntax:

-   First, specify the name of the index after the `CREATE NONCLUSTERED INDEX` clause. Note that the `NONCLUSTERED` keyword is optional.

-   Second, specify the table name on which you want to create the index and a list of columns of that table as the index key columns.

## SQL Server CREATE INDEX statement examples [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-create-index/#sql-server-create-index-statement-examples "Anchor for SQL Server CREATE INDEX statement examples")

We will use the `sales.customers` from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) for the demonstration.

![customers](https://www.sqlservertutorial.net/wp-content/uploads/customers.png)

The `sales.customers` table is a clustered table because it has a [primary key](https://www.sqlservertutorial.net/sql-server-basics/sql-server-primary-key/) `customer_id`.

### 1) Using the CREATE INDEX statement to create a nonclustered index for one column example [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-create-index/#1-using-the-create-index-statement-to-create-a-nonclustered-index-for-one-column-example "Anchor for 1) Using the CREATE INDEX statement to create a nonclustered index for one column example")

This statement finds customers who are located in `Atwater`:

```
SELECT 
    customer_id, 
    city
FROM 
    sales.customers
WHERE 
    city = 'Atwater';
```

If you display the estimated execution plan, you will see that the query optimizer scans the clustered index to find the row. This is because the `sales.customers` table does not have an index for the `city` column.

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CREATE-INDEX-on-one-column-index-scan.png)

To improve the speed of this query, you can create a new index named `ix_customers_city` for the `city` column:

```
CREATE INDEX ix_customers_city
ON sales.customers(city);
```

Now, if you display the estimated execution plan of the above query again, you will find that the query optimizer uses the nonclustered index `ix_customers_city`:

![SQL Server CREATE INDEX one column index seek](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CREATE-INDEX-one-column-index-seek.png)

### 2) Using the CREATE INDEX statement to create a nonclustered index for multiple columns [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-create-index/#2-using-the-create-index-statement-to-create-a-nonclustered-index-for-multiple-columns "Anchor for 2) Using the CREATE INDEX statement to create a nonclustered index for multiple columns")

The following statement finds the customer whose last name is `Berg` and the first name is `Monika`:

```
SELECT 
    customer_id, 
    first_name, 
    last_name
FROM 
    sales.customers
WHERE 
    last_name = 'Berg' AND 
    first_name = 'Monika';
```

![SQL Server CREATE INDEX on multiple columns index scan](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CREATE-INDEX-on-multiple-columns-index-scan.png)

The query optimizer scans the clustered index to locate the customer.

To speed up the retrieval of data, you can create a nonclustered index that includes both `last_name` and `first_name` columns:

```
CREATE INDEX ix_customers_name 
ON sales.customers(last_name, first_name);
```

Now, the query optimizer uses the index `ix_customers_name` to find the customer.

```
SELECT 
    customer_id, 
    first_name, 
    last_name
FROM 
    sales.customers
WHERE 
    last_name = 'Berg' AND 
    first_name = 'Monika';
```

![SQL Server CREATE INDEX on multiple columns index seek](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CREATE-INDEX-on-multiple-columns-index-seek.png)

When you create a nonclustered index that consists of multiple columns, the order of the columns in the index is very important. You should place the columns that you often use to query data at the beginning of the column list.

For example, the following statement finds customers whose last name is `Albert`. Because the `last_name` is the leftmost column in the index, the query optimizer can leverage the index and use the index seek method for searching:

```
SELECT 
    customer_id, 
    first_name, 
    last_name
FROM 
    sales.customers
WHERE 
    last_name = 'Albert';
```

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CREATE-INDEX-leftmost-column-query.png)

This statement finds customers whose first name is `Adam`. It also leverages the `ix_customer_name` index. But it needs to scan the whole index for searching, which is slower than index seek.

```
SELECT 
    customer_id, 
    first_name, 
    last_name
FROM 
    sales.customers
WHERE 
    first_name = 'Adam';
```

![SQL Server CREATE INDEX multiple columns not leftmost column index scan](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CREATE-INDEX-multiple-columns-not-leftmost-column-index-scan.png)

Therefore, it is a good practice to place the columns that you often use to query data at the beginning of the column list of the index.

## Summary [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-create-index/#summary "Anchor for Summary")

-   A non-clustered index copies the table data and stores it in a separate data structure (B-tree).

-   A table can have multiple non-clustered indexes.
-   Use the `CREATE INDEX` statement to create a non-clustered index to enhance the query speed.

Was this tutorial helpful?

---
Source: [SQL Server CREATE INDEX Statement](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-create-index/)