# How to add Custom User Properties in ASP.NET Core Identity

If we want to add custom user properties like “Age, Country & Salary” to the **ASP.NET Core Identity Users** then we can do this by adding **Custom User Properties** to the User class. The User class, as we all know, inherits from the IdentityUser parent class. These new custom properties are added as new columns to the AspNetUsers table of Identity database.

![](https://www.yogihosting.com/wp-content/themes/yogi-yogihosting/Images/up-arrow.jpg)

#### This tutorial is a part of the ASP.NET Core Identity series

-   1\. [How to Setup and Configure ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-setup/)

-   2\. [How to Create, Read, Update & Delete users in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-create-read-update-delete-users/)
-   3\. [Username, Email & Password Policy in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-username-email-password-policy/)

-   4\. [How to do Authentication of Users in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-authentication/)
-   5\. [How to work with Roles in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-roles/)

-   6\. *How to add Custom User Properties in ASP.NET Core Identity*
-   7\. [How to work with Claims in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-claims/)

-   8\. [How to work with Policies in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-policies/)
-   9\. [How to integrate Google login feature in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-login-with-google/)

-   10\. [Two-Factor Authentication in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-two-factor-authentication/)
-   11\. [How to perform Email Confirmation of Users in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-email-confirmation/)

-   12\. [Creating Password Reset feature in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-password-reset/)
-   13\. [User Lockout in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-user-lockout/)

Start by adding 3 new Custom User Properties to the AppUser.cs class:

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

15 | `using` `Microsoft.AspNetCore.Identity;`

`using` `System.ComponentModel.DataAnnotations;`

`namespace` `Identity.Models`

`{`

    `public` `class` `AppUser : IdentityUser`

    `{`

        `public` `Country Country {` `get``;` `set``; }`

        `public` `int` `Age {` `get``;` `set``; }`

        `[Required]`

        `public` `string` `Salary {` `get``;` `set``; }`

    `}`

`}` |

The Country property is an Enum, the Age property is of int type, and lastly the Salary property is of type string. We made the ‘Salary’ property as a required one by providing \[Required\] attribute to it.

Next, add a new class called Country.cs inside the Models folder which will serve as the enum for Country property. It’s code is given below.

| 1

2

3

4

5

6

7 | `namespace` `Identity.Models`

`{`

    `public` `enum` `Country`

    `{`

        `USA, UK, France, Germany, Russia`

    `}`

`}` |

Now we have added **ASP.NET Core Identity Custom User Properties** to our app. Next we need to update the Identity Database. For this we will run the Entity Framework Core Migration commands.

On the Package Manager Console window, run the following 2 commands:

```
dotnet ef migrations add MigrationNew
dotnet ef database update
```

When the commands complete, the SQL table called AspNetUsers of the Identity Database (that stores user records), will contain 3 new columns added to it. These are Age, Country and Salary.

Open the AspNetUsers SQL table and check these 3 newly added columns. This is shown by the below given image.

![AspNetUsers asp.net core identity custom user properties](https://www.yogihosting.com/wp-content/uploads/2020/07/AspNetUsers-table.png "AspNetUsers asp.net core identity custom user properties")

Updating Create and Update User methods

Now we update the Create and Update Action methods of Admin Controller, to add the support for the Custom Properties that we just added. First we add these 3 new properties (Country, Age & Salary) to the User.cs class.

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

24 | `using` `System.ComponentModel.DataAnnotations;`

`namespace` `Identity.Models`

`{`

    `public` `class` `User`

    `{`

        `[Required]`

        `public` `string` `Name {` `get``;` `set``; }`

        `[Required]`

        `[RegularExpression(``"^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$"``, ErrorMessage =` `"E-mail is not valid"``)]`

        `public` `string` `Email {` `get``;` `set``; }`

        `[Required]`

        `public` `string` `Password {` `get``;` `set``; }`

        `public` `Country Country {` `get``;` `set``; }`

        `public` `int` `Age {` `get``;` `set``; }`

        `[Required]`

        `public` `string` `Salary {` `get``;` `set``; }`

    `}`

`}` |

Next, we add 3 new HTML tags for these properties in the Create & Update Views so that users can enter the values for them during registration of a new user to Identity and also when updating a previous user. These views are located inside Views ➤ Admin folder. We use the input tags for the Age and Salary properties, and for the Country property we use the select tag.

The updated code of these 2 Views are given below:

Create.cshtml

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

38 | `@model User`

`@{`

    `ViewData["Title"] = "CREATE USER";`

`}`

`<``h1` `class``=``"bg-info text-white"``>Create User</``h1``>`

`<``a` `asp-action``=``"Index"` `class``=``"btn btn-secondary"``>Back</``a``>`

`<``div` `asp-validation-summary``=``"All"` `class``=``"text-danger"``></``div``>`

`<``form` `method``=``"post"``>`

    `<``div` `class``=``"form-group"``>`

        `<``label` `asp-for``=``"Name"``></``label``>`

        `<``input` `asp-for``=``"Name"` `class``=``"form-control"` `/>`

    `</``div``>`

    `<``div` `class``=``"form-group"``>`

        `<``label` `asp-for``=``"Email"``></``label``>`

        `<``input` `asp-for``=``"Email"` `class``=``"form-control"` `/>`

    `</``div``>`

    `<``div` `class``=``"form-group"``>`

        `<``label` `asp-for``=``"Password"``></``label``>`

        `<``input` `asp-for``=``"Password"` `class``=``"form-control"` `/>`

    `</``div``>`

    `<``div` `class``=``"form-group"``>`

        `<``label` `asp-for``=``"Age"``></``label``>`

        `<``input` `asp-for``=``"Age"` `class``=``"form-control"` `/>`

    `</``div``>`

    `<``div` `class``=``"form-group"``>`

        `<``label` `asp-for``=``"Country"``></``label``>`

        `<``select` `asp-for``=``"Country"` `class``=``"form-control"` `asp-items``=``"@new SelectList(Enum.GetNames(typeof(Country)))"``>`

            `<``option` `selected disabled` `value``=``"Select"``>Select Country</``option``>`

        `</``select``>`

    `</``div``>`

    `<``div` `class``=``"form-group"``>`

        `<``label` `asp-for``=``"Salary"``></``label``>`

        `<``input` `asp-for``=``"Salary"` `class``=``"form-control"` `/>`

    `</``div``>`

    `<``button` `type``=``"submit"` `class``=``"btn btn-primary"``>Create</``button``>`

`</``form``>` |

Update.cshtml

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

38 | `@model AppUser`

`@{`

    `ViewData["Title"] = "UPDATE USER";`

`}`

`<``h1` `class``=``"bg-info text-white"``>Update User</``h1``>`

`<``a` `asp-action``=``"Index"` `class``=``"btn btn-secondary"``>Back</``a``>`

`<``div` `asp-validation-summary``=``"All"` `class``=``"text-danger"``></``div``>`

`<``form` `asp-action``=``"Update"` `method``=``"post"``>`

    `<``div` `class``=``"form-group"``>`

        `<``label` `asp-for``=``"Id"``></``label``>`

        `<``input` `asp-for``=``"Id"` `class``=``"form-control"` `disabled />`

    `</``div``>`

    `<``div` `class``=``"form-group"``>`

        `<``label` `asp-for``=``"Email"``></``label``>`

        `<``input` `asp-for``=``"Email"` `class``=``"form-control"` `/>`

    `</``div``>`

    `<``div` `class``=``"form-group"``>`

        `<``label` `for``=``"password"``>Password</``label``>`

        `<``input` `name``=``"password"` `class``=``"form-control"` `/>`

    `</``div``>`

    `<``div` `class``=``"form-group"``>`

        `<``label` `asp-for``=``"Age"``></``label``>`

        `<``input` `asp-for``=``"Age"` `class``=``"form-control"` `/>`

    `</``div``>`

    `<``div` `class``=``"form-group"``>`

        `<``label` `asp-for``=``"Country"``></``label``>`

        `<``select` `asp-for``=``"Country"` `class``=``"form-control"` `asp-items``=``"@new SelectList(Enum.GetNames(typeof(Country)))"``>`

            `<``option` `selected disabled` `value``=``"Select"``>Select Country</``option``>`

        `</``select``>`

    `</``div``>`

    `<``div` `class``=``"form-group"``>`

        `<``label` `asp-for``=``"Salary"``></``label``>`

        `<``input` `asp-for``=``"Salary"` `class``=``"form-control"` `/>`

    `</``div``>`

    `<``button` `type``=``"submit"` `class``=``"btn btn-primary"``>Save</``button``>`

`</``form``>` |

Finally, update the Create and Update actions of the Admin controller as shown in highlighted manner below.

Create Action

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

25 | `[HttpPost]`

`public` `async` `Task<IActionResult> Create(User user)`

`{`

    `if` `(ModelState.IsValid)`

    `{`

        `AppUser appUser =` `new` `AppUser`

        `{`

            `UserName = user.Name,`

            `Email = user.Email,`

            `Country = user.Country,`

            `Age = user.Age,`

            `Salary = user.Salary`

        `};`

        `IdentityResult result =` `await` `userManager.CreateAsync(appUser, user.Password);`

        `if` `(result.Succeeded)`

            `return` `RedirectToAction(``"Index"``);`

        `else`

        `{`

            `foreach` `(IdentityError error` `in` `result.Errors)`

                `ModelState.AddModelError(``""``, error.Description);`

        `}`

    `}`

    `return` `View(user);`

`}` |

There is just one change where we are adding the new custom properties values to the AppUser class object:

```
Country = user.Country,
Age = user.Age,
Salary = user.Salary
```

Update Action

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

40 | `[HttpPost]`

`public` `async` `Task<IActionResult> Update(``string` `id,` `string` `email,` `string` `password,` `int` `age,` `string` `country,` `string` `salary)`

`{`

    `AppUser user =` `await` `userManager.FindByIdAsync(id);`

    `if` `(user !=` `null``)`

    `{`

        `if` `(!``string``.IsNullOrEmpty(email))`

            `user.Email = email;`

        `else`

            `ModelState.AddModelError(``""``,` `"Email cannot be empty"``);`

        `if` `(!``string``.IsNullOrEmpty(password))`

            `user.PasswordHash = passwordHasher.HashPassword(user, password);`

        `else`

            `ModelState.AddModelError(``""``,` `"Password cannot be empty"``);`

        `user.Age = age;`

        `Country myCountry;`

        `Enum.TryParse(country,` `out` `myCountry);`

        `user.Country = myCountry;`

        `if` `(!``string``.IsNullOrEmpty(salary))`

            `user.Salary = salary;`

        `else`

            `ModelState.AddModelError(``""``,` `"Salary cannot be empty"``);`

        `if` `(!``string``.IsNullOrEmpty(email) && !``string``.IsNullOrEmpty(password) && !``string``.IsNullOrEmpty(salary))`

        `{`

            `IdentityResult result =` `await` `userManager.UpdateAsync(user);`

            `if` `(result.Succeeded)`

                `return` `RedirectToAction(``"Index"``);`

            `else`

                `Errors(result);`

        `}`

    `}`

    `else`

        `ModelState.AddModelError(``""``,` `"User Not Found"``);`

    `return` `View(user);`

`}` |

The changes which we have done to this action are:

-   1\. Added the 3 new parameters to the method.

```
int age, string country, string salary
```

-   2\. Set the values of these 3 new properties to the AppUser class.

```
user.Age = age;
 
Country myCountry;
Enum.TryParse(country, out myCountry);
user.Country = myCountry;
 
if (!string.IsNullOrEmpty(salary))
    user.Salary = salary;
else
    ModelState.AddModelError("", "Salary cannot be empty");
```

-   3\. Checked if salary value is not null or empty in the if block.

```
if (!string.IsNullOrEmpty(email) && !string.IsNullOrEmpty(password) && !string.IsNullOrEmpty(salary))
{
...
}
```

Testing the Custom User Properties

To test these newly added Custom User Properties, run the project and go to the Create User page whose URL is https://localhost:7263/Admin/Create. In this page we will see these 3 new fields which we added, as shown by the below image. Create a new user with the following details:

1\. Name – mary  
2\. Email – mary@yahoo.com  
3\. Password – Coder77@  
4\. Age – 20  
5\. Country – USA  
6\. Salary – 5000

![asp.net core identity custom user properties example](https://www.yogihosting.com/wp-content/uploads/2018/12/custom-user-properties-in-add-user-view.jpg "asp.net core Identity custom user properties example")

Once the user is created, click to update it’s records. This will take us to the Update View where we will see all the new value, which we added, inside the 3 respective fields. See the below image:

![custom user properties identity](https://www.yogihosting.com/wp-content/uploads/2018/12/custom-user-properties-in-update-view.jpg "Custom User Properties in Identity")

This completes the tutorial, now download the full source codes from the below link:

[Download](https://www.yogihosting.com/wp-content/themes/yogi-yogihosting/download/aspnetcore/Identity_Property.zip)

Conclusion

In this tutorial on **ASP.NET Core Identity Custom User Properties** we learned the way to add new fields to the Identity user. Now we can easily add as many new fieds to the Identity Users as we like.

---
Source: [How to add Custom User Properties in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-custom-user-properties/)