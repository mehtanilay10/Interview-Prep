# SQL Server CREATE VIEW - Creating New Views in SQL Server

**Summary**: in this tutorial, you will learn how to use the SQL Server `CREATE VIEW` statement to create new views.

To create a new [view](https://www.sqlservertutorial.net/sql-server-views/) in SQL Server, you use the `CREATE VIEW` statement as shown below:

```
CREATE VIEW [OR ALTER] schema_name.view_name [(column_list)]
AS
    select_statement;
```

In this syntax:

-   First, specify the name of the view after the `CREATE VIEW` keywords. The `schema_name` is the name of the schema to which the view belongs.

-   Second, specify a `SELECT` statement (`select_statement`) that defines the view after the `AS` keyword. The `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement can refer to one or more tables.

If you don’t explicitly specify a list of columns for the view, SQL Server will use the column list derived from the `SELECT` statement.

In case you want to redefine the view e.g., adding more columns to it or removing some columns from it, you can use the `OR ALTER` keywords after the `CREATE VIEW` keywords.

## SQL Server CREATE VIEW examples [#](https://www.sqlservertutorial.net/sql-server-views/sql-server-create-view/#sql-server-create-view-examples "Anchor for SQL Server CREATE VIEW examples")

We will use the `orders`, `order_items`, and `products` tables from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) for the demonstration.

![SQL Server CREATE VIEW sample tables](https://www.sqlservertutorial.net/wp-content/uploads/orders-order_items-products.png)

### Creating a simple view example [#](https://www.sqlservertutorial.net/sql-server-views/sql-server-create-view/#creating-a-simple-view-example "Anchor for Creating a simple view example")

The following statement creates a view named `daily_sales` based on the `orders`, `order_items`, and `products` tables:

```
CREATE VIEW sales.daily_sales
AS
SELECT
    year(order_date) AS y,
    month(order_date) AS m,
    day(order_date) AS d,
    p.product_id,
    product_name,
    quantity * i.list_price AS sales
FROM
    sales.orders AS o
INNER JOIN sales.order_items AS i
    ON o.order_id = i.order_id
INNER JOIN production.products AS p
    ON p.product_id = i.product_id;
```

Once the `daily_sales` view is created, you can query data against the underlying tables using a simple `SELECT` statement:

```
SELECT 
    * 
FROM 
    sales.daily_sales
ORDER BY
    y, m, d, product_name;
```

The following shows the output:

![SQL Server Create View example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Create-View-example.png)

### Redefining the view example [#](https://www.sqlservertutorial.net/sql-server-views/sql-server-create-view/#redefining-the-view-example "Anchor for Redefining the view example")

To add the customer name column to the `sales.daily_sales` view, you use the `CREATE VIEW OR ALTER` as follows:

```
CREATE OR ALTER sales.daily_sales (
    year,
    month,
    day,
    customer_name,
    product_id,
    product_name
    sales
)
AS
SELECT
    year(order_date),
    month(order_date),
    day(order_date),
    concat(
        first_name,
        ' ',
        last_name
    ),
    p.product_id,
    product_name,
    quantity * i.list_price
FROM
    sales.orders AS o
    INNER JOIN
        sales.order_items AS i
    ON o.order_id = i.order_id
    INNER JOIN
        production.products AS p
    ON p.product_id = i.product_id
    INNER JOIN sales.customers AS c
    ON c.customer_id = o.customer_id;
```

In this example, we specified the column list for the view explicitly.

The following statement queries data against the `sales.daily_sales` view:

```
SELECT 
    * 
FROM 
    sales.daily_sales
ORDER BY 
    y, 
    m, 
    d, 
    customer_name;
```

Here is the output:

![SQL Server Create or Alter view example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Create-or-Alter-view-example.png)

### Creating a view using aggregate functions example [#](https://www.sqlservertutorial.net/sql-server-views/sql-server-create-view/#creating-a-view-using-aggregate-functions-example "Anchor for Creating a view using aggregate functions example")

The following statement creates a view named `staff_sales`those summaries the sales by staffs and years using the `SUM()` aggregate function:

```
CREATE VIEW sales.staff_sales (
        first_name, 
        last_name,
        year, 
        amount
)
AS 
    SELECT 
        first_name,
        last_name,
        YEAR(order_date),
        SUM(list_price * quantity) amount
    FROM
        sales.order_items i
    INNER JOIN sales.orders o
        ON i.order_id = o.order_id
    INNER JOIN sales.staffs s
        ON s.staff_id = o.staff_id
    GROUP BY 
        first_name, 
        last_name, 
        YEAR(order_date);
```

The following statement returns the contents of the view:

```
SELECT  
    * 
FROM 
    sales.staff_sales
ORDER BY 
	first_name,
	last_name,
	year;
```

The output is:

![SQL Server Create View with aggregate function](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Create-View-with-aggregate-function.png)

In this tutorial, you have learned how to create a new view by using the SQL Server `CREATE VIEW` statement.

Was this tutorial helpful?

---
Source: [SQL Server CREATE VIEW - Creating New Views in SQL Server](https://www.sqlservertutorial.net/sql-server-views/sql-server-create-view/)