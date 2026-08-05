# SQL Server System Databases

[Skip to content](https://www.sqlservertutorial.net/sql-server-administration/sql-server-system-databases/#primary)

**Summary**: in this tutorial, you’ll learn about the SQL Server system databases and their purposes.

## Introduction to the SQL Server system databases [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-system-databases/#introduction-to-the-sql-server-system-databases "Anchor for Introduction to the SQL Server system databases")

By default, SQL Server provides you with four main systems databases:

-   master

-   msdb
-   model

-   tempdb

### master [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-system-databases/#master "Anchor for master")

The `master` database stores all the system-level information of an SQL Server instance, which includes:

-   Server configuration settings

-   Logon accounts
-   Linked servers information

-   Startup stored procedure
-   File locations of user databases

If the `master` database is unavailable, the SQL Server cannot start. When you work with the `master` database, you should:

First, always have a current backup of the `master` database. If the `master` database is corrupted, you can restore it from the backup.

Second, back up the `master` database as soon as possible after the following operations:

-   [Creating](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-database/), modifying, and [dropping](https://www.sqlservertutorial.net/sql-server-basics/sql-server-drop-database/) any database

-   Changing the server configurations
-   Update the logon accounts including adding, removing, and modifying

Third, do not create user objects in the `master` database.

Finally, do not set the `TRUSTWORTHY` database property of the master to `ON`.

Note that if the `TRUSTWORTHY` database property is `ON`, the SQL Server will trust the database and the contents within it, which increases the security risk. By default, the `TRUSTWORTHY` is `OFF`. [More information on the TRUSTWORTHY option.](https://docs.microsoft.com/en-us/sql/relational-databases/security/trustworthy-database-property)

### msdb [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-system-databases/#msdb "Anchor for msdb")

The `msdb` is used by the SQL Server Agent for scheduling jobs and alerts. Also, it stores the history of the SQL Agent jobs.

The `msdb` supports the following:

-   Jobs & alerts

-   Database Mail
-   Service Broker

-   And the backup & restore history for the databases

### model [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-system-databases/#model "Anchor for model")

SQL Server uses the `model` database as the template for creating other databases.

When you [create a new database](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-database/), SQL Server copies the contents of the `model` database including database options to the new database.

If you modify the `model` database, all databases that you create afterward will take these changes.

Whenever SQL Server starts, it creates the `tempdb` from the `model` database. Therefore, the `model` database must always exist on the SQL Server.

### tempdb [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-system-databases/#tempdb "Anchor for tempdb")

The `tempdb` database stores temporary user objects that you explicitly create like [temporary tables](https://www.sqlservertutorial.net/sql-server-basics/sql-server-temporary-tables/) and [table variables](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-variables/).

Also, the `tempdb` stores the internal objects that the database engine creates. For example, the `tempdb` database stores the immediate sort results for running the queries that include the `[ORDER BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/)` clause.

SQL Server recreates the `tempdb` database every time it starts. Since the `tempdb` is non-permanent storage, you cannot back it up or restore it.

## Summary [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-system-databases/#summary "Anchor for Summary")

-   SQL Server provides four system databases including `master`, `msdb`, `model`, and `tempdb`.

-   The `master` system database stores system-level information of the SQL server instance.
-   The `msdb` database is used by SQL Server Agent for jobs & alerts.

-   The `model` database is served as a template for creating other databases.
-   The `tempdb` system database stores the temporary objects and is recreated every time the SQL Server starts.

Was this tutorial helpful?

---
Source: [SQL Server System Databases](https://www.sqlservertutorial.net/sql-server-administration/sql-server-system-databases/)