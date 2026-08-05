# An Essential Guide to SQL Server Computed Columns By Examples

**Summary**: in this tutorial, you will learn how to use the SQL Server computed columns to reuse the calculation logic in multiple queries.

## Introduction to SQL Server computed columns [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-computed-columns/#introduction-to-sql-server-computed-columns "Anchor for Introduction to SQL Server computed columns")

Let’s [create a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `persons` for the demonstrations:

```
CREATE TABLE persons
(
    person_id  INT PRIMARY KEY IDENTITY, 
    first_name NVARCHAR(100) NOT NULL, 
    last_name  NVARCHAR(100) NOT NULL, 
    dob        DATE
);
```

And [insert](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) two rows into the the `persons` table:

```
INSERT INTO 
    persons(first_name, last_name, dob)
VALUES
    ('John','Doe','1990-05-01'),
    ('Jane','Doe','1995-03-01');
```

To query the full names of people in the `persons` table, you normally use the `[CONCAT()](https://www.sqlservertutorial.net/sql-server-string-functions/sql-server-concat-function/)` function or the `+` operator as follows:

```
SELECT
    person_id,
    first_name + ' ' + last_name AS full_name,
    dob
FROM
    persons
ORDER BY
    full_name;
```

![SQL Server Computed Column - expression in query](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Computed-Column-expression-in-query.png)

Adding the `full_name` expression `first_name + ' ' + last_name` in every query is not convenient.

Fortunately, SQL Server provides us with a feature called computed columns that allows you to add a new column to a table with the value derived from the values of other columns in the *same* table.

For example, you can add the `full_name` column to the `persons` table by using the [`ALTER TABLE ADD` column](https://www.sqlservertutorial.net/sql-server-basics/sql-server-alter-table-add-column/) as follows:

```
ALTER TABLE persons
ADD full_name AS (first_name + ' ' + last_name);
```

Every time you query data from the `persons` table, SQL Server computes the value for the `full_name` column based on the expression `first_name + ' ' + last_name` and returns the result.

Here is the new query, which is more compact:

```
SELECT 
    person_id, 
    full_name, 
    dob
FROM 
    persons
ORDER BY 
    full_name;
```

If you examine the `persons` table, you can see the new `full_name` column appears in the column list:

![SQL Server Computed Column example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Computed-Column-example.png)

## Persisted computed columns [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-computed-columns/#persisted-computed-columns "Anchor for Persisted computed columns")

Computed columns can be persisted. It means that SQL Server physically stores the data of the computed columns on disk.

When you change data in the table, SQL Server computes the result based on the expression of the computed columns and stores the results in these persisted columns physically. When you query the data from the persisted computed columns, SQL Server just needs to retrieve data without doing any calculation. This avoids calculation overhead with the cost of extra storage.

Consider the following example.

First, drop the `full_name` column of the `persons` table:

```
ALTER TABLE persons
DROP COLUMN full_name;
```

Then, add the new `full_name` column to the `persons` table with the `PERSISTED` property:

```
ALTER TABLE persons
ADD full_name AS (first_name + ' ' + last_name) PERSISTED;
```

Note that a computed column is persisted only if its expression is deterministic. It means that for a set of inputs, the expression always returns the same result.

For example, the expression `first_name + ' ' + last_name` is deterministic. However, the `[GETDATE()](https://www.sqlservertutorial.net/sql-server-date-functions/sql-server-getdate-function/)` function is a non-deterministic function because it returns a different value on a different day.

This formula returns the age in years based on the date of birth and today:

```
(CONVERT(INT,CONVERT(CHAR(8),GETDATE(),112))-CONVERT(CHAR(8),dob,112))/10000
```

We can use this expression for defining the age in year computed column.

The following statement attempts to define the `age_in_year`computed column as a persisted computed column:

```
ALTER TABLE persons
ADD age_in_years 
    AS (CONVERT(INT,CONVERT(CHAR(8),GETDATE(),112))-CONVERT(CHAR(8),dob,112))/10000 
PERSISTED;
```

SQL server issues the following error:

```
Computed column 'age_in_years' in table 'persons' cannot be persisted because the column is non-deterministic.
```

If you remove the `PERSISTED` property, it should work:

```
ALTER TABLE persons
ADD age_in_years 
    AS (CONVERT(INT,CONVERT(CHAR(8),GETDATE(),112))-CONVERT(CHAR(8),dob,112))/10000;
```

Now, you can query the age in years of people in the `persons` table as follows:

```
SELECT 
    person_id, 
    full_name, 
    age_in_years
FROM 
    persons
ORDER BY 
    age_in_years DESC;
```

Here is the result set:

![SQL Server Computed Column - non-deterministic expression](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Computed-Column-non-deterministic-expression.png)

## The syntax for adding computed columns to a table [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-computed-columns/#the-syntax-for-adding-computed-columns-to-a-table "Anchor for The syntax for adding computed columns to a table")

To add a new computed column to an existing table, you use the following syntax:

```
ALTER TABLE table_name
ADD column_name AS expression [PERSISTED];
```

In this syntax:

-   First, specify the name of the table to which you want to add the computed column.

-   Second, specify the computed column name with the expression that returns the values for the column.
-   Third, if the expression is deterministic and you want to store the data of the computed column physically, you can use the `PERSISTED` property.

Note that you can [create an index on a persisted computed column](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-indexes-on-computed-columns/) to improve the speed of data retrieval from the computed column. It is a good alternative solution for [function-based indexes of Oracle](http://www.oracletutorial.com/oracle-index/oracle-function-based-index/) or [indexes on expressions of PostgreSQL](http://www.postgresqltutorial.com/postgresql-indexes/postgresql-index-on-expression/).

## The syntax for defining computed columns when creating a new table [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-computed-columns/#the-syntax-for-defining-computed-columns-when-creating-a-new-table "Anchor for The syntax for defining computed columns when creating a new table")

To define a computed column when you [create a table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/), you use the following syntax:

```
CREATE TABLE table_name(
    ...,
    column_name AS expression [PERSISTED],
    ...
);
```

In this tutorial, you have learned how to use SQL Server computed columns to reuse the calculation logic in multiple queries.

Was this tutorial helpful?

---
Source: [An Essential Guide to SQL Server Computed Columns By Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-computed-columns/)