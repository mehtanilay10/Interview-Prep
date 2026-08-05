# SQL Server NVARCHAR Data Type Overview

**Summary**: in this tutorial, you will learn how to use the SQL Server `NVARCHAR` data type to store variable-length, Unicode string data.

SQL Server `NVARCHAR` data type is used to store variable-length, Unicode string data. The following shows the syntax of `NVARCHAR`:

```
NVARCHAR(n)
```

In this syntax, n defines the string length that ranges from 1 to 4,000. If you don’t specify the string length, its default value is 1.

Another way to declare a `NVARCHAR` column is to use the following syntax:

```
NVARCHAR(max)
```

In this syntax, max is the maximum storage size in bytes which is 2^31-1 bytes (2 GB).

In general, the actual storage size in bytes of a `NVARCHAR` value is two times the number of characters entered plus 2 bytes.

The `ISO` synonyms of `NVARCHAR` are `NATIONAL CHAR VARYING` or `NATIONAL CHARACTER VARYING`, so you can use them interchangeably in the variable declaration or column data definition.

## VARCHAR vs. NVARCHAR [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nvarchar/#varchar-vs-nvarchar "Anchor for VARCHAR vs. NVARCHAR")

The following table illustrates the main differences between `VARCHAR` and `NVARCHAR` data types:

|  | VARCHAR | **NVARCHAR** |
| --- | --- | --- |
| Character Data Type | Variable-length, non-Unicode characters | Variable-length, both Unicode and non-Unicode characters such as Japanese, Korean, and Chinese. |
| Maximum Length | Up to 8,000 characters | Up to 4,000 characters |
| Character Size | Takes up 1 byte per character | Takes up 2 bytes per Unicode/Non-Unicode character |
| Storage Size | Actual Length (in bytes) | 2 times Actual Length (in bytes) |
| Usage | Used when data length is variable or variable length columns and if actual data is always way less than capacity | Due to storage only, used only if you need Unicode support such as the Japanese Kanji or Korean Hangul characters. |

## SQL Server NVARCHAR example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nvarchar/#sql-server-nvarchar-example "Anchor for SQL Server <code>NVARCHAR</code> example")

The following statement [creates a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) that contains one `NVARCHAR` column:

```
CREATE TABLE test.sql_server_nvarchar (
    val NVARCHAR NOT NULL
);
```

In this example, the string length of the `NVARCHAR` column is one by default.

To change the string length of the  `val` column, you use the `ALTER TABLE ALTER COLUMN` statement:

```
ALTER TABLE test.sql_server_Nvarchar 
ALTER COLUMN val NVARCHAR (10) NOT NULL;
```

The following statement [inserts](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) a new string into the  `val` column of the `test.sql_server_nvarchar` table:

```
INSERT INTO test.sql_server_varchar (val)
VALUES
    (N'こんにちは');
```

The statement worked as expected because the string value has a length that is less than to the string length defined in the column definition.

The following statement attempts to insert a new string data whose length is greater than the string length of the  `val` column:

```
INSERT INTO test.sql_server_nvarchar (val)
VALUES
    (N'ありがとうございました');
```

SQL Server issued an error and terminated the statement:

```
String or binary data would be truncated.
The statement has been terminated.
```

To find the number of characters and the storage size in bytes of the values stored in the `NVARCHAR` column, you use the `LEN` and `DATALENGTH` functions as follows:

```
SELECT
    val,
    LEN(val) len,
    DATALENGTH(val) data_length
FROM
    test.sql_server_nvarchar;
```

In this tutorial, you have learned how to use the SQL Server `NVARCHAR` data type to store variable-length, Unicode data in the database.

Was this tutorial helpful?

---
Source: [SQL Server NVARCHAR Data Type Overview](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nvarchar/)