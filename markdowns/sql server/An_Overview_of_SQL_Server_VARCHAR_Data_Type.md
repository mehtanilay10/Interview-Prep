# An Overview of SQL Server VARCHAR Data Type

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-varchar/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `VARCHAR` data type to store variable-length, non-Unicode string data.

SQL Server `VARCHAR` data type is used to store variable-length, non-Unicode string data. The following illustrates the syntax:

```
VARCHAR(n)
```

In this syntax, n defines the string length that ranges from 1 to 8,000. If you don’t specify n, its default value is 1.

Another way to declare a `VARCHAR` column is to use the following syntax:

```
VARCHAR(max)
```

In this syntax, max defines the maximum storage size which is 231\-1 bytes (2 GB).

In general, the storage size of a `VARCHAR` value is the actual length of the data stored plus 2 bytes.

The ISO synonyms of `VARCHAR` are `CHARVARYING` or `CHARACTERVARYING`, therefore, you can use them interchangeably.

## SQL Server VARCHAR example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-varchar/#sql-server-varchar-example "Anchor for SQL Server <code>VARCHAR</code> example")

The following statement creates a new table that contains one `VARCHAR` column:

```
CREATE TABLE test.sql_server_varchar (
    val VARCHAR NOT NULL
);
```

Because we did not specify the string length of the  `val` column, it defaults to one.

To change the string length of the  `val` column, you use the `ALTER TABLE ALTER COLUMN` statement:

```
ALTER TABLE test.sql_server_varchar 
ALTER COLUMN val VARCHAR (10) NOT NULL;
```

The following statement inserts a new string into the  `val` column of the `test.sql_server_varchar` table:

```
INSERT INTO test.sql_server_varchar (val)
VALUES
    ('SQL Server');
```

The statement worked as expected because the string value has a length equals to the one defined in the column definition.

The following statement attempts to insert a new string data whose length is greater than the string length of the column:

```
INSERT INTO test.sql_server_varchar (val)
VALUES
    ('SQL Server VARCHAR');
```

SQL Server issued an error and terminated the statement:

```
String or binary data would be truncated.
The statement has been terminated.
```

To find the number of characters and the number of bytes of values stored in the `VARCHAR` column, you use the `LEN` and `DATALENGTH` functions as shown in the following query:

```
SELECT
    val,
    LEN(val) len,
    DATALENGTH(val) data_length
FROM
    test.sql_server_varchar;
```

![SQL Server VARCHAR example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-VARCHAR-example.png)

In this tutorial, you have learned how to use the SQL Server `VARCHAR` data type to store variable-length, non-Unicode data in the database.

Was this tutorial helpful?

---
Source: [An Overview of SQL Server VARCHAR Data Type](https://www.sqlservertutorial.net/sql-server-basics/sql-server-varchar/)