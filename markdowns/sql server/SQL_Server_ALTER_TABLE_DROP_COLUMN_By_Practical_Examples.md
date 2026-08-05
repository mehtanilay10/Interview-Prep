# SQL Server ALTER TABLE DROP COLUMN By Practical Examples

**Summary**: in this tutorial, you will learn how to use the SQL Server `ALTER TABLE DROP` column statement to remove one or more columns from existing table.

## Introduction to SQL Server ALTER TABLE DROP COLUMN [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-alter-table-drop-column/#introduction-to-sql-server-alter-table-drop-column "Anchor for Introduction to SQL Server <code>ALTER TABLE DROP COLUMN</code>")

Sometimes, you need to remove one or more unused or obsolete columns from a table. To do this, you use the `ALTER TABLE DROP COLUMN` statement as follows:

```
ALTER TABLE table_name
DROP COLUMN column_name;
```

In this syntax:

-   First, specify the name of the table from which you want to delete the column.

-   Second, specify the name of the column that you want to delete.

If the column that you want to delete has a `[CHECK](https://www.sqlservertutorial.net/sql-server-basics/sql-server-check-constraint/)` constraint, you must delete the constraint first before removing the column. Also, SQL Server does not allow you to delete a column that has a `[PRIMARY KEY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-primary-key/)` or a `[FOREIGN KEY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-foreign-key/)` constraint.

If you want to delete multiple columns at once, you use the following syntax:

```
ALTER TABLE table_name
DROP COLUMN column_name_1, column_name_2,...;
```

In this syntax, you specify columns that you want to drop as a list of comma-separated columns in the `DROP COLUMN` clause.

Let’s [create a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `sales.price_lists` for the demonstration.

```
CREATE TABLE sales.price_lists(
    product_id int,
    valid_from DATE,
    price DEC(10,2) NOT NULL CONSTRAINT ck_positive_price CHECK(price >= 0),
    discount DEC(10,2) NOT NULL,
    surcharge DEC(10,2) NOT NULL,
    note VARCHAR(255),
    PRIMARY KEY(product_id, valid_from)
); 
```

The following statement drops the `note` column from the `price_lists` table:

```
ALTER TABLE sales.price_lists
DROP COLUMN note;
```

The price column has a `CHECK` constraint, therefore, you cannot delete it. If you try to execute the following statement, you will get an error:

```
ALTER TABLE sales.price_lists
DROP COLUMN price;
```

Here is the error message:

```
The object 'ck_positive_price' is dependent on column 'price'.
```

To drop the `price` column, first, delete its `CHECK` constraint:

```
ALTER TABLE sales.price_lists
DROP CONSTRAINT ck_positive_price;
```

And then, delete the `price` column:

```
ALTER TABLE sales.price_lists
DROP COLUMN price;
```

The following example deletes two columns `discount` and `surcharge` at once:

```
ALTER TABLE sales.price_lists
DROP COLUMN discount, surcharge;
```

In this tutorial, you have learned how to use the SQL Server `ALTER TABLE DROP COLUMN` statement to remove one or more columns from a table.

Was this tutorial helpful?

---
Source: [SQL Server ALTER TABLE DROP COLUMN By Practical Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-alter-table-drop-column/)