# SQL Server HAVING Clause

**Summary**: in this tutorial, you will learn how to use the SQL Server `HAVING` clause to filter the groups based on specified conditions.

## Introduction to SQL Server HAVING clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-having/#introduction-to-sql-server-having-clause "Anchor for Introduction to SQL Server HAVING clause")

The `HAVING` clause is often used with the `[GROUP BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/)` clause to filter groups based on a specified list of conditions. The following illustrates the `HAVING` clause syntax:

```
SELECT
    select_list
FROM
    table_name
GROUP BY
    group_list
HAVING
    conditions;
```

In this syntax, the `[GROUP BY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/)` clause summarizes the rows into groups and the `HAVING` clause applies one or more conditions to these groups. Only groups that make the conditions evaluated `TRUE` are included in the result. In other words, the groups for which the condition evaluates to  `FALSE` or `UNKNOWN` are filtered out.

Because SQL Server processes the `HAVING` clause after the `GROUP BY` clause, you cannot refer to the [aggregate function](https://www.sqlservertutorial.net/sql-server-aggregate-functions/) specified in the select list by using the [column alias](https://www.sqlservertutorial.net/sql-server-basics/sql-server-alias/). The following query will fail:

```
SELECT
    column_name1,
    column_name2,
    aggregate_function (column_name3) column_alias
FROM
    table_name
GROUP BY
    column_name1,
    column_name2
HAVING
    column_alias > value;
```

Instead, you need to use the aggregate function expression in the `HAVING` clause explicitly as follows:

```
SELECT
    column_name1,
    column_name2,
    aggregate_function (column_name3) alias
FROM
    table_name
GROUP BY
    column_name1,
    column_name2
HAVING
    aggregate_function (column_name3) > value;
```

## SQL Server HAVING examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-having/#sql-server-having-examples "Anchor for SQL Server HAVING examples")

Let’s take some examples to understand how the `HAVING` clause works.

### SQL Server HAVING with the COUNT function example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-having/#sql-server-having-with-the-count-function-example "Anchor for SQL Server HAVING with the COUNT function example")

See the following `orders` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/):

![](https://www.sqlservertutorial.net/wp-content/uploads/orders.png)

The following statement uses the `HAVING` clause to find the customers who placed at least two orders per year:

```
SELECT
    customer_id,
    YEAR (order_date),
    COUNT (order_id) order_count
FROM
    sales.orders
GROUP BY
    customer_id,
    YEAR (order_date)
HAVING
    COUNT (order_id) >= 2
ORDER BY
    customer_id;
```

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-HAVING-example.png)

In this example:

-   First, the `GROUP BY` clause groups the sales order by customer and order year. The `[COUNT()](https://www.sqlservertutorial.net/sql-server-aggregate-functions/sql-server-count/)` function returns the number of orders each customer placed each year.

-   Second, the `HAVING` clause filtered out all the customers whose number of orders is less than two.

### SQL Server HAVING clause with the SUM() function example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-having/#sql-server-having-clause-with-the-sum-function-example "Anchor for SQL Server <code>HAVING</code> clause with the <code>SUM()</code> function example")

Consider the following `order_items` table:

![](https://www.sqlservertutorial.net/wp-content/uploads/order_items.png)

The following statement finds the sales orders whose net values are greater than 20,000:

```
SELECT
    order_id,
    SUM (
        quantity * list_price * (1 - discount)
    ) net_value
FROM
    sales.order_items
GROUP BY
    order_id
HAVING
    SUM (
        quantity * list_price * (1 - discount)
    ) > 20000
ORDER BY
    net_value;
```

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-HAVING-SUM-example.png)

In this example:

-   First, the `[SUM()](https://www.sqlservertutorial.net/sql-server-aggregate-functions/sql-server-sum/)` function returns the net values of sales orders.

-   Second, the `HAVING` clause filters the sales orders whose net values are less than or equal to 20,000.

### SQL Server HAVING clause with MAX and MIN functions example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-having/#sql-server-having-clause-with-max-and-min-functions-example "Anchor for SQL Server <code>HAVING</code> clause with <code>MAX</code> and <code>MIN</code> functions example")

See the following `products` table:

![](https://www.sqlservertutorial.net/wp-content/uploads/products.png)

The following statement first finds the maximum and minimum list prices in each product category. Then, it filters out the category which has a maximum list price greater than 4,000 or a minimum list price less than 500:

```
SELECT
    category_id,
    MAX (list_price) max_list_price,
    MIN (list_price) min_list_price
FROM
    production.products
GROUP BY
    category_id
HAVING
    MAX (list_price) > 4000 OR MIN (list_price) < 500;
```

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-HAVING-MIN-MAX-example.png)

### SQL Server HAVING clause with AVG() function example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-having/#sql-server-having-clause-with-avg-function-example "Anchor for SQL Server HAVING clause with AVG() function example")

The following statement finds product categories whose [average](https://www.sqlservertutorial.net/sql-server-aggregate-functions/sql-server-avg/) list prices are between 500 and 1,000:

```
SELECT
    category_id,
    AVG (list_price) avg_list_price
FROM
    production.products
GROUP BY
    category_id
HAVING
    AVG (list_price) BETWEEN 500 AND 1000;
```

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-HAVING-AVG-example.png)

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-having/#summary "Anchor for Summary")

-   Use the SQL Server `HAVING` clause to filter groups based on specified conditions.

Was this tutorial helpful?

---
Source: [SQL Server HAVING Clause](https://www.sqlservertutorial.net/sql-server-basics/sql-server-having/)