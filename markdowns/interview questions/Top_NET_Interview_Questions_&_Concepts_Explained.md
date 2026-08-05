# Top .NET Interview Questions & Concepts Explained

## Questions

### 1\. Difference between .NET Framework, .NET Core & .NET 6/7

-   Cross-platform?
    
-   Performance?
    
-   Microservices support?
    
-   Hosting?
    

### 2\. What is CLR, CTS, CLS?

-   CLR = Runtime (memory mgmt, GC, JIT)
    
-   CTS = Common type system
    
-   CLS = Language interoperability rules
    

### 3\. Value Type vs Reference Type

| Value Type | Reference Type |
| --- | --- |
| Stack memory | Heap memory |
| Copied by value | Copied by reference |

### 4\. Boxing & Unboxing

-   Convert **value → object** = Boxing
    
-   Convert **object → value** = Unboxing
    

### **5\. Garbage Collection & Generations**

-   Gen 0, Gen 1, Gen 2
    
-   Managed heap
    
-   `IDisposable`, `using`
    

### 6\. Sealed, Static, Abstract Class vs Interface

| Feature | Abstract | Interface |
| --- | --- | --- |
| Can have implementation | Yes | .NET 8 also supports default |
| Multiple inherit | No | Yes |

### 7\. Async / Await & Task vs Thread

-   Task uses thread pool
    
-   Async frees thread, better scaling
    

### 8\. LINQ

**Examples**

-   `Select`, `Where`, `Join`, `GroupBy`, `Any`, `FirstOrDefault`
    

### 9\. Delegates, Events, Func, Action

-   Delegate = method pointer
    
-   Event = pub-sub model
    
-   `Func<in,out>` has return type
    
-   `Action<>` return void
    

## ASP.NET MVC / .NET Core

### 1\. MVC Lifecycle

-   Request → Routing → Controller → Action → View
    

### 2\. Filters

-   `Authorization`, `Action`, `Result`, `Exception`
    

### 3\. Dependency Injection

-   Constructor injection preferred
    
-   Built-in DI container in .NET Core
    

### 4\. Middleware pipeline

`Use` → `Run` → `Map`

### 5\. ViewBag vs ViewData vs TempData

| Feature | ViewBag | ViewData | TempData |
| --- | --- | --- | --- |
| Type | Dynamic | Dictionary | Dictionary |
| Life | Current request | Current req | Next request (Redirect) |

### 6\. REST API Concepts

-   GET/POST/PUT/DELETE
    
-   Status codes (200,400,401,404,500)
    
-   CORS
    
-   JWT auth
    

## Entity Framework Core

### 1\. Code-First vs Database-First

-   Migrations in code-first
    
-   Reverse engineer DB-first
    

### 2\. Lazy vs Eager Loading

-   `Include()` for eager loading
    

### 3\. LINQ Joins

-   `join` keyword or navigation properties
    

## SQL & DB Design

### **1\.** Normalization

-   1NF, 2NF, 3NF
    

### 2\. Index Types

-   Clustered vs Non-clustered
    
-   Index usage problem = slow `INSERT/UPDATE`
    

### 3\. Stored Procedure vs Function

-   Function can’t call SP
    
-   Function must return value
    

### 4\. Joins

-   Inner/Left/Right/Cross
    

## Real-Time Architecture & Security

### 1\. SOLID Principles

-   Single Responsibility, Open-Closed, etc.
    

### 2\. Repository Pattern

-   Abstraction over data layer
    

### 3\. OAuth / JWT

-   Token-based security
    

### 4\. Microservices Basics

-   API Gateway, Service registry, Docker
    

## Common Coding Questions

| Topic | Example |
| --- | --- |
| String reverse | Without Reverse() |
| Second highest number | LINQ |
| Palindrome | String & number |
| Remove duplicates | HashSet / LINQ |
| Prime number | Efficient loop logic |

---
Source: [Top .NET Interview Questions & Concepts Explained](https://www.c-sharpcorner.com/article/core-net-c-sharp/)