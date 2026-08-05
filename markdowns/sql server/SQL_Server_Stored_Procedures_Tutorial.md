# SQL Server Stored Procedures Tutorial

[Skip to content](https://www.sqlservertutorial.net/sql-server-stored-procedures/#primary)

SQL Server stored procedures are used to group one or more Transact-SQL statements into logical units. The stored procedure is stored as a named object in the SQL Server Database Server.

When you call a stored procedure for the first time, SQL Server creates an execution plan and stores it in the cache. In the subsequent executions of the stored procedure, SQL Server reuses the plan to execute the stored procedure very fast with reliable performance.

This tutorial series introduces you to the stored procedures and shows you how to develop flexible stored procedures to optimize database access.

## Section 1. Getting started with SQL Server Stored Procedures [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/#getting-started-with-sql-server-stored-procedures "Anchor for Section 1. Getting started with SQL Server Stored Procedures")

-   [A basic guide to stored procedures](https://www.sqlservertutorial.net/sql-server-stored-procedures/basic-sql-server-stored-procedures/) – show you how to create, execute, modify, and drop a stored procedure in SQL Server.

-   [Parameters](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-stored-procedure-parameters/) – learn how to create stored procedures with parameters, including optional parameters.
-   [Variables](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/)  –  introduce you to Transact-SQL variables and how to manipulate variables in stored procedures.

-   [Output Parameters](https://www.sqlservertutorial.net/sql-server-stored-procedures/stored-procedure-output-parameters/)  – guide you on how to return data from a stored procedure back to the calling program using the output parameters.

## Section 2. Control-of-flow statements [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/#control-of-flow-statements "Anchor for Section 2. Control-of-flow statements")

-   [BEGIN…END](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-begin-end/) – create a statement block that consists of multiple Transact-SQL statements that execute together.

-   [IF ELSE](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-if-else/) – execute a statement block based on a condition.
-   [WHILE](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-while/) – repeatedly execute a set of statements based on a condition as long as the condition is true.

-   [BREAK](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-break/) – exit the loop immediately and skip the rest of the code after it within a loop.
-   [CONTINUE](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-continue/) – skip the current iteration of the loop immediately and continue the next one.

## Section 3. Cursors [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/#cursors "Anchor for Section 3. Cursors")

-   [Cursor](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-cursor/)  – show you how to handle cursors.

## Section 4. Handling Exceptions [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/#handling-exceptions "Anchor for Section 4. Handling Exceptions")

-   [TRY CATCH](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-try-catch/) – learn how to handle exceptions gracefully in stored procedures.

-   [RAISERROR](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-raiserror/) – show you how to generate user-defined error messages and return it back to the application using the same format as the system error.
-   [THROW](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-throw/) – walk you through the steps of raising an exception and transferring the execution to the `CATCH` block of a `TRY CATCH` construct.

## Section 5. Dynamic SQL [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/#dynamic-sql "Anchor for Section 5. Dynamic SQL")

-   [Dynamic SQL](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-dynamic-sql/) – learn how to construct general-purpose and flexible SQL statements using the dynamic SQL technique.

---
Source: [SQL Server Stored Procedures Tutorial](https://www.sqlservertutorial.net/sql-server-stored-procedures/)