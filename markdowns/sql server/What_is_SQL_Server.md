# What is SQL Server

SQL Server is a relational database management system (RDBMS) developed and marketed by Microsoft.

Similar to other RDBMS software, SQL Server is built on top of [SQL](https://www.sqltutorial.org/), a standard programming language for interacting with relational databases. SQL Server is tied to Transact-SQL, or T-SQL, Microsoft’s implementation of SQL, which includes a set of proprietary programming constructs.

SQL Server has been exclusively available on the Windows environment for over 20 years. In 2016, Microsoft made it available on Linux. SQL Server 2017 became generally available in October 2016 and was compatible with both Windows and Linux.

## SQL Server Architecture [#](https://www.sqlservertutorial.net/getting-started/what-is-sql-server/#sql-server-architecture "Anchor for SQL Server Architecture")

The following diagram illustrates the architecture of the SQL Server:

![What is SQL Server - SQL Server Architecture ](https://www.sqlservertutorial.net/wp-content/uploads/What-is-SQL-Server-SQL-Server-Architecture.png)

SQL Server consists of two main components:

-   Database Engine

-   SQLOS

### Database Engine [#](https://www.sqlservertutorial.net/getting-started/what-is-sql-server/#database-engine "Anchor for Database Engine")

The core component of the SQL Server is the Database Engine, which comprises a relational engine that processes queries and a storage engine that manages database files, pages, indexes, etc.

Additionally, the database engine creates database objects such as [stored procedures](https://www.sqlservertutorial.net/sql-server-stored-procedures/basic-sql-server-stored-procedures/), [views](https://www.sqlservertutorial.net/sql-server-views/), and [triggers](https://www.sqlservertutorial.net/sql-server-triggers/).

#### Relational Engine [#](https://www.sqlservertutorial.net/getting-started/what-is-sql-server/#relational-engine "Anchor for Relational Engine")

The Relational Engine contains the components that determine the optimal method for executing a query. It is also known as the query processor.

The relational engine requests data from the storage engine based on the input query and processes the results.

Some tasks of the relational engine include querying processing, memory management, thread and task management, buffer management, and distributed query processing.

#### Storage Engine [#](https://www.sqlservertutorial.net/getting-started/what-is-sql-server/#storage-engine "Anchor for Storage Engine")

The storage engine is responsible for storing and retrieving data from the storage systems such as disks and SAN.

### SQLOS [#](https://www.sqlservertutorial.net/getting-started/what-is-sql-server/#sqlos "Anchor for SQLOS")

Under the relational engine and storage engine lies the SQL Server Operating System, or SQLOS.

SQLOS provides various operating system services such as memory and I/O management, as well as exception handling and synchronization services.

## SQL Server Services and Tools [#](https://www.sqlservertutorial.net/getting-started/what-is-sql-server/#sql-server-services-and-tools "Anchor for SQL Server Services and Tools")

Microsoft offers both data management and business intelligence (BI) tools and services alongside SQL Server.

For data management, SQL Server includes SQL Server Integration Services (SSIS), SQL Server Data Quality Service, and SQL Server Master Data Services.

For database development, SQL Server provides SQL Server Data tools; and for managing, deploying, and monitoring databases, SQL Server has the SQL Server Management Studio (SSMS).

For data analysis, SQL Server offers SQL Server Analysis Services (SSAS). SQL Server Reporting Services (SSRS) provides reports and data visualization. The Machine Learning Services technology first appeared first in SQL Server 2016, originally known as the R Services.

## SQL Server Editions [#](https://www.sqlservertutorial.net/getting-started/what-is-sql-server/#sql-server-editions "Anchor for SQL Server Editions")

SQL Server has four primary editions, each offering different bundled services and tools. Two editions are available free of charge:

**SQL Server Developer Edition** is intended for database development and testing purposes.

**SQL Server Express Edition** is suitable for small databases with a storage capacity of up to 10 GB.

For larger and more critical applications, SQL Server offers the **Enterprise edition**, which includes all SQL Server’s features.

**SQL Server Standard Edition** has a subset of features available in the Enterprise Edition and imposes limitations on the server, including restrictions on the number of processor cores and memory configurations.

**SQL Server Web Edition** is a good option for web hosting companies due to its low total cost of ownership.

For detailed information on the SQL Server Editions, check out the available [Server Server 2022 Editions](https://learn.microsoft.com/en-us/sql/sql-server/editions-and-components-of-sql-server-2022?view=sql-server-ver16#sql-server-editions).

## Summary [#](https://www.sqlservertutorial.net/getting-started/what-is-sql-server/#summary "Anchor for Summary")

-   SQL server architecture includes a database engine and SQL server operation system (SQLOS)

-   SQL server offers a set of tools for working with data effectively.
-   SQL server has different editions including developer edition, expression, enterprise, and standard.

Was this tutorial helpful?

---
Source: [What is SQL Server](https://www.sqlservertutorial.net/getting-started/what-is-sql-server/)