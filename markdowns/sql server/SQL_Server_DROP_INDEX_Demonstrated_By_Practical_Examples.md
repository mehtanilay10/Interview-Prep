# SQL Server DROP INDEX Demonstrated By Practical Examples

[Skip to content](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-drop-index/#primary)

**Summary**: in this tutorial, you will learn how to use the SQL Server `DROP INDEX` statement to remove existing indexes.

## SQL Server DROP INDEX statement overview [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-drop-index/#sql-server-drop-index-statement-overview "Anchor for SQL Server DROP INDEX statement overview")

The `DROP INDEX` statement removes one or more indexes from the current database. Here is the syntax of the `DROP INDEX` statement:

```
DROP INDEX [IF EXISTS] index_name
ON table_name;
```

In this syntax:

-   First, specify the name of the index that you want to remove after the `DROP INDEX` clause.

-   Second, specify the name of the table to which the index belongs.

Removing a nonexisting index will result in an error. However, you can use the `IF EXISTS` option to conditionally drop the index and avoid the error.

Note that the `IF EXISTS` option has been available since SQL Server 2016 (13.x).

The `DROP INDEX` statement does not remove indexes created by `[PRIMARY KEY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-primary-key/)` or `[UNIQUE](https://www.sqlservertutorial.net/sql-server-basics/sql-server-unique-constraint/)` constraints. To drop indexes associated with these constraints, you use the `ALTER TABLE DROP CONSTRAINT` statement.

To remove multiple indexes from one or more tables at the same time, you specify a comma-separated list of index names with the corresponding table names after the `DROP INDEX` clause as shown in the following query:

```
DROP INDEX [IF EXISTS] 
    index_name1 ON table_name1,
    index_name2 ON table_name2,
    ...;
```

We will use the `sales.customers` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/) for the demonstration.

![customers](https://www.sqlservertutorial.net/wp-content/uploads/customers.png)

The following picture shows the indexes of the `sales.customers` table:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-DROP-INDEX-example-table.png)

### A) Using SQL Server DROP INDEX to remove one index example [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-drop-index/#a-using-sql-server-drop-index-to-remove-one-index-example "Anchor for A) Using SQL Server <code>DROP INDEX</code> to remove one index example")

This statement uses the `DROP INDEX` statement to remove the `ix_cust_email` index from the sales.customers table:

```
DROP INDEX IF EXISTS ix_cust_email
ON sales.customers;
```

If you check the indexes of the `sales.customers` table, you will see that the `ix_cust_email` index was deleted.

![SQL Server DROP INDEX one index example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-DROP-INDEX-one-index-example.png)

### B)Using SQL Server DROP INDEX to remove multiple indexes example [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-drop-index/#busing-sql-server-drop-index-to-remove-multiple-indexes-example "Anchor for B)Using SQL Server <code>DROP INDEX</code> to remove multiple indexes example")

The following example uses the DROP INDEX statement to remove the `ix_cust_city`, `ix_cust_fullname` indexes from the `sales.customers` table:

```
DROP INDEX 
    ix_cust_city ON sales.customers,
    ix_cust_fullname ON sales.customers;
```

The `sales.customers` table now has no non-clustered index:

![SQL Server DROP INDEX multiple indexes example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-DROP-INDEX-multiple-indexes-example.png)

In this tutorial, you have learned how to use the SQL Server `DROP INDEX` statement to remove one or many indexes from tables.

Was this tutorial helpful?

---
Source: [SQL Server DROP INDEX Demonstrated By Practical Examples](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-drop-index/)