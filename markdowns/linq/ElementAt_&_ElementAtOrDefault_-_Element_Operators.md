# ElementAt & ElementAtOrDefault - Element Operators

Element operators return a particular element from a sequence (collection).

The following table lists all the Element operators in LINQ.

The `ElementAt()` method returns an element from the specified index from a given collection. If the specified index is out of the range of a collection then it will throw an *Index out of range* exception. Please note that index is a zero based index.

The `ElementAtOrDefault()` method also returns an element from the specified index from a collaction and if the specified index is out of range of a collection then it will return a default value of the data type instead of throwing an error.

The following example demonstrates ElementAt and ElementAtOrDefault method on primitive collection.

```
IList<int> intList = new List<int>() { 10, 21, 30, 45, 50, 87 };
IList<string> strList = new List<string>() { "One", "Two", null, "Four", "Five" };

Console.WriteLine("1st Element in intList: {0}", intList.ElementAt(0));
Console.WriteLine("1st Element in strList: {0}", strList.ElementAt(0));
		
Console.WriteLine("2nd Element in intList: {0}", intList.ElementAt(1));
Console.WriteLine("2nd Element in strList: {0}", strList.ElementAt(1));
		
Console.WriteLine("3rd Element in intList: {0}", intList.ElementAtOrDefault(2));
Console.WriteLine("3rd Element in strList: {0}", strList.ElementAtOrDefault(2));

Console.WriteLine("10th Element in intList: {0} - default int value", 
                intList.ElementAtOrDefault(9));		
Console.WriteLine("10th Element in strList: {0} - default string value (null)",
                 strList.ElementAtOrDefault(9));		
		
		
Console.WriteLine("intList.ElementAt(9) throws an exception: Index out of range");
Console.WriteLine("-------------------------------------------------------------");
Console.WriteLine(intList.ElementAt(9));
```

As you can see in the above example, `intList.ElementAtOrDefault(9)` returns 0 (default value of int) because intList does not include 10th element. However `intList.ElementAt(9)` throws "Index out of range" exception.The same way, `strList.ElementAtOrDefault(9)` returns null which is default value of string type. (console display empty space because it cannot display null)

Thus, it is advisable to use the `ElementAtOrDefault` extension method to eliminate the possibility of a runtime exception.

Learn about another element operator `First` and `FirstOrDefault` in the next section.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [ElementAt & ElementAtOrDefault - Element Operators](https://www.tutorialsteacher.com/linq/linq-element-operator-elementat-elementatordefault)