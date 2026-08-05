# Anatomy of the Lambda Expression

C# 3.0(.NET 3.5) introduced the lambda expression along with LINQ. The lambda expression is a shorter way of representing [anonymous method](https://www.tutorialsteacher.com/csharp/csharp-anonymous-method) using some special syntax.

For example, following anonymous method checks if student is teenager or not:

```
delegate(Student s) { return s.Age > 12 && s.Age < 20; };
```

```
Dim isStudentTeenAger = Function(s As Student) As Boolean
                                    Return s.Age > 12 And s.Age < 20
                        End Function
```

The above anonymous method can be represented using a Lambda Expression in C# and VB.Net as below:

```
s => s.Age > 12 && s.Age < 20
```

```
Function(s) s.Age  &gt; 12 And s.Age &lt; 20
```

Let's see how the lambda expression evolved from the following anonymous method.

```
delegate(Student s) { return s.Age > 12 && s.Age < 20; };
```

The Lambda expression evolves from anonymous method by first removing the delegate keyword and parameter type and adding a lambda operator =>.

![Lambda Expression from Anonymous Method](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flambda-expression-1.webp&w=3840&q=75)

The above lambda expression is absolutely valid, but we don't need the curly braces, return and semicolon if we have only one statement that returns a value. So we can eliminate it.

Also, we can remove parenthesis (), if we have only one parameter.

![Lambda Expression from Anonymous Method](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flambda-expression-2.webp&w=3840&q=75)

Thus, we got the lambda expression: `s => s.Age > 12 && s.Age < 20` where `**s**` is a parameter, `**=>**` is the lambda operator and `**s.Age > 12 && s.Age < 20**` is the body expression:

![Lambda Expression Structure in C#](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flambda-expression-structure.webp&w=3840&q=75)

Same way we got lambda expression in VB.Net can be written as below:

![Lambda Expression Structure in VB.Net](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flambda-expression-vb.webp&w=3840&q=75)

The lambda expression can be invoked same way as delegate using ().

VB.Net doesn't support lambda operator `=>`

## Lambda Expression with Multiple Parameters

You can wrap the parameters in parenthesis if you need to pass more than one parameter, as below:

```
(s, youngAge) => s.Age >= youngAge;
```

You can also give type of each parameters if parameters are confusing:

```
<b>(Student s,int youngAge)</b> => s.Age >= youngage;
```

```
Function(s, youngAge) s.Age >= youngAge
```

## Lambda Expression without Parameter

It is not necessary to have atleast one parameter in a lambda expression. The lambda expression can be specify without any parameter also.

```
<b>()</b> => Console.WriteLine("Parameter less lambda expression")
```

## Multiple Statements in Lambda Expression Body

You can wrap expressions in curly braces if you want to have more than one statement in the body:

```
(s, youngAge) =>
<b>{</b>
  Console.WriteLine("Lambda expression with multiple statements in the body");
    
  Return s.Age >= youngAge;
<b>}</b>
```

```
Function(s , youngAge)
    
    Console.WriteLine("Lambda expression with multiple statements in the body")
    
    Return s.Age >= youngAge

End Function
```

## Declare Local Variable in Lambda Expression Body

You can declare a variable in the expression body to use it anywhere in the expression body, as below:

```
s =>
{
   int youngAge = 18;

    Console.WriteLine("Lambda expression with multiple statements in the body");

    return s.Age >= youngAge;
}
```

```
Function(s) 
                                      
        Dim youngAge As Integer = 18
            
        Console.WriteLine("Lambda expression with multiple statements in the body")
            
        Return s.Age >= youngAge
            
End Function
```

Lambda expression can also be assigned to built-in delegates such as [Func](https://www.tutorialsteacher.com/csharp/csharp-func-delegate), [Action](https://www.tutorialsteacher.com/csharp/csharp-action-delegate) and [Predicate](https://www.tutorialsteacher.com/csharp/csharp-predicate).

## Assign Lambda Expression to Delegate

The lambda expression can be assigned to `Func<in T, out TResult>` type delegate. The last parameter type in a `Func` delegate is the return type and rest are input parameters. Visit [Func delegate](https://www.tutorialsteacher.com/csharp/csharp-func-delegate) section of C# tutorials to know more about it.

Consider the following lambda expression to find out whether a student is a teenager or not.

```
Func<Student, bool> isStudentTeenAger = s => s.age > 12 && s.age < 20;

Student std = new Student() { age = 21 };

bool isTeen = isStudentTeenAger(std);// returns false
```

```
Dim isStudentTeenAger As Func(Of Student, Boolean) = Function(s) s.Age > 12 And s.Age < 20

Dim stud As New Student With {.Age = 21}

Dim isTeen As Boolean = isStudentTeenAger(stud) // returns false
```

In the above example, the Func delegate expects the first input parameter to be of Student type and the return type to be boolean. The lambda expression `s => s.age > 12 && s.age < 20` satisfies the `Func<Student, bool>` delegate requirement, as shown below:

![Func delegate with Lambda Expression](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Ffunc-with-lambda-expression.webp&w=3840&q=75)

The `Func<>` delegate shown above, would turn out to be a function as shown below.

```
bool isStudentTeenAger(Student s)
{
    return s.Age > 12 && s.Age < 20;
}
```

## Action Delegate

Unlike the Func delegate, an Action delegate can only have input parameters. Use the [Action delegate](https://www.tutorialsteacher.com/csharp/csharp-action-delegate) type when you don't need to return any value from lambda expression.

```
Action<Student> PrintStudentDetail = s => Console.WriteLine("Name: {0}, Age: {1} ", s.StudentName, s.Age);

Student std = new Student(){ StudentName = "Bill", Age=21};

PrintStudentDetail(std);//output: Name: Bill, Age: 21
```

```
Dim printStudentDetail As Action(Of Student) = Sub(s) Console.WriteLine("Name: {0}, Age: {1} ", s.StudentName, s.Age)
    
Dim stud As New Student With {.StudentName = "Bill", .Age = 21}
        
printStudentDetail(stud)//output: Name: Bill, Age: 21
```

## Lambda Expression in LINQ Query

Usually lambda expression is used with LINQ query. Enumerable static class includes `Where` extension method for `IEnumerable<T>` that accepts `Func<TSource,bool>`. So, the `Where()` extension method for `IEnumerable<Student>` collection is required to pass `Func<Student,bool>`, as shown below:

![Func delegate parameter in Where extension method](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flinq-where-extension-method.webp&w=3840&q=75)

So now, you can pass the lambda expression assigned to the Func delegate to the Where() extension method in the method syntax as shown below:

```
IList<Student> studentList = new List<Student>(){...};

Func<Student, bool> isStudentTeenAger = s => s.age > 12 && s.age < 20;

var teenStudents = studentList.Where(isStudentTeenAger).ToList<Student>();
```

```
IList<Student> studentList = new List<Student>(){...};

Func<Student, bool> isStudentTeenAger = s => s.age > 12 && s.age < 20;

var teenStudents = from s in studentList
                   where isStudentTeenAger(s)
                   select s;
```

You can follow the same method in VB.Net to pass `Func` delegate.

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Anatomy of the Lambda Expression](https://www.tutorialsteacher.com/linq/linq-lambda-expression)