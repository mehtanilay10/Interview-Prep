# LINQ API in .NET

We can write LINQ queries for the classes that implement [IEnumerable<T>](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1?view=netframework-4.8 "IEnumerable Members") or [IQueryable<T>](https://docs.microsoft.com/en-us/dotnet/api/system.linq.iqueryable-1?view=netframework-4.8 "IQueryable Members") interface. The [*System.Linq*](https://docs.microsoft.com/en-us/dotnet/api/system.linq?view=netframework-4.8 "system.linq") namespace includes the following classes and interfaces require for LINQ queries.

![LINQ API](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2FLINQClassDiagram.webp&w=3840&q=75)

*System.Linq* namespace is included by default when you add a new class in Visual Studio.

LINQ queries uses extension methods for classes that implement `IEnumerable` or `IQueryable` interface. The `Enumerable` and `Queryable` are two static classes that contain extension methods to write LINQ queries.

## Enumerable

The [Enumerable](http://msdn.microsoft.com/en-us/library/system.linq.enumerable\(v=vs.110\).aspx\) "Enumerable class members") class includes extension methods for the classes that implement `IEnumerable<T>` interface, for example all the built-in collection classes implement `IEnumerable<T>` interface and so we can write LINQ queries to retrieve data from the built-in collections.

The following figure shows the extension methods included in `Enumerable` class that can be used with the generic collections in C# or VB.Net.

![Enumerable Class](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2FEnumerable-extension-methods.webp&w=3840&q=75)

The following figure shows all the extension methods available in `Enumerable` class.

![Enumerable Class](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2FEnumerable.webp&w=3840&q=75)

## Queryable

The [Queryable](http://msdn.microsoft.com/en-us/library/system.linq.queryable\(v=vs.110\).aspx "Queryable class members") class includes extension methods for classes that implement [IQueryable<T>](http://msdn.microsoft.com/en-us/library/vstudio/bb351562\(v=vs.100\).aspx "IQueryable<T> members") interface. The `IQueryable<T>` interface is used to provide querying capabilities against a specific data source where the type of the data is known. For example, Entity Framework api implements `IQueryable<T>` interface to support LINQ queries with underlaying databases such as MS SQL Server.

Also, there are APIs available to access third party data; for example, LINQ to Amazon provides the ability to use LINQ with Amazon web services to search for books and other items. This can be achieved by implementing the `IQueryable` interface for Amazon.

The following figure shows the extension methods available in the `Queryable` class can be used with various native or third party data providers.

![Queryable class](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2FQueryable-extension-methods.webp&w=3840&q=75)

The following figure shows the extension methods available in the `Queryable` class.

![Queryable class](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Fqueryable.webp&w=3840&q=75)

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [LINQ API in .NET](https://www.tutorialsteacher.com/linq/linq-api)