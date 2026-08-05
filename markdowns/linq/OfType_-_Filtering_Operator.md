# OfType - Filtering Operator

The OfType operator filters the collection based on the ability to cast an element in a collection to a specified type.

```
IList mixedList = new ArrayList();
mixedList.Add(0);
mixedList.Add("One");
mixedList.Add("Two");
mixedList.Add(3);
mixedList.Add(new Student() { StudentID = 1, StudentName = "Bill" });

var stringResult = from s in mixedList.OfType<string>()
                select s;

var intResult = from s in mixedList.OfType<int>()
                select s;
```

The above sample queries will return items whose type is string in the mixedList. stringResult contains following elements after execution:

You can use OfType<TResult>() extension method in linq method syntax as shown below.

The `stringResult` would contain following elements.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [OfType - Filtering Operator](https://www.tutorialsteacher.com/linq/linq-filtering-operators-oftype)