# SQL Server Transaction Log Backup

**Summary**: in this tutorial, you’ll learn about the transaction log backup and how to restore a database from a transaction log backup.

## Introduction to the SQL Server transaction log backup [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-transaction-log-backup/#introduction-to-the-sql-server-transaction-log-backup "Anchor for Introduction to the SQL Server transaction log backup")

When the [recovery model](https://www.sqlservertutorial.net/sql-server-administration/sql-server-recovery-model/) of a database is `FULL` or `BULK_LOGGED`, you can back up the transaction log of the database.

Before creating a transaction log backup, you need to create at least one [full backup](https://www.sqlservertutorial.net/sql-server-administration/sql-server-full-backup/). After that, you can create any number of transaction log backups.

It’s a good practice to take transaction log backups more frequently to:

-   Minimize the data loss

-   Truncate the log files

Typically, you [create a full backup](https://www.sqlservertutorial.net/sql-server-administration/create-a-full-backup-of-a-sql-server-database/) occasionally such as weekly and create a series of [differential backups](https://www.sqlservertutorial.net/sql-server-administration/sql-server-differential-backup/) at a shorter interval like daily. Independent of the database backups, you create the transaction log at more frequent intervals such as hourly.

The following picture illustrates transaction log backup:

![SQL Server Transaction Log Backup](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Transaction-Log-Backup.png)

In this picture we have:

-   Two full backups

-   Three transaction log backups

The first full backup contains id 1 and the second full backup contains id 1, 2, and 3.

The first transaction log backup contains id 2 and the second transaction log backup contains id 3, and the third transaction log backup contains id 3.

Note that the transaction log backups do not contain duplicate data like a full backup or differential backup.

## Create a transaction log backup using T-SQL [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-transaction-log-backup/#create-a-transaction-log-backup-using-t-sql "Anchor for Create a transaction log backup using T-SQL")

To create a transaction log backup, you use the `BACKUP LOG` statement:

```
BACKUP LOG database_name
TO DISK = path_to_backup_file
WITH options;
```

In this statement:

-   First, specify the name of the database to back up the transaction log. The database must exist and be in an online state.

-   Second, specify the path to the backup log file. The path must exist in the filesystem.
-   Third, specify additional backup options in the `WITH` clause.

Let’s take an example of taking transaction log backups and recovering the database from them.

### 1) Create a transaction log backup example [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-transaction-log-backup/#1-create-a-transaction-log-backup-example "Anchor for 1) Create a transaction log backup example")

First, drop the `HR` database:

```
USE master;
DROP DATABASE IF EXISTS HR;
```

Second, create the new `HR` database:

```
CREATE DATABASE HR;
GO
```

Third, ensure the `HR` database is in the `FULL` recovery mode to perform a transaction log backup:

```
ALTER DATABASE HR 
SET RECOVERY FULL;
```

Fourth, create the `People` table and insert a row:

```
USE HR;
GO

CREATE TABLE People (
  Id int IDENTITY PRIMARY KEY,
  FirstName varchar(50) NOT NULL,
  LastName varchar(50) NOT NULL
);

INSERT INTO People (FirstName, LastName)
VALUES ('John', 'Doe');
```

Fifth, create a full backup:

```
BACKUP DATABASE HR 
TO  DISK = 'D:\backup\hr.bak'
WITH INIT,
NAME = 'HR-Full Database Backup';
```

Sixth, insert one more row into the `People` table:

```
INSERT INTO People(FirstName, LastName)
VALUES ('Jane', 'Doe');
```

Seventh, create the first transaction log backup:

```
BACKUP LOG HR
TO  DISK = N'D:\backup\hr.bak' 
WITH NAME = N'HR-Transaction Log Backup';
```

Eighth, insert another row into the `People` table:

```
INSERT INTO People(FirstName, LastName)
VALUES ('Upton', 'Luis');
```

Ninth, create the second transaction log backup:

```
BACKUP LOG HR
TO  DISK = N'D:\backup\hr.bak' 
WITH NAME = N'HR-Transaction Log Backup';
```

Tenth, create the second full backup:

```
BACKUP DATABASE HR 
TO  DISK = 'D:\backup\hr.bak'
WITH NOINIT,
NAME = 'HR-Full Database Backup';
```

Eleventh, insert another row into the `People` table:

```
INSERT INTO People(FirstName, LastName)
VALUES('Dach', 'Keon');
```

Finally, view the backup file:

```
RESTORE HEADERONLY   
FROM DISK = N'D:\backup\hr.bak';
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Transaction-Log-Backup-History.png)

### 2) Restore a database from a transaction log backup [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-transaction-log-backup/#2-restore-a-database-from-a-transaction-log-backup "Anchor for 2) Restore a database from a transaction log backup")

To recover the database, you can restore the second full backup (position 4) and the last transaction log backup (position 5).

First, drop the HR database:

```
USE master;
DROP DATABASE HR;
```

Second, restore the database from the second full backup:

```
RESTORE DATABASE HR
FROM  DISK = N'D:\backup\hr.bak'
WITH FILE = 4, NORECOVERY;
```

In this statement, the number 4 specifies the second full backup in the backup file. The `NORECOVERY` puts the database in the restoring state so that you can restore the transaction log backup.

Third, restore the transaction log backup using the `RESTORE LOG` statement:

```
RESTORE LOG HR
FROM DISK = N'D:\backup\hr.bak'
WITH FILE = 5, RECOVERY;
```

In this statement, the number 5 indicates the last transaction log backup. The RECOVERY indicates that there is no further backup to restore. Hence, the database is accessible after the restoration completes.

Finally, switch the current database to `HR` and select data from the `People` table:

```
USE HR;
SELECT * FROM people;
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Transaction-Log-Table-Example.png)

The `People` table has four rows indicating that you’ve successfully recovered the database from the full backup and transaction log backup.

## Summary [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-transaction-log-backup/#summary "Anchor for Summary")

-   To back up a transaction log, the recovery model of the database must be either `FULL` or `BULK_LOGGED`.

-   A transaction log backup contains a transaction log of a database.
-   Use the `BACKUP LOG` statement to back up the transaction logs.

-   Use the `RESTORE LOG` to recover the database from the transaction log backups.

Was this tutorial helpful?

---
Source: [SQL Server Transaction Log Backup](https://www.sqlservertutorial.net/sql-server-administration/sql-server-transaction-log-backup/)