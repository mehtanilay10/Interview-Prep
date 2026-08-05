# SQL Server Enable Indexes By Examples

[Skip to content](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-enable-indexes/#primary)

**Summary**: in this tutorial, you will learn how to use various statements to enable one or all disabled indexes on a table.

Sometimes, you need to [disable an index](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-disable-indexes/) before doing a large [update](https://www.sqlservertutorial.net/sql-server-basics/sql-server-update/) on a table. By disabling the index, you can speed up the update process by avoiding the index writing overhead.

After completing the update to the table, you need to enable the index. Since the index was disabled, you can rebuild the index but cannot just simply enable it. Because after the update operation, the index needs to be rebuilt to reflect the new data in the table.

In SQL Server, you can rebuild an index by using the `ALTER INDEX` statement or `DBCC DBREINDEX` command.

## Enable index using ALTER INDEX and CREATE INDEX statements [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-enable-indexes/#enable-index-using-alter-index-and-create-index-statements "Anchor for Enable index using <code>ALTER INDEX</code> and <code>CREATE INDEX</code> statements")

This statement uses the `ALTER INDEX` statement to “enable” or rebuild an index on a table:

```
ALTER INDEX index_name 
ON table_name  
REBUILD;
```

This statement uses the `CREATE INDEX` statement to enable the disabled index and recreate it:

```
CREATE INDEX index_name 
ON table_name(column_list)
WITH(DROP_EXISTING=ON)
```

The following statement uses the `ALTER INDEX` statement to enable all disabled indexes on a table:

```
ALTER INDEX ALL ON table_name
REBUILD;
```

## Enable indexes using DBCC DBREINDEX statement [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-enable-indexes/#enable-indexes-using-dbcc-dbreindex-statement "Anchor for Enable indexes using <code>DBCC DBREINDEX</code> statement")

This statement uses the `DBCC DBREINDEX` to enable an index on a table:

```
DBCC DBREINDEX (table_name, index_name);
```

This statement uses the `DBCC DBREINDEX` to enable all indexes on a table:

```
DBCC DBREINDEX (table_name, " ");  
```

## Enable indexes example [#](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-enable-indexes/#enable-indexes-example "Anchor for Enable indexes example")

The following example uses the `ALTER INDEX` statement to enable all indexes on the `sales.customers` table from the [sample database](https://www.sqlservertutorial.net/sql-server-sample-database/):

```
ALTER INDEX ALL ON sales.customers
REBUILD;
```

In this tutorial, you have learned various statements including `ALTER INDEX`, `CREATE INDEX`, and `DBCC DBREINDEX` to enable one or all indexes on a table.

Was this tutorial helpful?

---
Source: [SQL Server Enable Indexes By Examples](https://www.sqlservertutorial.net/sql-server-indexes/sql-server-enable-indexes/)