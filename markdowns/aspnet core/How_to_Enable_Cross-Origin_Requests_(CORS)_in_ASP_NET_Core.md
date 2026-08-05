# How to Enable Cross-Origin Requests (CORS) in ASP.NET Core

Browser security prevents a web page located on a domain to make requests to another web page which is located on a different domain. This restriction is called the same-origin policy. This security feature prevents malicious sites to read data from another websites.

For example suppose I have a web page called “A.html” in my website. It’s URL being:

```
https://www.yogihosting.com/A.html
```

Now page A.html has an AJAX code that tries to read the HTML source code of another page “B.html” which is located on a different domain say “asp.net”:

```
http://www.asp.net/B.html
```

Since “B.html” is located on a different domain, the page “A.html” will not be able to make AJAX request due to the restriction called same-origin policy.

The AJAX call will return the error message:

**No ‘Access-Control-Allow-Origin’ header is present on the requested resource.**

Thankfully there is **Cross Origin Resource Sharing (CORS)** which is a W3C standard that allows browsers to relax the same-origin policy.

So, now if the website asp.net implements CORS then my website’s page – “A.html” can make AJAX request to “B.html” and reads B’s HTML source code.

## **How Does CORS Work?**

Once a website enables CORS, new **HTTP headers** are introduced which enable cross-origin requests. These HTTP headers are automatically set for cross-origin requests. One important HTTP header is called Access-Control-Allow-Origin.

When an external page or a resource, makes requests to a resource on another Server or domain, then this server responds with the value for the Access-Control-Allow-Origin header.

Many times, this value will be `*`, meaning that the server will share the requested resources with every domain on the Internet i.e. **allow all origins**. Other times, the value of this header may be set to a particular domain (or list of domains), meaning that the server will share it’s resources only with the specific domain (or list of domains).

And in this way CORS works to relax the same-origin policy.

## **Enable CORS in ASP.NET Core**

Follow the below 2 steps to enable CORS in your ASP.NET Core app:

-   1\. Add CORS to services in program class.

-   2\. Include the CORS middleware in program class.

See the below highlighted codes on the Program.cs where CORS is added for a web app.

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37 | `var` `builder = WebApplication.CreateBuilder(args);`

`builder.Services.AddCors();`

`builder.Services.AddControllersWithViews();`

`var` `app = builder.Build();`

`if` `(!app.Environment.IsDevelopment())`

`{`

    `app.UseExceptionHandler(``"/Home/Error"``);`

    `app.UseHsts();`

`}`

`app.UseHttpsRedirection();`

`app.UseStaticFiles();`

`app.UseRouting();`

`app.UseCors(builder =>`

`{`

    `builder.AllowAnyOrigin()`

           `.AllowAnyMethod()`

           `.AllowAnyHeader();`

`});`

`app.UseAuthorization();`

`app.MapControllerRoute(`

    `name:` `"default"``,`

    `pattern:` `"{controller=Home}/{action=Index}/{id?}"``);`

`app.Run();` |

Notice that we added the code line with the option AllowAnyOrigin to allow every domain to make **CORS** request:

```
app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});
```

We have also used other method which are described below:

-   1\. AllowAnyMethod() – To allow all HTTP methods.

-   2\. AllowAnyHeader() – To allow all request headers.
-   3\. AllowCredentials() – the server must allow the credentials.

If you want to enable CORS for request made from 1 domain only, like https://www.yogihosting.com. In this case you have to change the above code to:

| 1

2

3

4

5

6

7

8 | `app.UseCors(builder =>`

`{`

    `builder`

    `.WithOrigins(``"https://www.yogihosting.com"``)`

    `.AllowAnyMethod()`

    `.AllowAnyHeader()`

    `.AllowCredentials();`

`});` |

You can even specify more than 1 domains in the form of an array like this:

| 1

2

3

4

5

6

7

8 | `app.UseCors(builder =>`

`{`

    `builder`

    `.WithOrigins(``new` `string``[] {` `"https://www.yogihosting.com"``,` `"https://example1.com"``,` `"https://example2.com"` `})`

    `.AllowAnyMethod()`

    `.AllowAnyHeader()`

    `.AllowCredentials();`

`});` |

## **Apply CORS policies per action or per controller**

We can define one or more **CORS policies** where the CORS rules are added. Then we apply the CORS policy on a controller or action method. See the following example which defines a user-defined CORS policy named as MyPolicy.

| 1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37 | `var` `builder = WebApplication.CreateBuilder(args);`

`builder.Services.AddCors(options =>`

`{`

    `options.AddPolicy(``"MyPolicy"``,`

        `builder => builder.WithOrigins(``"https://www.yogihosting.com"``));`

`});`

`builder.Services.AddControllersWithViews();`

`var` `app = builder.Build();`

`if` `(!app.Environment.IsDevelopment())`

`{`

    `app.UseExceptionHandler(``"/Home/Error"``);`

    `app.UseHsts();`

`}`

`app.UseHttpsRedirection();`

`app.UseStaticFiles();`

`app.UseRouting();`

`app.UseCors(``"MyPolicy"``);`

`app.UseAuthorization();`

`app.MapControllerRoute(`

    `name:` `"default"``,`

    `pattern:` `"{controller=Home}/{action=Index}/{id?}"``);`

`app.Run();` |

To select the policy, pass the name to the UseCors() method:

Now apply this CORS policy per action or per controller.

### Per Action

To specify a CORS policy for a specific action, add the \[EnableCors\] attribute of Microsoft.AspNetCore.Cors namespace to the action and specify the policy name:

| 1

2

3

4

5 | `[EnableCors(``"MyPolicy"``)]`

`public` `IEnumerable<``string``> Get()`

`{`

    `return` `new` `string``[] {` `"value1"``,` `"value2"` `};`

`}` |

### Per controller

| 1

2 | `[EnableCors(``"MyPolicy"``)]`

`public` `class` `HomeController : Controller` |

To disable CORS for a controller or action, use the \[DisableCors\] attribute:

| 1

2

3

4

5 | `[DisableCors]`

`public` `string` `Get(``int` `id)`

`{`

    `return` `"value"``;`

`}` |

Conclusion

I hope you loved this tutorial on **CORS in ASP.NET Core**. Please share it on your Facebook and Twitter accounts. Also check my other related tutorial given in the below section.

---
Source: [How to Enable Cross-Origin Requests (CORS) in ASP.NET Core](https://www.yogihosting.com/aspnet-core-enable-cors/)