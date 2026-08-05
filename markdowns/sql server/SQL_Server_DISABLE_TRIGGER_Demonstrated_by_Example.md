# SQL Server DISABLE TRIGGER Demonstrated by Example

**Summary**: In this tutorial, you will learn how to use the SQL Server `DISABLE TRIGGER` statement to disable a trigger.

## Introduction SQL Server DISABLE TRIGGER [#](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-disable-trigger/#introduction-sql-server-disable-trigger "Anchor for Introduction SQL Server <code>DISABLE TRIGGER</code>")

Sometimes, for the troubleshooting or data recovering purpose, you may want to disable a trigger temporarily. To do this, you use the `DISABLE TRIGGER` statement:

```
DISABLE TRIGGER [schema_name.][trigger_name] 
ON [object_name | DATABASE | ALL SERVER]
```

In this syntax:

-   First, specify the name of the schema to which the trigger belongs and the name of the trigger that you want to disable after the `DISABLE TRIGGER` keywords.

-   Second, specify the table name or view that the trigger was bound to if the trigger is a DML trigger. Use `DATABASE` if the trigger is DDL database-scoped trigger, or `SERVER` if the trigger is DDL server-scoped trigger.

### SQL Server DISABLE TRIGGER example [#](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-disable-trigger/#sql-server-disable-trigger-example "Anchor for SQL Server <code>DISABLE TRIGGER</code> example")

The following statement [creates a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `sales.members` for the demonstration:

```
CREATE TABLE sales.members (
    member_id INT IDENTITY PRIMARY KEY,
    customer_id INT NOT NULL,
    member_level CHAR(10) NOT NULL
);
```

The following statement [creates a trigger](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-create-trigger/) that is fired whenever a new row is inserted into the `sales.members` table. For the demonstration purpose, the trigger just returns a simple message.

```
CREATE TRIGGER sales.trg_members_insert
ON sales.members
AFTER INSERT
AS
BEGIN
    PRINT 'A new member has been inserted';
END;
```

The following statement [inserts a new row](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) into the `sales.members` table:

```
INSERT INTO sales.members(customer_id, member_level)
VALUES(1,'Silver');
```

Because of the `INSERT` event, the triggered was fired and printed out the following message:

```
A new member has been inserted
```

To disable the `sales.trg_members_insert` trigger, you use the following `DISABLE TRIGGER` statement:

```
DISABLE TRIGGER sales.trg_members_insert 
ON sales.members;
```

Now if you insert a new row into the `sales.members` table, the trigger will not be fired.

```
INSERT INTO sales.members(customer_id, member_level)
VALUES(2,'Gold');
```

It means that the trigger has been disabled.

Note that the trigger definition is still there on the table. If you view the trigger in the SQL Server Management Studio (SSMS), you will notice a red cross icon on the disabled trigger name:

![SQL Server DISABLE TRIGGER example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-DISABLE-TRIGGER-example.jpg)

## Disable all trigger on a table [#](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-disable-trigger/#disable-all-trigger-on-a-table "Anchor for Disable all trigger on a table")

To disable all triggers on a table, you use the following statement:

```
DISABLE TRIGGER ALL ON table_name;
```

In this statement, you just need to specify the name of the table to disable all triggers that belong to that table.

The following statement [creates a new trigger](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-create-trigger/) on the `sales.members` table which is fired after delete event:

```
CREATE TRIGGER sales.trg_members_delete
ON sales.members
AFTER DELETE
AS
BEGIN
    PRINT 'A new member has been deleted';
END;
```

To disable all triggers on the `sales.members` table, you use the following statement:

```
DISABLE TRIGGER ALL ON sales.members;
```

The following picture shows the status of all triggers that belongs to the `sales.members` table:

![SQL Server disable all triggers of a table](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-disable-all-triggers-of-a-table.jpg)

## Disable all triggers on a database [#](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-disable-trigger/#disable-all-triggers-on-a-database "Anchor for Disable all triggers on a database")

To disable all triggers on the current database, you use the following statement:

```
DISABLE TRIGGER ALL ON DATABASE;
```

In this tutorial, you have learned how to use the SQL Server `DISABLE TRIGGER` statement to disable a trigger.

Was this tutorial helpful?

---
Source: [SQL Server DISABLE TRIGGER Demonstrated by Example](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-disable-trigger/)