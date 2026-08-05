# Entity Framework Core Concurrency Conflicts

Multiple users trying to update an entity data at the same time can lead to inconsistencies and data corruption. A user say Elon displays an entity data in order to update it, at this same time another user say Trump updates the same entity data before Elon saves the changes to the database. When Elon saves the data an inconsistent version is saved on the database which Elon has no knowledge. This is known as concurrency conflict.

The full codes implemented in this tutorial can be downloaded from my [GitHub repository](https://github.com/yogyogi/Entity-Framework-Core-Concurrency-Conflicts).

Their are 2 ways to resolve the concurrency conficts –

1.  Pessimistic concurrency
2.  Optimistic concurrency

Page Contents

![](https://www.yogihosting.com/wp-content/themes/yogi-yogihosting/Images/up-arrow.jpg)

#### This tutorial is a part of **Entity Framework Core** series.

-   1\. [Introduction to Entity Framework Core](https://www.yogihosting.com/introduction-entity-framework-core/)

-   2\. [Installation of Entity Framework Core](https://www.yogihosting.com/install-entity-framework-core/)
-   3\. [Database-First approach in Entity Framework Core](https://www.yogihosting.com/database-first-approach-entity-framework-core/)

-   4\. [DbContext Class in Entity Framework Core](https://www.yogihosting.com/dbcontext-entity-framework-core/)
-   5\. [Code-First Approach in Entity Framework Core](https://www.yogihosting.com/code-first-entity-framework-core/)

-   6\. [Migrations in Entity Framework Core](https://www.yogihosting.com/migrations-entity-framework-core/)
-   7\. [Insert Records in Entity Framework Core](https://www.yogihosting.com/insert-records-entity-framework-core/)

-   8\. [Read Records in Entity Framework Core](https://www.yogihosting.com/read-records-entity-framework-core/)
-   9\. [Update Records in Entity Framework Core](https://www.yogihosting.com/update-records-entity-framework-core/)

-   10\. [Delete Records in Entity Framework Core](https://www.yogihosting.com/delete-records-entity-framework-core/)
-   11\. [Conventions in Entity Framework Core](https://www.yogihosting.com/conventions-entity-framework-core/)

-   12\. [Configurations in Entity Framework Core](https://www.yogihosting.com/configurations-entity-framework-core/)
-   13\. [Fluent API in Entity Framework Core](https://www.yogihosting.com/fluent-api-entity-framework-core/)

-   14\. [Configure One-to-Many relationship using Fluent API in Entity Framework Core](https://www.yogihosting.com/fluent-api-one-to-many-relationship-entity-framework-core/)
-   15\. [Configure One-to-One relationship using Fluent API in Entity Framework Core](https://www.yogihosting.com/fluent-api-one-to-one-relationship-entity-framework-core/)

-   16\. [Configure Many-to-Many relationship using Fluent API in Entity Framework Core](https://www.yogihosting.com/fluent-api-many-to-many-relationship-entity-framework-core/)
-   17\. [Execute Raw SQL Queries using FromSqlRaw() method in Entity Framework Core](https://www.yogihosting.com/raw-sql-queries-entity-framework-core/)

-   18\. [Execute SQL Stored Procedures using FromSqlRaw() & ExecuteSqlRawAsync() methods in Entity Framework Core](https://www.yogihosting.com/stored-procedures-entity-framework-core/)
-   19\. [Xaero – Entity Framework Core Advanced Project](https://www.yogihosting.com/xaero-project-entity-framework-core/)

-   20\. [Value Converters and Comparers in Entity Framework Core](https://www.yogihosting.com/value-converters-comparers-entity-framework-core/)
-   21\. [Owned Entity Types in Entity Framework Core](https://www.yogihosting.com/owned-entity-entity-framework-core/)

-   22\. [Entity Framework Core Optimization Techniques](https://www.yogihosting.com/optimizing-techniques-entity-framework-core/)
-   23\. [Entity Framework Core Complex Queries](https://www.yogihosting.com/complex-queries-entity-framework-core/)

-   24\. *Entity Framework Core Concurrency Conflicts*
-   25\. [Entity Framework Core Change Tracking](https://www.yogihosting.com/change-tracking-entity-framework-core/)

-   26\. [Entity Framework Core Logging in details](https://www.yogihosting.com/entity-framework-core-logging/)

## Pessimistic Concurrency

In **Pessimistic Concurrency** we make use of database locks. Whenever we want to update an entity data we request the database to put an **“UPDATE LOCK”** on the corresponding database row. After the lock has been placed then only we can update this row of data. All other users are disallowed to update this row of data till the time we have completed the updation process. Howere other users can only view the records i.e. they have a read-only access.

Once we have completed the updation process the lock on the database row is removed and now other users can update the row in the same way we did earlier. That is they have to first request an “UPDATE LOCK” and then update the row.

Locking rows in database has many disadvantages like it requires significant database resources, makes the application complex and causes performance issues. Not all database management systems support pessimistic concurrency. Entity Framework Core also does not provides any built-in support for it. It supports Optimistic concurrency and we are going to see it next.

## Optimistic Concurrency

**In Optimistic Concurrency, no locks are applied, and the data updation is made to fail in case some other user has changed it, since it was queried for updation. Once the update failure happens the application re-fetches the newest data from the database and allows the user to update the changes.**

Entity Framework Core implements Optimistic Concurrency by configuring a property as a **Concurrency Token**. This token is loaded whenever an entity is queried from the database and then during the time of update or delete, the value of the concurrency token is matched with the value in the database. In case of the two values are found to be different, it means a **Concurrency Confict** has happend and so EF Core fetches new values of the entity from the database and allows the user to update the data once again.

### Example of Optimistic Concurrency

Let us now understand the whole process through coding. We have an entity called Department. It has 3 properties Id, Name and RowVersion. The RowVersion property is defined as a concurrency token. It’s type is byte\[\] and is marked by \[Timestamp\] attribute. The Timestamp attribute maps the property to a SQL Server ROWVERSION type column.

| 1

2

3

4

5

6

7

8 | `public` `class` `Department`

`{`

    `public` `int` `Id {` `get``;` `set``; }`

    `public` `string` `Name {` `get``;` `set``; }`

    `[Timestamp]`

    `public` `byte``[] RowVersion {` `get``;` `set``; }`

`}` |

The EF Core migrations will create the database table called Department for the Department entity.

| 1

2

3

4

5

6 | `CREATE TABLE [dbo].[Department] (`

    `[Id]         INT            IDENTITY (1, 1) NOT NULL,`

    `[Name]       NVARCHAR (MAX) NULL,`

    `[RowVersion] ROWVERSION     NULL,`

    `CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED ([Id] ASC)`

`);` |

Note that instead of adding the \[Timestamp\] attribute on the property, we can also implement the same thing with fluent api.

| 1

2

3

4

5

6 | `protected override void OnModelCreating(ModelBuilder modelBuilder)`

`{`

    `modelBuilder.Entity<Department>()`

        `.Property(p => p.RowVersion)`

        `.IsRowVersion();`

`}` |

With this we now have configured a concurrency token via RowVersion property which will be automatically added whenever a new row of department is inserted to the database. Also this RowVersion will automatically change in the database every time the row of data is updated.

Let us add a new Department record as shown in the below code.

```
var dept = new Department() { Name = "Designing" };
context.Add(dept);
await context.SaveChangesAsync();
```

This inserts a new “Designing” record with a Rowversion value of “0x00000000000007D1”. See the below image.

![Concurrency Token rowversion](https://www.yogihosting.com/wp-content/uploads/2025/07/concurrency-token-rowversion.png "Concurrency Token rowversion")

To understand how Concurrency Token will behave during the update feature, we add the update code as shown below.

```
var dept = await context.Department.SingleAsync(b => b.Name == "Designing");
dept.Name = "Human Resource"; 
await context.SaveChangesAsync();
```

Here when the Designing row of data is loaded, the “Concurrency Token is also loaded” and is tracked by Entity Framework Core. Next we changed the name of the Department to “Human Resource” and tell EF Core to persist the change to the database.

It is very important that your EF Core codes are optimized so that your apps should always remain fast, read my tutorial [Entity Framework Core Optimization Techniques](https://www.yogihosting.com/optimizing-techniques-entity-framework-core/) for knowing all these techniques.

EF Core will send the following SQL query to the database.

```
UPDATE [Department] SET [Name] = @p0
      OUTPUT INSERTED.[RowVersion]
      WHERE [Id] = @p1 AND [RowVersion] = @p2;
```

Note that in addition to the “Id” in the WHERE clause, EF Core has added a condition for RowVersion as well, this only modifies the row if the RowVersion column hasn’t changed since the moment it was queried.

In case of a Concurrency Confict, we get an exception of type DbUpdateConcurrencyException which we should handle in our application properly. We will see how to do this in the latter half of this tutorial when we will implement the CRUD operations with **resolving concurrency conflicts**.

The same DbUpdateConcurrencyException is also thrown when deleting a row of data that has been modified.

## CRUD Operations with Optimistic Concurrency implementation

Let us now implement the CRUD Operations that have the support for Optimistic Concurrency. Here we will resolve any concurrency conflicts which occur during the update and delete operations.

The full code of the crud app can be downloaded from my [GitHub repository](https://github.com/yogyogi/Entity-Framework-Core-Concurrency-Conflicts).

### Create Records

Note that the Create and the Read operations will not have any concurrency check feature. We will create them as usual.

The Create View allows user to fill all the department fields and when he submits the record then EF Core will insert it to the database. The view is shown below.

![CRUD Create Operation](https://www.yogihosting.com/wp-content/uploads/2025/07/crud-create.png "CRUD Create Operation")

The code for the View is given below.

| 1

2

3

4

5

6

7

8

9

10

11

12 | `@model Department`

`<h1` `class``=``"bg-info text-white"``>Create Department</h1>`

`<a asp-action=``"Index"` `class``=``"btn btn-secondary"``>Back</a>`

`<form method=``"post"``>`

    `<div` `class``=``"form-group"``>`

        `<label asp-``for``=``"Name"``></label>`

        `<input asp-``for``=``"Name"` `class``=``"form-control"` `/>`

    `</div>`

    `<button type=``"submit"` `class``=``"btn btn-primary"``>Create</button>`

`</form>` |

The Department Controller’s Create action method will receive the submitted data and will simply create a new record in the database.

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17 | `public` `class` `DepartmentController : Controller`

`{`

    `private` `AppDbContext context;`

    `public` `DepartmentController(AppDbContext cc)`

    `{`

        `context = cc;`

    `}`

    `[HttpPost]`

    `public` `async` `Task<IActionResult> Create(Department dept)` 

    `{`

        `context.Add(dept);`

        `await` `context.SaveChangesAsync();`

        `return` `RedirectToAction(``"Index"``);`

    `}`

`}` |

### Read Records

The Department Controller’s Index action fetches all the department records from the database and returns them to the View. It’s code is given below.

```
public IActionResult Index()
{
    return View(context.Department.AsNoTracking());
}
```

In the Index view we are simply displaying all the department records in a HTML table. See the below image.

![CRUD Read Operation](https://www.yogihosting.com/wp-content/uploads/2025/07/crud-read.png "CRUD Read Operation")

The full code is given below.

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31 | `@{`

    `ViewData[``"Title"``] =` `"All Departments"``;`

`}`

`@model IEnumerable<Department>`

`<h1` `class``=``"bg-info text-white"``>All Departments</h1>`

`<a asp-action=``"Create"` `class``=``"btn btn-secondary"``>Create</a>`

`<table` `class``=``"table table-sm table-bordered"``>`

    `<tr>`

        `<th>ID</th>`

        `<th>Name</th>`

        `<th>Update</th>`

        `<th>Delete</th>`

    `</tr>`

    `@``foreach` `(Department dept` `in` `Model)`

    `{`

        `<tr>`

            `<td>@dept.Id</td>`

            `<td>@dept.Name</td>`

            `<td>`

                `<a` `class``=``"btn btn-sm btn-primary"` `asp-action=``"Update"` `asp-route-id=``"@dept.Id"``>`

                    `Update`

                `</a>`

            `</td>`

            `<td>`

                `<a` `class``=``"btn btn-sm btn-primary"` `asp-action=``"Delete"` `asp-route-id=``"@dept.Id"``>Delete</a>`

            `</td>`

        `</tr>`

    `}`

`</table>` |

Notice the links to Update and Delete action method which send the department “Id” in the route. Through the Id value we are going to fetch the corresponding department in the update and delete actions.

```
<a class="btn btn-sm btn-primary" asp-action="Update" asp-route-id="@dept.Id">
    Update
</a>

<a class="btn btn-sm btn-primary" asp-action="Delete" asp-route-id="@dept.Id">
    Delete
</a>
```

### Update Records

In the Update Record feature we will fetch the department record meant to be updated. The **Concurrency Token** which is the RowVersion field is kept in a hidden field. This is done so that we can check it’s value with the one stored in the database. Through this we can find out if some other user has already updated the record.

The code of the update view is given below.

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14 | `@model Department`

`<h1` `class``=``"bg-info text-white"``>Update Department</h1>`

`<a asp-action=``"Index"` `class``=``"btn btn-secondary"``>Back</a>`

`<div asp-validation-summary=``"ModelOnly"` `class``=``"text-danger"``></div>`

`<form method=``"post"``>`

    `<div` `class``=``"form-group"``>`

        `<label asp-``for``=``"Name"``></label>`

        `<input asp-``for``=``"Name"` `class``=``"form-control"` `/>`

    `</div>`

    `<input type=``"hidden"` `asp-``for``=``"RowVersion"` `/>`

    `<button type=``"submit"` `class``=``"btn btn-primary"``>Update</button>`

`</form>` |

Next, on the Update action method of type HTTP GET, we fetch the record whose Id is send in the route. The record is returned to the view where it gets displayed.

```
public async Task<IActionResult> Update(int id)
{
    Department dept = await context.Department.Where(e => e.Id == id).FirstOrDefaultAsync();
    return View(dept);
}
```

Now coming to the most important part of concurrency checking which we perform in the HTTP POST type version of Update action. It’s code as given below.

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

41

42

43

44

45

46

47

48

49

50

51

52

53

54

55

56

57

58

59

60

61

62

63

64

65 | `[HttpPost]`

`[ValidateAntiForgeryToken]`

`public` `async` `Task<IActionResult> Update(Department dept,` `int``? id,` `byte``[] rowVersion)`

`{`

    `if` `(id ==` `null``)`

    `{`

        `return` `NotFound();`

    `}`

    `var` `departmentToUpdate =` `await` `context.Department.FirstOrDefaultAsync(m => m.Id == id);`

    `if` `(departmentToUpdate ==` `null``)`

    `{`

        `Department deletedDepartment =` `new` `Department();`

        `await` `TryUpdateModelAsync(deletedDepartment);`

        `ModelState.AddModelError(``string``.Empty,` `"Unable to save changes. The department was deleted by another user."``);`

        `return` `View(deletedDepartment);`

    `}`

    `context.Entry(departmentToUpdate).Property(``"RowVersion"``).OriginalValue = rowVersion;`

    `if` `(``await` `TryUpdateModelAsync<Department>(`

        `departmentToUpdate,`

        `""``,`

        `s => s.Name))`

    `{`

        `try`

        `{`

            `await` `context.SaveChangesAsync();`

            `return` `RedirectToAction(nameof(Index));`

        `}`

        `catch` `(DbUpdateConcurrencyException ex)`

        `{`

            `var` `exceptionEntry = ex.Entries.Single();`

            `var` `clientValues = (Department)exceptionEntry.Entity;`

            `var` `databaseEntry = exceptionEntry.GetDatabaseValues();`

            `if` `(databaseEntry ==` `null``)`

            `{`

                `ModelState.AddModelError(``string``.Empty,`

                    `"Unable to save changes. The department was deleted by another user."``);`

            `}`

            `else`

            `{`

                `var` `databaseValues = (Department)databaseEntry.ToObject();`

                `if` `(databaseValues.Name != clientValues.Name)`

                `{`

                    `ModelState.AddModelError(``"Name"``, $``"Current value: {databaseValues.Name}"``);`

                `}`

                `ModelState.AddModelError(``string``.Empty,` `"The record you attempted to edit "`

                        `+` `"was modified by another user after you got the original value. The "`

                        `+` `"edit operation was canceled and the current values in the database "`

                        `+` `"have been displayed. If you still want to edit this record, click "`

                        `+` `"the Update button again. Otherwise click the Back to List hyperlink."``);`

                `departmentToUpdate.Name = databaseValues.Name;`

                `departmentToUpdate.RowVersion = (``byte``[])databaseValues.RowVersion;`

                `ModelState.Remove(``"RowVersion"``);`

                `ModelState.Remove(``"Name"``);`

            `}`

        `}`

    `}`

    `return` `View(departmentToUpdate);`

`}` |

Explanation

The code starts by fetching the department record whose Id is send in the route. If it gets null then it means some other user has deleted the record. We then add the error message to tell this to the user. Check the below code.

```
var departmentToUpdate = await context.Department.FirstOrDefaultAsync(m => m.Id == id);

if (departmentToUpdate == null)
{
    Department deletedDepartment = new Department();
    await TryUpdateModelAsync(deletedDepartment);
    ModelState.AddModelError(string.Empty, "Unable to save changes. The department was deleted by another user.");
    return View(deletedDepartment);
}
```

In the Update view, we store the original RowVersion value in a hidden field. In this method we receive this value in the rowVersion parameter. Before we do SaveChanges, we need to put that original RowVersion property value in the OriginalValues collection for the entity.

```
context.Entry(departmentToUpdate).Property("RowVersion").OriginalValue = rowVersion;
```

Next, we update the record using the TryUpdateModelAsync method. In case of Concurrency Confict this will fail and an execption of type DbUpdateConcurrencyException is raised. See the catch block where we are handling this excption.

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31 | `catch` `(DbUpdateConcurrencyException ex)`

`{`

    `var` `exceptionEntry = ex.Entries.Single();`

    `var` `clientValues = (Department)exceptionEntry.Entity;`

    `var` `databaseEntry = exceptionEntry.GetDatabaseValues();`

    `if` `(databaseEntry ==` `null``)`

    `{`

        `ModelState.AddModelError(``string``.Empty,`

            `"Unable to save changes. The department was deleted by another user."``);`

    `}`

    `else`

    `{`

        `var` `databaseValues = (Department)databaseEntry.ToObject();`

        `if` `(databaseValues.Name != clientValues.Name)`

        `{`

            `ModelState.AddModelError(``"Name"``, $``"Current value: {databaseValues.Name}"``);`

        `}`

        `ModelState.AddModelError(``string``.Empty,` `"The record you attempted to edit "`

                `+` `"was modified by another user after you got the original value. The "`

                `+` `"edit operation was canceled and the current values in the database "`

                `+` `"have been displayed. If you still want to edit this record, click "`

                `+` `"the Update button again. Otherwise click the Back to List hyperlink."``);`

        `departmentToUpdate.Name = databaseValues.Name;`

        `departmentToUpdate.RowVersion = (``byte``[])databaseValues.RowVersion;`

        `ModelState.Remove(``"RowVersion"``);`

        `ModelState.Remove(``"Name"``);`

    `}`

`}` |

In the Entries property of the exception object we will get the new values entered by the user and the current database values. Through these values we will **resolve the concurrency conflict**.

```
var exceptionEntry = ex.Entries.Single();
var clientValues = (Department)exceptionEntry.Entity;
var databaseEntry = exceptionEntry.GetDatabaseValues();
```

After this we check the databaseEntry object’s value, if it is null then it means the department is already deleted by some other user. We add the necessary message to the ModelState which will be displayed on the view.

```
if (databaseEntry == null)
{
    ModelState.AddModelError(string.Empty,
        "Unable to save changes. The department was deleted by another user.");
}
```

In the other case, we add a custom error message for each column that has database values different from what the user entered on the Update view. We have shown only one field for clarity .

| 1

2

3

4

5

6

7

8

9

10

11

12 | `var` `databaseValues = (Department)databaseEntry.ToObject();`

`if` `(databaseValues.Name != clientValues.Name)`

`{`

    `ModelState.AddModelError(``"Name"``, $``"Current value: {databaseValues.Name}"``);`

`}`

`ModelState.AddModelError(``string``.Empty,` `"The record you attempted to edit "`

        `+` `"was modified by another user after you got the original value. The "`

        `+` `"edit operation was canceled and the current values in the database "`

        `+` `"have been displayed. If you still want to edit this record, click "`

        `+` `"the Update button again. Otherwise click the Back to List hyperlink."``);` |

At the end, we sets the Name and RowVersion values of “departmentToUpdate” to the new values that are retrieved from the database. This new Name will be displayed on the text box and the RowVersion value will be stored in the hidden field when the Update view is redisplayed.

```
departmentToUpdate.Name = databaseValues.Name;
departmentToUpdate.RowVersion = (byte[])databaseValues.RowVersion;
```

We also remove the old values from the ModelState.

```
ModelState.Remove("RowVersion");
ModelState.Remove("Name");
```

It should also be noted that if you have more fields in the entity then you will have to do the same things for each of the fields.

Congrats, we completed the **Optimistic Concurrency Implementation** for the Update operation. It’s now time to test this feature.

Testing

Open a department record for updation on 2 browser tabs – say Tab A and Tab B. In Tab A we will show the Concurreny Conflict errors and also resolve them. In Tab B we will perform updation of the record before Tab A completes the update, and this will give rise to concurrency conflicts.

We will receive concurrency error – `The record you attempted to edit was modified by another user after you got the original value. The edit operation was canceled and the current values in the database have been displayed. If you still want to edit this record, click the Update button again. Otherwise click the Back to List hyperlink.` The below image shows this error.

![Optimistic Concurrency Conflict](https://www.yogihosting.com/wp-content/uploads/2025/07/optimistic-concurrency-conflict.png "Optimistic Concurrency Conflict")

Now change the department Name again and click the Update button. This time your changes will be successfully saved on the database.

### Delete Records

Since we have already implemented the Update action for resolving concurrency conflicts therefore doing the same thing on the delete action will be quite easy. The Delete view stores the RowVersion field value in a hidden field. This value is received by the HTTPPOST version of the Delete action method when the user confirms the deletion of the record. Entity Framework Core will create the SQL DELETE query by including a WHERE clause with the original RowVersion value. This we have already seen in the Update action too.

If the values are different then concurrency conflict has happend and we need to resolve it.

The delete view code is given below.

```
@model Department

@{
    ViewData["Title"] = "Delete Department";
}

<h1 class="bg-info text-white">Delete Department</h1>
<a asp-action="Index" class="btn btn-secondary">Back</a>
<p class="text-danger">@ViewData["ConcurrencyErrorMessage"]</p>

<div class="alert alert-primary">
    Are you sure you want to delete this?
</div>
<div>
    <dl class="row">
        <dt class="col-sm-2">
            @Html.DisplayNameFor(model => model.Name)
        </dt>
        <dd class="col-sm-10">
            @Html.DisplayFor(model => model.Name)
        </dd>
    </dl>

    <form asp-action="Delete">
        <input type="hidden" asp-for="Id" />
        <input type="hidden" asp-for="RowVersion" />
        <div class="form-actions no-color">
            <input type="submit" class="btn btn-warning" value="Delete" /> 
        </div>
    </form>
</div>
```

The HTTP GET and POST versions of the delete actions are given below.

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

41

42

43

44

45

46

47

48

49

50

51 | `public` `async` `Task<IActionResult> Delete(``int``? id,` `bool``? concurrencyError)`

`{`

    `if` `(id ==` `null``)`

    `{`

        `return` `NotFound();`

    `}`

    `var` `department =` `await` `context.Department`

        `.AsNoTracking()`

        `.FirstOrDefaultAsync(m => m.Id == id);`

    `if` `(department ==` `null``)`

    `{`

        `if` `(concurrencyError.GetValueOrDefault())`

        `{`

            `return` `RedirectToAction(nameof(Index));`

        `}`

        `return` `NotFound();`

    `}`

    `if` `(concurrencyError.GetValueOrDefault())`

    `{`

        `ViewData[``"ConcurrencyErrorMessage"``] =` `"The record you attempted to delete "`

            `+` `"was modified by another user after you got the original values. "`

            `+` `"The delete operation was canceled and the current values in the "`

            `+` `"database have been displayed. If you still want to delete this "`

            `+` `"record, click the Delete button again. Otherwise "`

            `+` `"click the Back to List hyperlink."``;`

    `}`

    `return` `View(department);`

`}`

`[HttpPost]`

`[ValidateAntiForgeryToken]`

`public` `async` `Task<IActionResult> Delete(Department department)`

`{`

    `try`

    `{`

        `if` `(``await` `context.Department.AnyAsync(m => m.Id == department.Id))`

        `{`

            `context.Department.Remove(department);`

            `await` `context.SaveChangesAsync();`

        `}`

        `return` `RedirectToAction(nameof(Index));`

    `}`

    `catch` `(DbUpdateConcurrencyException` `)`

    `{`

        `return` `RedirectToAction(nameof(Delete),` `new` `{ concurrencyError =` `true``, id = department.Id });`

    `}`

`}` |

Explanation

A user tries deleting a records from the Post version of delete action and if he receives a concurrency conflict then the GET version is called to show the concurrency error messages. The concurrencyError variable which contains the a boolean value of true, in case of any confict is send from the post version in the route, and is receives in the GET version of the action method.

Check the catch block given on the HTTP POST version of delete action which does this thing.

```
catch (DbUpdateConcurrencyException /* ex */)
{
    //Log the error (uncomment ex variable name and write a log.)
    return RedirectToAction(nameof(Delete), new { concurrencyError = true, id = department.Id });
}
```

The HTTP GET version shows the concurrency conflict messages added to ViewData and these will be displayed by the delete view.

```
if (concurrencyError.GetValueOrDefault())
{
    ViewData["ConcurrencyErrorMessage"] = "The record you attempted to delete "
        + "was modified by another user after you got the original values. "
        + "The delete operation was canceled and the current values in the "
        + "database have been displayed. If you still want to delete this "
        + "record, click the Delete button again. Otherwise "
        + "click the Back to List hyperlink.";
}
```

In case the row of data was deleted by another user, no error message is displayed. The user is simply redirected to the Index action method. This code is shown below.

```
if (department == null)
{
    if (concurrencyError.GetValueOrDefault())
    {
        return RedirectToAction(nameof(Index));
    }
    return NotFound();
}
```

Testing

We try to delete “Development” department.

![Concurrency Delete feature](https://www.yogihosting.com/wp-content/uploads/2025/07/concurrency-delete.png "Concurrency Delete feature")

At the same moment another user updated the “Developement” to “Testing”. So we get the concurrency conflict and errors messages displayed on the view. The latest value from the database which is “Testing” is now shown on the text box.

![Concurrency Resolve Delete operation](https://www.yogihosting.com/wp-content/uploads/2025/07/concurrency-message-delete.png "Concurrency Resolve in Delete operation")

Once we click the delete button again the “Testing” department gets deleted. This is how the Optimistic Concurrency is implemented on the delete operation.

## Custom Concurrency Conflicts Resolve Code

In Entity Framework Core concurrency conflict resolving mechanism, if any column is changed then concurrency conflict is triggered. This is sometimes not needed, we may want not all but only a few important column changes affect the concurrency. So here we will need to create our own custom concurrency resolve code.

The department entity has some columns but we want only the important column changes to trigger the concurrency. The important columns are – Name and TotalEmployees.

Notice we have used a Guid Column called Version for Concurrency Token and applied \[ConcurrencyCheck\] attribute over it.

```
public class Department
{
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    
    public int TotalEmployees { get; set; }
    
    public string CreatedBy { get; set; }

    public string HeadedBy { get; set; }

    [ConcurrencyCheck] 
    public Guid Version { get; set; } 
}
```

Instead of using the \[ConcurrencyCheck\] attribute, we can also use the fluent api as shown below.

```
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Department>()
        .Property(p => p.Version)
        .IsConcurrencyToken();
}
```

Now in the application, for important columns (where we want the concurrency check to happen), we must assign the Version property with a new Guid value whenever persisting changes.

| 1

2

3

4 | `var` `dep =` `await` `context.Department.SingleAsync(b => b.Name ==` `"Designing"``);`

`dep.Name =` `"Testing"``;`

`dep.Version = Guid.NewGuid();`

`await` `context.SaveChangesAsync();` |

In case on un-important columns, we avoid assigning the Version property so that the concurrency check is not triggered.

```
var dep = await context.Department.SingleAsync(b => b.Name == "Designing");
dep.HeadedBy = "Jon"; // not important column
await context.SaveChangesAsync();
```

## Transactions in Entity Framework Core

In Transactions we can execute several database operations in a batch such that either all operations succeed which is known as transaction is committed, or none of them are applied to the database, this is known as rollback of transaction.

In EF Core when SaveChanges  method is called all the operations in the transaction are applied. If any operation is failed then transaction is rolled back and none of the changes are applied to the database.

### Example – EF Core Transaction

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18 | `using` `var` `context =` `new` `Context();`

`await` `using` `var` `transaction =` `await` `context.Database.BeginTransactionAsync();`

`try`

`{`

    `context.Department.Add(``new` `Department { Name =` `"Designing"` `});`

    `await` `context.SaveChangesAsync();`

    `context.Department.Add(``new` `Department { Name =` `"Testing"` `});`

    `await` `context.SaveChangesAsync();`

    `await` `transaction.CommitAsync();`

`}`

`catch` `(Exception)`

`{`

`}` |

### Transaction Savepoints

In a transaction the **Savepoints** are points within a database transaction to which it can be rolled back to, in case an error occurs. If SaveChanges encounters any error, it automatically rolls the transaction back to the savepoint. This leaves the transaction in the same state when it started, helping us to correct issues and retry saving. This is also helpful in optimistic concurrency.

```
using var context = new Context();
await using var transaction = await context.Database.BeginTransactionAsync();

try
{
    context.Department.Add(new Department { Name = "Admin" });
    await context.SaveChangesAsync();

    await transaction.CreateSavepointAsync("BeforeSavepoint");

    context.Department.Add(new Department { Name = "Designing" });
    context.Department.Add(new Department { Name = "Testing" });
    await context.SaveChangesAsync();

    await transaction.CommitAsync();
}
catch (Exception)
{
    // If a failure occurred, rollback to the savepoint and can continue the transaction
    await transaction.RollbackToSavepointAsync("BeforeSavepoint");

    // TODO: Handle failure
}
```

Conclusion

In this tutorial we leared what is concurrency and how Entity Framework Core resolves concurrency conflicts. We also created a full CRUD operations where we implemented optimistic concurrency on the Update and Delete areas of the app. You can download this full app from my GitHub repository.

---
Source: [Entity Framework Core Concurrency Conflicts](https://www.yogihosting.com/concurrency-conflicts-entity-framework-core/)