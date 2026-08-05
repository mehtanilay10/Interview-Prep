# SQL Server Triggers Tutorial

[Skip to content](https://www.sqlservertutorial.net/sql-server-triggers/#primary)

SQL Server triggers are special [stored procedures](https://www.sqlservertutorial.net/sql-server-stored-procedures/) that are executed automatically in response to the database object, database, and server events. SQL Server provides three type of triggers:

-   Data manipulation language (DML) triggers which are invoked automatically in response to `[INSERT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/)`, `[UPDATE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/)`, and `[DELETE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-delete/)` events against tables.

-   Data definition language (DDL) triggers which fire in response to `[CREATE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/)`, `ALTER`, and `[DROP](https://www.sqlservertutorial.net/sql-server-basics/sql-server-drop-table/)` statements. [DDL triggers](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-ddl-trigger/) also fire in response to some system stored procedures that perform DDL-like operations.
-   Logon triggers which fire in response to `LOGON` events

In this section, you will learn how to effectively use triggers in SQL Server.

-   [Creating a trigger in SQL Server](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-create-trigger/) – show you how to create a trigger in response to insert and delete events.

-   [Creating an INSTEAD OF trigger](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-instead-of-trigger/) – learn about the `INSTEAD OF` trigger and its practical applications.
-   [Creating a DDL trigger](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-ddl-trigger/) – learn how to create a DDL trigger to monitor the changes made to the structures of database objects such as tables, views, and indexes.

-   [Disabling triggers](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-disable-trigger/) – learn how to disable a trigger of a table temporarily so that it does not fire when associated events occur.
-   [Enabling triggers](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-enable-trigger/) – show you how to enable a trigger.

-   [Viewing the definition of a trigger](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-view-trigger-definition/) – provide you with various ways to view the definition of a trigger.
-   [Listing all triggers in SQL Server](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-list-all-triggers/) – show you how to list all triggers in a SQL Server by querying data from the sys.triggers view.

-   [Removing triggers](https://www.sqlservertutorial.net/sql-server-triggers/sql-server-drop-trigger/) – guide you how to drop one or more existing trigger.

---
Source: [SQL Server Triggers Tutorial](https://www.sqlservertutorial.net/sql-server-triggers/)