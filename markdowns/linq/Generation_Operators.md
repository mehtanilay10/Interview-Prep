# Generation Operators

## Generation Operators: Empty, Range, Repeat

LINQ includes generation operators `DefaultIfEmpty`, `Empty`, `Range` & `Repeat`. The `Empty`, `Range` & `Repeat` methods are not extension methods for `IEnumerable` or `IQueryable` but they are simply static methods defined in a static class `Enumerable`.

| Method | Description |
| --- | --- |
| Empty | Returns an empty collection |
| Range | Generates collection of IEnumerable<T> type with specified number of elements with sequential values, starting from first element. |
| Repeat | Generates a collection of IEnumerable<T> type with specified number of elements and each element contains same specified value. |

## Empty

The `Empty()` method is not an extension method of `IEnumerable` or `IQueryable` like other LINQ methods. It is a static method included in `Enumerable` static class. So, you can call it the same way as other static methods like `Enumerable.Empty<TResult>()`. The `Empty()` method returns an empty collection of a specified type as shown below.

```
var emptyCollection1 = Enumerable.Empty<string>();
var emptyCollection2 = Enumerable.Empty<Student>();

Console.WriteLine("Count: {0} ", emptyCollection1.Count());
Console.WriteLine("Type: {0} ", emptyCollection1.GetType().Name );

Console.WriteLine("Count: {0} ",emptyCollection2.Count());
Console.WriteLine("Type: {0} ", emptyCollection2.GetType().Name );
```

Output:

Type: String\[\]  
Count: 0  
Type: Student\[\]  
Count: 0

## Range

The `Range()` method returns a collection of `IEnumerable<T>` type with specified number of elements and sequential values starting from the first element.

```
var intCollection = Enumerable.Range(10, 10);
Console.WriteLine("Total Count: {0} ", intCollection.Count());

for(int i = 0; i &lt; intCollection.Count(); i++)
    Console.WriteLine("Value at index {0} : {1}", i, intCollection.ElementAt(i));
```

Output:

Total Count: 10  
Value at index 0 : 10  
Value at index 1 : 11  
Value at index 2 : 12  
Value at index 3 : 13  
Value at index 4 : 14  
Value at index 5 : 15  
Value at index 6 : 16  
Value at index 7 : 17  
Value at index 8 : 18  
Value at index 9 : 19

In the above example, `Enumerable.Range(10, 10)` creates collection with 10 integer elements with the sequential values starting from 10. First parameter specifies the starting value of elements and second parameter specifies the number of elements to create.

## Repeat

The `Repeat()` method generates a collection of `IEnumerable<T>` type with specified number of elements and each element contains same specified value.

```
var intCollection = Enumerable.Repeat<int>(10, 10);
Console.WriteLine("Total Count: {0} ", intCollection.Count());

for(int i = 0; i &lt; intCollection.Count(); i++)
    Console.WriteLine("Value at index {0} : {1}", i, intCollection.ElementAt(i));
```

Output:

Total Count: 10  
Value at index 0: 10  
Value at index 1: 10  
Value at index 2: 10  
Value at index 3: 10  
Value at index 4: 10  
Value at index 5: 10  
Value at index 6: 10  
Value at index 7: 10  
Value at index 8: 10  
Value at index 9: 10

In the above example, `Enumerable.Repeat<int>(10, 10)` creates collection with 100 integer type elements with the repeated value of 10. First parameter specifies the values of all the elements and second parameter specifies the number of elements to create.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Generation Operators](https://www.tutorialsteacher.com/linq/linq-generation-operators)