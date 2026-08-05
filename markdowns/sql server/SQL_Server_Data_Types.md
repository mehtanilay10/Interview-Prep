# SQL Server Data Types

**Summary**: in this tutorial, you will learn about SQL Server data types including numeric, character string, binary string, date & time, and other data types.

## SQL Server data types Overview [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-data-types/#sql-server-data-types-overview "Anchor for SQL Server data types Overview")

In SQL Server, a column, [variable](https://www.sqlservertutorial.net/sql-server-stored-procedures/variables/), and [parameter](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-stored-procedure-parameters/) holds a value that associated with a type, or also known as a data type. A data type is an attribute that specifies the type of data that these objects can store. It can be an integer, character string, monetary, date and time, and so on.

SQL Server provides a list of data types that define all types of data that you can use e.g., defining a column or declaring a variable.

The following picture illustrates the SQL Server data types system:

![SQL Server Data Types](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Data-Types.png)

Notice that SQL Server will remove **ntext**, **text**, and **image** data types in its future version. Therefore, you should avoid using these data types and use **nvarchar(max)**, **varchar(max)**, and **varbinary(max)** data types instead.

## Exact numeric data types [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-data-types/#exact-numeric-data-types "Anchor for Exact numeric data types")

Exact numeric data types store exact numbers such as integer, decimal, or monetary amount.

-   The bit store one of three values 0, 1, and NULL

-   The int, bigint, smallint, and tinyint data types store integer data.
-   The decimal and numeric data types store numbers that have fixed precision and scale. Note that decimal and numeric are synonyms.

-   The money and smallmoney data type store currency values.

The following table illustrates the characteristics of the exact numeric data types:

| **Data Type** | **Lower limit** | **Upper limit** | **Memory** |
| --- | --- | --- | --- |
| bigint | −2^63 (−9,223,372, 036,854,775,808) | 2^63−1 (−9,223,372, 036,854,775,807) | 8 bytes |
| [int](https://www.sqlservertutorial.net/sql-server-basics/sql-server-int/) | −2^31 (−2,147, 483,648) | 2^31−1 (−2,147, 483,647) | 4 bytes |
| smallint | −2^15 (−32,767) | 2^15 (−32,768) | 2 bytes |
| tinyint | 0 | 255 | 1 byte |
| [bit](https://www.sqlservertutorial.net/sql-server-basics/sql-server-bit/) | 0 | 1 | 1 byte/8bit column |
| [decimal](https://www.sqlservertutorial.net/sql-server-basics/sql-server-decimal/) | −10^38+1 | 10^381−1 | 5 to 17 bytes |
| numeric | −10^38+1 | 10^381−1 | 5 to 17 bytes |
| money | −922,337, 203, 685,477.5808 | +922,337, 203, 685,477.5807 | 8 bytes |
| smallmoney | −214,478.3648 | +214,478.3647 | 4 bytes |

## Approximate numeric data types [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-data-types/#approximate-numeric-data-types "Anchor for Approximate numeric data types")

The approximate numeric data type stores floating point numeric data. They are often used in scientific calculations.

| **Data Type** | **Lower limit** | **Upper limit** | **Memory** | **Precision** |
| --- | --- | --- | --- | --- |
| float(n) | −1.79E+308 | 1.79E+308 | Depends on the value of n | 7 Digit |
| real | −3.40E+38 | 3.40E+38 | 4 bytes | 15 Digit |

## Date & Time data types [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-data-types/#date-time-data-types "Anchor for Date & Time data types")

The date and time data types store data and time data, and the date time offset.

| **Data Type** | **Storage size** | **Accuracy** | **Lower Range** | **Upper Range** |
| --- | --- | --- | --- | --- |
| datetime | 8 bytes | Rounded to increments of .000, .003, .007 | 1753-01-01 | 9999-12-31 |
| smalldatetime | 4 bytes, fixed | 1 minute | 1900-01-01 | 2079-06-06 |
| [date](https://www.sqlservertutorial.net/sql-server-basics/sql-server-date/) | 3 bytes, fixed | 1 day | 0001-01-01 | 9999-12-31 |
| [time](https://www.sqlservertutorial.net/sql-server-basics/sql-server-time/) | 5 bytes | 100 nanoseconds | 00:00:00.0000000 | 23:59:59.9999999 |
| [datetimeoffset](https://www.sqlservertutorial.net/sql-server-basics/sql-server-datetimeoffset/) | 10 bytes | 100 nanoseconds | 0001-01-01 | 9999-12-31 |
| [datetime2](https://www.sqlservertutorial.net/sql-server-basics/sql-server-datetime2/) | 6 bytes | 100 nanoseconds | 0001-01-01 | 9999-12-31 |

If you develop a new application, you should use the **time**, **date**, **datetime2** and **datetimeoffset** data types. Because these types align with the SQL Standard and more portable. In addition, the **time**, **datetime2** and **datetimeoffset** have more seconds precision and **datetimeoffset** supports time zone.

## Character strings data types [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-data-types/#character-strings-data-types "Anchor for Character strings data types")

Character strings data types allow you to store either fixed-length (char) or variable-length data (varchar). The text data type can store non-Unicode data in the code page of the server.

| **Data Type** | **Lower limit** | **Upper limit** | **Memory** |
| --- | --- | --- | --- |
| [char](https://www.sqlservertutorial.net/sql-server-basics/sql-server-char/) | 0 chars | 8000 chars | n bytes |
| [varchar](https://www.sqlservertutorial.net/sql-server-basics/sql-server-varchar/) | 0 chars | 8000 chars | n bytes + 2 bytes |
| varchar (max) | 0 chars | 2^31 chars | n bytes + 2 bytes |
| text | 0 chars | 2,147,483,647 chars | n bytes + 4 bytes |

## Unicode character string data types [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-data-types/#unicode-character-string-data-types "Anchor for Unicode character string data types")

Unicode character string data types store either fixed-length (nchar) or variable-length (nvarchar) Unicode character data.

| **Data Type** | **Lower limit** | **Upper limit** | **Memory** |
| --- | --- | --- | --- |
| [nchar](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nchar/) | 0 chars | 4000 chars | 2 times n bytes |
| [nvarchar](https://www.sqlservertutorial.net/sql-server-basics/sql-server-nvarchar/) | 0 chars | 4000 chars | 2 times n bytes + 2 bytes |
| ntext | 0 chars | 1,073,741,823 char | 2 times the string length |

## Binary string data types [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-data-types/#binary-string-data-types "Anchor for Binary string data types")

The binary data types stores fixed and variable length binary data.

| **Data Type** | **Lower limit** | **Upper limit** | **Memory** |
| --- | --- | --- | --- |
| binary | 0 bytes | 8000 bytes | n bytes |
| varbinary | 0 bytes | 8000 bytes | The actual length of data entered + 2 bytes |
| image | 0 bytes | 2,147,483,647 bytes |  |

## Other data types [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-data-types/#other-data-types "Anchor for Other data types")

| **Data Type** | **Description** |
| --- | --- |
| [cursor](https://www.sqlservertutorial.net/sql-server-stored-procedures/sql-server-cursor/) | for variables or stored procedure OUTPUT parameter that contains a reference to a cursor |
| rowversion | expose automatically generated, unique binary numbers within a database. |
| hierarchyid | represent a tree position in a tree hierarchy |
| uniqueidentifier | 16-byte [GUID](https://www.sqlservertutorial.net/sql-server-basics/sql-server-guid/) |
| sql\_variant | store values of other data types |
| XML | store XML data in a column, or a variable of XML type |
| Spatial Geometry type | represent data in a flat coordinate system. |
| Spatial Geography type | store ellipsoidal (round-earth) data, such as GPS latitude and longitude coordinates. |
| table | store a result set temporarily for processing at a later time |

In this tutorial, you have learned about the brief overview of SQL Server data types. We will examine each data type in detail in the next tutorials.

Was this tutorial helpful?

---
Source: [SQL Server Data Types](https://www.sqlservertutorial.net/sql-server-basics/sql-server-data-types/)