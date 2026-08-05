# Single/SingleOrDefault - Element Operators

The `Single` and `SingleOrDefault` have two overload methods. The first overload method doesn't take any input parameter and returns a single element in the collection. The second overload method takes the lambda expression as a predicate delegate that specifies the condition and returns a single element that satisfies the specified condition.

The `Single` returns the only element from a collection, or the only element that satisfies the specified condition. If a given collection includes no elements or more than one elements then `Single` throws InvalidOperationException.

The `SingleOrDefault` method does the same thing as `Single` method. The only difference is that it returns default value of the data type of a collection if a collection is empty, includes more than one element or finds no element or more than one element for the specified condition.

```
IList<int> oneElementList = new List<int>() { 7 };
IList<int> intList = new List<int>() { 7, 10, 21, 30, 45, 50, 87 };
IList<string> strList = new List<string>() { null, "Two", "Three", "Four", "Five" };
IList<string> emptyList = new List<string>();

Console.WriteLine("The only element in oneElementList: {0}", oneElementList.Single());
Console.WriteLine("The only element in oneElementList: {0}",
             oneElementList.SingleOrDefault());

Console.WriteLine("Element in emptyList: {0}", emptyList.SingleOrDefault());

Console.WriteLine("The only element which is less than 10 in intList: {0}",
             intList.Single(i => i &lt; 10));

//Followings throw an exception
//Console.WriteLine("The only Element in intList: {0}", intList.Single());
//Console.WriteLine("The only Element in intList: {0}", intList.SingleOrDefault());
//Console.WriteLine("The only Element in emptyList: {0}", emptyList.Single());
```

The following example code throws an exception because `Single` or `SingleOrDefault` returns none or multiple elements for the specified condition.

```
IList<int> oneElementList = new List<int>() { 7 };
IList<int> intList = new List<int>() { 7, 10, 21, 30, 45, 50, 87 };
IList<string> strList = new List<string>() { null, "Two", "Three", "Four", "Five" };
IList<string> emptyList = new List<string>();

//following throws error because list contains more than one element which is less than 100
Console.WriteLine("Element less than 100 in intList: {0}", intList.Single(i =&gt; i < 100));

//following throws error because list contains more than one element which is less than 100
Console.WriteLine("Element less than 100 in intList: {0}", 
                                    intList.SingleOrDefault(i => i &lt; 100));

//following throws error because list contains more than one elements
Console.WriteLine("The only Element in intList: {0}", intList.Single());

//following throws error because list contains more than one elements
Console.WriteLine("The only Element in intList: {0}", intList.SingleOrDefault());

//following throws error because list does not contains any element
Console.WriteLine("The only Element in emptyList: {0}", emptyList.Single());
```

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Single/SingleOrDefault - Element Operators](https://www.tutorialsteacher.com/linq/linq-element-operator-single-singleordefault)