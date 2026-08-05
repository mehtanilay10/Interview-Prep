# SQL Server NULLIF

**Summary**: in this tutorial, you will learn how to use the SQL Server `NULLIF` expression to return NULL if the first argument equals to the second one.

## SQL Server NULLIF expression overview [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nullif/#sql-server-nullif-expression-overview "Anchor for SQL Server <code>NULLIF</code> expression overview")

The `NULLIF` expression accepts two arguments and returns `NULL` if two arguments are equal. Otherwise, it returns the first expression.

The following shows the syntax of the `NULLIF` expression:

```
NULLIF(expression1, expression2)
```

In this syntax, the `expression1` and `expression2` are scalar expressions. It means each of them evaluates to a scalar value.

It is recommended that you not use the time-dependent functions such as `RAND()` function in the `NULLIF` function. Because this may cause the function to be evaluated twice and to yield different results from the two function calls.

## SQL Server NULLIF examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nullif/#sql-server-nullif-examples "Anchor for SQL Server <code>NULLIF</code> examples")

Let’s take some examples of using the `NULLIF` expression

### Using NULLIF expression with numeric data examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nullif/#using-nullif-expression-with-numeric-data-examples "Anchor for Using <code>NULLIF</code> expression with numeric data examples")

This example returns `NULL` because the first argument equals the second one:

```
SELECT 
    NULLIF(10, 10) result;
```

Here is the output:

```
result
------
NULL

(1 row affected)
```

However, the following example returns the first argument because two arguments are not equal:

```
SELECT 
    NULLIF(20, 10) result;
```

The output is as follows:

```
result
------
20

(1 row affected)
```

### Using NULLIF expression with character string data example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nullif/#using-nullif-expression-with-character-string-data-example "Anchor for Using <code>NULLIF</code> expression with character string data example")

The following example uses the `NULLIF` expression. It returns NULL because the first character string is equal to the second one:

```
SELECT 
    NULLIF('Hello', 'Hello') result;
```

Here is the output:

```
result
------
NULL

(1 row affected)
```

This example returns the first argument because both arguments are not the same:

```
SELECT 
    NULLIF('Hello', 'Hi') result;
```

The following shows the output:

```
result
------
Hello

(1 row affected)
```

### Using NULLIF expression to translate a blank string to NULL [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nullif/#using-nullif-expression-to-translate-a-blank-string-to-null "Anchor for Using <code>NULLIF</code> expression to translate a blank string to NULL")

The `NULLIF` expression comes in handy when you’re working with legacy data that contains a mixture of null and empty strings in a column. Consider the following example.

First, [create a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `sales.leads` to store the sales leads:

```
CREATE TABLE sales.leads
(
    lead_id    INT	PRIMARY KEY IDENTITY, 
    first_name VARCHAR(100) NOT NULL, 
    last_name  VARCHAR(100) NOT NULL, 
    phone      VARCHAR(20), 
    email      VARCHAR(255) NOT NULL
);
```

Second, [insert](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) three rows into the `sales.leads` table:

```
INSERT INTO sales.leads
(
    first_name, 
    last_name, 
    phone, 
    email
)
VALUES
(
    'John', 
    'Doe', 
    '(408)-987-2345', 
    'john.doe@example.com'
),
(
    'Jane', 
    'Doe', 
    '', 
    'jane.doe@example.com'
),
(
    'David', 
    'Doe', 
    NULL, 
    'david.doe@example.com'
);
```

Third, [query](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/) data from the `sales.leads` table:

```
SELECT 
    lead_id, 
    first_name, 
    last_name, 
    phone, 
    email
FROM 
    sales.leads
ORDER BY
    lead_id;
```

Here is the output:

![SQL Server NULLIF Sample Table](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-NULLIF-Sample-Table.png)

The `phone` column is a nullable column. If the phone of a lead is not known at the time of recording, the phone column will have NULL.

However, from the output, the second row has an empty string in the `phone` column due to the data entry mistake. Note that you may encounter a situation like this a lot if you are working with legacy databases.

To find the leads who do not have the phone number, you use the following query:

```
SELECT    
    lead_id, 
    first_name, 
    last_name, 
    phone, 
    email
FROM    
    sales.leads
WHERE 
    phone IS NULL;
```

Here is the output:

![SQL Server NULLIF with IS NULL example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-NULLIF-with-IS-NULL-example.png)

The output missed one row which has the empty string in the `phone` column. To fix this you can use the `NULLIF` expression:

```
SELECT    
    lead_id, 
    first_name, 
    last_name, 
    phone, 
    email
FROM    
    sales.leads
WHERE 
    NULLIF(phone,'') IS NULL;
```

The following picture shows the output:

![SQL Server NULLIF expression example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-NULLIF-expression-example.png)

## NULLIF and CASE expression [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nullif/#nullif-and-case-expression "Anchor for <code>NULLIF</code> and <code>CASE</code> expression")

This expression that uses `NULLIF`:

```
SELECT 
    NULLIF(a,b)
```

is equivalent to the following expression that uses the `[CASE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-case/)` expression:

```
CASE 
    WHEN a=b THEN NULL 
    ELSE a 
END
```

See the following example:

```
DECLARE @a int = 10, @b int = 20;
SELECT
    NULLIF(@a,@b) AS result;
```

Here is the output:

```
result
-----------
10

(1 row affected)
```

The following example returns the same result, but use the `CASE` expression instead:

```
DECLARE @a int = 10, @b int = 20;
SELECT
    CASE
        WHEN @a = @b THEN null
        ELSE 
            @a
    END AS result;
```

The `CASE` expression is verbose while the `NULLIF` expression is much shorter and more readable.

In this tutorial, you have learned how to use the SQL Server `NULLIF` expression to return `NULL` if the first argument equals to the second one.

Was this tutorial helpful?

---
Source: [SQL Server NULLIF](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nullif/)