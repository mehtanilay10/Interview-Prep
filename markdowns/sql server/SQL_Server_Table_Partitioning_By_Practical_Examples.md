# SQL Server Table Partitioning By Practical Examples

**Summary**: in this tutorial, you’ll learn about SQL Server table partitioning and how to create partitioned tables.

## Introduction to the SQL Server Partitioning [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-table-partitioning/#introduction-to-the-sql-server-partitioning "Anchor for Introduction to the SQL Server Partitioning")

Table partitioning allows you to store the data of a table in multiple physical sections or partitions. Each partition has the same columns but different set of rows.

In practice, you use table partitioning for large tables. By doing this, you’ll get the following benefits:

-   [Back up](https://www.sqlservertutorial.net/sql-server-administration/sql-server-backup-types/) and maintain one or more partitions more quickly.

-   Transfer or access subsets of data faster and more efficiently while maintaining the integrity of the whole data collection.
-   May improve query performance.

## Creating a partitioned table [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-table-partitioning/#creating-a-partitioned-table "Anchor for Creating a partitioned table")

To create a partitioned table, you follow these steps:

-   Create file groups that hold the partitions of the table.

-   Create a partition function that maps the rows of the table into partitions based on the values of a specified column.
-   Create a partition scheme that maps the partition table to the new filegroups

-   Create the table based on the partition scheme.

We’ll use the `BikeStores` [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) for the demonstration. The following query returns the order amount by dates and products:

```
WITH order_data (order_date, product_name, amount)
AS (
SELECT
  order_date,
  product_name,
  SUM(i.quantity * i.list_price * (1 - discount))
FROM sales.orders o
INNER JOIN sales.order_items i
  ON i.order_id = o.order_id
INNER JOIN production.products p
  ON p.product_id = i.product_id
GROUP BY order_date,
         product_name
)

SELECT * FROM order_data;
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Table-Partitioning-order-data.png)

The following returns the summary of the orders:

```
WITH order_data (order_date, product_name, amount)
AS (SELECT
  order_date,
  product_name,
  SUM(i.quantity * i.list_price * (1 - discount))
FROM sales.orders o
INNER JOIN sales.order_items i
  ON i.order_id = o.order_id
INNER JOIN production.products p
  ON p.product_id = i.product_id
GROUP BY order_date,
         product_name)

SELECT
  YEAR(order_date) year,
  COUNT(*) row_count
FROM order_data
GROUP BY YEAR(order_date);
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Table-Partitioning-year-and-row-count.png)

We’ll create a partitioned table called `sales.order_reports` that stores the order data returned by the above query. The `sales.order_reports` table will have three partitions. And each partition will store rows whose order dates will be in 2016, 2017, and 2018.

### 1) Creating file groups [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-table-partitioning/#1-creating-file-groups "Anchor for 1) Creating file groups")

When creating a database, SQL Server creates at least two files: a data file and a log file:

-   The data file contains data and objects like tables, indexes, and views.

-   The log file contains the information for recovering the transactions in the database.

SQL Server allows you to store the data in multiple data files and uses the filegroup to group data files. By default, the data file belongs to the `PRIMARY` filegroup.

To add more filegroups to a database, you use the `ALTER DATABASE ... ADD FILEGROUP` statement.

First, add three filegroups to the `BikeStores` database:

```
ALTER DATABASE bikestores
ADD FILEGROUP orders_2016;

ALTER DATABASE bikestores
ADD FILEGROUP orders_2017;

ALTER DATABASE bikestores
ADD FILEGROUP orders_2018;
```

Second, verify the filegroups of the current database by using the following statement:

```
SELECT
  name
FROM sys.filegroups
WHERE type = 'FG';
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Table-Partitioning-Filegroups.png)

Third, assign physical files to the filegroups:

```
ALTER DATABASE bikestores    
ADD FILE     (
    NAME = orders_2016,
    FILENAME = 'D:\data\orders_2016.ndf',
        SIZE = 10 MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP orders_2016;

ALTER DATABASE bikestores    
ADD FILE     (
    NAME = orders_2017,
    FILENAME = 'D:\data\orders_2017.ndf',
        SIZE = 10 MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP orders_2017;

ALTER DATABASE bikestores    
ADD FILE     (
    NAME = orders_2018,
    FILENAME = 'D:\data\orders_2018.ndf',
        SIZE = 10 MB, 
        MAXSIZE = UNLIMITED, 
        FILEGROWTH = 1024 KB
    ) TO FILEGROUP orders_2018;
```

In this example, we assign three files located in the D:\\data to the filegroups.

Finally, verify the filegroup assignment using the following statement:

```
SELECT 
	name as filename,
	physical_name as file_path
FROM sys.database_files
where type_desc = 'ROWS';
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Table-Partitioning-path.png)

### 2) Create a partition function [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-table-partitioning/#2-create-a-partition-function "Anchor for 2) Create a partition function")

A partition function is a database object that maps the rows of a table to partitions based on the values of a specified column. That column is called a partitioning column.

A partition function takes values of the partitioning column and returns a partition value. Also, it defines the number of partitions and partition boundaries.

In our example, the partitions will be based on the values of the `order_date` column. And the partition function will create three partitions:

```
CREATE PARTITION FUNCTION order_by_year_function (date)
AS RANGE LEFT 
FOR VALUES ('2016-12-31', '2017-12-31','2018-12-31');
```

In this statement:

-   The `order_by_year_function` is the name of the partition function. It takes an argument whose data type is `DATE`.

-   The `AS RANGE LEFT FOR VALUES` specifies three boundaries in which the rows with the date before `2016-12-31` will belong to the partition 1, the rows with the date before `2017-12-31` and after `2016-12-31` will belong to the partition 2, the rows with the date between `2017-12-31` and `2018-12-31` will belong to the partition 3.

### 3) Creating a partition scheme [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-table-partitioning/#3-creating-a-partition-scheme "Anchor for 3) Creating a partition scheme")

A partition scheme is a database object that maps the partitions returned by a partition function to filegroups.

The following statement creates a partition scheme that maps the partitions returned by `order_by_year_function` to filegroups:

```
CREATE PARTITION SCHEME order_by_year_scheme
AS PARTITION order_by_year_function
TO ([orders_2016], [orders_2017], [orders_2018]);
```

### 4) Creating a partitioned table [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-table-partitioning/#4-creating-a-partitioned-table "Anchor for 4) Creating a partitioned table")

The following statement creates a partitioned table based on the `order_by_year_scheme` partition scheme:

```
CREATE TABLE sales.order_reports (
  order_date date,
  product_name varchar(255),
  amount decimal(10, 2) NOT NULL DEFAULT 0,
  PRIMARY KEY (order_date, product_name)
) 
ON order_by_year_scheme (order_date);
```

In this statement:

-   The `ON order_by_year_scheme (order_date)` clause specifies the partition scheme and partition column (`order_date`) for the table.

-   The partition column must be included in a [clustered index](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-clustered-indexes/) or you’ll get an error.

The following `[INSERT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/)` statement loads data into the `sales.order_reports` table:

```
INSERT INTO sales.order_reports (order_date, product_name, amount)
  SELECT
    order_date,
    product_name,
    SUM(i.quantity * i.list_price * (1 - discount))
  FROM sales.orders o
  INNER JOIN sales.order_items i
    ON i.order_id = o.order_id
  INNER JOIN production.products p
    ON p.product_id = i.product_id
  GROUP BY order_date,
           product_name;
```

To check the rows of each partition, you use the following query:

```
SELECT 
	p.partition_number AS partition_number,
	f.name AS file_group, 
	p.rows AS row_count
FROM sys.partitions p
JOIN sys.destination_data_spaces dds ON p.partition_number = dds.destination_id
JOIN sys.filegroups f ON dds.data_space_id = f.data_space_id
WHERE OBJECT_NAME(OBJECT_ID) = 'order_reports'
order by partition_number;
```

Output:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Table-Partitioning-Row-Count.png)

## Summary [#](https://www.sqlservertutorial.net/sql-server-administration/sql-server-table-partitioning/#summary "Anchor for Summary")

-   Use table partitioning to store data of a table in multiple physical sections or partitions.

Was this tutorial helpful?

---
Source: [SQL Server Table Partitioning By Practical Examples](https://www.sqlservertutorial.net/sql-server-administration/sql-server-table-partitioning/)