# SQL Server IN Operator: Match Any Value in a List or a Subquery

**Summary**: in this tutorial, you will learn how to use the SQL Server `IN` operator to check whether a value matches any value in a list.

## SQL Server IN operator overview [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-in/#sql-server-in-operator-overview "Anchor for SQL Server IN operator overview")

The `IN` operator is a logical operator that allows you to check whether a value matches any value in a list.

The following shows the syntax of the SQL Server `IN` operator:

```
column | expression IN ( v1, v2, v3, ...)
```

In this syntax:

-   First, specify the column or expression to test.

-   Second, specify a list of values to test. All the values must have the same type as the type of the column or expression.

If a value in the column or the expression is equal to any value in the list, the result of the `IN` operator is `TRUE`.

The `IN` operator is equivalent to multiple `[OR](https://www.sqlservertutorial.net/sql-server-basics/sql-server-or/)` operators, therefore, the following predicates are equivalent:

```
column IN (v1, v2, v3)

column = v1 OR column = v2 OR column = v3
```

To negate the `IN` operator, you use the `NOT IN` operator as follows:

```
column | expression NOT IN ( v1, v2, v3, ...)
```

The result the `NOT IN` operator is `TRUE` if the column or expression does not equal any value in the list.

In addition to a list of values, you can use a [subquery](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/) that returns a list of values with the `IN` operator as shown below:

```
column | expression IN (subquery)
```

In this syntax, the subquery is a `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement that returns a list of values of a single column.

Note that if a list contains `[NULL](https://www.sqlservertutorial.net/sql-server-basics/sql-server-null/)`, the result of `IN` or `NOT IN` will be `UNKNOWN`.

## SQL Server IN operator examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-in/#sql-server-in-operator-examples "Anchor for SQL Server IN operator examples")

We’ll use following `production.products` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/).

![](https://www.sqlservertutorial.net/wp-content/uploads/products.png)

### 1) Basic SQL Server IN operator example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-in/#1-basic-sql-server-in-operator-example "Anchor for 1) Basic SQL Server IN operator example")

The following statement uses the `IN` operator to find products whose list price is one of the following values: 89.99, 109.99, and 159.99:

```
SELECT
    product_name,
    list_price
FROM
    production.products
WHERE
    list_price IN (89.99, 109.99, 159.99)
ORDER BY
    list_price;
```

![SQL Server IN example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-IN-example.png)

The query above is equivalent to the following query that uses the `[OR](https://www.sqlservertutorial.net/sql-server-basics/sql-server-or/)` operator instead:

```
SELECT
    product_name,
    list_price
FROM
    production.products
WHERE
    list_price = 89.99 OR list_price = 109.99 OR list_price = 159.99
ORDER BY
    list_price;
```

To find the products whose list prices are not one of the prices 89.99, 109.99, and 159.99, you use the `NOT IN` operator. For example:

```
SELECT
    product_name,
    list_price
FROM
    production.products
WHERE
    list_price NOT IN (89.99, 109.99, 159.99)
ORDER BY
    list_price;
```

![SQL Server NOT IN example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-NOT-IN-example.png)

### 2) Using SQL Server IN operator with a subquery example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-in/#2-using-sql-server-in-operator-with-a-subquery-example "Anchor for 2) Using SQL Server <code>IN</code> operator with a subquery example")

The following query returns a list of product identification numbers of the products located in store id 1 and has a quantity greater than or equal to 30:

```
SELECT
    product_id
FROM
    production.stocks
WHERE
    store_id = 1 AND quantity >= 30;
```

![SQL Server IN - simple query](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-IN-simple-query.png)

You can use the query above as a [subquery](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/) as shown in the following query:

```
SELECT
    product_name,
    list_price
FROM
    production.products
WHERE
    product_id IN (
        SELECT
            product_id
        FROM
            production.stocks
        WHERE
            store_id = 1 AND quantity >= 30
    )
ORDER BY
    product_name;
```

![SQL Server IN with subquery example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-IN-with-subquery-example.png)

In this example:

-   First, the [subquery](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/) returned a list of product id.

-   Second, the outer query retrieved the product names and list prices of the products whose product id matches any value returned by the subquery.

For more information on the subquery, check out the [subquery tutorial](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/).

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-in/#summary "Anchor for Summary")

-   Use the SQL Server `IN` operator to check whether a value matches any value in a list or is returned by a subquery.

Was this tutorial helpful?

---
Source: [SQL Server IN Operator: Match Any Value in a List or a Subquery](https://www.sqlservertutorial.net/sql-server-basics/sql-server-in/)