# SQL Server Correlated Subquery By Practical Examples

[Skip to content](https://www.sqlservertutorial.net/sql-server-basics/sql-server-correlated-subquery/#primary)

**Summary**: in this tutorial, you will learn about the SQL Server correlated subquery which is a subquery that depends on the outer query for its values.

A correlated subquery is a [subquery](https://www.sqlservertutorial.net/sql-server-basics/sql-server-subquery/) that uses the values of the outer query. In other words, the correlated subquery depends on the outer query for its values.

Because of this dependency, a correlated subquery cannot be executed independently as a simple subquery.

Moreover, a correlated subquery is executed repeatedly, once for each row evaluated by the outer query. The correlated subquery is also known as a repeating subquery.

Consider the following `products` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/):

![products](https://www.sqlservertutorial.net/wp-content/uploads/products.png)

The following example finds the products whose list price is equal to the highest list price of the products within the same category:

```
SELECT
    product_name,
    list_price,
    category_id
FROM
    production.products p1
WHERE
    list_price IN (
        SELECT
            MAX (p2.list_price)
        FROM
            production.products p2
        WHERE
            p2.category_id = p1.category_id
        GROUP BY
            p2.category_id
    )
ORDER BY
    category_id,
    product_name;
```

Here is the result:

![SQL Server Correlated Subquery](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Correlated-Subquery.png)

In this example, for each product evaluated by the outer query, the subquery finds the highest price of all products in its category.

If the price of the current product is equal to the highest price of all products in its category, the product is included in the result set. This process continues for the next product and so on.

As you can see, the correlated subquery is executed once for each product evaluated by the outer query.

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-correlated-subquery/#summary "Anchor for Summary")

-   A correlated subquery is a subquery that uses the values of the outer query

Was this tutorial helpful?

---
Source: [SQL Server Correlated Subquery By Practical Examples](https://www.sqlservertutorial.net/sql-server-basics/sql-server-correlated-subquery/)