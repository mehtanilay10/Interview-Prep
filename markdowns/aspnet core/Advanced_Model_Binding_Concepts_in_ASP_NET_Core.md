# Advanced Model Binding Concepts in ASP.NET Core

In this tutorial we will cover some of the most Advanced Model Binding Concepts with examples.

Page Contents

On my previous tutorial on [Model Binding technique in ASP.NET Core](https://www.yogihosting.com/aspnet-core-model-binding/) I covered some of the basic topics. I also created a app to understand it. In this tutorial I will add on features to the same app that was built earlier.

## ASP.NET Core Model Binding in Arrays

We can perform **Model Binding to array types** that are provided on the action method’s parameters. To demonstrate this feature, create an action method called Places in the Home controller as shown by the code given below:

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

18 | `using` `Microsoft.AspNetCore.Mvc;`

`using` `ModelBindingValidation.Models;`

`namespace` `ModelBindingValidation.Controllers`

`{`

    `public` `class` `HomeController : Controller`

    `{`

        `private` `IRepository repository;`

        `public` `HomeController(IRepository repo)`

        `{`

            `repository = repo;`

        `}`

        `public` `IActionResult Places(``string``[] places) => View(places);`

    `}`

`}` |

Notice this action method has a **parameter of string array type** and is named as places. The model binding technique will search for the item named places in form data, routing variables and query strings. On finding the item it will bind the action’s parameter “places” with that value.

Next, create razor view called Places inside the Views ➤ Home folder and add the following code to it:

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

30 | `@model string[]`

`@{`

    `ViewData["Title"] = "Places";`

`}`

`<``h2``>Places</``h2``>`

`@if (Model.Length == 0)`

`{`

    `<``form` `asp-action``=``"Places"` `method``=``"post"``>`

        `@for (int i = 1; i <= 3; i++)`

        `{`

            `<``div` `class``=``"form-group"``>`

                `<``label``>Place @i:</``label``>`

                `<``input` `name``=``"places"` `class``=``"form-control"` `/>`

            `</``div``>`

        `}`

        `<``button` `type``=``"submit"` `class``=``"btn btn-primary"``>Submit</``button``>`

    `</``form``>`

`}`

`else`

`{`

    `<``table` `class``=``"table table-sm table-bordered table-striped"``>`

        `@foreach (string place in Model)`

        `{`

            `<``tr``><``th``>Place:</``th``><``td``>@place</``td``></``tr``>`

        `}`

    `</``table``>`

    `<``a` `asp-action``=``"Places"` `class``=``"btn btn-primary"``>Back</``a``>`

`}` |

The View contains model of type string array. The if-else block is given to check if the model is empty or not. It use the code – Model.Length == 0 to perform this check. If the model is not empty then it display all the places contained by the model object by looping through each of them. Else, in case, if the model is empty then a form is displayed to add 3 places in 3 identical input elements.

The 3 identical input elements have their names places – `<input name="places" class="form-control" />`. It is same like the parameter name of the action method – string\[\] places. So when the form is submitted then the **Model Binding** feature will extract the values of all these input elements and create an array containing these values. This array is then bind to the parameter of the action method.

Run the project and go to the url to initiate the Places action which is – /Home/Places. Now check the html of the 3 input elements in the page source which is given below.

| 1

2

3 | `<``input` `name``=``"places"` `class``=``"form-control"` `/>`

`<``input` `name``=``"places"` `class``=``"form-control"` `/>`

`<``input` `name``=``"places"` `class``=``"form-control"` `/>` |

You can see all these 3 inputs have the name as places and this is same as the name of the parameter of the action method. So **Model Binding to Arrays** will be applied here.

Now fill the 3 names for the places given on the form and submit it. On submitting the 3 values are displayed on the browser. See the image given below.

![model binding array](https://www.yogihosting.com/wp-content/uploads/2019/05/model-binding-array.png)

## ASP.NET Core Model Binding in Collections

We can also perform **Model binding in Collection**. The **List** type is a commonly used C# collection which we will use here in our example. Let’s update the previous example from string array to strongly typed List.

So change the parameter of the Places action from string\[\] to List<string>.

```
public IActionResult Places(List<string> places) => View(places);
```

Then do a 2 slight changes on the Places.cshtml view file:

-   1\. Change model type to List<string>.

-   2\. In the if block use Model.Count.

I have highlighted these 2 thing in the below updated code.

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

30 | `@model List<``string``>`

`@{`

    `ViewData["Title"] = "Places";`

`}`

`<``h2``>Places</``h2``>`

`@if (Model.Count == 0)`

`{`

    `<``form` `asp-action``=``"Places"` `method``=``"post"``>`

        `@for (int i = 1; i <= 3; i++)`

        `{`

            `<``div` `class``=``"form-group"``>`

                `<``label``>Place @i:</``label``>`

                `<``input` `id``=``"places"` `name``=``"places"` `class``=``"form-control"` `/>`

            `</``div``>`

        `}`

        `<``button` `type``=``"submit"` `class``=``"btn btn-primary"``>Submit</``button``>`

    `</``form``>`

`}`

`else`

`{`

    `<``table` `class``=``"table table-sm table-bordered table-striped"``>`

        `@foreach (string place in Model)`

        `{`

            `<``tr``><``th``>Place:</``th``><``td``>@place</``td``></``tr``>`

        `}`

    `</``table``>`

    `<``a` `asp-action``=``"Places"` `class``=``"btn btn-primary"``>Back</``a``>`

`}` |

You can run and submit the form like like before. On submission, the 3 places you added will be displayed on the browser. Here we pefomed **Model Binding in List** which is a commonly used c# collection type.

## Model Binding in Collections of Complex Types

Now we will cover how to perform **Model Binding in Collections of Complex Types**. So create a PersonAddress class with 2 properties – City & Country.

| 1

2

3

4

5 | `public` `class` `PersonAddress`

`{`

    `public` `string` `City {` `get``;` `set``; }`

    `public` `string` `Country {` `get``;` `set``; }`

`}` |

Next, go to the Home Controller and add a new action methods named Address to it. The code of this action methods are given below:

```
public IActionResult Address() => View();

[HttpPost]
public IActionResult Address(List<PersonAddress> address) => View(address);
```

Next, create a view called Address inside the Views ➤ Home folder with the code as shown below:

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

38 | `@model List<``PersonAddress``>`

`@{`

    `ViewData["Title"] = "Address";`

`}`

`<``h2``>Address</``h2``>`

`@if (Model == null)`

`{`

    `<``form` `asp-action``=``"Address"` `method``=``"post"``>`

        `@for (int i = 0; i <` `3``; i++)`

        `{`

            `<fieldset` `class``=``"form-group"``>`

                `<``legend``>Address @(i + 1)</``legend``>`

                `<``div` `class``=``"form-group"``>`

                    `<``label``>City:</``label``>`

                    `<``input` `name``=``"[@i].City"` `class``=``"form-control"` `/>`

                `</``div``>`

                `<``div` `class``=``"form-group"``>`

                    `<``label``>Country:</``label``>`

                    `<``input` `name``=``"[@i].Country"` `class``=``"form-control"` `/>`

                `</``div``>`

            `</``fieldset``>`

        `}`

        `<``button` `type``=``"submit"` `class``=``"btn btn-primary"``>Submit</``button``>`

    `</``form``>`

`}`

`else`

`{`

    `<``table` `class``=``"table table-sm table-bordered table-striped"``>`

        `<``tr``><``th``>City</``th``><``th``>Country</``th``></``tr``>`

        `@foreach (var address in Model)`

        `{`

            `<``tr``><``td``>@address.City</``td``><``td``>@address.Country</``td``></``tr``>`

        `}`

    `</``table``>`

    `<``a` `asp-action``=``"Address"` `class``=``"btn btn-primary"``>Back</``a``>`

`}` |

The view contains a Model of List of PersonAddress, which is a collection of Complex type. It renders a form when no items are present in the model. The form contains 3 pairs of City and Country input elements whose names are prefixed with an array index as shown in the code below:

| 1

2

3

4

5

6

7

8 | `<``input` `name``=``"[0].City"` `class``=``"form-control"` `/>`

`<``input` `name``=``"[0].Country"` `class``=``"form-control"` `/>`

`<``input` `name``=``"[1].City"` `class``=``"form-control"` `/>`

`<``input` `name``=``"[1].Country"` `class``=``"form-control"` `/>`

`<``input` `name``=``"[2].City"` `class``=``"form-control"` `/>`

`<``input` `name``=``"[2].Country"` `class``=``"form-control"` `/>` |

These input controls are created by the for loop which runs from i->0 to i->2.

On the submission of the form, the **model binding** uses the **int values prefixed in the name attributes** of the input controls to create the values for the List<PersonAddress> address.

The names prefixed with

\[0\]

are used for the

first PersonAddress object

, those prefixed with

\[1\]

are used for the

second PersonAddress object

, and finally those prefixed with

\[2\]

are used for the

third PersonAddress object

. You can continue this pattern if you have more objects. It is a classic example for Model Binding in Collections of Complex Types.

Now test it by running your project and going to the URL – /Home/Address. Fill the values for the 3 cities and countries and press the submit button, you will see your these values get displayed on your browser, as shown by the image given below:

![model binding collections of complex types](https://www.yogihosting.com/wp-content/uploads/2019/05/model-binding-collections-of-complex-types.png)

## Model Binding Sources

The different ways of model binding in ASP.NET Core are:

-   1\. Form data

-   2\. Routing
-   3\. Query string

Model Binding will start the search for values in form data then route values and then finally in Query string.

Luckily we can override this search behavior and force model binding to use only a specified source for binding data. This can be done by using the attributes that are described in the table given below:

| Name | Description |
| --- | --- |
| FromQuery | This attribute is used to select the query string as the only source of binding data. |
| FromHeader | This attribute is used to select a request header as the only source of binding data. |
| FromBody | This attribute is used to specify that the request body should be used as the only source of binding data. |
| FromForm | This attribute is used to select form data as the only source of binding data. |
| FromRoute | This attribute is used to select routing system as the only source of binding data. |

**Why we use model binding? Model Binding technique simplifies the way in which data can be transferred from HTTP Request to action methods of the controllers. The transfer of data can be done in a number of ways like through forms, body, headers, routes & query strings. Model Binding makes all these work smoothly and this also reduces a lot of development time of the projects.**

## ‘FromForm’ Attribute

The \[FromForm\] attribute tells Model Binding to get the values from posted **form fields**. The Model Binding searches for values in form data at the first place so most of the time we don’t add this attribute.

Let’s understand it with an example. We have a class called Employee.

```
public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
}
```

Create action methods called FromFormExample in the Home Controller. In the post version of the action method we have added From Form attribute to the parameter – `[FromForm] Employee model`. this tells model binding to get the values of this parameter in the form fields.

| 1

2

3

4

5

6

7

8 | `public` `IActionResult FromFormExample() => View();`

`[HttpPost]`

`public` `IActionResult FromFormExample([FromForm] Employee model)`

`{`

    `ViewBag.Message =` `"Employee data received"``;`

    `return` `View();`

`}` |

Now create FromFormExample view inside the Views ➤ Home folder. In the view we have created an html form to accepting the employee id and name.

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

18 | `@{`

    `ViewData["Title"] = "FromFormExample";`

`}`

`<``h2``>From Form</``h2``>`

`<``h3``>@ViewBag.Message</``h3``>`

`<``form` `method``=``"post"``>`

    `<``div` `class``=``"form-group"``>`

        `<``label``>Id:</``label``>`

        `<``input` `name``=``"Id"` `class``=``"form-control"` `/>`

    `</``div``>`

    `<``div` `class``=``"form-group"``>`

        `<``label``>Name:</``label``>`

        `<``input` `name``=``"Name"` `class``=``"form-control"` `/>`

    `</``div``>`

    `<``button` `class``=``"btn btn-primary"``>Submit</``button``>`

`</``form``>` |

Now run the app and visit the url – https://localhost:7072/Home/FromFormExample. Fill the employee id and name and press the submit button. The values on the form will be received at the parameter of the action method.

Let’s take another example where we use jQuery to add data to form fields and then submit the form. So change the post version of the “FromFormExample” to have Employee return type and it returns the parameter value at the end.

```

[HttpPost]
public Employee FromFormExample([FromForm]Employee model) => model;
```

Now change the FromFormExample view as shown below.

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

36 | `@{`

    `ViewData["Title"] = "FromFormExample";`

`}`

`<``h2``>From Form</``h2``>`

`@section scripts {`

    `<``script` `src``=``"https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"``></``script``>`

    `<``script``>`

        `$(document).ready(function () {`

            `$("button").click(function (e) {`

                `data = new FormData();`

                `data.append("id", 5);`

                `data.append("name", "Donald Trump");`

                `$.ajax("/Home/FromFormExample", {`

                    `method: "post",`

                    `processData: false,`

                    `contentType: false,`

                    `data: data,`

                    `success: function (data) {`

                        `$("#empId").text(data.id);`

                        `$("#empName").text(data.name);`

                    `}`

                `});`

            `});`

        `});`

    `</``script``>`

`}`

`<``table` `class``=``"table table-sm table-bordered table-striped"``>`

    `<``tr``><``th``>Id:</``th``><``td` `id``=``"empId"``></``td``></``tr``>`

    `<``tr``><``th``>Name:</``th``><``td` `id``=``"empName"``></``td``></``tr``>`

`</``table``>`

`<``button` `class``=``"btn btn-primary"``>Submit</``button``>` |

The view code has ajax() method which calls the FromFormExample action. Since this action’s argument require the the values from **form fields** (as it has \[FromForm\] attribute). Therefore we are adding the values (employee id 5 and name Donald Trump) in the FormData, see below code which does this work:

```
data = new FormData();
data.append("Id", 5);
data.append("Name", "Donald Trump");
```

The form data values are added to the data parameter of ajax method. Visit the URL – /Home/FromFormExample and click the button. The values will show up on the html table. The image given below shows the working:

![asp.net core model binding from body](https://www.yogihosting.com/wp-content/uploads/2019/05/frombody-attribute.png)

## ‘FromBody’ Attribute

The FromBody attribute is used to specify that the **Model Binding** should only use the Request Body as the source to get the values.

For understanding how this attribute works, add new actions called “Body” to the Home Controller file.

```
public IActionResult Body() => View();
  
[HttpPost]
public Employee Body([FromBody]Employee model) => model;
```

We have decorated the parameter of the Post version of the Body action method with the \[FromBody\] attribute. It means that only the **request body** will be used by model binding to search for `Employee model` values. Also note that the return type of the action method is an Employee type.

Now create Body view inside the Views ➤ Home folder with contents as shown below:

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

33 | `@{`

    `ViewData["Title"] = "Body";`

`}`

`<``h2``>Body</``h2``>`

`@section scripts {`

    `<``script` `src``=``"https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"``></``script``>`

    `<``script``>`

        `$(document).ready(function () {`

            `$("button").click(function (e) {`

                `$.ajax("/Home/Body", {`

                    `method: "post",`

                    `contentType: "application/json",`

                    `data: JSON.stringify({`

                        `id: 5,`

                        `name: "Donald Trump"`

                    `}),`

                    `success: function (data) {`

                        `$("#empId").text(data.id);`

                        `$("#empName").text(data.name);`

                    `}`

                `});`

            `});`

        `});`

    `</``script``>`

`}`

`<``table` `class``=``"table table-sm table-bordered table-striped"``>`

    `<``tr``><``th``>Id:</``th``><``td` `id``=``"empId"``></``td``></``tr``>`

    `<``tr``><``th``>Name:</``th``><``td` `id``=``"empName"``></``td``></``tr``>`

`</``table``>`

`<``button` `class``=``"btn btn-primary"``>Submit</``button``>` |

In this view, when the button is clicked, then it sends a Http Post request containing JSON data to the URL – /Home/Body.

Notice how the values for id & name are converted to JSON string by using JSON.stringify method of JavaScript and they are then added to the data parameter of the jQuery AJAX method.

| 1

2

3

4 | `data: JSON.stringify({`

    `id: 5,`

    `name:` `"Donald Trump"`

`})` |

The Body action method receives this data in it’s Employee type argument, and then returns it back to the view in JSON format. Finally in the Success Callback method of the $.ajax() method we receive this data and show it inside the td elements of the HTML table.

You can check it’s working by going to the URL – /Home/Body and clicking the button.

The image given below shows the working:

![asp.net core model binding from body](https://www.yogihosting.com/wp-content/uploads/2019/05/frombody-attribute.png)

## ‘FromQuery’ Attribute

The **From Query** instructs Model Binding to get values from the query string. We have the Index Action of the Home Controller containing the below code:

| 1

2

3

4 | `public` `IActionResult Index(``int` `id = 1)`

`{`

    `return` `View(repository[id]);`

`}` |

Now when you go to the URL – /Home/Index/1?id=2, the “id” parameter will get the value of 1 and not 2 from Model Binding because in the search order routing values comes before than query string. The **Model Binding** will search for the id value in the routing data before query string values.

In the routing data it finds the 3rd segment of the URL – /Home(1st segment)/Index(2nd segment)/1(3rd segment) to contain the value of id, which is 1. So you will see the Employee id 1 record.

Now we can easily override this search behavior by using the \[FromQuery\] attribute. It will force Model Binding to look in the query string values for the value of “Id” parameter.

So update the Index Action method to:

| 1

2

3

4 | `public` `IActionResult Index([FromQuery]` `int` `id = 1)`

`{`

    `return` `View(repository[id]);`

`}` |

Rerun the application and go to the same URL – /Home/Index/1?id=2. This time you will see the 2nd employee record on the browser. This means the **model binding feature** searched the value of id in the query string values. See the below image:

![asp.net core model binding From Query](https://www.yogihosting.com/wp-content/uploads/2019/05/FromQuery-attribute.png)

The FormHeader attribute directs Model Binding technique to get the values from HTTP headers.

Add an new action method called Header to the Home Controller as shown in the code below:

```
public string Header([FromHeader]string accept) => $"Header: {accept}";
```

This action has an parameter called accept whose value will be bind from the http header of the request.

Run your application and go to URL – /Home/Header. You will see the Accept header value in the browser as shown below:

```
Header: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
```

Now we will deep drive into this topic and check the **Request Header** values in the browser’s developer tools. Follow the given steps:

-   1\. Open the Chrome Developer Tools by pressing the F12 key or use shortcut Ctrl+Shift+I.

-   2\. Click the Network tab. Press F5 key as it asks for reload to capture values.
-   3\. On the left side you will see the Header text. Click on it, see image below:

![model binding from header](https://www.yogihosting.com/wp-content/uploads/2019/05/request-response-in-browser.png)

-   4\. You will get 4 tabs – Headers, Preview, Response, Timing. Click on the Headers tab and scroll down to find the Request Headers section. See the below image:

![asp.net core model binding from header](https://www.yogihosting.com/wp-content/uploads/2019/05/request-headers-in-browser.png)

The Request Headers have many properties like – Accept, Accept-Encoding, Accept-Language, Cache-Control, Connection, Host, Upgrade-Insecure-Requests and User-Agent.

Now let us bind the User-Agent value. So configure the **FromHeader** attribute to use the Name property and specify the name of the header, which in our case is User-Agent.

The updated code of the Header action method is:

```
public string Header([FromHeader(Name = "User-Agent")]string accept) => $"Header: {accept}";
```

Now reload your application and view the same URL – /Home/Header. This time you will see the User-Agent value being displayed on the browser as shown below:

```
Header: Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36
```

Model Binding all the Request Headers

We can also bind all the **Request Header** values by applying the FromHeader attribute to the properties of a class. Let us create this feature to understand what we mean from it.

Create a class inside the Models folder and name it FullHeader.cs.

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

31 | `using` `Microsoft.AspNetCore.Mvc;`

`namespace` `ModelBindingValidation.Models`

`{`

    `public` `class` `FullHeader`

    `{`

        `[FromHeader]`

        `public` `string` `Accept {` `get``;` `set``; }`

        `[FromHeader(Name =` `"Accept-Encoding"``)]`

        `public` `string` `AcceptEncoding {` `get``;` `set``; }`

        `[FromHeader(Name =` `"Accept-Language"``)]`

        `public` `string` `AcceptLanguage {` `get``;` `set``; }`

        `[FromHeader(Name =` `"Cache-Control"``)]`

        `public` `string` `CacheControl {` `get``;` `set``; }`

        `[FromHeader(Name =` `"Connection"``)]`

        `public` `string` `Connection {` `get``;` `set``; }`

        `[FromHeader(Name =` `"Host"``)]`

        `public` `string` `Host {` `get``;` `set``; }`

        `[FromHeader(Name =` `"Upgrade-Insecure-Requests"``)]`

        `public` `string` `UpgradeInsecureRequests {` `get``;` `set``; }`

        `[FromHeader(Name =` `"User-Agent"``)]`

        `public` `string` `UserAgent {` `get``;` `set``; }`

    `}`

`}` |

Next create an action method by the name of FullHeader in the Home Controller:

```
public IActionResult FullHeader(FullHeader model) => View(model);
```

Finally create the FullHeader view inside the Views ➤ Home folder:

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

17 | `@model FullHeader`

`@{`

    `ViewData["Title"] = "Full Header";`

`}`

`<``h2``>Header</``h2``>`

`<``table` `class``=``"table table-sm table-bordered table-striped"``>`

    `<``tr``><``th``>Accept:</``th``><``td``>@Model.Accept</``td``></``tr``>`

    `<``tr``><``th``>Accept-Encoding:</``th``><``td``>@Model.AcceptEncoding</``td``></``tr``>`

    `<``tr``><``th``>Accept-Language:</``th``><``td``>@Model.AcceptLanguage</``td``></``tr``>`

    `<``tr``><``th``>Cache-Control:</``th``><``td``>@Model.CacheControl</``td``></``tr``>`

    `<``tr``><``th``>Connection:</``th``><``td``>@Model.Connection</``td``></``tr``>`

    `<``tr``><``th``>Host:</``th``><``td``>@Model.Host</``td``></``tr``>`

    `<``tr``><``th``>Upgrade-Insecure-Requests:</``th``><``td``>@Model.UpgradeInsecureRequests</``td``></``tr``>`

    `<``tr``><``th``>UserAgent:</``th``><``td``>@Model.UserAgent</``td``></``tr``>`

`</``table``>` |

Now check it by running your application and go to the URL – /Home/FullHeader where you will see all the Request Headers values as shown in the image below:

![model binding all request headers in class](https://www.yogihosting.com/wp-content/uploads/2019/05/binding-all-request-headers-in-class.png)

This is a classic code to capture all the values of HTTP Headers through Model Binding and present them nicely on the table. Use this code freely in your projects.

## ‘FromRoute’ Attribute

The \[FromRoute\] attribute specfies that the model binding will bind values from route data. Let’s create an example to understand this concept. First create a new action methods called FromRouteExample in the Home Controller as shown below. Notice the argument has the \[FromRoute\] attribute so it will be bind with routes data.

| 1

2

3

4 | `public IActionResult FromRouteExample() => View();`

`[HttpPost]`

`public string FromRouteExample([FromRoute]string id) => id;` |

Next create the view called FromRouteExample inside Views ➤ Home folder as shown below.

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

27 | `@{`

    `ViewData[``"Title"``] =` `"FromRouteExample"``;`

`}`

`<h2>Body</h2>`

`@section scripts {`

    `<script src=``"https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"``></script>`

    `<script>`

        `$(document).ready(``function` `() {`

            `$(``"button"``).click(``function` `(e) {`

                `$.ajax(``"/Home/FromRouteExample/5"``,`

                    `{`

                        `method:` `"post"``,`

                        `success:` `function` `(data) {`

                            `$(``"#id"``).text(data);`

                        `}`

                    `});`

            `});`

        `});`

    `</script>`

`}`

`<table` `class``=``"table table-sm table-bordered table-striped"``>`

    `<tr><th>Id:</th><td id=``"id"``></td></tr>`

`</table>`

`<button` `class``=``"btn btn-primary"``>Submit</button>` |

We are sending a value of 5 at the 3rd segment of the url (see inside ajax method call ‘/Home/FromRouteExample/5’) when making the ajax call to the action method. This value will be bind to the action’s argument because of the presence of \[FromRoute\] attribute. Run the project and go to the url – /Home/FromRouteExample click the submit button and you will see the value of 5 will be displayed on the html table. I have shown this all thing in the below video.

![asp.net core model binding From Route video](https://www.yogihosting.com/wp-content/uploads/2020/08/fromroute-video.gif)

This happens due to the presence of \[FromRoute\] attribute.

You can download the source code using the below link:

[Download](https://www.yogihosting.com/wp-content/themes/yogi-yogihosting/download/aspnetcore/ModelBindingValidation.zip)

Conclusion

This completes the **Advanced Model Binding** topics of ASP.NET Core. Now you can use this technique and create very powerful data driven applications.

---
Source: [Advanced Model Binding Concepts in ASP.NET Core](https://www.yogihosting.com/aspnet-core-advanced-model-binding/)