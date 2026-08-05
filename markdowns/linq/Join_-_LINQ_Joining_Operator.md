# Join - LINQ Joining Operator

The joining operators joins the two sequences (collections) and produce a result.

| Joining Operators | Usage |
| --- | --- |
| [Join](https://www.tutorialsteacher.com/linq/linq-joining-operator-join#join) | The Join operator joins two sequences (collections) based on a key and returns a resulted sequence. |
| [GroupJoin](https://www.tutorialsteacher.com/linq/linq-joining-operator-groupjoin) | The GroupJoin operator joins two sequences based on keys and returns groups of sequences. It is like Left Outer Join of SQL. |

## Join

The Join operator operates on two collections, inner collection & outer collection. It returns a new collection that contains elements from both the collections which satisfies specified expression. It is the same as **inner join** of SQL.

### Join in Method Syntax

The Join extension method has two overloads as shown below.

```
public static IEnumerable<TResult> Join<TOuter, TInner, TKey, TResult>(this IEnumerable<TOuter> outer,IEnumerable<TInner> inner, Func<TOuter, TKey> outerKeySelector,Func<TInner, TKey> innerKeySelector,Func<TOuter, TInner, TResult> resultSelector);public static IEnumerable<TResult> Join<TOuter, TInner, TKey, TResult>(this IEnumerable<TOuter> outer,IEnumerable<TInner> inner,Func<TOuter, TKey> outerKeySelector,Func<TInner, TKey> innerKeySelector,Func<TOuter, TInner, TResult> resultSelector,IEqualityComparer<TKey> comparer);
```

As you can see in the first overload method takes five input parameters (except the first 'this' parameter): 1) outer 2) inner 3) outerKeySelector 4) innerKeySelector 5) resultSelector.

Let's take a simple example. The following example joins two string collection and return new collection that includes matching strings in both the collection.

```
IList<string> strList1 = new List<string>() { 
    "One", 
    "Two", 
    "Three", 
    "Four"
};

IList<string> strList2 = new List<string>() { 
    "One", 
    "Two", 
    "Five", 
    "Six"
};

var innerJoin = strList1.Join(strList2,
                      str1 => str1, 
                      str2 => str2, 
                      (str1, str2) =&gt; str1);
```

One  
Two

Now, let's understand join metohod using following Student and Standard class where Student class includes StandardID that matches with StandardID of Standard class.

```
public class Student{ 
    public int StudentID { get; set; }
    public string StudentName { get; set; }
    public int StandardID { get; set; }
}

public class Standard{ 
    public int StandardID { get; set; }
    public string StandardName { get; set; }
}
```

The following example demonstrates LINQ Join query.

```
IList<Student> studentList = new List<Student>() { 
    new Student() { StudentID = 1, StudentName = "John", StandardID =1 },
    new Student() { StudentID = 2, StudentName = "Moin", StandardID =1 },
    new Student() { StudentID = 3, StudentName = "Bill", StandardID =2 },
    new Student() { StudentID = 4, StudentName = "Ram" , StandardID =2 },
    new Student() { StudentID = 5, StudentName = "Ron"  } 
};

IList<Standard> standardList = new List<Standard>() { 
    new Standard(){ StandardID = 1, StandardName="Standard 1"},
    new Standard(){ StandardID = 2, StandardName="Standard 2"},
    new Standard(){ StandardID = 3, StandardName="Standard 3"}
};

var innerJoin = studentList.Join(// outer sequence 
                      standardList,  // inner sequence 
                      student => student.StandardID,    // outerKeySelector
                      standard => standard.StandardID,  // innerKeySelector
                      (student, standard) =&gt; new  // result selector
                                    {
                                        StudentName = student.StudentName,
                                        StandardName = standard.StandardName
                                    });
```

The following image illustrate the parts of Join operator in the above example.

![join operator](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flinq-join-operator.webp&w=3840&q=75)

In the above example of join query, studentList is outer sequence because query starts from it. First parameter in Join method is used to specify the inner sequence which is standardList in the above example. Second and third parameter of Join method is used to specify a field whose value should be match using lambda expression in order to include element in the result. The key selector for the outer sequence `student => student.StandardID` indicates that take StandardID field of each elements of studentList should be match with the key of inner sequence `standard => standard.StandardID`. If value of both the key field is matched then include that element into result.

The last parameter in Join method is an expression to formulate the result. In the above example, result selector includes StudentName and StandardName property of both the sequence.

StandardID Key of both the sequences (collections) must match otherwise the item will not be included in the result. For example, Ron is not associated with any standard so Ron is not included in the result collection. innerJoinResult in the above example would contain following elements after execution:

John - Standard 1  
Moin - Standard 1  
Bill - Standard 2  
Ram - Standard 2  

The following example demonstrates the Join operator in method syntax in VB.Net.

```
Dim innerJoin = studentList.Join(standardList, 
                                    Function(s) s.StandardID, 
                                    Function(std) std.StandardID, 
                                    Function(s, std) New With 
                                    {
                                        .StudentName = s.StudentName, 
                                        .StandardName = std.StandardName
                                    });
```

### Join in Query Syntax

Join operator in query syntax works slightly different than method syntax. It requires outer sequence, inner sequence, key selector and result selector. 'on' keyword is used for key selector where left side of 'equals' operator is outerKeySelector and right side of 'equals' is innerKeySelector.

```
from ... in outerSequence<br />
        join ... in innerSequence  <br />
        on outerKey equals innerKey<br />
        select ...
```

The following example of Join operator in query syntax returns a collection of elements from studentList and standardList if their `Student.StandardID` and `Standard.StandardID` is match.

```
IList<Student> studentList = new List<Student>() { 
    new Student() { StudentID = 1, StudentName = "John", Age = 13, StandardID =1 },
    new Student() { StudentID = 2, StudentName = "Moin",  Age = 21, StandardID =1 },
    new Student() { StudentID = 3, StudentName = "Bill",  Age = 18, StandardID =2 },
    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20, StandardID =2 },
    new Student() { StudentID = 5, StudentName = "Ron" , Age = 15 } 
};

IList<Standard> standardList = new List<Standard>() { 
    new Standard(){ StandardID = 1, StandardName="Standard 1"},
    new Standard(){ StandardID = 2, StandardName="Standard 2"},
    new Standard(){ StandardID = 3, StandardName="Standard 3"}
};

var innerJoin = from s in studentList // outer sequence
                      join st in standardList //inner sequence 
                      on s.StandardID equals st.StandardID // key selector 
                      select new { // result selector 
                                    StudentName = s.StudentName, 
                                    StandardName = st.StandardName 
                                };
```

Output:

John - Standard 1  
Moin - Standard 1  
Bill - Standard 2  
Ram - Standard 2

Use the **equals** operator to match key selector in query syntax. `==` is not valid.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Join - LINQ Joining Operator](https://www.tutorialsteacher.com/linq/linq-joining-operator-join)