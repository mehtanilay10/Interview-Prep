# Why LINQ?

To understand why we should use LINQ, let's look at some examples. Suppose you want to find list of teenage students from an array of Student objects.

Before C# 2.0, we had to use a 'foreach' or a 'for' loop to traverse the collection to find a particular object. For example, we had to write the following code to find all Student objects from an array of Students where the age is between 12 and 20 (for teenage 13 to 19):

```
class Student
{
    public int StudentID { get; set; }
    public String StudentName { get; set; }
    public int Age { get; set; }
}

class Program
{
    static void Main(string[] args)
    {
        Student[] studentArray = { 
            new Student() { StudentID = 1, StudentName = "John", Age = 18 },
            new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 },
            new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 },
            new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 },
            new Student() { StudentID = 5, StudentName = "Ron" , Age = 31 },
            new Student() { StudentID = 6, StudentName = "Chris",  Age = 17 },
            new Student() { StudentID = 7, StudentName = "Rob",Age = 19  },
        };

        Student[] students = new Student[10];

        int i = 0;

        foreach (Student std in studentArray)
        {
            if (std.Age &gt; 12 && std.Age &lt; 20)
            {
                students[i] = std;
                i++;
            }
        }
    }
}
```

Use of for loop is cumbersome, not maintainable and readable. C# 2.0 introduced [delegate](https://www.tutorialsteacher.com/csharp/csharp-delegates), which can be used to handle this kind of a scenario, as shown below.

```
delegate bool FindStudent(Student std);

class StudentExtension
{ 
    public static Student[] where(Student[] stdArray, FindStudent del)
    {
        int i=0;
        Student[] result = new Student[10];
        foreach (Student std in stdArray)
            if (del(std))
            {
                result[i] = std;
                i++;
            }

        return result;
    }
}
    
class Program
{
    static void Main(string[] args)
    {
        Student[] studentArray = { 
            new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
            new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 } ,
            new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
            new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
            new Student() { StudentID = 5, StudentName = "Ron" , Age = 31 } ,
            new Student() { StudentID = 6, StudentName = "Chris",  Age = 17 } ,
            new Student() { StudentID = 7, StudentName = "Rob",Age = 19  } ,
        };

        Student[] students = StudentExtension.where(studentArray, delegate(Student std){
                return std.Age &gt; 12 && std.Age &lt; 20;
            });
        }
    }
}
```

So, with C# 2.0, you got the advantage of **delegate** in finding students with any criteria. You don't have to use a for loop to find students using different criteria. For example, you can use the same delegate function to find a student whose StudentId is 5 or whose name is Bill, as below:

```
Student[] students = StudentExtension.where(studentArray, delegate(Student std) {
        return std.StudentID == 5;
    });

//Also, use another criteria using same delegate
Student[] students = StudentExtension.where(studentArray, delegate(Student std) {
        return std.StudentName == "Bill";
    });
```

The C# team felt that they still needed to make the code even more compact and readable. So they introduced the extension method, lambda expression, expression tree, anonymous type and query expression in [C# 3.0](https://www.tutorialsteacher.com/csharp/csharp-version-history). You can use these features of C# 3.0, which are building blocks of LINQ to query to the different types of collection and get the resulted element(s) in a single statement.

The example below shows how you can use LINQ query with lambda expression to find a particular student(s) from the student collection.

```
class Program
{
    static void Main(string[] args)
    {
        Student[] studentArray = { 
                    <span className="kwrd">new</span> Student() { StudentID = 1, StudentName = <span className="str">"John"</span>, age = 18 } ,
                    <span className="kwrd">new</span> <span className="userclass">Student</span>() { StudentID = 2, StudentName = <span className="str">"Steve"</span>,  age = 21 } ,
                    <span className="kwrd">new</span> <span className="userclass">Student</span>() { StudentID = 3, StudentName = <span className="str">"Bill"</span>,  age = 25 } ,
                    <span className="kwrd">new</span> <span className="userclass">Student</span>() { StudentID = 4, StudentName = <span className="str">"Ram"</span> , age = 20 } ,
                    <span className="kwrd">new</span> <span className="userclass">Student</span>() { StudentID = 5, StudentName = <span className="str">"Ron"</span> , age = 31 } ,
                    <span className="kwrd">new</span> <span className="userclass">Student</span>() { StudentID = 6, StudentName = <span className="str">"Chris"</span>,  age = 17 } ,
                    <span className="kwrd">new</span> <span className="userclass">Student</span>() { StudentID = 7, StudentName = <span className="str">"Rob"</span>,age = 19  } ,
                };

        <span className="rem">// Use LINQ to find teenager students</span>
        <span className="userclass">Student</span>[] teenAgerStudents = studentArray.Where(s =&gt; s.age &gt; 12 &amp;&amp; s.age &lt; 20).ToArray();
       
        <span className="rem">// Use LINQ to find first student whose name is Bill </span>
        <span className="userclass">Student</span> bill = studentArray.Where(s =&gt; s.StudentName == "Bill").FirstOrDefault();
        
        <span className="rem">// Use LINQ to find student whose StudentID is 5</span>
        <span className="userclass">Student</span> student5 = studentArray.Where(s =&gt; s.StudentID == 5).FirstOrDefault();
    }
}
```

As you can see in the above example, we specify different criteria using LINQ operator and lambda expression in a single statement. Thus, LINQ makes code more compact and readable and it can also be used to query different data sources. For example, if you have a student table in a database instead of an array of student objects as above, you can still use the same query to find students using the [Entity Framework](http://www.entityframeworktutorial.net/ "Entity Framework Tutorials").

## Advantages of LINQ

-   **Familiar language:** Developers don't have to learn a new query language for each type of data source or data format.

-   **Less coding:** It reduces the amount of code to be written as compared with a more traditional approach.
-   **Readable code:** LINQ makes the code more readable so other developers can easily understand and maintain it.

-   **Standardized way of querying multiple data sources:** The same LINQ syntax can be used to query multiple data sources.
-   **Compile time safety of queries:** It provides type checking of objects at compile time.

-   **IntelliSense Support:** LINQ provides IntelliSense for generic collections.
-   **Shaping data:** You can retrieve data in different shapes.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Why LINQ?](https://www.tutorialsteacher.com/linq/why-linq)