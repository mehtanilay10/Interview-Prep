# ThenBy & ThenByDescending - Sorting Operators

The `ThenBy` and `ThenByDescending` extension methods are used for sorting on multiple fields.

The `OrderBy()` method sorts the collection in ascending order based on specified field. Use ThenBy() method after OrderBy to sort the collection on another field in ascending order. Linq will first sort the collection based on primary field which is specified by OrderBy method and then sort the resulted collection in ascending order again based on secondary field specified by `ThenBy` method.

The same way, use ThenByDescending method to apply secondary sorting in descending order.

The following example shows how to use ThenBy and ThenByDescending method for second level sorting:

```
IList<Student> studentList = new List<Student>() { 
    new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
    new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
    new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
    new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 }, 
    new Student() { StudentID = 6, StudentName = "Ram" , Age = 18 }
};
var thenByResult = studentList.OrderBy(s => s.StudentName).ThenBy(s => s.Age);

var thenByDescResult = studentList.OrderBy(s => s.StudentName).ThenByDescending(s =&gt; s.Age);
```

As you can see in the above example, we first sort a `studentList` collection by `StudentName` and then by `Age`. So now, `thenByResult` would contain following elements after sorting:

thenByDescResult would contain following elements. Please notice that Ram with age 20 comes before Ram with age 18 because it has used ThenByDescending.

Learn about grouping operators next.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [ThenBy & ThenByDescending - Sorting Operators](https://www.tutorialsteacher.com/linq/linq-sorting-operators-thenby-thenbydescending)