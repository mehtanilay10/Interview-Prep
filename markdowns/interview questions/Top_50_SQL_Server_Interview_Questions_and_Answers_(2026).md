# Top 50 SQL Server Interview Questions and Answers (2026)

Here are SQL Server interview questions and answers for fresher as well as experienced candidates to get their dream job.

---

### 1\. What are the two authentication modes in SQL Server?

There are two authentication modes –

-   Windows Mode

-   Mixed Mode

Modes can be changed by selecting the tools menu of SQL Server configuration properties and choose security page.

[👉 Free PDF Download: SQL Server Interview Questions & Answers](https://www.guru99.com/sql-server-questions.html#cbdf20bed9)

---

### 2\. What Is SQL Profiler?

SQL Profiler is a tool which allows system administrator to monitor events in the SQL server. This is mainly used to capture and save data about each event of a file or a table for analysis.

---

### 3\. What is recursive stored procedure?

SQL Server supports recursive stored procedure which calls by itself. Recursive stored procedure can be defined as a method of problem solving wherein the solution is arrived repetitively. It can nest up to 32 levels.

```
CREATE PROCEDURE [dbo].[Fact]
(
@Number Integer,
@RetVal Integer OUTPUT
)
AS
DECLARE @In Integer
DECLARE @Out Integer
IF @Number != 1
BEGIN
SELECT @In = @Number – 1
EXEC Fact @In, @Out OUTPUT - Same stored procedure has been called again(Recursively)
SELECT @RetVal = @Number * @Out
END
ELSE
BEGIN
SELECT @RetVal = 1
END
RETURN
GO
```

---

### 4\. What are the differences between local and global temporary tables?

-   Local temporary tables are visible when there is a connection, and are deleted when the connection is closed.

```
CREATE TABLE #<tablename>
```

-   Global temporary tables are visible to all users, and are deleted when the connection that created it is closed.

```
CREATE TABLE ##<tablename>
```

---

### 5\. What is CHECK constraint?

A CHECK constraint can be applied to a column in a table to limit the values that can be placed in a column. Check constraint is to enforce integrity.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20471%20374'%3E%3C/svg%3E)

---

### 6\. Can SQL servers linked to other servers?

[SQL server](https://www.guru99.com/sql-server-introduction.html) can be connected to any database which has OLE-DB provider to give a link. Example: Oracle has OLE-DB provider which has link to connect with the SQL server group.

---

### 7\. What is sub query and its properties?

A sub-query is a query which can be nested inside a main query like Select, Update, Insert or Delete statements. This can be used when expression is allowed. Properties of sub query can be defined as

-   A sub query should not have order by clause

-   A sub query should be placed in the right hand side of the comparison operator of the main query
-   A sub query should be enclosed in parenthesis because it needs to be executed first before the main query

-   More than one sub query can be included

---

### 8\. What are the types of sub query?

There are three types of sub query –

-   Single row sub query which returns only one row

-   Multiple row sub query which returns multiple rows
-   Multiple column sub query which returns multiple columns to the main query. With that sub query result, Main query will be executed.

---

### 9\. What is SQL server agent?

The SQL Server agent plays a vital role in day to day tasks of SQL server administrator(DBA). Server agent’s purpose is to implement the tasks easily with the scheduler engine which allows our jobs to run at scheduled date and time.

---

### 10\. What are scheduled tasks in SQL Server?

Scheduled tasks or jobs are used to automate processes that can be run on a scheduled time at a regular interval. This scheduling of tasks helps to reduce human intervention during night time and feed can be done at a particular time. User can also order the tasks in which it has to be generated.

---

### 11\. What is COALESCE in SQL Server?

COALESCE is used to return first non-null expression within the arguments. This function is used to return a non-null from more than one column in the arguments.

Example –

```
Select COALESCE(empno, empname, salary) from employee;
```

---

### 12\. How exceptions can be handled in SQL Server Programming?

Exceptions are handled using TRY—-CATCH constructs and it is handles by writing scripts inside the TRY block and error handling in the CATCH block.

---

### 13\. What is the purpose of FLOOR function?

FLOOR function is used to round up a non-integer value to the previous least integer. Example is given

```
FLOOR(6.7)
```

Returns 6.

---

### 14\. Can we check locks in database? If so, how can we do this lock check?

Yes, we can check locks in the database. It can be achieved by using in-built stored procedure called sp\_lock.

---

### 15\. What is the use of SIGN function?

SIGN function is used to determine whether the number specified is Positive, Negative and Zero. This will return +1,-1 or 0.

Example –

```
SIGN(-35) returns -1
```

---

### 16\. What is a Trigger?

Triggers are used to execute a batch of SQL code when insert or update or delete commands are executed against a table. Triggers are automatically triggered or executed when the data is modified. It can be executed automatically on insert, delete and update operations.  

---

### 17\. What are the types of Triggers?

There are four types of triggers and they are:

-   Insert

-   Delete
-   Update

-   Instead of

---

### 18\. What is an IDENTITY column in insert statements?

IDENTITY column is used in table columns to make that column as Auto incremental number or a surrogate key.

---

### 19\. What is Bulkcopy in SQL?

Bulkcopy is a tool used to copy large amount of data from Tables. This tool is used to load large amount of data in SQL Server.

---

### 20\. What will be query used to get the list of triggers in a database?

Query to get the list of triggers in database-

```
Select * from sys.objects where type='tr'
```

---

### 21\. What is the difference between UNION and UNION ALL?

-   UNION: To select related information from two tables UNION command is used. It is similar to JOIN command.

-   UNION All: The UNION ALL command is equal to the UNION command, except that UNION ALL selects all values. It will not remove duplicate rows, instead it will retrieve all rows from all tables.

---

### 22\. How Global temporary tables are represented and its scope?

Global temporary tables are represented with ## before the table name. Scope will be the outside the session whereas local temporary tables are inside the session. Session ID can be found using @@SPID.

---

## SQL Server Interview Questions and Answers for Experienced

### 23\. What are the differences between Stored Procedure and the dynamic SQL?

Stored Procedure is a set of statements which is stored in a compiled form. Dynamic SQL is a set of statements that dynamically constructed at runtime and it will not be stored in a Database and it simply execute during run time.  

---

### 24\. What is Collation?

Collation is defined to specify the sort order in a table. There are three types of sort order –

1.  Case sensitive
2.  Case Insensitive
3.  Binary

---

### 25\. How can we get count of the number of records in a table?

Following are the queries can be used to get the count of records in a table –

```
Select * from <tablename> Select count(*) from <tablename> Select rows from sysindexes where id=OBJECT_ID(tablename) and indid<2
```

---

### 26\. What is the command used to get the version of SQL Server?

```
Select SERVERPROPERTY('productversion')
```

is used to get the version of SQL Server.

---

### 27\. What is UPDATE\_STATISTICS command?

UPDATE\_STATISTICS command is used to update the indexes on the tables when there is a large amount of deletions or modifications or bulk copy occurred in indexes.

---

### 28\. What is the use of SET NOCOUNT ON/OFF statement?

By default, NOCOUNT is set to OFF and it returns number of records got affected whenever the command is getting executed. If the user doesn’t want to display the number of records affected, it can be explicitly set to ON- (SET NOCOUNT ON).

---

### 29\. Which SQL server table is used to hold the stored procedure scripts?

Sys.SQL\_Modules is a SQL Server table used to store the script of stored procedure. Name of the stored procedure is saved in the table called Sys.Procedures.

---

### 30\. What are Magic Tables in SQL Server?

During DML operations like Insert, Delete, and Update, SQL Server creates magic tables to hold the values during the DML operations. These magic tables are used inside the triggers for data transaction.

---

### 31\. What is the difference between SUBSTR and CHARINDEX in the SQL Server?

The SUBSTR function is used to return specific portion of string in a given string. But, CHARINDEX function gives character position in a given specified string.

```
SUBSTRING('Smiley',1,3)
```

Gives result as Smi

```
CHARINDEX('i', 'Smiley',1)
```

Gives 3 as result as I appears in 3rd position of the string

---

### 32\. How can you create a login?

You can use the following command to create a login

```
CREATE LOGIN MyLogin WITH PASSWORD = '123';
```

---

### 33\. What is ISNULL() operator?

ISNULL function is used to check whether value given is NULL or not NULL in sql server. This function also provides to replace a value with the NULL.

---

### 34\. What is the use of FOR Clause?

FOR clause is mainly used for [XML](https://www.guru99.com/xml-tutorials.html) and browser options. This clause is mainly used to display the query results in XML format or in browser.  

---

### 35\. What will be the maximum number of index per table?

For SQL Server 2008 100 Index can be used as maximum number per table. 1 Clustered Index and 999 Non-clustered indexes per table can be used in SQL Server.

1000 Index can be used as maximum number per table. 1 Clustered Index and 999 Non-clustered indexes per table can be used in SQL Server.

1 Clustered Index and 999 Non-clustered indexes per table can be used in SQL Server.

---

### 36\. What is the difference between COMMIT and ROLLBACK?

Every statement between BEGIN and COMMIT becomes persistent to database when the COMMIT is executed. Every statement between BEGIN and ROOLBACK are reverted to the state when the ROLLBACK was executed.

---

### 37\. What is the difference between varchar and nvarchar types?

Varchar and nvarchar are same but the only difference is that nvarhcar can be used to store Unicode characters for multiple languages and it also takes more space when compared with varchar.

---

### 38\. What is the use of @@SPID?

A @@SPID returns the session ID of the current user process.

---

### 39\. What is the command used to Recompile the stored procedure at run time?

Stored Procedure can be executed with the help of keyword called RECOMPILE.

Example

```
Exe <SPName>  WITH RECOMPILE
```

Or we can include WITHRECOMPILE in the stored procedure itself.

---

### 40\. How to delete duplicate rows in SQL Server?

Duplicate rows can be deleted using CTE and ROW NUMER feature of SQL Server.

---

### 41\. Where are SQL Server user names and passwords stored in SQL Server?

User Names and Passwords are stored in sys.server\_principals and sys.sql\_logins. But passwords are not stored in normal text.

---

### 42\. What is the difference between GETDATE and SYSDATETIME?

Both are same but GETDATE can give time till milliseconds and SYSDATETIME can give precision till nanoseconds. SYSDATE TIME is more accurate than GETDATE.

---

### 43\. How data can be copied from one table to another table?

`INSERT INTO SELECT`

This command is used to insert data into a table which is already created.

`SELECT INTO`

This command is used to create a new table and its structure and data can be copied from existing table.

---

### 44\. What is TABLESAMPLE?

TABLESAMPLE is used to extract sample of rows randomly that are all necessary for the application. The sample rows taken are based on the percentage of rows.

---

### 45\. Which command is used for user defined error messages?

RAISEERROR is the command used to generate and initiates error processing for a given session. Those user defined messages are stored in sys.messages table.

---

### 46\. What do mean by XML Datatype?

XML data type is used to store XML documents in the [SQL Server database](https://www.guru99.com/sql-server-database-create-alter-drop-restore.html). Columns and variables are created and store XML instances in the database.

---

### 47\. What is CDC?

CDC is abbreviated as Change Data Capture which is used to capture the data that has been changed recently. This feature is present in SQL Server 2008.

---

### 48\. What is SQL injection?

SQL injection is an attack by malicious users in which malicious code can be inserted into strings that can be passed to an instance of SQL server for parsing and execution. All statements have to checked for vulnerabilities as it executes all syntactically valid queries that it receives.

Even parameters can be manipulated by the skilled and experienced attackers.

---

### 49\. What are the methods used to protect against SQL injection attack?

Following are the methods used to protect against SQL injection attack:

-   Use Parameters for Stored Procedures

-   Filtering input parameters
-   Use Parameter collection with Dynamic SQL

-   In like clause, user escape characters

---

### 50\. What is Filtered Index?

Filtered Index is used to filter some portion of rows in a table to improve query performance, index maintenance and reduces index storage costs. When the index is created with WHERE clause, then it is called Filtered Index.

These interview questions will also help in your viva(orals)

---
Source: [Top 50 SQL Server Interview Questions and Answers (2026)](https://www.guru99.com/sql-server-questions.html)