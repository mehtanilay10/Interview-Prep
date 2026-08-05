# SQL Server DROP FUNCTOIN by Practical Examples

**Summary**: in this tutorial, you will learn how to remove an existing user-defined function by using the SQL Server `DROP FUNCTION` statement.

## Introduction to SQL Server DROP FUNCTION statement [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-drop-function/#introduction-to-sql-server-drop-function-statement "Anchor for Introduction to SQL Server <code>DROP FUNCTION</code> statement")

To remove an existing user-defined function created by the `[CREATE FUNCTION](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-scalar-functions/)` statement, you use the `DROP FUNCTION` statement as follows:

```
DROP FUNCTION [ IF EXISTS ] [ schema_name. ] function_name;
```

In this syntax:

###  IF EXISTS [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-drop-function/#if-exists "Anchor for  <code>IF EXISTS</code>")

The `IF EXISTS` option allows you to drop the function only if it exists. Otherwise, the statement does nothing. If you attempt to remove a non-existing function without specifying the `IF EXISTS` option, you will get an error.

###  schema\_name [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-drop-function/#schema_name "Anchor for  <code>schema_name</code>")

The `schema_name` specifies the name of the schema to which the user-defined function which you wish to remove belongs. The schema name is optional.

###  function\_name [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-drop-function/#function_name "Anchor for  <code>function_name</code>")

The `function_name` is the name of the function that you want to remove.

### Notes [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-drop-function/#notes "Anchor for Notes")

If the function that you want to remove is referenced by views or other functions created using the `WITH SCHEMABINDING` option, the `DROP FUNCTION` will fail.

In addition, if there are constraints like `CHECK` or `DEFAULT` and computed columns that refer to the function, the `DROP FUNCTION` statement will also fail.

To drop multiple user-defined functions, you specify a comma-separated list of function names in after the `DROP FUNCTION` clause as follows:

```
DROP FUNCTION [IF EXISTS] 
    schema_name.function_name1, 
    schema_name.function_name2,
    ...;
```

## SQL Server DROP FUNCTION example [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-drop-function/#sql-server-drop-function-example "Anchor for SQL Server DROP FUNCTION example")

We will use the `order_items` from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) for the demonstration:

![order_items](https://www.sqlservertutorial.net/wp-content/uploads/order_items.png)

### SQL Server DROP FUNCTION – a simple example [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-drop-function/#sql-server-drop-function-a-simple-example "Anchor for SQL Server <code>DROP FUNCTION</code> - a simple example")

The following example creates a function that calculates discount amount from quantity, list price, and discount percentage:

```
CREATE FUNCTION sales.udf_get_discount_amount (
    @quantity INT,
    @list_price DEC(10,2),
    @discount DEC(4,2) 
)
RETURNS DEC(10,2) 
AS 
BEGIN
    RETURN @quantity * @list_price * @discount
END
```

To drop the `sales.udf_get_discount_amount` function, you use the following statement:

```
DROP FUNCTION IF EXISTS sales.udf_get_discount_amount;
```

### SQL Server DROP FUNCTION with SCHEMABINDING example [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-drop-function/#sql-server-drop-function-with-schemabinding-example "Anchor for SQL Server <code>DROP FUNCTION</code> with <code>SCHEMABINDING</code> example")

The following example recreates the function `sales.udf_get_discount_amount`using the `WITH SCHEMABINDING` option:

```
CREATE FUNCTION sales.udf_get_discount_amount (
    @quantity INT,
    @list_price DEC(10,2),
    @discount DEC(4,2) 
)
RETURNS DEC(10,2) 
WITH SCHEMABINDING
AS 
BEGIN
    RETURN @quantity * @list_price * @discount
END
```

And the following statement [creates a view](https://www.sqlservertutorial.net/sql-server-views/sql-server-create-view/) that uses the `sales.udf_get_discount_amount` function:

```
CREATE VIEW sales.discounts
WITH SCHEMABINDING
AS
SELECT
    order_id,
    SUM(sales.udf_get_discount_amount(
        quantity,
        list_price,
        discount
    )) AS discount_amount
FROM
    sales.order_items i
GROUP BY
    order_id;
```

Now, if you try to remove the `sales.udf_get_discount_amount` function, you will get an error:

```
DROP FUNCTION sales.udf_get_discount_amount;
```

SQL Server returns the following error:

```
Cannot DROP FUNCTION 'sales.udf_get_discount_amount' because it is being referenced by object 'discounts'.
```

If you want to remove the function, you must [drop](https://www.sqlservertutorial.net/sql-server-views/sql-server-drop-view/) the `sales.discounts` view first:

```
DROP VIEW sales.discounts;
```

And then drop the function;

```
DROP FUNCTION sales.udf_get_discount_amount;
```

In this tutorial, you have learned how to use the SQL Server `DROP FUNCTION` to remove one or more existing user-defined functions.

Was this tutorial helpful?

---
Source: [SQL Server DROP FUNCTOIN by Practical Examples](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-drop-function/)