# Concat - Concatenation Operator

The `Concat()` method appends two sequences of the same type and returns a new sequence (collection).

```
IList<string> collection1 = new List<string>() { "One", "Two", "Three" };
IList<string> collection2 = new List<string>() { "Five", "Six"};

var collection3 = collection1.Concat(collection2);

foreach (string str in collection3)
    Console.WriteLine(str);
```

```
IList<int> collection1 = new List<int>() { 1, 2, 3 };
IList<int> collection2 = new List<int>() { 4, 5, 6 };

var collection3 = collection1.Concat(collection2);

foreach (int i in collection3)
    Console.WriteLine(i);
```

Concat operator is not supported in query syntax in C# or VB.Net.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Concat - Concatenation Operator](https://www.tutorialsteacher.com/linq/linq-concatenation-operator)