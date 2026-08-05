# SQL Server CONTINUE Statement Demonstrated by Examples

[Skip to content](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-continue/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `CONTINUE` statement to control the flow of the loop.

## Introduction to the SQL Server CONTINUE statement [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-continue/#introduction-to-the-sql-server-continue-statement "Anchor for Introduction to the SQL Server <code>CONTINUE</code> statement")

The `CONTINUE` statement stops the current iteration of the loop and starts the new one. The following illustrates the syntax of the `CONTINUE` statement:

```
WHILE Boolean_expression
BEGIN
    -- code to be executed
    IF condition
        CONTINUE;
    -- code will be skipped if the condition is met
END
```

In this syntax, the current iteration of the loop is stopped once the condition evaluates to `TRUE`. The next iteration of the loop will continue until the `Boolean_expression` evaluates to `FALSE`.

Similar to the `[BREAK](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-break/)` statement, the `CONTINUE` statement is often used in conjunction with an `[IF](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-if-else/)` statement. Note that this is not mandatory though.

## SQL Server CONTINUE example [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-continue/#sql-server-continue-example "Anchor for SQL Server <code>CONTINUE</code> example")

The following example illustrates how the `CONTINUE` statement works.

```
DECLARE @counter INT = 0;

WHILE @counter < 5
BEGIN
    SET @counter = @counter + 1;
    IF @counter = 3
        CONTINUE;	
    PRINT @counter;
END
```

Here is the output:

```
1
2
4
5
```

In this example:

-   First, we [declared a variable](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/) named `@counter` and set its value to zero.

-   Then, the `[WHILE](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-while/)` loop started. Inside the `WHILE` loop, we increased the counter by one in each iteration. If the `@counter` was three, we skipped printing out the value using the `CONTINUE` statement. That’s why in the output, you do not see the number three is showing up.

In this tutorial, you have learned how to use the SQL Server `CONTINUE` statement to skip the current loop iteration and continue the next.

Was this tutorial helpful?

---
Source: [SQL Server CONTINUE Statement Demonstrated by Examples](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-continue/)