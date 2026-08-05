# SQL Server ALL Operator

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-all/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `ALL` operator to compare a value with a list of single column set of values.

## Overview of the SQL Server ALL operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-all/#overview-of-the-sql-server-all-operator "Anchor for Overview of the SQL Server <code>ALL</code> operator")

The SQL Server `ALL` operator is a logical operator that compares a scalar value with a single-column list of values returned by a [subquery](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/).

The following illustrates the `ALL` operator syntax:

```
scalar_expression comparison_operator ALL ( subquery) 
```

In this syntax:

-   The `scalar_expression` is any valid expression.

-   The `comparison_operator` is any valid comparison operator including equal (=), not equal (<>), greater than (>), greater than or equal (>=), less than (<), less than or equal (<=).
-   The `subquery` within the parentheses is a `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement that returns a result of a single column. Also, the data type of the returned column must be the same data type as the data type of the scalar expression.

The `ALL` operator returns `TRUE` if all the pairs (`scalar_expression`, `v`) evaluates to `TRUE`; v is a value in the single-column result.

If one of the pairs (`scalar_expression`, `v`) returns `FALSE`, then the `ALL` operator returns `FALSE`.

## SQL Server ALL operator examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-all/#sql-server-all-operator-examples "Anchor for SQL Server <code>ALL</code> operator examples")

Consider the following `products` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/).

![products table](https://www.sqlservertutorial.net/wp-content/uploads/products.png)

The following statement returns a list average list prices of products for each brand:

```
SELECT
    AVG (list_price) avg_list_price
FROM
    production.products
GROUP BY
    brand_id
ORDER BY
    avg_list_price;
```

![SQL Server ALL average list price by brand](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-ALL-average-list-price-by-brand.png)

### 1) scalar\_expression > ALL ( subquery ) [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-all/#1-scalar_expression-all-subquery "Anchor for 1) scalar_expression > ALL ( subquery )")

The expression returns `TRUE` if the `scalar_expression` is greater than the largest value returned by the subquery.

For example, the following query finds the products whose list prices are bigger than the average list price of products of all brands:

```
SELECT
    product_name,
    list_price
FROM
    production.products
WHERE
    list_price > ALL (
        SELECT
            AVG (list_price) avg_list_price
        FROM
            production.products
        GROUP BY
            brand_id
    )
ORDER BY
    list_price;
```

![SQL Server ALL with greater than operator example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-ALL-with-greater-than-operator-example.png)

### 2) scalar\_expression < ALL ( subquery ) [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-all/#2-scalar_expression-all-subquery "Anchor for 2) scalar_expression < ALL ( subquery )")

The expression evaluates to `TRUE` if the scalar expression is smaller than the smallest value returned by the subquery.

The following example finds the products whose list price is less than the smallest price in the average price list by brand:

```
SELECT
    product_name,
    list_price
FROM
    production.products
WHERE
    list_price < ALL (
        SELECT
            AVG (list_price) avg_list_price
        FROM
            production.products
        GROUP BY
            brand_id
    )
ORDER BY
    list_price DESC;
```

![SQL Server ALL with less than operator example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-ALL-with-less-than-operator-example.png)

Similarly, you can take your own examples of using the `ALL` operator with one of the following comparison operators such as equal to (=), greater than or equal (>=), less than or equal to (<=), and not equal (<>).

In this tutorial, you have learned how to use the SQL Server `ALL` operator to compare a scalar value with a single column set of values returned by a subquery.

Was this tutorial helpful?

---
Source: [SQL Server ALL Operator](https://www.sqlservertutorial.net/sql-server-basics/sql-server-all/)