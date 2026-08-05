# SQL Server Self Join

**Summary**: in this tutorial, you will learn how to use the SQL Server self join to join a table to itself.

A self join allows you to join a table to itself. It helps query hierarchical data or compare rows within the same table.

A self join uses the [inner join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-inner-join/) or [left join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-left-join/) clause. Because the query that uses the self join references the same table, the [table alias](https://www.sqlservertutorial.net/sql-server-basics/sql-server-alias/) is used to assign different names to the same table within the query.

Note that referencing the same table more than once in a query without using table aliases will result in an error.

The following shows the syntax of joining the table `T` to itself:

```
SELECT
    select_list
FROM
    T t1
[INNER | LEFT]  JOIN T t2 ON
    join_predicate; 
```

The query references the table `T` twice. The table aliases `t1` and `t2` are used to assign the `T` table different names in the query.

## SQL Server self join examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-self-join/#sql-server-self-join-examples "Anchor for SQL Server self join examples")

Let’s take some examples to understand how the self join works.

### 1) Using self join to query hierarchical data [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-self-join/#1-using-self-join-to-query-hierarchical-data "Anchor for 1) Using self join to query hierarchical data")

Consider the following  `staffs` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/):

![](https://www.sqlservertutorial.net/wp-content/uploads/staffs.png)

![SQL Server Self Join - staffs table](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Self-Join-staffs-table.png)

The  `staffs` table stores the staff information such as id, first name, last name, and email. It also has a column named `manager_id` that specifies the direct manager. For example, `Mireya` reports to `Fabiola` because the value in the `manager_id` of  `Mireya` is `Fabiola`.

`Fabiola` has no manager, so the manager id column has a NULL.

To get who reports to whom, you use the self join as shown in the following query:

```
SELECT
    e.first_name + ' ' + e.last_name employee,
    m.first_name + ' ' + m.last_name manager
FROM
    sales.staffs e
INNER JOIN sales.staffs m ON m.staff_id = e.manager_id
ORDER BY
    manager;
```

![SQL Server Self Join with INNER JOIN](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Self-Join-with-INNER-JOIN.png)

In this example, we referenced to the  `staffs` table twice: one as `e` for the employees and the others as `m` for the managers. The join predicate matches the employee and manager relationship using the values in the `e.manager_id` and `m.staff_id` columns.

The employee column does not have `Fabiola Jackson` because of the `[INNER JOIN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-inner-join/)` effect. If you replace the `[INNER JOIN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-inner-join/)` clause by the `[LEFT JOIN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-left-join/)` clause as shown in the following query, you will get the result set that includes `Fabiola Jackson` in the employee column:

```
SELECT
    e.first_name + ' ' + e.last_name employee,
    m.first_name + ' ' + m.last_name manager
FROM
    sales.staffs e
LEFT JOIN sales.staffs m ON m.staff_id = e.manager_id
ORDER BY
    manager;
```

![SQL Server Self Join with LEFT JOIN clause](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Self-Join-with-LEFT-JOIN.png)

### 2) Using self join to compare rows within a table [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-self-join/#2-using-self-join-to-compare-rows-within-a-table "Anchor for 2) Using self join to compare rows within a table")

See the following `customers` table:

![customers table](https://www.sqlservertutorial.net/wp-content/uploads/customers.png)

The following statement uses the self join to find the customers located in the same city.

```
SELECT
    c1.city,
    c1.first_name + ' ' + c1.last_name customer_1,
    c2.first_name + ' ' + c2.last_name customer_2
FROM
    sales.customers c1
INNER JOIN sales.customers c2 ON c1.customer_id > c2.customer_id
AND c1.city = c2.city
ORDER BY
    city,
    customer_1,
    customer_2;
```

![SQL Server Self Join - compare rows in the same table](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Self-Join-compare-rows-in-the-same-table.png)

The following condition makes sure that the statement doesn’t compare the same customer:

```
c1.customer_id > c2.customer_id
```

The following condition matches the city of the two customers:

```
AND c1.city = c2.city
```

Note that if you change the greater than ( > ) operator by the not equal to (<>) operator, you will get more rows:

```
SELECT
    c1.city,
    c1.first_name + ' ' + c1.last_name customer_1,
    c2.first_name + ' ' + c2.last_name customer_2
FROM
    sales.customers c1
INNER JOIN sales.customers c2 ON c1.customer_id <> c2.customer_id
AND c1.city = c2.city
ORDER BY
    city,
    customer_1,
    customer_2;
```

![SQL Server Self Join - compare rows in the same table with not equal to operator](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Self-Join-compare-rows-in-the-same-table-with-not-equal-to-operator.png)

Let’s see the difference between > and <> in the `ON` clause by limiting to one city to make it easier for comparison.

The following query returns the customers located in Albany:

```
SELECT 
   customer_id, first_name + ' ' + last_name c, 
   city
FROM 
   sales.customers
WHERE
   city = 'Albany'
ORDER BY 
   c;
```

![SQL Server Self Join - customers in a city](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Self-Join-customers-in-a-city.png)

This query uses ( `>`) operator in the `ON` clause:

```
SELECT
    c1.city,
    c1.first_name + ' ' + c1.last_name customer_1,
    c2.first_name + ' ' + c2.last_name customer_2
FROM
    sales.customers c1
INNER JOIN sales.customers c2 ON c1.customer_id > c2.customer_id
AND c1.city = c2.city
WHERE c1.city = 'Albany'
ORDER BY
    c1.city,
    customer_1,
    customer_2;
```

The output is:

![SQL Server Self Join - compare rows in the same table with greater than operator](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Self-Join-compare-rows-in-the-same-table-with-greater-than-operator.png)

This query uses ( `<>`) operator in the `ON` clause:

```
SELECT
    c1.city,
	c1.first_name + ' ' + c1.last_name customer_1,
    c2.first_name + ' ' + c2.last_name customer_2
FROM
    sales.customers c1
INNER JOIN sales.customers c2 ON c1.customer_id <> c2.customer_id
AND c1.city = c2.city
WHERE c1.city = 'Albany'
ORDER BY
	c1.city,
    customer_1,
    customer_2;
```

Here is the output:

![SQL Server Self Join with not equal to operator](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Self-Join-with-not-equal-to-operator.png)

In this tutorial, you have learned how to use an SQL Server self join to query hierarchical data and compare rows in the same table.

Was this tutorial helpful?

---
Source: [SQL Server Self Join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-self-join/)