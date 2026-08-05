# Top 4 Ways to View the Definition of a Trigger in SQL Server

[Skip to content](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-view-trigger-definition/#primary)

**Summary**: in this tutorial, you will learn various ways to view SQL Server trigger definition.

## Getting trigger definition by querying from a system view [#](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-view-trigger-definition/#getting-trigger-definition-by-querying-from-asystem-view "Anchor for Getting trigger definition by querying from a system view")

You can get the definition of a trigger by querying data against the `sys.sql_modules` view:

```
SELECT 
    definition   
FROM 
    sys.sql_modules  
WHERE 
    object_id = OBJECT_ID('sales.trg_members_delete'); 
```

Here is the output:

![SQL Server View Trigger Definition - querying system view](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-View-Trigger-Definition-querying-system-view.png)

In this query, you pass the name of the trigger which you want to get the definition to the `OBJECT_ID()` function in the `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause.

## Getting trigger definition using OBJECT\_DEFINITION function [#](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-view-trigger-definition/#getting-trigger-definition-using-object_definition-function "Anchor for Getting trigger definition using <code>OBJECT_DEFINITION</code> function")

You can get the definition of a trigger using the `OBJECT_DEFINITION` function as follows:

```
SELECT 
    OBJECT_DEFINITION (
        OBJECT_ID(
            'sales.trg_members_delete'
        )
    ) AS trigger_definition;
```

In this query, you pass the trigger name to the OBJECT\_ID function to get the ID of the trigger. Then, you use the `OBJECT_DEFINITION()` function to get the Transact-SQL source text of the definition of a trigger based on its ID.

## Getting trigger definition using sp\_helptext stored procedure [#](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-view-trigger-definition/#getting-trigger-definition-using-sp_helptext-stored-procedure "Anchor for Getting trigger definition using <code>sp_helptext</code> stored procedure")

The simplest way to get the definition of a trigger is to use the sp\_helptext stored procedure as follows:

```
EXEC sp_helptext 'sales.trg_members_delete' ;
```

The `sp_helptext` stored procedure returns the definition used to create an object, in this case, a trigger.

## Getting trigger definition using SSMS [#](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-view-trigger-definition/#getting-trigger-definition-using-ssms "Anchor for Getting trigger definition using SSMS")

To view the definition of a DML trigger:

1.  First, in Object Explorer, connect to the database and expand that instance.
2.  Second, expand the database and table which contains the trigger that you want to view the definition.
3.  Third, expand Triggers, right-click the trigger you want to view the definition, and then click **Modify**. The trigger definition appears in the query window.

![SQL Server View Trigger Definition](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-View-Trigger-Definition.png)

In this tutorial, you have learned various ways to view the definition of a trigger.

Was this tutorial helpful?

---
Source: [Top 4 Ways to View the Definition of a Trigger in SQL Server](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-view-trigger-definition/)