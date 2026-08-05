# SQL Server DROP VIEW - Dropping Views in SQL Server

[Skip to content](https://www.sqlservertutorial.net/sql-server-views/sql-server-drop-view/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `DROP VIEW` statement to remove an existing view.

To remove a [view](https://www.sqlservertutorial.net/sql-server-views/) from a database, you use the `DROP VIEW` statement as follows:

```
DROP VIEW [IF EXISTS] schema_name.view_name;
```

In this syntax, you specify the name of the view that you want to drop after the `DROP VIEW` keywords. If the view belongs to a schema, you must also explicitly specify the name of the schema to which the view belongs.

If you attempt to remove a view that does not exist, SQL Server will issue an error. The `IF EXISTS` clause prevents an error from occurring when you delete a view that does not exist.

To remove multiple views, you use the following syntax:

```
DROP VIEW [IF EXISTS] 
    schema_name.view_name1, 
    schema_name.view_name2,
    ...;
```

In this syntax, the views are separated by commas.

Note that when you drop a view, SQL Server removes all permissions for the view.

## SQL Server DROP VIEW examples [#](https://www.sqlservertutorial.net/sql-server-views/sql-server-drop-view/#sql-server-drop-view-examples "Anchor for SQL Server <code>DROP VIEW</code> examples")

We will use the `sales.daily_sales` and `sales.staff_sales` views created in the `[CREATE VIEW](https://www.sqlservertutorial.net/sql-server-views/sql-server-create-view/)` tutorial for the demonstration.

### Removing one view example [#](https://www.sqlservertutorial.net/sql-server-views/sql-server-drop-view/#removing-one-view-example "Anchor for Removing one view example")

The following example shows how to drop the `sales.daily_sales` view from the sample database:

```
DROP VIEW IF EXISTS sales.daily_sales;
```

### Removing multiple views example [#](https://www.sqlservertutorial.net/sql-server-views/sql-server-drop-view/#removing-multiple-views-example "Anchor for Removing multiple views example")

The following statement [creates a view](https://www.sqlservertutorial.net/sql-server-views/sql-server-create-view/) named `product_catalogs` for demonstration purpose:

```
CREATE VIEW sales.product_catalog
AS
SELECT 
    product_name, 
    category_name, 
	brand_name,
    list_price
FROM 
    production.products p
INNER JOIN production.categories c 
    ON c.category_id = p.category_id
INNER JOIN production.brands b
	ON b.brand_id = p.brand_id;
```

The following statement removes both `sales.staff_sales` and `sales.product_catalog` views at the same time:

```
DROP VIEW IF EXISTS 
    sales.staff_sales, 
    sales.product_catalogs;
```

In this tutorial, you have learned how to use the SQL Server `DROP VIEW` statement to remove one or more views from the database.

Was this tutorial helpful?

---
Source: [SQL Server DROP VIEW - Dropping Views in SQL Server](https://www.sqlservertutorial.net/sql-server-views/sql-server-drop-view/)