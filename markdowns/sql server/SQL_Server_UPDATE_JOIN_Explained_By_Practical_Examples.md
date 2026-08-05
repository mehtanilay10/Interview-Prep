# SQL Server UPDATE JOIN Explained By Practical Examples

**Summary**: in this tutorial, you will learn how to use the SQL Server `UPDATE JOIN` statement to perform a cross-table update.

To query data from related tables, you often use the [join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-joins/) clauses, either [inner join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-inner-join/) or [left join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-left-join/). In SQL Server, you can use these join clauses in the `[UPDATE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/)` statement to perform a cross-table update.

The following illustrates the syntax of the `UPDATE JOIN` clause:

```
UPDATE 
    t1
SET 
    t1.c1 = t2.c2,
    t1.c2 = expression,
    ...   
FROM 
    t1
    [INNER | LEFT] JOIN t2 ON join_predicate
WHERE 
    where_predicate;
```

In this syntax:

-   First, specify the name of the table (t1) that you want to update in the `[UPDATE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/)` clause.

-   Next, specify the new value for each column of the updated table.
-   Then, again specify the table from which you want to update in the `FROM` clause.

-   After that, use either `[INNER JOIN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-inner-join/)` or `[LEFT JOIN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-left-join/)` to join to another table (t2) using a join predicate specified after the `ON` keyword.
-   Finally, add an optional `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause to specify rows to be updated.

## SQL Server UPDATE JOIN examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update-join/#sql-server-update-join-examples "Anchor for SQL Server <code>UPDATE JOIN</code> examples")

Let’s take a look at some examples of using the `UPDATE JOIN` statement.

### Setting up sample tables [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update-join/#setting-up-sample-tables "Anchor for Setting up sample tables")

First, [create a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `sales.targets` to store the sales targets:

```
DROP TABLE IF EXISTS sales.targets;

CREATE TABLE sales.targets
(
    target_id  INT	PRIMARY KEY, 
    percentage DECIMAL(4, 2) 
        NOT NULL DEFAULT 0
);

INSERT INTO 
    sales.targets(target_id, percentage)
VALUES
    (1,0.2),
    (2,0.3),
    (3,0.5),
    (4,0.6),
    (5,0.8);
```

If sales staffs achieved the target 1, they will get the ratio of 0.2 or 20% sales commission and so on.

Second, create another table named `sales.commissions` to store the sales commissions:

```
CREATE TABLE sales.commissions
(
    staff_id    INT PRIMARY KEY, 
    target_id   INT, 
    base_amount DECIMAL(10, 2) 
        NOT NULL DEFAULT 0, 
    commission  DECIMAL(10, 2) 
        NOT NULL DEFAULT 0, 
    FOREIGN KEY(target_id) 
        REFERENCES sales.targets(target_id), 
    FOREIGN KEY(staff_id) 
        REFERENCES sales.staffs(staff_id),
);

INSERT INTO 
    sales.commissions(staff_id, base_amount, target_id)
VALUES
    (1,100000,2),
    (2,120000,1),
    (3,80000,3),
    (4,900000,4),
    (5,950000,5);
```

The `sales.commissions` table stores sales staff identification, `target_id`, `base_amount`, and `commission`. This table links to the `sales.targets` table via the `target_id` column.

Our goal is to calculate the commissions of all sales staffs based on their sales targets.

### A) SQL Server UPDATE INNER JOIN example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update-join/#a-sql-server-update-inner-join-example "Anchor for A) SQL Server <code>UPDATE INNER JOIN</code> example")

The following statement uses the `UPDATE INNER JOIN` to calculate the sales commission for all sales staffs:

```
UPDATE
    sales.commissions
SET
    sales.commissions.commission = 
        c.base_amount * t.percentage
FROM 
    sales.commissions c
    INNER JOIN sales.targets t
        ON c.target_id = t.target_id;
```

Here is the output:

```
(5 rows affected)
```

If you query the `sales.commissions` table again, you will see that the values in the commission column are updated:

```
SELECT 
    *
FROM 
    sales.commissions;
```

![SQL Server UPDATE JOIN - INNER JOIN example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-UPDATE-JOIN-INNER-JOIN-example.png)

### B) SQL Server UPDATE LEFT JOIN example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update-join/#b-sql-server-update-left-join-example "Anchor for B) SQL Server <code>UPDATE LEFT JOIN</code> example")

Suppose we have two more new sales staffs that have just joined and they don’t have any target yet:

```
INSERT INTO 
    sales.commissions(staff_id, base_amount, target_id)
VALUES
    (6,100000,NULL),
    (7,120000,NULL);
```

We assume that the commission for the new sales staffs is 0.1 or 10%, we can update the commission of all sales staffs using the `UPDATE LEFT JOIN` as follows:

```
UPDATE 
    sales.commissions
SET  
    sales.commissions.commission = 
        c.base_amount  * COALESCE(t.percentage,0.1)
FROM  
    sales.commissions c
    LEFT JOIN sales.targets t 
        ON c.target_id = t.target_id;
```

In this example, we used `[COALESCE()](https://www.sqlservertutorial.net/sql-server-basics/sql-server-coalesce/)` to return 0.1 if the percentage is NULL.

Note that if you use the `UPDATE INNER JOIN` clause, just the five rows of the table whose targets are not NULL will be updated.

Let’s examine the data in the `sales.commissions` table:

```
SELECT 
  * 
FROM 
    sales.commissions;
```

The result set is as follows:

![SQL Server UPDATE JOIN - LEFT JOIN example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-UPDATE-JOIN-LEFT-JOIN-example.png)

In this tutorial, you have learned how to use the SQL Server `UPDATE JOIN` statement to perform a cross-table update.

Was this tutorial helpful?

---
Source: [SQL Server UPDATE JOIN Explained By Practical Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update-join/)