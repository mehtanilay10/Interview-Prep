# SQL Server ENABLE TRIGGER By Pracical Examples

[Skip to content](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-enable-trigger/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `ENABLE TRIGGER` statement to enable a trigger.

## Introduction to SQL Server ENABLE TRIGGER statement [#](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-enable-trigger/#introduction-to-sql-server-enable-trigger-statement "Anchor for Introduction to SQL Server <code>ENABLE TRIGGER</code> statement")

The `ENABLE TRIGGER` statement allows you to enable a trigger so that the trigger can be fired whenever an event occurs.

The following illustrates the syntax of the `ENABLE TRIGGER` statement:

```
ENABLE TRIGGER [schema_name.][trigger_name] 
ON [object_name | DATABASE | ALL SERVER]
```

In this syntax:

-   First, specify the name of the trigger that you want to enable. Optionally, you can specify the name of the schema to which the trigger belongs.

-   Second, specify the table to which the trigger belongs if the trigger is a DML trigger. Use `DATABASE` if the trigger is a DDL database-scoped trigger or `ALL SERVER` if the trigger is DDL server-scoped trigger.

We will use the `sales.members` table created in the `[DISABLE TRIGGER](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-disable-trigger/)` tutorial for the demonstration.

To enable the `sales.sales.trg_members_insert` trigger, you use the following statement:

```
ENABLE TRIGGER sales.trg_members_insert
ON sales.members;
```

Once enabled, you can see the status of the trigger via the SQL Server Management Studio as shown in the following picture:

![SQL Server ENABLE TRIGGER example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-ENABLE-TRIGGER-example.png)

### Enable all triggers of a table [#](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-enable-trigger/#enable-all-triggers-of-a-table "Anchor for Enable all triggers of a table")

To enable all triggers of a table, you use the following statement:

```
ENABLE TRIGGER ALL ON table_name;
```

In this syntax, you just have to specify the name of the table that you want to enable all associated triggers.

For example, to enable all triggers of the `sales.members` table, you use the following statement:

The following picture shows the status of all triggers defined for the `sales.members` table:

![SQL Server ENABLE ALL TRIGGER example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-ENABLE-ALL-TRIGGER-example.png)

### Enable all triggers of a database [#](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-enable-trigger/#enable-all-triggers-of-a-database "Anchor for Enable all triggers of a database")

To enable all triggers on the current database, you use the following statement:

```
ENABLE TRIGGER ALL ON DATABASE; 
```

In this tutorial, you have learned how to use the SQL Server `ENABLE TRIGGER` statement to enable a trigger of a table. You also learned how to enable all triggers of a table and a database.

Was this tutorial helpful?

---
Source: [SQL Server ENABLE TRIGGER By Pracical Examples](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-enable-trigger/)