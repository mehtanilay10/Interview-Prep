# SQL Server Deadlock

[Skip to content](https://www.sqlservertutorial.net/sql-server-administration/sql-server-deadlock/#primary)

**Summary**: in this tutorial, you’ll learn about the SQL Server deadlock and how to simulate a deadlock.

## Introduction to the SQL Server deadlock [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-deadlock/#introduction-to-the-sql-server-deadlock "Anchor for Introduction to  the SQL Server deadlock")

A deadlock is a concurrency problem in which two sessions [block](https://www.sqlservertutorial.net/sql-server-administration/sql-server-blocking/) the progress of each other. The first session has a lock on a resource that the other session wants to access, and vice versa.

The following picture illustrates a deadlock in SQL Server:

![SQL Server Deadlock](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Deadlock.png)

In this picture, the `invoices` and `invoice_items` are tables.

-   First, session one accesses the `invoices` table and locks it.

-   Second, session two locks the `invoice_items` table and locks it.
-   Third, session one wants to access the `invoice_items` table but needs to wait for session two complete. At the same time, session two wants to access the `invoices` table but needs to wait for session two to complete.

As the result, two sessions are waiting for each other until SQL Server proactively terminates one of them. The session that is terminated by SQL Server is called a **deadlock victim**.

## SQL Server deadlock example [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-deadlock/#sql-server-deadlock-example "Anchor for SQL Server deadlock example")

Let’s take a look at an example of creating a deadlock. In this example, we’ll first create the `invoices` and `invoice_items` tables:

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

INSERT INTO invoices (customer_id, total)
  VALUES (100, 0);

INSERT INTO invoice_items (id, invoice_id, item_name, amount, tax)
  VALUES (10, 1, 'Keyboard', 70, 0.08),
  (20, 1, 'Mouse', 50, 0.08);

UPDATE invoices
SET total = (SELECT
  SUM(amount * (1 + tax))
  FROM invoice_items
  WHERE invoice_id = 1
);
```

Then, we’ll create two sessions to connect to the database. Here’s the sequence of statements that you need to execute from each session.

| Session 1 | Session 2 |
| --- | --- |
| BEGIN TRAN; |  |
|  | BEGIN TRAN; |
| UPDATE invoices  
SET customer\_id = 100  
WHERE id = 1; |  |
|  | UPDATE invoice\_items  
SET amount = 100  
WHERE id = 10; |
| UPDATE invoice\_items  
SET item\_name = ‘Cool Keyboard’  
WHERE id = 10; |  |
| Blocked | UPDATE invoices  
SET total = (SELECT  
SUM(amount \* (1 + tax))  
FROM invoice\_items  
WHERE invoice\_id = 1)  
WHERE id = 1; |
|  | Blocked |

Once a deadlock occurs, SQL Server will kill a deadlock victim. In our case, the deadlock victim is the process ID 65.

```
Transaction (Process ID 65) was deadlocked on lock resources with another process and has been chosen as the deadlock victim. Rerun the transaction.
```

## Summary [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-deadlock/#summary "Anchor for Summary")

-   SQL Server deadlock is a problem in which two sessions lock on a resource that the other session wants to access and vice versa.

Was this tutorial helpful?

---
Source: [SQL Server Deadlock](https://www.sqlservertutorial.net/sql-server-administration/sql-server-deadlock/)