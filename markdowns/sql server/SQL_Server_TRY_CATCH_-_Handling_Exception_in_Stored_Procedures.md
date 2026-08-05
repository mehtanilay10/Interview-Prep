# SQL Server TRY CATCH - Handling Exception in Stored Procedures

**Summary**: in this tutorial, you will learn how to use the SQL Server `TRY CATCH` construct to handle exceptions in stored procedures.

## SQL Server TRY CATCH overview [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-try-catch/#sql-server-try-catch-overview "Anchor for SQL Server <code>TRY CATCH</code> overview")

The `TRY CATCH` construct allows you to gracefully handle exceptions in SQL Server. To use the `TRY CATCH` construct, you first place a group of Transact-SQL statements that could cause an exception in a `BEGIN TRY...END TRY` block as follows:

```
BEGIN TRY  
   -- statements that may cause exceptions
END TRY  
```

Then you use a `BEGIN CATCH...END CATCH` block immediately after the `TRY` block:

```
BEGIN CATCH  
   -- statements that handle exception
END CATCH  
```

The following illustrates a complete `TRY CATCH` construct:

```
BEGIN TRY  
   -- statements that may cause exceptions
END TRY 
BEGIN CATCH  
   -- statements that handle exception
END CATCH  
```

If the statements between the `TRY` block complete without an error, the statements between the `CATCH` block will not execute. However, if any statement inside the `TRY` block causes an exception, the control transfers to the statements in the `CATCH` block.

### The CATCH block functions [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-try-catch/#the-catch-block-functions "Anchor for The <code>CATCH</code> block functions")

Inside the `CATCH` block, you can use the following functions to get the detailed information on the error that occurred:

-   `ERROR_LINE()` returns the line number on which the exception occurred.

-   `ERROR_MESSAGE()` returns the complete text of the generated error message.
-   `ERROR_PROCEDURE()` returns the name of the stored procedure or trigger where the error occurred.

-   `ERROR_NUMBER()` returns the number of the error that occurred.
-   `ERROR_SEVERITY()` returns the severity level of the error that occurred.

-   `ERROR_STATE()` returns the state number of the error that occurred.

Note that you only use these functions in the `CATCH` block. If you use them outside of the `CATCH` block, all of these functions will return `[NULL](https://www.sqlservertutorial.net/sql-server-basics/sql-server-null/)`.

### Nested TRY CATCH constructs [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-try-catch/#nested-try-catch-constructs "Anchor for Nested <code>TRY CATCH</code> constructs")

You can nest `TRY CATCH` construct inside another `TRY CATCH` construct. However, either a `TRY` block or a `CATCH` block can contain a nested `TRY CATCH`, for example:

```
BEGIN TRY
    --- statements that may cause exceptions
END TRY
BEGIN CATCH
    -- statements to handle exception
    BEGIN TRY
        --- nested TRY block
    END TRY
    BEGIN CATCH
        --- nested CATCH block
    END CATCH
END CATCH
```

## SQL Server TRY CATCH examples [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-try-catch/#sql-server-try-catch-examples "Anchor for SQL Server <code>TRY CATCH</code> examples")

First, [create a stored procedure](https://www.sqlservertutorial.net/sql-server-stored-procedures/basic-sql-server-stored-procedures/) named `usp_divide` that divides two numbers:

```
CREATE PROC usp_divide(
    @a decimal,
    @b decimal,
    @c decimal output
) AS
BEGIN
    BEGIN TRY
        SET @c = @a / @b;
    END TRY
    BEGIN CATCH
        SELECT  
            ERROR_NUMBER() AS ErrorNumber  
            ,ERROR_SEVERITY() AS ErrorSeverity  
            ,ERROR_STATE() AS ErrorState  
            ,ERROR_PROCEDURE() AS ErrorProcedure  
            ,ERROR_LINE() AS ErrorLine  
            ,ERROR_MESSAGE() AS ErrorMessage;  
    END CATCH
END;
GO
```

In this stored procedure, we placed the formula inside the `TRY` block and called the `CATCH` block functions `ERROR_*` inside the `CATCH` block.

Second, call the `usp_divide` stored procedure to divide 10 by 2:

```
DECLARE @r decimal;
EXEC usp_divide 10, 2, @r output;
PRINT @r;
```

Here is the output

```
5
```

Because no exception occurred in the `TRY` block, the stored procedure completed at the `TRY` block.

Third, attempt to divide 20 by zero by calling the `usp_divide` stored procedure:

```
DECLARE @r2 decimal;
EXEC usp_divide 10, 0, @r2 output;
PRINT @r2;
```

The following picture shows the output:

![SQL Server TRY CATCH Example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-TRY-CATCH-Example.png)

Because of division by zero error which was caused by the formula, the control was passed to the statement inside the `CATCH` block which returned the error’s detailed information.

## SQL Serer TRY CATCH with transactions [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-try-catch/#sql-serer-try-catch-with-transactions "Anchor for SQL Serer <code>TRY CATCH</code> with transactions")

Inside a `CATCH` block, you can test the state of transactions by using the `XACT_STATE()` function.

-   If the `XACT_STATE()` function returns -1, it means that an uncommittable transaction is pending, you should issue a `ROLLBACK TRANSACTION` statement.

-   In case the `XACT_STATE()` function returns 1, it means that a committable transaction is pending. You can issue a `COMMIT TRANSACTION` statement in this case.
-   If the `XACT_STATE()` function return 0, it means no transaction is pending, therefore, you don’t need to take any action.

It is a good practice to test your transaction state before issuing a `COMMIT TRANSACTION` or `ROLLBACK TRANSACTION` statement in a `CATCH` block to ensure consistency.

### Using TRY CATCH with transactions example [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-try-catch/#using-try-catch-with-transactions-example "Anchor for Using <code>TRY CATCH</code> with transactions example")

First, set up two new tables `sales.persons` and `sales.deals` for demonstration:

```
CREATE TABLE sales.persons
(
    person_id  INT
    PRIMARY KEY IDENTITY, 
    first_name NVARCHAR(100) NOT NULL, 
    last_name  NVARCHAR(100) NOT NULL
);

CREATE TABLE sales.deals
(
    deal_id   INT
    PRIMARY KEY IDENTITY, 
    person_id INT NOT NULL, 
    deal_note NVARCHAR(100), 
    FOREIGN KEY(person_id) REFERENCES sales.persons(
    person_id)
);

insert into 
    sales.persons(first_name, last_name)
values
    ('John','Doe'),
    ('Jane','Doe');

insert into 
    sales.deals(person_id, deal_note)
values
    (1,'Deal for John Doe');
```

Next, create a new stored procedure named `usp_report_error` that will be used in a `CATCH` block to report the detailed information of an error:

```
CREATE PROC usp_report_error
AS
    SELECT   
        ERROR_NUMBER() AS ErrorNumber  
        ,ERROR_SEVERITY() AS ErrorSeverity  
        ,ERROR_STATE() AS ErrorState  
        ,ERROR_LINE () AS ErrorLine  
        ,ERROR_PROCEDURE() AS ErrorProcedure  
        ,ERROR_MESSAGE() AS ErrorMessage;  
GO
```

Then, develop a new stored procedure that deletes a row from the `sales.persons` table:

```
CREATE PROC usp_delete_person(
    @person_id INT
) AS
BEGIN
    BEGIN TRY
        BEGIN TRANSACTION;
        -- delete the person
        DELETE FROM sales.persons 
        WHERE person_id = @person_id;
        -- if DELETE succeeds, commit the transaction
        COMMIT TRANSACTION;  
    END TRY
    BEGIN CATCH
        -- report exception
        EXEC usp_report_error;
        
        -- Test if the transaction is uncommittable.  
        IF (XACT_STATE()) = -1  
        BEGIN  
            PRINT  N'The transaction is in an uncommittable state.' +  
                    'Rolling back transaction.'  
            ROLLBACK TRANSACTION;  
        END;  
        
        -- Test if the transaction is committable.  
        IF (XACT_STATE()) = 1  
        BEGIN  
            PRINT N'The transaction is committable.' +  
                'Committing transaction.'  
            COMMIT TRANSACTION;     
        END;  
    END CATCH
END;
GO
```

In this stored procedure, we used the `XACT_STATE()` function to check the state of the transaction before performing `COMMIT TRANSACTION` or `ROLLBACK TRANSACTION` inside the `CATCH` block.

After that, call the `usp_delete_person` stored procedure to delete the person id 2:

```
EXEC usp_delete_person 2;
```

There was no exception occurred.

Finally, call the stored procedure `usp_delete_person` to delete person id 1:

```
EXEC usp_delete_person 1;
```

The following error occurred:

![SQL Server TRY CATCH Transaction Example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-TRY-CATCH-Transaction-Example.png)

In this tutorial, you have learned how to use the SQL Server `TRY CATCH` construct to handle exceptions in stored procedures.

Was this tutorial helpful?

---
Source: [SQL Server TRY CATCH - Handling Exception in Stored Procedures](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-try-catch/)