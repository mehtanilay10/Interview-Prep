# SQL Server Table-Valued Function By Practical Examples

**Summary**: in this tutorial, you will learn how to use SQL Server table-valued function including inline table-valued function and multi-statement valued functions.

## What is a table-valued function in SQL Server [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-valued-functions/#what-is-a-table-valued-function-in-sql-server "Anchor for What is a table-valued function in SQL Server")

A table-valued function is a [user-defined function](https://www.sqlservertutorial.net/sql-server-user-defined-functions/) that returns data of a table type. The return type of a table-valued function is a table, therefore, you can use the table-valued function just like you would use a table.

## Creating a table-valued function [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-valued-functions/#creating-a-table-valued-function "Anchor for Creating a table-valued function")

The following statement example creates a table-valued function that returns a list of products including product name, model year and the list price for a specific model year:

```
CREATE FUNCTION udfProductInYear (
    @model_year INT
)
RETURNS TABLE
AS
RETURN
    SELECT 
        product_name,
        model_year,
        list_price
    FROM
        production.products
    WHERE
        model_year = @model_year;
```

The syntax is similar to the one that creates a user-defined function.

The `RETURNS TABLE` specifies that the function will return a table. As you can see, there is no `BEGIN...END` statement. The statement simply queries data from the `production.products` table.

The `udfProductInYear` function accepts one parameter named `@model_year` of type [`INT`](https://www.sqlservertutorial.net/sql-server-basics/sql-server-int/). It returns the products whose model years equal `@model_year` parameter.

Once the table-valued function is created, you can find it under **Programmability > Functions > Table-valued Functions** as shown in the following picture:

![SQL Server Table-valued Function example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Table-valued-Function-example.png)

The function above returns the result set of a single `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement, therefore, it is also known as an inline table-valued function.

## Executing a table-valued function [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-valued-functions/#executing-a-table-valued-function "Anchor for Executing a table-valued function")

To execute a table-valued function, you use it in the `FROM` clause of the `SELECT` statement:

```
SELECT 
    * 
FROM 
    udfProductInYear(2017);
```

![SQL Server Table-valued Function Execution](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Table-valued-Function-Execution.png)

In this example, we selected the products whose model year is `2017`.

You can also specify which columns to be returned from the table-valued function as follows:

```
SELECT 
    product_name,
    list_price
FROM 
    udfProductInYear(2018);
```

Here is the partial output:

![SQL Server Table-valued Function - Selecting columns](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Table-valued-Function-Selecting-columns.png)

## Modifying a table-valued function [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-valued-functions/#modifying-a-table-valued-function "Anchor for Modifying a table-valued function")

To modify a table-valued function, you use the `ALTER` instead of `CREATE` keyword. The rest of the script is the same.

For example, the following statement modifies the `udfProductInYear` by changing the existing parameter and adding one more parameter:

```
ALTER FUNCTION udfProductInYear (
    @start_year INT,
    @end_year INT
)
RETURNS TABLE
AS
RETURN
    SELECT 
        product_name,
        model_year,
        list_price
    FROM
        production.products
    WHERE
        model_year BETWEEN @start_year AND @end_year
```

The `udfProductInYear` function now returns products whose model year between a starting year and an ending year.

The following statement calls the `udfProductInYear` function to get the products whose model years are between `2017` and `2018`:

```
SELECT 
    product_name,
    model_year,
    list_price
FROM 
    udfProductInYear(2017,2018)
ORDER BY
    product_name;
```

Here is the partial output:

![SQL Server Table-valued Function Modifying](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Table-valued-Function-Modifying.png)

## Multi-statement table-valued functions (MSTVF) [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-valued-functions/#multi-statement-table-valued-functions-mstvf "Anchor for Multi-statement table-valued functions (MSTVF)")

A multi-statement table-valued function or MSTVF is a table-valued function that returns the result of multiple statements.

The multi-statement-table-valued function is very useful because you can execute multiple queries within the function and aggregate results into the returned table.

To define a multi-statement table-valued function, you use a table variable as the return value. Inside the function, you execute one or more queries and insert data into this table variable.

The following `udfContacts()` function combines staffs and customers into a single contact list:

```
CREATE FUNCTION udfContacts()
    RETURNS @contacts TABLE (
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(255),
        phone VARCHAR(25),
        contact_type VARCHAR(20)
    )
AS
BEGIN
    INSERT INTO @contacts
    SELECT 
        first_name, 
        last_name, 
        email, 
        phone,
        'Staff'
    FROM
        sales.staffs;

    INSERT INTO @contacts
    SELECT 
        first_name, 
        last_name, 
        email, 
        phone,
        'Customer'
    FROM
        sales.customers;
    RETURN;
END;
```

The following statement illustrates how to execute a multi-statement table-valued function `udfContacts`:

```
SELECT 
    * 
FROM
    udfContacts();
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-MSTVF-Example.png)

## When to use table-valued functions [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-valued-functions/#when-to-use-table-valued-functions "Anchor for When to use table-valued functions")

We typically use table-valued functions as parameterized [views](https://www.sqlservertutorial.net/sql-server-views/). In comparison with [stored procedures](https://www.sqlservertutorial.net/sql-server-stored-procedures/), the table-valued functions are more flexible because we can use them wherever tables are used.

In this tutorial, you have learned about SQL Server table-valued function including inline table-valued functions and multi-statement table-valued functions.

Was this tutorial helpful?

---
Source: [SQL Server Table-Valued Function By Practical Examples](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-valued-functions/)