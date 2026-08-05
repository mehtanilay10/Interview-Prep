# SQL Server SELECT TOP

**Summary**: in this tutorial, you will learn how to use the SQL Server `SELECT TOP` statement to limit the rows returned by a query.

## Introduction to SQL Server SELECT TOP [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-top/#introduction-to-sql-server-select-top "Anchor for Introduction to SQL Server SELECT TOP")

The `SELECT TOP` clause allows you to limit the rows or percentage of rows returned by a query. It is useful when you want to retrieve a specific number of rows from a large table.

Since the order of rows stored in a table is *unspecified*, the `SELECT TOP` statement should always be used with the `[ORDER BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/)` clause. This ensures the result set is limited to the first `N` number of ordered rows.

The following shows the syntax of the `TOP` clause with the `SELECT` statement:

```
SELECT TOP (expression) [PERCENT]
    [WITH TIES]
FROM 
    table_name
ORDER BY 
    column_name;
```

In this syntax, the `SELECT` statement may include other clauses such as `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)`, `[JOIN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-joins/)`, and `[GROUP BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/)` and `[HAVING](https://www.sqlservertutorial.net/sql-server-basics/sql-server-having/)`.

### expression [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-top/#expression "Anchor for expression")

Following the `TOP` keyword is an expression that specifies the number of rows to be returned. The expression is evaluated to a float value if `PERCENT` is used, otherwise, it is converted to a `[BIGINT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-int/)` value.

### PERCENT [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-top/#percent "Anchor for PERCENT")

The `PERCENT` keyword indicates that the query returns the first `N` percentage of rows, where `N` is the result of the `expression`.

###  WITH TIES [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-top/#with-ties "Anchor for  WITH TIES")

The `WITH TIES` allows you to return additional rows with values that match those of the last row in the limited result set. Note that `WITH TIES` may result in more rows being returned than specified in the expression.

For example, if you want to return the most expensive product, you can use the `TOP 1`. However, if two or more products have the same prices as the most expensive product, then you may miss the other most expensive products in the result set.

To avoid this, you can use `TOP 1 WITH TIES`. This will include not only the most expensive product but also other products that have the same highest price. By doing this, you won’t miss any equally expensive products in the result set.

## SQL Server SELECT TOP examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-top/#sql-server-select-top-examples "Anchor for SQL Server SELECT TOP examples")

We will use the `production.products` table in the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) for the demonstration.

![products](https://www.sqlservertutorial.net/wp-content/uploads/products.png)

### 1) Using SQL Server SELECT TOP with a constant value [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-top/#1-using-sql-server-select-top-with-a-constant-value "Anchor for 1) Using SQL Server SELECT TOP with a constant value")

The following query uses `SELECT TOP` with a constant to return the top 10 most expensive products from the `production.products` table:

```
SELECT TOP 10
    product_name, 
    list_price
FROM
    production.products
ORDER BY 
    list_price DESC;
```

Here is the result:

![SQL Server SELECT TOP - top ten most expensive products](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-TOP-top-ten-most-expensive-products.png)

### 2) Using SELECT TOP to return a percentage of rows [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-top/#2-using-select-top-to-return-a-percentage-of-rows "Anchor for 2) Using SELECT TOP to return a percentage of rows")

The following example uses `PERCENT` to specify the number of products returned in the result set.

The `production.products` table has `321` rows. Therefore, one percent of `321` is a fraction value ( `3.21`), SQL Server rounds it up to the next whole number, which is four ( `4`) in this case:

```
SELECT TOP 1 PERCENT
    product_name, 
    list_price
FROM
    production.products
ORDER BY 
    list_price DESC;
```

Output:

![SQL Server SELECT TOP - TOP PERCENT example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-TOP-top-one-percent-most-expensive-products.png)

### 3) Using SELECT TOP WITH TIES to include rows that match values in the last row [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-top/#3-using-select-top-with-ties-to-include-rows-that-match-values-in-the-last-row "Anchor for 3) Using SELECT TOP WITH TIES to include rows that match values in the last row")

The following query uses the `SELECT TOP WITH TIES` to retrieve the top three most expensive products from the `production.products` table:

```
SELECT TOP 3 WITH TIES
    product_name, 
    list_price
FROM
    production.products
ORDER BY 
    list_price DESC;
```

Output:

![SQL Server SELECT TOP - TOP WITH TIES example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-TOP-TOP-WITH-TIES-examples.png)

In this example, the third most expensive product has a list price of `6499.99`.

Because the statement uses `TOP WITH TIES`, it returns three additional products with the same list prices as the third one.

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-top/#summary "Anchor for Summary")

-   Use the SQL Server `SELECT TOP` statement to limit the number of rows or percentage of rows returned by a query.

Was this tutorial helpful?

---
Source: [SQL Server SELECT TOP](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-top/)