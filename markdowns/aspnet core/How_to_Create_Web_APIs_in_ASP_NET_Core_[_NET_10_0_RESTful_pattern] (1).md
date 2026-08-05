# How to Create Web APIs in ASP.NET Core [.NET 10.0 RESTful pattern]

Creating **Web APIs in ASP.NET Core** is very straightforward. You create controllers that have 3 things:

-   1\. They should have **\[ApiController\]** attribute on them. This attribute tells that the controller will server **HTTP API Responses**.

-   2\. They should derive from ControllerBase class instead of Controller class.
-   3\. They should have attribute routing applied on them like `[Route("someUrl/[controller]")]`.

The controller of a Web API looks like:

```
[ApiController]
[Route("someURL/[controller]")]
public class ExampleController : ControllerBase
```

Page Contents

## What is Web API?

**A Web API is an API which can be accessed over the web using HTTP Protocol. For example, we can get the current stock value of any organization right in our browser by calling any Stock Market Web API. A Web API can be built in any technology like ASP.NET Core, JAVA, Python, etc. It can also be consumed in any technology. This makes Web APIs a perfect choice for apps, build on different technologies, to communicate with one another.**

The work of the Web API is to transfer data over the internet. The data is transferred with the HTTP Protocol’s Request methods which are commonly known as HTTP Verbs. The mostly used HTTP Verbs are GET, POST, PUT, PATCH and DELETE. JSON and XML file formats are used by Web APIS to transmit data over the internet.

“ControllerBase” vs “Controller” class

You must “not” create a **Web API controller** by deriving from the Controller class instead derive it from ControllerBase class. This is because the Controller class derives from ControllerBase class and adds support for views, so it’s for handling web pages, not web API requests. There’s an exception to this rule: if you plan to use the same controller for both views and web APIs, then only derive it from Controller class. Check the skeleton of an **ASP.NET Core Web API which derives from ControllerBase class**.

```
[ApiController]
[Route("api/[controller]")]
public class ReservationController : ControllerBase
{
...
}
```

The ControllerBase class provides many properties and methods that are useful for handling HTTP requests. Some of these are:

| Name | Description |
| --- | --- |
| BadRequest | Returns 400 status code. |
| Ok | Returns a 200 status code along with the result object. |
| NotFound | Returns 404 status code. |
| PhysicalFile | Returns a file. |

## What is an ApiController attribute?

The Web API controller must be applied with **\[ApiController\]** attribute so that they can perform API specific behaviors. These behaviors are:

-   1\. Respond to Attribute Routing.

-   2\. Automatically triggers an HTTP 400 response when resource is not found on the server.
-   3\. Defines the location at which an action method’s parameter value is found. We use **\[FromBody\], \[FromForm\], \[FromHeader\], \[FromQuery\], \[FromRoute\]** attributes to define these locations.

-   4\. When action method’s parameter is annotated with the \[FromForm\] attribute then the multipart/form-data request content type is inferred.
-   5\. Enables Web API returned error to be based on the RFC 7807 specification. This enables Web APIs made in different technologies like Java, Ruby, ASP.NET Core etc to communicate with one another without any problem.

## Create the Example Project

Create a new project in Visual Studio, choose ASP.NET Core Web APP (MVC) template and name it APIControllers. Select the latest version of the DOT NET framework which is .NET 10.0. I have shown this in the below image.

![.NET 10.0 Web API](https://www.yogihosting.com/wp-content/uploads/2023/11/dotnet-8.png ".NET 10.0 Web API")

### Model & Repository

Inside the Models folder, add a class called Reservation.cs to it. The class code is given below:

| 1

2

3

4

5

6

7

8

9

10 | `namespace` `APIControllers.Models`

`{`

    `public` `class` `Reservations`

    `{`

        `public` `int` `Id {` `get``;` `set``; }`

        `public` `string` `Name {` `get``;` `set``; }`

        `public` `string` `StartLocation {` `get``;` `set``; }`

        `public` `string` `EndLocation {` `get``;` `set``; }`

    `}`

`}` |

Next add a class file called IRepository.cs to the Models folder and used it to define an interface as shown in the below code.

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

11 | `namespace` `APIControllers.Models`

`{`

    `public` `interface` `IRepository`

    `{`

        `IEnumerable<Reservation> Reservations {` `get``; }`

        `Reservation` `this``[``int` `id] {` `get``; }`

        `Reservation AddReservation(Reservation reservation);`

        `Reservation UpdateReservation(Reservation reservation);`

        `void` `DeleteReservation(``int` `id);`

    `}`

`}` |

Finally add a class file called Repository.cs to the Models folder and used it to define a non-persistent store of reservations. It inherits the IRepository interface we defined earlier.

```
namespace APIControllers.Models
{
    public class Repository : IRepository
    {
        private Dictionary<int, Reservation> items;

        public Repository()
        {
            items = new Dictionary<int, Reservation>();
            new List<Reservation> {
                new Reservation {Id=1, Name = "Ankit", StartLocation = "New York", EndLocation="Beijing" },
                new Reservation {Id=2, Name = "Bobby", StartLocation = "New Jersey", EndLocation="Boston" },
                new Reservation {Id=3, Name = "Jacky", StartLocation = "London", EndLocation="Paris" }
                }.ForEach(r => AddReservation(r));
        }

        public Reservation this[int id] => items.ContainsKey(id) ? items[id] : null;

        public IEnumerable<Reservation> Reservations => items.Values;

        public Reservation AddReservation(Reservation reservation)
        {
            if (reservation.Id == 0)
            {
                int key = items.Count;
                while (items.ContainsKey(key)) { key++; };
                reservation.Id = key;
            }
            items[reservation.Id] = reservation;
            return reservation;
        }

        public void DeleteReservation(int id) => items.Remove(id);

        public Reservation UpdateReservation(Reservation reservation) => AddReservation(reservation);
    }
}
```

The Repository class creates 3 set of reservation objects when it is instantiated, and since there is no persistent storage, any changes will be lost when the application is stopped or restarted.

The Class contains methods and properties to do **CRUD Operations** and all the reservations are stored in a `Dictionary<int, Reservation>` type object. These methods and properties are:

-   AddReservation – method is used for creating new reservations.

-   Reservations – property for reading reservation.
-   UpdateReservation – method is used for updating reservations.

-   DeleteReservation – method to delete reservations.

CRUD stand for CREATE, READ, UPDATE and DELETE of objects. Normally in a class each of these operations are done by a specific function.

### Configuration in the Program class

We use [AddSingleton](https://www.yogihosting.com/aspnet-core-dependency-injection/#addsingleton) method to set up the service mapping for the reservation repository. We do this by adding the below given code line to the Program.cs class.

```
builder.Services.AddSingleton<IRepository, Repository>();
```

## Controller for Web API

Now comes the most important part of creating a **Controller for the Web API**. Remember that this Controller is just a normal Controller, that allows data in the model to be retrieved or modified, and then deliver it to the client. It does this without having to use the actions provided by the regular controllers.

The *data delivery* is done by following a pattern known by name as **REST**. REST Stands for **REpresentational State Transfer** pattern, which contains 2 things:

-   1\. Action Methods which do specific operations and then deliver some data to the client. These methods are decorated with attributes that makes them to be invoked only by **HTTP requests**.

-   2\. URLs which defines operational tasks. These operations can be – sending full or part of a data, adding, deleting or updating records. In fact it can be anything.

First add the package called Microsoft.AspNetCore.JsonPatch from NuGet. This is needed to support **JSON Patch**. I have shown this package in the below image.

![Microsoft.AspNetCore.JsonPatch](https://www.yogihosting.com/wp-content/uploads/2020/07/Microsoft.AspNetCore.JsonPatch.png "Microsoft.AspNetCore.JsonPatch package")

Next to the Controllers folder of the project, add a new Controller called ReservationController.cs. Add the following code to it.

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

52 | `using` `APIControllers.Models;`

`using` `Microsoft.AspNetCore.JsonPatch;`

`using` `Microsoft.AspNetCore.Mvc;`

`namespace` `APIControllers.Controllers`

`{`

    `[ApiController]`

    `[Route(``"api/[controller]"``)]`

    `public` `class` `ReservationController : ControllerBase`

    `{`

        `private` `IRepository repository;`

        `public` `ReservationController(IRepository repo) => repository = repo;`

        `[HttpGet]`

        `public` `IEnumerable<Reservation> Get() => repository.Reservations;`

        `[HttpGet(``"{id}"``)]`

        `public` `ActionResult<Reservation> Get(``int` `id)`

        `{`

            `if` `(id == 0)`

                `return` `BadRequest(``"Value must be passed in the request body."``);`

            `return` `Ok(repository[id]);`

        `}`

        `[HttpPost]`

        `public` `Reservation Post([FromBody] Reservation res) =>`

        `repository.AddReservation(``new` `Reservation`

        `{`

            `Name = res.Name,`

            `StartLocation = res.StartLocation,`

            `EndLocation = res.EndLocation`

        `});`

        `[HttpPut]`

        `public` `Reservation Put([FromForm] Reservation res) => repository.UpdateReservation(res);`

        `[HttpPatch(``"{id}"``)]`

        `public` `StatusCodeResult Patch(``int` `id, [FromBody] JsonPatchDocument<Reservation> patch)`

        `{`

            `var` `res = (Reservation)((OkObjectResult)Get(id).Result).Value;`

            `if` `(res !=` `null``)`

            `{`

                `patch.ApplyTo(res);`

                `return` `Ok();`

            `}`

            `return` `NotFound();`

        `}`

        `[HttpDelete(``"{id}"``)]`

        `public` `void` `Delete(``int` `id) => repository.DeleteReservation(id);`

    `}`

`}` |

Explanation

Notice the Controller derives from ControllerBase class and has an attribute called \[ApiController\] applied to it. The Controller gets the Reservation class object in the constructor through the Dependency Injection feature.

### Route of the API Controller

The route by which this controller can be reached is defined by Attribute Routes. You can check my tutorial called [Learn Attribute Routing in ASP.NET Core](https://www.yogihosting.com/aspnet-core-attribute-routing/) to know it in full details.

This **Web API Controller** is reached through the URL – https://localhost:44324/api/Reservation. Here “44324” is the port number.

| 1

2

3

4

5

6 | `[ApiController]`

`[Route(``"api/[controller]"``)]`

`public` `class` `ReservationController : ControllerBase`

`{`

`...`

`}` |

Now test this thing by running the application and then opening the URL – https://localhost:44324/api/Reservation on the browser. You will see the JSON of the 3 reservations as shown in the below image.

![web api url](https://www.yogihosting.com/wp-content/uploads/2019/03/all-reservations-json.jpg "Web API URL")

The URL calls the Get method of the Reservation controller. This method is shown below:

```
[HttpGet]
public IEnumerable<Reservation> Get() => repository.Reservations;
```

As you can see this method returns all the reservations so you get the **JSON of the reservations** on the browser.

## Web API Action Methods

A Web API can have action methods of type GET/POST/PUT/PATCH/DELETE/HEAD. Based on the incoming request the Web API decides which action method to execute. Example:

-   HTTP GET type request will be handled by GET Type action method.

-   HTTP POST type request will be handled by POST Type action method.
-   and so on.

By default ASP.NET CORE does the following things:

-   1\. Sends the data to the client as string if the action method returns a string. It also sets the Content-Type header of the response as text/plain.

-   2\. Sends the data to the client as JSON if the action method return type is anything but not string like int, datetime, object, simple type, complex type, etc. It also sets the Content-Type header of the response as application/json.

The Web API Controller action methods have been applied some **HTTP attributes**. So they are invoked only by the specific HTTP method known as VERBS.

Examples of VERBS are – **GET, POST, PUT, PATCH, DELETE and HEAD**.

In short these HTTP Attributes correspond to the VERBS. So a specific VERB can only invoke an action that has a corresponding HTTP Attribute.

**HTTP Attributes** are defined in the below table:

| Name | Description |
| --- | --- |
| HttpGet | It specifies that the action method can be invoked only by HTTP requests that use the GET verb. |
| HttpPost | It specifies that the action method can be invoked only by HTTP requests that use the POST verb. |
| HttpDelete | It specifies that the action method can be invoked only by HTTP requests that use the DELETE verb. |
| HttpPut | It specifies that the action method can be invoked only by HTTP requests that use the PUT verb. |
| HttpPatch | It specifies that the action method can be invoked only by HTTP requests that use the PATCH verb. |
| HttpHead | It specifies that the action method can be invoked only by HTTP requests that use the HEAD verb. |

Note – for action methods accepting multiple verbs use the C# attribute called **\[AcceptVerbs\]**.

## \[HttpGet\] Action Methods

There are two \[HttpGet\] methods that will be invoked on HTTP request of type GET. These methods work in this way.

-   1\. The first action method delivers all the reservation records to the client in **JSON**. The default return type of a Controller’s action is JSON so when a class object is delivered then it is done by **JSON**. The HttpGet attribute does not contain a routing segment so the URL to invoke this action method is – https://localhost:44324/api/Reservation. This action method is shown below.

```
[HttpGet]
public IEnumerable<Reservation> Get() => repository.Reservations;
```

-   2\. The second action method contains the id routing segment as the argument. It then delivers the reservation record for that particular id only, in JSON format. I have used Ok() method which returns the status code 200 along with the reservation record to the client. The return type of this method is ActionResult<Reservation>. The URLs to invoke this Action method are:

```
https://localhost:44324/api/Reservation/1
https://localhost:44324/api/Reservation/2
https://localhost:44324/api/Reservation/3
etc
```

This action method is shown below.

| 1

2

3

4

5

6

7 | `[HttpGet(``"{id}"``)]`

`public` `ActionResult<Reservation> Get(``int` `id)`

`{`

    `if` `(id == 0)`

        `return` `BadRequest(``"Value must be passed in the request body."``);`

    `return` `Ok(repository[id]);`

`}` |

If the client does not sends an id in the request then in that case the id gets the default value of 0. So I am simply returning BadRequest() for the response.

The **HTTP GET** requests can be made directly from the browser. Run your application and go to the URL https://localhost:44324/api/Reservation, where you will see a JSON containing all the reservations, as shown in the image below:

![ASP.NET Core Web API json](https://www.yogihosting.com/wp-content/uploads/2019/03/all-reservations-json.jpg "ASP.NET Core Web API Reservations in JSON")

Similarly if you go to the URL – https://localhost:44324/api/Reservation/1 in your browser, then you will get the **JSON** for the first Reservation, as shown by the image below:

![1st reservation json asp.net core web api](https://www.yogihosting.com/wp-content/uploads/2019/03/1st-reservation-json.jpg)

## \[HttpPost\] Action

The **HttpPost Action** method is used to create a new Reservation. It receives the Reservation object in it’s argument. The \[FromBody\] attribute applied to it’s argument ensures the body content send from the client will be decoded, and put to this argument, using the [Model Binding concept of ASP.NET Core](https://www.yogihosting.com/aspnet-core-model-binding/).

The URL to invoke this Action method is – https://localhost:44324/api/Reservation. Note that although it’s URL is same as that of the GET Action, the presence of \[HttpPost\] attribute ensures that it is invoked only for HTTP request of type POST.

This action returns the newly added Reservation object in JSON format. The reservation object also contains the value of the created Id field. This method is given below.

| 1

2

3

4

5

6

7

8 | `[HttpPost]`

`public` `Reservation Post([FromBody] Reservation res) =>`

`repository.AddReservation(``new` `Reservation`

`{`

    `Name = res.Name,`

    `StartLocation = res.StartLocation,`

    `EndLocation = res.EndLocation`

`});` |

## \[HttpPut\] Action

The **HttpPut Action** is used for doing the update of a Reservation object. It will be invoked when Http request of type PUT is made to the URL – https://localhost:44324/api/Reservation. This method is given below.

```
[HttpPut]
public Reservation Put([FromForm] Reservation res) => repository.UpdateReservation(res);
```

The \[FromForm\] attribute on the argument ensure that the form data sent by the client will be used to bind this Reservation object using Model Binding.

This action method returns the **Updated Reservation object in JSON** format.

You can also use \[FromBody\] attribute instead of \[FromForm\] attribute on the argument. The only difference is in sending the data from the client side. Data has to be send in

JSON

format if you use

FromBody

attribute, else for

FromForm

attribute it has to be send in

Form data

.

## \[HttpDelete\] Action

The HttpDelete action **deletes a reservation** from the repository. This method is called when Http request of type DELETE is initiated on the URLs given below –

```
https://localhost:44324/api/Reseration/1
https://localhost:44324/api/Reseration/2
https://localhost:44324/api/Reseration/3
etc
```

Note: The id of the reservation to be deleted is passed as the 3rd segment of the URL. This method is shown below.

| 1

2 | `[HttpDelete(``"{id}"``)]`

`public` `void` `Delete(``int` `id) => repository.DeleteReservation(id);` |

## \[HttpPatch\] Action

The **HttpPatch** Action can do multiple operations, like Adding, Removing, Updating, Copying, etc, of a Reservation object which is sent by the client. Here the client only sends a specific set of Reservation properties instead of the whole reservation object to the API in **JSON format**.

This JSON format looks like:

| 1

2

3

4 | `[`

    `{ "op": "replace", "path": "Name", "value": "Ram"},`

    `{ "op": "replace", "path": "StartLocation", "value": "Moscow"}`

`]` |

The JSON has op property which specifies the type of the operation, and a path property which specifies where the operation will be applied. The value property specifies it’s new value.

ASP.NET Core will automatically process the JSON data and sends it to the action method as a JsonPatchDocument<T> object, where T is the type of the model object to be modified (here it is the Reservation object).

The JsonPatchDocument object is then used to modify an object from the repository using the ApplyTo() method. See it’s code below.

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

11 | `[HttpPatch(``"{id}"``)]`

`public` `StatusCodeResult Patch(``int` `id, [FromBody]JsonPatchDocument<Reservation> patch)`

`{`

    `var` `res = (Reservation)((OkObjectResult)Get(id).Result).Value;`

    `if` `(res !=` `null``)`

    `{`

        `patch.ApplyTo(res);`

        `return` `Ok();`

    `}`

    `return` `NotFound();`

`}` |

The reservation is fetched by calling Get(id) method and casting the result to OkObjectResult. One more casting is perfomed afterwards to get the value in Reservation type object – var res = (Reservation)((OkObjectResult)Get(id).Result).Value.

Important for Patch

If you are creating the **Web API in ASP.NET Core version 3 and above** then you must know that AddNewtonsoftJson replaces the System.Text.Json-based input and output formatters used for formatting all JSON content. Therefore you have to enable JSON Patch support in your API project.

-   1\. Install the Microsoft.AspNetCore.Mvc.NewtonsoftJson NuGet package.

-   2\. Update the Program.cs to call AddNewtonsoftJson() method as shown in the below code.

```
builder.Services.AddControllersWithViews().AddNewtonsoftJson();
```

The table given below summarizes the working details for each of these action methods:

| HTTP Request Type | URL | Data from Client | Returns |
| --- | --- | --- | --- |
| GET | /api/Reservation | No data | Returns all the reservations in JSON |
| GET | /api/Reservation/1, /api/Reservation/2, etc | No data | Returns the reservation data of the id which is sent to its parameter in JSON |
| POST | /api/Reservation | The Reservation object in JSON. | Returns the newly created Reservation object in JSON |
| PUT | /api/Reservation | The Reservation object in JSON. | Returns the newly updated Reservation object in JSON |
| DELETE | /api/Reservation/1, /api/Reservation/2, etc | No data | None |
| PATCH | /api/Reservation/1, /api/Reservation/2, etc | A JSON that contains set of modifications to be applied. | Returns confirmation that the changes have been applied. |

The link to download the full source code of this tutorial is given below:

[Download](https://www.yogihosting.com/wp-content/themes/yogi-yogihosting/download/aspnetcore/APIControllers.zip)

Conclusion

In this way the API is created in ASP.NET Core. In the next tutorial I will consume this API, link is – [How to Call Web API in ASP.NET Core](https://www.yogihosting.com/aspnet-core-consume-api/).

---
Source: [How to Create Web APIs in ASP.NET Core [.NET 10.0 RESTful pattern]](https://www.yogihosting.com/aspnet-core-api-controllers/)