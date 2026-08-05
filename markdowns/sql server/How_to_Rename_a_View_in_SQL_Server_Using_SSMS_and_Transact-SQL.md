# How to Rename a View in SQL Server Using SSMS and Transact-SQL

[Skip to content](https://www.sqlservertutorial.net/sql-server-views/sql-server-rename-view/#primary)

**Summary**: in this tutorial, you will learn how to rename a view in a SQL Server Database.

Before renaming a view, you must notice that all objects that depend on the view may fail. These include [stored procedures](https://www.sqlservertutorial.net/sql-server-stored-procedures/), [user-defined functions](https://www.sqlservertutorial.net/sql-server-user-defined-functions/), [triggers](https://www.sqlservertutorial.net/sql-server-triggers/), queries, other views, and client applications.

Therefore, after renaming the view, you must ensure that all objects that reference the view’s old name use the new name.

## SQL Server rename view using Server Server Management Studio (SSMS) [#](https://www.sqlservertutorial.net/sql-server-views/sql-server-rename-view/#sql-server-rename-view-using-server-server-management-studio-ssms "Anchor for SQL Server rename view using Server Server Management Studio (SSMS)")

To rename the name of a view you follow these steps:

First, in Object Explorer, expand the Databases, choose the database name which contains the view that you want to rename and expand the Views folder.

Second, right-click the view that you want to rename and select **Rename**.

![SQL Server Rename View Using SSMS](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Rename-View-Using-SSMS.png)

Third, enter the new name for the view.

![SQL Server Rename View Using SSMS - type new view name](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Rename-View-Using-SSMS-type-new-view-name.png)

If you want to rename a view programmatically, you can use the `sp_rename` [stored procedure](https://www.sqlservertutorial.net/sql-server-stored-procedures/):

```
EXEC sp_rename 
    @objname = 'sales.product_catalog',
    @newname = 'product_list';
```

In this statement:

-   First, pass the name of the view which you want to rename using the `@objname` parameter and the new view name to using the `@newname` parameter. Note that in the `@objectname` you must specify the schema name of the view. However, in the `@newname` parameter, you must not.

-   Second, execute the statement.

The `sp_rename` [stored procedure](https://www.sqlservertutorial.net/sql-server-stored-procedures/) returns the following message:

```
Caution: Changing any part of an object name could break scripts and stored procedures.
```

In this tutorial, you have learned how to rename a view in a SQL Server database using SQL Server Management Studio and Transact-SQL.

Was this tutorial helpful?

---
Source: [How to Rename a View in SQL Server Using SSMS and Transact-SQL](https://www.sqlservertutorial.net/sql-server-views/sql-server-rename-view/)