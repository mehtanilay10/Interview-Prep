# SQL Server Indexed View: An Essential Guide with Practical Examples

**Summary**: in this tutorial, you will learn how to create a SQL Server indexed view that stored data physically in the database.

## Introduction to SQL Server indexed view [#](https://www.sqlservertutorial.net/sql-server-views/sql-server-indexed-view/#introduction-to-sql-server-indexed-view "Anchor for Introduction to SQL Server indexed view")

Regular [SQL Server views](https://www.sqlservertutorial.net/sql-server-views/) are the saved queries that provide some benefits such as query simplicity, business logic consistency, and security. However, they do not improve the underlying query performance.

Unlike regular views, indexed views are materialized views that stores data physically like a table hence may provide some the performance benefit if they are used appropriately.

To create an indexed view, you use the following steps:

-   First, [create a view](https://www.sqlservertutorial.net/sql-server-views/sql-server-create-view/) that uses the `WITH SCHEMABINDING` option which binds the view to the schema of the underlying tables.

-   Second, [create a unique clustered index](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-unique-index/) on the view. This materializes the view.

Because of the `WITH SCHEMABINDING` option, if you want to change the structure of the underlying tables which affect the indexed view’s definition, you must [drop the indexed view](https://www.sqlservertutorial.net/sql-server-views/sql-server-drop-view/) first before applying the changes.

In addition, SQL Server requires all object references in an indexed view to include the two-part naming  
convention i.e., `schema.object`, and all referenced objects are in the same database.

When the data of the underlying tables changes, the data in the indexed view is also automatically updated. This causes a write overhead for the referenced tables. It means that when you write to the underlying table, SQL Server also has to write to the index of the view. Therefore, you should only create an indexed view against the tables that have in-frequent data updates.

## Creating an SQL Server indexed view example [#](https://www.sqlservertutorial.net/sql-server-views/sql-server-indexed-view/#creating-an-sql-server-indexed-view-example "Anchor for Creating an SQL Server indexed view example")

The following statement creates an indexed view based on columns of the `production.products`, `production.brands`, and `production.categories` tables from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/):

![Categories, Products, and Brands](https://www.sqlservertutorial.net/wp-content/uploads/products-categories-brands.png)

```
CREATE VIEW product_master
WITH SCHEMABINDING
AS 
SELECT
    product_id,
    product_name,
    model_year,
    list_price,
    brand_name,
    category_name
FROM
    production.products p
INNER JOIN production.brands b 
    ON b.brand_id = p.brand_id
INNER JOIN production.categories c 
    ON c.category_id = p.category_id;
```

Notice the option `WITH SCHEMABINDING` after the view name. The rest is the same as a regular view.

Before creating a unique clustered index for the view, let’s examine the query I/O cost statistics by querying data from a regular view and using the `SET STATISTICS IO` command:

```
SET STATISTICS IO ON
GO

SELECT 
    * 
FROM
    production.product_master
ORDER BY
    product_name;
GO 
```

SQL Server returns the following query I/O cost statistics:

```
Table 'Worktable'. Scan count 0, logical reads 0, physical reads 0, read-ahead reads 0, lob logical reads 0, lob physical reads 0, lob read-ahead reads 0.
Table 'Workfile'. Scan count 0, logical reads 0, physical reads 0, read-ahead reads 0, lob logical reads 0, lob physical reads 0, lob read-ahead reads 0.
Table 'products'. Scan count 1, logical reads 5, physical reads 1, read-ahead reads 3, lob logical reads 0, lob physical reads 0, lob read-ahead reads 0.
Table 'categories'. Scan count 1, logical reads 2, physical reads 1, read-ahead reads 0, lob logical reads 0, lob physical reads 0, lob read-ahead reads 0.
Table 'brands'. Scan count 1, logical reads 2, physical reads 1, read-ahead reads 0, lob logical reads 0, lob physical reads 0, lob read-ahead reads 0.
```

As you can see clearly from the output, SQL Server had to read from three corresponding tables before returning the result set.

Let’s [add a unique clustered index](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-unique-index/) to the view:

```
CREATE UNIQUE CLUSTERED INDEX 
    ucidx_product_id 
ON production.product_master(product_id);
```

This statement materializes the view, making it have a physical existence in the database.

You can also add a non-clustered index on the `product_name` column of the view:

```
CREATE NONCLUSTERED INDEX 
    ucidx_product_name
ON production.product_master(product_name);
```

Now, if you query data against the view, you will notice that the statistics have changed:

```
Table 'Worktable'. Scan count 0, logical reads 0, physical reads 0, read-ahead reads 0, lob logical reads 0, lob physical reads 0, lob read-ahead reads 0.
Table 'product_master'. Scan count 1, logical reads 6, physical reads 1, read-ahead reads 11, lob logical reads 0, lob physical reads 0, lob read-ahead reads 0.
```

Instead of reading data from three tables, SQL Server now reads data directly from the materialized view `product_master`.

Note that this feature is only available on SQL Server Enterprise Edition. If you use the SQL Server Standard or Developer Edition, you must use the `WITH (NOEXPAND)` table hint directly in the `FROM` clause of the query which you want to use the view like the following query:

```
SELECT * 
FROM production.product_master 
   WITH (NOEXPAND)
ORDER BY product_name;
```

In this tutorial, you have learned how to create a SQL Server indexed view defined against tables that have infrequent data updates to improve the query performance.

Was this tutorial helpful?

---
Source: [SQL Server Indexed View: An Essential Guide with Practical Examples](https://www.sqlservertutorial.net/sql-server-views/sql-server-indexed-view/)