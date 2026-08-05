# Essential Guide to SQL Server NOT NULL Constraint By Examples

**Summary**: in this tutorial, you will learn how to use the SQL Server `NOT NULL` constraint to ensure data contained in a column is not `NULL`.

## Introduction to SQL Server NOT NULL constraint [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-not-null-constraint/#introduction-to-sql-server-not-null-constraint "Anchor for Introduction to SQL Server <code>NOT NULL</code> constraint")

The SQL Server `NOT NULL` constraints simply specify that a column must not assume the `NULL`.

The following example [creates a table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) with `NOT NULL` constraints for the columns: `first_name`, `last_name`, and `email`:

```
CREATE SCHEMA hr;
GO

CREATE TABLE hr.persons(
    person_id INT IDENTITY PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20)
);
```

Note that the `NOT NULL` constraints are always written as column constraints.

By default, if you don’t specify the `NOT NULL` constraint, SQL Server will allow the column to accepts `NULL`. In this example, the phone column can accept `NULL`.

## Add NOT NULL constraint to an existing column [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-not-null-constraint/#add-not-null-constraint-to-an-existing-column "Anchor for Add <code>NOT NULL</code> constraint to an existing column")

To add the `NOT NULL` constraint to an existing column, you follow these steps:

First, update the table so there is no `NULL` in the column:

```
UPDATE table_name
SET column_name = <value>
WHERE column_name IS NULL;
```

Second, alter the table to change the property of the column:

```
ALTER TABLE table_name
ALTER COLUMN column_name data_type NOT NULL;
```

For example, to add the `NOT NULL` constraint to the phone column of the hr.persons table, you use the following statements:

First, if a person does not have a phone number, then update the phone number to the company phone number e.g., (408) 123 4567:

```
UPDATE hr.persons
SET phone = "(408) 123 4567"
WHER phone IS NULL;
```

Second, modify the property of the phone column:

```
ALTER TABLE hr.persons
ALTER COLUMN phone VARCHAR(20) NOT NULL;
```

## Removing NOT NULL constraint [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-not-null-constraint/#removing-not-null-constraint "Anchor for Removing <code>NOT NULL</code> constraint")

To remove the `NOT NULL` constraint from a column, you use the `ALTER TABLE ALTER COLUMN` statement as follows:

```
ALTER TABLE table_name
ALTER COLUMN column_name data_type NULL;
```

For example, to remove the `NOT NULL` constraint from the phone column, you use the following statement:

```
ALTER TABLE hr.pesons
ALTER COLUMN phone VARCHAR(20) NULL;
```

In this tutorial, you have learned how to use the SQL Server `NOT NULL` constraint to enforce a column not accept `NULL`.

Was this tutorial helpful?

---
Source: [Essential Guide to SQL Server NOT NULL Constraint By Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-not-null-constraint/)