# Create a Full Backup of a SQL Server Database

**Summary**: in this tutorial, you’ll learn how to create a full backup of a database and restore a database from the full backup.

## Introduction to SQL Server full backup [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-full-backup/#introduction-to-sql-server-full-backup "Anchor for Introduction to SQL Server full backup")

A full database backup backs up the whole database. It includes the following data:

-   The metadata of the database such as name, creation date, database options, file paths, and so on.

-   The used data pages of every data file.

Also, a full backup includes part of the transaction log. It represents the database at the time the backup is completed.

When doing a full backup, SQL Server may use a significant amount of disk I/O. Therefore, you should perform a full backup at a time when the workload is low e.g., at night.

In practice, you’ll use a full backup as a baseline for a more advanced backup strategy. For example, you can combine a full backup with [transaction log backups](https://www.sqlservertutorial.net/sql-server-administration/sql-server-transaction-log-backup/).

Note that you must perform at least one full backup in order to perform other backup types like [differential backups](https://www.sqlservertutorial.net/sql-server-administration/sql-server-differential-backup/) and [transaction log backups](https://www.sqlservertutorial.net/sql-server-administration/sql-server-transaction-log-backup/).

The following picture illustrates two full backups:

![SQL Server Full Backup](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Full-Backup.png)

In this picture, the first full backup contains id 1 and the second full backup contains id 1, 2, and 3.

To create a full backup of a database, you use the `BACKUP DATABASE` statement with the following syntax:

```
BACKUP DATABASE database_name
TO DISK = path_to_backup_file
WITH options;
```

In this syntax:

-   `database_name` is the name of the database that you want to back up. The database must exist and work normally on the server.

-   `path_to_backup_file` is the path to the backup file. By convention, the extension of the backup is `bak`. If you store the backup file in a folder, that folder must exist because the statement won’t implicitly create the folder for you.
-   `option` that follows the `WITH` keyword specifies one or more options for the backup.

### INIT vs NOINIT [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-full-backup/#init-vs-noinit "Anchor for INIT vs NOINIT")

The INIT option appends to the existing backup on a file while the NOINIT option appends to the most recent backup. The NOINIT is the default option if you don’t specify INIT or NOINIT.

### NAME [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-full-backup/#name "Anchor for NAME")

The `NAME` specifies the name of the backup. By default, the name of the backup is blank.

Besides the `INIT`, `NOINIT`, and `NAME` options, The `BACKUP DATABASE` statement has other options that we’ll cover in the next tutorial.

Let’s take the example of performing a full backup.

First, create the `HR` database with one table called `People` and insert four rows into it:

```
-- drop the HR database
USE master;
DROP DATABASE IF EXISTS HR;

-- create the HR database
CREATE DATABASE HR;
GO

-- create the People table
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

Second, use the `BACKUP DATABASE` statement to back up the `HR` database to the `hr.bak` file located in the `D:\backup\` directory:

```
BACKUP DATABASE HR 
TO  DISK = 'D:\backup\hr.bak'
WITH INIT,
NAME = 'HR-Full Database Backup';
```

Note that the `D:\backup\` folder must exist before running the backup. The `BACKUP DATABASE` statement won’t create the folder.

Also, you’ll find the `hr.bak` file in the `D:\backup` folder.

Third, use the `RESTORE HEADERONLY` to read from the backup file:

```
RESTORE HEADERONLY   
FROM DISK ='D:\backup\hr.bak';
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Full-Backup-backup-file.png)

The output has a lot of information but the important ones are:

-   Backup name

-   Backup Type (1 for full backup)
-   Position: 1

-   Database: HR
-   Backup Size

-   Backup Start Date
-   Backup Finish Date

### Perform multiple full backups in one file [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-full-backup/#perform-multiple-full-backups-in-one-file "Anchor for Perform multiple full backups in one file")

SQL Server allows you to store multiple backups in one backup file. To do that, you need to use the `NOINIT` option in the `WITH` clause. For example:

First, insert a new row into the `People` table:

```
INSERT INTO People (FirstName, LastName)
VALUES ('Bob', 'Climo');
```

Second, perform a second full backup into the same backup file:

```
BACKUP DATABASE HR 
TO  DISK = 'D:\backup\hr.bak'
WITH NOINIT,
NAME = 'HR-Full Database Backup';
```

Third, examine the backup file:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Full-Backup-multiple-backups.png)

The backup file has two full backups. The values in the position column specify the order of the backups. The value 1 indicates the first full backup while the value 2 represents the second full backup.

In the first backup, the `People` table has four rows while in the second backup, the `People` table has five rows.

## Restore a database from a full backup [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-full-backup/#restore-a-database-from-a-full-backup "Anchor for Restore a database from a full backup")

To restore a database, you use the `RESTORE DATABASE` statement.

### The RESTORE DATABASE statement [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-full-backup/#the-restore-database-statement "Anchor for The RESTORE DATABASE statement")

The following shows the syntax of the `RESTORE DATABASE` statement:

```
RESTORE DATABASE database_name
FROM DISK = path_to_backup_file
WITH options;
```

In this syntax:

-   `database_name` is the name of the database to restore.

-   `path_to_backup_file` is the path to the backup file.
-   `options` are one or more options for restoring the database.

Let’s use the `RESTORE DATABASE` statement to restore the `HR` database from the full backup.

### Restoring from the first full backup [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-full-backup/#restoring-from-the-first-full-backup "Anchor for Restoring from the first full backup")

First, switch to the `master` database and drop the `HR` database:

```
USE master;

DROP DATABASE HR;
```

Second, restore the `HR` database from the first full backup:

```
RESTORE DATABASE HR
FROM  DISK = N'D:\backup\hr.bak'
WITH FILE = 1;
```

In this example, we restore the HR database from the backup file `D:\backup\hr.bak`. The value 1 in the `WITH FILE` clause instructs SQL Server to restore the first full backup. It is corresponding to the position of the backup file.

Third, switch to the `HR` database and select data from the `People` table to verify:

```
USE hr;
SELECT * FROM People;
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Full-Backup-restore-from-the-first-full-backup.png)

The query returns four rows as expected.

### Restoring from the second full backup [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-full-backup/#restoring-from-the-second-full-backup "Anchor for Restoring from the second full backup")

First, switch to the `master` database and drop the `HR` database:

```
USE master;
DROP DATABASE HR;
```

Second, restore the `HR` database from the second full backup:

```
RESTORE DATABASE HR
FROM  DISK = N'D:\backup\hr.bak'
WITH FILE = 2;
```

The value 2 in the `WITH FILE` clause instructs SQL Server to restore the second backup from the backup file.

Third, switch to the `HR` database and select data from the `People` table to verify:

```
USE hr;
SELECT * FROM People;
```

Output:

![SQL Server Full Backup - restore from the second full backup](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Full-Backup-restore-from-the-second-full-backup.png)

The query returns five rows as expected.

## Summary [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-full-backup/#summary "Anchor for Summary")

-   Use the `BACKUP DATABASE` statement to create a full backup for a database.

-   Use the `WITH INIT` option to overwrite the backup and the `WITH NOINIT` option to append to the existing backup file.
-   Use the `RESTORE DATABASE` statement to restore a database from a full backup.

Was this tutorial helpful?

---
Source: [Create a Full Backup of a SQL Server Database](https://www.sqlservertutorial.net/sql-server-administration/sql-server-full-backup/)