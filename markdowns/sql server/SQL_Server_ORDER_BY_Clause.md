# SQL Server ORDER BY Clause

**Summary**: in this tutorial, you will learn how to use the SQL Server `ORDER BY` clause to sort the result set of a query by one or more columns.

## Introduction to the SQL Server ORDER BY clause [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/#introduction-to-the-sql-server-order-by-clause "Anchor for Introduction to the SQL Server ORDER BY clause")

The `ORDER BY` clause is an option clause of the [SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/) statement. The `ORDER BY` clause allows you to sort the result set of a query by one or more columns.

Here’s the syntax of the `ORDER BY` clause:

```
SELECT
    select_list
FROM
    table_name
ORDER BY 
    column_name | expression [ASC | DESC ];
```

In this syntax:

First, specify a column name or an expression you want to sort in the `ORDER BY` clause.

If you use multiple columns, the `ORDER BY` clause will sort rows by the first column first, then sort the sorted rows by the second column, and so on.

The columns in the `ORDER BY` clause must match either column in the select list or columns defined in the table specified in the `FROM` clause.

Second, specify the sort order by using either the `ASC` or `DESC` keyword.

The `ASC` keyword sorts rows from low to high, while the `DESC` keyword sorts the rows from high to low.

Both `ASC` and `DESC` are optional. If you don’t explicitly specify either `ASC` or `DESC`, the `ORDER BY` clause defaults to `ASC`.

Additionally, SQL Server treats [NULL](https://www.sqlservertutorial.net/sql-server-basics/sql-server-null/) as the lowest value. This means that it will place `NULL` before other values after sorting.

When processing the `SELECT` statement that has an `ORDER BY` clause, SQL Server processes the `ORDER BY` clause last.

We will use the `customers` table in the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) from the demonstration.

![SQL Server Order By - customers table](https://www.sqlservertutorial.net/wp-content/uploads/customers.png)

### 1) Sort a result set by one column in ascending order [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/#1-sort-a-result-set-by-one-column-in-ascending-order "Anchor for 1) Sort a result set by one column in ascending order")

The following statement uses the `ORDER BY` clause to sort customers by their first names in ascending order:

```
SELECT
    first_name,
    last_name
FROM
    sales.customers
ORDER BY
    first_name;
```

Output:

![SQL Server ORDER BY - sort by one column](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-ORDER-BY-sort-by-one-column.png)

In this example, we don’t specify `ASC` or `DESC`, the `ORDER BY` clause defaults to `ASC`. Therefore, the above query is equivalent to the following query:

```
SELECT
    first_name,
    last_name
FROM
    sales.customers
ORDER BY
    first_name ASC;
```

### 2) Sort a result set by one column in descending order [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/#2-sort-a-result-set-by-one-column-in-descending-order "Anchor for 2) Sort a result set by one column in descending order")

The following statement uses the `ORDER BY` clause to sort customers by their first names in descending order:

```
SELECT
    firstname,
    lastname
FROM
    sales.customers
ORDER BY
    first_name DESC;
```

Output:

![SQL Server ORDER BY - sort by one column in descending order](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-ORDER-BY-sort-by-one-column-in-descending-order.png)

In this example, we explicitly use the `DESC` option, so the `ORDER BY` clause sorts the rows by values in the `first_name` column in descending order.

### 3) Sort a result set by multiple columns [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/#3-sort-a-result-set-by-multiple-columns "Anchor for 3) Sort a result set by multiple columns")

The following statement uses the `ORDER BY` clause to sort customers by cities first and then by first names:

```
SELECT
    city,
    first_name,
    last_name
FROM
    sales.customers
ORDER BY
    city,
    first_name;
```

Output:

![SQL Server ORDER BY - sort by two columns](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-ORDER-BY-sort-by-two-columns.png)

### 4) Sort a result set by multiple columns in different orders [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/#4-sort-a-result-set-by-multiple-columns-in-different-orders "Anchor for 4) Sort a result set by multiple columns in different orders")

The following statement uses the `ORDER BY` clause to sort customers by cities in descending order and then sort the customers by their first names in alphabetical order:

```
SELECT
    city,
    first_name,
    last_name
FROM
    sales.customers
ORDER BY
    city DESC,
    first_name ASC;
```

Output:

![SQL Server ORDER BY - sort by two columns in differnt orders](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-ORDER-BY-sort-by-two-columns-in-differnt-orders.png)

### 5) Sort a result set by a column that is not in the select list [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/#5-sort-a-result-set-by-a-column-that-is-not-in-the-select-list "Anchor for 5) Sort a result set by a column that is not in the select list")

SQL Server allows you to sort a result set by columns specified in a table, even if those columns do not appear in the select list.

For example, the following statement uses the `ORDER BY` clause to sort customers by states, even though the `state` column does not appear on the select list:

```
SELECT
    city,
    first_name,
    last_name
FROM
    sales.customers
ORDER BY
    state;
```

Output:

![SQL Server ORDER BY - sort by hidden column](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-ORDER-BY-sort-by-hidden-column.png)

Note that the `state` column is defined in the  `customers` table. If it doesn’t, then you’ll have an invalid query.

### 6) Sort a result set by an expression [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/#6-sort-a-result-set-by-anexpression "Anchor for 6) Sort a result set by an expression")

The `[LEN()](https://www.sqlservertutorial.net/sql-server-string-functions/sql-server-len-function/)` function returns the number of characters in a string.

The following statement uses the `[LEN()](https://www.sqlservertutorial.net/sql-server-string-functions/sql-server-len-function/)` function in the `ORDER BY` clause to sort customers by the lengths of their first names:

```
SELECT
    first_name,
    last_name
FROM
    sales.customers
ORDER BY
    LEN(first_name) DESC;
```

Output:

![SQL Server ORDER BY - sort by an expression](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-ORDER-BY-sort-by-an-expression.png)

### 7) Sort by ordinal positions of columns [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/#7-sort-by-ordinal-positions-of-columns "Anchor for 7) Sort by ordinal positions of columns")

SQL Server allows you to sort the result set based on the *ordinal positions of columns* that appear in the select list.

The following statement sorts the customers by first and last names. But instead of specifying the column names explicitly, it uses the ordinal positions of the columns:

```
SELECT
    first_name,
    last_name
FROM
    sales.customers
ORDER BY
    1,
    2;
```

In this example, the numbers 1 and 2, which appear after the `ORDER BY` clause, denote the `first_name` and `last_name` columns respectively.

Using the ordinal positions of columns in the `ORDER BY` clause is not recommended for several reasons:

-   First, the columns in a table don’t have ordinal positions and should be referenced by names.

-   Second, if you modify the select list, you might forget to update the ORDER BY clause accordingly.

Therefore, it is best practice to always specify column names explicitly in the `ORDER BY` clause.

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/#summary "Anchor for Summary")

-   Use the `ORDER BY` clause to sort the result set by columns in ascending or descending order.

-   Use the `ASC` keyword to sort rows in ascending order.
-   Use the `DESC` keyword to sort rows in descending order.

Was this tutorial helpful?

---
Source: [SQL Server ORDER BY Clause](https://www.sqlservertutorial.net/sql-server-basics/sql-server-order-by/)