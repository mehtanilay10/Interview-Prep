# SQL Server NULL, Three-valued Logic, and IS NULL Opeartor

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-null/#primary)

**Summary**: in this tutorial, you will learn about `NULL` and three-valued logic in SQL Server. You will also learn how to use `IS NULL` and `IS NOT NULL` operators to test whether a value is `NULL` or not.

In the database world, `NULL` is used to indicate the absence of any data value. For example, when recording the customer information, the email may be unknown, so you record it as `NULL` in the database.

Typically, the result of a logical expression is `TRUE` or `FALSE`. However, when `NULL` is involved in the logical evaluation, the result can be `UNKNOWN`. Therefore, a logical expression may return one of three-valued logic: `TRUE`, `FALSE`, and `UNKNOWN`.

The results of the following comparisons are `UNKNOWN`:

```
NULL = 0
NULL <> 0
NULL > 0
NULL = NULL
```

The `NULL` does not equal anything, not even itself. It means that `NULL` is not equal to `NULL` because each `NULL` could be different.

## IS NULL operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-null/#is-null-operator "Anchor for IS NULL operator")

See the following `customers` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/).

![](https://www.sqlservertutorial.net/wp-content/uploads/customers.png)

The following statement finds the customers who do not have phone numbers recorded in the  `customers` table:

```
SELECT
    customer_id,
    first_name,
    last_name,
    phone
FROM
    sales.customers
WHERE
    phone = NULL
ORDER BY
    first_name,
    last_name;
```

The query returned an empty result set.

The `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause returns rows that cause its predicate to evaluate to `TRUE`. However, the following expression evaluates to `UNKNOWN`.

```
phone = NULL;
```

Therefore, you get an empty result set.

To test whether a value is `NULL` or not, you always use the `IS NULL` operator.

```
SELECT
    customer_id,
    first_name,
    last_name,
    phone
FROM
    sales.customers
WHERE
    phone IS NULL
ORDER BY
    first_name,
    last_name;
```

![SQL Server IS NULL example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-IS-NULL.png)

The query returned the customers who did not have the phone information.

To check if a value is not `NULL`, you can use the `IS NOT NULL` operator. For example, the following query returns customers who have phone information:

```
SELECT
    customer_id,
    first_name,
    last_name,
    phone
FROM
    sales.customers
WHERE
    phone IS NOT NULL
ORDER BY
    first_name,
    last_name;
```

![SQL Server IS NOT NULL](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-IS-NOT-NULL-example.png)

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-null/#summary "Anchor for Summary")

-   `NULL` indicates the absence of data or unknown information.

-   Use the `IS NULL` operator to test if a value is `NULL` or not.

Was this tutorial helpful?

---
Source: [SQL Server NULL, Three-valued Logic, and IS NULL Opeartor](https://www.sqlservertutorial.net/sql-server-basics/sql-server-null/)