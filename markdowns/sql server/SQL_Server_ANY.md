# SQL Server ANY

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-any/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `ANY` operator to compare a value with a single-column set of values returned by a subquery.

## Introduction to SQL Server ANY operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-any/#introduction-to-sql-server-any-operator "Anchor for Introduction to SQL Server <code>ANY</code> operator")

The `ANY` operator is a logical operator that compares a scalar value with a single-column set of values returned by a [subquery](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/).

The following shows the syntax of the `ANY` operator:

```
scalar_expression comparison_operator ANY (subquery)
```

In this syntax:

-   `scalar_expression` is any valid expression.

-   `comparison_operator` is any comparison operator.
-   `subquery` is a `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement which returns a result set of a single column with the data is the same as the data type of the scalar expression.

Suppose the subquery returns a list of values `v1`, `v2`, …,  `vn`. The `ANY` operator returns `TRUE` if any comparison (`scalar_expression`, `vi`) returns `TRUE`. Otherwise, it returns `FALSE`.

Note that the `SOME` operator is equivalent to the `ANY` operator.

## SQL Server ANY operator example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-any/#sql-server-any-operator-example "Anchor for SQL Server <code>ANY</code> operator example")

See the following `products` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/).

![products](https://www.sqlservertutorial.net/wp-content/uploads/products.png)

The following example finds the products that were sold with more than two units in a sales order:

```
SELECT
    product_name,
    list_price
FROM
    production.products
WHERE
    product_id = ANY (
        SELECT
            product_id
        FROM
            sales.order_items
        WHERE
            quantity >= 2
    )
ORDER BY
    product_name;
```

In this tutorial, you have learned how to use the SQL Server `ANY` operator to compare a value with a single-column set of values.

Was this tutorial helpful?

---
Source: [SQL Server ANY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-any/)