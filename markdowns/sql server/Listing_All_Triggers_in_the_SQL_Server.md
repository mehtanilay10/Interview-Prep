# Listing All Triggers in the SQL Server

[Skip to content](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-list-all-triggers/#primary)

To list all triggers in a SQL Server, you query data from the `sys.triggers` view:

```
SELECT  
    name,
    is_instead_of_trigger
FROM 
    sys.triggers  
WHERE 
    type = 'TR';
```

The following picture shows the output:

![SQL Server List Triggers](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-List-Triggers.png)

Was this tutorial helpful?

---
Source: [Listing All Triggers in the SQL Server](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-list-all-triggers/)