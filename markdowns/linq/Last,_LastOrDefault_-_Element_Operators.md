# Last, LastOrDefault - Element Operators

The `Last()` and `LastOrDefault()` extension methods returns the last element from the collection.

| Element Operators | Description |
| --- | --- |
| Last() | Returns the last element from a collection, or the last element that satisfies a condition. Throws exception if no element found. |
| LastOrDefault() | Returns the last element from a collection, or the last element that satisfies a condition. Returns a default value if no element found. |

```
public static TSource Last<TSource>(this IEnumerable<TSource> source);public static TSource Last<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate);public static TSource LastOrDefault<TSource>(this IEnumerable<TSource> source);public static TSource LastOrDefault<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate);
```

The `Last()` method returns the last element from a collection, or the last element that satisfies the specified condition using lambda expression or Func delegate. If a given collection is empty or does not include any element that satisfied the condition then it will throw InvalidOperation exception.

The `LastOrDefault()` method does the same thing as the `Last()` method. The only difference is that it returns default value of the data type of a collection if a collection is empty or doesn't find any element that satisfies the condition.

```
IList<int> intList = new List<int>() { 7, 10, 21, 30, 45, 50, 87 };
IList<string> strList = new List<string>() { null, "Two", "Three", "Four", "Five" };
IList<string> emptyList = new List<string>();
		
Console.WriteLine("Last Element in intList: {0}", intList.Last());

Console.WriteLine("Last Even Element in intList: {0}", intList.Last(i => i % 2 == 0));

Console.WriteLine("Last Element in strList: {0}", strList.Last());

Console.WriteLine("emptyList.Last() throws an InvalidOperationException");
Console.WriteLine("-------------------------------------------------------------");
Console.WriteLine(emptyList.Last());
```

Output:

Last Element in intList: 87  
Last Even Element in intList: 50  
Last Element in strList: Five  
emptyList.Last() throws an InvalidOperationException  
\-------------------------------------------------------------  
Run-time exception: Sequence contains no elements...

The following example demonstrates the `LastOrDefault()` method.

```
IList<int> intList = new List<int>() { 7, 10, 21, 30, 45, 50, 87 };
IList<string> strList = new List<string>() { null, "Two", "Three", "Four", "Five" };
IList<string> emptyList = new List<string>();
		
Console.WriteLine("Last Element in intList: {0}", intList.LastOrDefault());

Console.WriteLine("Last Even Element in intList: {0}",
                                 intList.LastOrDefault(i => i % 2 == 0));

Console.WriteLine("Last Element in strList: {0}", strList.LastOrDefault());

Console.WriteLine("Last Element in emptyList: {0}", emptyList.LastOrDefault());
```

Output:

Last Element in intList: 7  
Last Even Element in intList: 50  
Last Element in strList: Five  
Last Element in emptyList:

Be careful while specifying condition in the `Last()` or `LastOrDefault()` methods. The `Last()` method will throw an exception if a collection does not include any element that satisfies the specified condition or includes null element.

If a collection includes null element then the `LastOrDefault()` throws an exception while evaluting the specified condition.

```
IList<string> strList1 = new List<string>() { "Two", "Three", "Four", "Five" };
IList<string> strList2 = new List<string>() { null, "Two", "Three", "Four", "Five" };		

Console.WriteLine(strList1.LastOrDefault(s => s.Contains("T")));
Console.WriteLine(strList2.LastOrDefault(s => s.Contains("T")));// throws an exception
```

Output:

Run-time exception: Sequence contains no matching element

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Last, LastOrDefault - Element Operators](https://www.tutorialsteacher.com/linq/linq-element-operator-last-lastordefault)