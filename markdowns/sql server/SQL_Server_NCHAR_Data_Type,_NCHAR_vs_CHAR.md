# SQL Server NCHAR Data Type, NCHAR vs. CHAR

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nchar/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `NCHAR` data type to store fixed-length, Unicode character string data.

To store fixed-length, Unicode character string data in the database, you use the SQL Server `NCHAR` data type:

```
NCHAR(n)
```

In this syntax, n specifies the string length that ranges from 1 to 4,000. The storage size of a `NCHAR` value is two times n bytes.

The ISO synonyms for `NCHAR` are `NATIONAL CHAR` and `NATIONAL CHARACTER`, therefore, you can use them interchangeably.

Similar to the `[CHAR](https://www.sqlservertutorial.net/sql-server-basics/sql-server-char/)` data type, you use the `NCHAR` for storing fixed-length character string only. If the lengths of data values are variable, you should consider using `VARCHAR` or `NVARCHAR` data type.

The following are the major differences between CHAR and NCHAR [data types](https://www.sqlservertutorial.net/sql-server-basics/sql-server-data-types/)

| #### CHAR | #### NCHAR |
| --- | --- |
| Store only non-Unicode characters. | Store Unicode characters in the form of UNICODE UCS-2 characters. |
| Need 1 byte to store a character | Need 2 bytes to store a character. |
| The storage size **equals the size** specified in the column definition or variable declaration. | The storage size **equals double the size** specified in the column definition or variable declaration. |
| Store up to 8000 characters. | Store up to 4000 characters. |

## SQL Server NCHAR example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nchar/#sql-server-ncharexample "Anchor for SQL Server <code>NCHAR</code> example")

The following statement [creates a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) with one `NCHAR` column:

```
CREATE TABLE test.sql_server_nchar (
    val NCHAR(1) NOT NULL
);
```

The following `[INSERT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/)` statement inserts the character a (あ) in Japanese into the `NCHAR` column:

```
INSERT INTO test.sql_server_nchar (val)
VALUES
    (N'あ');
```

Notice that you must prefix the Unicode character string constants with the letter `N`. Otherwise, SQL Server will convert the string to the default code page of the database which may not recognize some certain Unicode characters.

If you insert a character string whose length is greater than the length specified in the column definition, SQL Server issues an error and terminates the statement.

For example, the following statement attempts to insert a string with two characters into the  `val` column of `test.sql_server_nchar` table:

```
INSERT INTO test.sql_server_nchar (val)
VALUES
    (N'いえ'); 
```

SQL Server issued the following error message:

```
String or binary data would be truncated.
The statement has been terminated. 
```

To find the number of characters and the number of bytes of the values the `val` column, you use the `LEN` and `DATALENGTH` functions as follows:

```
SELECT
    val,
    len(val) length,
    DATALENGTH(val) data_length
FROM
    test.sql_server_nchar;
```

![SQL Server NCHAR data type example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-NCHAR-data-type-example.png)

In this tutorial, you have learned how to use the SQL Server `NCHAR` data type to store fixed-length, Unicode character strings in the database.

Was this tutorial helpful?

---
Source: [SQL Server NCHAR Data Type, NCHAR vs. CHAR](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nchar/)