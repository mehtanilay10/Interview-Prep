# SQL Server ALTER TABLE ADD Column

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-alter-table-add-column/#primary)

**Summary**: in this tutorial, you will learn how to use SQL Server `ALTER TABLE ADD` statement to add one or more columns to a table.

The following `ALTER TABLE ADD` statement appends a new column to a table:

```
ALTER TABLE table_name
ADD column_name data_type column_constraint;
```

In this statement:

-   First, specify the name of the table in which you want to add the new column.

-   Second, specify the name of the column, its data type, and constraint if applicable.

If you want to add multiple columns to a table at once using a single `ALTER TABLE` statement, you use the following syntax:

```
ALTER TABLE table_name
ADD 
    column_name_1 data_type_1 column_constraint_1,
    column_name_2 data_type_2 column_constraint_2,
    ...,
    column_name_n data_type_n column_constraint_n;
```

In this syntax, you specify a comma-separated list of columns that you want to add to a table after the `ADD` clause.

Note that SQL Server doesn’t support the syntax for adding a column to a table after an existing column as [MySQL does](https://www.mysqltutorial.org/mysql-add-column/).

The following statement creates a new table named `sales.quotations`:

```
CREATE TABLE sales.quotations (
    quotation_no INT IDENTITY PRIMARY KEY,
    valid_from DATE NOT NULL,
    valid_to DATE NOT NULL
);
```

To add a new column named `description` to the `sales.quotations` table, you use the following statement:

```
ALTER TABLE sales.quotations 
ADD description VARCHAR (255) NOT NULL;
```

The following statement adds two new columns named `amount` and `customer_name` to the `sales.quotations` table:

```
ALTER TABLE sales.quotations 
    ADD 
        amount DECIMAL (10, 2) NOT NULL,
        customer_name VARCHAR (50) NOT NULL;
```

In this tutorial, you have learned how to use the SQL Server `ALTER TABLE ADD` statement to add one or more columns to a table.

Was this tutorial helpful?

---
Source: [SQL Server ALTER TABLE ADD Column](https://www.sqlservertutorial.net/sql-server-basics/sql-server-alter-table-add-column/)