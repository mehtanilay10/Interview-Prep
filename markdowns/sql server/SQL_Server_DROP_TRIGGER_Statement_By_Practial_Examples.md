# SQL Server DROP TRIGGER Statement By Practial Examples

[Skip to content](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-drop-trigger/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `DROP TRIGGER` statement to remove existing triggers.

## Introduction SQL Server DROP TRIGGER statements [#](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-drop-trigger/#introduction-sql-server-drop-trigger-statements "Anchor for Introduction SQL Server <code>DROP TRIGGER</code> statements")

The SQL Server `DROP TRIGGER` statement drops one or more triggers from the database. The following illustrates the syntax of the `DROP TRIGGER` statement that removes [DML triggers](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-create-trigger/):

```
DROP TRIGGER [ IF EXISTS ] [schema_name.]trigger_name [ ,...n ];
```

In this syntax:

-   `IF EXISTS` conditionally removes the trigger only when it already exists.

-   `schema_name` is the name of the schema to which the DML trigger belongs.
-   `trigger_name` is the name of the trigger that you wish to remove.

If you want to remove multiple triggers at once, you need to separate triggers by commas.

To remove one or more [DDL triggers](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-ddl-trigger/), you use the following form of the `DROP TRIGGER` statement:

```
DROP TRIGGER [ IF EXISTS ] trigger_name [ ,...n ]   
ON { DATABASE | ALL SERVER };
```

In this syntax:

-   `DATABASE` indicates that the scope of the DDL trigger applies to the current database.

-   `ALL SERVER` indicates the scope of the DDL trigger applies to the current server.

To remove a `LOGON` event trigger, you use the following syntax:

```
DROP TRIGGER [ IF EXISTS ] trigger_name [ ,...n ]   
ON ALL SERVER;
```

Notice that when you [drop a table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-drop-table/), all triggers associated with the table are also removed automatically.

### A) SQL Server DROP TRIGGER – drop a DML trigger example [#](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-drop-trigger/#a-sql-server-drop-trigger-drop-a-dml-trigger-example "Anchor for A) SQL Server <code>DROP TRIGGER</code> - drop a DML trigger example")

The following statement drops a DML trigger named `sales.trg_member_insert`:

```
DROP TRIGGER IF EXISTS sales.trg_member_insert;
```

### B) SQL Server DROP TRIGGER – drop a DDL trigger example [#](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-drop-trigger/#b-sql-server-drop-trigger-drop-a-ddl-trigger-example "Anchor for B) SQL Server <code>DROP TRIGGER</code> - drop a DDL trigger example")

The following statement removes the `trg_index_changes` trigger:

```
DROP TRIGGER IF EXISTS trg_index_changes;
```

In this tutorial, you have learned how to use remove a trigger using the `DROP TRIGGER` statement.

Was this tutorial helpful?

---
Source: [SQL Server DROP TRIGGER Statement By Practial Examples](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-drop-trigger/)