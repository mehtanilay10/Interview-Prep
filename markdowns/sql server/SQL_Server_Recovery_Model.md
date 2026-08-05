# SQL Server Recovery Model

**Summary**: in this tutorial, you’ll learn about the recovery model in SQL Server including simple, full, and bulk-logged.

## Introduction to the SQL Server recovery model [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-recovery-model/#introduction-to-the-sql-server-recovery-model "Anchor for Introduction to the SQL Server recovery model")

A recovery model is a property of a database. A recovery model controls the following:

-   How SQL Server logs the transactions for the database.

-   Whether the transaction log of the database requires backing up.
-   What kind of restore operations are available for restoring the database.

SQL Server provides you with three recovery models:

-   Simple

-   Full
-   Bulk-logged

When you create a new database, SQL Server uses the **model** database to set the default recovery model of the new database.

Let’s create a sample database for the demonstration.

First, [create a new database](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-database/) called `HR`:

```
CREATE DATABASE HR;
```

Second, switch the current database to `HR`:

```
USE HR;
```

Third, create a new table `People` in the `HR` database:

```
CREATE TABLE People (
  Id int IDENTITY PRIMARY KEY,
  FirstName varchar(50) NOT NULL,
  LastName varchar(50) NOT NULL
);
```

Finally, insert some rows into the People table:

```
INSERT INTO People (FirstName, LastName)
  VALUES ('John', 'Doe'),
  ('Jane', 'Doe'),
  ('Upton', 'Luis'),
  ('Dach', 'Keon');
```

The following shows the complete script:

```
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

SELECT * FROM People;
```

### Viewing the recovery model of a database [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-recovery-model/#viewing-the-recovery-model-of-a-database "Anchor for Viewing the recovery model of a database")

To view the recovery model of the `HR` database, you use the following query:

```
SELECT
  name,
  recovery_model_desc
FROM master.sys.databases
WHERE name = 'HR';
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/sql-server-recovery-model.png)

The HR database has the `FULL` recovery model.

To view the recovery model of all the databases in the current server, you use the following query:

```
SELECT
  name,
  recovery_model_desc
FROM master.sys.databases
ORDER BY name;
```

### Changing the recovery model [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-recovery-model/#changing-the-recovery-model "Anchor for Changing the recovery model")

To change the recovery model to another, you use the `ALTER DATABASE` following statement:

```
ALTER DATABASE database_name 
SET RECOVERY recovery_model;
```

In this statement:

-   First, specify the database name that you want to change the recovery model after the `ALTER DATABASE` keyword.

-   Second, specify the recovery model after the `SET RECOVERY` keywords. The recovery model can be one of the following: `SIMPLE`, `FULL`, and `BULK_LOGGED`.

The following example changes the recovery model of the `HR` database from `FULL` to `SIMPLE`:

```
ALTER DATABASE HR
SET RECOVERY SIMPLE;
```

Let’s look into each recovery model in detail.

## SIMPLE recovery model [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-recovery-model/#simple-recovery-model "Anchor for SIMPLE recovery model")

In the `SIMPLE` recovery model, SQL Server deletes transaction logs from the transaction log files at every checkpoint. This results in relatively small transaction log files.

Also, in the `SIMPLE` recovery model, the transaction logs do not store the transaction records. Therefore, you won’t able to use advanced backup strategies to minimize data loss.

In practice, you use the `SIMPLE` recovery model for the database that could be reloaded from other sources such as databases for reporting purposes.

In the `FULL` recovery model, SQL Server keeps the transaction logs in the transaction log files until the `BACKUP LOG` statement is executed. In other words, the `[BACKUP LOG](https://www.sqlservertutorial.net/sql-server-administration/sql-server-transaction-log-backup/)` statement deletes the transaction logs from the transaction log files.

If you don’t run the `BACKUP LOG` statement regularly, SQL Server keeps all transaction logs in the transaction log files until the transaction log files are full and the database is inaccessible. This is why you need to run the `BACKUP LOG` statement at a regular interval to keep the transaction log files from being full.

In short, the `FULL` recovery model allows you to restore the database at any point in time.

## BULK\_LOGGED recovery model [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-recovery-model/#bulk_logged-recovery-model "Anchor for BULK_LOGGED recovery model")

The `BULK_LOGGED` recovery model has almost the same behaviors as the `FULL` recovery model except for bulk-logged operations. For example, the `BULK INSERT` of flat files into tables are described briefly in the transaction log files.

The `BULK_LOGGED` recovery model doesn’t allow you to restore the database at any point in time. A practical scenario of the `BULK_LOGGED` recovery is as follows:

-   Before periodical data load, set the recovery model to `BULK_LOGGED`

-   Load the data into the database
-   Set the recovery model back to `FULL` after completing the data load

-   Back up the database

The following table shows the characteristic of all recovery models:

| Recovery Model | Description | Data Loss | Point in time recovery |
| --- | --- | --- | --- |
| Simple | No log backups | Changes since the most recent backup are lost | Can recover **only** to the end of a backup. |
| Full | Require Log Backups | Typically None | Can recover to a specific point in time with an assumption that backups are complete up to that point in time. |
| Bulk Logged | Require log backups | If the log is damaged or bulk-logged operations occurred since the most recent log backup, changes since that last backup must be redone.

Otherwise, no work is lost. | Can recover to the end of any backup.  
Point-in-time recovery is not supported. |

## Summary [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-recovery-model/#summary "Anchor for Summary")

-   A recovery model is a database’s property that controls how transactions are logged.

-   A recovery model can be one of the following: `SIMPLE`, `FULL`, and `BULK_LOGGED`.
-   Use the `SIMPLE` recovery model for the databases whose data can be reloaded from other sources.

-   Use the `FULL` recovery model if you want to recover the database at any point in time.
-   Use the `BULK_LOGGED` recovery model for the bulk-logged operations like the `BULK INSERT`.

Was this tutorial helpful?

---
Source: [SQL Server Recovery Model](https://www.sqlservertutorial.net/sql-server-administration/sql-server-recovery-model/)