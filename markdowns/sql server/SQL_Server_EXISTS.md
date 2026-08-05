# SQL Server EXISTS

**Summary**: in this tutorial, you will learn how to use the SQL Server `EXISTS` operator in the condition to test for the existence of rows in a subquery.

## SQL Server EXISTS operator overview [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-exists/#sql-server-exists-operator-overview "Anchor for SQL Server <code>EXISTS</code> operator overview")

The `EXISTS` operator is a logical operator that allows you to check whether a [subquery](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/) returns any row. The `EXISTS` operator returns `TRUE` if the [subquery](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/) returns one or more rows.

The following shows the syntax of the SQL Server `EXISTS` operator:

```
EXISTS ( subquery)
```

In this syntax, the subquery is a `SELECT` statement only. As soon as the subquery returns rows, the `EXISTS` operator returns `TRUE` and stop processing immediately.

Note that even though the subquery returns a `NULL` value, the `EXISTS` operator is still evaluated to `TRUE`.

## SQL Server EXISTS operator examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-exists/#sql-server-exists-operator-examples "Anchor for SQL Server <code>EXISTS</code> operator examples")

Let’s take some examples to understand how `EXISTS` operator works.

### A) Using EXISTS with a subquery returns NULL example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-exists/#a-using-exists-with-a-subquery-returns-null-example "Anchor for A) Using <code>EXISTS</code> with a subquery returns <code>NULL</code> example")

See the following `customers` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/).

![](https://www.sqlservertutorial.net/wp-content/uploads/customers.png)

The following example returns all rows from the  `customers` table:

```
SELECT
    customer_id,
    first_name,
    last_name
FROM
    sales.customers
WHERE
    EXISTS (SELECT NULL)
ORDER BY
    first_name,
    last_name;
```

![SQL Server EXISTS with NULL example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-EXISTS-with-NULL-example.png)

In this example, the subquery returned a result set that contains `NULL` which causes the `EXISTS` operator to evaluate to `TRUE`. Therefore, the whole query returns all rows from the `customers` table.

Consider the following `customers` and `orders` tables:

![](https://www.sqlservertutorial.net/wp-content/uploads/orders-customers.png)

The following example finds all customers who have placed more than two orders:

```
SELECT
    customer_id,
    first_name,
    last_name
FROM
    sales.customers c
WHERE
    EXISTS (
        SELECT
            COUNT (*)
        FROM
            sales.orders o
        WHERE
            customer_id = c.customer_id
        GROUP BY
            customer_id
        HAVING
            COUNT (*) > 2
    )
ORDER BY
    first_name,
    last_name;
```

![SQL Server EXISTS with the correlated subquery example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-EXISTS-with-a-correlated-subquery-example.png)

In this example, we had a [correlated subquery](https://www.sqlservertutorial.net/sql-server-basics/sql-server-correlated-subquery/) that returns customers who place more than two orders.

If the number of orders placed by the customer is less than or equal to two, the subquery returns an empty result set that causes the `EXISTS` operator to evaluate to `FALSE`.

Based on the result of the `EXISTS` operator, the customer will be included in the result set.

### C) EXISTS vs. IN example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-exists/#c-exists-vs-in-example "Anchor for C) <code>EXISTS</code> vs. <code>IN</code> example")

The following statement uses the `[IN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-in/)` operator to find the orders of the customers from San Jose:

```
SELECT
    *
FROM
    sales.orders
WHERE
    customer_id IN (
        SELECT
            customer_id
        FROM
            sales.customers
        WHERE
            city = 'San Jose'
    )
ORDER BY
    customer_id,
    order_date;
```

The following statement uses the `EXISTS` operator that returns the same result:

```
SELECT
    *
FROM
    sales.orders o
WHERE
    EXISTS (
        SELECT
            customer_id
        FROM
            sales.customers c
        WHERE
            o.customer_id = c.customer_id
        AND city = 'San Jose'
    )
ORDER BY
    o.customer_id,
    order_date;
```

![SQL Server EXISTS vs IN example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-EXISTS-vs-IN-example.png)

## EXISTS vs. JOIN [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-exists/#exists-vs-join "Anchor for <code>EXISTS</code> vs. <code>JOIN</code>")

The `EXISTS` operator returns `TRUE` or `FALSE` while the `[JOIN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-joins/)` clause returns rows from another table.

You use the `EXISTS` operator to test if a subquery returns any row and short circuits as soon as it does. On the other hand, you use `JOIN` to extend the result set by combining it with the columns from related tables.

In practice, you use the `EXISTS` when you need to check the existence of rows from related tables without returning data from them.

In this tutorial, you have learned how to use the SQL Server `EXISTS` operator to test if a subquery returns rows.

Was this tutorial helpful?

---
Source: [SQL Server EXISTS](https://www.sqlservertutorial.net/sql-server-basics/sql-server-exists/)