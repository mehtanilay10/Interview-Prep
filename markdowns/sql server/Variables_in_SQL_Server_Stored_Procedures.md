# Variables in SQL Server Stored Procedures

**Summary**: in this tutorial, you will learn about variables including declaring variables, setting their values, and assigning value fields of a record to variables.

## What is a variable [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/#what-is-avariable "Anchor for What is a variable")

A variable is an object that holds a single value of a specific type e.g., [integer](https://www.sqlservertutorial.net/sql-server-basics/sql-server-int/), [date](https://www.sqlservertutorial.net/sql-server-basics/sql-server-date/), or [varying character string](https://www.sqlservertutorial.net/sql-server-basics/sql-server-varchar/).

We typically use variables in the following cases:

-   As a loop counter to count the number of times a loop is performed.

-   To hold a value to be tested by a control-of-flow statement such as `WHILE`.
-   To store the value returned by a [stored procedure](https://www.sqlservertutorial.net/sql-server-stored-procedures/) or a function

## Declaring a variable [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/#declaring-a-variable "Anchor for Declaring a variable")

To declare a variable, you use the `DECLARE` statement. For example, the following statement declares a variable named `@model_year`:

```
DECLARE @model_year SMALLINT;
```

The `DECLARE` statement initializes a variable by assigning it a name and a data type. The variable name must start with the `@` sign. In this example, the data type of the `@model_year` variable is `SMALLINT`.

By default, when a variable is declared, its value is set to `NULL`.

Between the variable name and data type, you can use the optional `AS` keyword as follows:

```
DECLARE @model_year AS SMALLINT;
```

To declare multiple variables, you separate variables by commas:

```
DECLARE @model_year SMALLINT, 
        @product_name VARCHAR(MAX);
```

## Assigning a value to a variable [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/#assigning-a-value-to-a-variable "Anchor for Assigning a value to a variable")

To assign a value to a variable, you use the `SET` statement. For example, the following statement assigns `2018` to the `@model_year` variable:

```
SET @model_year = 2018;
```

## Using variables in a query [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/#using-variables-in-a-query "Anchor for Using variables in a query")

The following `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement uses the `@model_year` variable in the `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause to find the products of a specific model year:

```
SELECT
    product_name,
    model_year,
    list_price 
FROM 
    production.products
WHERE 
    model_year = @model_year
ORDER BY
    product_name;
```

Now, you can put everything together and execute the following code block to get a list of products whose model year is 2018:

```
DECLARE @model_year SMALLINT;

SET @model_year = 2018;

SELECT
    product_name,
    model_year,
    list_price 
FROM 
    production.products
WHERE 
    model_year = @model_year
ORDER BY
    product_name;
```

Note that to execute the code, you click the Execute button as shown in the following picture:

![Stored Procedure Variables - execute a code block](https://www.sqlservertutorial.net/wp-content/uploads/Stored-Procedure-Variables-execute-a-code-block.png)

The following picture shows the output:

![Stored Procedure Variables - output](https://www.sqlservertutorial.net/wp-content/uploads/Stored-Procedure-Variables-output.png)

## Storing query result in a variable [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/#storing-query-result-in-a-variable "Anchor for Storing query result in a variable")

The following steps describe how to store the query result in a variable:

First, declare a variable named `@product_count` with the integer data type:

```
DECLARE @product_count INT;
```

Second, use the `SET` statement to assign the query’s result set to the variable:

```
SET @product_count = (
    SELECT 
        COUNT(*) 
    FROM 
        production.products 
);
```

Third, output the content of the `@product_count` variable:

```
SELECT @product_count;
```

Or you can use the `PRINT` statement to print out the content of a variable:

```
PRINT @product_count;
```

or

```
PRINT 'The number of products is ' + CAST(@product_count AS VARCHAR(MAX));
```

The output in the messages tab is as follows:

```
The number of products is 204
```

To hide the number of rows affected messages, you use the following statement:

```
SET NOCOUNT ON;    
```

## Selecting a record into variables [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/#selecting-a-record-into-variables "Anchor for Selecting a record into variables")

The following steps illustrate how to declare two variables, assign a record to them, and output the contents of the variables:

First, declare variables that hold the product name and list price:

```
DECLARE 
    @product_name VARCHAR(MAX),
    @list_price DECIMAL(10,2);
```

Second, assign the column names to the corresponding variables:

```
SELECT 
    @product_name = product_name,
    @list_price = list_price
FROM
    production.products
WHERE
    product_id = 100;
```

Third, output the content of the variables:

```
SELECT 
    @product_name AS product_name, 
    @list_price AS list_price;
```

![Stored Procedure Variables - assign a record to a variable](https://www.sqlservertutorial.net/wp-content/uploads/Stored-Procedure-Variables-assign-a-record-to-a-variable.png)

## Accumulating values into a variable [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/#accumulating-values-into-a-variable "Anchor for Accumulating values into a variable")

The following stored procedure takes one parameter and returns a list of products as a string:

```
CREATE  PROC uspGetProductList(
    @model_year SMALLINT
) AS 
BEGIN
    DECLARE @product_list VARCHAR(MAX);

    SET @product_list = '';

    SELECT
        @product_list = @product_list + product_name 
                        + CHAR(10)
    FROM 
        production.products
    WHERE
        model_year = @model_year
    ORDER BY 
        product_name;

    PRINT @product_list;
END;
```

In this stored procedure:

-   First, we declared a variable named `@product_list` with varying character string type and set its value to blank.

-   Second, we selected the product name list from the products table based on the input `@model_year`. In the select list, we accumulated the product names to the `@product_list` variable. Note that the `CHAR(10)` returns the line feed character.
-   Third, we used the `PRINT` statement to print out the product list.

The following statement executes the `uspGetProductList` stored procedure:

```
EXEC uspGetProductList 2018
```

The following picture shows the partial output:

![Stored Procedure Variables - Stored Procedure Example](https://www.sqlservertutorial.net/wp-content/uploads/Stored-Procedure-Variables-Stored-Procedure-Example.png)

In this tutorial, you have learned about variables including declaring variables, setting their values, and assigning value fields of a record to the variables.

Was this tutorial helpful?

---
Source: [Variables in SQL Server Stored Procedures](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/)