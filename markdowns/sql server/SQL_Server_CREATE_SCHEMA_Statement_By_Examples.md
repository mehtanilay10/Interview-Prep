# SQL Server CREATE SCHEMA Statement By Examples

**Summary**: in this tutorial, you will learn how to use the SQL Server `CREATE SCHEMA` to create a new schema in the current database.

## What is a schema in SQL Server [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-schema/#what-is-a-schema-in-sql-server "Anchor for What is a schema in SQL Server")

A schema is a collection of database objects including tables, [views](https://www.sqlservertutorial.net/sql-server-views/), [triggers](https://www.sqlservertutorial.net/sql-server-triggers/), [stored procedures](https://www.sqlservertutorial.net/sql-server-stored-procedures/), [indexes](https://www.sqlservertutorial.net/sql-server-indexes/), etc. A schema is associated with a username which is known as the schema owner, who is the owner of the logically related database objects.

A schema always belongs to one database. On the other hand, a database may have one or multiple schemas. For example, in our `BikeStores` [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/), we have two schemas: `sales` and `production`. An object within a schema is qualified using the `schema_name.object_name` format like `sales.orders`. Two tables in two schemas can share the same name so you may have `hr.employees` and `sales.employees`.

### Built-in schemas in SQL Server [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-schema/#built-in-schemas-in-sql-server "Anchor for Built-in schemas in SQL Server")

SQL Server provides us with some pre-defined schemas which have the same names as the built-in database users and roles, for example: `dbo`, `guest`, `sys`, and `INFORMATION_SCHEMA`.

Note that SQL Server reserves the `sys` and `INFORMATION_SCHEMA` schemas for system objects, therefore, you cannot [create](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) or [drop](https://www.sqlservertutorial.net/sql-server-basics/sql-server-drop-table/) any objects in these schemas.

The default schema for a newly created database is `dbo`, which is owned by the `dbo` user account. By default, when you create a new user with the `CREATE USER` command, the user will take `dbo` as its default schema.

The `CREATE SCHEMA` statement allows you to create a new schema in the current database.

The following illustrates the simplified version of the `CREATE SCHEMA` statement:

```
CREATE SCHEMA schema_name
    [AUTHORIZATION owner_name]
```

In this syntax,

-   First, specify the name of the schema that you want to create in the `CREATE SCHEMA` clause.

-   Second, specify the owner of the schema after the `AUTHORIZATION` keyword.

## SQL Server CREATE SCHEMA statement example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-schema/#sql-server-create-schema-statement-example "Anchor for SQL Server <code>CREATE SCHEMA</code> statement example")

The following example shows how to use the `CREATE SCHEMA` statement to create the `customer_services` schema:

```
CREATE SCHEMA customer_services;
GO
```

Note that `GO` command instructs the SQL Server Management Studio to send the SQL statements up to the `GO` statement to the server to be executed.

Once you execute the statement, you can find the newly created schema under the **Security > Schemas** of the database name.

![SQL Server CREATE SCHEMA](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CREATE-SCHEMA.png)

If you want to list all schemas in the current database, you can query schemas from the `sys.schemas` as shown in the following query:

```
SELECT 
    s.name AS schema_name, 
    u.name AS schema_owner
FROM 
    sys.schemas s
INNER JOIN sys.sysusers u ON u.uid = s.principal_id
ORDER BY 
    s.name;
```

Here is the output:

![SQL Server List Schemas](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-List-Schemas.png)

After having the `customer_services` schema, you can create objects for the schema. For example, the following statement [creates a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `jobs` in the `customer_services` schema:

```
CREATE TABLE customer_services.jobs(
    job_id INT PRIMARY KEY IDENTITY,
    customer_id INT NOT NULL,
    description VARCHAR(200),
    created_at DATETIME2 NOT NULL
);
```

In this tutorial, you have learned how to use the SQL Server `CREATE SCHEMA` statement to create a new schema in the current database.

Was this tutorial helpful?

---
Source: [SQL Server CREATE SCHEMA Statement By Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-schema/)