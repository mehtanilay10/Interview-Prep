# SQL Server OFFSET FETCH

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-offset-fetch/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `OFFSET` `FETCH` clauses to limit the number of rows returned by a query.

## Introduction to SQL Server OFFSET FETCH [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-offset-fetch/#introduction-to-sql-server-offset-fetch "Anchor for Introduction to SQL Server OFFSET FETCH")

The `OFFSET` and `FETCH` clauses are options of the `[ORDER BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/)` clause. They allow you to limit the number of rows returned by a [query](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/).

Here’s the syntax for using the `OFFSET` and `FETCH` clauses:

```
ORDER BY column_list [ASC |DESC]
OFFSET offset_row_count {ROW | ROWS}
FETCH {FIRST | NEXT} fetch_row_count {ROW | ROWS} ONLY
```

In this syntax:

-   The `OFFSET` clause specifies the number of rows to skip before starting to return rows from the query. The `offset_row_count` can be a constant, variable, or parameter that is greater or equal to zero.

-   The `FETCH` clause specifies the number of rows to return after the `OFFSET` clause has been processed. The `offset_row_count` can be a constant, variable, or scalar that is greater or equal to one.
-   The `OFFSET` clause is mandatory, while the `FETCH` clause is optional. Additionally, `FIRST` and `NEXT` are synonyms and can be used interchangeably. Similarly, you can use `ROW` and `ROWS` interchangeably.

The following picture illustrates the `OFFSET` and `FETCH` clauses:

![SQL Server OFFSET FETCH](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-OFFSET-FETCH.png)

It’s important to note that you must use the `OFFSET` and `FETCH` clauses with the `ORDER BY` clause. Otherwise, you encounter an error.

The `OFFSET` and `FETCH` clauses are preferable for implementing the query paging solutions compared to the [TOP](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-top/) clause.

The `OFFSET` and `FETCH` clauses have been available since SQL Server 2012 (11.x) and later, as well as Azure SQL Database.

## SQL Server OFFSET and FETCH clause examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-offset-fetch/#sql-server-offset-and-fetch-clause-examples "Anchor for SQL Server OFFSET and FETCH clause examples")

We will use the `products` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) for the demonstration.

![products](https://www.sqlservertutorial.net/wp-content/uploads/products.png)

### 1) Using the SQL Server OFFSET FETCH example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-offset-fetch/#1-using-the-sql-server-offset-fetch-example "Anchor for 1) Using the SQL Server OFFSET FETCH example")

The following query uses a `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement to retrieve all rows from the `products` table and sorts them by the list prices and names:

```
SELECT
    product_name,
    list_price
FROM
    production.products
ORDER BY
    list_price,
    product_name;
```

Output:

![SQL Server OFFSET FETCH result set](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-OFFSET-FETCH-result-set.png)

To skip the first 10 products and return the rest, you use the `OFFSET` clause as shown in the following statement:

```
SELECT
    product_name,
    list_price
FROM
    production.products
ORDER BY
    list_price,
    product_name 
OFFSET 10 ROWS;
```

Output:

![SQL Server OFFSET FETCH example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-OFFSET-FETCH-example.png)

To skip the first 10 products and select the next 10 products, you use both `OFFSET` and `FETCH` clauses as follows:

```
SELECT
    product_name,
    list_price
FROM
    production.products
ORDER BY
    list_price,
    product_name 
OFFSET 10 ROWS 
FETCH NEXT 10 ROWS ONLY;
```

Output:

![SQL Server OFFSET FETCH skip 10 rows fetch next 10 rows example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-OFFSET-FETCH-skip-10-rows-fetch-next-10-rows-example.png)

### 2) Using the OFFSET FETCH clause to get the top N rows [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-offset-fetch/#2-using-the-offset-fetch-clause-to-get-the-top-n-rows "Anchor for 2) Using the OFFSET FETCH clause to get the top N rows")

The following example uses the `OFFSET FETCH` clause to retrieve the top 10 most expensive products from the `products` table:

```
SELECT
    product_name,
    list_price
FROM
    production.products
ORDER BY
    list_price DESC,
    product_name 
OFFSET 0 ROWS 
FETCH FIRST 10 ROWS ONLY;
```

Output:

![SQL Server OFFSET FETCH top 10 most expensive products](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-OFFSET-FETCH-top-10-most-expensive-products.png)

In this example:

-   First, the `ORDER BY` clause sorts the products by their list prices in descending order.

-   Then, the `OFFSET` clause skips zero rows, and the `FETCH` clause retrieves the first 10 products from the list.

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-offset-fetch/#summary "Anchor for Summary")

-   Use the SQL Server `OFFSET` `FETCH` clauses to limit the number of rows returned by a query.

Was this tutorial helpful?

---
Source: [SQL Server OFFSET FETCH](https://www.sqlservertutorial.net/sql-server-basics/sql-server-offset-fetch/)