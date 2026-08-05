# SQL Server Indexes with Included Columns Explained By Examples

**Summary**: in this tutorial, you will learn how to use indexes with included columns to improve the speed of queries.

## Introduction to SQL Server indexes with included columns [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-indexes-with-included-columns/#introduction-to-sql-server-indexes-with-included-columns "Anchor for Introduction to SQL Server indexes with included columns")

We will use the `sales.customers` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) for the demonstration.

![customers](https://www.sqlservertutorial.net/wp-content/uploads/customers.png)

The following statement [creates a unique index](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-unique-index/) for the `email` column:

```
CREATE UNIQUE INDEX ix_cust_email 
ON sales.customers(email);
```

This statement finds the customer whose email is `'aide.franco@msn.com'`:

```
SELECT    
    customer_id, 
    email
FROM    
    sales.customers
WHERE 
    email = 'aide.franco@msn.com';
```

If you display the estimated execution plan for the above query, you will find that the query optimizer uses the index seek operation on the non-clustered index.

![index with included columns](https://www.sqlservertutorial.net/wp-content/uploads/index-with-included-columns.png)

However, consider the following example:

```
SELECT    
	first_name,
	last_name, 
	email
FROM    
	sales.customers
WHERE email = 'aide.franco@msn.com';
```

Here is the execution plan:

![](https://www.sqlservertutorial.net/wp-content/uploads/index-with-included-columns-key-lookup.png)

In this execution plan:

First, the query optimizer uses the index seek on the non-clustered index `ix_cust_email` to find the `email` and `customer_id`.

![](https://www.sqlservertutorial.net/wp-content/uploads/index-with-included-columns-index-seek.png)

Second, the query optimizer uses the key lookup on the clustered index of the `sales.customers` table to find the first name and last name of the customer by customer id.

![](https://www.sqlservertutorial.net/wp-content/uploads/index-with-included-columns-key-lookup-operation.png)

Third, for each row found in the non-clustered index, it matches with rows found in the clustered index using nested loops.

As you can see the cost for key lookup is about 50% of the query, which is quite expensive.

To help reduce this key lookup cost, SQL Server allows you to extend the functionality of a non-clustered index by including non-key columns.

By including non-key columns in non-clustered indexes, you can create nonclustered indexes that cover more queries.

Note that when an index contains all the columns referenced by a query, the index is typically referred to as covering the query.

First, drop the index `ix_cust_email` from the `sales.customers` table:

```
DROP INDEX ix_cust_email 
ON sales.customers;
```

Then, [create a new index](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-create-index/) `ix_cust_email_inc` that includes two columns first name and last name:

```
CREATE UNIQUE INDEX ix_cust_email_inc
ON sales.customers(email)
INCLUDE(first_name,last_name);
```

Now, the query optimizer will solely use the non-clustered index to return the requested data of the query:

![](https://www.sqlservertutorial.net/wp-content/uploads/index-with-included-columns-example.png)

An index with included columns can greatly improve query performance because all columns in the query are included in the index; The query optimizer can locate all columns values within the index without accessing table or clustered index resulting in fewer disk I/O operations.

## The syntax for creating an index with included columns [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-indexes-with-included-columns/#the-syntax-for-creating-an-index-with-included-columns "Anchor for The syntax for creating an index with included columns")

The following illustrates the syntax for creating a non-clustered index with included columns:

```
CREATE [UNIQUE] INDEX index_name
ON table_name(key_column_list)
INCLUDE(included_column_list);
```

In this syntax:

-   First, specify the name of the index after `[CREATE INDEX](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-create-index/)` clause. If the index is unique, you need to add the `UNIQUE` keyword.

-   Second, specify the name of the table and a list of key column list for the index after the ON clause.
-   Third, list a comma-separated list of included columns in the `INCLUDE` clause.

In this tutorial, you have learned how to use SQL Server indexes with included columns to improve the query performance.

Was this tutorial helpful?

---
Source: [SQL Server Indexes with Included Columns Explained By Examples](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-indexes-with-included-columns/)