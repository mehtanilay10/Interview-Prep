# What is LINQ

Language-Integrated Query (LINQ) is a powerful set of technologies based on the integration of query capabilities directly into the C# language. LINQ Queries are the first-class language construct in C# .NET, just like classes, methods, events. The LINQ provides a consistent query experience to query objects (LINQ to Objects), relational databases (LINQ to SQL), and XML (LINQ to XML).

LINQ (Language Integrated Query) is uniform query syntax in C# and VB.NET to retrieve data from different sources and formats. It is integrated in C# or VB, thereby eliminating the mismatch between programming languages and databases, as well as providing a single querying interface for different types of data sources.

For example, SQL is a Structured Query Language used to save and retrieve data from a database. In the same way, LINQ is a structured query syntax built in C# and VB.NET to retrieve data from different types of data sources such as collections, ADO.Net DataSet, XML Docs, web service and MS SQL Server and other databases.

![LINQ Usage](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flinq-usage.webp&w=3840&q=75)

LINQ queries return results as objects. It enables you to uses object-oriented approach on the result set and not to worry about transforming different formats of results into objects.

![LINQ Query](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flinq-execution.webp&w=3840&q=75)

The following example demonstrates a simple LINQ query that gets all strings from an array which contains 'a'.

```
// Data source
string[] names = {"Bill", "Steve", "James", "Mohan" };

// LINQ Query 
var myLinqQuery = from name in names
                where name.Contains('a')
                select name;
    
// Query execution
foreach(var name in myLinqQuery)
    Console.Write(name + " ");
```

In the above example, string array names is a data source. The following is a LINQ query which is assigned to a variable `myLinqQuery`.

```
from name in names
where name.Contains('a')
select name;
```

The above query uses query syntax of LINQ. You will learn more about it in the [Query Syntax](https://www.tutorialsteacher.com/linq/linq-query-syntax) chapter.

You will not get the result of a LINQ query until you execute it. LINQ query can be execute in multiple ways, here we used `foreach` loop to execute our query stored in `myLinqQuery`. The `foreach` loop executes the query on the data source and get the result and then iterates over the result set.

Thus, every LINQ query must query to some kind of data sources whether it can be array, collections, XML or other databases. After writing LINQ query, it must be executed to get the result.

Learn why should we use LINQ in the next chapter.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [What is LINQ](https://www.tutorialsteacher.com/linq/what-is-linq)