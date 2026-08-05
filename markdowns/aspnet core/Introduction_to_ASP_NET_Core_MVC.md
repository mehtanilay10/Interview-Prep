# Introduction to ASP.NET Core MVC

**ASP.NET Core MVC** is Microsoft’s Web Application development framework that is in great demand today. It is based on **Model-View-Controller (MVC)** architecture, ideas and techniques from Agile Development, and the best parts of .NET platform. In this tutorial I will introduce you with ASP.NET Core MVC.

## History of ASP.NET Core

Microsoft released **ASP.NET Core** MVC during the latter half of 2015. Over the past years they have added new features to this framework making it more powerful. The current version of this platform as on today is **.NET 8.0** version.

Before ASP.NET Core, Microsoft already had 2 other similar frameworks, these were – **ASP.NET Web Forms (popularly known as just ASP.NET) and ASP.NET MVC**. Let us discuss how ASP.NET Core is different from them.

## ASP.NET Core vs ASP.NET

| ASP.NET Core | ASP.NET |
| --- | --- |
| ASP.NET Core was released in the year 2016 and is based on .NET Core framework (now known as just **.NET**). | ASP.NET Web Forms known as just “ASP.NET” is a web application framework released way back on 2002. It is based on .NET Framework. |
| ASP.NET Core apps are Cross-platform i.e. run on Windows, Linux and macOS. | ASP.NET apps runs only on Windows. |
| ASP.NET Core apps can be hosted with a number of web servers like IIS, Kestrel, Nginx and Apache. | ASP.NET Web Forms apps can only be hosted with IIS. |
| Apps are scalable, light-weight and runs very fast. | Apps are heavy and runs slowly compared to ASP.NET Core apps. Scaling is a big problem for apps build on ASP.NET Web Forms. |
| In-built dependency injection feature. | No in-built dependency injection feature. |

## ASP.NET Core vs ASP.NET MVC

| ASP.NET Core | ASP.NET MVC |
| --- | --- |
| ASP.NET Core is based on .NET Core framework (now known as just **.NET**). First released during 2015. | ASP.NET MVC is based on .NET Framework. It’s first version came in 2007 while the last version which is ASP.NET MVC 5.0 came in 2016. MVC 6 was abandoned due to .NET Core. |
| ASP.NET Core apps are Cross-platform and can be hosted on a number of web servers like IIS, Kestrel, Nginx and Apache. | ASP.NET MVC apps runs only on Windows and uses IIS for hosting. |
| ASP.NET Core has a number of features like Dependency Injection and Middlewares. Apps have less number of files. | ASP.NET MVC is not as advanced compared to ASP.NET Core. Apps have more number of files in them. |
| Apps can be build using MVC architecture and Razor Pages. | App can be build using only MVC architecture. |
| Apps are light weight. | Apps are relatively heavy compared to ASP.NET Core apps. |

## Features of ASP.NET Core MVC

This framework is bundled with some of the most amazing feature. These are:

It is Open Source

You are free to download this framework’s source code from [https://github.com/aspnet](https://github.com/Aspnet) and even modify and compile your own version of it.

Cross-Platform

ASP.NET Core MVC is **cross-platform both for development & deployment**. It is available for all operating systems – Windows, Linux & macOS.

You can do development works in ASP.NET Core MVC using **Visual Studio** editor by Microsoft. Visual Studio works only on Windows & macOS.

For **Linux, use Visual Studio Code** editor.

Full Control over HTML & HTTP

In ASP.NET Core MVC, you get full control over HTML. You can create, simple to complex type apps, HTML styled with CSS and display them on the browser.

Similarly you get full control over HTTP requests passed between the browser and server. Creating AJAX request is also very easy.

You can easily use client side libraries like jQuery, Angular, React & Bootstrap with ASP.NET Core MVC.

Extensible Framework

ASP.NET Core MVC is highly extensible. You can make applications that can be extended to any levels in future. Key features of this framework that gives it the extensible power are:

1\. View Components  
2\. Tag Helpers  
3\. Routing

You will learn about all these features later on.

Testing made Maintainability

The ASP.NET Core MVC architecture is great for making your application maintainable and testable. You can separate, different areas of your application, into independent pieces and test them independently. Testing frameworks like xUnit & MOQ can be easily integrated for simulating any scenario.

ASP.NET Core MVC makes large to very large applications easy for maintaining.

Routing

ASP.NET Core MVC “Routing” makes SEO friendly URLs which are easy to make and can be controlled from a single place. This removes the probability of error.

You don’t have to hard core the URL, instead the Routing will make it for you based on the structure which you have set.

Example of a SEO friendly URL is:

| 1 | `/women-clothing/skirts/` |

API

ASP.NET Core MVC APIs can take full advantage of language and runtime innovations familiar to C# programmers, like the await keyword, extension methods, lambda expressions, anonymous and dynamic types, and Language Integrated Query (LINQ).

## Installing Visual Studio

The codes on these series of tutorials require installation of Visual Studio 2022 Community Edition on your PC. It requires Windows 10 or higher version. It can also be installed on macOS.

For linux systems install Visual Studio Code.

The download link of VS is here- [Download Visual Studio](https://visualstudio.microsoft.com/downloads/)

![ASP.NET Core Install Visual Studio](https://www.yogihosting.com/wp-content/uploads/2023/12/aspnet-core-install-visual-studio.png)

## What is MVC Architecture

**Model View Controller** (MVC) is a software architecture for developing applications. It has 3 pieces:

-   **Model** – It contains the data for the application to work with. This data is provided to the Model from the database or any other repository.

-   **View** – It forms the User Interface (UI) and is rendered on the browser. Views contain HTML layouts which the user actually sees on the browser
-   **Controller** – Controller is the brain of the MVC application. It processes the incoming request to the application, performs operations like data filling, data update, data delete, data inserts, etc, and finally renders an appropriate View to the browser based on the request.

Check the below image of MVC architecture.

![mvc architecture](https://www.yogihosting.com/wp-content/uploads/2018/12/mvc-architecture.png "Model View Controller")

There can be multiple Models, Controllers and Views in a MVC application.

### MVC Models

Taking an example of a social community website like Facebook, a Model will contains all your details like – your name, age, status, work info, your posts by date, your comments done on other profiles, your messages to other people, your liked pages and so on.

These details (your data) are filled on the Model by the Controller.

Models also help in preserving the business logic of the application (here for Facebook). For example when running paid ads in Facebook, Models will not allowed you to add invalid amounts on the ads. Example – ‘some amount’, ‘thirty’, ‘hello’ etc. It will only allow proper amounts like ‘$10’, ’£20.50’, ‘$100’, etc

Models communicate with only Controllers and not with Views.

### MVC Views

Views are the User Interface (UI) in MVC and are rendered on the browser. They can contain static HTML or dynamic HTML sent by the Controller. Views communicate only with the Controllers and not with Models.

Controller is responsible for rendering a particular View based on the request it gets from the browser.

### MVC Controllers

Controller is the main thing in MVC. It sits between the View and the Model and communicates with them. All HTTP requests are received by the Controller, which after processing it, fills the data on the Model and sends the data on the View. The View is then rendered on the browser.

Controller contains simple to complex logic based on the working of the application.

Summary

I hope this introduction of ASP.NET Core MVC has taught you some good things about this excellent framework. The coming tutorial will take you direct to the coding.

---
Source: [Introduction to ASP.NET Core MVC](https://www.yogihosting.com/aspnet-core-introduction/)