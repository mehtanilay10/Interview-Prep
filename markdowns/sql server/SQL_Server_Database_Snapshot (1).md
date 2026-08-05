# SQL Server Database Snapshot

**Summary**: in this tutorial, you’ll learn about SQL Server database snapshots and how to create a database snapshot using T-SQL.

## Introduction to the SQL Server Database Snapshot [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-database-snapshot/#introduction-to-the-sql-server-database-snapshot "Anchor for Introduction to the SQL Server Database Snapshot")

A database snapshot is a read-only, static view of a database in an SQL Server instance. The database from which you create a snapshot is called a source database.

The database snapshot captures the state of the source database at the moment of the snapshot’s creation.

When you create a snapshot of a source database, the snapshot is empty:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Database-snapshot-creation-time.png)

However, when you modify the source database, SQL Server copies the changes to the snapshot. In other words, the size of the snapshot grows as you make changes to the source database:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Database-snapshot-modification-of-the-source-database.png)

A database can have multiple snapshots that persist until you explicitly drop them.

Here’s are the database snapshot features:

-   Database snapshots are dependent on the source databases. If the source databases are corrupted, the snapshots will be inaccessible.

-   Database snapshots reside on the same SQL Server instance as the source database.
-   Database snapshots operate at the data-page level. Before you make a change to a page of a source database, SQL Server copies it from the source database to the snapshot. As the result, the snapshot preserves the records of the source database as they existed when the snapshot was created.

It’s important to note that database snapshots cannot help protect against disk errors or other types of corruption. In other words, snapshots are not substitutes for [backups](https://www.sqlservertutorial.net/sql-server-administration/sql-server-backup-types/).

## Creating a database snapshot [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-database-snapshot/#creating-a-database-snapshot "Anchor for Creating a database snapshot")

Let’s take a look at an example of creating a database snapshot.

First, [create a new database](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-database/) called `HR` with one table `Employees`:

```
CREATE DATABASE HR;
GO

USE HR;

CREATE TABLE Employees (
  Id int IDENTITY PRIMARY KEY,
  FirstName varchar(50) NOT NULL,
  LastName varchar(50) NOT NULL
);

INSERT INTO Employees (FirstName, LastName)
  VALUES ('John', 'Doe'),
  ('Jane', 'Doe');
```

Second, use the `CREATE DATABASE ... AS SNAPSHOT` to create a snapshot of the `HR` database:

```
CREATE DATABASE HR_Snapshots 
ON ( NAME = HR, FILENAME = 'D:\snapshots\hr.ss')  
AS SNAPSHOT OF HR; 
```

Note that the `D:\snapshots` folder must exist so that the above command can execute successfully.

To view the database snapshot on SSMS, you expand the **Databases > Database Snapshots:**

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Database-snapshot.png)

Third, [delete a row](https://www.sqlservertutorial.net/sql-server-basics/sql-server-delete/) with id 1 from the `Employees` table of the HR database:

```
DELETE FROM Employees 
WHERE Id = 1;
```

Fourth, [query data](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/) from the `Employees` table:

```
SELECT * FROM Employees;
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Database-snapshot-querying-data-from-the-source-database.png)

Fifth, query data from the `Employees` of the `HR_Snapshots` database:

```
USE HR_Snapshots;

SELECT * FROM Employees;
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Database-snapshot-querying.png)

The output shows the data of the Employees table at the time we created the snapshot of the HR database.

Sixth, restore the `HR` database from the `HR_Snapshots` database:

```
USE master;

RESTORE DATABASE HR
FROM DATABASE_SNAPSHOT='HR_Snapshots';
```

Seventh, query data from the `Employees` table of the `HR` database:

```
USE HR;

SELECT * FROM Employees;
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Database-snapshot-querying.png)

The output shows that the table has been recovered from the snapshot.

## Why Database Snapshots [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-database-snapshot/#why-database-snapshots "Anchor for Why Database Snapshots")

Database snapshots can be useful for managing a test database. Before running a test, you can create a snapshot on the test database. After each test run, you can use the database snapshot to quickly revert the database to its original state.

Database snapshots safeguard data against administrative error. Before doing a major update to the database, you can create a snapshot. If you make a mistake, you can use the snapshot to recover the database by reverting the database to the snapshot. Reverting may be much faster than restoring from a backup.

Database snapshots can be used for reporting purposes. For example, you can create a snapshot of a database at month-end, and keep updating the source database with the new transactions. Since the snapshot stores the data at the time you created the snapshot, you can create the month-end reports by querying the snapshot.

## Summary [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-database-snapshot/#summary "Anchor for Summary")

-   A database snapshot is a read-only, static view of a database.

-   Use the `CREATE DATABASE ... AS SNAPSHOT` statement to create a database snapshot.
-   Use the `RESTORE DATABASE ... FROM DATABASE_SNAPSHOT` to restore a database from a snapshot.

Was this tutorial helpful?

---
Source: [SQL Server Database Snapshot](https://www.sqlservertutorial.net/sql-server-administration/sql-server-database-snapshot/)