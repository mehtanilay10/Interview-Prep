# Views in ASP.NET Core

ASP.NET Core Views create the UI for the app. Views are files with .cshtml extension. A View file contains HTML and Razor markups for creating the design for the UI. Views can be 3 main types:

1.  Views preciously for single Action methods
2.  Shared Views – that are shared between different controllers.
3.  Layouts – to provide consistent design for the app.
4.  Partial views – to reduce code duplication.
5.  View components – to reduce code duplication and also allow code to run on the server for rendering the webpage.

In this tutorial I will continue on the same project which I created on [Actions in ASP.NET Core](https://www.yogihosting.com/aspnet-core-actions/) tutorial. However you can still understand all the topics covered here even if you haven’t read the previous tutorial.

Page Contents

## How to create a View in ASP.NET Core ?

A Razor View file serves as a view for an action method. This file has to be created inside the Views ➤ ControllerName folder. Take for example we have a CityController.cs file in my app. This controller has an action method called NewYork.

```
public class CityController : Controller
{
    public IActionResult NewYork()
    {
        return View();
    }
}
```

For this action method, we should create it’s View inside the Views ➤ City folder. Note that we will use the folder name without “Controller” word, so it is “City” and not “CityController”.

Therefore first create a new folder called City inside the “Views” folder of the app. Then right click on this newly created “City” folder and select Add ➤ New Item, from the dialog box – select Razor View – Empty and name the view as NewYork.cshtml.

![razor view empty](https://www.yogihosting.com/wp-content/uploads/2022/04/razor-view-empty.png)

The View will be empty by default so just add a welcome message to it inside h1 tag.

```
<h1>Welcome to New York</h1>
```

Now run your app and go to the URL – https://localhost:7113/City/NewYork, here you will see the view is rendered on the browser.

![view rendered browser](https://www.yogihosting.com/wp-content/uploads/2022/04/view-rendered-browser.png)

Note that this view is preciously for action method “NewYork”. If another action is added say “Boston” in the same “CityController”.

```
public class CityController : Controller
{
    public IActionResult NewYork()
    {
        return View();
    }

    public IActionResult Boston()
    {
        return View();
    }
}
```

Now we will have to create Boston.cshtml razor view file inside the Views ➤ City folder. It simply shows welcome message:

```
<h1>Welcome to Boston</h1>
```

In the below image I has shown these 2 views location in the app.

![views location asp.net core](https://www.yogihosting.com/wp-content/uploads/2022/04/views-location-553x520.png)

Shortcut for adding Views in Visual Studio

There is a shortcut in Visual Studio to quickly add views for an action method. Just right click on the action method’s name and on the menu select Add View. Visual studio will open the dialog box where you can select Razor View and give the name for your View. Note that visual studio will even create the necessary view folder and will put this view file inside it.

![adding view shortcut visual studio](https://www.yogihosting.com/wp-content/uploads/2022/04/adding-view-shortcut-visual-studio.png)

Logical codes on View with Razor Syntax

You can put razor codes in Views to self-contained pieces of logic, such as if and foreach statements. Example: Adding inline if-else block in the view:

```
@if (DateTime.Now.DayOfWeek == DayOfWeek.Monday)
{
    <p>It's a Boring Day</p>
}
else
{
    <p>It's a Party Day</p>
}
```

You can also have block of codes in your View such as:

```
@{
    string[] countries = new string[] { "England", "France", "Germany", "China" };
    <ul>
        @foreach (string country in countries)
        {
            <li>@country</li>
        }
    </ul>
}
```

## How to call action method from view in ASP.NET Core ?

On the view file, add an HTML form with a submit button. When this button is clicked, the form is submitted to the corrsponding action URL. This url is set with the form’s action attribute property. We create form’s action url mainly by using 2 tag helpers:

1.  asp-controller – specifies the name of the controller. If this parameter is omitted then dot net will take it as the controller associated with the currently executing view.
2.  asp-action – specifies the name of the action method. If omitted then dot net will take it as the “action method” associated with the currently executing view.

Example: Update the NewYork.cshtml view file to include a form as shown below.

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

17 | `<``h1``>Welcome to New York</``h1``>`

`<``form` `asp-controller``=``"City"` `asp-action``=``"NewYork"` `method``=``"post"``>`

    `<``div` `class``=``"form-group"``>`

        `<``label``>Name:</``label``>`

        `<``input` `class``=``"form-control"` `name``=``"name"` `/>`

    `</``div``>`

    `<``div` `class``=``"form-group"``>`

        `<``label``>Sex:</``label``>`

        `<``select` `class``=``"form-control"` `name``=``"sex"``>`

            `<``option` `value``=``"M"``>Male</``option``>`

            `<``option` `value``=``"F"``>Female</``option``>`

        `</``select``>`

    `</``div``>`

    `<``div` `class``=``"m-1"``>`

        `<``button` `class``=``"btn btn-primary"` `type``=``"submit"``>Submit</``button``>`

    `</``div``>`

`</``form``>` |

Notice we have created the action’s url using the 2 tag helpers – `asp-controller="City" asp-action="NewYork"`. So this means when the form is submitted the “NewYork” action of “CityController” will be invoked. Also added is the `method="post"` attribute which tells to invoke the “post” version of the action method.

```
<form asp-controller="City" asp-action="NewYork" method="post">
```

This form also has 2 html controls where we can enter our name and sex. When this form is submitted the controls values are received on the action method.

```
<input class="form-control" name="name" />

<select class="form-control" name="sex">
    <option value="M">Male</option>
    <option value="F">Female</option>
</select>
```

Now add the HTTP POST version of NewYork action method on the “CityController” as shown below.

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

23 | `using` `Microsoft.AspNetCore.Mvc;`

`namespace` `UnderstandingControllersViews.Controllers`

`{`

    `public` `class` `CityController : Controller`

    `{`

        `public` `IActionResult NewYork()`

        `{`

            `return` `View();`

        `}`

        `[HttpPost]`

        `public` `IActionResult NewYork(``string` `name,` `string` `sex)`

        `{`

            `return` `View();`

        `}`

        `public` `IActionResult Boston()`

        `{`

            `return` `View();`

        `}`

    `}`

`}` |

Note that to capture the values of the 2 controls we need to add 2 parameters having the “same names” of the 2 controllers – string name, string sex.

Now run the app and go to the URL – https://localhost:7113/City/NewYork. Fill and submit the form and you will get the values of the controls in the action method. You can check these values by putting a breakpoint on the action method. I have shown this clearly in the below image.

![call action method from view asp.net core](https://www.yogihosting.com/wp-content/uploads/2022/04/call-action-method-from-view-aspnet-core.png)

Shared Views are kept inside the Views ➤ Shared folder. They can be shared among different action method located in the app. Let’s understand them with an example. In HomeController.cs file, create a new action called CallSharedView as shown below:

```
public IActionResult CallSharedView()
{
    return View();
}
```

Now, copy and paste the CallSharedView action method’s code on another controller called ExampleController.cs. This means we have “CallSharedView” on 2 controllers – Home and Example.

For both these 2 action method we will create a Shared View. So add a new Razor View file inside the Views ➤ Shared folder and name it CallSharedView.cshtml which is the name of the action method in both the controllers.

The view is fairly simple and just shows a message inside h1 tag.

```
<h1>Displaying from Shared View</h1>
```

ASP.NET Core keeps tract of all the shared views and makes them available to action methods whenever a need arises. Run your application and open the following 2 URLs on the browser. These 2 URLs initiates the 2 action methods we created earlier.

`1. http:`

`2. http:`

In both of these URL you will find the shared view getting invoked, as shown in the image below:

![shared views asp.net core](https://www.yogihosting.com/wp-content/uploads/2019/01/shared-view.png)

## How ASP.NET Core searches the View file

ASP.NET Core begins the search for a view file for an action method in the following 2 locations:

| 1

2 | `/Views/<``ControllerName``>/<``ViewName``>.cshtml`

`/Views/Shared/<``ViewName``>.cshtml` |

For example consider the “List” Action method of the AdminController, which on the last line calls the View() method.

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

12 | `using` `Microsoft.AspNetCore.Mvc;`

`namespace` `UnderstandingControllersViews.Controllers`

`{`

    `public` `class` `AdminController : Controller`

    `{`

        `public` `IActionResult List()`

        `{`

            `return` `View();`

        `}`

    `}`

`}` |

ASP.NET Core will now look for the View files in the 2 locations:

-   1\. /Views/Admin/List.cshtml => If it finds the file here then it renders this View file. If not, then the point no 2 location is searched.

-   2\. /Views/Shared/List.cshtml => If it finds the file here then it renders this View file. If not then View not found error is shown on the browser.

Since we have not added the Razor View file for this “List” action. It makes an ideal situation to find out the error message ASP.NET Core will give us. So run the project and go to the url – https://localhost:7113/Admin/List. You will see an exception message telling the view is not found.

See the below screenshot of this error message where I have marked the 2 locations where the view file is searched.

![](https://www.yogihosting.com/wp-content/uploads/2020/06/views-location-for-controllers.png "Views Location for Controllers")

To remove this exceptions you can simply add a Razor View file called List.cshtml inside either /Views/Admin or /Views/Shared folder.

Views for Areas

If the Controller is the part of an ASP.NET Core Area then the following 3 locations are searched:

| 1

2

3 | `/Areas/<``AreaName``>/Views/<``ControllerName``>/<``ViewName``>.cshtml`

`/Areas/<``AreaName``>/Views/Shared/<``ViewName``>.cshtml`

`/Views/Shared/<``ViewName``>.cshtml` |

Let’s understand this by an example. So first add a new folder called Areas on the root of the app. Next create a new folder called Sales inside the Areas folder.

Now add a new [ASP.NET Core Controller](https://www.yogihosting.com/aspnet-core-controllers/) called AdminController inside the Areas ➤ Sales folder. Inside this controller add a new action called List whose code is shown below.

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

13 | `using` `Microsoft.AspNetCore.Mvc;`

`namespace` `UnderstandingControllersViews.Areas.Sales`

`{`

    `[Area(``"Sales"``)]`

    `public` `class` `AdminController : Controller`

    `{`

        `public` `IActionResult List()`

        `{`

            `return` `View(``"Show"``);`

        `}`

    `}`

`}` |

Also add the area route in the Program.cs class as shown in highlighted color.

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

13 | `........`

`app.UseAuthorization();`

`app.UseSession();`

`app.MapControllerRoute(`

    `name:` `"MyArea"``,`

    `pattern:` `"{area:exists}/{controller=Home}/{action=Index}/{id?}"``);`

`app.MapControllerRoute(`

    `name:` `"default"``,`

    `pattern:` `"{controller=Home}/{action=Index}/{id?}"``);`

`app.Run();` |

Run the app and open the url – https://localhost:7113/Sales/Admin/List in the browser. You will see an error since the view file is not present. ASP.NET Core has now searched for the View file in the following 3 locations:

-   1\. /Areas/Sales/Views/Admin/Show.cshtml => If it finds the file in this location then it renders this View file. If not, then the 2nd location is searched.

-   2\. /Areas/Sales/Views/Shared/Show.cshtml => If it finds the view file here then it renders it. If not, then the 3rd location is searched.
-   3\. /Views/Shared/Show.cshtml => If it finds the view file here then it renders it else View not found error is shown in the browser.

See the below image to find the **error displayed** on the browser and the **View locations** checked by ASP.NET Core.

![location of views for areas](https://www.yogihosting.com/wp-content/uploads/2020/06/location-of-views-for-areas.png "Location of Views for Areas")

## ASP.NET Core Layout View

The **UI of an application** whether built in ASP.NET Core or any other technology will always contain common parts that remain the same throughout the application. Examples of such parts are logo, header menu, left navigation bar, right bar or footer section. ASP.NET Core has a Layout view called \_Layout.cshtml which contains these common UI parts. The Layout View must resides inside the Views ➤ Shared folder.

Note: If your app already has the layout file then kindly delete it (or rename it) for the sake of this tutorial since we will be recreating it from the start. This will help you to understand each and every part of the layout correctly.

In the Solution Explorer, right click on the Shared folder and select Add ➤ New Item. Then select the Razor Layout from the item list and name it “\_Layout.cshtml”. Click the Add button to create the layout file in the app.

![Razor Layout](https://www.yogihosting.com/wp-content/uploads/2020/06/razor-layout.png "Razor Layout")

The \_Layout.cshtml will be created and will open for editing. It will have the following code by default.

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

13 | `<!``DOCTYPE` `html>`

`<``html``>`

`<``head``>`

    `<``meta` `name``=``"viewport"` `content``=``"width=device-width"` `/>`

    `<``title``>@ViewBag.Title</``title``>`

`</``head``>`

`<``body``>`

    `<``div``>`

        `@RenderBody()`

    `</``div``>`

`</``body``>`

`</``html``>` |

As you can clearly see it contains HTML blocks with few Razor markups like @ViewBag.Title which sets the page title from ViewBag variable, and @RenderBody() which renders all the content of child view which is not wrapped in a section. I will tell you about Sections in just a moment but before that let’s understand how layout works.

### What is Razor View Start file ?

Razor View Start file is “\_ViewStart.cshtml” file located inside the “Views” folder. It contains code that runs before any view is rendered. It’s code is fairly simple and just tells dot net to apply “\_Layout.cshtml” as the default layout for each and every view in the app. See it’s code below.

| 1

2

3 | `@{`

    `Layout = "_Layout";`

`}` |

The View Start file is not necessary for an application. If this file is absent then we will need to tell the views about a default layout by adding the below razor code on each of them.

| 1

2

3 | `@{`

    `Layout = Layout;`

`}` |

Thus having a view start file can remove a lot of redundant code. Similarly, if an application has a View Start file but we do not want the views to have any layout file applied to them. Then in this case add @{ Layout = null; } on these views.

## Designing Layout with Bootstrap

We can create very good designs by using Bootstrap package. So first we need to [Install Bootstrap package in our ASP.NET Core](https://www.yogihosting.com/install-bootstrap-aspnet-core/) app. Once installed you will find the package inside wwwroot ➤ lib ➤ bootstrap folder. Note that Boostrap comes preinstalled on projects created with ASP.NET Core Web App (Model-View-Controller) template. So kindly check the wwwroot folder to find if it is already there.

Now we do add 3 design portions in the \_Layout.cshml. These are:

1.  Add bootstrap.min.css stylesheet reference on the head area.
2.  Add bootstrap navigation menu with links to different action methods on our app. It is added inside the header area.
3.  Add footer area at the bottom.

I have shown all these in highlighted manner below.

Now add a new Action to the Home Controller and name it TestLayout. It’s code is given below:

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

59 | `<!``DOCTYPE` `html>`

`<``html``>`

`<``head``>`

    `<``meta` `name``=``"viewport"` `content``=``"width=device-width"` `/>`

    `<``title``>@ViewData["Title"]</``title``>`

    `<``link` `rel``=``"stylesheet"` `href``=``"~/lib/bootstrap/dist/css/bootstrap.min.css"` `/>`

`</``head``>`

`<``body``>`

    `<``header``>`

        `<``nav` `class``=``"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3"``>`

            `<``div` `class``=``"container-fluid"``>`

                `<``a` `class``=``"navbar-brand"` `asp-area``=``""` `asp-controller``=``"Home"` `asp-action``=``"Index"``>UnderstandingControllersViews</``a``>`

                `<``button` `class``=``"navbar-toggler"` `type``=``"button"` `data-bs-toggle``=``"collapse"` `data-bs-target``=``".navbar-collapse"` `aria-controls``=``"navbarSupportedContent"`

                        `aria-expanded``=``"false"` `aria-label``=``"Toggle navigation"``>`

                    `<``span` `class``=``"navbar-toggler-icon"``></``span``>`

                `</``button``>`

                `<``div` `class``=``"navbar-collapse collapse d-sm-inline-flex justify-content-between"``>`

                    `<``ul` `class``=``"navbar-nav flex-grow-1"``>`

                        `<``li` `class``=``"nav-item"``>`

                            `<``a` `class``=``"nav-link text-dark"` `asp-controller``=``"Home"` `asp-action``=``"Index"``>Home</``a``>`

                        `</``li``>`

                        `<``li` `class``=``"nav-item"``>`

                            `<``a` `class``=``"nav-link text-dark"` `asp-controller``=``"City"` `asp-action``=``"NewYork"``>New York</``a``>`

                        `</``li``>`

                        `<``li` `class``=``"nav-item"``>`

                            `<``a` `class``=``"nav-link text-dark"` `asp-controller``=``"City"` `asp-action``=``"Boston"``>Boston</``a``>`

                        `</``li``>`

                        `<``li` `class``=``"nav-item"``>`

                            `<``a` `class``=``"nav-link text-dark"` `asp-controller``=``"Home"` `asp-action``=``"CallSharedView"``>Shared View</``a``>`

                        `</``li``>`

                        `<``li` `class``=``"nav-item"``>`

                            `<``a` `class``=``"nav-link text-dark"` `asp-controller``=``"Example"` `asp-action``=``"CallSharedView"``>Shared View</``a``>`

                        `</``li``>`

                        `<``li` `class``=``"nav-item"``>`

                            `<``a` `class``=``"nav-link text-dark"` `asp-controller``=``"Admin"` `asp-action``=``"List"``>Search View</``a``>`

                        `</``li``>`

                        `<``li` `class``=``"nav-item"``>`

                            `<``a` `class``=``"nav-link text-dark"` `asp-area``=``"Sales"` `asp-controller``=``"Admin"` `asp-action``=``"List"``>Area View</``a``>`

                        `</``li``>`

                    `</``ul``>`

                `</``div``>`

            `</``div``>`

        `</``nav``>`

    `</``header``>`

    `<``div` `class``=``"container"``>`

        `<``main` `role``=``"main"` `class``=``"pb-3"``>`

            `@RenderBody()`

        `</``main``>`

    `</``div``>`

    `<``footer` `class``=``"border-top footer text-muted"``>`

        `<``div` `class``=``"container"``>`

            `ASP.NET Core Site`

        `</``div``>`

    `</``footer``>`

`</``body``>`

`</``html``>` |

Do not get bogged down with this long boostrap code. It is actually a pre-build code available on boostrap website. As an Dot NET developer you only have to understand how this code is added and not how to build this code. Most important thing is to see how I have added – menu links with asp-area, asp-controller and asp-action tag helpers, and @RenderBody() inside the layout.

Now we have created a very good common design for our app. Now we can test it by creating a new action method called TestLayout in the HomeController.cs file.

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

15 | `using` `Microsoft.AspNetCore.Mvc;`

`using` `UnderstandingControllersViews.Models;`

`namespace` `UnderstandingControllersViews.Controllers`

`{`

    `public` `class` `HomeController : Controller`

    `{`

        `public` `IActionResult TestLayout()`

        `{`

            `ViewBag.Title =` `"Welcome to TestLayout"``;`

            `return` `View();`

        `}`

    `}`

`}` |

In this action I am setting the ViewBag.Title variable to a string Welcome to TestLayout. The layout will read this value and show it in the page title.

Also add the TestLayout view inside the Views ➤ Home folder with code given below:

| 1

2 | `<``h2` `class``=``"text-primary"``>TestLayout starts here</``h2``>`

`<``p` `class``=``"text-success"``>This text is coming from child view</``p``>` |

The view code is very simple and contains just 2 lines. This view will server as a child view of “\_Layout.cshtml”. Recall we discussed @RenderBody() before, it’s function is to render this child view inside of \_Layout.cshtml file at the place where @RenderBody() code is called.

Run the app and open the url – https://localhost:7113/Home/TestLayout. You will see the layout file providing the bootstrap design to the page as shown by the below image.

![](https://www.yogihosting.com/wp-content/uploads/2022/04/layout-child-view-aspnet-core.png)

## Layout Sections

**Layout Sections** help us to insert contents of child Views at specified locations inside the layout file. This simplies the designing process of the app. Sections are defined in the child views by using the @Section razor expression followed by the name of the section. On the Layout view we use @RenderSection for rendering these sections.

Let’s add 3 layout sections to the TestLayout.cshtml as shown below. These sections are:

1.  Top
2.  Bottom
3.  Script

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

12 | `@section Top {`

    `<``div` `class``=``"p-3 mb-2 bg-primary text-white"``>This is Top</``div``>`

`}`

`@section Bottom {`

    `<``div` `class``=``"p-3 mb-2 bg-info text-white"``>This is Bottom</``div``>`

`}`

`@section Script {`

    `<``script` `src``=``"https://code.jquery.com/jquery-3.2.1.min.js"``></``script``>`

`}`

`<``h2` `class``=``"text-primary"``>TestLayout starts here</``h2``>`

`<``p` `class``=``"text-success"``>This text is coming from child view</``p``>` |

We can name these sections anything and they can contain html and razor codes. Here I have added simple divs with some text on Top and Bottom sections. On the Script section I have included jQuery.

Next on your **Layout file** of the app (\_Layout.cshtml), we use razor expression @RenderSection for rendering these sections. See the updated code of the \_Layout.cshtml file given below. The added codes are highlighted.

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

30 | `<!``DOCTYPE` `html>`

`<``html``>`

`<``head``>`

    `<``meta` `name``=``"viewport"` `content``=``"width=device-width"` `/>`

    `<``title``>@ViewData["Title"]</``title``>`

    `<``link` `rel``=``"stylesheet"` `href``=``"~/lib/bootstrap/dist/css/bootstrap.min.css"` `/>`

`</``head``>`

`<``body``>`

    `<``header``>`

    `...`

    `</``header``>`

    `@RenderSection("Top")`

    `<``div` `class``=``"container"``>`

        `<``main` `role``=``"main"` `class``=``"pb-3"``>`

            `@RenderBody()`

        `</``main``>`

    `</``div``>`

    `@RenderSection("Bottom")`

    `@RenderSection("Script")`

    `<``footer` `class``=``"border-top footer text-muted"``>`

    `....`

    `</``footer``>`

`</``body``>`

`</``html``>` |

Let us now test it. Open the https://localhost:7113/Home/TestLayout URL, you will find it’s design as shown by the image given below:

![layout sections in asp.net core](https://www.yogihosting.com/wp-content/uploads/2022/04/layout-sections-aspnet-core.png "Sections in Layout")

By now you may have got a good idea how necessary sections are for designing html designs in the layout file. Also note that we can define as many Layout Sections as needed. But it is necessary to defines all section in the child views for which there is a layout section in the layout file, failing to do so results in an runtime error.

### Layout Optional Sections

Optional Layout sections are those for which we do not have to necessarily define them in child views. Let’s understand them with example.

Add another section called Ads to the layout file as shown below.

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

32 | `<!``DOCTYPE` `html>`

`<``html``>`

`<``head``>`

    `<``meta` `name``=``"viewport"` `content``=``"width=device-width"` `/>`

    `<``title``>@ViewData["Title"]</``title``>`

    `<``link` `rel``=``"stylesheet"` `href``=``"~/lib/bootstrap/dist/css/bootstrap.min.css"` `/>`

`</``head``>`

`<``body``>`

    `<``header``>`

    `...`

    `</``header``>`

    `@RenderSection("Top")`

    `<``div` `class``=``"container"``>`

        `<``main` `role``=``"main"` `class``=``"pb-3"``>`

            `@RenderBody()`

        `</``main``>`

    `</``div``>`

    `@RenderSection("Bottom")`

    `@RenderSection("Ads")`

    `@RenderSection("Script")`

    `<``footer` `class``=``"border-top footer text-muted"``>`

    `....`

    `</``footer``>`

`</``body``>`

`</``html``>` |

Here we do not define this section in the TestLayout.cshtml view which is the Child View. Now run the app and you will see an unhandled exception saying:

```
InvalidOperationException: The layout page '/Views/Shared/_Layout.cshtml' 
cannot find the section 'Ads' in the content page 
'/Views/Home/TestLayout.cshtml'
```

![error due to missing layout section](https://www.yogihosting.com/wp-content/uploads/2019/01/error-due-to-missing-section.png "Error due to Missing Layout Section")

The reason is that the DOT NET needs this section in the child View as we have added this section in layout view. When `@RenderSection` is called then dot net does not finds this section on the child view and so gives the runtime error.

One way to remove this error is by adding the section in the TestLayout.cshtml view file:

```
@section Ads {
}
```

There is also another way to resolve this error – by making this section as optional in the layout page. With optional section dot net will simply ignore it if it does not finds the section in the child view..

Section can be made optional by passing **false** as the second argument to the @RenderSection.

So go to your Layout page and change `@RenderSection("Ads")` to `@RenderSection("Ads", false)` and that will make this section optional.

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

32 | `<!``DOCTYPE` `html>`

`<``html``>`

`<``head``>`

    `<``meta` `name``=``"viewport"` `content``=``"width=device-width"` `/>`

    `<``title``>@ViewData["Title"]</``title``>`

    `<``link` `rel``=``"stylesheet"` `href``=``"~/lib/bootstrap/dist/css/bootstrap.min.css"` `/>`

`</``head``>`

`<``body``>`

    `<``header``>`

    `...`

    `</``header``>`

    `@RenderSection("Top")`

    `<``div` `class``=``"container"``>`

        `<``main` `role``=``"main"` `class``=``"pb-3"``>`

            `@RenderBody()`

        `</``main``>`

    `</``div``>`

    `@RenderSection("Bottom")`

    `@RenderSection("Ads", false)`

    `@RenderSection("Script")`

    `<``footer` `class``=``"border-top footer text-muted"``>`

    `....`

    `</``footer``>`

`</``body``>`

`</``html``>` |

Rerun your application and this time everything will work perfectly.

## ASP.NET Core Partial Views

**Partial Views** are normal View files (.cshtml files) whose content can be included in other Views. This means the same partial view can be used at multiple places and this eliminates the redundant code. Example – If we have repeating contents in more than one views of our app. Here we can put this repeating content in a partial view file and load this file in our other views who needs it. This way you can prevent code duplication.

ASP.NET Core MVC looks for Partial View in the same way like Regular Views (i.e. in Views/<controller> and Views/Shared folders). This means you can create controller specific partial views or shared partial views.

### Example of a Partial View

Right click the Views ➤ Shared folder and select Add ➤ View. Select Razor View – Empty from the option and name it as TestPartialView.cshtml, and click the Add button to create it.

Add the following code to it:

```
@model List<string>
<div class="border border-warning">
    This is partial View:
    <ul>
        @foreach (string str in Model)
	{
	    <li>@str</li>
	}
    </ul>
</div>
```

The partial View accepts a List type string model and then loops through the items of the model and shows them inside li tags. The partial view is made, now to call this **Partial View** from another View we use the Razor expression @await Html.PartialAsync(“name\_of\_partialview”, model).

Go to the TestLayout.cshtml View which we created earlier and call the partial view by adding the expression –

```
@await Html.PartialAsync("TestPartialView", new List<string> { 
    "Classic ASP", "ASP.NET Web Forms", "ASP.NET MVC", "ASP.NET Core MVC" 
})
```

The updated view’s code is shown below highlighted.

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

16 | `@section Top {`

    `<``div` `class``=``"p-3 mb-2 bg-primary text-white"``>This is Top</``div``>`

`}`

`@section Bottom {`

    `<``div` `class``=``"p-3 mb-2 bg-info text-white"``>This is Bottom</``div``>`

`}`

`@section Script {`

    `<``script` `src``=``"https://code.jquery.com/jquery-3.2.1.min.js"``></``script``>`

`}`

`<``h2` `class``=``"text-primary"``>TestLayout starts here</``h2``>`

`<``p` `class``=``"text-success"``>This text is coming from child view</``p``>` 

`@await Html.PartialAsync("TestPartialView", new List<``string``> {`

    `"Classic ASP", "ASP.NET Web Forms", "ASP.NET MVC", "ASP.NET Core MVC"`

`})` |

Notice I passed the name of the Partial View to the @await Html.PartialAsync() expression and dot net will find it from the “Shared” folder. If we keep the partial view in some another location then we can provide it’s full path instead of just the name.

Run the application and go to the URL – https://localhost:7113/Home/TestLayout. You will find the content of the partial view added to the View. This is shown by the image below:

![partial view asp.net core](https://www.yogihosting.com/wp-content/uploads/2022/04/partial-view.png "Partial View")

## ASP.NET Core View Components

**View Components** are somewhat like partial views but they have many differences. View Components can be very powerful since we can create server side logics in them. This is very difficult for a partial views to have. View Components are C# classes (have .cs extension) that can be called from a View and we can also provide them with model data.

I have listed out some complex tasks where you will need View Components and “not” Partial Views –

-   1\. Creating Authentication Panels in sites for users to log in without visiting a separate login page.

-   2\. Creating dynamic site navigation system which changes according to user’s role.
-   3\. Shopping Cart panels which shows the products currently in the cart.

-   4\. Dependency Injection feaures.

Imagine doing such tasks with only partial views and you can imagine the headaches. So view components comes to our rescue.

The **View Component** are C# classes which must derive from ViewComponent base class. View components must define an Invoke() method or InvokeAsync() which is an asynchronous version of it. In this method the view component must perform the taks for which it is created.

The View Component can be created anywhere in the application but according to conventions they should be created inside the Components folder that resides on the root folder of the application.

### Example: Simple View Component

Let’s create our first **View Component** which although is very simple and yet it will explain you their full workings in a matter of few minutes. Move forward by right clicking on the project name on solution explorer and select Add ➤ New Folder then name that folder as Components. Create a class inside this folder and name it Cart.cs. Derive this class from ViewComponent base class and add an Invoke method to it. This is what I have done in the given below code:

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

12 | `using` `Microsoft.AspNetCore.Mvc;`

`namespace` `UnderstandingControllersViews.Components`

`{`

    `public` `class` `Cart: ViewComponent`

    `{`

        `public` `string` `Invoke()`

        `{`

            `return` `"This is from View Component"``;`

        `}`

    `}`

`}` |

This view component simply returns a string message. Now, to invoke this View Component from a View we use the Razor expression `@await Component.InvokeAsync("NameofViewComponent")`. This will call the Invoke method of the given View Component.

So go to the \_Layout.cshtml file and add `@await Component.InvokeAsync("Cart")` to it on the top, just below the header section, as shown in the code below:

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

19 | `<!``DOCTYPE` `html>`

`<``html``>`

`<``head``>`

    `<``meta` `name``=``"viewport"` `content``=``"width=device-width"` `/>`

    `<``title``>@ViewData["Title"]</``title``>`

    `<``link` `rel``=``"stylesheet"` `href``=``"~/lib/bootstrap/dist/css/bootstrap.min.css"` `/>`

`</``head``>`

`<``body``>`

    `<``header``>`

    `...`

    `</``header``>`

    `<``div` `class``=``"p-3 mb-2 border border-info"``>`

        `@await Component.InvokeAsync("Cart")`

    `</``div``>`

    `...`

`</``body``>`

`</``html``>` |

Now run the app and go to the URL – https://localhost:7113/Home/TestLayout. You will see the returned string from the **Invoke method of View Component** being displayed. Check the below given image.

![view component example](https://www.yogihosting.com/wp-content/uploads/2022/04/view-component-example.png)

We will update this simple view component to a very powerful one in just a moment. But before we need to understand the return types of a view component.

### Return Types of View Components

In the previous section we learned about View Components that returns a strings. View Components can also return IViewComponentResult interface from the Invoke method. With IViewComponentResult interface the **View Components** can return string, html and partial view also.

To return string, html and partial view from View Components we make use of the below shown classes:

| Class Name | Description |
| --- | --- |
| ContentViewComponentResult | Is is used to return encoded HTML. Eg `Content("<h2>some text</h2>")` |
| HtmlContentViewComponentResult | It is used to return HTML without encoding. Eg `HtmlContentViewComponentResult("<h2>some text</h2>")` |
| ViewViewComponentResult | It is used to return a Partial View with optional model data. Eg `View("NameofView", model)` |

View Component Returning “ContentViewComponentResult”

The ContentViewComponentResult class is used for **returning encoded HTML from View Components**. Instances of the ContentViewComponentResult class are created using the Content() method.

Let me demonstrate this. Change the “Cart View Component” Invoke method return type to IViewComponentResult and return encoded HTML by using the Content() method like shown below:

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

12 | `using` `Microsoft.AspNetCore.Mvc;`

`namespace` `UnderstandingControllersViews.Components`

`{`

    `public` `class` `Cart: ViewComponent`

    `{`

        `public` `IViewComponentResult Invoke()`

        `{`

            `return` `Content(``"This is from <h2>View Component</h2>"``);`

        `}`

    `}`

`}` |

Run your application and go to URL – https://localhost:7113/Home/TestLayout. You will see the encoded html displayed as shown in the image below:

![view component returning encoded html](https://www.yogihosting.com/wp-content/uploads/2022/04/view-component-returning-encoded-html.png "View Component returning Encoded HTML")

If you check the page source you will find the HTML is encoded by the Content method like:

```
This is from &lt;h2&gt;View Component&lt;/h2&gt;
```

The encoding of HTML is done by ASP.NET Core runtime for security and this prevent hackers from adding unwanted scripts to the website.

View Component Returning “HtmlContentViewComponentResult”

The HtmlContentViewComponentResult class is used for returning **“non-encoded HTML”** from View Components.

Change the Cart View Component so that it returns a new instance of HtmlContentViewComponentResult class. This is shown in the code below:

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

14 | `using` `Microsoft.AspNetCore.Html;`

`using` `Microsoft.AspNetCore.Mvc.ViewComponents;`

`using` `Microsoft.AspNetCore.Mvc;`

`namespace` `UnderstandingControllersViews.Components`

`{`

    `public` `class` `Cart: ViewComponent`

    `{`

        `public` `IViewComponentResult Invoke()`

        `{`

            `return` `new` `HtmlContentViewComponentResult(``new` `HtmlString(``"This is from <h2>View Component</h2>"``));`

        `}`

    `}`

`}` |

Run your application and go to the URL – https://localhost:7113/Home/TestLayout. You will see this time the HTML is rendered on the browser as shown below:

![view component returning non encoded html](https://www.yogihosting.com/wp-content/uploads/2022/04/view-component-returning-non-encoded-html.png "View Component returning Non Encoded HTML")

Use this method when your are 100% sure that your returned output will be safe and will not be tampered.

View Component Returning Partial View

You can also return a **Partial View from View Component**. The ViewComponent base class provides the View() method for returning a partial view.

There are 4 versions of the View method:

```
View(); // selects default partial view
View(model); // selects default partial view and provides model to it
View("viewname"); // selects a partial view by its name
View("viewname ", model); // selects a partial view by its name and provides model to it. 
```

ASP.NET Core will look for the following locations to find the Partial View:

```
/Views/{controller}/Components/{view component}/{partial view name}
/Views/Shared/Components/{view component}/{partial view name}
```

-   The controller is the one that handles the HTTP request.

-   If you don’t specify the view name in the View() method then {partial view name} is taken as Default.cshtml.

### Example: Complex View Component

Let us create a complex view component which will return partial view. Create a model class Product.cs inside the Models folder as given below:

| 1

2

3

4

5

6

7

8 | `namespace` `UnderstandingControllersViews.Models`

`{`

    `public` `class` `Product`

    `{`

        `public` `string` `Name {` `get``;` `set``; }`

        `public` `int` `Price {` `get``;` `set``; }`

    `}`

`}` |

Now update your Cart View Component to return a View with an array of products as model.

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

22 | `using` `Microsoft.AspNetCore.Html;`

`using` `Microsoft.AspNetCore.Mvc.ViewComponents;`

`using` `Microsoft.AspNetCore.Mvc;`

`using` `UnderstandingControllersViews.Models;`

`namespace` `UnderstandingControllersViews.Components`

`{`

    `public` `class` `Cart: ViewComponent`

    `{`

        `public` `IViewComponentResult Invoke()`

        `{`

            `Product[] products =` `new` `Product[] {`

                `new` `Product() { Name =` `"Women Shoes"``, Price = 99 },`

                `new` `Product() { Name =` `"Mens Shirts"``, Price = 59 },`

                `new` `Product() { Name =` `"Children Belts"``, Price = 19 },`

                `new` `Product() { Name =` `"Girls Socks"``, Price = 9 }`

            `};`

            `return` `View(products);`

        `}`

    `}`

`}` |

Run your application and go to URL – https://localhost:7113/Home/TestLayout. You will find an error stating that:

```
An unhandled exception occurred while processing the request.
InvalidOperationException: The view 'Components/Cart/Default' was not found. The following locations were searched:
/Views/Home/Components/Cart/Default.cshtml
/Views/Shared/Components/Cart/Default.cshtml
```

Notice the controller handling the HTTP request is HomeController and I did not specify the Partial View name in the View() method.

So Dot Net searches the Default Partial View (Default.cshtml) in the 2 locations:

```
/Views/Home/Components/Cart/Default.cshtml
/Views/Shared/Components/Cart/Default.cshtml
```

To fix this problem simply create this partial view.

Create a Razor View file called Default.cshtml in the folder /Views/Shared/Components/Cart/ and add the following code to it.

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

20 | `@model Product[]`

`<``table` `class``=``"table"` `style``=``"width:50%"``>`

    `<``thead` `class``=``"thead-dark"``>`

        `<``tr``>`

            `<``td``><``u``>Product Name</``u``></``td``>`

            `<``td``><``u``>Price</``u``></``td``>`

        `</``tr``>`

    `</``thead``>`

    `<``tbody``>`

    `@{`

        `foreach (Product p in Model)`

        `{`

            `<``tr` `class``=``"table-secondary"``>`

                `<``td``>@p.Name</``td``>`

                `<``td``>@p.Price</``td``>`

            `</``tr``>`

        `}`

    `}`

    `</``tbody``>`

`</``table``>` |

Now again re-run your application and go to URL – https://localhost:7113/Home/TestLayout. This time you will find the partial view included in the layout and it will show all the products in the cart. Check the image given below:

![view component returning partial view](https://www.yogihosting.com/wp-content/uploads/2022/04/view-component-returning-partial-view.png "View Component returning Partial View")

You can access all the properties like Request, ViewBag, RouteData inside the View Component just like Controllers. For example – `string target = RouteData.Values["id"] as string` gives the value of Id segment of the route. In the same way we can also use the [Dependency Injection](https://www.yogihosting.com/aspnet-core-dependency-injection/) feature of ASP.NET Core in the View Component.

## Dependency Injection in View Components

**Can we inject dependency in ViewComponent?** Yes we can inject dependencies on View Components by adding dependent classes on the constuctor of the view component. Let us create a service whose task will be to provide a discount coupon code on the cart view component. Through this coupon users can get discounts on the total cost of the products. Create a new folder called “Services” on the application root and add a Coupon.cs class inside it.

```
namespace UnderstandingControllersViews.Services
{
    public class Coupon
    {
        public string GetCoupon()
        {
            //get coupons from external database or an external web api call
            return "Discount10";
        }
    }
}
```

The GetCoupon() method will provide a coupon code from the database or external web api call. I am not providing this implemenation here and simply returning a coupon code.

Next we will have to register a service for this. So in the Program.cs add the below given code to register a Coupon service. Note that you will also have to include the namespace of the Coupon.cs class.

```
builder.Services.AddTransient<Coupon>();
```

Now add a constructor dependency for this service on the constructor of the Cart view component. I have shown this in highlighted manner.

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

31 | `using` `Microsoft.AspNetCore.Html;`

`using` `Microsoft.AspNetCore.Mvc.ViewComponents;`

`using` `Microsoft.AspNetCore.Mvc;`

`using` `UnderstandingControllersViews.Models;`

`using` `UnderstandingControllersViews.Services;`

`namespace` `UnderstandingControllersViews.Components`

`{`

    `public` `class` `Cart : ViewComponent`

    `{`

        `private` `Coupon coupon;`

        `public` `Cart(Coupon coupon)`

        `{`

            `this``.coupon = coupon;`

        `}`

        `public` `IViewComponentResult Invoke()`

        `{`

            `Product[] products =` `new` `Product[] {`

                `new` `Product() { Name =` `"Women Shoes"``, Price = 99 },`

                `new` `Product() { Name =` `"Mens Shirts"``, Price = 59 },`

                `new` `Product() { Name =` `"Children Belts"``, Price = 19 },`

                `new` `Product() { Name =` `"Girls Socks"``, Price = 9 }`

            `};`

            `ViewBag.Coupon = coupon.GetCoupon();`

            `return` `View(products);`

        `}`

    `}`

`}` |

I am adding the coupon code in a viewbag variable. Now all we have to do is to show this coupon on the partial view file which is Default.cshtml in our case. See the updated code of the partial view where I am showing the coupon by reading it from ViewBag variable at the very end.

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

21 | `@model Product[]`

`<``table` `class``=``"table"` `style``=``"width:50%"``>`

    `<``thead` `class``=``"thead-dark"``>`

        `<``tr``>`

            `<``td``><``u``>Product Name</``u``></``td``>`

            `<``td``><``u``>Price</``u``></``td``>`

        `</``tr``>`

    `</``thead``>`

    `<``tbody``>`

    `@{`

        `foreach (Product p in Model)`

        `{`

            `<``tr` `class``=``"table-secondary"``>`

                `<``td``>@p.Name</``td``>`

                `<``td``>@p.Price</``td``>`

            `</``tr``>`

        `}`

    `}`

    `</``tbody``>`

`</``table``>`

`<``p` `class``=``"p-3 text-white bg-dark"``>Apply coupon - @ViewBag.Coupon</``p``>` |

Run the app to see the coupon code as shown by the below image.

![dependency injection view components](https://www.yogihosting.com/wp-content/uploads/2022/04/dependency-injection-view-components.png)

## Providing values to a View Component from Parent View

We can also provide values to the View Component from the Parent View. This is done by passing an anonymous object to the 2nd argument of the @await Component.InvokeAsync() method. Let’s find how.

Go to your \_Layout.cshtml file and change the InvokeAsync() by passing it a false value to an anonymous property showCart like this:

```
@await Component.InvokeAsync("Cart", new { showCart = false })
```

Now change your Cart View Component code by adding the showCart parameter to the Invoke() method as shown in the code below:

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

30 | `using` `Microsoft.AspNetCore.Html;`

`using` `Microsoft.AspNetCore.Mvc.ViewComponents;`

`using` `Microsoft.AspNetCore.Mvc;`

`using` `UnderstandingControllersViews.Models;`

`namespace` `UnderstandingControllersViews.Components`

`{`

    `public` `class` `Cart : ViewComponent`

    `{`

        `public` `IViewComponentResult Invoke(``bool` `showCart)`

        `{`

            `Product[] products;`

            `if` `(showCart)`

            `{`

                `products =` `new` `Product[] {`

                    `new` `Product() { Name =` `"Women Shoes"``, Price = 99 },`

                    `new` `Product() { Name =` `"Mens Shirts"``, Price = 59 },`

                    `new` `Product() { Name =` `"Children Belts"``, Price = 19 },`

                    `new` `Product() { Name =` `"Girls Socks"``, Price = 9 }`

                `};`

            `}`

            `else`

            `{`

                `products =` `new` `Product[] { };`

            `}`

            `return` `View(products);`

        `}`

    `}`

`}` |

Because of this change when the showCart variable is true then only the cart will show products. Run your application and this time you will not get any product shown to you.

Once again go to the \_Layout.cshtml file and change the InvokeAsync() method to pass true value to a variable showCart like this:

```
@await Component.InvokeAsync("Cart", new { showCart = true})
```

And this time you will see the products.

## Asynchronous View Components

**Asynchronous View Components** can be used to perform Asynchronous tasks. They have an InvokeAsync() method that returns a task object. ASP.NET Core will wait for the task to complete and then insert the result in the view.

Note that you may have to include the System.Net.Http package in your project from NuGet so that the application can make Asynchronous HTTP requests.

Let’s create an **Asynchronous View Component** which is going to provide the page size of any web page.

So right click on the “Components” folder and add a new class and name it PageSize.cs. Add the following code to it:

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

14 | `using` `Microsoft.AspNetCore.Mvc;`

`namespace` `UnderstandingControllersViews.Components`

`{`

    `public` `class` `PageSize : ViewComponent`

    `{`

        `public` `async` `Task<IViewComponentResult> InvokeAsync()`

        `{`

            `HttpClient client =` `new` `HttpClient();`

            `HttpResponseMessage response =` `await` `client.GetAsync(``"http://www.msn.com"``);`

            `return` `View(response.Content.Headers.ContentLength);`

        `}`

    `}`

`}` |

The **Asynchronous View Component** will get the page size of MSN page asynchronously through the HTTP GET request and then passes the size to the default view.

Now create a View file called Default.cshtml inside the View/Home/Components/PageSize folder. Add the following code to this file:

```
@model long
<div class="p-3 mb-2 text-danger">Page size: @Model</div>
```

Now finally to call this Asynchronous View component in your \_Layout.cshtml file like this:

```
@await Component.InvokeAsync("PageSize")
```

Run your application and go to the URL – https://localhost:7113/Home/TestLayout. You will see the page size of the MSN page is shown. See the image below:

![asynchronous view component](https://www.yogihosting.com/wp-content/uploads/2022/04/asynchronous-view-components.png "Asynchronous View Component")

## What is @inject in ASP.NET Core

Services can be injected to views by using @inject directive. Suppose we have a service which provides us with a random joke. These jokes comes from a public api. So first add a new folder called Services in your app. Inside this folder create a new class called Joke.cs with the following code:

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

31 | `using` `System.Text.Json;`

`namespace` `UnderstandingControllersViews.Services`

`{`

    `public` `class` `Joke`

    `{`

        `public` `string` `type {` `get``;` `set``; }`

        `public` `Value value {` `get``;` `set``; }`

        `public` `async` `Task<``string``> GetJoke()`

        `{`

            `string` `apiResponse =` `""``;`

            `using` `(``var` `httpClient =` `new` `HttpClient())`

            `{`

                `using` `(``var` `response =` `await` `httpClient.GetAsync(``"https://api.icndb.com/jokes/random"``))`

                `{`

                    `apiResponse =` `await` `response.Content.ReadAsStringAsync();`

                `}`

            `}`

            `var` `joke = JsonSerializer.Deserialize<Joke>(apiResponse);`

            `return` `joke.value.joke;`

        `}`

    `}`

    `public` `class` `Value`

    `{`

        `public` `int` `id {` `get``;` `set``; }`

        `public` `string` `joke {` `get``;` `set``; }`

        `public` `object``[] categories {` `get``;` `set``; }`

    `}`

`}` |

The class has a method called GetJoke which calls the web api and fetches the joke in the “Value” class property called “joke” which is returned at the end. Next, in the Program.cs class add the joke as a transient service.

```
builder.Services.AddTransient<Joke>();
```

Note that you have to include the namespace of the joke class – using UnderstandingControllersViews.Services in the program class.

Next we add a new action method called Joke inside the HomeController file.

```
public IActionResult Joke()
{
    return View();
}
```

Now add a view called Joke.cshtml inside the Views ➤ Home folder with the following code.

| 1

2

3

4

5 | `@using UnderstandingControllersViews.Services`

`@inject Joke joke;`

`<``h2` `class``=``"text-primary"``>Today's Joke</``h2``>`

`<``p``>@await joke.GetJoke()</``p``>` |

In the above code I am using @inject directive for injecting the service in the view – `@inject Joke joke`. The [Dependency Injection](https://www.yogihosting.com/aspnet-core-dependency-injection/) task is to make this service available in the view. Finally we are calling the GetJoke method – `@await joke.GetJoke()` from there and showing the joke.

Run your code and go to the url – https://localhost:7113/Home/Joke where you will be shown a random joke evertime you will visit.

![Inject directive asp.net core views](https://www.yogihosting.com/wp-content/uploads/2022/04/inject-directive-views-aspnet-core.png)

You can download the full codes of this tutorial from the below link:

[Download](https://www.yogihosting.com/wp-content/themes/yogi-yogihosting/download/aspnetcore/UnderstandingControllersViews.zip)

Conclusion

Views are an important component of ASP.NET Core framework and I am hopeful that this tutorial will help you to understand every aspect of it.

---
Source: [Views in ASP.NET Core](https://www.yogihosting.com/aspnet-core-views/)