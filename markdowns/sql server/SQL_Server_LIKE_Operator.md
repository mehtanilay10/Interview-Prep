# SQL Server LIKE Operator

**Summary**: in this tutorial, you will learn how to use the SQL Server `LIKE` operator to check whether a character string matches a specified pattern.

## Introduction to SQL Server LIKE operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-like/#introduction-to-sql-server-like-operator "Anchor for Introduction to SQL Server LIKE operator")

The SQL Server `LIKE` operator is a logical operator that checks if a character string matches a specified pattern.

A pattern may include regular characters and wildcard characters. The `LIKE` operator is used in the `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause of the `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)`, `[UPDATE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/)`, and `[DELETE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-delete/)` statements to filter rows based on pattern matching.

Here’s the syntax of the `LIKE` operator:

```
column | expression LIKE pattern [ESCAPE escape_character]
```

### Pattern [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-like/#pattern "Anchor for Pattern")

The pattern is a sequence of characters to search for in the column or expression. It can include the following valid wildcard characters:

-   The percent wildcard (%): any string of zero or more characters.

-   The underscore (\_) wildcard: any single character.
-   The \[list of characters\] wildcard: any single character within the specified set.

-   The \[character-character\]: any single character within the specified range.
-   The \[^\]: any character that is not within a list or a range.

The wildcard characters make the `LIKE` operator more flexible than the equal (=) and not equal (!=) string comparison operators.

### Escape character [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-like/#escape-character "Anchor for Escape character")

The escape character instructs the `LIKE` operator to treat the wildcard characters as regular characters. The escape character has no default value and must be evaluated to only one character.

The `LIKE` operator returns `TRUE` if the column or expression matches the specified pattern.

To negate the result of the `LIKE` operator, you use the `NOT` operator as follows:

```
column | expression NOT LIKE pattern [ESCAPE escape_character]
```

We’ll use the following `customers` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/):

![customers table](https://www.sqlservertutorial.net/wp-content/uploads/customers.png)

### 1) Using the LIKE operator with the % wildcard examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-like/#1-using-the-like-operator-with-the-wildcard-examples "Anchor for 1) Using the LIKE operator with the % wildcard examples")

The following example uses the `LIKE` operator with the `%` wildcard to find the customers whose last name starts with the letter `z`:

```
SELECT
    customer_id,
    first_name,
    last_name
FROM
    sales.customers
WHERE
    last_name LIKE 'z%'
ORDER BY
    first_name;
```

![SQL Server LIKE example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-LIKE-example.png)

The following example uses the `LIKE` operator with the `%` wildcard to return the customers whose last name ends with the string `er`:

```
SELECT
    customer_id,
    first_name,
    last_name
FROM
    sales.customers
WHERE
    last_name LIKE '%er'
ORDER BY
    first_name;
```

![SQL Server LIKE percent example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-LIKE-percent-example.png)

The following statement uses the `LIKE` operator to retrieve the customers whose last name starts with the letter `t` and ends with the letter `s`:

```
SELECT
    customer_id,
    first_name,
    last_name
FROM
    sales.customers
WHERE
    last_name LIKE 't%s'
ORDER BY
    first_name;
```

### 

![SQL Server LIKE percent wildcard example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-LIKE-percent-wildcard-example.png "SQL Server LIKE percent wildcard example")

[#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-like/# "Anchor for <figure><img class=\"border alignnone wp-image-309 size-full\" title=\"SQL Server LIKE percent wildcard example\" src=\"https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-LIKE-percent-wildcard-example.png\" alt=\"SQL Server LIKE percent wildcard example\" width=\"202\" height=\"91\"></figure>")

### 2) Using the LIKE operator with the \_ (underscore) wildcard example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-like/#2-using-the-like-operator-with-the-_-underscore-wildcard-example "Anchor for 2) Using the LIKE operator with the _ (underscore) wildcard example")

The underscore represents a single character. For example, the following statement returns the customers where the second character is the letter `u`:

```
SELECT
    customer_id,
    first_name,
    last_name
FROM
    sales.customers
WHERE
    last_name LIKE '_u%'
ORDER BY
    first_name; 
```

![SQL Server LIKE underscore wildcard example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-LIKE-underscore-wildcard-example.png)

The pattern `_u%`

-   The first underscore character ( `_`) matches any single character.

-   The second letter `u` matches the letter u exactly.
-   The third character `%` matches any sequence of characters.

### 3) Using the LIKE operator with the \[list of characters\] wildcard example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-like/#3-using-the-like-operator-with-the-list-of-characters-wildcard-example "Anchor for 3) Using the LIKE operator with the [list of characters] wildcard example")

The square brackets with a list of characters e.g., `[ABC]` represents a single character that must be one of the characters specified in the list.

For example, the following query returns the customers where the first character in the last name is `Y` or `Z`:

```
SELECT
    customer_id,
    first_name,
    last_name
FROM
    sales.customers
WHERE
    last_name LIKE '[YZ]%'
ORDER BY
    last_name;
```

![SQL Server LIKE character list example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-LIKE-character-list-example.png)

### 4) Using the LIKE operator with the \[character-character\] wildcard example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-like/#4-using-the-like-operator-with-the-character-character-wildcard-example "Anchor for 4) Using the LIKE operator with the [character-character] wildcard example")

The square brackets with a character range e.g., `[A-C]` represent a single character that must be within a specified range.

For example, the following query finds the customers where the first character in the last name is the letter in the range `A` through `C`:

```
SELECT
    customer_id,
    first_name,
    last_name
FROM
    sales.customers
WHERE
    last_name LIKE '[A-C]%'
ORDER BY
    first_name;
```

![SQL Server LIKE range example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-LIKE-range-example.png)

### 5) Using the LIKE operator with the \[^Character List or Range\] wildcard example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-like/#5-using-the-like-operator-with-the-character-list-or-range-wildcard-example "Anchor for 5) Using the LIKE operator with the [^Character List or Range] wildcard example")

The square brackets with a caret sign (^) followed by a range e.g., `[^A-C]` or character list e.g., `[ABC]` represent a single character that is not in the specified range or character list.

For example, the following query returns the customers where the first character in the last name is not the letter in the range `A` through `X`:

```
SELECT
    customer_id,
    first_name,
    last_name
FROM
    sales.customers
WHERE
    last_name LIKE '[^A-X]%'
ORDER BY
    last_name;
```

![SQL Server LIKE caret example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-LIKE-caret-example.png)

### 6) Using the NOT LIKE operator example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-like/#6-using-the-not-like-operator-example "Anchor for 6) Using the NOT LIKE operator example")

The following example uses the `NOT LIKE` operator to find customers where the first character in the first name is not the letter `A`:

```
SELECT
    customer_id,
    first_name,
    last_name
FROM
    sales.customers
WHERE
    first_name NOT LIKE 'A%'
ORDER BY
    first_name;
```

![SQL Server NOT LIKE example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-NOT-LIKE-example.png)

### 7) Using the LIKE operator with ESCAPE example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-like/#7-using-the-like-operator-with-escape-example "Anchor for 7) Using the LIKE operator with ESCAPE example")

First, [create a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) for the demonstration:

```
CREATE TABLE sales.feedbacks (
  feedback_id INT IDENTITY(1, 1) PRIMARY KEY, 
  comment VARCHAR(255) NOT NULL
);
```

Second, [insert some rows](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) into the `sales.feedbacks` table:

```
INSERT INTO sales.feedbacks(comment)
VALUES('Can you give me 30% discount?'),
      ('May I get me 30USD off?'),
      ('Is this having 20% discount today?');
```

Third, [query data](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/) from the `sales.feedbacks` table:

```
SELECT * FROM sales.feedbacks;
```

![SQL Server LIKE - sample table](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-LIKE-sample-table.png)

If you want to search for `30%` in the `comment` column, you may come up with a query like this:

```
SELECT 
   feedback_id,
   comment
FROM 
   sales.feedbacks
WHERE 
   comment LIKE '%30%';
```

![SQL Server LIKE without ESCAPE clause](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-LIKE-without-ESCAPE-clause.png)

The query returns comments that contain 30% and 30 USD, which is not what we expected.

To address this issue, you can use the `ESCAPE` clause:

```
SELECT 
   feedback_id, 
   comment
FROM 
   sales.feedbacks
WHERE 
   comment LIKE '%30!%%' ESCAPE '!';
```

![SQL Server LIKE with ESCAPE clause](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-LIKE-with-ESCAPE-clause.png)

In this query, the  `ESCAPE` clause specified that the character `!` is the escape character.

It instructs the `LIKE` operator to treat the `%` character as a literal string instead of a wildcard. Note that without the `ESCAPE` clause, the query would return an empty result set.

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-like/#summary "Anchor for Summary")

-   Use the `LIKE` operator to check if a value matches a specified pattern.

-   Use the `NOT` operator to negate the `LIKE` operator.

Was this tutorial helpful?

---
Source: [SQL Server LIKE Operator](https://www.sqlservertutorial.net/sql-server-basics/sql-server-like/)