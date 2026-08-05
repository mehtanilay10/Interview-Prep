# SQL Server List Views: List All Views in a SQL Server Database

[Skip to content](https://www.sqlservertutorial.net/sql-server-views/sql-server-list-views/#primary)

**Summary**: in this tutorial, you will learn how to list all views in the SQL Server database by querying the system catalog view.

To list all views in a SQL Server Database, you query the `sys.views` or `sys.objects` catalog view. Here is an example:

```
SELECT 
	OBJECT_SCHEMA_NAME(v.object_id) schema_name,
	v.name
FROM 
	sys.views as v;
```

The query returns the following list of schema names and view names:

![SQL Server List Views Example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-List-Views-Example.png)

In this example, we used the `OBJECT_SCHEMA_NAME()` function to get the schema names of the views.

The following query returns a list of views through the sys.objects view:

```
SELECT 
	OBJECT_SCHEMA_NAME(o.object_id) schema_name,
	o.name
FROM
	sys.objects as o
WHERE
	o.type = 'V';
```

## Creating a stored procedure to show views in SQL Server Database [#](https://www.sqlservertutorial.net/sql-server-views/sql-server-list-views/#creating-a-stored-procedure-to-show-views-in-sql-server-database "Anchor for Creating a stored procedure to show views in SQL Server Database")

The following stored procedure wraps the query above to list all views in the SQL Server Database based on the input schema name and view name:

```
CREATE PROC usp_list_views(
	@schema_name AS VARCHAR(MAX)  = NULL,
	@view_name AS VARCHAR(MAX) = NULL
)
AS
SELECT 
	OBJECT_SCHEMA_NAME(v.object_id) schema_name,
	v.name view_name
FROM 
	sys.views as v
WHERE 
	(@schema_name IS NULL OR 
	OBJECT_SCHEMA_NAME(v.object_id) LIKE '%' + @schema_name + '%') AND
	(@view_name IS NULL OR
	v.name LIKE '%' + @view_name + '%');
```

For example, if you want to know the views that contain the word sales, you can call the stored procedure usp\_list\_views:

```
EXEC usp_list_views @view_name = 'sales'
```

Here is the result:

![SQL Server List Views using Stored Procedure](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-List-Views-using-Stored-Procedure.png)

In this tutorial, you have learned various ways to list views in a SQL Server Database by querying data from the system catalog views.

Was this tutorial helpful?

---
Source: [SQL Server List Views: List All Views in a SQL Server Database](https://www.sqlservertutorial.net/sql-server-views/sql-server-list-views/)