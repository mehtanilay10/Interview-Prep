# SQL Server SELECT DISTINCT

**Summary**: in this tutorial, you will learn how to use the SQL Server `SELECT DISTINCT` clause to return distinct rows from a result set.

## Introduction to SQL Server SELECT DISTINCT clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-distinct/#introduction-to-sql-server-select-distinct-clause "Anchor for Introduction to SQL Server SELECT DISTINCT clause")

Sometimes, you may want to get only distinct values in a specified column of a table. To achieve this, you can use the `SELECT DISTINCT` clause.

Here’s how you can do it:

```
SELECT 
  DISTINCT column_name 
FROM 
  table_name;
```

The query will return unique values from the column `column_name`. In other words, it removes duplicate values from the `column_name` in the result set.

If you use the `DISTINCT` clause with multiple columns as follows:

```
SELECT DISTINCT
	column_name1,
	column_name2 ,
	...
FROM
	table_name;
```

The query will evaluate the uniqueness based on the combination of values in all the specified columns in the `SELECT` list. It will return only rows with unique combinations of the specified columns.

When you apply the `DISTINCT` clause to a column that contains NULLs, it will keep only one NULL and eliminate the others. In other words, the `DISTINCT` clause treats all NULLs as the same value.

We will use the `customers` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) for the demonstration:

![](https://www.sqlservertutorial.net/wp-content/uploads/customers.png)

### 1) Using the SELECT DISTINCT with one column [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-distinct/#1-using-the-select-distinct-with-one-column "Anchor for 1) Using the SELECT DISTINCT with one column")

The following statement uses the [SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/) statement to retrieve all cities of all customers from the `customers` tables:

```
SELECT 
  city 
FROM 
  sales.customers 
ORDER BY 
  city;
```

![SQL Server SELECT DISTINCT - duplicate cities](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-DISTINCT-duplicate-cities.png)

The output indicates that the cities are duplicates.

To retrieve only distinct cities, you can use the `SELECT DISTINCT` keyword as follows:

```
SELECT 
  DISTINCT city 
FROM 
  sales.customers 
ORDER BY 
  city;
```

![SQL Server SELECT DISTINCT - distinct cities](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-DISTINCT-distinct-cities.png)

The output shows that the `SELECT DISTINCT` returns only distinct cities without duplicates.

### 2) Using SELECT DISTINCT with multiple columns [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-distinct/#2-using-select-distinct-with-multiple-columns "Anchor for 2) Using SELECT DISTINCT with multiple columns")

The following example uses the [SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/) statement to retrieve the cities and states of all customers from the `customers` table:

```
SELECT 
  city, 
  state 
FROM 
  sales.customers 
ORDER BY 
  city, 
  state;
```

![SQL Server SELECT DISTINCT - multiple columns example before](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-DISTINCT-multiple-columns-example-before.png)

The output indicates that there are duplicate cities & states, for example, `Albany NY`, `Amarillo TX`, and so on.

To retrieve the distinct cities and states of customers, you can use the `SELECT DISTINCT` with the `city` and `state` columns:

```
SELECT 
  DISTINCT city, state 
FROM 
  sales.customers
```

![SQL Server SELECT DISTINCT - multiple columns example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-DISTINCT-multiple-columns-example.png)

In this example, the statement uses the combination of values in both `city` and `state` columns to evaluate the duplicate.

### 3) Using SELECT DISTINCT with NULL [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-distinct/#3-using-select-distinct-with-null "Anchor for 3) Using SELECT DISTINCT with NULL")

The following statement finds the distinct phone numbers of customers:

```
SELECT 
  DISTINCT phone 
FROM 
  sales.customers 
ORDER BY 
  phone;
```

![SQL Server SELECT DISTINCT - null example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-DISTINCT-null-example.png)

In this example, the `DISTINCT` clause keeps only one NULL in the `phone` column and removes other NULLs.

## DISTINCT vs. GROUP BY [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-distinct/#distinct-vs-group-by "Anchor for DISTINCT vs. GROUP BY")

The following statement uses the `GROUP BY` clause to return distinct cities together with state and zip code from the `sales.customers` table:

```
SELECT 
  city, 
  state, 
  zip_code 
FROM 
  sales.customers 
GROUP BY 
  city, 
  state, 
  zip_code 
ORDER BY 
  city, 
  state, 
  zip_code
```

The following picture shows the partial output:

![SQL Server SELECT DISTINCT vs GROUP BY](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-SELECT-DISTINCT-vs-GROUP-BY.png)

It is equivalent to the following query that uses the `DISTINCT` operator :

```
SELECT 
  DISTINCT city, state, zip_code 
FROM 
  sales.customers;
```

Both `DISTINCT` and `GROUP BY` clause reduces the number of returned rows in the result set by removing the duplicates.

However, you should use the `GROUP BY` clause when you want to apply an [aggregate function](https://www.sqlservertutorial.net/sql-server-aggregate-functions/) to one or more columns.

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-distinct/#summary "Anchor for Summary")

-   Use the SQL Server `SELECT DISTINCT` clause to retrieve the distinct values from one or more columns.

Was this tutorial helpful?

---
Source: [SQL Server SELECT DISTINCT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select-distinct/)