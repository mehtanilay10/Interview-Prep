# SQL Server OR Operator

**Summary**: in this tutorial, you will learn how to use the SQL Server `OR` operator to combine two Boolean expressions.

## Introduction to SQL Server OR operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-or/#introduction-to-sql-server-or-operator "Anchor for Introduction to SQL Server OR operator")

The SQL Server `OR` is a logical operator that allows you to combine two Boolean expressions. It returns `TRUE` when either of the conditions evaluates to `TRUE`.

The following shows the syntax of the `OR` operator:

```
boolean_expression OR boolean_expression
```

In this syntax, the `boolean_expression` is any valid Boolean expression that evaluates to true, false, and unknown.

The following table shows the results of the `OR` operator when you combine `TRUE`, `FALSE`, and `UNKNOWN`:

|  | TRUE | FALSE | UNKNOWN |
| --- | --- | --- | --- |
| **TRUE** | TRUE | TRUE | TRUE |
| **FALSE** | TRUE | FALSE | UNKNOWN |
| **UNKNOWN** | TRUE | UNKNOWN | UNKNOWN |

When you use multiple logical operators in an expression, SQL Server always evaluates the `OR` operators after `[AND](https://www.sqlservertutorial.net/sql-server-basics/sql-server-and/)` operators. But you can use the parentheses `()` to change the order of the evaluation.

## SQL Server OR operator examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-or/#sql-server-or-operator-examples "Anchor for SQL Server OR operator examples")

We’ll use the following `production.roducts` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/).

![](https://www.sqlservertutorial.net/wp-content/uploads/products.png)

### 1) Basic SQL Server OR operator example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-or/#1-basic-sql-server-or-operator-example "Anchor for 1) Basic SQL Server OR operator example")

The following example uses the OR operator to find the products whose list price is less than 200 or greater than 6,000:

```
SELECT
    product_name,
    list_price
FROM
    production.products
WHERE
    list_price < 200
OR list_price > 6000
ORDER BY
    list_price;
```

![SQL Server OR example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-OR-example.png)

### 2) Using multiple OR operators [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-or/#2-using-multiple-or-operators "Anchor for 2) Using multiple OR operators")

The following statement uses multiple OR operators to find the products whose brand id is 1, 2, or 4:

```
SELECT
    product_name,
    brand_id
FROM
    production.products
WHERE
    brand_id = 1
OR brand_id = 2
OR brand_id = 4
ORDER BY
    brand_id DESC;
```

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-OR-multiple-operators-example.png)

You can replace multiple `[OR](https://www.sqlservertutorial.net/sql-server-basics/sql-server-or/)` operators by the `[IN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-in/)` operator as shown in the following query:

```
SELECT
    product_name,
    brand_id
FROM
    production.products
WHERE
    brand_id IN (1, 2, 3)
ORDER BY
    brand_id DESC;
```

### 3) Combining the OR operator with the AND operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-or/#3-combining-the-or-operator-with-the-and-operator "Anchor for 3) Combining the OR operator with the AND operator")

The following example shows how to combine the `OR` operator with the `AND` operator within the same expression:

```
SELECT 
    product_name, 
    brand_id, 
    list_price
FROM 
    production.products
WHERE 
    brand_id = 1
      OR brand_id = 2
      AND list_price > 500
ORDER BY 
    brand_id DESC, 
    list_price;
```

![SQL Server OR with AND operator](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-OR-with-AND-operator.png)

In this example, we used both `OR` and `AND` operators. As always, SQL Server evaluated the `AND` operator first. Therefore, the query returned the products whose brand id is 2 and the list price is greater than 500 or those whose brand id is 1.

To find the products whose brand id is 1 or 2 and list price is greater than 500, you use the parentheses as shown in the following query:

```
SELECT
    product_name,
    brand_id,
    list_price
FROM
    production.products
WHERE
    (brand_id = 1 OR brand_id = 2)
     AND list_price > 500
ORDER BY
    brand_id;
```

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-OR-with-AND-operator-precedence.png)

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-or/#summary "Anchor for Summary")

-   Use the SQL Server `OR` operator to combine two Boolean expressions.

-   The `OR` operator returns `TRUE` if one of the expressions is `TRUE`.
-   By default, SQL Server evaluates the `OR` operators after the `AND` operators within the same expression. But you can use parentheses `()` to change the order of evaluation.

Was this tutorial helpful?

---
Source: [SQL Server OR Operator](https://www.sqlservertutorial.net/sql-server-basics/sql-server-or/)