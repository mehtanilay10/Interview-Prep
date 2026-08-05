# Mastering Common Table Expression or CTE in SQL Server

**Summary**: in this tutorial, you will learn about the common table expression or CTE in SQL Server by using the `WITH` clause.

## Introduction to CTE in SQL Server [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cte/#introduction-to-cte-in-sql-server "Anchor for Introduction to CTE in SQL Server")

CTE stands for common table expression. A CTE allows you to define a temporary named result set that available temporarily in the execution scope of a statement such as `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)`, `[INSERT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/)`, `[UPDATE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/)`, `[DELETE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-delete/)`, or `[MERGE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-merge/)`.

The following shows the common syntax of a CTE in SQL Server:

```
WITH expression_name[(column_name [,...])]
AS
    (CTE_definition)
SQL_statement;
```

In this syntax:

-   First, specify the expression name (`expression_name`) to which you can refer later in a query.

-   Next, specify a list of comma-separated columns after the expression\_name. The number of columns must be the same as the number of columns defined in the `CTE_definition`.
-   Then, use the AS keyword after the expression name or column list if the column list is specified.

-   After, define a `SELECT` statement whose result set populates the common table expression.
-   Finally, refer to the common table expression in a query (`SQL_statement`) such as `SELECT`, `INSERT`, `UPDATE`, `DELETE`, or `MERGE`.

We prefer to use common table expressions rather than to use subqueries because common table expressions are more readable. We also use CTE in the queries that contain [analytic functions](https://www.sqlservertutorial.net/sql-server-window-functions/) (or [window functions](https://www.sqlservertutorial.net/sql-server-window-functions/))

## SQL Server CTE examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cte/#sql-server-cte-examples "Anchor for SQL Server CTE examples")

Let’s take some examples of using common table expressions.

### A) Simple SQL Server CTE example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cte/#a-simple-sql-server-cte-example "Anchor for A) Simple SQL Server CTE example")

This query uses a CTE to return the sales amounts by sales staffs in 2018:

```
WITH cte_sales_amounts (staff, sales, year) AS (
    SELECT    
        first_name + ' ' + last_name, 
        SUM(quantity * list_price * (1 - discount)),
        YEAR(order_date)
    FROM    
        sales.orders o
    INNER JOIN sales.order_items i ON i.order_id = o.order_id
    INNER JOIN sales.staffs s ON s.staff_id = o.staff_id
    GROUP BY 
        first_name + ' ' + last_name,
        year(order_date)
)

SELECT
    staff, 
    sales
FROM 
    cte_sales_amounts
WHERE
    year = 2018;
```

The following picture shows the result set:

![SQL Server CTE example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CTE-example.png)

In this example:

-   First, we defined `cte_sales_amounts` as the name of the common table expression. the CTE returns a result that that consists of three columns `staff`, `year`, and `sales` derived from the definition query.

-   Second, we constructed a query that returns the total sales amount by sales staff and year by querying data from the `orders`, `order_items` and `staffs` tables.
-   Third, we referred to the CTE in the outer query and select only the rows whose year are 2018.

Noted that this example is solely for the demonstration purpose to help you gradually understand how common table expressions work. There is a more optimal way to achieve the result without using CTE.

### B) Using a common table expression to make report averages based on counts [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cte/#b-using-a-common-table-expression-to-make-report-averages-based-on-counts "Anchor for B) Using a common table expression to make report averages based on counts")

This example uses the CTE to return the average number of sales orders in 2018 for all sales staffs.

```
WITH cte_sales AS (
    SELECT 
        staff_id, 
        COUNT(*) order_count  
    FROM
        sales.orders
    WHERE 
        YEAR(order_date) = 2018
    GROUP BY
        staff_id

)
SELECT
    AVG(order_count) average_orders_by_staff
FROM 
    cte_sales;
```

Here is the output:

```
average_orders_by_staff
-----------------------
48

(1 row affected)
```

In this example:

First, we used `cte_sales` as the name of the common table expression. We skipped the column list of the CTE so it is derived from the CTE definition statement. In this example, it includes `staff_id` and `order_count` columns.

Second, we use the following query to define the result set that populates the common table expression `cte_sales`. The query returns the number of orders in 2018 by sales staff.

```
SELECT    
    staff_id, 
    COUNT(*) order_count
FROM    
    sales.orders
WHERE 
    YEAR(order_date) = 2018
GROUP BY 
    staff_id;
```

Third, we refer to the `cte_sales` in the outer statement and use the `[AVG()](https://www.sqlservertutorial.net/sql-server-aggregate-functions/sql-server-avg/)` function to get the average sales order by all staffs.

```
SELECT
    AVG(order_count) average_orders_by_staff
FROM 
    cte_sales;
```

### C) Using multiple SQL Server CTE in a single query example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cte/#c-using-multiple-sql-server-cte-in-a-single-query-example "Anchor for C) Using multiple SQL Server CTE in a single query example")

The following example uses two CTE `cte_category_counts` and `cte_category_sales` to return the number of the products and sales for each product category. The outer query [joins](https://www.sqlservertutorial.net/sql-server-basics/sql-server-joins/) two CTEs using the `category_id` column.

```
WITH cte_category_counts (
    category_id, 
    category_name, 
    product_count
)
AS (
    SELECT 
        c.category_id, 
        c.category_name, 
        COUNT(p.product_id)
    FROM 
        production.products p
        INNER JOIN production.categories c 
            ON c.category_id = p.category_id
    GROUP BY 
        c.category_id, 
        c.category_name
),
cte_category_sales(category_id, sales) AS (
    SELECT    
        p.category_id, 
        SUM(i.quantity * i.list_price * (1 - i.discount))
    FROM    
        sales.order_items i
        INNER JOIN production.products p 
            ON p.product_id = i.product_id
        INNER JOIN sales.orders o 
            ON o.order_id = i.order_id
    WHERE order_status = 4 -- completed
    GROUP BY 
        p.category_id
) 

SELECT 
    c.category_id, 
    c.category_name, 
    c.product_count, 
    s.sales
FROM
    cte_category_counts c
    INNER JOIN cte_category_sales s 
        ON s.category_id = c.category_id
ORDER BY 
    c.category_name;
```

Here is the result set:

![SQL Server CTE join two CTEs example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-CTE-join-two-CTEs-example.png)

In this tutorial, you have learned how to use common table expressions or CTE in SQL Server to construct complex queries in an easy-to-understand manner.

Was this tutorial helpful?

---
Source: [Mastering Common Table Expression or CTE in SQL Server](https://www.sqlservertutorial.net/sql-server-basics/sql-server-cte/)