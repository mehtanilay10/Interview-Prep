# The Ultimate Guide to SQL Server Synonym By Practical Examples

**Summary**: in this tutorial, you will learn about SQL Server synonym and how to create synonyms for database objects.

## What is a synonym in SQL Server [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/#what-is-a-synonym-in-sql-server "Anchor for What is a synonym in SQL Server")

In SQL Server, a synonym is an alias or alternative name for a database object such as a table, [view](https://www.sqlservertutorial.net/sql-server-views/), [stored procedure](https://www.sqlservertutorial.net/sql-server-stored-procedures/), [user-defined function](https://www.sqlservertutorial.net/sql-server-user-defined-functions/), and [sequence](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/). A synonym provides you with many benefits if you use it properly.

## SQL Server CREATE SYNONYM statement syntax [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/#sql-server-create-synonym-statement-syntax "Anchor for SQL Server <code>CREATE SYNONYM</code> statement syntax")

To create a synonym, you use the `CREATE SYNONYM` statement as follows:

```
CREATE SYNONYM [ schema_name_1. ] synonym_name 
FOR object;
```

The object is in the following form:

```
[ server_name.[ database_name ] . [ schema_name_2 ]. object_name   
```

In this syntax:

-   First, specify the target `object` that you want to assign a synonym in the `FOR` clause

-   Second, provide the name of the synonym after the `CREATE SYNONYM` keywords

Note that the object for which you create the synonym does not have to exist at the time the synonym is created.

## SQL Server CREATE SYNONYM statement examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/#sql-server-create-synonym-statement-examples "Anchor for SQL Server <code>CREATE SYNONYM</code> statement examples")

Let’s take some examples of using the `CREATE SYNONYM` statement to get a better understanding.

### A) Creating a synonym within the same database example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/#a-creating-a-synonym-within-the-same-database-example "Anchor for A) Creating a synonym within the same database example")

The following example uses the `CREATE SYNONYM` statement to create a synonym for the `sales.orders` table:

```
CREATE SYNONYM orders FOR sales.orders;
```

Once the `orders` synonym is created, you can reference it in anywhere which you use the target object (`sales.orders` table).

For example, the following query uses the `orders` synonym instead of `sales.orders` table:

```
SELECT * FROM orders;
```

### B) Creating a synonym for a table in another database [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/#b-creating-a-synonym-for-a-table-in-another-database "Anchor for B) Creating a synonym for a table in another database")

First, [create a new database](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-database/) named `test` and set the current database to `test`:

```
CREATE DATABASE test;
GO

USE test;
GO
```

Next, [create a new schema](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-schema/) named `purchasing` inside the `test` database:

```
CREATE SCHEMA purchasing;
GO
```

Then, [create a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) in the `purchasing` schema of the `test` database:

```
CREATE TABLE purchasing.suppliers
(
    supplier_id   INT
    PRIMARY KEY IDENTITY, 
    supplier_name NVARCHAR(100) NOT NULL
);
```

After that, from the `BikeStores` database, create a synonym for the `purchasing.suppliers` table in the `test` database:

```
CREATE SYNONYM suppliers 
FOR test.purchasing.suppliers;
```

Finally, from the `BikeStores` database, refer to the `test.purchasing.suppliers` table using the `suppliers` synonym:

```
SELECT * FROM suppliers;
```

## Listing all synonyms of a database [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/#listing-all-synonyms-of-a-database "Anchor for Listing all synonyms of a database")

You can view all synonyms of a database by using Transact-SQL and SQL Server Management Studio.

### A) Listing synonyms using Transact-SQL command [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/#a-listing-synonyms-using-transact-sql-command "Anchor for A) Listing synonyms using Transact-SQL command")

To list all synonyms of the current database, you query from the `sys.synonyms` catalog view as shown in the following query:

```
SELECT 
    name, 
    base_object_name, 
    type
FROM 
    sys.synonyms
ORDER BY 
    name;
```

Here is the output:

![SQL Server Synonym Example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Synonym-Example.png)

### B) Listing synonyms using SQL Server Management Studio [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/#b-listing-synonyms-using-sql-server-management-studio "Anchor for B) Listing synonyms using SQL Server Management Studio")

From the SQL Server Management Studio, you can view all synonym of the current database via **Synonyms** node as shown in the following picture:

![SQL Server Synonym using SSMS](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Synonym-using-SSMS.png)

## Removing a synonym [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/#removing-a-synonym "Anchor for Removing a synonym")

To remove a synonym, you use the `DROP SYNONYM` statement with the following syntax:

```
DROP SYNONYM [ IF EXISTS ] [schema.] synonym_name  
```

In this syntax:

-   First, specify the synonym name that you want to remove after the `DROP SYNONYM` keywords.

-   Second, use the `IF EXISTS` to conditionally drop the synonym only if it exists. Removing a non-existing synonym without the `IF EXISTS` option will result in an error.

### Removing synonyms example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/#removing-synonyms-example "Anchor for Removing synonyms example")

The following example uses the `DROP SYNONYM` statement to drop the orders synonym:

```
DROP SYNONYM IF EXISTS orders;
```

## When to use synonyms [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/#when-to-use-synonyms "Anchor for When to use synonyms")

You will find some situations which you can effectively use synonyms.

### 1) Simplify object names [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/#1-simplify-object-names "Anchor for 1) Simplify object names")

If you refer to an object from another database (even from a remote server), you can create a synonym in your database and reference to this object as it is in your database.

### 2) Enable seamless object name changes [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/#2-enable-seamless-object-name-changes "Anchor for 2) Enable seamless object name changes")

When you want to [rename a table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-rename-table/) or any other object such as a [view](https://www.sqlservertutorial.net/sql-server-views/), [stored procedure](https://www.sqlservertutorial.net/sql-server-stored-procedures/), [user-defined function](https://www.sqlservertutorial.net/sql-server-user-defined-functions/), or a [sequence](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/), the existing database objects that reference to this table need to be manually modified to reflect the new name. In addition, all current applications that use this table need to be changed and possibly to be recompiled. To avoid all of these hard work, you can rename the table and create a synonym for it to keep existing applications function properly.

## Benefits of synonyms [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/#benefits-of-synonyms "Anchor for Benefits of synonyms")

Synonym provides the following benefit if you use them properly:

-   Provide a layer of abstraction over the base objects.

-   Shorten the lengthy name e.g., a `very_long_database_name.with_schema.and_object_name` with a simplified alias.
-   Allow backward compatibility for the existing applications when you rename database objects such as tables, views, stored procedures, user-defined functions, and sequences.

In this tutorial, you have learned how to about the SQL Server synonyms and how to use them effectively in your applications.

Was this tutorial helpful?

---
Source: [The Ultimate Guide to SQL Server Synonym By Practical Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-synonym/)