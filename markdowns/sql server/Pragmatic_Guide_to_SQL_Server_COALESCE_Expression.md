# Pragmatic Guide to SQL Server COALESCE Expression

**Summary**: in this tutorial, you will learn how to use the SQL Server `COALESCE` expression to deal with NULL in queries.

## Introduction to SQL Server COALESCE expression [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-coalesce/#introduction-to-sql-server-coalesce-expression "Anchor for Introduction to SQL Server <code>COALESCE</code> expression")

The SQL Server `COALESCE` expression accepts a number of arguments, evaluates them in sequence, and returns the first non-null argument.

The following illustrates the syntax of the `COALESCE` expression:

```
COALESCE(e1,[e2,...,en])
```

In this syntax, e1, e2, … en are scalar expressions that evaluate to scalar values. The `COALESCE` expression returns the first non-null expression. If all expressions evaluate to NULL, then the `COALESCE` expression return NULL;

Because the `COALESCE` is an expression, you can use it in any clause that accepts an expression such as `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)`, `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)`, [`GROUP BY`](https://www.sqlservertutorial.net/sql-server-basics/sql-server-group-by/), and `[HAVING](https://www.sqlservertutorial.net/sql-server-basics/sql-server-having/)`.

Let’s see practical examples of using the `COALESCE` expression

### A) Using SQL Server COALESCE expression with character string data example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-coalesce/#a-using-sql-server-coalesce-expression-with-character-string-data-example "Anchor for A) Using SQL Server <code>COALESCE</code> expression with character string data example")

The following example uses the `COALESCE` expression to return the string `'Hi'` because it is the first non-null argument:

```
SELECT 
    COALESCE(NULL, 'Hi', 'Hello', NULL) result;
```

Here is the output:

```
result
------
Hi

(1 row affected)
```

### B) Using SQL Server COALESCE expression with the numeric data example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-coalesce/#b-using-sql-server-coalesce-expression-with-the-numeric-data-example "Anchor for B) Using SQL Server <code>COALESCE</code> expression with the numeric data example")

This example uses the `COALESCE` expression to evaluate a list of arguments and to return the first number:

```
SELECT 
    COALESCE(NULL, NULL, 100, 200) result;
```

The output is as follows:

```
result
-----------
100

(1 row affected)
```

### C) Using SQL Server COALESCE expression to substitute NULL by new values [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-coalesce/#c-using-sql-server-coalesce-expression-to-substitute-null-by-new-values "Anchor for C) Using SQL Server <code>COALESCE</code> expression to substitute <code>NULL</code> by new values")

See the following `sales.customers` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/).

![customers](https://www.sqlservertutorial.net/wp-content/uploads/customers.png)

The following query returns first name, last name, phone, and email of all customers:

```
SELECT 
    first_name, 
    last_name, 
    phone, 
    email
FROM 
    sales.customers
ORDER BY 
    first_name, 
    last_name;
```

Here is the partial output:

![SQL Server COALESCE expression sample result set](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-COALESCE-expression-sample-result-set.png)

The `phone` column will have `NULL` if the customer does not have the phone number recorded in the `sales.customers` table.

To make the output more business friendly, you can use the `COALESCE` expression to substitute `NULL` by the string `N/A` (not available) as shown in the following query:

```
SELECT 
    first_name, 
    last_name, 
    COALESCE(phone,'N/A') phone, 
    email
FROM 
    sales.customers
ORDER BY 
    first_name, 
    last_name;
```

The following picture shows the partial output:

![SQL Server COALESCE expression NULL substitution example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-COALESCE-expression-NULL-substitution-example.png)

### D) Using SQL Server COALESCE expression to use the available data [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-coalesce/#d-using-sql-server-coalesce-expression-to-use-the-available-data "Anchor for D) Using SQL Server <code>COALESCE</code> expression to use the available data")

First, [create a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `salaries` that stores the employee’s salaries:

```
CREATE TABLE salaries (
    staff_id INT PRIMARY KEY,
    hourly_rate decimal,
    weekly_rate decimal,
    monthly_rate decimal,
    CHECK(
        hourly_rate IS NOT NULL OR 
        weekly_rate IS NOT NULL OR 
        monthly_rate IS NOT NULL)
);
```

Each staff can have only one rate either hourly, weekly, or monthly.

Second, [insert](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) some rows into the `salaries` table:

```
INSERT INTO 
    salaries(
        staff_id, 
        hourly_rate, 
        weekly_rate, 
        monthly_rate
    )
VALUES
    (1,20, NULL,NULL),
    (2,30, NULL,NULL),
    (3,NULL, 1000,NULL),
    (4,NULL, NULL,6000);
    (5,NULL, NULL,6500);
```

Third, [query data](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/) from the `salaries` table:

```
SELECT
    staff_id, 
    hourly_rate, 
    weekly_rate, 
    monthly_rate
FROM
    salaries
ORDER BY
    staff_id;
```

Here is the output:

![SQL Server COALESCE expression sample table](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-COALESCE-expression-sample-table.png)

Fourth, calculate monthly for each staff using the `COALESCE` expression as shown in the following query:

```
SELECT
    staff_id,
    COALESCE(
        hourly_rate*22*8, 
        weekly_rate*4, 
        monthly_rate
    ) monthly_salary
FROM
    salaries;
```

The following picture shows the output:

![SQL Server COALESCE expression complex example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-COALESCE-expression-complex-example.png)

In this example, we used the `COALESCE` expression to use only non-NULL value found in the `hourly_rate`, `weekly_rate`, and `monthly_rate` columns.

## COALESCE vs. CASE expression [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-coalesce/#coalesce-vs-case-expression "Anchor for <code>COALESCE</code> vs. <code>CASE</code> expression")

The `COALESCE` expression is a syntactic sugar of the [`CASE`](https://www.sqlservertutorial.net/sql-server-basics/sql-server-case/) expression.

The following expressions return the same result:

```
COALESCE(e1,e2,e3)

CASE
    WHEN e1 IS NOT NULL THEN e1
    WHEN e2 IS NOT NULL THEN e2
    ELSE e3
END
```

Note that the query optimizer may use the `CASE` expression to rewrite the `COALESCE` expression.

In this tutorial, you have learned how to use the SQL Server `COALESCE` expression to handle NULL values in queries.

Was this tutorial helpful?

---
Source: [Pragmatic Guide to SQL Server COALESCE Expression](https://www.sqlservertutorial.net/sql-server-basics/sql-server-coalesce/)