# SQL Server DROP SCHEMA Statement By Practical Examples

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-drop-schema/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `DROP SCHEMA` statement to remove a schema from a database.

The `DROP SCHEMA` statement allows you to delete a schema from a database. The following shows the syntax of the `DROP SCHEMA` statement:

```
DROP SCHEMA [IF EXISTS] schema_name;
```

In this syntax:

-   First, specify the name of the schema that you want to drop. If the schema contains any objects, the statement will fail. Therefore, you must delete all objects in the schema before removing the schema.

-   Second, use the `IF EXISTS` option to conditionally remove the schema only if the schema exists. Attempting to drop a nonexisting schema without the `IF EXISTS` option will result in an error.

## SQL Server DROP SCHEMA statement example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-drop-schema/#sql-server-drop-schema-statement-example "Anchor for SQL Server <code>DROP SCHEMA</code> statement example")

First, [create a new schema](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-schema/) named `logistics`:

```
CREATE SCHEMA logistics;
GO
```

Next, [create a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `deliveries` inside the `logistics` schema:

```
CREATE TABLE logistics.deliveries
(
    order_id        INT
    PRIMARY KEY, 
    delivery_date   DATE NOT NULL, 
    delivery_status TINYINT NOT NULL
);
```

Then, drop the schema `logistics`:

```
DROP SCHEMA logistics;
```

SQL Server issued the following error because the schema is not empty.

```
Msg 3729, Level 16, State 1, Line 1
Cannot drop schema 'logistics' because it is being referenced by object 'deliveries'.
```

After that, [drop the table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-drop-table/) `logistics.deliveries`:

```
DROP TABLE logistics.deliveries;
```

Finally, issue the `DROP SCHEMA` again to drop the `logistics` schema:

```
DROP SCHEMA IF EXISTS logistics;
```

Now, you will find that the `logistics` schema has been deleted from the database.

In this tutorial, you have learned how to use the SQL Server `DROP SCHEMA` statement to remove a schema from a database.

Was this tutorial helpful?

---
Source: [SQL Server DROP SCHEMA Statement By Practical Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-drop-schema/)