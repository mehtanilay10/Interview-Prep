# SQL Server BREAK Statement By Example

[Skip to content](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-break/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `BREAK` statement to immediately exit a `WHILE` loop.

In the previous tutorial, you have learned how to use the `[WHILE](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-while/)` statement to create a loop. To exit the current iteration of a loop, you use the `BREAK` statement.

The following illustrates the typical syntax of the `BREAK` statement:

```
WHILE Boolean_expression
BEGIN
    -- statements
   IF condition
        BREAK;
    -- other statements    
END
```

In this syntax, the `BREAK` statement exit the `WHILE` loop immediately once the `condition`  specified in the `[IF](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-if-else/)` statement is met. All the statements between the `BREAK` and `END` keywords are skipped.

Suppose we have a `WHILE` loop nested inside another `WHILE` loop:

```
WHILE Boolean_expression1
BEGIN
    -- statement
    WHILE Boolean_expression2
    BEGIN
        IF condition
            BREAK;
    END
END
```

In this case, the `BREAK` statement only exits the innermost loop in the `WHILE` statement.

Note that the `BREAK` statement can be used only inside the `WHILE` loop. The `IF` statement is often used with the `BREAK` statement but it is not required.

## SQL Server BREAK statement example [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-break/#sql-server-break-statement-example "Anchor for SQL Server <code>BREAK</code> statement example")

The following example illustrates how to use the `BREAK` statement:

```
DECLARE @counter INT = 0;

WHILE @counter <= 5
BEGIN
    SET @counter = @counter + 1;
    IF @counter = 4
        BREAK;
    PRINT @counter;
END
```

Output:

```
1
2
3
```

In this example:

First, we [declared a variable](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/) named `@counter` and set its value to zero.

Then, we used the `WHILE` statement to increases the `@counter` by one in each iteration and print out the `@counter`‘s value as long as the value of the `@counter` is less than or equal to five.

Inside the loop, we also checked if the value of `@counter` equals four, then we exited the loop. In the fourth iteration, the value of the counter reached 4, then the loop is terminated. Also, the `PRINT` statement after the `BREAK` statement was skipped.

In this tutorial, you have learned how to use the SQL Server `BREAK` statement to exit a loop immediately.

Was this tutorial helpful?

---
Source: [SQL Server BREAK Statement By Example](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-break/)