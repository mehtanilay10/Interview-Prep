# First, FirstOrDefault - Element Operators

The `First` and `FirstOrDefault` method returns an element from the zeroth index in the collection i.e. the first element. Also, it returns an element that satisfies the specified condition.

| Element Operators | Description |
| --- | --- |
| First | Returns the first element of a collection, or the first element that satisfies a condition. |
| FirstOrDefault | Returns the first element of a collection, or the first element that satisfies a condition. Returns a default value if index is out of range. |

`First` and `FirstOrDefault` has two overload methods. The first overload method doesn't take any input parameter and returns the first element in the collection. The second overload method takes the lambda expression as predicate delegate to specify a condition and returns the first element that satisfies the specified condition.

```
public static TSource First<TSource>(this IEnumerable<TSource> source);public static TSource First<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate);public static TSource FirstOrDefault<TSource>(this IEnumerable<TSource> source);public static TSource FirstOrDefault<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate);
```

The `First` method returns the first element of a collection, or the first element that satisfies the specified condition using lambda expression or Func delegate. If a given collection is empty or does not include any element that satisfied the condition then it will throw InvalidOperation exception.

The `FirstOrDefault` method does the same thing as `First` method. The only difference is that it returns default value of the data type of a collection if a collection is empty or doesn't find any element that satisfies the condition.

The following example demonstrates `First` method.

```
IList<int> intList = new List<int>() { 7, 10, 21, 30, 45, 50, 87 };
IList<string> strList = new List<string>() { null, "Two", "Three", "Four", "Five" };
IList<string> emptyList = new List<string>();
		
Console.WriteLine("1st Element in intList: {0}", intList.First());
Console.WriteLine("1st Even Element in intList: {0}", intList.First(i =&gt; i % 2 == 0));

Console.WriteLine("1st Element in strList: {0}", strList.First());

Console.WriteLine("emptyList.First() throws an InvalidOperationException");
Console.WriteLine("-------------------------------------------------------------");
Console.WriteLine(emptyList.First());
```

Output:

1st Element in intList: 7  
1st Even Element in intList: 10  
1st Element in strList:  
emptyList.First() throws an InvalidOperationException  
\-------------------------------------------------------------  
Run-time exception: Sequence contains no elements...

The following example demonstrates `FirstOrDefault` method.

```
IList<int> intList = new List<int>() { 7, 10, 21, 30, 45, 50, 87 };
IList<string> strList = new List<string>() { null, "Two", "Three", "Four", "Five" };
IList<string> emptyList = new List<string>();
		
Console.WriteLine("1st Element in intList: {0}", intList.FirstOrDefault());
Console.WriteLine("1st Even Element in intList: {0}",
                                 intList.FirstOrDefault(i =&gt; i % 2 == 0));

Console.WriteLine("1st Element in strList: {0}", strList.FirstOrDefault());

Console.WriteLine("1st Element in emptyList: {0}", emptyList.FirstOrDefault());
```

Output:

1st Element in intList: 7  
1st Even Element in intList: 10  
1st Element in strList:  
1st Element in emptyList:

Be careful while specifying condition in `First` or `FirstOrDefault`. `First` will throw an exception if a collection does not include any element that satisfies the specified condition or includes null element.

If a collection includes null element then `FirstOrDefault` throws an exception while evaluting the specified condition. The following example demonstrates this.

```
IList<int> intList = new List<int>() { 7, 10, 21, 30, 45, 50, 87 };
IList<string> strList = new List<string>() { null, "Two", "Three", "Four", "Five" };
		
Console.WriteLine("1st Element which is greater than 250 in intList: {0}", 
                                intList.First( i > 250));

Console.WriteLine("1st Even Element in intList: {0}", 
                                strList.FirstOrDefault(s =&gt; s.Contains("T")));
```

Output:

Run-time exception: Sequence contains no matching element

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [First, FirstOrDefault - Element Operators](https://www.tutorialsteacher.com/linq/linq-element-operator-first-firstordefault)