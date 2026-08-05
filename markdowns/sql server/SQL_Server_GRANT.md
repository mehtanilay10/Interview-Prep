# SQL Server GRANT

**Summary**: in this tutorial, you’ll learn how to use the SQL Server `GRANT` statement to grant permissions on a database object to a user.

## Introduction to the SQL Server GRANT statement [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-grant/#introduction-to-the-sql-server-grant-statement "Anchor for Introduction to the SQL Server GRANT statement ")

Once [creating a user](https://www.sqlservertutorial.net/sql-server-administration/sql-server-create-user/) using the `CREATE USER` statement, the user doesn’t have any permissions on the database objects like tables, [views](https://www.sqlservertutorial.net/sql-server-views/), and [indexes](https://www.sqlservertutorial.net/sql-server-indexes/).

To allow the user to interact with the database objects, you need to grant permissions to the user. For example, you can grant permissions so that the user can select data from a table. To grant permissions to a user, you use the `GRANT` statement.

The `GRANT` statement allows you to grant permissions on a **securable** to a **principal**.

-   A securable is a resource to which the SQL Server authorization system regulates access. For example, a table is a securable.

-   A principal is an entity that can request the SQL Server resource. For example, a user is a principal in SQL Server.

Here’s the basic syntax of the SQL Server `GRANT` statement:

```
GRANT permissions
ON securable TO principal;
```

In this syntax:

-   First, specify one or more permissions after the `GRANT` keywords. If you have multiple permissions, you need to use a comma to separate the permissions.

-   Second, specify a securable after the `ON` keyword.
-   Third, specify the principal after the `TO` keyword.

## SQL Server GRANT example [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-grant/#sql-server-grant-example "Anchor for SQL Server GRANT example")

Let’s take a look at an example of using the `GRANT` statement.

First, create the `HR` database with a `People` table:

```
USE master;
GO

DROP DATABASE IF EXISTS HR;
GO

CREATE DATABASE HR;
GO

USE HR;

CREATE TABLE People (
  Id int IDENTITY PRIMARY KEY,
  FirstName varchar(50) NOT NULL,
  LastName varchar(50) NOT NULL
);

INSERT INTO People (FirstName, LastName)
  VALUES ('John', 'Doe'),
  ('Jane', 'Doe'),
  ('Upton', 'Luis'),
  ('Dach', 'Keon');
```

Second, create a login with the name `peter`:

```
CREATE LOGIN peter
WITH PASSWORD='XUnVe2di45.';
```

Third, create a user `peter` in the HR database for the `peter` login:

```
USE HR;

CREATE USER peter
FOR LOGIN peter;
```

Fourth, connect the SQL Server using the peter user. And you’ll see that the user `peter` can access the HR database but cannot view any tables.

Fifth, switch to the system administrator connection and grant the `SELECT` permission to the user `peter` on the `People` table:

```
GRANT SELECT 
ON People TO peter;
```

Sixth, the user `peter` can see the `People` table and select data from it. For example:

```
SELECT * FROM People;
```

However, the user `peter` cannot insert data into the `People` table:

```
INSERT INTO People(FirstName, LastName)
VALUES('Tony','Blair');
```

SQL Server issues the following errors:

```
The INSERT permission was denied on the object 'People', database 'HR', schema 'dbo'.
```

Similarly, the user `peter` also cannot delete data from the `People` table:

```
DELETE FROM People
WHERE Id = 1;
```

Error:

```
The DELETE permission was denied on the object 'People', database 'HR', schema 'dbo'.
```

Fifth, grant the `INSERT` and `DELETE` permissions on the `People` table to the user `peter`:

```
GRANT INSERT, DELETE
ON People TO peter;
```

Sixth, switch to the user `peter`‘s connection and insert a new row into the `People` table:

```
INSERT INTO People(FirstName, LastName)
VALUES('Tony','Blair');
```

Now, the user `peter` can insert data into and delete data from the `People` table.

## Summary [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-grant/#summary "Anchor for Summary")

-   Use the `GRANT` statement to grant permissions on a securable to a principal.

Was this tutorial helpful?

---
Source: [SQL Server GRANT](https://www.sqlservertutorial.net/sql-server-administration/sql-server-grant/)