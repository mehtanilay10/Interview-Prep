# SQL Server CREATE DATABASE By Practical Examples

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-database/#primary)

**Summary**: in this tutorial, you will learn how to create a new database in SQL Server using `CREATE DATABASE` statement or SQL Server Management Studio.

## Creating a new database using the CREATE DATABASE statement [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-database/#creating-a-new-database-using-the-create-database-statement "Anchor for Creating a new database using the <code>CREATE DATABASE</code> statement")

The `CREATE DATABASE` statement creates a new database. The following shows the minimal syntax of the `CREATE DATABASE` statement:

```
CREATE DATABASE database_name;
```

In this syntax, you specify the name of the database after the `CREATE DATABASE` keyword.

The database name must be unique within an instance of SQL Server. It must also comply with the SQL Server identifier’s rules. Typically, the database name has a maximum of 128 characters.

The following statement creates a new database named `TestDb`:

```
CREATE DATABASE TestDb;
```

Once the statement executes successfully, you can view the newly created database in the **Object Explorer**. If the new database does not appear, you can click the **Refresh** button or press F5 keyboard to update the object list.

![SQL Server CREATE DATABASE example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CREATE-DATABASE-example.png)

This statement lists all databases in the SQL Server:

```
SELECT 
    name
FROM 
    master.sys.databases
ORDER BY 
    name;
```

![SQL Server CREATE DATABASE list all databases](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CREATE-DATABASE-list-all-databases.png)

Or you can execute the stored procedure `sp_databases`:

```
EXEC sp_databases;
```

## Creating a new database using SQL Server Management Studio [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-database/#creating-a-new-database-using-sql-server-management-studio "Anchor for Creating a new database using SQL Server Management Studio")

First, right-click the **Database** and choose **New Database…** menu item.

![SQL Server CREATE DATABASE using SSMS step 1](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CREATE-DATABASE-using-SSMS-step-1.png)

Second, enter the name of the database e.g., **SampleDb** and click the **OK** button.

![SQL Server CREATE DATABASE using SSMS step 2](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CREATE-DATABASE-using-SSMS-step-2.png)

Third, view the newly created database from the Object Explorer:

![SQL Server CREATE DATABASE using SSMS step 3](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CREATE-DATABASE-using-SSMS-step-3.png)

In this tutorial, you have learned how to create a new database using SQL Server `CREATE DATABASE` statement and SQL Server Management Studio.

Was this tutorial helpful?

---
Source: [SQL Server CREATE DATABASE By Practical Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-database/)