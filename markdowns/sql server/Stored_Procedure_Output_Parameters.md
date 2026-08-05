# Stored Procedure Output Parameters

**Summary**: in this tutorial, you will learn how to use the output parameters to return data back to the calling program.

## Creating output parameters [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/stored-procedure-output-parameters/#creating-output-parameters "Anchor for Creating output parameters")

To create an output parameter for a [stored procedure](https://www.sqlservertutorial.net/sql-server-stored-procedures/), you use the following syntax:

```
parameter_name data_type OUTPUT
```

A stored procedure can have many output parameters. In addition, the output parameters can be in any valid [data type](https://www.sqlservertutorial.net/sql-server-basics/sql-server-data-types/) e.g., [integer](https://www.sqlservertutorial.net/sql-server-basics/sql-server-int/), [date](https://www.sqlservertutorial.net/sql-server-basics/sql-server-date/), and [varying character](https://www.sqlservertutorial.net/sql-server-basics/sql-server-varchar/).

For example, the following stored procedure finds products by model year and returns the number of products via the `@product_count` output parameter:

```
CREATE PROCEDURE uspFindProductByModel (
    @model_year SMALLINT,
    @product_count INT OUTPUT
) AS
BEGIN
    SELECT 
        product_name,
        list_price
    FROM
        production.products
    WHERE
        model_year = @model_year;

    SELECT @product_count = @@ROWCOUNT;
END;
```

In this stored procedure:

First, we created an output parameter named `@product_count` to store the number of products found:

```
@product_count INT OUTPUT
```

Second, after the `SELECT` statement, we assigned the number of rows returned by the query(`@@ROWCOUNT`) to the `@product_count` parameter.

Note that the `@@ROWCOUNT` is a system variable that returns the number of rows read by the previous statement.

Once you execute the `CREATE PROCEDURE` statement above, the `uspFindProductByModel` stored procedure is compiled and saved in the database catalog.

If everything is fine, SQL Server issues the following output:

```
Commands completed successfully.
```

## Calling stored procedures with output parameters [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/stored-procedure-output-parameters/#calling-stored-procedures-with-output-parameters "Anchor for Calling stored procedures with output parameters")

To call a stored procedure with output parameters, you follow these steps:

-   First, declare [variables](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/) to hold the values returned by the output parameters

-   Second, use these variables in the stored procedure call.

For example, the following statement executes the `uspFindProductByModel` stored procedure:

```
DECLARE @count INT;

EXEC uspFindProductByModel
    @model_year = 2018,
    @product_count = @count OUTPUT;

SELECT @count AS 'Number of products found';
```

The following picture shows the output:

![SQL Server Stored Procedure Output Parameter Example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Stored-Procedure-Output-Parameter-Example.png)

In this example:

First, declare the `@count` variable to hold the the value of the output parameter of the stored procedure:

```
DECLARE @count INT;
```

Then, execute the `uspFindProductByModel` stored procedure and passing the parameters:

```
EXEC uspFindProductByModel 
     @model_year = 2018, 
     @product_count = @count OUTPUT;
```

In this statement, the `model_year` is `2018` and the `@count` variable assigns the value of the output parameter `@product_count`.

You can call the `uspFindProductByModel` stored procedure as follows:

```
EXEC uspFindProductByModel 2018, @count OUTPUT;
```

Note that if you forget the `OUTPUT` keyword after the `@count` variable, the @count variable will be NULL.

Finally, show the value of the `@count` variable:

```
SELECT @count AS 'Number of products found';
```

In this tutorial, you have learned how to use the output parameter to pass data from the stored procedure back to the calling program.

Was this tutorial helpful?

---
Source: [Stored Procedure Output Parameters](https://www.sqlservertutorial.net/sql-server-stored-procedures/stored-procedure-output-parameters/)