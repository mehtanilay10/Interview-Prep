# How to Get Information About a View in SQL Server

[Skip to content](https://www.sqlservertutorial.net/sql-server-views/sql-server-get-view-information/#primary)

**Summary**: in this tutorial, you will learn various ways to get the information of a view in a SQL Server Database.

## Getting the view information using the sql.sql\_module catalog [#](https://www.sqlservertutorial.net/sql-server-views/sql-server-get-view-information/#getting-the-view-information-using-thesql-sql_module-catalog "Anchor for Getting the view information using the <code>sql.sql_module</code> catalog")

To get the information of a view, you use the system catalog `sys.sql_module` and the `OBJECT_ID()` function:

```
SELECT
    definition,
    uses_ansi_nulls,
    uses_quoted_identifier,
    is_schema_bound
FROM
    sys.sql_modules
WHERE
    object_id
    = object_id(
            'sales.daily_sales'
        );
```

In this query, you pass the name of the view to the `OBJECT_ID()` function in the `WHERE` clause. The `OBJECT_ID()` function returns an identification number of a schema-scoped database object.

Here is the output:

![SQL Server Getting View Definition](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Getting-View-Definition.png)

Note that you need to output the result to the text format in order to see the `SELECT` statement clearly as the above picture.

To show the results as text, from the query editor, you press **Ctrl-T** keyboard shortcut or click the **Results to Text** button as shown in the following screenshot:

![SQL Server Getting view definition - show results to text](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Getting-view-definition-show-results-to-text.png)

## Getting view information using the sp\_helptext stored procedure [#](https://www.sqlservertutorial.net/sql-server-views/sql-server-get-view-information/#getting-view-information-using-thesp_helptext-stored-procedure "Anchor for Getting view information using the <code>sp_helptext</code> stored procedure")

The `sp_helptext` stored procedure returns the definition of a user-defined object such as a view.

To get a view’s information, you pass the view name to the `sp_helptext` stored procedure. For example, the following statement returns the information of the `sales.product_catalog` view:

```
EXEC sp_helptext 'sales.product_catalog' ;
```

The following picture shows the output:

![SQL Server Getting view definition using sp_helptext stored procedure](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Getting-view-definition-using-sp_helptext-stored-procedure.png)

## Getting the view information using OBJECT\_DEFINITION() function [#](https://www.sqlservertutorial.net/sql-server-views/sql-server-get-view-information/#getting-the-view-information-using-object_definition-function "Anchor for Getting the view information using <code>OBJECT_DEFINITION()</code> function")

Another way to get the view information is to use the `OBJECT_DEFINITION()` and `OBJECT_ID()` functions as follows:

```
SELECT 
    OBJECT_DEFINITION(
        OBJECT_ID(
            'sales.staff_sales'
        )
    ) view_info;
```

The following picture shows the output:

![SQL Server Getting view information using object_definition stored procedure](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Getting-view-information-using-object_definition-stored-procedure.png)

In this tutorial, you have learned how to various ways to get the information about a view in SQL Server Database.

Was this tutorial helpful?

---
Source: [How to Get Information About a View in SQL Server](https://www.sqlservertutorial.net/sql-server-views/sql-server-get-view-information/)