# ASP.NET Core Filters - Dependency Injection, Global Filters, Order of Execution & Filter Order

Let’s start with the **Advanced filter Topics** – Filters with Dependencies, **Global Filters**, Order of Execution of Filters & Changing Filter Order. We covered Filters from start on previous tutorial called [Filters in ASP.NET Core – Beginner to Expert level](https://www.yogihosting.com/aspnet-core-filters/), if you haven’t checked it make sure to do so.

Page Contents

## ASP.NET Core Filters Dependency Injection

If a filter has a dependency then it cannot be applied to the action method in the attribute manner. Instead the TypeFilter attribute is applied and is configured with the typeof method. This is shown below:

```
[TypeFilter(typeof(FilterName))]
```

Lets understand this by an example. Create a new class file called FilterDependency.cs inside the CustomFilters folder of your project. Here define an Interface called **IExceptionFilterMessage** to store message strings for errors encountered in the action method. The code is given below.

| 1

2

3

4

5

6

7

8 | `namespace` `Filters.CustomFilters`

`{`

    `public` `interface` `IExceptionFilterMessage`

    `{`

        `IEnumerable<``string``> Messages {` `get``; }`

        `void` `AddMessage(``string` `message);`

    `}`

`}` |

Now, to the same FilterDependency.cs class add a new class called ExceptionFilterMessage which implements the IExceptionFilterMessage interface:

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

15 | `namespace` `Filters.CustomFilters`

`{`

    `public` `interface` `IExceptionFilterMessage`

    `{`

        `IEnumerable<``string``> Messages {` `get``; }`

        `void` `AddMessage(``string` `message);`

    `}`

    `public` `class` `ExceptionFilterMessage : IExceptionFilterMessage`

    `{`

        `private` `List<``string``> messages =` `new` `List<``string``>();`

        `public` `IEnumerable<``string``> Messages => messages;`

        `public` `void` `AddMessage(``string` `message) => messages.Add(message);`

    `}`

`}` |

Now finally to the same FilterDependency.cs class, add an Exception filter called CatchErrorMessage. This Filter has a **dependency on the IExceptionFilterMessage interface** and is resolved by the [Dependency Injection feature](https://www.yogihosting.com/aspnet-core-dependency-injection/).

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

49 | `using` `Microsoft.AspNetCore.Mvc;`

`using` `Microsoft.AspNetCore.Mvc.Filters;`

`using` `Microsoft.AspNetCore.Mvc.ModelBinding;`

`using` `Microsoft.AspNetCore.Mvc.ViewFeatures;`

`namespace` `Filters.CustomFilters`

`{`

    `public` `interface` `IExceptionFilterMessage`

    `{`

        `IEnumerable<``string``> Messages {` `get``; }`

        `void` `AddMessage(``string` `message);`

    `}`

    `public` `class` `ExceptionFilterMessage : IExceptionFilterMessage`

    `{`

        `private` `List<``string``> messages =` `new` `List<``string``>();`

        `public` `IEnumerable<``string``> Messages => messages;`

        `public` `void` `AddMessage(``string` `message) => messages.Add(message);`

    `}`

    `public` `class` `CatchErrorMessage : IExceptionFilter`

    `{`

        `private` `IExceptionFilterMessage iExFilter;`

        `public` `CatchErrorMessage(IExceptionFilterMessage ex)`

        `{`

            `iExFilter = ex;`

        `}`

        `public` `void` `OnException(ExceptionContext context)`

        `{`

            `iExFilter.AddMessage(``"Exception Filter is called. "``);`

            `iExFilter.AddMessage(``"Error Message is given below. "``);`

            `iExFilter.AddMessage(context.Exception.Message);`

            `string` `allMessage =` `""``;`

            `foreach` `(``string` `message` `in` `iExFilter.Messages)`

                `allMessage += message;`

            `context.Result =` `new` `ViewResult()`

            `{`

                `ViewData =` `new` `ViewDataDictionary(``new` `EmptyModelMetadataProvider(),`

`new` `ModelStateDictionary())`

                `{`

                    `Model = allMessage`

                `}`

            `};`

        `}`

    `}`

`}` |

Notice that the CatchErrorMessage Filter does not implement the attribute class. The reason being there is no need for it since we will use \[TypeFilter\] attribute to apply it to the action method.

Do you want to learn everything about Views then my article on [ASP.NET Core Views](https://www.yogihosting.com/aspnet-core-views/) covers all about it. Do read it.

The work of the CatchErrorMessage Filter is fairly simple, it adds some string messages to the model. For adding messages we have used the IExceptionFilterMessage interface.

Now update the Program.cs to register a scoped service that will resolve the dependency for IExceptionFilterMessage object. Add the below given code line to the program class just after the call to the AddControllersWithViews() method is made.

```
builder.Services.AddScoped<IExceptionFilterMessage, ExceptionFilterMessage>();
```

All we have to do now is to apply this filter to the Exception action method using the \[TypeFilter\] attribute.

| 1

2

3

4

5

6

7

8 | `[TypeFilter(``typeof``(CatchErrorMessage))]`

`public` `IActionResult Exception(``int``? id)`

`{`

    `if` `(id ==` `null``)`

        `throw` `new` `Exception(``"Error Id cannot be null"``);`

    `else`

        `return` `View((``object``)$``"The value is {id}"``);`

`}` |

Now, run your application and go to the URL – /Home/Exception, which will generate an exception. We will see the 3 error messages on your browser as shown by the below image.

![dependency injection filters](https://www.yogihosting.com/wp-content/uploads/2019/06/filters-with-dependencies.jpg)

## ASP.NET Core Global Filters

**Global Filters** are those that are automatically applied to every action method of every controller. We don’t need to apply **Global Filters** as attributes to the action methods. A filter can be made Global through the Program.cs class.

We have created an Action Filter called TimeElapsed in the previous tutorial (kindly check it). We now will make it a global filter. So go to the Program.cs and do the following 2 configurations:

First : Make the filter as a service. So add the below code.

```
builder.Services.AddScoped<TimeElapsed>();
```

Second : Register it Globally using the MvcOptions.Filters.AddService method.

```
builder.Services.AddMvc().AddMvcOptions(options => {
    options.Filters.AddService(typeof(TimeElapsed));
});
```

Now create a new controller called ShowController and add an Index action method that returns a string:

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

`namespace` `Filters.Controllers`

`{`

    `public` `class` `ShowController : Controller`

    `{`

        `public` `string` `Index()`

        `{`

            `return` `"This is the Index action on the Show Controller"``;`

        `}`

    `}`

`}` |

We can clearly see that we haven’t applied the TimeElapsed filter to it. But since the filter is a global one, therefore when we run the application and go to the URL – /Show, then we will see the string Elapsed time: 138.7952 ms added to the response (see below image). This shows the global filter has done it’s work.

![global filters asp.net core](https://www.yogihosting.com/wp-content/uploads/2019/06/global-filters.jpg)

## ASP.NET Core Filters Execution Order

**Filters** run in a specific sequence : **authorization, action, and then result**. If multiple filters of a given type are applied to the Controller and also to it’s action methods then by default – first the Filter of the Controller will execute then the Filter of the Action will execute.

If there are Global filters then they will execute before the Filter of the Controller.

Let us demonstrate this by an example. We created a new Result Filter called ShowMessage, inside the CustomFilters folder, by implementing the IResultFilter interface.

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

29 | `using` `Microsoft.AspNetCore.Mvc.Filters;`

`using` `System.Text;`

`namespace` `Filters.CustomFilters`

`{`

    `public` `class` `ShowMessage : Attribute, IResultFilter`

    `{`

        `private` `string` `message;`

        `public` `ShowMessage(``string` `msg)`

        `{`

            `message = msg;`

        `}`

        `public` `void` `OnResultExecuting(ResultExecutingContext context)`

        `{`

            `WriteMessage(context, message);`

        `}`

        `public` `void` `OnResultExecuted(ResultExecutedContext context)`

        `{`

        `}`

        `private` `void` `WriteMessage(FilterContext context,` `string` `msg)`

        `{`

            `byte``[] bytes = Encoding.ASCII.GetBytes($``"<div>{msg}</div>"``);`

            `context.HttpContext.Response.Body.WriteAsync(bytes, 0, bytes.Length);`

        `}`

    `}`

`}` |

This filter has a message property of type string and a constructor through which this property can be initialized with a string message. The work of this Filter is fairly simple which is to write fragments of HTML to the response.

Now, make this a **global Filter** by adding the below line code to the Program.cs class:

| 1

2

3 | `builder.Services.AddMvc().AddMvcOptions(options => {`

    `options.Filters.Add(``new` `ShowMessage(``"Global"``));`

`});` |

Next, create a new controller called OrderController and add this filter as an attribute to both the controller and the index action method:

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

`namespace` `Filters.Controllers`

`{`

    `[ShowMessage(``"Controller"``)]`

    `public` `class` `OrderController : Controller`

    `{`

        `[ShowMessage(``"Action"``)]`

        `public` `IActionResult Index()`

        `{`

            `return` `View();`

        `}`

    `}`

`}` |

Now run your project and go to the URL – /Order. We will see the Global string at the first, followed by Controller and then comes the Action.

This is because the Global filter of a particular type executes at the first, then the filter applied on the Controller followed by the filter applied on the action method.

See the below image:

![Order of Execution of Filters](https://www.yogihosting.com/wp-content/uploads/2019/06/filter-order.jpg)

## Changing Filter Execution Order

The **Order of Execution** of a particular type of filter can be changed by implementing the IOrderedFilter interface.

| 1

2

3

4

5 | `namespace` `Microsoft.AspNetCore.Mvc.Filters {`

    `public` `interface` `IOrderedFilter : IFilterMetadata {`

        `int` `Order {` `get``; }`

    `}`

`}` |

This interface contains a public property called Order which is provided with an int value for setting the order.

The Filter having least Order value is executed first and so on.

Now change the ShowMessage filter to implement the **IOrderedFilter** interface and add a public int Order property:

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

12 | `using` `Microsoft.AspNetCore.Mvc.Filters;`

`using` `System.Text;`

`namespace` `Filters.CustomFilters`

`{`

    `public` `class` `ShowMessage : Attribute, IResultFilter, IOrderedFilter`

    `{`

        `public` `int` `Order {` `get``;` `set``; }`

    `}`

`}` |

Now give the Order value to the \[ShowMessage\] attribute in the Order Controller:

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

19 | `using` `System;`

`using` `System.Collections.Generic;`

`using` `System.Linq;`

`using` `System.Threading.Tasks;`

`using` `Filters.CustomFilters;`

`using` `Microsoft.AspNetCore.Mvc;`

`namespace` `Filters.Controllers`

`{`

    `[ShowMessage(``"Controller"``, Order = 2)]`

    `public` `class` `OrderController : Controller`

    `{`

        `[ShowMessage(``"Action"``, Order = -1)]`

        `public` `IActionResult Index()`

        `{`

            `return` `View();`

        `}`

    `}`

`}` |

We have given the Action method the least order value.

Now when we run your application and go to the url – /Order. We will see the filter on the Action will be executed first, followed by global filter and lastly comes the controller filter.

See the below image to confirm:

![changing filter order](https://www.yogihosting.com/wp-content/uploads/2019/06/changing-filter-order.jpg)

You can download the source code using the below link:

[Download](https://www.yogihosting.com/wp-content/themes/yogi-yogihosting/download/aspnetcore/Filters.zip)

Conclusion

I hope you liked this tutorial on **Advanced Topics on Filters**. Please provide a thumbs-up by sharing this tutorial on Facebook, twitter and instagram.

---
Source: [ASP.NET Core Filters – Dependency Injection, Global Filters, Order of Execution & Filter Order](https://www.yogihosting.com/advanced-filters-topics-aspnet-core/)