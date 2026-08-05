# The Ultimate Guide To SQL Server Subquery

**Summary**: in this tutorial, you will learn about the SQL Server subquery and how to use the subquery for querying data.

## Introduction to SQL Server subquery [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/#introduction-to-sql-server-subquery "Anchor for Introduction to SQL Server subquery")

A subquery is a query nested inside another statement such as `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)`, `[INSERT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/)`, `[UPDATE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/)`, or `[DELETE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-delete/)`.

Let’s see the following example.

Consider the `orders` and `customers` tables from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/).

![](https://www.sqlservertutorial.net/wp-content/uploads/orders-customers.png)

The following statement shows how to use a subquery in the `[WHERE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-where/)` clause of a `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)` statement to find the sales orders of the customers located in `New York`:

```
SELECT
    order_id,
    order_date,
    customer_id
FROM
    sales.orders
WHERE
    customer_id IN (
        SELECT
            customer_id
        FROM
            sales.customers
        WHERE
            city = 'New York'
    )
ORDER BY
    order_date DESC;
```

Here is the result:

![SQL Server Subquery example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Subquery-example.png)

In this example, the following statement is a subquery:

```
SELECT
    customer_id
FROM
    sales.customers
WHERE
    city = 'New York'
```

Note that you must always enclose the `SELECT` query of a subquery in parentheses `()`.

A subquery is also known as an inner query or inner select, while the statement containing the subquery is called an outer select or outer query:

![SQL Server Subquery](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Subquery.png)

SQL Server executes the whole query example above as follows:

First, it executes the subquery to get a list of customer identification numbers of the customers located in `New York`.

```
SELECT
    customer_id
FROM
    sales.customers
WHERE
    city = 'New York'
```

![SQL Server Subquery result](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Subquery-result.png)

Second, SQL Server substitutes customer identification numbers returned by the subquery in the `[IN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-in/)` operator and executes the outer query to get the final result set.

As you can see, by using the subquery, you can combine two steps. The subquery removes the need for selecting the customer identification numbers and plugging them into the outer query. Moreover, the query itself automatically adjusts whenever the customer data changes.

## Nesting subquery [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/#nesting-subquery "Anchor for Nesting subquery")

A subquery can be nested within another subquery. SQL Server supports up to 32 levels of nesting. Consider the following example:

```
SELECT
    product_name,
    list_price
FROM
    production.products
WHERE
    list_price > (
        SELECT
            AVG (list_price)
        FROM
            production.products
        WHERE
            brand_id IN (
                SELECT
                    brand_id
                FROM
                    production.brands
                WHERE
                    brand_name = 'Strider'
                OR brand_name = 'Trek'
            )
    )
ORDER BY
    list_price;
```

![SQL Server Subquery nesting subquery examples](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Subquery-nesting-subquery-examples.png)

First, SQL Server executes the following subquery to get a list of brand identification numbers of the `Strider` and `Trek` brands:

```
SELECT
    brand_id
FROM
    production.brands
WHERE
    brand_name = 'Strider'
OR brand_name = 'Trek';
```

![SQL Server Subquery brand id list](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Subquery-brand-id-list.png)

Second, SQL Server calculates the average price list of all products that belong to those brands.

```
SELECT
    AVG (list_price)
FROM
    production.products
WHERE
    brand_id IN (6,9)
```

Third, SQL Server finds the products whose list price is greater than the average list price of all products with the `Strider` or `Trek` brand.

You can use a subquery in many places:

-   In place of an expression

-   With `[IN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-in/)` or `[NOT IN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-in/)`
-   With `[ANY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-any/)` or `[ALL](https://www.sqlservertutorial.net/sql-server-basics/sql-server-all/)`

-   With `[EXISTS](https://www.sqlservertutorial.net/sql-server-basics/sql-server-exists/)` or `NOT EXISTS`
-   In `[UPDATE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/)`, `[DELETE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-delete/)`, or`[INSERT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/)` statement

-   In the `FROM` clause

### SQL Server subquery is used in place of an expression [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/#sql-server-subquery-is-used-in-place-of-an-expression "Anchor for SQL Server subquery is used in place of an expression")

If a subquery returns a single value, it can be used anywhere an expression is used.

In the following example, a subquery is used as a column expression named `max_list_price` in a `SELECT` statement.

```
SELECT
    order_id,
    order_date,
    (
        SELECT
            MAX (list_price)
        FROM
            sales.order_items i
        WHERE
            i.order_id = o.order_id
    ) AS max_list_price
FROM
    sales.orders o
order by order_date desc;
```

![SQL Server subquery is used in place of an expression](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-subquery-is-used-in-place-of-an-expression.png)

### SQL Server subquery is used with IN operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/#sql-server-subquery-is-used-with-in-operator "Anchor for SQL Server subquery is used with <code>IN</code> operator")

A subquery that is used with the `[IN](https://www.sqlservertutorial.net/sql-server-basics/sql-server-in/)` operator returns a set of zero or more values. After the subquery returns values, the outer query makes use of them.

The following query finds the names of all mountain bikes and road bikes products that the Bike Stores sell.

```
SELECT
    product_id,
    product_name
FROM
    production.products
WHERE
    category_id IN (
        SELECT
            category_id
        FROM
            production.categories
        WHERE
            category_name = 'Mountain Bikes'
        OR category_name = 'Road Bikes'
    );
```

![SQL Server subquery is used with IN operator](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-subquery-is-used-with-IN-operator.png)

This query is evaluated in two steps:

1.  First, the inner query returns a list of category identification numbers that match the names `Mountain Bikes` and `code` Road Bikes.
2.  Second, these values are substituted into the outer query that finds the product names which have the category identification number match with one of the values in the list.

### SQL Server subquery is used with ANY operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/#sql-server-subquery-is-used-with-any-operator "Anchor for SQL Server subquery is used with <code>ANY</code> operator")

The subquery is introduced with the `ANY` operator has the following syntax:

```
scalar_expression comparison_operator ANY (subquery)
```

Assuming that the subquery returns a list of value v1, v2, … vn. The `ANY` operator returns `TRUE` if one of a comparison pair (`scalar_expression`, vi) evaluates to `TRUE`; otherwise, it returns `FALSE`.

For example, the following query finds the products whose list prices are greater than or equal to the average list price of any product brand.

```
SELECT
    product_name,
    list_price
FROM
    production.products
WHERE
    list_price >= ANY (
        SELECT
            AVG (list_price)
        FROM
            production.products
        GROUP BY
            brand_id
    )
```

![SQL Server subquery is used with ANY operator](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-subquery-is-used-with-ANY-operator.png)

For each brand, the subquery finds the maximum list price. The outer query uses these max prices and determines which individual product’s list price is greater than or equal to any brand’s maximum list price.

### SQL Server subquery is used with ALL operator [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/#sql-server-subquery-is-used-with-all-operator "Anchor for SQL Server subquery is used with <code>ALL</code> operator")

The `[ALL](https://www.sqlservertutorial.net/sql-server-basics/sql-server-all/)` operator has the same syntax as the `[ANY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-any/)` operator:

```
scalar_expression comparison_operator ALL (subquery)
```

The `[ALL](https://www.sqlservertutorial.net/sql-server-basics/sql-server-all/)` operator returns `TRUE` if all comparison pairs (`scalar_expression`, vi) evaluate to `TRUE`; otherwise, it returns `FALSE`.

The following query finds the products whose list price is greater than or equal to the average list price returned by the subquery:

```
SELECT
    product_name,
    list_price
FROM
    production.products
WHERE
    list_price >= ALL (
        SELECT
            AVG (list_price)
        FROM
            production.products
        GROUP BY
            brand_id
    )
```

![SQL Server subquery is used with ALL operator](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-subquery-is-used-with-ALL-operator.png)

### SQL Server subquery is used with EXISTS or NOT EXISTS [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/#sql-server-subquery-is-used-with-exists-or-not-exists "Anchor for SQL Server subquery is used with <code>EXISTS</code> or <code>NOT EXISTS</code>")

The following illustrates the syntax of a subquery introduced with `[EXISTS](https://www.sqlservertutorial.net/sql-server-basics/sql-server-exists/)` operator:

```
WHERE [NOT] EXISTS (subquery)
```

The `EXISTS` operator returns `TRUE` if the subquery return results; otherwise, it returns `FALSE`.

The `NOT EXISTS` negates the `EXISTS` operator.

The following query finds the customers who bought products in 2017:

```
SELECT
    customer_id,
    first_name,
    last_name,
    city
FROM
    sales.customers c
WHERE
    EXISTS (
        SELECT
            customer_id
        FROM
            sales.orders o
        WHERE
            o.customer_id = c.customer_id
        AND YEAR (order_date) = 2017
    )
ORDER BY
    first_name,
    last_name;
```

![SQL Server subquery is used with EXISTS operator](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-subquery-is-used-with-EXISTS-operator.png)

If you use the `NOT EXISTS` instead of `EXISTS`, you can find the customers who did not buy any products in 2017.

```
SELECT
    customer_id,
    first_name,
    last_name,
    city
FROM
    sales.customers c
WHERE
    NOT EXISTS (
        SELECT
            customer_id
        FROM
            sales.orders o
        WHERE
            o.customer_id = c.customer_id
        AND YEAR (order_date) = 2017
    )
ORDER BY
    first_name,
    last_name;
```

![SQL Server subquery is used with NOT EXISTS operator](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-subquery-is-used-with-NOT-EXISTS-operator.png)

### SQL Server subquery in the FROM clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/#sql-server-subquery-in-the-from-clause "Anchor for SQL Server subquery in the <code>FROM</code> clause")

Suppose that you want to find the average of the sum of orders of all sales staff. To do this, you can first find the number of orders by staff:

```
SELECT 
   staff_id, 
   COUNT(order_id) order_count
FROM 
   sales.orders
GROUP BY 
   staff_id;
```

![SQL Server subquery in the FROM clause](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-subquery-in-the-FROM-clause.png)

Then, you can apply the `AVG()` function to this result set. Since a query returns a result set that looks like a virtual table, you can place the whole query in the `FROM` clause of another query like this:

```
SELECT 
   AVG(order_count) average_order_count_by_staff
FROM
(
    SELECT 
	staff_id, 
        COUNT(order_id) order_count
    FROM 
	sales.orders
    GROUP BY 
	staff_id
) t;
```

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-subquery-in-the-FROM-clause-example.png)

The query that you place in the `FROM` clause must have a table alias. In this example, we used the t as the table alias for the subquery.  To come up with the final result, SQL Server carries the following steps:

-   Execute the subquery in the `FROM` clause.

-   Use the result of the subquery and execute the outer query.

In this tutorial, you have learned about the SQL Server subquery concept and how to use various subquery types to query data.

Was this tutorial helpful?

---
Source: [The Ultimate Guide To SQL Server Subquery](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/)