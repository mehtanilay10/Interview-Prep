# SQL Server DATETIMEOFFSET Data Type

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-datetimeoffset/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `DATETIMEOFFSET` data type to manipulate datetime with time zone.

## Introduction to DATETIMEOFFSET data type [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-datetimeoffset/#introduction-to-datetimeoffset-data-type "Anchor for Introduction to <code>DATETIMEOFFSET</code> data type")

The `DATETIMEOFFSET` allows you to manipulate any single point in time, which is a datetime value, along with an offset that specifies how much that datetime differs from UTC.

### DATETIMEOFFSET syntax [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-datetimeoffset/#datetimeoffset-syntax "Anchor for <code>DATETIMEOFFSET</code> syntax")

The syntax of the `DATETIMEOFFSET` is as follows:

```
DATETIMEOFFSET [ (fractional seconds precision) ]
```

To declare a `DATETIMEOFFSET` [variable](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/), you use the following syntax:

```
DECLARE @dt DATETIMEOFFSET(7)
```

To create a table column whose data type is `DATETIMEOFFSET`, you use the following form:

```
CREATE TABLE table_name (
    ...,
    column_name DATETIMEOFFSET(7)
    ...
);
```

The `DATETIMEOFFSET` has a range from January 1, 1 CE to December 31, 999 CE. The time ranges from `00:00:00` through `23:59:59.9999999`.

### Literal formats [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-datetimeoffset/#literal-formats "Anchor for Literal formats")

The literal formats of `DATETIMEOFFSET` is as follows:

```
YYYY-MM-DDThh:mm:ss[.nnnnnnn][{+|-}hh:mm]
```

For example:

```
2020-12-12 11:30:30.12345 
```

or by ISO

```
YYYY-MM-DDThh:mm:ss[.nnnnnnn]Z
```

For example:

```
2020-12-12 19:30:30.12345Z.
```

### Time zone offset [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-datetimeoffset/#time-zone-offset "Anchor for Time zone offset")

For a datetime or time value, a time zone offset specifies the zone offset from UTC. A time zone offset is represented as \[+|-\] hh:mm:

-   `hh` is two digits that range from 00 to 14, which represents the number of hour in the time zone offset.

-   `mm` is two digits that range from 00 to 59, which represents the number of additional minutes in the time zone offset.
-   +(plus) or -(minus) specifies whether the time zone offset is added or subtracted from the UTC time to return the local time.

The valid range of a time zone offset is -14:00 to +14:00

## DATETIMEOFFSET examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-datetimeoffset/#datetimeoffset-examples "Anchor for <code>DATETIMEOFFSET</code> examples")

First, [create a table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `messages`, which has a `DATETIMEOFFSET` column:

```
CREATE TABLE messages(
    id         INT PRIMARY KEY IDENTITY, 
    message    VARCHAR(255) NOT NULL, 
    created_at DATETIMEOFFSET NOT NULL
);
```

Second, [insert](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) a new row with a `DATETIMEOFFSET` value into the `messages` table:

```
INSERT INTO messages(message,created_at)
VALUES('DATETIMEOFFSET demo',
        CAST('2019-02-28 01:45:00.0000000 -08:00' AS DATETIMEOFFSET));
```

Third, [query](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/) data from the `messages` table and use the `AT TIME ZONE` to convert the stored `DATETIMEOFFSET` value to  `'SE Asia Standard Time'` timezone.

```
SELECT 
    id, 
    message, 
	created_at 
        AS 'Pacific Standard Time'
    created_at AT TIME ZONE 'SE Asia Standard Time' 
        AS 'SE Asia Standard Time',
FROM 
    messages;
```

Here is the output:

![SQL Server DATETIMEOFFSET Example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-DATETIMEOFFSET-Example.png)

In this tutorial, you have learned how to use the `DATETIMEOFFSET` data type to manipulate the `DATETIMEOFFSET` value.

Was this tutorial helpful?

---
Source: [SQL Server DATETIMEOFFSET Data Type](https://www.sqlservertutorial.net/sql-server-basics/sql-server-datetimeoffset/)