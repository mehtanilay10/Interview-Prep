# SQL Server DROP DATABASE Explained By Practical Examples

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-drop-database/#primary)

**Summary**: in this tutorial, you will learn how to delete a database in a SQL Server instance using the `DROP DATABASE` statement and SQL Server Management Studio.

Note that this tutorial uses the `TestDb` and `SampleDb` created in the `[CREATE DATABASE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-database/)` tutorial for the demonstration.

## Using the SQL Server DROP DATABASE statement to delete a database [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-drop-database/#using-the-sql-server-drop-database-statement-to-delete-a-database "Anchor for Using the SQL Server <code>DROP DATABASE</code> statement to delete a database")

To remove an existing database from a SQL Server instance, you use the `DROP DATABASE` statement.

The `DROP DATABASE` statement allows you to delete one or more databases with the following syntax:

```
DROP DATABASE  [ IF EXISTS ]
    database_name 
    [,database_name2,...];
```

In this syntax, you specify the name of the database that you want to drop after the `DROP DATABASE` keywords. If you want to drop multiple databases using a single statement, you can use a comma-separated list of database names after the `DROP DATABASE` clause.

The `IF EXISTS` option is available from SQL Server 2016 (13.x). It allows you to conditionally delete a database only if the database already exists. If you attempt to delete a nonexisting database without specifying the `IF EXISTS` option, SQL Server will issue an error.

Before deleting a database, you must ensure the following important points:

-   First, the `DROP DATABASE` statement deletes the database and also the physical disk files used by the database. Therefore, you should have a backup of the database in case you want to restore it in the future.

-   Second, you cannot drop the database that is currently being used.

Trying to drop a database currently being used causes the following error:

```
Cannot drop database "database_name" because it is currently in use.
```

The following example uses the `DROP DATABASE` statement to delete the `TestDb` database:

```
DROP DATABASE IF EXISTS TestDb;
```

## Using the SQL Server Management Studio to drop a database [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-drop-database/#using-the-sql-server-management-studio-to-drop-a-database "Anchor for Using the SQL Server Management Studio to drop a database")

You can follow these steps to delete the `SampleDb` database:

First, right-click on the database name that you want to delete and choose **Delete** menu item:

![SQL Server DROP DATABASE step 1](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-DROP-DATABASE-step-1.png)

Second, uncheck the **Delete backup and restore history information for databases** check box, check the **Close existing connections** check box, and click the **OK** button to delete the database.

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-DROP-DATABASE-step-2.png)

Third, verify that the database has been dropped from the Object Explorer.

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-DROP-DATABASE-step-3.png)

In this tutorial, you have learned how to use the SQL Server `DROP DATABASE` statement and SQL Server Management Studio to delete databases in an SQL Server instance.

Was this tutorial helpful?

---
Source: [SQL Server DROP DATABASE Explained By Practical Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-drop-database/)