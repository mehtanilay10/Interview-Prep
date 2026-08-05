# How to work with Roles in ASP.NET Core Identity

Page Contents

In **ASP.NET Core Identity**, we can create **Roles** that contain a set of permissions for performing a set of activities in the app. For example an organization can have 4 roles which are:

-   1\. Admin – For doing administration works like assigning works to employees.

-   2\. Manager – For looking after the clients need and completing projects on time.
-   3\. Network – For keeping the internet of the organization up and running in a secured manner.

-   4\. Security – For guarding the premises of the organization.

In **ASP.NET Core Identity** we can create any number of Roles and assign Identity users to these roles.

![](https://www.yogihosting.com/wp-content/themes/yogi-yogihosting/Images/up-arrow.jpg)

#### This tutorial is a part of the ASP.NET Core Identity series

-   1\. [How to Setup and Configure ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-setup/)

-   2\. [How to Create, Read, Update & Delete users in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-create-read-update-delete-users/)
-   3\. [Username, Email & Password Policy in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-username-email-password-policy/)

-   4\. [How to do Authentication of Users in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-authentication/)
-   5\. *How to work with Roles in ASP.NET Core Identity*

-   6\. [How to add Custom User Properties in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-custom-user-properties/)
-   7\. [How to work with Claims in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-claims/)

-   8\. [How to work with Policies in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-policies/)
-   9\. [How to integrate Google login feature in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-login-with-google/)

-   10\. [Two-Factor Authentication in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-two-factor-authentication/)
-   11\. [How to perform Email Confirmation of Users in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-email-confirmation/)

-   12\. [Creating Password Reset feature in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-password-reset/)
-   13\. [User Lockout in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-user-lockout/)

## ASP.NET Core Identity RoleManager class

The **ASP.NET Core Identity RoleManager class** is used for accessing and managing roles. The generic version of the RoleManager<T> is used where ‘T’ is the class that represents roles in the Identity Database.

The **Identity RoleManager** class has some important functions and properties which are defined in the table given below.

| Name | Description |
| --- | --- |
| CreateAsync(role) | Creates a new role |
| DeleteAsync(role) | Deletes the specified role |
| FindByIdAsync(id) | Find a role by its id |
| FindByNameAsync(name) | Find a role by its name |
| RoleExistsAsync(name) | Used to check if a role with the specified name exists or not |
| UpdateAsync(name) | Updates a role |
| Roles | This property returns all the roles in the Identity |

To represent roles we will take the help of IdentityRole class of Microsoft.AspNetCore.Identity namespace. The important properties of this class are:

-   1\. Id – gives a unique identifier to the role.

-   2\. Name – defines the name of the role.
-   3\. Users – It returns a collection of IdentityUserRole objects that represents members in a given role.

## Create and Delete Roles in Identity

We now will create the functionality to **Create and Delete Roles in ASP.NET Core Identity**. Start by creating a new Controller called RoleController.cs and add the following code to it:

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

22 | `using` `Microsoft.AspNetCore.Identity;`

`using` `Microsoft.AspNetCore.Mvc;`

`namespace` `Identity.Controllers`

`{`

    `public` `class` `RoleController : Controller`

    `{`

        `private` `RoleManager<IdentityRole> roleManager;`

        `public` `RoleController(RoleManager<IdentityRole> roleMgr)`

        `{`

            `roleManager = roleMgr;`

        `}`

        `public` `ViewResult Index() => View(roleManager.Roles);`

        `private` `void` `Errors(IdentityResult result)`

        `{`

            `foreach` `(IdentityError error` `in` `result.Errors)`

                `ModelState.AddModelError(``""``, error.Description);`

        `}`

    `}`

`}` |

In the Role Controller class, we added a dependency of RoleManager class to the Constructor. The dependency injection technique provides us the RoleManager class object and then we can use it to manage Identity Roles.

```
private RoleManager<IdentityRole> roleManager;
public RoleController(RoleManager<IdentityRole> roleMgr)
{
    roleManager = roleMgr;
}
```

### Get all Identity Roles

The Roles property of the RoleManager class provides all the Identity Roles. We are returning all the roles as a model to the Index View in the Index Action method of the Role Controller. See the below code.

```
public ViewResult Index() => View(roleManager.Roles);
```

Next, create the Index View file called Index.cshtml inside the Views ➤ Role folder. Add the following code to it:

```
@model IEnumerable<IdentityRole>
@{
    ViewData["Title"] = "ROLES";
}
  
<h1 class="bg-info text-white">All Roles</h1>
<a asp-action="Create" class="btn btn-secondary">Create a Role</a>
  
<table class="table table-sm table-bordered table-bordered">
    <tr><th>ID</th><th>Name</th><th>Users</th><th>Update</th><th>Delete</th></tr>
    @foreach (var role in Model)
    {
        <tr>
            <td>@role.Id</td>
            <td>@role.Name</td>
            <td i-role="@role.Id"></td>
            <td><a class="btn btn-sm btn-primary" asp-action="Update" asp-route-id="@role.Id">Update</a></td>
            <td>
                <form asp-action="Delete" asp-route-id="@role.Id" method="post">
                    <button type="submit" class="btn btn-sm btn-danger">
                        Delete
                    </button>
                </form>
            </td>
        </tr>
    }
</table>
```

This View takes a model of type IEnumerable<IdentityRole>. It will contains all the Identity Roles, we loop through all these roles using the foreach method and then show them inside a table.

Notice the i-role attribute on the 3rd td element:

| 1 | `<td i-role=``"@role.Id"``></td>` |

This attribute will call a [Custom Tag Helper](https://www.yogihosting.com/aspnet-core-custom-tag-helpers/) which will modify this td element to display a list of all the Users who are members of each Role.

Next, create a folder on the root of the app and call it CustomTagHelpers. To this folder add a new class and call it RoleUsersTH.cs. This class will serve as a Custom TagHelper. The code of this RoleUserTH.cs is given below:

```
using Identity.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Identity.CustomTagHelpers
{
    [HtmlTargetElement("td", Attributes = "i-role")]
    public class RoleUsersTH : TagHelper
    {
        private UserManager<AppUser> userManager;
        private RoleManager<IdentityRole> roleManager;

        public RoleUsersTH(UserManager<AppUser> usermgr, RoleManager<IdentityRole> rolemgr)
        {
            userManager = usermgr;
            roleManager = rolemgr;
        }

        [HtmlAttributeName("i-role")]
        public string Role { get; set; }

        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            List<string> names = new List<string>();
            IdentityRole role = await roleManager.FindByIdAsync(Role);
            if (role != null)
            {
                foreach (var user in userManager.Users)
                {
                    if (user != null && await userManager.IsInRoleAsync(user, role.Name))
                        names.Add(user.UserName);
                }
            }
            output.Content.SetContent(names.Count == 0 ? "No Users" : string.Join(", ", names));
        }
    }
}
```

This Custom Tag Helper operates on the td elements having an i-role attribute. This attribute is used to receive the id of the role that is being processed. The RoleManager and UserManager objects fetch a list of all the users that resides in a given role.

We need to update the View Imports file (\_ViewImports.cshtml) to import:

-   1\. Microsoft.AspNetCore.Identity namespace on the views.

-   2\. The custom tag helper called RoleUsersTH.cs in the views.

The updated code of the \_ViewImports.cshtml file is given below:

| 1

2

3

4

5 | `@``using` `Identity`

`@``using` `Identity.Models`

`@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers`

`@``using` `Microsoft.AspNetCore.Identity`

`@addTagHelper Identity.CustomTagHelpers.*, Identity` |

### ASP.NET Core Identity Create Role

We use CreateAsync() method of the RoleManager class to create a new Identity Role. Our Create Action method will do this work for us. In the below code of the Role Controller, we have highlighted the create action method code.

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

39 | `using` `Microsoft.AspNetCore.Identity;`

`using` `Microsoft.AspNetCore.Mvc;`

`using` `System.ComponentModel.DataAnnotations;`

`namespace` `Identity.Controllers`

`{`

    `public` `class` `RoleController : Controller`

    `{`

        `private` `RoleManager<IdentityRole> roleManager;`

        `public` `RoleController(RoleManager<IdentityRole> roleMgr)`

        `{`

            `roleManager = roleMgr;`

        `}`

        `public` `ViewResult Index() => View(roleManager.Roles);`

        `private` `void` `Errors(IdentityResult result)`

        `{`

            `foreach` `(IdentityError error` `in` `result.Errors)`

                `ModelState.AddModelError(``""``, error.Description);`

        `}`

        `public` `IActionResult Create() => View();`

        `[HttpPost]`

        `public` `async` `Task<IActionResult> Create([Required]` `string` `name)`

        `{`

            `if` `(ModelState.IsValid)`

            `{`

                `IdentityResult result =` `await` `roleManager.CreateAsync(``new` `IdentityRole(name));`

                `if` `(result.Succeeded)`

                    `return` `RedirectToAction(``"Index"``);`

                `else`

                    `Errors(result);`

            `}`

            `return` `View(name);`

        `}`

    `}`

`}` |

The Create Action takes the Role name as a string in it’s parameter and uses the CreateAsync() method to create the Identity Role.

```
IdentityResult result = await roleManager.CreateAsync(new IdentityRole(name));
```

We will also need to add the Create.cshtml razor view inside the Views ➤ Role folder having the code as given below.

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

16 | `@model` `string`

`@{`

    `ViewData[``"Title"``] =` `"CREATE ROLE"``;`

`}`

`<h1` `class``=``"bg-info text-white"``>Create a Role</h1>`

`<a asp-action=``"Index"` `class``=``"btn btn-secondary"``>Back</a>`

`<div asp-validation-summary=``"All"` `class``=``"text-danger"``></div>`

`<form asp-action=``"Create"` `method=``"post"``>`

    `<div` `class``=``"form-group"``>`

        `<label` `for``=``"name"``>Name:</label>`

        `<input name=``"name"` `class``=``"form-control"` `/>`

    `</div>`

    `<button type=``"submit"` `class``=``"btn btn-primary"``>Create</button>`

`</form>` |

### ASP.NET Core Identity Delete Role

We use the DeleteAsync() method of the RoleManager class for deleting Identity Roles. The **Delete Role** feature is provided by the Delete Action method which takes the Role id (of the role that needs to be deleted) in it’s parameter. The Code of this action method is given below:

```
[HttpPost]
public async Task<IActionResult> Delete(string id)
{
    IdentityRole role = await roleManager.FindByIdAsync(id);
    if (role != null)
    {
        IdentityResult result = await roleManager.DeleteAsync(role);
        if (result.Succeeded)
            return RedirectToAction("Index");
        else
            Errors(result);
    }
    else
        ModelState.AddModelError("", "No role found");
    return View("Index", roleManager.Roles);
}
```

Testing Identity Create & Delete Roles Functionality

Run the project and go to the create role URL – https://localhost:7263/Role/Create. Once we create a role, we will be redirected the Index View which will show all the Roles in the Identity Database.

The create role page is shown below:

![ASP.NET Core Identity Create Role](https://www.yogihosting.com/wp-content/uploads/2018/12/create-role-identity.jpg "ASP.NET Core Identity Create Role")

The Index View has a delete button through which an **Identity Role** can be deleted from the database. Check the below image:

![ASP.NET Core Identity Delete Role](https://www.yogihosting.com/wp-content/uploads/2018/12/all-roles-identity.jpg "ASP.NET Core Identity Delete Role")

## Add Remove Users to Identity Roles

Now we will create a **Identity Update Role** functionality which will do 2 things:

1.  Add User to Role
2.  Remove User from Role

For implementing this functionality first add 2 classes called RoleEdit.cs and RoleModification.cs inside the Models folder. The codes of these classes are given below.

The RoleEdit.cs code:

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

11 | `using` `Microsoft.AspNetCore.Identity;`

`namespace` `Identity.Models`

`{`

    `public` `class` `RoleEdit`

    `{`

        `public` `IdentityRole Role {` `get``;` `set``; }`

        `public` `IEnumerable<AppUser> Members {` `get``;` `set``; }`

        `public` `IEnumerable<AppUser> NonMembers {` `get``;` `set``; }`

    `}`

`}` |

The RoleEdit class is used to represent the Role and the details of the Users who are in the role.

The RoleModification.cs code:

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

16 | `using` `System.ComponentModel.DataAnnotations;`

`namespace` `Identity.Models`

`{`

    `public` `class` `RoleModification`

    `{`

        `[Required]`

        `public` `string` `RoleName {` `get``;` `set``; }`

        `public` `string` `RoleId {` `get``;` `set``; }`

        `public` `string``[]? AddIds {` `get``;` `set``; }`

        `public` `string``[]? DeleteIds {` `get``;` `set``; }`

    `}`

`}` |

The RoleModification class code will help in doing the changes to a role.

We will now use these 2 classes to **add and remove users from an Identity Role**. For this we will add an Update action to the Role Controller.

The updated code of the RoleController.cs containing the Update Action is shown below in highlighted manner:

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

65

66

67

68

69

70

71

72

73 | `using` `Microsoft.AspNetCore.Identity;`

`using` `Microsoft.AspNetCore.Mvc;`

`using` `System.ComponentModel.DataAnnotations;`

`using` `Identity.Models;`

`namespace` `Identity.Controllers`

`{`

    `public` `class` `RoleController : Controller`

    `{`

        `private` `RoleManager<IdentityRole> roleManager;`

        `private` `UserManager<AppUser> userManager;`

        `public` `RoleController(RoleManager<IdentityRole> roleMgr, UserManager<AppUser> userMrg)`

        `{`

            `roleManager = roleMgr;`

            `userManager = userMrg;`

        `}`

        `public` `async` `Task<IActionResult> Update(``string` `id)`

        `{`

            `IdentityRole role =` `await` `roleManager.FindByIdAsync(id);`

            `List<AppUser> members =` `new` `List<AppUser>();`

            `List<AppUser> nonMembers =` `new` `List<AppUser>();`

            `foreach` `(AppUser user` `in` `userManager.Users)`

            `{`

                `var` `list =` `await` `userManager.IsInRoleAsync(user, role.Name) ? members : nonMembers;`

                `list.Add(user);`

            `}`

            `return` `View(``new` `RoleEdit`

            `{`

                `Role = role,`

                `Members = members,`

                `NonMembers = nonMembers`

            `});`

        `}`

        `[HttpPost]`

        `public` `async` `Task<IActionResult> Update(RoleModification model)`

        `{`

            `IdentityResult result;`

            `if` `(ModelState.IsValid)`

            `{`

                `foreach` `(``string` `userId` `in` `model.AddIds ??` `new` `string``[] { })`

                `{`

                    `AppUser user =` `await` `userManager.FindByIdAsync(userId);`

                    `if` `(user !=` `null``)`

                    `{`

                        `result =` `await` `userManager.AddToRoleAsync(user, model.RoleName);`

                        `if` `(!result.Succeeded)`

                            `Errors(result);`

                    `}`

                `}`

                `foreach` `(``string` `userId` `in` `model.DeleteIds ??` `new` `string``[] { })`

                `{`

                    `AppUser user =` `await` `userManager.FindByIdAsync(userId);`

                    `if` `(user !=` `null``)`

                    `{`

                        `result =` `await` `userManager.RemoveFromRoleAsync(user, model.RoleName);`

                        `if` `(!result.Succeeded)`

                            `Errors(result);`

                    `}`

                `}`

            `}`

            `if` `(ModelState.IsValid)`

                `return` `RedirectToAction(nameof(Index));`

            `else`

                `return` `await` `Update(model.RoleId);`

        `}`

    `}`

`}` |

Notice we have added a dependency of UserManager class on the controller’s constructor.

The HTTP GET version of the Update Action method is used to fetch members and non-members of a selected **Identity Role**. While the HTTP POST version of the Update Action method is used for adding or removing users from an **Identity Role**.

We have used the following members of the UserManager class to manage the ASP.NET Core Identity Roles:

| Name | Description |
| --- | --- |
| AddToRoleAsync(AppUser user, string name) | Adds a user to an Identity Role. |
| RemoveFromRoleAsync(AppUser user, string name) | Removes a user from an Identity Role. |
| GetRolesAsync(AppUser user) | Gives all the Identity Roles in which a given user is a member. |
| IsInRoleAsync(AppUser user, string name) | Returns true if the user is a member of a specified role else returns false. |

Next, add an Update.cshtml razor view file inside the Views ➤ Role folder with the following code:

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

54 | `@model RoleEdit`

`@{`

    `ViewData["Title"] = "UPDATE ROLE";`

`}`

`<``h1` `class``=``"bg-info text-white"``>Update Role</``h1``>`

`<``a` `asp-action``=``"Index"` `class``=``"btn btn-secondary"``>Back</``a``>`

`<``div` `asp-validation-summary``=``"All"` `class``=``"text-danger"``></``div``>`

`<``form` `method``=``"post"``>`

    `<``input` `type``=``"hidden"` `name``=``"roleName"` `value``=``"@Model.Role.Name"` `/>`

    `<``input` `type``=``"hidden"` `name``=``"roleId"` `value``=``"@Model.Role.Id"` `/>`

    `<``h2` `class``=``"bg-info p-1 text-white"``>Add To @Model.Role.Name</``h2``>`

    `<``table` `class``=``"table table-bordered table-sm"``>`

        `@if (Model.NonMembers.Count() == 0)`

        `{`

            `<``tr``><``td` `colspan``=``"2"``>All Users Are Members</``td``></``tr``>`

        `}`

        `else`

        `{`

            `@foreach (AppUser user in Model.NonMembers)`

            `{`

                `<``tr``>`

                    `<``td``>@user.UserName</``td``>`

                    `<``td``>`

                        `<``input` `type``=``"checkbox"` `name``=``"AddIds"` `value``=``"@user.Id"``>`

                    `</``td``>`

                `</``tr``>`

            `}`

        `}`

    `</``table``>`

    `<``h2` `class``=``"bg-info p-1 text-white"``>Remove From @Model.Role.Name</``h2``>`

    `<``table` `class``=``"table table-bordered table-sm"``>`

        `@if (Model.Members.Count() == 0)`

        `{`

            `<``tr``><``td` `colspan``=``"2"``>No Users Are Members</``td``></``tr``>`

        `}`

        `else`

        `{`

            `@foreach (AppUser user in Model.Members)`

            `{`

                `<``tr``>`

                    `<``td``>@user.UserName</``td``>`

                    `<``td``>`

                        `<``input` `type``=``"checkbox"` `name``=``"DeleteIds"` `value``=``"@user.Id"``>`

                    `</``td``>`

                `</``tr``>`

            `}`

        `}`

    `</``table``>`

    `<``button` `type``=``"submit"` `class``=``"btn btn-primary"``>Save</``button``>`

`</``form``>` |

The View has 2 HTML tables:

-   For showing users who are non-members of a selected role.

-   For showing users who are members of a selected role.

A checkbox is given against each user’s name, and through this checkbox users can be added or removed to a selected role.

Testing Update Role Feature

Make sure there are 3 Users registered in Identity. If not, then go to the URL – https://localhost:7263/Admin/Create and create the following users:

1\. Name – tom, Email – tom@yahoo.com, Password – Coder77@1  
2\. Name – alice, Email – alice@yahoo.com, Password – Coder77@1  
3\. Name – pintu, Email – pintu@yahoo.com, Password – Coder77@1

See the below image:

![create users in identity](https://www.yogihosting.com/wp-content/uploads/2018/12/create-users-in-identity.jpg "Create Users in Identity")

To test the Update Identity Role Feature, first make sure there are 3 roles created from the URL – https://localhost:7263/Role/Create.

These roles are:

1\. Manager  
2\. Developer  
3\. Admin

Notice the Users column shows No Users for each of the Roles, as shown in the image below:

![ASP.NET Core Identity Create Roles example](https://www.yogihosting.com/wp-content/uploads/2018/12/create-roles-in-identity.jpg "ASP.NET Core Identity Create Roles Example")

Now click the Update button against the Manager role which takes to the Update View where we will see 3 users (tom, alice, pintu) under the Add To Manager heading, see below image:

![ASP.NET Core Identity Update Role](https://www.yogihosting.com/wp-content/uploads/2018/12/update-role.jpg "ASP.NET Core Identity Update Role")

Next, check the tom and alice checkboxes and click the save button. This will add these 2 users to the Manager role, as shown by the given image:

![adding asp.net core identity users to a role](https://www.yogihosting.com/wp-content/uploads/2018/12/users-added-to-role.jpg "adding asp.net core identity users to a role")

Next, click the Update button of the Manager’s role once more. We will now see user called pintu shown inside the heading called Add To Manager, and tom & alice shown inside another heading called Remove From Manager.

Check the below image:

![asp.net core identity remove user from role](https://www.yogihosting.com/wp-content/uploads/2018/12/members-and-non-members-of-manager-role.jpg "asp.net core identity remove user from role")

Click the checkbox for alice and then click the save button. This will remove alice from Manger’s role. Check the below image:

![removing users from identity role](https://www.yogihosting.com/wp-content/uploads/2018/12/alice-removed-from-manager-role.jpg "removing users from identity role")

Note that a user can also be added to Multiple Roles, you can try this feature by your own. With this we just completed the **ASP.NET Core Identity Update Role** feature. Next we will see how to perform role based authentication.

## ASP.NET Core Identity Role based Authentication

**ASP.NET Core Identity Role based Authentication** ensures that only users in a specific roles are allowed to access a given resource. For example – we can include the `[Authorize(Roles = "Admin")]` attributes on an action method to specify that all Users in the “Admin” role can only access this action method.

When we add the Authorize attribute – `[Authorize(Roles = "Manager")]` to the Secured action of the Home Controller. Then it specifies that only Manager Role Users can *access* the Secured Action method of the Home Controller. The code is given below:

| 1

2

3

4

5

6

7

8

9

10 | `public` `class` `HomeController : Controller`

`{`

    `[Authorize(Roles =` `"Manager"``)]`

    `public` `async` `Task<IActionResult> Secured()`

    `{`

        `AppUser user =` `await` `userManager.GetUserAsync(HttpContext.User);`

        `string` `message =` `"Hello "` `+ user.UserName;`

        `return` `View((``object``)message);`

    `}`

`}` |

Run the application and login with user’s tom credentials. Now access the Home controller’s Secured action method (url – https://localhost:7263/Secured). Everything will work fine since user tom belongs to the Manager role.

Now log-in with user alice credentials. Since alice does not belongs to Manager’s role then we will be redirected to access denied page whose URL is https://localhost:7236/Account/AccessDenied?ReturnUrl=%2FHome%2FSecured.

Since we have not yet created the AccessDenied action on the Account controller therefore you will get HTTP ERROR 404 error. So create the action called AccessDenied in the AccountController.cs as shown by the below code:

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

18 | `using` `Identity.Models;`

`using` `Microsoft.AspNetCore.Authorization;`

`using` `Microsoft.AspNetCore.Identity;`

`using` `Microsoft.AspNetCore.Mvc;`

`namespace` `Identity.Controllers`

`{`

    `[Authorize]`

    `public` `class` `AccountController : Controller`

    `{`

        `public` `IActionResult AccessDenied()`

        `{`

            `return` `View();`

        `}`

    `}`

`}` |

Also adds the AccessDenied.cshtml view file inside the Views ➤ Account folder, and add the below shown code to it.

```
<h2 class="bg-danger mb-1 p-2 text-white">Access Denied</h2>
<a asp-controller="Account" asp-action="Logout" class="btn btn-primary">OK</a>
```

Now re-run your application and try accessing the Secured page. Log in with user alice credentials:

1\. Email – alice@yahoo.com  
2\. Password – Coder77@1

After login you we be redirected to the Access Denied URL, as shown in the below image:

![asp.net core identity role based authentication](https://www.yogihosting.com/wp-content/uploads/2018/12/access-denied-url-identity.jpg "asp.net core identity role based authentication")

The /Account/AccessDenied URL is the default URL set by Identity which can be changed by setting the AccessDeniedPath configuration property in the program class.

```
builder.Services.ConfigureApplicationCookie(opts =>
{
    opts.AccessDeniedPath = "/Stop/Index";
});
```

Remember: If we change the roles for the user who is currently authenticated in the app then the changes won’t take effect until we peform log out and re-login for the user.

Download the full source codes of this tutorial from the below link:

[Download](https://www.yogihosting.com/wp-content/themes/yogi-yogihosting/download/aspnetcore/Identity.zip)

Conclusion

This completes the tutorial on **ASP.NET Core Identity Roles** and now we are in a position to upgrade any of the app to include Identity Roles and authentication feature.

---
Source: [How to work with Roles in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-roles/)