# A Basic Guide to SQL Server TIME Data Type

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-time/#primary)

**Summary**: in this tutorial, you will learn how to store the time of a day in the database by using SQL Server `TIME` data type.

## Introduction to SQL Server TIME data type [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-time/#introduction-to-sql-server-time-data-type "Anchor for Introduction to SQL Server <code>TIME</code> data type")

The SQL Server `TIME` data type defines a time of a day based on 24-hour clock. The syntax of the `TIME` data type is as follows:

```
TIME[ (fractional second scale) ]
```

The fractional second scale specifies the number of digits for the fractional part of the seconds. The fractional second scale ranges from 0 to 7. By default, the fractional second scale is 7 if you don’t explicitly specify it.

The following example illustrates how to create a table with a `TIME` column:

```
CREATE TABLE table_name(
    ...,
    start_at TIME(0),
    ...
);
```

The default literal format for a `TIME` value is

```
hh:mm:ss[.nnnnnnn]
```

In this format:

-   `hh` is two digits that represent the hour with a range from 0 to 23.

-   `mm` is two digits that represent the minute with a range from 0 to 59.
-   `ss` is two digits that represent the second with the range from 0 to 59.

-   The fractional seconds part can be zero to seven digits that has a range from 0 to 9999999.

`A` time value with the default of 100ms fractional second precision requires 5 bytes storage.

Note that the `TIME` data type is not the time zone-awareness.

The following statement [creates a table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `sales.visits` with two `TIME` columns that record the visit time of the customers to a particular store:

```
CREATE TABLE sales.visits (
    visit_id INT PRIMARY KEY IDENTITY,
    customer_name VARCHAR (50) NOT NULL,
    phone VARCHAR (25),
    store_id INT NOT NULL,
    visit_on DATE NOT NULL,
    start_at TIME (0) NOT NULL,
    end_at TIME (0) NOT NULL,
    FOREIGN KEY (store_id) REFERENCES sales.stores (store_id)
);
```

The following `[INSERT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/)` statement adds a row to the `sales.visits` table:

```
INSERT INTO sales.visits (
    customer_name,
    phone,
    store_id,
    visit_on,
    start_at,
    end_at
)
VALUES
    (
        'John Doe',
        '(408)-993-3853',
        1,
        '2018-06-23',
        '09:10:00',
        '09:30:00'
    );
```

In this tutorial, you have learned how to use the SQL Server `TIME` data type to store time values in a table.

Was this tutorial helpful?

---
Source: [A Basic Guide to SQL Server TIME Data Type](https://www.sqlservertutorial.net/sql-server-basics/sql-server-time/)