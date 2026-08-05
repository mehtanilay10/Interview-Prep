# ASP.Net MVC Interview Questions Objective: Part 2

This article is the second part of the article [ASP.NET MVC Interview Questions Objective: Part 1](https://www.c-sharpcorner.com/UploadFile/c325de/Asp-Net-mvc-interview-questions-objective-part-1/).

**Objective Interview Questions on ASP.NET MVC**

**Question 21:** Which page is used to serve the common layout page for a group of views?

**Answer:** \_ViewStart.cshml

**Question 22: How can be render layout in ASP.NET MVC?**

**Answer:**

-   The \_ViewStart.cshtml file in the Views folder provides the default Layout page.  
    
-   We can also place the \_ViewStart.cshtml file in the SubFolders of Views for providing a default layout to a specific directory.  
    
-   Defining the Layout in a view on the top. @{ Layout =”~/Views/Shared/\_SchoolLayout.cshtml”;}  
    
-   Layout from ActionResult

**Question 23: In which version of MVC was the App\_Start folder introduced?**

**Answer:**

MVC 4

**Question 24: What is the name of the configuration files that the App\_Start folder contains?**

**Answer:**

-   BundleConfig.cs

-   FilterConfig.cs
-   RouteConfig.cs

-   WebApiConfig.cs

**Question 25: Which does not require type casting among ViewData, ViewBag, TempData and Session?**  
**Answer:** ViewBag

**Question 26: What is the life of ViewData, ViewBag, TempData and Session in increasing order.**

**Answer:**

-   TempData: only until the target view is fully loaded.

-   ViewData: during the current request.
-   ViewBag: during the current request.

-   Session: for all requests.

**Question 27: From which class does ViewData, ViewBag, TempData and Session derive from?**

**Answer:**

-   TempData: TempDataDictionary class

-   ViewData: ViewDataDictionary class
-   ViewBag: takes advantage of the new dynamic features in C# 4.0

-   Session: HttpSessionState class

**Question 28: Which class is the base class of all action results?**

**Answer:**

ActionResult class  
**  
Question 29: Why do we need server-side validation when we have client-side validation?

Answer:

**The user can disable a script in his browser and bypass client-side validation. So, we need server-side validation to protect from such unvalidated data.  
**  
Question 30: Which property is used to determine an error in Model State?

Answer:

**ModelState.IsValid property

If there is any error then ModelState.IsValid returns false. If there is no error it will return true.  
**  
Question 31: What is latency?**

**Answer:**

The amount of time it takes for the host server to receive, process, and deliver on a request for a page resource (images, CSS files, and so on).  
**  
Question 32: Why do we use CDN?

Answer:

**

-   It solves latency problems.

-   A CDN caches static resources in distributed servers across a region or worldwide.
-   Thereby bringing resources closer to users and reducing round trip time.

**Question 33: In which version of ASP.NET MVC was bundling and minification techniques introduced?**  
**  
Answer:** ASP.NET MVC4 and .NET Framework 4.5  
**  
Question 34: What is bundling and minification in ASP.NET MVC?**

**Answer:**

Bundling: It bundles multiple files into a single file. You can create CSS, JavaScript and other bundles. Fewer files mean fewer HTTP requests that can improve first page load performance.  
Minification: Minification does a variety of code optimizations for scripts or CSS, such as removing unnecessary white space and comments and shortening variable names to one character.  
**  
Question 34: Which filter is executed when there is an unhandled exception thrown during the execution of the ASP.NET pipeline?**  
**  
Answer:** Exception filters  
**  
Question 35: What is the order of execution of filters?**

**Answer:**

-   Authentication filters

-   Authorization filters
-   Action filters

-   Result filters

**Question 36: Various ways of implementing Dependency Injection.**

**Answer:**

-   Constructor Injection

-   Property Injection
-   Method Injection

**Question 37: Advantage of Dependency Injection.**

**Answer:**

-   Improves Application Testing

-   Improves Code Maintainability
-   Reduces Class Coupling

-   Increases code reusing

**Question 38: What is Test Driven Development?**

**Answer:**

TDD is a methodology in which we write tests first then write code.  
**  
Question 39: What is Area?

Answer:

**Area allows us to organize models, views and controllers into separate functional sections of the application.  
**  
Question 40: Can be use bundling and minification in ASP.NET MVC 3.

Answer:

**Yes, by using the System.Web.Optimization class.

I think the next 20 questions are enough for the second day. Now in total we have 40 questions.

Please add your questions also in comments. This will help the community a lot.

Your comments and suggestions are always welcomed.

---
Source: [ASP.Net MVC Interview Questions Objective: Part 2](https://www.c-sharpcorner.com/UploadFile/c325de/Asp-Net-mvc-interview-questions-objective-part-2/)