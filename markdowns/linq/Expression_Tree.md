# Expression Tree

You have learned about the [Expression](https://www.tutorialsteacher.com/linq/linq-expression) in the previous section. Now, let's learn about the Expresion tree here.

Expression tree as name suggests is nothing but expressions arranged in a tree-like data structure. Each node in an expression tree is an expression. For example, an expression tree can be used to represent mathematical formula x < y where x, < and y will be represented as an expression and arranged in the tree like structure.

Expression tree is an in-memory representation of a lambda expression. It holds the actual elements of the query, not the result of the query.

The expression tree makes the structure of the lambda expression transparent and explicit. You can interact with the data in the expression tree just as you can with any other data structure.

For example, consider the following isTeenAgerExpr expression:

```
Expression&lt;Func<Student, bool>> isTeenAgerExpr = s => s.age &gt; 12 && s.age &lt; 20;</code></pre>
        <div className="card-footer example-footer"></div></div>
</div>
    <p>
        The compiler will translate the above expression into the following expression tree:
    </p>

    <div className="card code-panel">
        <div className="card-header example-title">Example: Expression Tree in C#</div>
        <div className="panel-body"><pre className="csharpcode"><code>Expression.Lambda&lt;Func<Student, bool>>(
                Expression.AndAlso(
                    Expression.GreaterThan(Expression.Property(pe, "Age"), Expression.Constant(12, typeof(int))),
                    Expression.LessThan(Expression.Property(pe, "Age"), Expression.Constant(20, typeof(int)))),
                        new[] { pe });</code></pre>
        <div className="card-footer example-footer"></div></div>
</div>
    <p>
        You can also build an expression tree manually. Let's see how to build an expression tree for the following simple lambda expression:
    </p>

    <div className="card code-panel">
        <div className="card-header example-title">Example: Func delegate in C#:</div>
        <div className="panel-body"><pre className="csharpcode"><code>Func<Student, bool> isAdult = s => s.age &gt;= 18;</code></pre>
        <div className="card-footer example-footer"></div></div>
</div>
<p>This Func type delegate will be treated like the following method:</p>

    <div className="card code-panel">
        <div className="card-header example-title">C#:</div>
        <div className="panel-body"><pre className="csharpcode"><code>public bool function(Student s)
{
  return s.Age &gt; 18;
}</code></pre>
        <div className="card-footer example-footer"></div></div>
</div>
    <p>
        To create the expression tree, first of all, create a parameter expression where Student is the type of the parameter and 's' is the name of the parameter as below:
    </p>

    <div className="card code-panel">
        <div className="card-header example-title">Step 1: Create Parameter Expression in C#</div>
        <div className="panel-body"><pre className="csharpcode"><code>ParameterExpression pe = Expression.Parameter(typeof(Student), "s");</code></pre>
        <div className="card-footer example-footer"></div></div>
</div>
    <p>
        Now, use Expression.Property() to create s.Age expression where s is the parameter and Age is the property name of Student. (<strong>Expression</strong> is an abstract class that contains static helper methods to create the Expression tree manually.)
    </p>

    <div className="card code-panel">
        <div className="card-header example-title">Step 2: Create Property Expression in C#</div>
        <div className="panel-body"><pre className="csharpcode"><code>MemberExpression me = Expression.Property(pe, "Age");</code></pre>
        <div className="card-footer example-footer"></div></div>
</div>
    <p>
        Now, create a constant expression for 18:
    </p>

    <div className="card code-panel">
        <div className="card-header example-title">Step 3: Create Constant Expression in C#</div>
        <div className="panel-body"><pre className="csharpcode"><code>ConstantExpression constant = Expression.Constant(18, typeof(int));</code></pre>
        <div className="card-footer example-footer"></div></div>
</div>
    <p>
        Till now, we have built expression trees for s.Age (member expression) and 18 (constant expression). We now need to check whether a member expression is greater than a constant expression or not. For that, use the Expression.GreaterThanOrEqual() method and pass the member expression and constant expression as parameters:
    </p>

    <div className="card code-panel">
        <div className="card-header example-title">Step 4: Create Binary Expression in C#</div>
        <div className="panel-body"><pre className="csharpcode"><code>BinaryExpression body = Expression.GreaterThanOrEqual(me, constant);</code></pre>
        <div className="card-footer example-footer"></div></div>
</div>
    <p>
        Thus, we have built an expression tree for a lambda expression body s.Age &gt;= 18. We now need to join the parameter and body expressions. Use Expression.Lambda<tdelegate>(body, parameters array) to join the body and parameter part of the lambda expression s => s.age &gt;= 18:
    </p>

    <div className="card code-panel">
        <div className="card-header example-title">Step 5: Create Lambda Expression in C#</div>
        <div className="panel-body"><pre className="csharpcode"><code>var isAdultExprTree = Expression.Lambda&lt;Func<Student, bool>>(body, new[] { pe });</code></pre>
        <div className="card-footer example-footer"></div></div>
</div>
    <p>
        This way you can build an expression tree for simple Func delegates with a lambda expression.
    </p>
     <div className="card code-panel">
        <div className="card-header example-title">Example: Expression Tree in C#</div>
        <div className="panel-body"><pre className="csharpcode"><code>ParameterExpression pe = Expression.Parameter(typeof(Student), "s");

MemberExpression me = Expression.Property(pe, "Age");

ConstantExpression constant = Expression.Constant(18, typeof(int));

BinaryExpression body = Expression.GreaterThanOrEqual(me, constant);

var ExpressionTree = Expression.Lambda&lt;Func<Student, bool>>(body, new[] { pe });

Console.WriteLine("Expression Tree: {0}", ExpressionTree);
		
Console.WriteLine("Expression Tree Body: {0}", ExpressionTree.Body);
		
Console.WriteLine("Number of Parameters in Expression Tree: {0}", 
                                ExpressionTree.Parameters.Count);
		
Console.WriteLine("Parameters in Expression Tree: {0}", ExpressionTree.Parameters[0]);
```

```
Dim pe As ParameterExpression = Expression.Parameter(GetType(Student), "s")

Dim mexp As MemberExpression = Expression.Property(pe, "Age")

Dim constant As ConstantExpression = Expression.Constant(18, GetType(Integer))

Dim body As BinaryExpression = Expression.GreaterThanOrEqual(mexp, constant)

Dim ExpressionTree As Expression(Of Func(Of Student, Boolean)) = 
    Expression.Lambda(Of Func(Of Student, Boolean))(body, New ParameterExpression() {pe})

Console.WriteLine("Expression Tree: {0}", ExpressionTree)

Console.WriteLine("Expression Tree Body: {0}", ExpressionTree.Body)
		
Console.WriteLine("Number of Parameters in Expression Tree: {0}", 
                                ExpressionTree.Parameters.Count)
		
Console.WriteLine("Parameters in Expression Tree: {0}", ExpressionTree.Parameters(0))
```

Output:

Expression Tree: s => (s.Age >= 18)  
Expression Tree Body: (s.Age >= 18)  
Number of Parameters in Expression Tree: 1  
Parameters in Expression Tree: s

The following image illustrates the whole process of creating an expression tree:

![Construct Expression Tree](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flinq-construct-expression-tree.webp&w=3840&q=75)

## Why Expression Tree?

We have seen in the previous section that the lambda expression assigned to ***Func<T>*** compiles into executable code and the lambda expression assigned to ***Expression<TDelegate>*** type compiles into Expression tree.

Executable code excutes in the same application domain to process over in-memory collection. Enumerable static classes contain extension methods for in-memory collections that implements **IEnumerable<T>** interface e.g. List<T>, Dictionary<T>, etc. The Extension methods in an Enumerable class accept a predicate parameter of **Func** type delegate. For example, the **Where** extension method accepts **Func<TSource, bool> predicate**. It then compiles it into IL (Intermediate Language) to process over in-memory collections that are in the same AppDomain.

The following image shows Where extension method in Enumerable class includes Func delegate as a parameter:

![Func delegate in Where](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flinq-func-delegate-IEnumerable.webp&w=3840&q=75)

**Func** delegate is a raw executable code, so if you debug the code, you will find that the **Func** delegate will be represented as opaque code. You cannot see its parameters, return type and body:

![Func delegate in debug mode](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Ffunc-delegate-debug.webp&w=3840&q=75)

**Func** delegate is for in-memory collections because it will be processed in the same AppDomain, but what about remote LINQ query providers like LINQ-to-SQL, EntityFramework or other third party products that provides LINQ capabilities? How would they parse lambda expression that has been compiled into raw executable code to know about the parameters, return type of lambda expression and build runtime query to process further? The answer is **Expression tree**.

Expression<TDelegate> is compiled into a data structure called an expression tree.

If you debug the code, Expression delegate will be represented as shown below:

![Expression Tree in debug mode](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flinq-expressiontree-debug.webp&w=3840&q=75)

Now you can see the difference between a normal delegate and an Expression. An expression tree is transparent. You can retrieve a parameter, return type and body expression information from the expression, as below:

```
Expression&lt;Func<Student, bool>> isTeenAgerExpr = s => s.Age &gt; 12 && s.Age &lt; 20;

Console.WriteLine("Expression: {0}", isTeenAgerExpr );
        
Console.WriteLine("Expression Type: {0}", isTeenAgerExpr.NodeType);

var parameters = isTeenAgerExpr.Parameters;

foreach (var param in parameters)
{
    Console.WriteLine("Parameter Name: {0}", param.Name);
    Console.WriteLine("Parameter Type: {0}", param.Type.Name );
}
var bodyExpr = isTeenAgerExpr.Body as BinaryExpression;

Console.WriteLine("Left side of body expression: {0}", bodyExpr.Left);
Console.WriteLine("Binary Expression Type: {0}", bodyExpr.NodeType);
Console.WriteLine("Right side of body expression: {0}", bodyExpr.Right);
Console.WriteLine("Return Type: {0}", isTeenAgerExpr.ReturnType);
```

Output:

Expression: s => ((s.Age > 12) AndAlso (s.Age < 20))  
Expression Type: Lambda  
Parameter Name: s  
Parameter Type: Student  
Left side of body expression: (s.Age > 12)  
Binary Expression Type: AndAlso  
Right side of body expression: (s.Age < 20)  
Return Type: System.Boolean

LINQ query for LINQ-to-SQL or Entity Framework is not executed in the same app domain. For example, the following LINQ query for Entity Framework is never actually executed inside your program:

```
var query = from s in dbContext.Studentswhere s.Age >= 18select s;
```

It is first translated into an SQL statement and then executed on the database server.

The code found in a query expression has to be translated into an SQL query that can be sent to another process as a string. For LINQ-to-SQL or Entity Frameworks, that process happens to be an SQL server database. It is obviously going to be much easier to translate a data structure such as an expression tree into SQL than it is to translate raw IL or executable code into SQL because, as you have seen, it is easy to retrieve information from an expression.

Expression trees were created for the task of converting code such as a query expression into a string that can be passed to some other process and executed there.

Queryable static class includes extension methods that accept a predicate parameter of Expression type. This predicate expression will be converted into an Expression Tree and then will be passed to the remote LINQ provider as a data structure so that the provider can build an appropriate query from the expression tree and execute the query.

![Expression Tree Process](https://www.tutorialsteacher.com/_next/image?url=%2Fimages%2Flinq%2Flinq-expressiontree-process.webp&w=3840&q=75)

---
> **Note:** This page contains 1 cross-origin iframe(s) that could not be accessed due to browser security policies. Some content may be missing. Links to these iframes have been preserved where possible.


---
Source: [Expression Tree](https://www.tutorialsteacher.com/linq/expression-tree)