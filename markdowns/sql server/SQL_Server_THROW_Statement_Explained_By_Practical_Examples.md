# SQL Server THROW Statement Explained By Practical Examples

**Summary**: in this tutorial, you will learn how to use the SQL Server `THROW` statement to raise an exception.

The `THROW` statement raises an exception and transfers execution to a `CATCH` block of a `[TRY CATCH](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-try-catch/)` construct.

The following illustrates the syntax of the `THROW` statement:

```
THROW [ error_number ,  
        message ,  
        state ];
```

In this syntax:

### error\_number [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-throw/#error_number "Anchor for error_number")

The `error_number` is an integer that represents the exception. The `error_number` must be greater than `50,000` and less than or equal to `2,147,483,647`.

### message [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-throw/#message "Anchor for message")

The `message` is a string of type `NVARCHAR(2048)` that describes the exception.

### state [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-throw/#state "Anchor for state")

The `state` is a `TINYINT` with the value between 0 and 255. The `state` indicates the state associated with the message.

If you don’t specify any parameter for the `THROW` statement, you must place the `THROW` statement inside a `CATCH` block:

```
BEGIN TRY
    -- statements that may cause errors
END TRY
BEGIN CATCH
    -- statement to handle errors 
    THROW;   
END CATCH
```

In this case, the `THROW` statement raises the error that was caught by the `CATCH` block.

Note that the statement before the `THROW` statement must be terminated by a semicolon (;)

##  THROW vs. RAISERROR [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-throw/#throw-vs-raiserror "Anchor for  <code>THROW </code>vs. <code>RAISERROR</code>")

The following table illustrates the difference between the `THROW` statement and `[RAISERROR](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-raiserror/)` statement:

| RAISERROR | THROW |
| --- | --- |
| The `message_id` that you pass to `RAISERROR` must be defined in `sys.messages` view. | The *error\_number* parameter does not have to be defined in the `sys.messages` view. |
| The *message* parameter can contain **printf** formatting styles such as `%s` and `%d`. | The *message* parameter does not accept **printf** style formatting. Use `FORMATMESSAGE()` function to substitute parameters. |
| The *severity* parameter indicates the severity of the exception. | The severity of the exception is always set to 16. |

## SQL Server THROW statement examples [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-throw/#sql-server-throw-statement-examples "Anchor for SQL Server <code>THROW</code> statement examples")

Let’s take some examples of using the `THROW` statement to get a better understanding.

### A) Using THROW statement to raise an exception [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-throw/#a-using-throw-statement-to-raise-an-exception "Anchor for A) Using <code>THROW</code> statement to raise an exception")

The following example uses the `THROW` statement to raise an exception:

```
THROW 50005, N'An error occurred', 1;
```

Here is the output:

```
Msg 50005, Level 16, State 1, Line 1
An error occurred
```

### B) Using THROW statement to rethrow an exception [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-throw/#b-using-throw-statement-to-rethrow-an-exception "Anchor for B) Using <code>THROW</code> statement to rethrow an exception")

First, [create a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) `t1` for the demonstration:

```
CREATE TABLE t1(
    id int primary key
);
GO
```

Then, use the `THROW` statement without arguments in the `CATCH` block to rethrow the caught error:

```
BEGIN TRY
    INSERT INTO t1(id) VALUES(1);
    --  cause error
    INSERT INTO t1(id) VALUES(1);
END TRY
BEGIN CATCH
    PRINT('Raise the caught error again');
    THROW;
END CATCH
```

Here is the output:

```
(1 row affected)

(0 rows affected)
Raise the caught error again
Msg 2627, Level 14, State 1, Line 10
Violation of PRIMARY KEY constraint 'PK__t1__3213E83F906A55AA'. Cannot insert duplicate key in object 'dbo.t1'. The duplicate key value is (1).
```

In this example, the first `INSERT` statement succeeded. However, the second one failed due to the primary key constraint. Therefore, the error was caught by the `CATCH` block was raised again by the `THROW` statement.

### C) Using THROW statement to rethrow an exception [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-throw/#c-using-throw-statement-to-rethrow-an-exception "Anchor for C) Using <code>THROW</code> statement to rethrow an exception")

Unlike the `[RAISERROR](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-raiserror/)` statement, the `THROW` statement does not allow you to substitute parameters in the message text. Therefore, to mimic this function, you use the `FORMATMESSAGE()` function.

The following statement adds a custom message to the `sys.messages` catalog view:

```
EXEC sys.sp_addmessage 
    @msgnum = 50010, 
    @severity = 16, 
    @msgtext =
    N'The order number %s cannot be deleted because it does not exist.', 
    @lang = 'us_english';   
GO
```

This statement uses the `message_id` 50010 and replaces the `%s` placeholder by an order id ‘1001’:

```
DECLARE @MessageText NVARCHAR(2048);
SET @MessageText =  FORMATMESSAGE(50010, N'1001');   

THROW 50010, @MessageText, 1; 
```

Here is the output:

```
Msg 50010, Level 16, State 1, Line 8
The order number 1001 cannot be deleted because it does not exist.
```

In this tutorial, you have learned how to use the SQL Server `THROW` statement to raise an exception.

Was this tutorial helpful?

---
Source: [SQL Server THROW Statement Explained By Practical Examples](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-throw/)