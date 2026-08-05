# SQL Server IF ELSE Statement By Examples

**Summary**: in this tutorial, you will learn SQL Server `IF...ELSE` statement to control the flow of program.

The `IF...ELSE` statement is a control-flow statement that allows you to execute or skip a [statement block](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-begin-end/) based on a specified condition.

The following illustrates the syntax of the `IF` statement:

```
IF boolean_expression   
BEGIN
    { statement_block }
END
```

In this syntax, if the `Boolean_expression` evaluates to `TRUE` then the `statement_block` in the `[BEGIN...END](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-begin-end/)` block is executed. Otherwise, the `statement_block` is skipped and the control of the program is passed to the statement after the `END` keyword.

Note that if the Boolean expression contains a `SELECT` statement, you must enclose the `SELECT` statement in parentheses.

The following example first gets the sales amount from the `sales.order_items` table in the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) and then prints out a message if the sales amount is greater than 1 million.

```
BEGIN
    DECLARE @sales INT;

    SELECT 
        @sales = SUM(list_price * quantity)
    FROM
        sales.order_items i
        INNER JOIN sales.orders o ON o.order_id = i.order_id
    WHERE
        YEAR(order_date) = 2018;

    SELECT @sales;

    IF @sales > 1000000
    BEGIN
        PRINT 'Great! The sales amount in 2018 is greater than 1,000,000';
    END
END
```

The output of the code block is:

```
Great! The sales amount in 2018 is greater than 1,000,000
```

Note that you have to click the **Messages** tab to see the above output message:

![](https://www.sqlservertutorial.net/wp-content/uploads/sql-server-if-else-output.png)

## The IF ELSE statement [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-if-else/#the-if-else-statement "Anchor for The <code>IF ELSE</code> statement")

When the condition in the `IF` clause evaluates to `FALSE` and you want to execute another statement block, you can use the `ELSE` clause.

The following illustrates the `IF ELSE` statement:

```
IF Boolean_expression
BEGIN
    -- Statement block executes when the Boolean expression is TRUE
END
ELSE
BEGIN
    -- Statement block executes when the Boolean expression is FALSE
END
```

Each `IF` statement has a condition. If the condition evaluates to `TRUE` then the statement block in the `IF` clause is executed. If the condition is `FALSE`, then the code block in the `ELSE` clause is executed.

See the following example:

```
BEGIN
    DECLARE @sales INT;

    SELECT 
        @sales = SUM(list_price * quantity)
    FROM
        sales.order_items i
        INNER JOIN sales.orders o ON o.order_id = i.order_id
    WHERE
        YEAR(order_date) = 2017;

    SELECT @sales;

    IF @sales > 10000000
    BEGIN
        PRINT 'Great! The sales amount in 2018 is greater than 10,000,000';
    END
    ELSE
    BEGIN
        PRINT 'Sales amount in 2017 did not reach 10,000,000';
    END
END
```

In this example:

First, the following statement sets the total sales in 2017 to the `@sales` variable:

```
    SELECT 
        @sales = SUM(list_price * quantity)
    FROM
        sales.order_items i
        INNER JOIN sales.orders o ON o.order_id = i.order_id
    WHERE
        YEAR(order_date) = 2017;
```

Second, this statement returns the sales to the output:

```
    SELECT @sales;
```

Finally, the `IF` clause checks if the sales amount in 2017 is greater than 10 million. Because the sales amount is less than that, the statement block in the `ELSE` clause executes.

```
    IF @sales > 10000000
    BEGIN
        PRINT 'Great! The sales amount in 2018 is greater than 10,000,000';
    END
    ELSE
    BEGIN
        PRINT 'Sales amount in 2017 did not reach 10,000,000';
    END
```

The following shows the output:

```
Sales amount did not reach 10,000,000
```

### Nested IF...ELSE [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-if-else/#nested-if-else "Anchor for Nested <code>IF...ELSE</code>")

SQL Server allows you to nest an `IF...ELSE` statement within inside another `IF...ELSE` statement, see the following example:

```
BEGIN
    DECLARE @x INT = 10,
            @y INT = 20;

    IF (@x > 0)
    BEGIN
        IF (@x < @y)
            PRINT 'x > 0 and x < y';
        ELSE
            PRINT 'x > 0 and x >= y';
    END			
END
```

In this example:

First, declare two variables @x and @y and set their values to 10 and 20 respectively:

```
DECLARE @x INT = 10,
        @y INT = 20;
```

Second, the output `IF` statement check if `@x` is greater than zero. Because `@x` is set to 10, the condition (`@x > 10`) is true. Therefore, the nested `IF` statement executes.

Finally, the nested `IF` statement check if @x is less than @y ( `@x < @y`). Because `@y` is set to 20,  the condition (`@x < @y`) evaluates to true. The `PRINT 'x > 0 and x < y';` statement in the `IF` branch executes.

Here is the output:

```
x > 0 and x < y
```

It is a good practice to not nest an `IF` statement inside another statement because it makes the code difficult to read and hard to maintain.

In this tutorial, you have learned how to use the SQL Server `IF...ELSE` statement to control the flow of code execution.

Was this tutorial helpful?

---
Source: [SQL Server IF ELSE Statement By Examples](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-if-else/)