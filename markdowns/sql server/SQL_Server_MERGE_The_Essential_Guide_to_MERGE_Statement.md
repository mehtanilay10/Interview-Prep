# SQL Server MERGE: The Essential Guide to MERGE Statement

**Summary**: in this tutorial, you will learn how to use the SQL Server `MERGE` statement to update data in a table based on values matched from another table.

## Introduction SQL Server MERGE Statement [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-merge/#introduction-sql-server-merge-statement "Anchor for Introduction SQL Server <code>MERGE</code> Statement")

Suppose, you have two table called source and target tables, and you need to update the target table based on the values matched from the source table. There are three cases:

1.  The source table has some rows that do not exist in the target table. In this case, you need to [insert](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) rows that are in the source table into the target table.
2.  The target table has some rows that do not exist in the source table. In this case, you need to [delete](https://www.sqlservertutorial.net/sql-server-basics/sql-server-delete/) rows from the target table.
3.  The source table has some rows with the same keys as the rows in the target table. However, these rows have different values in the non-key columns. In this case, you need to [update](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/) the rows in the target table with the values coming from the source table.

The following picture illustrates the source and target tables with the corresponding actions: insert, update, and delete:

![SQL Server MERGE](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-MERGE.png)

If you use the `[INSERT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/)`, `[UPDATE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/)`, and `[DELETE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-delete/)` statement individually, you have to construct three separate statements to update the data to the target table with the matching rows from the source table.

However, SQL Server provides the `MERGE` statement that allows you to perform three actions at the same time. The following shows the syntax of the `MERGE` statement:

```
MERGE target_table USING source_table
ON merge_condition
WHEN MATCHED
    THEN update_statement
WHEN NOT MATCHED
    THEN insert_statement
WHEN NOT MATCHED BY SOURCE
    THEN DELETE;
```

First, you specify the target table and the source table in the `MERGE` clause.

Second, the `merge_condition` determines how the rows from the source table are matched to the rows from the target table. It is similar to the join condition in the [join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-joins/) clause. Typically, you use the key columns either [primary key](https://www.sqlservertutorial.net/sql-server-basics/sql-server-primary-key/) or [unique key](https://www.sqlservertutorial.net/sql-server-basics/sql-server-unique-constraint/) for matching.

Third, the `merge_condition` results in three states: `MATCHED`, `NOT MATCHED`, and `NOT MATCHED BY SOURCE`.

-   `MATCHED`: these are the rows that match the merge condition. In the diagram, they are shown as blue. For the matching rows, you need to update the rows columns in the target table with values from the source table.

-   `NOT MATCHED`: these are the rows from the source table that does not have any matching rows in the target table. In the diagram, they are shown as orange. In this case, you need to add the rows from the source table to the target table. Note that `NOT MATCHED` is also known as `NOT MATCHED BY TARGET`.
-   `NOT MATCHED BY SOURCE`: these are the rows in the target table that does not match any rows in the source table. They are shown as green in the diagram. If you want to synchronize the target table with the data from the source table, then you will need to use this match condition to delete rows from the target table.

Suppose we have two table `sales.category` and `sales.category_staging` that store the sales by product category.

```
CREATE TABLE sales.category (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL,
    amount DECIMAL(10 , 2 )
);

INSERT INTO sales.category(category_id, category_name, amount)
VALUES(1,'Children Bicycles',15000),
    (2,'Comfort Bicycles',25000),
    (3,'Cruisers Bicycles',13000),
    (4,'Cyclocross Bicycles',10000);

CREATE TABLE sales.category_staging (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL,
    amount DECIMAL(10 , 2 )
);

INSERT INTO sales.category_staging(category_id, category_name, amount)
VALUES(1,'Children Bicycles',15000),
    (3,'Cruisers Bicycles',13000),
    (4,'Cyclocross Bicycles',20000),
    (5,'Electric Bikes',10000),
    (6,'Mountain Bikes',10000);
```

To update data to the `sales.category` (target table) with the values from the `sales.category_staging` (source table), you use the following `MERGE` statement:

```
MERGE sales.category t 
    USING sales.category_staging s
ON (s.category_id = t.category_id)
WHEN MATCHED
    THEN UPDATE SET 
        t.category_name = s.category_name,
        t.amount = s.amount
WHEN NOT MATCHED BY TARGET 
    THEN INSERT (category_id, category_name, amount)
         VALUES (s.category_id, s.category_name, s.amount)
WHEN NOT MATCHED BY SOURCE 
    THEN DELETE;
```

![SQL Server MERGE Example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-MERGE-Example.png)

In this example, we used the values in the `category_id` columns in both tables as the merge condition.

-   First, the rows with id 1, 3, 4 from the `sales.category_staging` table matches with the rows from the target table, therefore, the `MERGE` statement updates the values in category name and amount columns in the `sales.category` table.

-   Second, the rows with id 5 and 6 from the `sales.category_staging` table do not exist in the `sales.category` table, so the `MERGE` statement inserts these rows into the target table.
-   Third, the row with id 2 from the `sales.category` table does not exist in the `sales.sales_staging` table, therefore, the `MERGE` statement deletes this row.

As a result of the merger, the data in the `sales.category` table is fully synchronized with the data in the `sales.category_staging` table.

In this tutorial, you have learned how to use the SQL Server `MERGE` statement to make changes in a table based on matching values from another table.

Was this tutorial helpful?

---
Source: [SQL Server MERGE: The Essential Guide to MERGE Statement](https://www.sqlservertutorial.net/sql-server-basics/sql-server-merge/)