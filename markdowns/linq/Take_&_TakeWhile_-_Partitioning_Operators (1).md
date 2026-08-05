# Take & TakeWhile - Partitioning Operators

The partitioning operators split the sequence (collection) into two parts and returns one of the parts.

The `Take()` extension method returns the specified number of elements starting from the first element.

```
IList<string> strList = new List<string>(){ "One", "Two", "Three", "Four", "Five" };

var newList = strList.Take(2);

foreach(var str in newList)
    Console.WriteLine(str);
```

Output:

One  
Two

The `Take` & `TakeWhile` operator is **Not Supported in C# query syntax**. However, you can use `Take/TakeWhile` method on query variable or wrap whole query into brackets and then call `Take/TakeWhile`.

```
Dim takeResult = From s In studentList
                 Take 3
                 Select s
```

## TakeWhile

The `TakeWhile()` extension method returns elements from the given collection until the specified condition is true. If the first element itself doesn't satisfy the condition then returns an empty collection.

The `TakeWhile` method has two overload methods. One method accepts the predicate of `Func<TSource, bool>` type and the other overload method accepts the predicate `Func<TSource, int, bool>` type that passes the index of element.

In the following example, `TakeWhile()` method returns a new collection that includes all the elements till it finds a string whose length less than 4 characters.

```
IList<string> strList = new List<string>() { 
                                            "Three", 
                                            "Four", 
                                            "Five", 
                                            "Hundred"  };

var result = strList.TakeWhile(s => s.Length &gt; 4);

foreach(string str in result)
        Console.WriteLine(str);
```

Output:

Three

In the above example, `TakeWhile()` includes only first element because second string element does not satisfied the condition.

`TakeWhile` also passes an index of current element in predicate function. Following example of `TakeWhile` method takes elements till length of string element is greater than it's index

```
IList<string> strList = new List<string>() { 
                                            "One", 
                                            "Two", 
                                            "Three", 
                                            "Four", 
                                            "Five", 
                                            "Six"  };

var resultList = strList.TakeWhile((s, i) => s.Length &gt; i);

foreach(string str in resultList)
        Console.WriteLine(str);
```

Output:

One  
Two  
Three  
Four

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Take & TakeWhile - Partitioning Operators](https://www.tutorialsteacher.com/linq/linq-partitioning-operators-take-takewhile)