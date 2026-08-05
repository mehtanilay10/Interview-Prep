# SQL Server WHERE Clause

**Summary**: in this tutorial, you will learn how to use the SQL Server `WHERE` clause to filter rows returned by a query.

## Introduction to SQL Server WHERE clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/#introduction-to-sql-server-where-clause "Anchor for Introduction to SQL Server WHERE clause")

The `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement retrieves all rows from a table. However, this is often unnecessary because the application may only need to process a subset of rows at the time.

To retrieve rows that satisfy one or more conditions, you use the `WHERE` clause in the `SELECT` statement.

Here’s the syntax of the `WHERE` clause:

```
SELECT
    select_list
FROM
    table_name
WHERE
    search_condition;
```

In this syntax, the `search_condition` is a logical expression or a combination of multiple logical expressions. In SQL, a logical expression is also known as a *predicate*.

In the `WHERE` clause, you specify a search condition to filter rows returned by the `FROM` clause. The `WHERE` clause only returns the rows for which the `search_condition` evaluates to `TRUE`.

Note that SQL Server uses three-valued predicate logic where a logical expression can evaluate to `TRUE`, `FALSE`, or `UNKNOWN`. The `WHERE` clause will not return any row that causes the predicate to evaluate to `FALSE` or `UNKNOWN`.

## SQL Server WHERE examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/#sql-server-where-examples "Anchor for SQL Server WHERE examples")

We will use the `production.products` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) for the demonstration.

![Products Table](https://www.sqlservertutorial.net/wp-content/uploads/products.png)

### 1) Using the WHERE clause with a simple equality operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/#1-using-the-where-clause-with-a-simple-equality-operator "Anchor for 1) Using the WHERE clause with a simple equality operator")

The following query uses a `WHERE` clause to retrieve products with the category ID 1:

```
SELECT
    product_id,
    product_name,
    category_id,
    model_year,
    list_price
FROM
    production.products
WHERE
    category_id = 1
ORDER BY
    list_price DESC;
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-WHERE-simple-equality-test.png)

### 2) Using the WHERE clause with the AND operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/#2-using-the-where-clause-with-the-and-operator "Anchor for 2) Using the WHERE clause with the AND operator")

The following example uses a `WHERE` clause to find products that belong to category id 1 and the model 2018:

```
SELECT
    product_id,
    product_name,
    category_id,
    model_year,
    list_price
FROM
    production.products
WHERE
    category_id = 1 AND model_year = 2018
ORDER BY
    list_price DESC;
```

Output:

![SQL Server WHERE - match two conditions](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-WHERE-match-two-conditions.png)

In this example, the condition in the `WHERE` clause uses the logical operator `[AND](https://www.sqlservertutorial.net/sql-server-basics/sql-server-and/)` to combine the two conditions.

### 3) Using WHERE to filter rows using a comparison operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/#3-using-where-to-filter-rows-using-a-comparison-operator "Anchor for 3) Using WHERE to filter rows using a comparison operator")

The following statement finds the products with a list price greater than 300 and the model of 2018.

```
SELECT
    product_id,
    product_name,
    category_id,
    model_year,
    list_price
FROM
    production.products
WHERE
    list_price > 300 AND model_year = 2018
ORDER BY
    list_price DESC;
```

Output:

![SQL Server WHERE - comparison operators](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-WHERE-comparison-operators.png)

### 4) Using the WHERE clause to filter rows that meet any of two conditions [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/#4-using-the-where-clause-to-filter-rows-that-meet-any-of-two-conditions "Anchor for 4) Using the WHERE clause to filter rows that meet any of two conditions")

The following query uses a `WHERE` clause to find products that meet either condition: a list price greater than 3,000 or the model of 2018:

```
SELECT
    product_id,
    product_name,
    category_id,
    model_year,
    list_price
FROM
    production.products
WHERE
    list_price > 3000 OR model_year = 2018
ORDER BY
    list_price DESC;
```

Output:

![SQL Server WHERE - match any of two conditions](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-WHERE-match-one-of-two-conditions.png)

Note that the `WHERE` clause uses the `[OR](https://www.sqlservertutorial.net/sql-server-basics/sql-server-or/)` operator to combine conditions.

### 5) Using the WHERE clause to filter rows with the value between two values [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/#5-using-the-where-clause-to-filter-rows-with-the-value-between-two-values "Anchor for 5) Using the WHERE clause to filter rows with the value between two values")

The following statement finds the products with list prices between 1,899 and 1,999.99:

```
SELECT
    product_id,
    product_name,
    category_id,
    model_year,
    list_price
FROM
    production.products
WHERE
    list_price BETWEEN 1899.00 AND 1999.99
ORDER BY
    list_price DESC;
```

Output:

### 

![SQL Server WHERE - between operator](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-WHERE-between-operator.png)

[#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/# "Anchor for <figure><img class=\"alignnone size-full wp-image-205\" src=\"https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-WHERE-between-operator.png\" alt=\"SQL Server WHERE - between operator\" width=\"429\" height=\"118\"></figure>")

### 6) Using the WHERE clause to filter rows that have a value in a list of values [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/#6-using-the-where-clause-to-filter-rows-that-have-a-value-in-a-list-of-values "Anchor for 6) Using the WHERE clause to filter rows that have a value in a list of values")

The following example uses the `[IN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-in/)` operator to find products with a list price of 299.99, 466.99, or 489.99.

```
SELECT
    product_id,
    product_name,
    category_id,
    model_year,
    list_price
FROM
    production.products
WHERE
    list_price IN (299.99, 369.99, 489.99)
ORDER BY
    list_price DESC;
```

Output:

### 

![SQL Server WHERE - IN operator](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-WHERE-IN-operator.png "SQL Server WHERE - IN operator")

[#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/# "Anchor for <figure><img class=\"alignnone wp-image-200 size-full\" title=\"SQL Server WHERE - IN operator\" src=\"https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-WHERE-IN-operator.png\" alt=\"SQL Server WHERE - IN operator\" width=\"481\" height=\"264\"></figure>")

### 7) Finding rows whose values contain a string [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/#7-finding-rows-whose-values-contain-a-string "Anchor for 7) Finding rows whose values contain a string")

The following example uses the `[LIKE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-like/)` operator to find products whose name contains the string `Cruiser`:

```
SELECT
    product_id,
    product_name,
    category_id,
    model_year,
    list_price
FROM
    production.products
WHERE
    product_name LIKE '%Cruiser%'
ORDER BY
    list_price;
```

Output:

![SQL Server WHERE - LIKE operator](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-WHERE-LIKE-operator.png)

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/#summary "Anchor for Summary")

-   Use the SQL Server `WHERE` clause to filter rows based on one or more conditions.

Was this tutorial helpful?

---
Source: [SQL Server WHERE Clause](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)