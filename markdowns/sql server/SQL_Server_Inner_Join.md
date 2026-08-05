# SQL Server Inner Join

**Summary**: in this tutorial, you will learn how to use the SQL Server `INNER JOIN` clause to query data from multiple tables.

## Introduction to SQL Server INNER JOIN clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-inner-join/#introduction-to-sql-server-inner-join-clause "Anchor for Introduction to SQL Server INNER JOIN clause")

The inner join is one of the most commonly used [joins](https://www.sqlservertutorial.net/sql-server-basics/sql-server-joins/) in SQL Server. The inner join clause allows you to query data from two or more related tables.

See the following `products` and `categories` tables:

![Products & Categories Tables](https://www.sqlservertutorial.net/wp-content/uploads/products-categories.png)

The following statement retrieves the product information from the `production.products` table:

```
SELECT
    product_name,
    list_price,
    category_id
FROM
    production.products
ORDER BY
    product_name DESC;
```

![SQL Server Inner Join Sample Table](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Inner-Join-clause-sample-table.png)

The query returned only a list of category identification numbers, not the category names. To include the category names in the result set, you use the `INNER JOIN` clause as follows:

```
SELECT
    product_name,
    category_name,
    list_price
FROM
    production.products p
INNER JOIN production.categories c 
    ON c.category_id = p.category_id
ORDER BY
    product_name DESC;
```

![SQL Server Inner Join example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Inner-Join-example.png)

In this query:

The `c` and `p` are the [table aliases](https://www.sqlservertutorial.net/sql-server-basics/sql-server-alias/) of the `production.categories`  and  `production.products` tables.

By doing this, when you reference a column in these tables, you can use the `alias.column_name` instead of using the `table_name.column_name`.

For example, the query uses `c.category_id` instead of `production.categories.category_id`. Hence, it saves you some typing.

For each row in the `production.products` table, the inner join clause matches it with every row in the `product.categories` table based on the values of the `category_id` column:

-   If both rows have the same value in the `category_id` column, the inner join forms a new row whose columns are from the rows of the `production.categories` and `production.products` tables according to the columns in the select list and includes this new row in the result set.

-   If the row in the `production.products` table doesn’t match the row from the `production.categories` table, the inner join clause just ignores these rows and does not include them in the result set.

The following shows the syntax of the SQL Server `INNER JOIN` clause:

```
SELECT
    select_list
FROM
    T1
INNER JOIN T2 ON join_predicate;
```

In this syntax, the query retrieved data from both T1 and T2 tables:

-   First, specify the main table (T1) in the `FROM` clause

-   Second, specify the second table in the `INNER JOIN` clause (T2) and a join predicate. Only rows that cause the join predicate to evaluate to `TRUE` are included in the result set.

The `INNER JOIN` clause compares each row of table T1 with rows of table T2 to find all pairs of rows that satisfy the join predicate. If the join predicate evaluates to `TRUE`, the column values of the matching rows of T1 and T2 are combined into a new row and included in the result set.

The following table illustrates the inner join of two tables T1 (1,2,3) and T2 (A, B, C). The result includes rows: (2, A) and (3, B) as they have the same patterns.

![SQL Server INNER JOIN](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-INNER-JOIN.png)

Note that the `INNER` keyword is optional, you can skip it as shown in the following query:

```
SELECT
    select_list
FROM
    T1
JOIN T2 ON join_predicate;
```

## More SQL Server inner join examples [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-inner-join/#more-sql-server-inner-join-examples "Anchor for More SQL Server inner join examples")

See the following `products`, `categories`, and `brands` tables:

![Categories, products & brands tables](https://www.sqlservertutorial.net/wp-content/uploads/products-categories-brands.png)

The following statement uses two `INNER JOIN` clauses to query data from the three tables:

```
SELECT
    product_name,
    category_name,
    brand_name,
    list_price
FROM
    production.products p
INNER JOIN production.categories c ON c.category_id = p.category_id
INNER JOIN production.brands b ON b.brand_id = p.brand_id
ORDER BY
    product_name DESC;
```

![SQL Server Inner Join clause - select from three tables example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Inner-Join-clause-select-from-three-tables-example.png)

In this tutorial, you have learned how to use the SQL Server `INNER JOIN` clause to query data from multiple tables.

Was this tutorial helpful?

---
Source: [SQL Server Inner Join](https://www.sqlservertutorial.net/sql-server-basics/sql-server-inner-join/)