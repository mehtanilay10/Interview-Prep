# SQL Server Differential Backup

**Summary**: in this tutorial, you’ll learn about SQL Server differential backup and how to create and restore a differential backup.

## Introduction to the SQL Server differential backup [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-differential-backup/#introduction-to-the-sql-server-differential-backup "Anchor for Introduction to the SQL Server differential backup")

A differential backup is based on the most recent [full backup](https://www.sqlservertutorial.net/sql-server-administration/sql-server-full-backup/). In other words, you only can create a differential backup once you have at least one full backup.

A differential backup captures all the changes since the last full backup. And that full backup is called the base for the differential backup.

The following picture illustrates how the differential backups with full backups:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Differential-Backup.png)

In this picture, we have two full backups and three differential backups.

The first full backup contains id 1 and the second full backup contains id 1, 2, and 3.

The first and second differential backups are performed after the first full backup. Therefore, the first differential backup contains id 2 and the second differential backup contains id 2 and 3.

The third differential backup is made after the second full backup. Hence, it contains only id 4.

### Differential backups vs. full backups [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-differential-backup/#differential-backups-vs-full-backups "Anchor for Differential backups vs. full backups")

A differential backup has the following benefits in comparison with a full backup:

-   Speed – creating a differential backup can be very fast in comparison with creating a full backup because a differential backup captures only data that has changed since the last full backup.

-   Storage – a differential backup requires less storage than a full backup.
-   Less risk of data loss – since a differential backup needs less storage, you can take differential backups more frequently, which decreases the risk of data loss.

However, restoring from a differential backup requires more time than restoring from a full backup because you need to restore from at least two backup files:

-   First, restore from the most recent full backup.

-   Then, restore from a differential backup.

## Creating a differential backup [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-differential-backup/#creating-a-differential-backup "Anchor for Creating a differential backup")

### BACKUP DATABASE statement [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-differential-backup/#backup-database-statement "Anchor for BACKUP DATABASE statement")

To create a differential backup, you use the `BACKUP DATABASE` statement with the option `DIFFERENTIAL` like this:

```
BACKUP DATABASE database_name
TO DISK = path_to_backup_file
WITH DIFFERENTIAL;
```

In this syntax:

-   First, specify the name of the database (`database_name`) that you want to back up after the `BACKUP DATABASE` keywords.

-   Second, specify the path to the backup file (`path_to_backup_file`) in the `TO DISK` clause.

### Create differential backups example [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-differential-backup/#create-differential-backups-example "Anchor for Create differential backups example")

The following example illustrates how to create multiple differential backups of the HR database.

First, switch to the `master` and drop the `HR` database:

```
USE master;
DROP DATABASE IF EXISTS HR;
```

Second, create the `HR` database with the `People` table that has one row:

```
CREATE DATABASE HR;
GO

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

Third, create a full backup of the `HR` database:

```
BACKUP DATABASE HR 
TO  DISK = 'D:\backup\hr.bak'
WITH INIT,
NAME = 'HR-Full Database Backup';
```

The first full backup contains one row with id 1.

Fourth, insert one more row into the `People` table:

```
INSERT INTO People(FirstName, LastName)
VALUES ('Jane', 'Doe')
```

Fifth, create the first differential backup of the `HR` database:

```
BACKUP DATABASE HR
TO  DISK = N'D:\backup\hr.bak' 
WITH  DIFFERENTIAL , 
NAME = N'HR-Differential Database Backup';
```

The backup file now has two backups: one full backup and one differential backup. The different backup contains the row with id 2.

Sixth, insert one more row into the `People` table:

```
INSERT INTO People(FirstName, LastName)
VALUES ('Dach', 'Keon');
```

Seventh, create a second differential backup:

```
BACKUP DATABASE HR
TO  DISK = N'D:\backup\hr.bak' 
WITH  DIFFERENTIAL , 
NAME = N'HR-Differential Database Backup';
```

The second differential backup contains rows with id 2 and 3 because it captures the changes since the last full backup.

Eighth, create a second full backup:

```
BACKUP DATABASE HR 
TO  DISK = 'D:\backup\hr.bak'
WITH NOINIT,
NAME = 'HR-Full Database Backup';
```

The second full backup contains the rows with id 1, 2, and 3.

Ninth, insert one more row into the People table:

```
INSERT INTO People(FirstName, LastName)
VALUES('Dach', 'Keon');
```

Tenth, create a third differential backup:

```
BACKUP DATABASE HR
TO  DISK = N'D:\backup\hr.bak' 
WITH  DIFFERENTIAL , 
NAME = N'HR-Differential Database Backup';
```

The third differential backup contains the row with id 4.

Finally, examine the backup file:

```
RESTORE HEADERONLY   
FROM DISK = N'D:\backup\hr.bak';
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Differential-Backup-example.png)

The backup file contains five backups with two full backups and three differential backups.

## Restore a differential backup [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-differential-backup/#restore-a-differential-backup "Anchor for Restore a differential backup")

To restore the HR database from the backup file, you can restore the second full backup and the last differential backup.

First, drop the `HR` database:

```
USE master;
DROP DATABASE IF EXISTS HR;
```

Second, restore the `HR` database from the second full backup:

```
RESTORE DATABASE HR
FROM  DISK = N'D:\backup\hr.bak'
WITH FILE = 4, NORECOVERY;
```

Note that the file number of the second full backup is 4. The `NORECOVERY` option places the database in the restoring state.

If you use the SSMS, the HR database will look like this:

```
HR (Restoring...)
```

In the restoring state, the database is not accessible.

In other words, use the `NORECOVERY` option if you have more backups to restore. However, if you have no further backup to restore, you need to use the `RECOVERY` option instead.

Third, restore the `HR` database from the last differential backup:

```
RESTORE DATABASE HR
FROM DISK = N'D:\backup\hr.bak'
WITH FILE = 5, RECOVERY;
```

The `FILE=5` instructs the SQL Server to use the last differential backup. And the `RECOVERY` option indicates that you have no further backups to restore.

Finally, select data from the `People` table in the `HR` database:

```
USE HR;
SELECT * FROM people;
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Differential-Backup-Table-Example.png)

If you see 4 rows from the output, you have been successfully restored the database from a differential backup.

## Summary [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-differential-backup/#summary "Anchor for Summary")

-   A differential backup captures the changes since the most recent full backup. And a differential backup is always based on a full backup.

-   Use the `BACKUP DATABASE` statement with the `DIFFERENTIAL` option to create a differential backup.
-   Always restores from the full backup first before restoring from a differential backup.

Was this tutorial helpful?

---
Source: [SQL Server Differential Backup](https://www.sqlservertutorial.net/sql-server-administration/sql-server-differential-backup/)