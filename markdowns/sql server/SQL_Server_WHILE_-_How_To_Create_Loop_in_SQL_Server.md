# SQL Server WHILE - How To Create Loop in SQL Server

[Skip to content](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-while/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `WHILE` statement to execute a statement block repeatedly based on a specified condition.

## Overview of WHILE statement [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-while/#overview-of-while-statement "Anchor for Overview of <code>WHILE</code> statement")

The `WHILE` statement is a control-flow statement that allows you to execute a statement block repeatedly as long as a specified condition is `TRUE`.

The following illustrates the syntax of the `WHILE` statement:

```
WHILE Boolean_expression   
     { sql_statement | statement_block}  
```

In this syntax:

First, the `Boolean_expression` is an expression that evaluates to `TRUE` or `FALSE`.

Second, `sql_statement | statement_block` is any Transact-SQL statement or a set of Transact-SQL statements. A statement block is defined using the `[BEGIN...END](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-begin-end/)` statement.

If the `Boolean_expression` evaluates to `FALSE` when entering the loop, no statement inside the `WHILE` loop will be executed.

Inside the `WHILE` loop, you must change some [variables](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/) to make the `Boolean_expression` returns `FALSE` at some points. Otherwise, you will have an indefinite loop.

Note that if the `Boolean_expression` contains a `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement, it must be enclosed in parentheses.

To exit the current iteration of the loop immediately, you use the `[BREAK](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-break/)` statement. To skip the current iteration of the loop and start the new one, you use the `[CONTINUE](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-continue/)` statement.

## SQL Server WHILE example [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-while/#sql-server-while-example "Anchor for SQL Server <code>WHILE</code> example")

Let’s take an example of using the SQL Server `WHILE` statement to understand it better.

The following example illustrates how to use the `WHILE` statement to print out numbers from 1 to 5:

```
DECLARE @counter INT = 1;

WHILE @counter <= 5
BEGIN
    PRINT @counter;
    SET @counter = @counter + 1;
END
```

Output:

```
1
2
3
4
5
```

In this example:

-   First, we declared the `@counter` [variable](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/) and set its value to one.

-   Then, in the condition of the `WHILE` statement, we checked if the `@counter`is less than or equal to five. If it was not, we printed out the `@counter` and increased its value by one. After five iterations, the `@counter` is 6 which caused the condition of the `WHILE` clause evaluates to `FALSE`, the loop stopped.

To learn how to use the `WHILE` loop to process row by row, check it out the [cursor](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-cursor/) tutorial.

In this tutorial, you have learned how to use the SQL Server `WHILE` statement to repeat the execution of a statement block based on a specified condition.

Was this tutorial helpful?

---
Source: [SQL Server WHILE - How To Create Loop in SQL Server](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-while/)