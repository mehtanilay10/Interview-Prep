# SQL Server Clustered Indexes

**Summary**: in this tutorial, you will learn about the SQL Server clustered index and how to define a clustered index for a table.

## Introduction to SQL Server clustered indexes [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-clustered-indexes/#introduction-to-sql-server-clustered-indexes "Anchor for Introduction to SQL Server clustered indexes")

The following statement [creates a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `production.parts` that consists of two columns `part_id` and `part_name`:

```
CREATE TABLE production.parts(
    part_id   INT NOT NULL, 
    part_name VARCHAR(100)
);
```

And this statement [inserts some rows](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) into the `production.parts` table:

```
INSERT INTO 
    production.parts(part_id, part_name)
VALUES
    (1,'Frame'),
    (2,'Head Tube'),
    (3,'Handlebar Grip'),
    (4,'Shock Absorber'),
    (5,'Fork');
```

The `production.parts` table does not have a [primary key](https://www.sqlservertutorial.net/sql-server-basics/sql-server-primary-key/). Therefore SQL Server stores its rows in an unordered structure called a **heap**.

When you query data from the `production.parts` table, the query optimizer needs to scan the whole table to search.

For example, the following `SELECT` statement finds the part with id 5:

```
SELECT 
    part_id, 
    part_name
FROM 
    production.parts
WHERE 
    part_id = 5;
```

If you display the estimated execution plan in SQL Server Management Studio, you’ll see how SQL Server came up with the following query plan:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Clustered-Index-Table-Scan-1.png)

Note that to display the estimated execution plan in SQL Server Management Studio, you click the **Display Estimated Execution Plan** button or select the query and press the keyboard shortcut `Ctrl+L`:

![SQL Server Display Estimated Execution Plan](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Display-Estimated-Execution-Plan.png)

Because the `production.parts` table has only five rows, the query executes very fast. However, if the table contains a large number of rows, it’ll take a lot of time and resources to search for data.

To resolve this issue, SQL Server provides a dedicated structure to speed up the retrieval of rows from a table called index.

SQL Server has two types of indexes: clustered index and non-clustered index. We will focus on the clustered index in this tutorial.

A clustered index stores data rows in a sorted structure based on its key values. Each table has only one clustered index because data rows can be only sorted in one order. A table that has a clustered index is called a clustered table.

The following picture illustrates the structure of a clustered index:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Clustered-B-Tree.png)

A clustered index organizes data using a special structured so-called [B-tree](https://en.wikipedia.org/wiki/B-tree) (or balanced tree) which enables searches, inserts, updates, and deletes in logarithmic amortized time.

In this structure, the top node of the B-tree is called the **root node**. The nodes at the bottom level are called the **leaf nodes**. Any index levels between the root and the leaf nodes are known as intermediate levels.

In the B-Tree, the root node and intermediate-level nodes contain index pages that hold index rows. The leaf nodes contain the data pages of the underlying table. The pages in each level of the index are linked using another structure called a doubly-linked list.

## SQL Server Clustered Index and Primary Key Constraint [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-clustered-indexes/#sql-server-clustered-index-and-primary-key-constraint "Anchor for SQL Server Clustered Index and Primary Key Constraint")

When you create a table with a [primary key](https://www.sqlservertutorial.net/sql-server-basics/sql-server-primary-key/), SQL Server automatically creates a corresponding clustered index that includes primary key columns.

This statement [creates a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `production.part_prices` with a primary key that includes two columns: `part_id` and `valid_from`.

```
CREATE TABLE production.part_prices(
    part_id int,
    valid_from date,
    price decimal(18,4) not null,
    PRIMARY KEY(part_id, valid_from) 
);
```

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Clustered-Index-and-Primary-Key.png)

If you add a primary key constraint to an existing table that already has a clustered index, SQL Server will enforce the primary key using a non-clustered index:

This statement defines a primary key for the `production.parts` table:

```
ALTER TABLE production.parts
ADD PRIMARY KEY(part_id);
```

SQL Server created a non-clustered index for the primary key.

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Clustered-Index-and-Primary-Key.png)

## Using SQL Server CREATE CLUSTERED INDEX statement to create a clustered index. [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-clustered-indexes/#using-sql-server-create-clustered-index-statement-to-create-a-clustered-index "Anchor for Using SQL Server CREATE CLUSTERED INDEX statement to create a clustered index.")

When a table does not have a primary key, which is very rare, you can use the `CREATE CLUSTERED INDEX` statement to add a clustered index to it.

The following statement creates a clustered index for the `production.parts` table:

```
CREATE CLUSTERED INDEX ix_parts_id
ON production.parts (part_id);  
```

If you open the **Indexes** node under the table name, you will see the new index name `ix_parts_id` with type `Clustered`.

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Clustered-Index-example.png)

When executing the following statement, the SQL Server traverses the index (Clustered Index Seek) to locate the rows, which is faster than scanning the whole table.

```
SELECT 
    part_id, 
    part_name
FROM 
    production.parts
WHERE 
    part_id = 5;
```

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Clustered-Index-Clustered-Index-Seek.png)

## SQL Server CREATE CLUSTERED INDEX syntax [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-clustered-indexes/#sql-server-create-clustered-index-syntax "Anchor for SQL Server <code>CREATE CLUSTERED INDEX</code> syntax")

The syntax for creating a clustered index is as follows:

```
CREATE CLUSTERED INDEX index_name
ON schema_name.table_name (column_list);  
```

In this syntax:

-   First, specify the name of the clustered index after the `CREATE CLUSTERED INDEX` clause.

-   Second, specify the schema and table name on which you want to create the index.
-   Third, list one or more columns included in the index.

## Summary [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-clustered-indexes/#summary "Anchor for Summary")

-   A clustered index physically organizes the data in a table according to the index key.

-   When creating a table with a primary key, SQL Server automatically creates a clustered index based on the primary key columns.
-   A table has only one clustered index.

-   Use the CREATE CLUSTERED INDEX statement to create a new clustered index for a table.

Was this tutorial helpful?

---
Source: [SQL Server Clustered Indexes](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-clustered-indexes/)