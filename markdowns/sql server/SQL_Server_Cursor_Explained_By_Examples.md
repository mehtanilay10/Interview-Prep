# SQL Server Cursor Explained By Examples

**Summary**: in this tutorial, you will learn how to use the SQL Server cursor to process a result set, one row at a time.

SQL works based on set e.g., `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement returns a set of rows which is called a result set. However, sometimes, you may want to process a data set on a row by row basis. This is where cursors come into play.

## What is a database cursor [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-cursor/#what-is-a-database-cursor "Anchor for What is a database cursor")

A database cursor is an object that enables traversal over the rows of a result set. It allows you to process individual row returned by a query.

## SQL Server cursor life cycle [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-cursor/#sql-server-cursor-life-cycle "Anchor for SQL Server cursor life cycle")

These are steps for using a cursor:

![SQL Server Cursor](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Cursor.png)

First, declare a cursor.

```
DECLARE cursor_name CURSOR
    FOR select_statement;
```

To declare a cursor, you specify its name after the `DECLARE` keyword with the `CURSOR` data type and provide a `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement that defines the result set for the cursor.

Next, open and populate the cursor by executing the `SELECT` statement:

```
OPEN cursor_name;
```

Then, fetch a row from the cursor into one or more [variables](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/):

```
FETCH NEXT FROM cursor INTO variable_list;
```

SQL Server provides the `@@FETCHSTATUS` function that returns the status of the last cursor `FETCH` statement executed against the cursor; If `@@FETCHSTATUS` returns 0, meaning the `FETCH` statement was successful. You can use the `[WHILE](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-while/)` statement to fetch all rows from the cursor as shown in the following code:

```
WHILE @@FETCH_STATUS = 0  
    BEGIN
        FETCH NEXT FROM cursor_name;  
    END;
```

After that, close the cursor:

```
CLOSE cursor_name;
```

Finally, deallocate the cursor:

```
DEALLOCATE cursor_name;
```

## SQL Server cursor example [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-cursor/#sql-server-cursor-example "Anchor for SQL Server cursor example")

We’ll use the `prodution.products` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) to show you how to use a cursor:

![products](https://www.sqlservertutorial.net/wp-content/uploads/products.png)

First, declare two [variables](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/) to hold product name and list price, and a cursor to hold the result of a query that retrieves product name and list price from the `production.products` table:

```
DECLARE 
    @product_name VARCHAR(MAX), 
    @list_price   DECIMAL;

DECLARE cursor_product CURSOR
FOR SELECT 
        product_name, 
        list_price
    FROM 
        production.products;
```

Next, open the cursor:

```
OPEN cursor_product;
```

Then, fetch each row from the cursor and print out the product name and list price:

```
FETCH NEXT FROM cursor_product INTO 
    @product_name, 
    @list_price;

WHILE @@FETCH_STATUS = 0
    BEGIN
        PRINT @product_name + CAST(@list_price AS varchar);
        FETCH NEXT FROM cursor_product INTO 
            @product_name, 
            @list_price;
    END;
```

After that, close the cursor:

```
CLOSE cursor_product;
```

Finally, deallocate the cursor to release it.

```
DEALLOCATE cursor_product;
```

The following code snippets put everything together:

```
DECLARE 
    @product_name VARCHAR(MAX), 
    @list_price   DECIMAL;

DECLARE cursor_product CURSOR
FOR SELECT 
        product_name, 
        list_price
    FROM 
        production.products;

OPEN cursor_product;

FETCH NEXT FROM cursor_product INTO 
    @product_name, 
    @list_price;

WHILE @@FETCH_STATUS = 0
    BEGIN
        PRINT @product_name + CAST(@list_price AS varchar);
        FETCH NEXT FROM cursor_product INTO 
            @product_name, 
            @list_price;
    END;

CLOSE cursor_product;

DEALLOCATE cursor_product;
```

Here is the partial output:

![SQL Server Cursor Example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Cursor-Example.png)

In practice, you will rarely use the cursor to process a result set in a row-by-row manner.

In this tutorial, you have learned how to use the SQL Server cursor to process a result set, each row at a time.

Was this tutorial helpful?

---
Source: [SQL Server Cursor Explained By Examples](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-cursor/)