# A Basic Guide to SQL Server DATETIME2 Data Type

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-datetime2/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `DATETIME2` to store both date and time data in a table.

## Introduction to SQL Server DATETIME2 [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-datetime2/#introduction-to-sql-server-datetime2 "Anchor for Introduction to SQL Server DATETIME2")

To store both date and time in the database, you use the SQL Server `DATETIME2` data type.

The syntax of `DATETIME2` is as follows:

```
DATETIME2(fractional seconds precision)
```

The fractional seconds precision is optional. It ranges from 0 to 7.

The following statement illustrates how to create a table that consists of a `DATETIME2` column:

```
CREATE TABLE table_name (
    ...
    column_name DATETIME2(3),
    ...
);
```

The `DATETIME2` has two components: date and time.

-   The date has a range from January 01, 01 (0001-01-01) to December 31, 9999 (9999-12-31)

-   The time has a range from 00:00:00 to 23:59:59.9999999.

The storage size of a `DATETIME2` value depends on the fractional seconds precision. It requires 6 bytes for the precision that is less than 3, 7 bytes for the precision that is between 3 and 4, and 8 bytes for all other precisions.

The default string literal format of the `DATETIME2` is as follows:

```
YYYY-MM-DD hh:mm:ss[.fractional seconds]
```

In this format:

-   `YYYY` is a four-digit number that represents a year e.g., 2018. It ranges from 0001 through 9999.

-   `MM` is a two-digit number that represents a month in a year e.g., 12. It ranges from 01 to 12.
-   `DD` is a two-digit number that represents a day of a specified month e.g., 23. It ranges from 01 to 31.

-   `hh` is a two-digit number that represents the hour. It ranges from 00 to 23.
-   `mm` is a two-digit number that represents the minute. It ranges from 00 to 59.

-   `ss` is a two-digit number that represents the second. It ranges from 00 to 59.
-   The fractional seconds is zero to a seven-digit number that ranges from 0 to 9999999.

## SQL Server DATETIME2 example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-datetime2/#sql-server-datetime2-example "Anchor for SQL Server DATETIME2 example")

The following statement [creates a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) that has a `created_at` column whose data type is `DATETIME2`:

```
CREATE TABLE production.product_colors (
    color_id INT PRIMARY KEY IDENTITY,
    color_name VARCHAR (50) NOT NULL,
    created_at DATETIME2
);
```

To insert the current date and time into the `created_at` column, you use the following `[INSERT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/)` statement with the `GETDATE`() function:

```
INSERT INTO production.product_colors (color_name, created_at)
VALUES
    ('Red', GETDATE()); 
```

The `GETDATE`() function is similar to the `[NOW()](http://www.mysqltutorial.org/mysql-now/)` function in other database systems such as [MySQL](http://www.mysqltutorial.org/mysql-now/)

To insert a literal value into the `DATETIME2` column, you use the following statement:

```
INSERT INTO production.product_colors (color_name, created_at)
VALUES
    ('Green', '2018-06-23 07:30:20');
```

If you want to set the default value of the `created_at` column to the current date and time, you use the following `ALTER TABLE` statement:

```
ALTER TABLE production.product_colors 
ADD CONSTRAINT df_current_time 
DEFAULT CURRENT_TIMESTAMP FOR created_at;
```

In this statement, we use `CURRENT_TIMESTAMP` as the default value for the `created_at` column. Note that the `CURRENT_TIMESTAMP` returns the same value as the `GETDATE`() function.

Now, when you insert a new row to the table without specifying the value for the `created_at` column, SQL Server will use the current date and time value for that column:

```
INSERT INTO production.product_colors (color_name)
VALUES
    ('Blue');
```

In this tutorial, you have learned how to use the SQL Server `DATETIME2` data type to store both date and time data in a table.

Was this tutorial helpful?

---
Source: [A Basic Guide to SQL Server DATETIME2 Data Type](https://www.sqlservertutorial.net/sql-server-basics/sql-server-datetime2/)