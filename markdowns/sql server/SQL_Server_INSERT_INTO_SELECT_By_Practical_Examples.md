# SQL Server INSERT INTO SELECT By Practical Examples

**Summary**: in this tutorial, you will learn how to use the SQL Server `INSERT INTO SELECT` statement to add data from other tables to a table.

## Introduction to SQL Server INSERT INTO SELECT statement [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert-into-select/#introduction-to-sql-server-insert-into-select-statement "Anchor for Introduction to SQL Server <code>INSERT INTO SELECT</code> statement")

To [insert](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) data from other tables into a table, you use the following SQL Server `INSERT INTO SELECT` statement:

```
INSERT  [ TOP ( expression ) [ PERCENT ] ] 
INTO target_table (column_list)
query
```

In this syntax, the statement inserts rows returned by the `query` into the `target_table`.

The `query` is any valid `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement that retrieves data from other tables. It must return the values that are corresponding to the columns specified in the `column_list`.

The `TOP` clause part is optional. It allows you to specify the number of rows returned by the query to be inserted into the target table. If you use the `PERCENT` option, the statement will insert the percent of rows instead. Note that it is a best practice to always use the `TOP` clause with the [`ORDER BY`](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/) clause.

Let’s [create a table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `addresses` for the demonstration:

```
CREATE TABLE sales.addresses (
    address_id INT IDENTITY PRIMARY KEY,
    street VARCHAR (255) NOT NULL,
    city VARCHAR (50),
    state VARCHAR (25),
    zip_code VARCHAR (5)
);   
```

### 1) Insert all rows from another table example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert-into-select/#1-insert-all-rows-from-another-table-example "Anchor for 1) Insert all rows from another table example")

The following statement [inserts](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) all addresses from the `customers` table into the `addresses` table:

```
INSERT INTO sales.addresses (street, city, state, zip_code) 
SELECT
    street,
    city,
    state,
    zip_code
FROM
    sales.customers
ORDER BY
    first_name,
    last_name; 
```

To verify the insert, you use the following query:

```
SELECT
    *
FROM
    sales.addresses;
```

Here is the result:

![SQL Server INTO INTO SELECT example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-INTO-INTO-SELECT-example.png)

### 2) Insert some rows from another table example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert-into-select/#2-insert-some-rows-from-another-table-example "Anchor for 2) Insert some rows from another table example")

Sometimes, you just need to insert some rows from another table into a table. In this case, you limit the number of rows returned from the query by using conditions in the `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause.

The following statement adds the addresses of the stores located in `Santa Cruz` and `Baldwin` to the `addresses` table:

```
INSERT INTO 
    sales.addresses (street, city, state, zip_code) 
SELECT
    street,
    city,
    state,
    zip_code
FROM
    sales.stores
WHERE
    city IN ('Santa Cruz', 'Baldwin')
```

SQL Server returned the following message indicating that two rows have been inserted successfully.

```
(2 rows affected)
```

### 3) Insert the top N of rows [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert-into-select/#3-insert-the-top-n-of-rows "Anchor for 3) Insert the top <code>N</code> of rows")

First, you use the following statement to delete all rows from the `addresses` table:

```
TRUNCATE TABLE sales.addresses;
```

Second, to insert the top 10 customers sorted by their first names and last names, you use the `INSERT TOP INTO SELECT` statement as follows:

```
INSERT TOP (10) 
INTO sales.addresses (street, city, state, zip_code) 
SELECT
    street,
    city,
    state,
    zip_code
FROM
    sales.customers
ORDER BY
    first_name,
    last_name;
```

SQL Server returned the following message showing that ten rows have been inserted successfully.

```
(10 rows affected)
```

### 4) Insert the top percent of rows [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert-into-select/#4-insert-the-top-percent-of-rows "Anchor for 4) Insert the top percent of rows")

Instead of using an absolute number of rows, you can insert a percent number of rows into a table.

First, [truncate](https://www.sqlservertutorial.net/sql-server-basics/sql-server-truncate-table/) all rows from the `addresses` table:

```
TRUNCATE TABLE sales.addresses;
```

Second, insert the top 10 percent of rows from the `customers` table sorted by first names and last names into the `addresses` table:

```
INSERT TOP (10) PERCENT  
INTO sales.addresses (street, city, state, zip_code) 
SELECT
    street,
    city,
    state,
    zip_code
FROM
    sales.customers
ORDER BY
    first_name,
    last_name;
```

SQL Server issued the following message indicating that 145 rows have been inserted successfully.

```
(145 rows affected)
```

In this tutorial, you have learned how to use the SQL Server `INSERT INTO SELECT` statement to insert rows from other tables into a table.

Was this tutorial helpful?

---
Source: [SQL Server INSERT INTO SELECT By Practical Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert-into-select/)