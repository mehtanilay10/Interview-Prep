# A Visualization Explanation Of Joins in SQL Server

**Summary**: in this tutorial, you will learn about various SQL Server joins that allow you to combine data from two tables.

In a relational database, data is distributed in multiple logical tables. To get a complete meaningful set of data, you need to query data from these tables using joins. SQL Server supports many kinds of joins, including [inner join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-inner-join/), [left join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-left-join/), [right join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-right-join/), [full outer join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-full-outer-join/), and [cross join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cross-join/). Each join type specifies how SQL Server uses data from one table to select rows in another table.

Let’s set up sample tables for demonstration.

## Setting up sample tables [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-joins/#setting-up-sample-tables "Anchor for Setting up sample tables")

First, create a new schema named `hr`:

```
CREATE SCHEMA hr;
GO
```

Second, [create two new tables](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `candidates` and `employees` in the `hr` schema:

```
CREATE TABLE hr.candidates(
    id INT PRIMARY KEY IDENTITY,
    fullname VARCHAR(100) NOT NULL
);

CREATE TABLE hr.employees(
    id INT PRIMARY KEY IDENTITY,
    fullname VARCHAR(100) NOT NULL
);
```

Third, [insert](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) some rows into the `candidates` and `employees` tables:

```
INSERT INTO 
    hr.candidates(fullname)
VALUES
    ('John Doe'),
    ('Lily Bush'),
    ('Peter Drucker'),
    ('Jane Doe');

INSERT INTO 
    hr.employees(fullname)
VALUES
    ('John Doe'),
    ('Jane Doe'),
    ('Michael Scott'),
    ('Jack Sparrow');
```

Let’s call the `candidates` table the left table and the `employees` table the right table.

## SQL Server Inner Join [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-joins/#sql-server-inner-join "Anchor for SQL Server Inner Join")

[Inner join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-inner-join/) produces a data set that includes rows from the left table, and matching rows from the right table.

The following example uses the inner join clause to get the rows from the `candidates` table that has the corresponding rows with the same values in the `fullname` column of the `employees` table:

```
SELECT  
    c.id candidate_id,
    c.fullname candidate_name,
    e.id employee_id,
    e.fullname employee_name
FROM 
    hr.candidates c
    INNER JOIN hr.employees e 
        ON e.fullname = c.fullname;
```

Here is the output:

![SQL Server Joins - Inner Join](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Joins-Inner-Join.png)

The following Venn diagram illustrates the result of the inner join of two result sets:

![SQL Server Joins - Inner Join](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Joins-Inner-Join-1.png)

## SQL Server Left Join [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-joins/#sql-server-left-join "Anchor for SQL Server Left Join")

[Left join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-left-join/) selects data starting from the left table and matching rows in the right table. The left join returns all rows from the left table and the matching rows from the right table. If a row in the left table does not have a matching row in the right table, the columns of the right table will have nulls.

The left join is also known as the left outer join. The outer keyword is optional.

The following statement joins the `candidates` table with the `employees` table using left join:

```
SELECT  
	c.id candidate_id,
	c.fullname candidate_name,
	e.id employee_id,
	e.fullname employee_name
FROM 
	hr.candidates c
	LEFT JOIN hr.employees e 
		ON e.fullname = c.fullname;
```

Here is the output:

![SQL Server Joins - left Join](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Joins-left-Join.png)

The following Venn diagram illustrates the result of the left join of two result sets:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Joins-Left-Join-diagram.png)

To get the rows that are available only in the left table but not in the right table, you add a `WHERE` clause to the above query:

```
SELECT  
    c.id candidate_id,
    c.fullname candidate_name,
    e.id employee_id,
    e.fullname employee_name
FROM 
    hr.candidates c
    LEFT JOIN hr.employees e 
        ON e.fullname = c.fullname
WHERE 
    e.id IS NULL;
```

The following picture shows the output:

![SQL Server Joins - left Join with a where clause](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Joins-left-Join-with-a-where-clause.png)

The following Venn diagram illustrates the result of the left join that selects rows available only in the left table:

![SQL Server Joins - Left Join with only rows in the left table](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Joins-Left-Join-with-only-rows-in-the-left-table.png)

## SQL Server Right Join [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-joins/#sql-server-right-join "Anchor for SQL Server Right Join")

The [right join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-right-join/) or [right outer join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-right-join/) selects data starting from the right table. It is a reversed version of the [left join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-left-join/).

The right join returns a result set that contains all rows from the right table and the matching rows in the left table. If a row in the right table does not have a matching row in the left table, all columns in the left table will contain nulls.

The following example uses the right join to query rows from `candidates` and `employees` tables:

```
SELECT  
    c.id candidate_id,
    c.fullname candidate_name,
    e.id employee_id,
    e.fullname employee_name
FROM 
    hr.candidates c
    RIGHT JOIN hr.employees e 
        ON e.fullname = c.fullname;
```

Here is the output:

![SQL Server Joins - right Join](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Joins-right-Join.png)

Notice that all rows from the right table (`employees`) are included in the result set.

The Venn diagram illustrates the right join of two result sets:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Joins-Right-Join-Diagram.png)

Similarly, you can get rows that are available only in the right table by adding a `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause to the above query as follows:

```
SELECT  
    c.id candidate_id,
    c.fullname candidate_name,
    e.id employee_id,
    e.fullname employee_name
FROM 
    hr.candidates c
    RIGHT JOIN hr.employees e 
        ON e.fullname = c.fullname
WHERE
    c.id IS NULL;
```

Here is the output:

![SQL Server Joins - right Join with a where clause](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Joins-right-Join-with-a-where-clause.png)

And the Venn diagram that illustrates the operation:

![SQL Server Joins - Right Join with only rows in the right table](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Joins-RightJoin-with-only-rows-in-the-right-table.png)

## SQL Server full join [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-joins/#sql-server-full-join "Anchor for SQL Server full join")

The [full outer join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-full-outer-join/) or [full join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-full-outer-join/) returns a result set that contains all rows from both left and right tables, with the matching rows from both sides where available. In case there is no match, the missing side will have [NULL](https://www.sqlservertutorial.net/sql-server-basics/sql-server-null/) values.

The following example shows how to perform a full join between the `candidates` and `employees` tables:

```
SELECT  
    c.id candidate_id,
    c.fullname candidate_name,
    e.id employee_id,
    e.fullname employee_name
FROM 
    hr.candidates c
    FULL JOIN hr.employees e 
        ON e.fullname = c.fullname;
```

Here is the output:

![SQL Server Joins - full Join](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Joins-full-Join.png)

The Venn diagram that illustrates the full outer join:

![SQL Server Joins - full outer Join](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Joins-full-outer-Join.png)

To select rows that exist in either the left or right table, you exclude rows that are common to both tables by adding a [`WHERE`](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/) clause as shown in the following query:

```
SELECT  
    c.id candidate_id,
    c.fullname candidate_name,
    e.id employee_id,
    e.fullname employee_name
FROM 
    hr.candidates c
    FULL JOIN hr.employees e 
        ON e.fullname = c.fullname
WHERE
    c.id IS NULL OR
    e.id IS NULL;
```

Here is the output:

![SQL Server Joins - full Join with a where clause](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Joins-full-Join-with-a-where-clause.png)

The Venn diagram illustrates the above operation:

![SQL Server Joins - full outer Join with rows unique to both tables](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Joins-full-outer-Join-with-rows-unique-to-both-tables.png)

In this tutorial, you have learned various SQL Server joins that combine data from two tables.

Was this tutorial helpful?

---
Source: [A Visualization Explanation Of Joins in SQL Server](https://www.sqlservertutorial.net/sql-server-basics/sql-server-joins/)