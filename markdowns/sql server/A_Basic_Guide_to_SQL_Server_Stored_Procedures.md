# A Basic Guide to SQL Server Stored Procedures

**Summary**: in this tutorial, you will learn how to manage stored procedures in SQL Server including creating, executing, modifying, and deleting stored procedures.

## Creating a simple stored procedure [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/basic-sql-server-stored-procedures/#creating-a-simple-stored-procedure "Anchor for Creating a simple stored procedure")

The following `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement returns a list of products from the `products` table in the BikeStores [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/):

```
SELECT 
	product_name, 
	list_price
FROM 
	production.products
ORDER BY 
	product_name;
```

To create a stored procedure that wraps this query, you use the `CREATE PROCEDURE` statement as follows:

```
CREATE PROCEDURE uspProductList
AS
BEGIN
    SELECT 
        product_name, 
        list_price
    FROM 
        production.products
    ORDER BY 
        product_name;
END;
```

In this syntax:

-   The `uspProductList` is the name of the stored procedure.

-   The `AS` keyword separates the heading and the body of the stored procedure.
-   If the stored procedure has one statement, the `BEGIN` and `END` keywords surrounding the statement are optional. However, it is a good practice to include them to make the code clear.

Note that in addition to the `CREATE PROCEDURE` keywords, you can use the `CREATE PROC` keywords to make the statement shorter.

To compile this stored procedure, you execute it as a normal SQL statement in SQL Server Management Studio as shown in the following picture:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Stored-Procedure-Compiling.png)

If everything is correct, then you will see the following message:

```
Commands completed successfully.
```

It means that the stored procedure has been successfully compiled and saved into the database catalog.

You can find the stored procedure in the Object Explorer, under **Programmability > Stored Procedures** as shown in the following picture:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Stored-Procedure-Object-Explorer.png)

Sometimes, you need to click the **Refresh** button to manually update the database objects in the Object Explorer.

## Executing a stored procedure [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/basic-sql-server-stored-procedures/#executing-a-stored-procedure "Anchor for Executing a stored procedure")

To execute a stored procedure, you use the `EXECUTE` or `EXEC` statement followed by the name of the stored procedure:

```
EXECUTE sp_name;
```

Or

```
EXEC sp_name;
```

where `sp_name` is the name of the stored procedure that you want to execute.

For example, to execute the `uspProductList` stored procedure, you use the following statement:

```
EXEC uspProductList;
```

The stored procedure returns the following output:

![SQL Server Stored Procedure output](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Stored-Procedure-output.png)

## Modifying a stored procedure [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/basic-sql-server-stored-procedures/#modifying-a-stored-procedure "Anchor for Modifying a stored procedure")

To modify an existing stored procedure, you use the `ALTER PROCEDURE` statement.

First, open the stored procedure to view its contents by right-clicking the stored procedure name and select **Modify** menu item:

![SQL Server Stored Procedure modifying](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Stored-Procedure-modifying.png)

Second, change the body of the stored procedure by sorting the products by list prices instead of product names:

```
 ALTER PROCEDURE uspProductList
    AS
    BEGIN
        SELECT 
            product_name, 
            list_price
        FROM 
            production.products
        ORDER BY 
            list_price 
    END;
```

Third, click the **Execute** button, SQL Server modifies the stored procedure and returns the following output:

```
Commands completed successfully.
```

Now, if you execute the stored procedure again, you will see the changes taking effect:

```
EXEC uspProductList;
```

The following shows the partial output:

![SQL Server Stored Procedure output changes](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Stored-Procedure-output-changes.png)

## Deleting a stored procedure [#](https://www.sqlservertutorial.net/sql-server-stored-procedures/basic-sql-server-stored-procedures/#deleting-a-stored-procedure "Anchor for Deleting a stored procedure")

To delete a stored procedure, you use the `DROP PROCEDURE` or `DROP PROC` statement:

```
DROP PROCEDURE sp_name;
```

or

```
DROP PROC sp_name;    
```

where `sp_name` is the name of the stored procedure that you want to delete.

For example, to remove the `uspProductList` stored procedure, you execute the following statement:

```
DROP PROCEDURE uspProductList;
```

In this tutorial, you have learned how to manage SQL Server stored procedures including creating, executing, modifying, and deleting stored procedures.

Was this tutorial helpful?

---
Source: [A Basic Guide to SQL Server Stored Procedures](https://www.sqlservertutorial.net/sql-server-stored-procedures/basic-sql-server-stored-procedures/)