# SQL Server ALTER SCHEMA Statement

**Summary**: in this tutorial, you will learn how to use the SQL Server `ALTER SCHEMA` statement to transfer a securable from one schema to another.

The `ALTER SCHEMA` statement allows you to transfer a securable from one schema to another within the same database.

Note that a securable is a resource to which the Database Engine authorization system controls access. For instance, a table is a securable.

The following shows the syntax of the `ALTER SCHEMA` statement:

```
ALTER SCHEMA target_schema_name   
    TRANSFER [ entity_type :: ] securable_name;
```

In this syntax:

-   `target_schema_name` is the name of a schema in the current database, into which you want to move the object. Note that it cannot be `SYS` or `INFORMATION_SCHEMA`.

-   The `entity_type` can be `Object`, `Type`, or XML Schema Collection. It defaults to `Object`. The `entity_type` represents the class of the entity for which the owner is being changed.
-   `object_name` is the name of the securable that you want to move into the `target_schema_name`.

If you move a [stored procedure](https://www.sqlservertutorial.net/sql-server-stored-procedures/), [function](https://www.sqlservertutorial.net/sql-server-user-defined-functions/), [view](https://www.sqlservertutorial.net/sql-server-views/), or [trigger](https://www.sqlservertutorial.net/sql-server-triggers/), SQL Server will not change the schema name of these securables. Therefore, it is recommended that you drop and re-create these objects in the new schema instead of using the `ALTER SCHEMA` statement for moving.

If you move an object e.g., table or synonym, SQL Server will not update the references for these objects automatically. You must manually modify the references to reflect the new schema name.

For example, if you move a table referenced in a [stored procedure](https://www.sqlservertutorial.net/sql-server-stored-procedures/), you need to change the stored procedure to reflect the new schema name.

## SQL Server ALTER SCHEMA statement example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-alter-schema/#sql-server-alter-schema-statement-example "Anchor for SQL Server ALTER SCHEMA statement example")

First, [create a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `offices` in the `dbo` schema:

```
CREATE TABLE dbo.offices
(
    office_id      INT
    PRIMARY KEY IDENTITY, 
    office_name    NVARCHAR(40) NOT NULL, 
    office_address NVARCHAR(255) NOT NULL, 
    phone          VARCHAR(20),
);
```

Next, [insert](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) some rows into the `dob.offices` table:

```
INSERT INTO 
    dbo.offices(office_name, office_address)
VALUES
    ('Silicon Valley','400 North 1st Street, San Jose, CA 95130'),
    ('Sacramento','1070 River Dr., Sacramento, CA 95820');
```

Then, [create a stored procedure](https://www.sqlservertutorial.net/sql-server-stored-procedures/basic-sql-server-stored-procedures/) that finds the office by an ID:

```
CREATE PROC usp_get_office_by_id(
    @id INT
) AS
BEGIN
    SELECT 
        * 
    FROM 
        dbo.offices
    WHERE 
        office_id = @id;
END;
```

After that, transfer this `dbo.offices` table to the `sales` schema:

```
ALTER SCHEMA sales TRANSFER OBJECT::dbo.offices;  
```

If you execute the `usp_get_office_by_id` stored procedure:

```
exec usp_get_office_by_id @id=1;
```

SQL Server will issue an error:

```
Msg 208, Level 16, State 1, Procedure usp_get_office_by_id, Line 5 [Batch Start Line 30]
Invalid object name 'dbo.offices'.
```

Finally, manually modify the `dbo.offices` to `sales.offices` inside the stored procedure to reflect the new schema:

```
CREATE PROC usp_get_office_by_id(
    @id INT
) AS
BEGIN
    SELECT 
        * 
    FROM 
        sales.offices
    WHERE 
        office_id = @id;
END;
```

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-alter-schema/#summary "Anchor for Summary")

-   Use the SQL Server `ALTER SCHEMA` statement to transfer a securable from one schema to another within the same database.

Was this tutorial helpful?

---
Source: [SQL Server ALTER SCHEMA Statement](https://www.sqlservertutorial.net/sql-server-basics/sql-server-alter-schema/)