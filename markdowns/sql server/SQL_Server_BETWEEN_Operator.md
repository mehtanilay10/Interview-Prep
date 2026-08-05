# SQL Server BETWEEN Operator

**Summary**: in this tutorial, you will learn how to use the SQL Server `BETWEEN` operator to specify a range to test.

## Overview of the SQL Server BETWEEN operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-between/#overview-of-the-sql-server-between-operator "Anchor for Overview of the SQL Server BETWEEN operator")

The `BETWEEN` operator is a logical operator that allows you to specify a range to test.

The following illustrates the syntax of the `BETWEEN` operator:

```
column | expression BETWEEN start_expression AND end_expression
```

In this syntax:

-   First, specify the column or expression to test.

-   Second, place the  `start_expression` and `end_expression` between the `BETWEEN` and the `AND` keywords. The `start_expression`, `end_expression` and the `expression` to test must have the same data type.

The `BETWEEN` operator returns `TRUE` if the expression to test is greater than or equal to the value of the `start_expression` and less than or equal to the value of the `end_expression`.

You can use the greater than or equal to (>=) and less than or equal to (<=) to substitute the `BETWEEN` operator as follows:

```
column | expression <= end_expression AND column | expression >= start_expression   
```

The condition that uses the `BETWEEN` operator is much more readable than the one that uses the comparison operators >=, <= and the logical operator [`AND`](https://www.sqlservertutorial.net/sql-server-basics/sql-server-and/).

To negate the result of the `BETWEEN` operator, you use `NOT BETWEEN` operator as follows:

```
column | expression NOT BETWEEN start_expression AND end_expresion
```

The `NOT BETWEEN` returns `TRUE` if the value in the column or expression is less than the value of the  `start_expression` and greater than the value of the `end_expression`. It is equivalent to the following condition:

```
column | expression < start_expression AND column | expression > end_expression
```

Note that if any input to the `BETWEEN` or `NOT BETWEEN` is `NULL`, then the result is `UNKNOWN`.

## SQL Server BETWEEN examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-between/#sql-server-between-examples "Anchor for SQL Server BETWEEN examples")

Let’s take some examples of using the `BETWEEN` operator to understand how it works.

### A) Using SQL Server BETWEEN with numbers example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-between/#a-using-sql-server-between-with-numbers-example "Anchor for A) Using SQL Server BETWEEN with numbers example")

See the following `products` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/):

![](https://www.sqlservertutorial.net/wp-content/uploads/products.png)

The following query finds the products whose list prices are between 149.99 and 199.99:

```
SELECT
    product_id,
    product_name,
    list_price
FROM
    production.products
WHERE
    list_price BETWEEN 149.99 AND 199.99
ORDER BY
    list_price;
```

![SQL Server BETWEEN Example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-BETWEEN-example.png)

To get the products whose list prices are not in the range of 149.99 and 199.99, you use the `NOT BETWEEN` operator as follows:

```
SELECT
    product_id,
    product_name,
    list_price
FROM
    production.products
WHERE
    list_price NOT BETWEEN 149.99 AND 199.99
ORDER BY
    list_price;
```

![SQL Server NOT BETWEEN example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-NOT-BETWEEN-example.png)

### B) Using SQL Server BETWEEN with dates example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-between/#b-using-sql-server-between-with-dates-example "Anchor for B) Using SQL Server BETWEEN with dates example")

Consider the following `orders` table:

![](https://www.sqlservertutorial.net/wp-content/uploads/orders.png)

The following query finds the orders that customers placed between `January 15, 2017` and `January 17, 2017`:

```
SELECT
    order_id,
    customer_id,
    order_date,
    order_status
FROM
    sales.orders
WHERE
    order_date BETWEEN '20170115' AND '20170117'
ORDER BY
    order_date;
```

![SQL Server BETWEEN dates example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-BETWEEN-dates-example.png)

Notice that to specify a literal date, you use the format ‘`YYYYMMDD`‘ where `YYYY` is 4-digit year e.g., 2017, `MM` is 2-digits month e.g., 01 and `DD` is 2-digits day e.g., 15.

In this tutorial, you have learned how to use the SQL Server `BETWEEN` operator to form a condition that tests against a range of values.

Was this tutorial helpful?

---
Source: [SQL Server BETWEEN Operator](https://www.sqlservertutorial.net/sql-server-basics/sql-server-between/)