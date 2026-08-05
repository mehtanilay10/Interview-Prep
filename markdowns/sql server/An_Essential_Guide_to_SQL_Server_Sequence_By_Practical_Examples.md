# An Essential Guide to SQL Server Sequence By Practical Examples

**Summary**: in this tutorial, you will learn about the SQL Server Sequence objects to generate a sequence of numeric values based on a specified specification.

## What is a sequence [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#what-is-a-sequence "Anchor for What is a sequence")

A sequence is simply a list of numbers, in which their orders are important. For example, the {1,2,3} is a sequence while the {3,2,1} is an entirely different sequence.

In SQL Server, a sequence is a user-defined schema-bound object that generates a sequence of numbers according to a specified specification. A sequence of numeric values can be in ascending or descending order at a defined interval and may cycle if requested.

## SQL Server CREATE SEQUENCE statement [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#sql-server-create-sequence-statement "Anchor for SQL Server <code>CREATE SEQUENCE</code> statement")

To create a new sequence object, you use the `CREATE SEQUENCE` statement as follows:

```
CREATE SEQUENCE [schema_name.] sequence_name  
    [ AS integer_type ]  
    [ START WITH start_value ]  
    [ INCREMENT BY increment_value ]  
    [ { MINVALUE [ min_value ] } | { NO MINVALUE } ]  
    [ { MAXVALUE [ max_value ] } | { NO MAXVALUE } ]  
    [ CYCLE | { NO CYCLE } ]  
    [ { CACHE [ cache_size ] } | { NO CACHE } ];
```

Let’s examine the syntax in detail:

### sequence\_name [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#sequence_name "Anchor for sequence_name")

Specify a name for the sequence which is uniquely in the current database.

### AS integer\_type [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#as-integer_type "Anchor for AS integer_type")

Use any valid integer type for the sequence e.g., `TINYINT`, `SMALLINT`, `[INT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-int/)`, `BIGINT`, or `[DECIMAL](https://www.sqlservertutorial.net/sql-server-basics/sql-server-decimal/)` and `NUMERIC` with a scale of 0. By default, the sequence object uses `BIGINT`.

### START WITH start\_value [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#start-with-start_value "Anchor for START WITH start_value")

Specify the first value that the sequence returns. The `start_value` must be between the range (`min_value`, `max_value`).

The `start_value` defaults to the `min_value` in an ascending sequence and `max_value` in a descending sequence.

### INCREMENT BY increment\_value [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#increment-by-increment_value "Anchor for INCREMENT BY increment_value")

Specify the `increment_value` of the sequence object when you call the `NEXT VALUE FOR` function.

If `increment_value` is negative, the sequence object is descending; otherwise, the sequence object is ascending. Note that the `increment_value` cannot be zero.

### \[ MINVALUE min\_value | NO MINVALUE \] [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#minvalue-min_value-no-minvalue "Anchor for [ MINVALUE min_value | NO MINVALUE ]")

Specify the lower bound for the sequence object. It defaults to the minimum value of the data type of the sequence object i.e., zero for `TINYINT` and a negative number for all other data types.

### \[ MAXVALUE max\_value | NO MAXVALUE\] [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#maxvalue-max_value-no-maxvalue "Anchor for [ MAXVALUE max_value | NO MAXVALUE]")

Specify the upper bound for the sequence object. It defaults to the maximum value of the data type of the sequence object.

### \[ CYCLE | NO CYCLE \] [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#cycle-no-cycle "Anchor for [ CYCLE | NO CYCLE ]")

Use `CYCLE` if you want the value of the sequence object to restart from the `min_value` for the ascending sequence object, or `max_value` for the descending sequence object or throw an exception when its `min_value` or `max_value` is exceeded. SQL Server uses `NO CYCLE` by default for new sequence objects.

### \[ CACHE cache\_size \] | NO CACHE \] [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#cache-cache_size-no-cache "Anchor for [ CACHE cache_size ] | NO CACHE ]")

Specify the number of values to cache to improve the performance of the sequence by minimizing the number of disk I/O required to generate sequence numbers. By default, SQL Server uses `NO CACHE` for new sequence objects.

Let’s take some examples of creating sequences.

### A) Creating a simple sequence example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#a-creating-a-simple-sequence-example "Anchor for A) Creating a simple sequence example")

The following statement uses the `CREATE SEQUENCE` statement to create a new sequence named `item_counter` with the type of integer (`INT`), which starts from 10 and increments by 10:

```
CREATE SEQUENCE item_counter
    AS INT
    START WITH 10
    INCREMENT BY 10;
```

You can view the sequence object under in the **Programmability > Sequences** as shown in the following picture:

![SQL Server Sequence example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Sequence-example.png)

The following statement returns the current value of the `item_counter` sequence:

```
SELECT NEXT VALUE FOR item_counter;
```

Here is the output:

```
Current_value
-------------
10

(1 row affected)
```

In this example, the `NEXT VALUE FOR` function generates a sequence number from the `item_counter` sequence object.

Each time you execute the following statement again, you will see that the value of the `item_counter` will be incremented by 10:

```
SELECT NEXT VALUE FOR item_counter;
```

This time the output is:

```
Current_value
-------------
20

(1 row affected)    
```

### B) Using a sequence object in a single table example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#b-using-a-sequence-object-in-a-single-table-example "Anchor for B) Using a sequence object in a single table example")

First, create a new schema named `procurement`:

```
CREATE SCHEMA procurement;
GO
```

Next, [create a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `orders`:

```
CREATE TABLE procurement.purchase_orders(
    order_id INT PRIMARY KEY,
    vendor_id int NOT NULL,
    order_date date NOT NULL
);
```

Then, create a new sequence object named `order_number` that starts with 1 and is incremented by 1:

```
CREATE SEQUENCE procurement.order_number 
AS INT
START WITH 1
INCREMENT BY 1;
```

After that, [insert](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) three rows into the `procurement.purchase_orders` table and uses values generated by the `procurement.order_number` sequence:

```
INSERT INTO procurement.purchase_orders
    (order_id,
    vendor_id,
    order_date)
VALUES
    (NEXT VALUE FOR procurement.order_number,1,'2019-04-30');

INSERT INTO procurement.purchase_orders
    (order_id,
    vendor_id,
    order_date)
VALUES
    (NEXT VALUE FOR procurement.order_number,2,'2019-05-01');

INSERT INTO procurement.purchase_orders
    (order_id,
    vendor_id,
    order_date)
VALUES
    (NEXT VALUE FOR procurement.order_number,3,'2019-05-02');
```

Finally, view the content of the `procurement.purchase_orders` table:

```
SELECT 
    order_id, 
    vendor_id, 
    order_date
FROM 
    procurement.purchase_orders;
```

Here is the output:

![SQL Server Sequence - use sequence for a table](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Sequence-use-sequence-for-a-table.png)

### C) Using a sequence object in multiple tables example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#c-using-a-sequence-object-in-multiple-tables-example "Anchor for C) Using a sequence object in multiple tables example")

First, create a new sequence object:

```
CREATE SEQUENCE procurement.receipt_no
START WITH 1
INCREMENT BY 1;
```

Second, create `procurement.goods_receipts` and `procurement.invoice_receipts` tables:

```
CREATE TABLE procurement.goods_receipts
(
    receipt_id   INT	PRIMARY KEY 
        DEFAULT (NEXT VALUE FOR procurement.receipt_no), 
    order_id     INT NOT NULL, 
    full_receipt BIT NOT NULL,
    receipt_date DATE NOT NULL,
    note NVARCHAR(100),
);

CREATE TABLE procurement.invoice_receipts
(
    receipt_id   INT PRIMARY KEY
        DEFAULT (NEXT VALUE FOR procurement.receipt_no), 
    order_id     INT NOT NULL, 
    is_late      BIT NOT NULL,
    receipt_date DATE NOT NULL,
    note NVARCHAR(100)
);
```

Note that both tables have the `receipt_id` whose values are derived from the `procurement.receipt_no` sequence.

Third, insert some rows into both tables without supplying the values for the `receipt_id` columns:

```
INSERT INTO procurement.goods_receipts(
    order_id, 
    full_receipt,
    receipt_date,
    note
)
VALUES(
    1,
    1,
    '2019-05-12',
    'Goods receipt completed at warehouse'
);
INSERT INTO procurement.goods_receipts(
    order_id, 
    full_receipt,
    receipt_date,
    note
)
VALUES(
    1,
    0,
    '2019-05-12',
    'Goods receipt has not completed at warehouse'
);

INSERT INTO procurement.invoice_receipts(
    order_id, 
    is_late,
    receipt_date,
    note
)
VALUES(
    1,
    0,
    '2019-05-13',
    'Invoice duly received'
);
INSERT INTO procurement.invoice_receipts(
    order_id, 
    is_late,
    receipt_date,
    note
)
VALUES(
    2,
    0,
    '2019-05-15',
    'Invoice duly received'
);
```

Fourth, query data from both tables:

```
SELECT * FROM procurement.goods_receipts;
SELECT * FROM procurement.invoice_receipts;
```

Here is the output:

![SQL Server Sequence - use a sequence for multiple tables](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Sequence-use-a-sequence-for-multiple-tables.png)

## Sequence vs. Identity columns [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#sequence-vs-identity-columns "Anchor for Sequence vs. Identity columns")

Sequences, different from the [identity columns](https://www.sqlservertutorial.net/sql-server-basics/sql-server-identity/), are not associated with a table. The relationship between the sequence and the table is controlled by applications. In addition, a sequence can be shared across multiple tables.

The following table illustrates the main differences between sequences and identity columns:

| **Property/Feature** | **Identity** | **Sequence Object** |
| Allow specifying minimum and/or maximum increment values | No | Yes |
| Allow resetting the increment value | No | Yes |
| Allow caching increment value generating | No | Yes |
| Allow specifying starting increment value | Yes | Yes |
| Allow specifying increment value | Yes | Yes |
| Allow using in multiple tables | No | Yes |

## When to use sequences [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#when-to-use-sequences "Anchor for When to use sequences")

You use a sequence object instead of an identity column in the following cases:

-   The application requires a number before inserting values into the table.

-   The application requires sharing a sequence of numbers across multiple tables or multiple columns within the same table.
-   The application requires to restart the number when a specified value is reached.

-   The application requires multiple numbers to be assigned at the same time. Note that you can call the stored procedure `sp_sequence_get_range` to retrieve several numbers in a sequence at once.
-   The application needs to change the specification of the sequence like maximum value.

## Getting sequences information [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/#getting-sequences-information "Anchor for Getting sequences information")

You use the view `sys.sequences` to get the detailed information of sequences.

```
SELECT 
    * 
FROM 
    sys.sequences;
```

In this tutorial, you have learned about the SQL Server sequences to generate a sequence of numbers by a specified specification.

Was this tutorial helpful?

---
Source: [An Essential Guide to SQL Server Sequence By Practical Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-sequence/)