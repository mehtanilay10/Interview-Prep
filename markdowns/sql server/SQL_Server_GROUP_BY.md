# SQL Server GROUP BY

**Summary**: in this tutorial, you will learn how to use the SQL Server `GROUP BY` clause to arrange rows in groups by one or more columns.

## Introduction to SQL Server GROUP BY clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/#introduction-to-sql-server-group-by-clause "Anchor for Introduction to SQL Server GROUP BY clause")

The `GROUP BY` clause allows you to arrange the rows of a [query](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/) in groups. The groups are determined by the columns that you specify in the `GROUP BY` clause.

The following illustrates the `GROUP BY` clause syntax:

```
SELECT
    select_list
FROM
    table_name
GROUP BY
    column_name1,
    column_name2 ,...;
```

In this query, the `GROUP BY` clause produces a group for each combination of the values in the columns listed in the `GROUP BY` clause.

Consider the following example:

```
SELECT
    customer_id,
    YEAR (order_date) order_year
FROM
    sales.orders
WHERE
    customer_id IN (1, 2)
ORDER BY
    customer_id;
```

![SQL Server GROUP BY clause](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-GROUP-BY-clause.png)

In this example, we retrieve the customer id and the ordered year of the customers with customer id 1 and 2.

The output indicates that the customer with id 1 placed one order in 2016 and two orders in 2018. The customer id 2 placed two orders in 2017 and one order in 2018.

Let’s add a `GROUP BY` clause to the query to see the effect:

```
SELECT
    customer_id,
    YEAR (order_date) order_year
FROM
    sales.orders
WHERE
    customer_id IN (1, 2)
GROUP BY
    customer_id,
    YEAR (order_date)
ORDER BY
    customer_id;
```

![SQL Server GROUP BY clause example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-GROUP-BY-clause-example.png)

The `GROUP BY` clause arranged the first three rows into two groups and the next three rows into the other two groups with the unique combinations of the customer id and order year.

Functionally speaking, the `GROUP BY` clause in the above query produced the same result as the following query that uses the `[DISTINCT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-distinct/)` clause:

```
SELECT DISTINCT
    customer_id,
    YEAR (order_date) order_year
FROM
    sales.orders
WHERE
    customer_id IN (1, 2)
ORDER BY
    customer_id;
```

## 

![SQL Server GROUP BY - DISTINCT example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-GROUP-BY-DISTINCT-example.png "SQL Server GROUP BY - DISTINCT example")

[#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/# "Anchor for <figure><img class=\"alignnone wp-image-239 size-full\" title=\"SQL Server GROUP BY - DISTINCT example\" src=\"https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-GROUP-BY-DISTINCT-example.png\" alt=\"SQL Server GROUP BY - DISTINCT example\" width=\"141\" height=\"93\"></figure>")

## SQL Server GROUP BY clause and aggregate functions [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/#sql-server-group-by-clause-and-aggregate-functions "Anchor for SQL Server GROUP BY clause and aggregate functions")

In practice, the `GROUP BY` clause is often used with [aggregate functions](https://www.sqlservertutorial.net/sql-server-aggregate-functions/) for generating summary reports.

An [aggregate function](https://www.sqlservertutorial.net/sql-server-aggregate-functions/) performs a calculation on a group and returns a unique value per group. For example, `[COUNT()](https://www.sqlservertutorial.net/sql-server-aggregate-functions/sql-server-count/)` returns the number of rows in each group. Other commonly used aggregate functions are `[SUM()](https://www.sqlservertutorial.net/sql-server-aggregate-functions/sql-server-sum/)`, [`AVG()`](https://www.sqlservertutorial.net/sql-server-aggregate-functions/sql-server-avg/) (average), `[MIN()](https://www.sqlservertutorial.net/sql-server-aggregate-functions/sql-server-min/)` (minimum), `[MAX()](https://www.sqlservertutorial.net/sql-server-aggregate-functions/sql-server-max/)` (maximum).

The `GROUP BY` clause arranges rows into groups and an aggregate function returns the summary (count, min, max, average, sum, etc.,) for each group.

For example, the following query returns the number of orders placed by the customer by year:

```
SELECT
    customer_id,
    YEAR (order_date) order_year,
    COUNT (order_id) order_placed
FROM
    sales.orders
WHERE
    customer_id IN (1, 2)
GROUP BY
    customer_id,
    YEAR (order_date)
ORDER BY
    customer_id; 
```

![SQL Server GROUP BY clause - expression example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-GROUP-BY-clause-expression-example.png)

If you want to reference a column or expression that is not listed in the `GROUP BY` clause, you must use that column as the input of an [aggregate function](https://www.sqlservertutorial.net/sql-server-aggregate-functions/). Otherwise, you will get an error because there is no guarantee that the column or expression will return a single value per group. For example, the following query will fail:

```
SELECT
    customer_id,
    YEAR (order_date) order_year,
    order_status
FROM
    sales.orders
WHERE
    customer_id IN (1, 2)
GROUP BY
    customer_id,
    YEAR (order_date)
ORDER BY
    customer_id;
```

## More GROUP BY clause examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/#more-group-by-clause-examples "Anchor for More GROUP BY clause examples")

Let’s take some more examples to understand how the `GROUP BY` clause works.

### 1) Using GROUP BY clause with the COUNT() function example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/#1-using-group-by-clause-with-the%c2%a0count-function-example "Anchor for 1) Using GROUP BY clause with the COUNT() function example")

The following query returns the number of customers in every city:

```
SELECT
    city,
    COUNT (customer_id) customer_count
FROM
    sales.customers
GROUP BY
    city
ORDER BY
    city;
```

![SQL Server GROUP BY - COUNT example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-GROUP-BY-COUNT-example.png)

In this example, the `GROUP BY` clause groups the customers by city and the `COUNT()` function returns the number of customers in each city.

Similarly, the following query returns the number of customers by state and city.

```
SELECT
    city,
    state,
    COUNT (customer_id) customer_count
FROM
    sales.customers
GROUP BY
    state,
    city
ORDER BY
    city,
    state;
```

![SQL Server GROUP BY clause - multiple columns example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-GROUP-BY-clause-multiple-columns-example.png)

### 2) Using GROUP BY clause with the MIN and MAX functions example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/#2-using-group-by-clause-with-the-min-and-max-functions-example "Anchor for 2) Using GROUP BY clause with the MIN and MAX functions example")

The following statement returns the minimum and maximum list prices of all products with the model 2018 by brand:

```
SELECT
    brand_name,
    MIN (list_price) min_price,
    MAX (list_price) max_price
FROM
    production.products p
INNER JOIN production.brands b ON b.brand_id = p.brand_id
WHERE
    model_year = 2018
GROUP BY
    brand_name
ORDER BY
    brand_name;
```

![SQL Server GROUP BY - MIN and MAX example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-GROUP-BY-MIN-and-MAX-example.png)

In this example, the `WHERE` clause is processed before the `GROUP BY` clause, as always.

### 3) Using GROUP BY clause with the AVG() function example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/#3-using-group-by-clause-with-the%c2%a0avg-function-example "Anchor for 3) Using GROUP BY clause with the AVG() function example")

The following statement uses the `AVG()` function to return the average list price by brand for all products with the model year 2018:

```
SELECT
    brand_name,
    AVG (list_price) avg_price
FROM
    production.products p
INNER JOIN production.brands b ON b.brand_id = p.brand_id
WHERE
    model_year = 2018
GROUP BY
    brand_name
ORDER BY
    brand_name;
```

![SQL Server GROUP BY - AVG example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-GROUP-BY-AVG-example.png)

### 4) Using GROUP BY clause with the SUM function example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/#4-using-group-by-clause-with-the-sum-function-example "Anchor for 4) Using GROUP BY clause with the SUM function example")

See the following `order_items` table:

![order_items](https://www.sqlservertutorial.net/wp-content/uploads/order_items.png)

The following query uses the `SUM()` function to get the net value of every order:

```
SELECT
    order_id,
    SUM (
        quantity * list_price * (1 - discount)
    ) net_value
FROM
    sales.order_items
GROUP BY
    order_id;
```

![SQL Server GROUP BY - SUM example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-GROUP-BY-SUM-example.png)

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/#summary "Anchor for Summary")

-   Use the SQL Server `GROUP BY` clause to arrange rows in groups by a specified list of columns.

Was this tutorial helpful?

---
Source: [SQL Server GROUP BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/)