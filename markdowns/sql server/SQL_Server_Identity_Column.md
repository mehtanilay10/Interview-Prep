# SQL Server Identity Column

**Summary**: in this tutorial, you will learn how to use the SQL Server `IDENTITY` property to create an identity column for a table.

## Introduction to SQL Server IDENTITY column [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-identity/#introduction-to-sql-server-identity-column "Anchor for Introduction to SQL Server IDENTITY column")

To create an identity column for a table, you use the `IDENTITY` property as follows:

```
IDENTITY[(seed,increment)]
```

In this syntax:

-   The `seed` is the value of the first row loaded into the table.

-   The `increment` is the incremental value added to the identity value of the previous row.

The default value of `seed` and `increment` is 1 i.e., `(1,1)`. It means that the first row will have the value of one, the second row will have the value of 2, and so on.

If you want the value of the identity column of the first row to be 10 and the incremental value is 10, you can use the following syntax:

```
IDENTITY (10,10)
```

In SQL Server, each table has *one and only one* identity column. Typically, it is the [primary key column](https://www.sqlservertutorial.net/sql-server-basics/sql-server-primary-key/) of the table.

Let’s [create a new schema](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-schema/) named `hr` for practicing:

```
CREATE SCHEMA hr;
```

The following statement [creates a new table](https://www.sqlservertutorial.net/sql-server-basics/sql-server-create-table/) using the `IDENTITY` property for the personal identification number column:

```
CREATE TABLE hr.person (
    person_id INT IDENTITY(1,1) PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender CHAR(1) NOT NULL
);
```

First, [insert a new row](https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert/) into the `person` table:

```
INSERT INTO hr.person(first_name, last_name, gender)
OUTPUT inserted.person_id
VALUES('John','Doe', 'M');
```

Output:

![SQL Server Identity Column Example](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Identity-Column-Example.png)

The output shows that the first row has been loaded with the value of one in the `person_id` column.

Second, insert another row into the `person` table:

```
INSERT INTO hr.person(first_name, last_name, gender)
OUTPUT inserted.person_id
VALUES('Jane','Doe','F');
```

Output:

![SQL Server Identity Column Example 2](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Identity-Column-Example-2.png)

The output shows that the second row has the value of two in the `person_id` column.

## Reusing of identity values [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-identity/#reusing-of-identity-values "Anchor for Reusing of identity values")

SQL Server does not reuse the identity values. If you insert a row into the identity column and the insert statement fails or is rolled back, then the identity value is lost and will not be generated again. This results in gaps in the identity column.

Consider the following example:

First, create two more tables in the `hr` schema named `position` and `person_position`:

```
CREATE TABLE hr.position (
    position_id INT IDENTITY (1, 1) PRIMARY KEY,
    position_name VARCHAR (255) NOT NULL,

);

CREATE TABLE hr.person_position (
    person_id INT,
    position_id INT,
    PRIMARY KEY (person_id, position_id),
    FOREIGN KEY (person_id) REFERENCES hr.person (person_id),
    FOREIGN KEY (position_id) REFERENCES hr. POSITION (position_id)
);
```

Second, insert a new person and assign this new person a position by inserting a new row into the `person_position` table:

```
BEGIN TRANSACTION
    BEGIN TRY
        -- insert a new person
        INSERT INTO hr.person(first_name,last_name, gender)
        VALUES('Joan','Smith','F');

        -- assign the person a position
        INSERT INTO hr.person_position(person_id, position_id)
        VALUES(@@IDENTITY, 1);
    END TRY
    BEGIN CATCH
         IF @@TRANCOUNT > 0  
            ROLLBACK TRANSACTION;  
    END CATCH

    IF @@TRANCOUNT > 0  
        COMMIT TRANSACTION;
GO
```

In this example, the first insert statement is executed successfully. However, the second one failed due to no position with id one in the `position` table. Because of the error, the whole transaction was rolled back.

Because the first `INSERT` statement consumed the identity value of three and the transaction was rolled back, the next identity value will be four as shown in the following statement:

```
INSERT INTO hr.person(first_name,last_name,gender)
OUTPUT inserted.person_id
VALUES('Peter','Drucker','F');
```

The output of the statement is:

![](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Identity-Column-Example-3.png)

## Resetting the identity column value [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-identity/#resetting-the-identity-column-value "Anchor for Resetting the identity column value")

To reset the identity’s counter, you use the `DBCC CHECKIDENT` management command:

```
DBCC CHECKIDENT ('[TableName]', RESEED, 0);
GO
```

For example:

First, delete all rows from the `hr.person` table:

```
DELETE FROM hr.person;
```

Second, reset the identity’s counter to zero:

```
DBCC CHECKIDENT ('hr.person', RESEED, 0);
GO
```

Output:

```
Checking identity information: current identity value '4'.
DBCC execution completed. If DBCC printed error messages, contact your system administrator.
```

The output shows that the current identity value is 4. It reset the value to zero.

Third, insert a new row into the `hr.person` table:

```
INSERT INTO hr.person(first_name, last_name, gender)
OUTPUT inserted.person_id
VALUES('Jhoan','Smith','F');
```

Output:

```
person_id
-----------
1

(1 row affected)
```

The `person_id` value is 1.

## Summary [#](https://www.sqlservertutorial.net/sql-server-basics/sql-server-identity/#summary "Anchor for Summary")

-   Use the SQL Server `IDENTITY` property to create an identity column for a table.

Was this tutorial helpful?

---
Source: [SQL Server Identity Column](https://www.sqlservertutorial.net/sql-server-basics/sql-server-identity/)