# An Essential Guide To SQL Server DATE Data Type

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-date/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `DATE` to store date data in a table.

## Introduction to SQL Server DATE [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-date/#introduction-to-sql-server-date "Anchor for Introduction to SQL Server DATE")

To store the date data in the database, you use the SQL Server `DATE` data type. The syntax of `DATE` is as follows:

```
DATE
```

Unlike the `[DATETIME2](https://www.sqlservertutorial.net/sql-server-basics/sql-server-datetime2/)` data type, the `DATE` data type has only the date component. The range of a `DATE` value is from `January 1, 1 CE (0001-01-01)` through `December 31, 9999 CE (9999-12-31)`.

It takes 3 bytes to store a `DATE` value. The default literal string format of a `DATE` value is as follows:

```
YYYY-MM-DD
```

In this format:

-   `YYYY` is four digits that represent a year, which ranges from 0001 to 9999.

-   `MM` is two digits that represent a month of a year, which ranges from 01 to 12.
-   `DD` is two digits that represent a day of the specified month, which ranges from 01 to 31, depending on the month.

## SQL Server DATE examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-date/#sql-server-date-examples "Anchor for SQL Server <code>DATE</code> examples")

### A) Query data from a table based on DATE values [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-date/#a-query-data-from-a-table-based-on-date-values "Anchor for A) Query data from a table based on <code>DATE</code> values")

Let’s see the `sales.orders` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/):

![](https://www.sqlservertutorial.net/wp-content/uploads/orders.png)

The following example returns all orders whose ordered date is earlier than January 05 2016:

```
SELECT    
	order_id, 
	customer_id, 
	order_status, 
	order_date
FROM    
	sales.orders
WHERE order_date < '2016-01-05'
ORDER BY 
	order_date DESC;
```

Here is the output:

![SQL Server Date Example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Date-Example.png)

### B) Using DATE to define the table columns example [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-date/#b-using-date-to-define-the-table-columns-example "Anchor for B) Using <code>DATE</code> to define the table columns example")

The following statement [creates a table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) named `sales.list_prices` that has two `DATE` columns:

```
CREATE TABLE sales.list_prices (
    product_id INT NOT NULL,
    valid_from DATE NOT NULL,
    valid_to DATE NOT NULL,
    amount DEC (10, 2) NOT NULL,
    PRIMARY KEY (
        product_id,
        valid_from,
        valid_to
    ),
    FOREIGN KEY (product_id) 
      REFERENCES production.products (product_id)
);
```

The following `[INSERT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/)` statement illustrates how to insert a row with literal date values into the table:

```
INSERT INTO sales.list_prices (
    product_id,
    valid_from,
    valid_to,
    amount
)
VALUES
    (
        1,
        '2019-01-01',
        '2019-12-31',
        400
    );
```

In this tutorial, you have learned how to use the SQL Server `DATE` data type to store date data in a table.

Was this tutorial helpful?

---
Source: [An Essential Guide To SQL Server DATE Data Type](https://www.sqlservertutorial.net/sql-server-basics/sql-server-date/)