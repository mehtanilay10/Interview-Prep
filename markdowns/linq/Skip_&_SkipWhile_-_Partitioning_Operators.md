# Skip & SkipWhile - Partitioning Operators

The partitioning operators split the sequence (collection) into two parts and return one of the parts.

| Method | Description |
| --- | --- |
| [Skip](https://www.tutorialsteacher.com/linq/linq-partitioning-operators-skip-skipwhile#skip) | Skips elements up to a specified position starting from the first element in a sequence. |
| [SkipWhile](https://www.tutorialsteacher.com/linq/linq-partitioning-operators-skip-skipwhile#skipwhile) | Skips elements based on a condition until an element does not satisfy the condition. If the first element itself doesn't satisfy the condition, it then skips 0 elements and returns all the elements in the sequence. |
| [Take](https://www.tutorialsteacher.com/linq/linq-partitioning-operators-take-takewhile) | Takes elements up to a specified position starting from the first element in a sequence. |
| [](https://www.tutorialsteacher.com/linq/linq-partitioning-operators-take-takewhile#takewhile)TakeWhile | Returns elements from the first element until an element does not satisfy the condition. If the first element itself doesn't satisfy the condition then returns an empty collection. |

## Skip

The `Skip()` method skips the specified number of element starting from first element and returns rest of the elements.

```
IList<string> strList = new List<string>(){ "One", "Two", "Three", "Four", "Five" };

var newList = strList.Skip(2);

foreach(var str in newList)
    Console.WriteLine(str);
```

Output:

Three  
Four  
Five

## Skip Operator in Query Syntax

The `Skip` & `SkipWhile` operator is **Not Supported in C# query syntax**. However, you can use `Skip/SkipWhile` method on a query variable or wrap whole query into brackets and then call `Skip/SkipWhile`.

The following example demonstrates skip operator in query syntax - VB.NET

```
Dim skipResult = From s In studentList
                 Skip 3
                 Select s
```

## SkipWhile

As the name suggests, the `SkipWhile()` extension method in LINQ skip elements in the collection till the specified condition is true. It returns a new collection that includes all the remaining elements once the specified condition becomes false for any element.

The `SkipWhile()` method has two overload methods. One method accepts the predicate of `Func<TSource, bool>` type and other overload method accepts the predicate `Func<TSource, int, bool>` type that pass the index of an element.

In the following example, `SkipWhile()` method skips all elements till it finds a string whose length is equal or more than 4 characters.

```
IList<string> strList = new List<string>() { 
                                            "One", 
                                            "Two", 
                                            "Three", 
                                            "Four", 
                                            "Five", 
                                            "Six"  };

var resultList = strList.SkipWhile(s =&gt; s.Length &lt; 4);

foreach(string str in resultList)
        Console.WriteLine(str);
```

Output:

Three  
Four  
Five  
Six

In the above example, `SkipWhile()` skips first two elements because their length is less than 3 and finds third element whose length is equal or more than 4. Once it finds any element whose length is equal or more than 4 characters then it will not skip any other elements even if they are less than 4 characters.

Now, consider the following example where `SkipWhile()` does not skip any elements because the specified condition is false for the first element.

```
IList<string> strList = new List<string>() { 
                                            "Three", 
                                            "One", 
                                            "Two", 
                                            "Four", 
                                            "Five", 
                                            "Six"  };

var resultList = strList.SkipWhile(s =&gt; s.Length &lt; 4);

foreach(string str in resultList)
        Console.WriteLine(str);
```

Output:

Three  
One  
Two  
Four  
Five  
Six

The second overload of `SkipWhile()` passes an index of each elements. Consider the following example.

```
IList<string> strList = new List<string>() { 
                                            "One", 
                                            "Two", 
                                            "Three", 
                                            "Four", 
                                            "Five", 
                                            "Six"  };

var result = strList.SkipWhile((s, i) => s.Length &gt; i);

foreach(string str in result)
    Console.WriteLine(str);
```

Output:

Five  
Six

In the above example, the lambda expression includes element and index of an elements as a parameter. It skips all the elements till the length of a string element is greater than it's index.

## SkipWhile operator in Query Syntax

The `Skip` & `SkipWhile` operator is **NOT Supported in C# query syntax**. However, you can use `Skip/SkipWhile` method on a query variable or wrap whole query into brackets and then call `Skip/SkipWhile`.

The following example demonstrates skip operator in query syntax - VB.NET

```
Dim skipResult = From s In studentList
        Dim strList = New List(Of String) From {
                                        "One", 
                                        "Two", 
                                        "Three", 
                                        "Four", 
                                        "Five", 
                                        "Six"  }

Dim skipWhileResult = From s In studentList
                      Skip While s.Length &lt; 4
                      Select s
```

Output:

Three  
Four  
Five  
Six

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Skip & SkipWhile - Partitioning Operators](https://www.tutorialsteacher.com/linq/linq-partitioning-operators-skip-skipwhile)