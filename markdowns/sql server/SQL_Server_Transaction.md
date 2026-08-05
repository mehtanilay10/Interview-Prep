# SQL Server Transaction

**Summary**: in this tutorial, you’ll learn about SQL Server transactions and how to use T-SQL to execute transactions.

## Introduction to the SQL Server Transaction [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-transaction/#introduction-to-the-sql-server-transaction "Anchor for Introduction to the SQL Server Transaction")

A transaction is a single unit of work that typically contains multiple T-SQL statements.

If a transaction is successful, the changes are committed to the database. However, if a transaction has an error, the changes have to be rolled back.

When executing a single statement such as `[INSERT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/)`, `[UPDATE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/)`, and `[DELETE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-delete/)`, SQL Server uses the autocommit transaction. In this case, each statement is a transaction.

To start a transaction explicitly, you use the `BEGIN TRANSACTION` or `BEGIN TRAN` statement first:

```
BEGIN TRANSACTION;
```

Then, execute one or more statements including `INSERT`, `UPDATE`, and `DELETE`.

Finally, commit the transaction using the `COMMIT` statement:

```
COMMIT;
```

Or roll back the transaction using the `ROLLBACK` statement:

```
ROLLBACK;
```

Here’s the sequence of statements for starting a transaction explicitly and committing it:

```
-- start a transaction
BEGIN TRANSACTION;

-- other statements

-- commit the transaction
COMMIT;
```

We’ll create two tables: `invoices` and `invoice_items` for the demonstration:

```
CREATE TABLE invoices (
  id int IDENTITY PRIMARY KEY,
  customer_id int NOT NULL,
  total decimal(10, 2) NOT NULL DEFAULT 0 CHECK (total >= 0)
);

CREATE TABLE invoice_items (
  id int,
  invoice_id int NOT NULL,
  item_name varchar(100) NOT NULL,
  amount decimal(10, 2) NOT NULL CHECK (amount >= 0),
  tax decimal(4, 2) NOT NULL CHECK (tax >= 0),
  PRIMARY KEY (id, invoice_id),
  FOREIGN KEY (invoice_id) REFERENCES invoices (id)
	ON UPDATE CASCADE
	ON DELETE CASCADE
);
```

The `invoices` table stores the header of the invoice while the `invoice_items` table stores the line items. The total field in the `invoices` table is calculated from the line items.

The following example uses the `BEGIN TRANSACTION` and `COMMIT` statements to create a transaction:

```
BEGIN TRANSACTION;

INSERT INTO invoices (customer_id, total)
VALUES (100, 0);

INSERT INTO invoice_items (id, invoice_id, item_name, amount, tax)
VALUES (10, 1, 'Keyboard', 70, 0.08),
       (20, 1, 'Mouse', 50, 0.08);

UPDATE invoices
SET total = (SELECT
  SUM(amount * (1 + tax))
FROM invoice_items
WHERE invoice_id = 1);

COMMIT;
```

In this example:

First, start a transaction explicitly using the `BEGIN TRANSACTION` statement:

```
BEGIN TRANSACTION;
```

Next, insert a row into the `invoices` table and return the invoice id:

```
DECLARE @invoice TABLE (
  id int
);

DECLARE @invoice_id int;

INSERT INTO invoices (customer_id, total)
OUTPUT INSERTED.id INTO @invoice
VALUES (100, 0);

SELECT
  @invoice_id = id
FROM @invoice;
```

Then, insert two rows into the `invoice_items` table:

```
INSERT INTO invoice_items (id, invoice_id, item_name, amount, tax)
VALUES (10, @invoice_id, 'Keyboard', 70, 0.08),
       (20, @invoice_id, 'Mouse', 50, 0.08);
```

After that, calculate the total using the `invoice_items` table and update it to the `invoices` table:

```
UPDATE invoices
SET total = (
    SELECT SUM(amount * (1 + tax))
    FROM invoice_items
    WHERE invoice_id = @invoice_id
);
```

Finally, commit the transaction using the `COMMIT` statement:

```
COMMIT;
```

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-transaction/#summary "Anchor for Summary")

-   Use the `BEGIN TRANSACTION` statement to start a transaction explicitly.

-   Use the `COMMIT` statement to commit the transaction and `ROLLBACK` statement to roll back the transaction.

Was this tutorial helpful?

---
Source: [SQL Server Transaction](https://www.sqlservertutorial.net/sql-server-basics/sql-server-transaction/)