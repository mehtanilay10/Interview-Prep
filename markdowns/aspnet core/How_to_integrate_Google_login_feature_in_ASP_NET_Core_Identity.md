# How to integrate Google login feature in ASP.NET Core Identity

**ASP.NET Core Identity External Login** through Third-Party like Google, Facebook, Microsoft and Twitter is easy to integrate. Here we will create a feature that will allow users to Login to Identity with their Google credentials.

Page Contents

![](https://www.yogihosting.com/wp-content/themes/yogi-yogihosting/Images/up-arrow.jpg)

#### This tutorial is a part of the ASP.NET Core Identity series

-   1\. [How to Setup and Configure ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-setup/)

-   2\. [How to Create, Read, Update & Delete users in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-create-read-update-delete-users/)
-   3\. [Username, Email & Password Policy in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-username-email-password-policy/)

-   4\. [How to do Authentication of Users in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-authentication/)
-   5\. [How to work with Roles in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-roles/)

-   6\. [How to add Custom User Properties in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-custom-user-properties/)
-   7\. [How to work with Claims in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-claims/)

-   8\. [How to work with Policies in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-policies/)
-   9\. *How to integrate Google login feature in ASP.NET Core Identity*

-   10\. [Two-Factor Authentication in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-two-factor-authentication/)
-   11\. [How to perform Email Confirmation of Users in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-email-confirmation/)

-   12\. [Creating Password Reset feature in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-password-reset/)
-   13\. [User Lockout in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-user-lockout/)

There are 2 main steps to do when creating Google login feature.

-   1\. Create a new Project in Google Cloud Console.

-   2\. Use Google APIs to communicate with the Project located in Google Cloud Console.

## Create a new Project in Google Cloud Console

[Google Cloud Console](https://console.cloud.google.com/) is the place where we can create the Google Projects.

The first step is to create a new Project in Google Cloud Console, which we can do from this [URL](https://console.cloud.google.com/projectcreate). Give the project a name like Google Log In and click CREATE button, this is shown in the below image:

![asp.net core identity google login create project in google console](https://www.yogihosting.com/wp-content/uploads/2018/12/create-project-in-google-console.png "asp.net core identity google login Create Project in Google Console")

After a few seconds, the project will be created, and we will be taken to the Project Dashboard page. In this page, on the top left corner, find the navigation menu. Click this menu and select APIs & Services ➤ Credentials. Check the below image for understanding:

![create project credentials in google console](https://www.yogihosting.com/wp-content/uploads/2018/12/create-project-credentials-in-google-console.png.jpg "Create Project Credentials in Google Console")

We will now reach Credentials Page where we will be asked to create the credentials. Here we will need to create the OAuth Client ID.

So, click the Create Credentials button, and then on the options that open up, click the OAuth client ID like shown in the image below:

![create oauth client id](https://www.yogihosting.com/wp-content/uploads/2018/12/create-oauth-client-id.jpg "Create OAuth Client Id")

Next, we will be asked to Configure consent screen. So click on the Configure consent screen button, as shown by below image:

![configure consent screen](https://www.yogihosting.com/wp-content/uploads/2018/12/configure-consent-screen.png "Configure Consent Screen")

Next, we will reach OAuth Consent Screen where we need to give the application a name. Then click the Save button. Check the below image:

![Oauth consent screen](https://www.yogihosting.com/wp-content/uploads/2018/12/Oauth-consent-screen.jpg "OAuth Consent Screen")

Next, we will be taken to the Create OAuth client ID page. In this page do the following things:

-   1\. For Application type option, select Web application.

-   2\. Give the name field some value
-   3\. On the Authorised redirect URIs field give 2 urls:

```
https://localhost:7263/Account/GoogleResponse
https://localhost:7263/signin-google
```

Note: these URLs will be different in your case based on your localhost port or domain. Next click the Create button once you are done.

This is shown in the below image:

![create oauth client id](https://www.yogihosting.com/wp-content/uploads/2018/12/create-oauth-client-id-1.jpg "Create OAuth Client ID")

Authorized redirect URIs contains the URL of your application to which Google will redirect users after they are authenticated.

If you are using development mode then change the port number to your application’s port, else if you are in production then make sure to use the domain name instead of localhost.

For the URL – /Account/GoogleResponse, we will create an action method called GoogleResponse in AccountController of the project.

The URL – /signin-google, is the default URL set by ASP.NET Core Identity for Google OAuth.

On clicking the Create button, we will now get your Client Id and Secret displayed in a window (see below image). Save them in a secure place, as we will be making Google API calls using these.

![oauth client id secret](https://www.yogihosting.com/wp-content/uploads/2018/12/oauth-client-id-secret.jpg "OAuth Client ID Secret")

If you are dealing with OAuth for the first time, then consider it as an authentication procedure to authenticate users with your application using their Google credentials.

On successful authentication, Google will provide a token to the application, by using this token we can make API calls to Google.

The OAuth Client ID is created, now we have to enable the Google+ API. On the same page you will see Google APIs logo, click on it to reach the Google APIs Dashboard. Check the below image:

![google apis page](https://www.yogihosting.com/wp-content/uploads/2018/12/google-apis-page.png.jpg "Google APIs Page")

On the Google APIs Dashboard, click the ENABLE APIS AND SERVICES button, as shown in the below image:

![enable apis and services](https://www.yogihosting.com/wp-content/uploads/2018/12/enable-apis-and-services.jpg)

On the Next page you have to find Google+ API. To do this, on the search box type Google+, then when you get the Google+ API result, simply click on it. Check the image below:

![find google+ api](https://www.yogihosting.com/wp-content/uploads/2018/12/find-google-api.jpg "Find Google+ API")

We will now reach the Google+ API page. All we have to do is to enable it. So, click on the Enable button and we are now ready to go. Check the below image:

![enable google+ api](https://www.yogihosting.com/wp-content/uploads/2018/12/enable-google-api.png "Enable Google+ API")

## Communicate with Google Cloud Console project

**ASP.NET Core Identity** has a built in support for authentication service that works on OAuth like Google, Facebook, Microsoft, LinkedIn, Twitter, etc. Their are extension methods to register them in the dot net app.

First we need to install the package called [Microsoft.AspNetCore.Authentication.Google](https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.Google) from NuGet.

Go to your Program.cs file, and set up the **Google Authentication Service** and provide the **OAuth credentials** we got from the Google console.

The code is shown below.

```
builder.Services.AddAuthentication()
        .AddGoogle(opts =>
        {
            opts.ClientId = "717469225962-3vk00r8tglnbts1cgc4j1afqb358o8nj.apps.googleusercontent.com";
            opts.ClientSecret = "babQzWPLGwfOQVi0EYR-7Fbb";
            opts.SignInScheme = IdentityConstants.ExternalScheme;
        });
```

Note: The IdentityConstants class resides inside the Microsoft.AspNetCore.Identity namespace so we need to include this namespace first.

After the User is authenticated with Google OAuth then we will create the User’s Account in the Identity Database.

Next, go to the Login.cshtml view file of the Account Controller and add the link that enables user to log in with Google. See the highlighted code of the Login View:

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

24 | `@model Login`

`@{`

    `ViewData[``"Title"``] =` `"Login"``;`

`}`

`<h1` `class``=``"bg-info text-white"``>Login</h1>`

`<div` `class``=``"text-danger"` `asp-validation-summary=``"All"``></div>`

`<form asp-action=``"Login"` `method=``"post"``>`

    `<input type=``"hidden"` `asp-``for``=``"ReturnUrl"` `/>`

    `<div` `class``=``"form-group"``>`

        `<label asp-``for``=``"Email"``></label>`

        `<input asp-``for``=``"Email"` `class``=``"form-control"` `/>`

    `</div>`

    `<div` `class``=``"form-group"``>`

        `<label asp-``for``=``"Password"``></label>`

        `<input asp-``for``=``"Password"` `class``=``"form-control"` `/>`

    `</div>`

    `<div` `class``=``"form-group"``>`

        `Remember me? <input type=``"checkbox"` `asp-``for``=``"Remember"` `/>`

    `</div>`

    `<button` `class``=``"btn btn-primary"` `type=``"submit"``>Log In</button>`

    `<a` `class``=``"btn btn-info"` `asp-action=``"GoogleLogin"``>Log In With Google</a>`

`</form>` |

The new link targets the GoogleLogin action on the Account controller. See this action along with the changes we made to the Account controller (code is given below). Basically we added 2 new methods which are GoogleLogin & GoogleResponse.

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

37

38

39

40

41

42

43

44

45

46

47

48

49

50

51

52

53

54

55

56

57

58

59

60

61

62

63

64

65

66

67

68

69 | `using` `Microsoft.AspNetCore.Mvc;`

`using` `Microsoft.AspNetCore.Authorization;`

`using` `Microsoft.AspNetCore.Identity;`

`using` `Identity.Models;`

`using` `System.Security.Claims;`

`namespace` `Identity.Controllers`

`{`

    `[Authorize]`

    `public` `class` `AccountController : Controller`

    `{`

        `private` `UserManager<AppUser> userManager;`

        `private` `SignInManager<AppUser> signInManager;`

        `public` `AccountController(UserManager<AppUser> userMgr, SignInManager<AppUser> signinMgr)`

        `{`

            `userManager = userMgr;`

            `signInManager = signinMgr;`

        `}`

        `public` `IActionResult AccessDenied()`

        `{`

            `return` `View();`

        `}`

        `[AllowAnonymous]`

        `public` `IActionResult GoogleLogin()`

        `{`

            `string` `redirectUrl = Url.Action(``"GoogleResponse"``,` `"Account"``);`

            `var` `properties = signInManager.ConfigureExternalAuthenticationProperties(``"Google"``, redirectUrl);`

            `return` `new` `ChallengeResult(``"Google"``, properties);`

        `}`

        `[AllowAnonymous]`

        `public` `async` `Task<IActionResult> GoogleResponse()`

        `{`

            `ExternalLoginInfo info =` `await` `signInManager.GetExternalLoginInfoAsync();`

            `if` `(info ==` `null``)`

                `return` `RedirectToAction(nameof(Login));`

            `var` `result =` `await` `signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey,` `false``);`

            `string``[] userInfo = { info.Principal.FindFirst(ClaimTypes.Name).Value, info.Principal.FindFirst(ClaimTypes.Email).Value };`

            `if` `(result.Succeeded)`

                `return` `View(userInfo);`

            `else`

            `{`

                `AppUser user =` `new` `AppUser`

                `{`

                    `Email = info.Principal.FindFirst(ClaimTypes.Email).Value,`

                    `UserName = info.Principal.FindFirst(ClaimTypes.Email).Value`

                `};`

                `IdentityResult identResult =` `await` `userManager.CreateAsync(user);`

                `if` `(identResult.Succeeded)`

                `{`

                    `identResult =` `await` `userManager.AddLoginAsync(user, info);`

                    `if` `(identResult.Succeeded)`

                    `{`

                        `await` `signInManager.SignInAsync(user,` `false``);`

                        `return` `View(userInfo);`

                    `}`

                `}`

                `return` `AccessDenied();`

            `}`

        `}`

    `}`

`}` |

The GoogleLogin method creates a redirectUrl variable that contains the URL of the GoogleResponse action method, it then uses the signInManager.ConfigureExternalAuthenticationProperties() method to configures the redirect URL (to the ‘redirectUrl’ value) and user identifier for the Google Authentication. The associated code for this is:

```
string redirectUrl = Url.Action("GoogleResponse", "Account");
var properties = signInManager.ConfigureExternalAuthenticationProperties("Google", redirectUrl);
```

Finally, it is redirecting user to the **Google OAuth URL** using the below code:

```
return new ChallengeResult("Google", properties);
```

After authenticating user, Google will redirect them to the GoogleResponse action method. Inside this method we get the details of the User’s Google account using the code shown below:

```
ExternalLoginInfo info = await signInManager.GetExternalLoginInfoAsync();
```

The ExternalLoginInfo class defines an ExternalPrincipal property that returns a ClaimsPrincipal object. It contains the claims provided for the user by Google. Next, we sign the user to the Application using these claims, see the below code:

```
var result = await signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, false);
```

If the sign-in fails, then it is due to the fact that there is no user in the database that represents the Google user. We solve this by creating the new user and associating the Google credentials with it. See the below code that does this work:

```
IdentityResult identResult = await userManager.CreateAsync(user);
identResult = await userManager.AddLoginAsync(user, info);
```

The Name and Email of the user is returned to the View using the code:

```
string[] userInfo = { info.Principal.FindFirst(ClaimTypes.Name).Value, info.Principal.FindFirst(ClaimTypes.Email).Value };
return View(userInfo);
```

And finally the view file called GoogleResponse.cshtml shows the user details. It’s code is given below.

```
@model IEnumerable<string>
 
<h1 class="bg-info text-white">Your Login Details</h1>
 
<table class="table table-sm table-bordered">
    <tr><th>Name</th><th>Email</th></tr>
    <tr>
        @foreach (string info in Model)
        {
            <td>@info</td>
        }
    </tr>
</table>
```

Testing the Log In with Google

Run your project and go to the Login URL – /Account/Login, where you we see the Log In With Google button, as shown by the image given below:

![Identity login with google button](https://www.yogihosting.com/wp-content/uploads/2018/12/login-with-google-button.jpg "Identity Login with Google Button")

Click the Log In With Google button, and this will start the **Google Authentication Process**, where we will be asked to Sign in with your Google account, as shown by the image below:

![sign in with google asp.net core identity](https://www.yogihosting.com/wp-content/uploads/2018/12/sign-in-with-google.jpg "Sign-in with Google in ASP.NET Core Identity")

Select the Google Account and enter the password, as shown in the below image:

![enter google password](https://www.yogihosting.com/wp-content/uploads/2018/12/enter-google-password.jpg "Enter Google Password")

Once the **Google Authentication** is completed, we will be redirected to the ASP.NET Core Application and we will see our Google account details. Check the below image:

![google details of the user](https://www.yogihosting.com/wp-content/uploads/2018/12/google-details-of-the-user.jpg "Google Details of the User")

### Multiple authentication providers

When the app requires multiple providers then chain the provider extension methods behind AddAuthentication method:

```
builder.Services.AddAuthentication()
    .AddMicrosoftAccount(microsoftOptions => { ... })
    .AddGoogle(googleOptions => { ... })
    .AddTwitter(twitterOptions => { ... })
    .AddFacebook(facebookOptions => { ... });
```

You can download the full codes of this tutorial from the below link:

[Download](https://www.yogihosting.com/wp-content/themes/yogi-yogihosting/download/aspnetcore/Identity.zip)

Conclusion

Now we have learned to integrate **Google Login in Identity**. In the same way use external authentication providers like Facebook, Twitter, Linked and Microsoft to.

---
Source: [How to integrate Google login feature in ASP.NET Core Identity](https://www.yogihosting.com/aspnet-core-identity-login-with-google/)