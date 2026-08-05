# SQL Server Dynamic SQL

**Summary**: in this tutorial, you will learn how to use the SQL Server dynamic SQL to construct general purpose and flexible SQL statements.

## Introduction to Dynamic SQL [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-dynamic-sql/#introduction-to-dynamic-sql "Anchor for Introduction to Dynamic SQL")

Dynamic SQL is a programming technique that allows you to construct SQL statements dynamically at runtime. It allows you to create more general purpose and flexible SQL statement because the full text of the SQL statements may be unknown at compilation. For example, you can use the dynamic SQL to [create a stored procedure](https://www.sqlservertutorial.net/sql-server-stored-procedures/) that queries data against a table whose name is not known until runtime.

Creating a dynamic SQL is simple, you just need to make it a string as follows:

```
'SELECT * FROM production.products';
```

To execute a dynamic SQL statement, you call the stored procedure `sp_executesql` as shown in the following statement:

```
EXEC sp_executesql N'SELECT * FROM production.products';
```

Because the `sp_executesql` accepts the dynamic SQL as a Unicode string, you need to prefix it with an `N`.

Though this dynamic SQL is not very useful, it illustrates a dynamic SQL very well.

### Using dynamic SQL to query from any table example [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-dynamic-sql/#using-dynamic-sql-to-query-from-any-table-example "Anchor for Using dynamic SQL to query from any table example")

First, declare two variables, `@table` for holding the name of the table from which you want to query and `@sql` for holding the dynamic SQL.

```
DECLARE 
    @table NVARCHAR(128),
    @sql NVARCHAR(MAX);
```

Second, set the value of the `@table` variable to `production.products`.

```
SET @table = N'production.products';
```

Third, construct the dynamic SQL by concatenating the `SELECT` statement with the table name parameter:

```
SET @sql = N'SELECT * FROM ' + @table;
```

Fourth, call the `sp_executesql` stored procedure by passing the `@sql` parameter.

```
EXEC sp_executesql @sql;
```

Putting it all together:

```
DECLARE 
    @table NVARCHAR(128),
    @sql NVARCHAR(MAX);

SET @table = N'production.products';

SET @sql = N'SELECT * FROM ' + @table;

EXEC sp_executesql @sql;
```

The code block above produces the exact result set as the following statement:

```
SELECT * FROM production.products;
```

To query data from another table, you change the value of the `@table` variable. However, it’s more practical if we wrap the above T-SQL block in a stored procedure.

### SQL Server dynamic SQL and stored procedures [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-dynamic-sql/#sql-server-dynamic-sql-and-stored-procedures "Anchor for SQL Server dynamic SQL and stored procedures")

This stored procedure accepts any table and returns the result set from a specified table by using the dynamic SQL:

```
CREATE PROC usp_query (
    @table NVARCHAR(128)
)
AS
BEGIN

    DECLARE @sql NVARCHAR(MAX);
    -- construct SQL
    SET @sql = N'SELECT * FROM ' + @table;
    -- execute the SQL
    EXEC sp_executesql @sql;
    
END;
```

The following statement calls the `usp_query` stored procedure to return all rows from the `production.brands` table:

```
EXEC usp_query 'production.brands';
```

This stored procedure returns the top 10 rows from a table by the values of a specified column:

```
CREATE OR ALTER PROC usp_query_topn(
    @table NVARCHAR(128),
    @topN INT,
    @byColumn NVARCHAR(128)
)
AS
BEGIN
    DECLARE 
        @sql NVARCHAR(MAX),
        @topNStr NVARCHAR(MAX);

    SET @topNStr  = CAST(@topN as nvarchar(max));

    -- construct SQL
    SET @sql = N'SELECT TOP ' +  @topNStr  + 
                ' * FROM ' + @table + 
                    ' ORDER BY ' + @byColumn + ' DESC';
    -- execute the SQL
    EXEC sp_executesql @sql;
    
END;
```

For example, you can get the top 10 most expensive products from the `production.products` table:

```
EXEC usp_query_topn 
        'production.products',
        10, 
        'list_price';
```

This statement returns the top 10 products with the highest quantity in stock:

```
EXEC usp_query_topn 
        'production.tocks',
        10, 
        'quantity';
```

## SQL Server Dynamic SQL and SQL Injection [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-dynamic-sql/#sql-server-dynamic-sql-and-sql-injection "Anchor for SQL Server Dynamic SQL and SQL Injection")

Let’s [create a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `sales.tests` for the demonstration:

```
CREATE TABLE sales.tests(id INT); 
```

This statement returns all rows from the `production.brands` table:

```
EXEC usp_query 'production.brands';
```

But it does not prevent users from passing the table name as follows:

```
EXEC usp_query 'production.brands;DROP TABLE sales.tests';
```

This technique is called SQL injection. Once the statement is executed, the `sales.tests` table is dropped, because the stored procedure `usp_query` executes both statements:

```
SELECT * FROM production.brands;DROP TABLE sales.tests
```

To prevent this SQL injection, you can use the `[QUOTENAME()](https://www.sqlservertutorial.net/sql-server-string-functions/sql-server-quotename-function/)` function as shown in the following query:

```
CREATE OR ALTER PROC usp_query
(
    @schema NVARCHAR(128), 
    @table  NVARCHAR(128)
)
AS
    BEGIN
        DECLARE 
            @sql NVARCHAR(MAX);
        -- construct SQL
        SET @sql = N'SELECT * FROM ' 
            + QUOTENAME(@schema) 
            + '.' 
            + QUOTENAME(@table);
        -- execute the SQL
        EXEC sp_executesql @sql;
    END;
```

Now, if you pass the schema and table name to the stored procedure, it will work:

```
EXEC usp_query 'production','brands';
```

However, if you try to inject another statement such as:

```
EXEC usp_query 
        'production',
        'brands;DROP TABLE sales.tests';
```

It will issue the following error:

```
Invalid object name 'production.brands;DROP TABLE sales.tests'.
```

## More on sp\_executesql stored procedure [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-dynamic-sql/#more-on-sp_executesql-stored-procedure "Anchor for More on <code>sp_executesql</code> stored procedure")

The `sp_executesql` has the following syntax:

```
EXEC sp_executesql 
    sql_statement  
    parameter_definition
    @param1 = value1,
    @param2 = value2,
    ...
```

In this syntax:

-   `sql_statement` is a Unicode string that contains a T-SQL statement. The `sql_statement` can contain parameters such as `SELECT * FROM table_name WHERE id=@id`

-   `parameter_definition` is a string that contains the definition of all parameters embedded in the `sql_statement`. Each parameter definition consists of a parameter name and its data type e.g., `@id INT`. The parameter definitions are separated by a comma (,).
-   `@param1 = value1`, `@param2 = value2`,… specify a value for every parameter defined in the `parameter_definition` string.

This example uses the `sp_executesql` stored procedure to find products which have list price greater than 100 and category 1:

```
EXEC sp_executesql
N'SELECT *
    FROM 
        production.products 
    WHERE 
        list_price> @listPrice AND
        category_id = @categoryId
    ORDER BY
        list_price DESC', 
N'@listPrice DECIMAL(10,2),
@categoryId INT'
,@listPrice = 100
,@categoryId = 1;
```

In this tutorial, you have learned how to use the SQL Server dynamic SQL to construct general purpose and flexible SQL statements.

Was this tutorial helpful?

---
Source: [SQL Server Dynamic SQL](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-dynamic-sql/)