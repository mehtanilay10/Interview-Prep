# An Introduction to SQL Server Temporary Tables By Pracical Examples

**Summary**: in this tutorial, you will learn how to create SQL Server temporary tables and how to manipulate them effectively.

Temporary tables are tables that exist temporarily on the SQL Server.

The temporary tables are useful for storing the immediate result sets that are accessed multiple times.

## Creating temporary tables [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-temporary-tables/#creating-temporary-tables "Anchor for Creating temporary tables")

SQL Server provided two ways to create temporary tables via `SELECT INTO` and `[CREATE TABLE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/)` statements.

### Create temporary tables using SELECT INTO statement [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-temporary-tables/#create-temporary-tables-using-select-into-statement "Anchor for Create temporary tables using <code>SELECT INTO</code> statement")

The first way to create a temporary table is to use the `SELECT INTO` statement as shown below:

```
SELECT 
    select_list
INTO 
    temporary_table
FROM 
    table_name
....
```

The name of the temporary table starts with a hash symbol (`#`). For example, the following statement creates a temporary table using the `SELECT INTO` statement:

```
SELECT
    product_name,
    list_price
INTO #trek_products --- temporary table
FROM
    production.products
WHERE
    brand_id = 9;
```

In this example, we created a temporary table named `#trek_products` with two columns derived from the select list of the `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement. The statement created the temporary table and populated data from the `production.products` table into the temporary table.

Once you execute the statement, you can find the temporary table name created in the system database named `tempdb`, which can be accessed via the SQL Server Management Studio using the following path **System Databases > tempdb > Temporary Tables** as shown in the following picture:

![SQL Server Temporary Tables Example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Temporary-Tables-Example.png)

As you can see clearly from the picture, the temporary table also consists of a sequence of numbers as a postfix. This is a unique identifier for the temporary table. Because multiple database connections can create temporary tables with the same name, SQL Server automatically appends this unique number at the end of the temporary table name to differentiate between the temporary tables.

### Create temporary tables using CREATE TABLE statement [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-temporary-tables/#create-temporary-tables-using-create-table-statement "Anchor for Create temporary tables using <code>CREATE TABLE</code> statement")

The second way to create a temporary table is to use the `CREATE TABLE` statement:

```
CREATE TABLE #haro_products (
    product_name VARCHAR(MAX),
    list_price DEC(10,2)
);
```

This statement has the same syntax as creating a regular table. However, the name of the temporary table starts with a hash symbol (`#`)

After creating the temporary table, you can [insert data into this table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) as a regular table:

```
INSERT INTO #haro_products
SELECT
    product_name,
    list_price
FROM 
    production.products
WHERE
    brand_id = 2;
```

Of course, you can [query data](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/) against it within the current session:

```
SELECT
    *
FROM
    #haro_products;
```

![SQL Server Temporary Tables - Querying Data](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Temporary-Tables-Querying-Data.png)

However, if you open another connection and try the query above query, you will get the following error:

```
Invalid object name '#haro_products'.
```

This is because the temporary tables are only accessible within the session that created them.

## Global temporary tables [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-temporary-tables/#global-temporary-tables "Anchor for Global temporary tables")

Sometimes, you may want to create a temporary table that is accessible across connections. In this case, you can use global temporary tables.

Unlike a temporary table, the name of a global temporary table starts with a double hash symbol (`##`).

The following statements first create a global temporary table named `##heller_products` and then populate data from the `production.products` table into this table:

```
CREATE TABLE ##heller_products (
    product_name VARCHAR(MAX),
    list_price DEC(10,2)
);

INSERT INTO ##heller_products
SELECT
    product_name,
    list_price
FROM 
    production.products
WHERE
    brand_id = 3;
```

Now, you can access the `##heller_products` table from any session.

## Dropping temporary tables [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-temporary-tables/#dropping-temporary-tables "Anchor for Dropping temporary tables")

### Automatic removal [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-temporary-tables/#automatic-removal "Anchor for Automatic removal")

SQL Server drops a temporary table automatically when you close the connection that created it.

SQL Server drops a global temporary table once the connection that created it closed and the queries against this table from other connections completes.

### Manual Deletion [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-temporary-tables/#manual-deletion "Anchor for Manual Deletion")

From the connection in which the temporary table created, you can manually remove the temporary table by using the `[DROP TABLE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-drop-table/)` statement:

```
DROP TABLE ##table_name;
```

In this tutorial, you have learned about SQL Server temporary tables and how to create and remove them effectively.

Was this tutorial helpful?

---
Source: [An Introduction to SQL Server Temporary Tables By Pracical Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-temporary-tables/)