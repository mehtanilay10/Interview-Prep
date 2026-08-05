# An Introduction to SQL Server Table Variables By Examples

**Summary**: in this tutorial, you will learn about the SQL Server table variables that hold rows of data.

## What are table variables [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-variables/#what-are-table-variables "Anchor for What are table variables")

Table variables are kinds of variables that allow you to hold rows of data, which are similar to [temporary tables](https://www.sqlservertutorial.net/sql-server-basics/sql-server-temporary-tables/).

## How to declare table variables [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-variables/#how-to-declare-table-variables "Anchor for How to declare table variables")

To declare a table variable, you use the `DECLARE` statement as follows:

```
DECLARE @table_variable_name TABLE (
    column_list
);
```

In this syntax, you specify the name of the table variable between the `DECLARE` and `TABLE` keywords. The name of the table variables must start with the `@` symbol.

Following the `TABLE` keyword, you define the structure of the table variable which is similar to the structure of a regular table that includes column definitions, data type, size, optional constraint, etc.

## The scope of table variables [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-variables/#the-scope-of-table-variables "Anchor for The scope of table variables")

Similar to local [variables](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/), table variables are out of scope at the end of the batch.

If you define a table variable in a [stored procedure](https://www.sqlservertutorial.net/sql-server-stored-procedures/) or [user-defined function](https://www.sqlservertutorial.net/sql-server-user-defined-functions/), the table variable will no longer exist after the stored procedure or user-defined function exits.

## Table variable example [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-variables/#table-variable-example "Anchor for Table variable example")

For example, the following statement declares a table variable named `@product_table` which consists of three columns: `product_name`, `brand_id`, and `list_price`:

```
DECLARE @product_table TABLE (
    product_name VARCHAR(MAX) NOT NULL,
    brand_id INT NOT NULL,
    list_price DEC(11,2) NOT NULL
);
```

### Inserting data into the table variables [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-variables/#inserting-data-into-the-table-variables "Anchor for Inserting data into the table variables")

Once declared, the table variable is empty. You can insert rows into the table variables using the `[INSERT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/)` statement:

```
INSERT INTO @product_table
SELECT
    product_name,
    brand_id,
    list_price
FROM
    production.products
WHERE
    category_id = 1;
```

### Querying data from the table variables [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-variables/#querying-data-from-the-table-variables "Anchor for Querying data from the table variables")

Similar to a temporary table, you can query data from the table variables using the `SELECT` statement:

```
SELECT
    *
FROM
    @product_table;
```

Note that you need to execute the whole batch or you will get an error:

```
DECLARE @product_table TABLE (
    product_name VARCHAR(MAX) NOT NULL,
    brand_id INT NOT NULL,
    list_price DEC(11,2) NOT NULL
);

INSERT INTO @product_table
SELECT
    product_name,
    brand_id,
    list_price
FROM
    production.products
WHERE
    category_id = 1;

SELECT
    *
FROM
    @product_table;
GO
```

The following picture shows the partial output:

![SQL Server Table Variables Example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Table-Variables-Example.png)

## Restrictions on table variables [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-variables/#restrictions-on-table-variables "Anchor for Restrictions on table variables")

First, you have to define the structure of the table variable during the declaration. Unlike a regular or temporary table, you cannot [alter](https://www.sqlservertutorial.net/sql-server-basics/sql-server-alter-table-alter-column/) the structure of the table variables after they are declared.

Second, statistics help the query optimizer to come up with a good query’s execution plan. Unfortunately, table variables do not contain statistics. Therefore, you should use table variables to hold a small number of rows.

Third, you cannot use the table variable as an [input](https://www.sqlservertutorial.net/sql-server-stored-procedures/stored-procedure-output-parameters/) or [output parameter](https://www.sqlservertutorial.net/sql-server-stored-procedures/stored-procedure-output-parameters/) like other [data types](https://www.sqlservertutorial.net/sql-server-basics/sql-server-data-types/). However, you can return a table variable from a user-defined function

Fourth, you cannot create non-clustered indexes for table variables. However, starting with SQL Server 2014, memory-optimized table variables are available with the introduction of the new In-Memory OLTP that allows you to add non-clustered indexes as part of table variable’s declaration.

Fifth, if you are using a table variable with a [join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-inner-join/), you need to [alias](https://www.sqlservertutorial.net/sql-server-basics/sql-server-alias/) the table in order to execute the query. For example:

```
SELECT
    brand_name,
    product_name,
    list_price
FROM
    brands b
INNER JOIN @product_table pt 
    ON p.brand_id = pt.brand_id;
```

## Performance of table variables [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-variables/#performance-of-table-variables "Anchor for Performance of table variables")

Using table variables in a [stored procedure](https://www.sqlservertutorial.net/sql-server-stored-procedures/) results in fewer recompilations than using a [temporary table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-temporary-tables/).

In addition, a table variable use fewer resources than a temporary table with less locking and logging overhead.

Similar to the temporary table, the table variables do live in the `tempdb` database, not in the memory.

## Using table variables in user-defined functions [#](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-variables/#using-table-variables-in-user-defined-functions "Anchor for Using table variables in user-defined functions")

The following user-defined function named `ufnSplit()` that returns a table variable.

```
CREATE OR ALTER FUNCTION udfSplit(
    @string VARCHAR(MAX), 
    @delimiter VARCHAR(50) = ' ')
RETURNS @parts TABLE
(    
idx INT IDENTITY PRIMARY KEY,
val VARCHAR(MAX)   
)
AS
BEGIN

DECLARE @index INT = -1;

WHILE (LEN(@string) > 0) 
BEGIN 
    SET @index = CHARINDEX(@delimiter , @string)  ;
    
    IF (@index = 0) AND (LEN(@string) > 0)  
    BEGIN  
        INSERT INTO @parts 
        VALUES (@string);
        BREAK  
    END 

    IF (@index > 1)  
    BEGIN  
        INSERT INTO @parts 
        VALUES (LEFT(@string, @index - 1));
        
        SET @string = RIGHT(@string, (LEN(@string) - @index));  
    END 
    ELSE
    SET @string = RIGHT(@string, (LEN(@string) - @index)); 
    END
RETURN
END
GO
```

The following statement calls the `udfSplit()` function:

```
SELECT 
    * 
FROM 
    udfSplit('foo,bar,baz',',');
```

Here is the output:

![SQL Server Table Variables - user-defined function example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Table-Variables-user-defined-function-example.png)

In this tutorial, you will learn how to use the SQL Server table variables which offer some performance benefits and flexibility in comparison with temporary tables.

Was this tutorial helpful?

---
Source: [An Introduction to SQL Server Table Variables By Examples](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-variables/)