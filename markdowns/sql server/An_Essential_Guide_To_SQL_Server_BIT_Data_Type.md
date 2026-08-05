# An Essential Guide To SQL Server BIT Data Type

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-bit/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `BIT` data type to store bit data in the database.

## Overview of BIT data type [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-bit/#overview-of-bit-data-type "Anchor for Overview of <code>BIT</code> data type")

SQL Server `BIT` data type is an [integer data type](https://www.sqlservertutorial.net/sql-server-basics/sql-server-int/) that can take a value of 0, 1, or `NULL`.

The following illustrates the syntax of the `BIT` data type:

```
BIT
```

SQL Server optimizes storage of `BIT` columns. If a table has 8 or fewer bit columns, SQL Server stores them as 1 byte. If a table has 9 up to 16 bit columns, SQL Server stores them as 2 bytes, and so on.

SQL Server converts a string value `TRUE` to 1 and `FALSE` to 0. It also converts any nonzero value to 1.

## SQL Server BIT examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-bit/#sql-server-bit-examples "Anchor for SQL Server <code>BIT</code> examples")

The following statement [creates a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) with one `BIT` column:

```
CREATE TABLE test.sql_server_bit (
    bit_col BIT
);
```

To [insert](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) a bit 1 into the bit column, you use the following statement:

```
INSERT INTO test.sql_server_bit (bit_col)
OUTPUT inserted.bit_col
VALUES(1);
```

The output is:

```
bit_col
-------
1

(1 row affected)
```

To insert a bit 0 into the bit column, you use the following statement:

```
INSERT INTO test.sql_server_bit (bit_col)
OUTPUT inserted.bit_col
VALUES(0);
```

Here is the output:

```
bit_col
-------
0

(1 row affected)
```

If you insert a string value of `True` into the bit column, SQL server converts it to bit 1:

```
INSERT INTO test.sql_server_bit (bit_col)
OUTPUT inserted.bit_col
VALUES
    ('True');
```

The following shows the output:

```
bit_col
-------
1

(1 row affected)
```

Similarly, SQL Server converts a string value of `false` to bit 0:

```
INSERT INTO test.sql_server_bit (bit_col)
OUTPUT inserted.bit_col
VALUES
    ('False');
```

The following is the output:

```
bit_col
-------
0

(1 row affected)
```

SQL Server converts any nonzero value to bit 1. For example:

```
INSERT INTO test.sql_server_bit (bit_col)
OUTPUT inserted.bit_col
VALUES
    (0.5); 
```

The following is the output:

```
bit_col
-------
1

(1 row affected)
```

In this tutorial, you have learned how to use the SQL Server `BIT` data type to store bit data in a table.

Was this tutorial helpful?

---
Source: [An Essential Guide To SQL Server BIT Data Type](https://www.sqlservertutorial.net/sql-server-basics/sql-server-bit/)