# SQL Server AND Operator

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-and/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `AND` operator to combine multiple Boolean expressions.

## Introduction to SQL Server AND operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-and/#introduction-to-sql-server-and-operator "Anchor for Introduction to SQL Server AND operator")

The `AND` is a logical operator that allows you to combine two Boolean expressions. It returns TRUE only when both expressions are evaluated to `TRUE`.

The following illustrates the syntax of the `AND` operator:

```
boolean_expression AND boolean_expression 
```

The `boolean_expression` is any valid Boolean expression that evaluates to `TRUE`, `FALSE`, and `UNKNOWN`.

The following table shows the result when you combine `TRUE`, `FALSE`, and `UNKNOWN` values using the `AND` operator:

|  | TRUE | FALSE | UNKNOWN |
| --- | --- | --- | --- |
| **TRUE** | TRUE | FALSE | UNKNOWN |
| **FALSE** | FALSE | FALSE | FALSE |
| **UNKNOWN** | UNKNOWN | FALSE | UNKNOWN |

When you use more than one logical operator in an expression, SQL Server always evaluates the `AND` operators first. However, you can change the order of evaluation by using parentheses `()`.

## SQL Server AND operator examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-and/#sql-server-and-operator-examples "Anchor for SQL Server AND operator examples")

We’ll use the following `products` table from the [sample database:](https://www.sqlservertutorial.net/sql-server-sample-database/)

![](https://www.sqlservertutorial.net/wp-content/uploads/products.png)

### 1) Basic SQL Server AND operator example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-and/#1-basic-sql-server-and-operator-example "Anchor for 1) Basic SQL Server AND operator example")

The following example uses the `AND` operator to find the products with the category ID 1 and the list price greater than 400:

```
SELECT 
  * 
FROM 
  production.products 
WHERE 
  category_id = 1 
  AND list_price > 400 
ORDER BY 
  list_price DESC;
```

Output:

![SQL Server AND operator example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-AND-example.png)

### 2) Using multiple SQL Server AND operators [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-and/#2-using-multiple-sql-server-and-operators "Anchor for 2) Using multiple SQL Server AND operators")

The following statement uses the AND operator to find products that meet all the following conditions: category ID is 1, the list price is greater than 400, and the brand ID is 1:

```
SELECT 
  * 
FROM 
  production.products 
WHERE 
  category_id = 1 
  AND list_price > 400 
  AND brand_id = 1 
ORDER BY 
  list_price DESC;
```

Output:

![SQL Server AND multiple operators example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-AND-multiple-operators-example.png)

### 3) Using the AND operator with other logical operators [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-and/#3-using-the-and-operator-with-other-logical-operators "Anchor for 3) Using the AND operator with other logical operators")

The following example shows how to use the `AND` with the `OR` operator:

```
SELECT
    *
FROM
    production.products
WHERE
    brand_id = 1
OR brand_id = 2
AND list_price > 1000
ORDER BY
    brand_id DESC;
```

Output:

![SQL Server AND and OR operators example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-AND-and-OR-operators-example.png)

In this example, we used both [`OR`](https://www.sqlservertutorial.net/sql-server-basics/sql-server-or/) and `AND` operators in the condition of the [WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/) clause. SQL Server always evaluates the `AND` operator first. Therefore, the query retrieves the products with brand ID 2 and list price greater than 1,000 or brand ID 1.

To retrieve products with brand ID 1 or 2 and a list price larger than 1,000, you can use parentheses as follows:

```
SELECT
    *
FROM
    production.products
WHERE
    (brand_id = 1 OR brand_id = 2)
AND list_price > 1000
ORDER BY
    brand_id;
```

Output:

![SQL Server AND and OR operators with parentheses](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-AND-and-OR-operators-with-parentheses.png)

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-and/#summary "Anchor for Summary")

-   Use the `AND` operator to combine two Boolean expressions.

-   The `AND` operator returns `TRUE` only if both expressions are `TRUE`.

Was this tutorial helpful?

---
Source: [SQL Server AND Operator](https://www.sqlservertutorial.net/sql-server-basics/sql-server-and/)