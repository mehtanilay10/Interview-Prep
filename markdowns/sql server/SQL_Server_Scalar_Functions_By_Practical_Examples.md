# SQL Server Scalar Functions By Practical Examples

**Summary**: in this tutorial, you will learn about SQL Server scalar functions and how to use them to encapsulate formulas or business logic and reuse them in the queries.

## What are scalar functions [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-scalar-functions/#what-are-scalar-functions "Anchor for What are scalar functions")

SQL Server scalar function takes one or more parameters and returns a single value.

The scalar functions help you simplify your code. For example, you may have a complex calculation that appears in many [queries](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/). Instead of including the formula in every query, you can create a scalar function that encapsulates the formula and uses it in each query.

## Creating a scalar function [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-scalar-functions/#creating-a-scalar-function "Anchor for Creating a scalar function")

To create a scalar function, you use the `CREATE FUNCTION` statement as follows:

```
CREATE FUNCTION [schema_name.]function_name (parameter_list)
RETURNS data_type AS
BEGIN
    statements
    RETURN value
END
```

In this syntax:

-   First, specify the name of the function after the `CREATE FUNCTION` keywords. The schema name is optional. If you don’t explicitly specify it, SQL Server uses `dbo` by default.

-   Second, specify a list of [parameters](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-stored-procedure-parameters/) surrounded by parentheses after the function name.
-   Third, specify the data type of the return value in the `RETURNS` statement.

-   Finally, include a `RETURN` statement to return a value inside the body of the function.

The following example creates a function that calculates the net sales based on the quantity, list price, and discount:

```
CREATE FUNCTION sales.udfNetSale(
    @quantity INT,
    @list_price DEC(10,2),
    @discount DEC(4,2)
)
RETURNS DEC(10,2)
AS 
BEGIN
    RETURN @quantity * @list_price * (1 - @discount);
END;
```

Later on, we can use this to calculate net sales of any sales order in the `order_items` from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/).

![order_items table](https://www.sqlservertutorial.net/wp-content/uploads/order_items.png)

After creating the scalar function, you can find it under **Programmability > Functions > Scalar-valued Functions** as shown in the following picture:

![SQL Server Scalar Function](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Scalar-Function.png)

## Calling a scalar function [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-scalar-functions/#calling-a-scalar-function "Anchor for Calling a scalar function")

You call a scalar function like a built-in function. For example, the following statement demonstrates how to call the `udfNetSale` function:

```
SELECT 
    sales.udfNetSale(10,100,0.1) net_sale;
```

Here is the output:

![SQL Server Scalar Function example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Scalar-Function-example.png)

The following example illustrates how to use the `sales.udfNetSale` function to get the net sales of the sales orders in the `order_items` table:

```
SELECT 
    order_id, 
    SUM(sales.udfNetSale(quantity, list_price, discount)) net_amount
FROM 
    sales.order_items
GROUP BY 
    order_id
ORDER BY
    net_amount DESC;
```

The following picture shows the partial output:

![SQL Server Scalar Function - calling function](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Scalar-Function-calling-function.png)

## Modifying a scalar function [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-scalar-functions/#modifying-a-scalar-function "Anchor for Modifying a scalar function")

To modify a scalar function, you use the `ALTER` instead of the `CREATE` keyword. The rest statements remain the same:

```
ALTER FUNCTION [schema_name.]function_name (parameter_list)
    RETURN data_type AS
    BEGIN
        statements
        RETURN value
    END
```

Note that you can use the `CREATE OR ALTER` statement to create a user-defined function if it does not exist or to modify an existing scalar function:

```
CREATE OR ALTER FUNCTION [schema_name.]function_name (parameter_list)
        RETURN data_type AS
        BEGIN
            statements
            RETURN value
        END
```

## Removing a scalar function [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-scalar-functions/#removing-a-scalar-function "Anchor for Removing a scalar function")

To remove an existing scalar function, you use the `[DROP FUNCTION](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-drop-function/)` statement:

```
DROP FUNCTION [schema_name.]function_name;
```

For example, to remove the `sales.udfNetSale` function, you use the following statement:

```
DROP FUNCTION sales.udfNetSale;
```

## SQL Server scalar function notes [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-scalar-functions/#sql-server-scalar-function-notes "Anchor for SQL Server scalar function notes")

The following are some key takeaway of the scalar functions:

-   Scalar functions can be used almost anywhere in T-SQL statements.

-   Scalar functions accept one or more parameters but return only one value, therefore, they must include a `RETURN` statement.
-   Scalar functions can use logic such as `[IF](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-if-else/)` blocks or `[WHILE](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-while/)` loops.

-   Scalar functions cannot [update](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/) data. They can access data but this is not a good practice.
-   Scalar functions can call other functions.

In this tutorial, you have learned how to use SQL Server scalar functions to encapsulate complex formulas or complex business logic and reuse them in queries.

Was this tutorial helpful?

---
Source: [SQL Server Scalar Functions By Practical Examples](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-scalar-functions/)