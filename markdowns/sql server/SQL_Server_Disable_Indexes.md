# SQL Server Disable Indexes

[Skip to content](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-disable-indexes/#primary)

**Summary**: in this tutorial, you will learn how to use the `ALTER TABLE` statement to disable the indexes of a table.

## SQL Server Disable Index statements [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-disable-indexes/#sql-server-disable-index-statements "Anchor for SQL Server Disable Index statements")

To disable an index, you use the `ALTER INDEX` statement as follows:

```
ALTER INDEX index_name
ON table_name
DISABLE;
```

To disable all indexes of a table, you use the following form of the `ALTER INDEX` statement:

```
ALTER INDEX ALL ON table_name
DISABLE;
```

If you disable an index, the query optimizer will not consider that disabled index for creating query execution plans.

When you disable an index on a table, SQL Server keeps the index definition in the metadata and the index statistics in nonclustered indexes. However, if you disable a nonclustered or clustered index on a view, SQL Server will physically delete all the index data.

If you disable a clustered index of a table, you cannot access the table data using data manipulation language such as `[SELECT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-select/)`, `[INSERT](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/)`, `[UPDATE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/)`, and `[DELETE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-delete/)` until you rebuild or [drop the index](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-drop-index/).

## SQL Server disable index examples [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-disable-indexes/#sql-server-disable-index-examples "Anchor for SQL Server disable index examples")

Let’s take some examples of disabling indexes to have a better understanding.

### A) Disabling an index example [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-disable-indexes/#a-disabling-an-index-example "Anchor for A) Disabling an index example")

This example uses the `ALTER INDEX` to disable the `ix_cust_city` index on the `sales.customers` table:

```
ALTER INDEX ix_cust_city 
ON sales.customers 
DISABLE;
```

As a result, the following query, which finds customers who locate in `San Jose` , cannot leverage the disabled index:

```
SELECT    
    first_name, 
    last_name, 
    city
FROM    
    sales.customers
WHERE 
    city = 'San Jose';
```

Here is the estimated query execution plan:

![SQL Server Disable Index - disable one index example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Disable-Index-disable-one-index-example.png)

### B) Disabling all indexes of a table example [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-disable-indexes/#b-disabling-all-indexes-of-a-table-example "Anchor for B) Disabling all indexes of a table example")

This statement disables all indexes of the `sales.customers` table:

```
ALTER INDEX ALL ON sales.customers
DISABLE;
```

Hence, you cannot access data in the table anymore.

```
SELECT * FROM sales.customers;
```

Here is the error message:

```
The query processor is unable to produce a plan because the index 'PK__customer__CD65CB855363011F' on table or view 'customers' is disabled.
```

Note that you will learn how to enable the index in the next tutorial.

In this tutorial, you have learned how to use the `ALTER INDEX` statement to disable indexes of a table.

Was this tutorial helpful?

---
Source: [SQL Server Disable Indexes](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-disable-indexes/)