# SQL Server Views - Learn about Views in SQL Server

**Summary**: in this tutorial, you will learn about views and how to manage views such as creating a new view, removing a view, and updating data of the underlying tables through a view.

When you use the `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement to query data from one or more tables, you get a result set.

For example, the following statement returns the product name, brand, and list price of all products from the `products` and `brands` tables:

```
SELECT
    product_name, 
    brand_name, 
    list_price
FROM
    production.products p
INNER JOIN production.brands b 
        ON b.brand_id = p.brand_id;
```

Next time, if you want to get the same result set, you can save this query into a text file, open it, and execute it again.

SQL Server provides a better way to save this query in the database catalog through a view.

A view is a named query stored in the database catalog that allows you to refer to it later.

So the query above can be stored as a view using the `[CREATE VIEW](https://www.sqlservertutorial.net/sql-server-views/sql-server-create-view/)` statement as follows:

```
CREATE VIEW sales.product_info
AS
SELECT
    product_name, 
    brand_name, 
    list_price
FROM
    production.products p
INNER JOIN production.brands b 
        ON b.brand_id = p.brand_id;
```

Later, you can reference to the view in the `SELECT` statement like a table as follows:

```
SELECT * FROM sales.product_info;
```

When receiving this query, SQL Server executes the following query:

```
SELECT 
    *
FROM (
    SELECT
        product_name, 
        brand_name, 
        list_price
    FROM
        production.products p
    INNER JOIN production.brands b 
        ON b.brand_id = p.brand_id;
);
```

By definition, views do not store data except for [indexed views](https://www.sqlservertutorial.net/sql-server-views/sql-server-indexed-view/).

A view may consist of columns from multiple tables using joins or just a subset of columns of a single table. This makes views useful for abstracting or hiding complex queries.

The following picture illustrates a view that includes columns from multiple tables:

![SQL Server Views](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Views.png)

## Advantages of views [#](https://www.sqlservertutorial.net/sql-server-views/#advantages-of-views "Anchor for Advantages of views")

Generally speaking, views provide the following advantages:

### Security [#](https://www.sqlservertutorial.net/sql-server-views/#security "Anchor for Security")

You can restrict users to access directly to a table and allow them to access a subset of data via views.

For example, you can allow users to access customer name, phone, email via a view but restrict them to access the bank account and other sensitive information.

### Simplicity [#](https://www.sqlservertutorial.net/sql-server-views/#simplicity "Anchor for Simplicity")

A relational database may have many tables with complex relationships e.g., one-to-one and one-to-many that make it difficult to navigate.

However, you can simplify the complex queries with joins and conditions using a set of views.

### Consistency [#](https://www.sqlservertutorial.net/sql-server-views/#consistency "Anchor for Consistency")

Sometimes, you need to write a complex formula or logic in every query.

To make it consistent, you can hide the complex queries logic and calculations in views.

Once views are defined, you can reference the logic from the views rather than rewriting it in separate queries.

## Managing views in SQL Server [#](https://www.sqlservertutorial.net/sql-server-views/#managing-views-in-sql-server "Anchor for Managing views in SQL Server")

-   [Creating a new view](https://www.sqlservertutorial.net/sql-server-views/sql-server-create-view/) – show you how to create a new view in a SQL Server database.

-   [Renaming a view](https://www.sqlservertutorial.net/sql-server-views/sql-server-rename-view/) – learn how to rename a view using the SQL Server Management Studio (SSMS) or Transact-SQL command.
-   [Listing views in SQL Server](https://www.sqlservertutorial.net/sql-server-views/sql-server-list-views/) – discuss the various way to list all views in a SQL Server Database.

-   [Getting view information](https://www.sqlservertutorial.net/sql-server-views/sql-server-get-view-information/) – how to get information about a view.
-   [Removing a view](https://www.sqlservertutorial.net/sql-server-views/sql-server-drop-view/) – guide you how to use the `DROP VIEW` statement to remove one or more views from the database.

-   [Creating an indexed view](https://www.sqlservertutorial.net/sql-server-views/sql-server-indexed-view/) – show you how to create an indexed view against tables that have infrequent data modification to optimize the performance of the view.

---
Source: [SQL Server Views - Learn about Views in SQL Server](https://www.sqlservertutorial.net/sql-server-views/)