# SQL Server CROSS APPLY Clause

**Summary**: in this tutorial, you will learn how to use the SQL Server `CROSS APPLY` clause to perform an inner join a table with a table-valued function or a correlated subquery.

## Introduction to the SQL Server CROSS APPLY clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cross-apply/#introduction-to-the-sql-server-cross-apply-clause "Anchor for Introduction to the SQL Server CROSS APPLY clause")

The `CROSS APPLY` clause allows you to perform an inner join a table with a [table-valued function](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-valued-functions/) or a [correlated subquery](https://www.sqlservertutorial.net/sql-server-basics/sql-server-correlated-subquery/).

In SQL Server, a table-valued function is a [user-defined function](https://www.sqlservertutorial.net/sql-server-user-defined-functions/) that [returns multiple rows as a table](https://www.sqlservertutorial.net/sql-server-user-defined-functions/sql-server-table-valued-functions/).

The `CROSS APPLY` clause works like an `INNER JOIN` clause. But instead of joining two tables, the `CROSS APPLY` clause joins a table with a table-valued function or a correlated subquery.

Here’s the basic syntax of the `CROSS APPLY` clause:

```
SELECT
  select_list
FROM
  table1
  CROSS APPLY table_function(table1.column) AS alias;
```

In this syntax:

-   `table1` is the main table from which you want to join.

-   `table_function`: is the table-valued function to apply to each row. Alternatively, you can use a correlated subquery.
-   `column`: is the column from `table1` that will be passed as a parameter to the `table_function`.

-   `alias` is the alias for the result set returned by the `table_function`.

The `CROSS APPLY` clause will apply the `table_function` to each row from the `table1`. If you use a correlated subquery, the `CROSS APPLY` clause will execute it for each row from the `table1`.

In practice, you should use the `CROSS APPLY` clauses when you cannot use `INNER JOIN` clauses.

Let’s explore some useful use cases of the `CROSS APPLY` clause.

We’ll use the `production.categories` and `production.products` tables from the [sample database](https://www.sqlservertutorial.net/getting-started/sql-server-sample-database/) for the demonstration:

![SQL Server CROSS APPLY Operator - Sample table example](https://www.sqlservertutorial.net/wp-content/uploads/products-categories.png)

The following example uses the `CROSS APPLY` clause to join the `production.categories` table with a correlated subquery to retrieve the top two most expensive products for each product category:

```
SELECT
  c.category_name,
  r.product_name,
  r.list_price
FROM
  production.categories c
  CROSS APPLY (
    SELECT
      TOP 2 *
    FROM
      production.products p
    WHERE
      p.category_id = c.category_id
    ORDER BY
      list_price DESC,
      product_name
  ) r
ORDER BY
  c.category_name,
  r.list_price DESC;
```

Output:

```
category_name       | product_name                                   | list_price
--------------------+------------------------------------------------+---------
Children Bicycles   | Electra Straight 8 3i (20-inch) - Boy's - 2017 | 489.99
Children Bicycles   | Electra Townie 3i EQ (20-inch) - Boys' - 2017  | 489.99
Comfort Bicycles    | Electra Townie Go! 8i - 2017/2018              | 2599.99
Comfort Bicycles    | Electra Townie Balloon 7i EQ - 2018            | 899.99
Cruisers Bicycles   | Electra Townie Commute Go! - 2018              | 2999.99
Cruisers Bicycles   | Electra Townie Commute Go! Ladies' - 2018      | 2999.99
Cyclocross Bicycles | Trek Boone 7 Disc - 2018                       | 3999.99
Cyclocross Bicycles | Trek Boone 7 - 2017                            | 3499.99
Electric Bikes      | Trek Powerfly 8 FS Plus - 2017                 | 4999.99
Electric Bikes      | Trek Powerfly 7 FS - 2018                      | 4999.99
Mountain Bikes      | Trek Fuel EX 9.8 27.5 Plus - 2017              | 5299.99
Mountain Bikes      | Trek Remedy 9.8 - 2017                         | 5299.99
Road Bikes          | Trek Domane SLR 9 Disc - 2018                  | 11999.99
Road Bikes          | Trek Domane SLR 8 Disc - 2018                  | 7499.99
(14 rows)
```

How it works.

For each row from the `production.categories` table, the `CROSS APPLY` executes the following [correlated subquery](https://www.sqlservertutorial.net/sql-server-basics/sql-server-correlated-subquery/) to retrieve the top two most expensive products:

```
SELECT
  TOP 2 *
FROM
  production.products p
WHERE
  p.category_id = c.category_id
ORDER BY
  list_price DESC,
  product_name
```

### 2) Using the CROSS APPLY clause to join a table with a table-valued function [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cross-apply/#2-using-the-cross-apply-clause-to-join-a-table-with-a-table-valued-function "Anchor for 2) Using the CROSS APPLY clause to join a table with a table-valued function")

First, define a table-valued function that returns the top two most expensive products by category id:

```
CREATE FUNCTION GetTopProductsByCategory (@category_id INT)
RETURNS TABLE
AS
RETURN (
    SELECT TOP 2 *
    FROM production.products p
    WHERE p.category_id = @category_id 
    ORDER BY list_price DESC, product_name
);
```

Second, use the `CROSS APPLY` clause with the table-valued function `GetTopProductsByCategory` to retrieve the top two most expensive products within each category:

```
SELECT
  c.category_name,
  r.product_name,
  r.list_price
FROM
  production.categories c
  CROSS APPLY GetTopProductsByCategory(c.category_id) r
ORDER BY
  c.category_name,
  r.list_price DESC;
```

It returns the same result as the query that uses the correlated subquery above.

### 3) Using the CROSS APPLY clause to process JSON data [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cross-apply/#3-using-the-cross-apply-clause-to-process-json-data "Anchor for 3) Using the CROSS APPLY clause to process JSON data")

First, [create a table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) called `product_json` to store the product data:

```
CREATE TABLE product_json(
    id INT IDENTITY PRIMARY KEY,
    info NVARCHAR(MAX)
);
```

In the `product_json` table:

-   `id` is the [primary key](https://www.sqlservertutorial.net/sql-server-basics/sql-server-primary-key/) column with the [identity](https://www.sqlservertutorial.net/sql-server-basics/sql-server-identity/) attribute.

-   `info` is the `NVARCHAR(MAX)` that will store the [JSON data](https://www.sqlservertutorial.net/sql-server-basics/sql-server-json/).

Second, [insert rows](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert-multiple-rows/) into the `product_json` table:

```
INSERT INTO product_json(info)
VALUES 
    ('{"Name": "Laptop", "Price": 999, "Category": "Electronics"}'),
    ('{"Name": "Headphones", "Price": 99, "Category": "Electronics"}'),
    ('{"Name": "Book", "Price": 15, "Category": "Books"}');
```

Third, extract information from the info JSON data using the `CROSS APPLY` clause with the `[OPENJSON()](https://www.sqlservertutorial.net/sql-server-json-functions/sql-server-openjson/)` function:

```
SELECT
  p.id,
  j.*
FROM
  product_json p
  CROSS APPLY OPENJSON (p.info) WITH
  (
    Name NVARCHAR(100),
    Price DECIMAL(10, 2),
    Category NVARCHAR(100)
  ) AS j;
```

Output:

```
id | Name       | Price  | Category
---+------------+--------+-------------
1  | Laptop     | 999.00 | Electronics
2  | Headphones | 99.00  | Electronics
3  | Book       | 15.00  | Books
(3 rows)
```

### 4) Using the CROSS APPLY clause to remove the nested REPLACE() function [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cross-apply/#4-using-the-cross-apply-clause-to-remove-the-nested-replace-function "Anchor for 4) Using the CROSS APPLY clause to remove the nested REPLACE() function")

First, [create a table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) called `companies` that stores the company names:

```
CREATE TABLE companies(
   id INT IDENTITY PRIMARY KEY,
   name VARCHAR(255) NOT NULL
);
```

Second, [insert rows](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert-multiple-rows/) into the `companies` table:

```
INSERT INTO
  companies (name)
VALUES
  ('ABC Corporation'),
  ('XYZ Inc.'),
  ('JK Pte Ltd');
```

Suppose you want to get the company names without words like `Corporation`, `Inc.`, and `Pte Ltd`. To achieve this, you can use multiple `[REPLACE()](https://www.sqlservertutorial.net/sql-server-string-functions/sql-server-replace-function/)` functions.

Third, retrieve the company names from the `companies` table:

```
SELECT TRIM(REPLACE(REPLACE(REPLACE(name,'Corporation',''), 'Inc.',''),'Pte Ltd','')) company_name
FROM companies;
```

Output:

```
company_name
------------
ABC
XYZ
JK
(3 rows)
```

The query works as expected but it is quite complex. To fix this, you can utilize the `CROSS APPLY` clause follows:

```
SELECT TRIM(r3.name) company_name
FROM companies c
CROSS APPLY (SELECT REPLACE(c.name,'Corporation', '') name) AS r1 
CROSS APPLY (SELECT REPLACE(r1.name,'Inc.', '') name) AS r2
CROSS APPLY (SELECT REPLACE(r2.name,'Pte Ltd', '') name) AS r3;
```

In this query, we use a series of `CROSS` `APPLY` clauses to progressively replace specific words (`Corporation`, `Inc.`, and `Pte Ltd`) from the company names.

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cross-apply/#summary "Anchor for Summary")

-   Use the `CROSS` `APPLY` clause to perform an inner join a table with the table-valued function or a correlated subquery.

Was this tutorial helpful?

---
Source: [SQL Server CROSS APPLY Clause](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cross-apply/)