const fs = require('fs');
const path = require('path');

const baseDir = '/workspace/f9343184-f4eb-4a6e-8a7f-ec85c9efba8b/sessions/agent_563ca4e2-fee4-4b59-b6fc-6ce764853765/content/courses/aspnet-core';

// Block helpers
const p = (text) => ({ type: 'paragraph', data: { text } });
const h = (level, text) => ({ type: 'heading', data: { level, text } });
const bl = (items, title) => ({ type: 'bullet-list', data: { items, title } });
const nl = (items, title) => ({ type: 'numbered-list', data: { items, title } });
const callout = (variant, title, text) => ({ type: 'callout', data: { variant, title, text } });
const quote = (text, author) => ({ type: 'quote', data: { text, author } });
const keyTerms = (terms) => ({ type: 'key-terms', data: { terms } });
const table = (headers, rows) => ({ type: 'table', data: { headers, rows } });
const example = (title, content, language) => ({ type: 'example', data: { title, content, language } });
const solution = (title, content, language) => ({ type: 'solution', data: { title, content, language } });
const exercise = (title, description, steps, outcome) => ({ type: 'exercise', data: { title, description, steps, expectedOutcome: outcome } });
const checklist = (items) => ({ type: 'checklist', data: { items } });
const mermaid = (id, caption, definition) => ({ type: 'mermaid', data: { id, caption, definition } });
const comparisonCards = (title, cards) => ({ type: 'comparison-cards', data: { title, cards } });
const summaryBox = (title, points, takeaway) => ({ type: 'summary-box', data: { title, points, takeaway } });
const faqBlock = (title, items) => ({ type: 'faq-block', data: { title, items } });
const divider = () => ({ type: 'divider', data: {} });

function mkLesson(data) {
  return {
    id: data.id,
    slug: data.slug,
    moduleSlug: data.moduleSlug,
    courseSlug: 'aspnet-core',
    title: data.title,
    description: data.description,
    order: data.order,
    difficulty: data.difficulty,
    estimatedMinutes: data.estimatedMinutes,
    tags: data.tags || [],
    blocks: data.blocks || [],
    relatedLessons: data.relatedLessons || [],
    furtherReading: data.furtherReading || []
  };
}
// 01-getting-started lessons
const whatIsAspNetCore = mkLesson({
  id: 'lesson-aspnet-core-01-getting-started-what-is-aspnet-core',
  slug: 'what-is-aspnet-core',
  moduleSlug: '01-getting-started',
  title: 'What is ASP.NET Core?',
  description: 'Understand what ASP.NET Core is, how it evolved from ASP.NET, and why it is the framework of choice for modern web applications on .NET.',
  order: 1,
  difficulty: 'beginner',
  estimatedMinutes: 12,
  tags: ['intro', 'overview', 'framework'],
  blocks: [
    h(2, 'From ASP.NET to ASP.NET Core'),
    p('Imagine you build websites the same way a restaurant builds meals: you need a kitchen (the server), recipes (the code), and waiters (the network) to bring food to customers (browsers). ASP.NET Core is a completely rebuilt, faster, and more flexible kitchen compared to the older ASP.NET.'),
    p('ASP.NET Core was released in 2016 as a ground-up rewrite of ASP.NET. It is open source, cross-platform, and built for cloud-native applications. Unlike the older framework, it runs on Windows, macOS, and Linux with the same code.'),
    p('The "Core" in the name signals that Microsoft separated the modern web stack from the old Windows-only System.Web pipeline. This allowed the team to remove legacy baggage, improve performance, and embrace modern standards like HTTP/2, WebSockets, and dependency injection out of the box.'),
    keyTerms([
      { term: 'ASP.NET Core', definition: 'A cross-platform, high-performance, open-source framework for building modern cloud-based web applications.' },
      { term: 'Cross-platform', definition: 'Runs on Windows, macOS, and Linux without requiring Windows-specific APIs.' },
      { term: 'Middleware', definition: 'Software components assembled into an application pipeline to handle requests and responses.' },
      { term: 'Dependency Injection (DI)', definition: 'A technique where objects receive their dependencies from an external source rather than creating them internally.' },
      { term: 'Razor', definition: 'A templating syntax for embedding C# code inside HTML for dynamic web pages.' }
    ]),
    h(2, 'Why ASP.NET Core Matters'),
    p('Performance is one of the biggest reasons developers choose ASP.NET Core. In benchmarks, it consistently ranks among the fastest web frameworks in the world, often outperforming Node.js and Java-based servers.'),
    p('Another reason is its modular design. You only add the features you need. If you do not need authentication, you do not load it. If you only need a simple API, you skip the MVC view engine entirely.'),
    p('Finally, it is built for modern development practices: configuration through appsettings.json, environment-based settings, health checks, and OpenAPI documentation are all first-class citizens.'),
    comparisonCards('ASP.NET Core vs Classic ASP.NET', [
      { title: 'ASP.NET Core', description: 'Modern, cross-platform, open-source, high-performance framework for building web apps and APIs.', pros: ['Cross-platform', 'High performance', 'Built-in DI', 'Modular'], cons: ['Newer ecosystem', 'Breaking changes from classic'], tags: ['modern'] },
      { title: 'Classic ASP.NET', description: 'The original Windows-only framework built on System.Web with Web Forms and MVC 5.', pros: ['Mature', 'Large legacy codebase', 'Web Forms designer'], cons: ['Windows-only', 'Slower', 'Heavy'], tags: ['legacy'] }
    ]),
    callout('info', 'Key Fact', 'ASP.NET Core is not just an update to ASP.NET — it is a completely different framework. Many classic ASP.NET patterns, like Web Forms and HttpModules, do not exist in Core.'),
    h(2, 'The .NET Platform'),
    p('ASP.NET Core sits on top of the .NET runtime. When you download .NET, you get the runtime to execute apps and the SDK to build them. The SDK includes the C# compiler, the dotnet CLI, and templates for creating new projects.'),
    p('The .NET ecosystem also includes libraries for everything from JSON serialization to database access. ASP.NET Core pulls in only what it needs, keeping your application lean.'),
    h(2, 'Real-World Code Example'),
    p('The simplest ASP.NET Core application is just a few lines. It creates a web server, defines a route, and starts listening for HTTP requests.'),
    example('Minimal API Hello World', 'var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\n\napp.MapGet("/", () => "Hello from ASP.NET Core!");\n\napp.Run();', 'csharp'),
    p('In this example, WebApplication.CreateBuilder sets up the dependency injection container, configuration, and logging. MapGet registers a handler for GET requests to the root URL. Run starts the HTTP listener.'),
    mermaid('aspnet-arch-1', 'High-level ASP.NET Core architecture', 'graph TD\n    A[Browser / Client] --> B[Kestrel Server]\n    B --> C[Middleware Pipeline]\n    C --> D[Routing]\n    D --> E[Controller / Minimal API]\n    E --> F[Services / Database]\n    F --> G[Response]'),
    h(2, 'Common Interview Questions'),
    faqBlock('FAQ: What is ASP.NET Core?', [
      { question: 'Is ASP.NET Core the same as ASP.NET?', answer: 'No. ASP.NET Core is a complete rewrite. It is cross-platform, modular, and does not depend on System.Web. Classic ASP.NET is Windows-only.' },
      { question: 'Do I need Visual Studio to use ASP.NET Core?', answer: 'No. You can use any editor, including VS Code on any platform. The dotnet CLI handles project creation, building, and running.' },
      { question: 'What is Kestrel?', answer: 'Kestrel is the cross-platform web server included with ASP.NET Core. It is based on the libuv library and handles HTTP requests directly.' },
      { question: 'Can ASP.NET Core run on Linux?', answer: 'Yes. ASP.NET Core runs natively on Linux, macOS, and Windows. This is one of its biggest advantages over classic ASP.NET.' },
      { question: 'Is ASP.NET Core only for MVC?', answer: 'No. While it supports MVC, it also supports Razor Pages, Blazor, SignalR, gRPC, and minimal APIs.' }
    ]),
    h(2, 'Key Takeaways'),
    summaryBox('What You Learned', [
      'ASP.NET Core is a cross-platform, high-performance, open-source web framework.',
      'It was rebuilt from the ground up and is not a simple update to classic ASP.NET.',
      'It runs on Windows, macOS, and Linux with the same codebase.',
      'It uses middleware, dependency injection, and configuration by default.',
      'It supports multiple programming models: MVC, Razor Pages, Blazor, minimal APIs, and more.'
    ], 'ASP.NET Core is the modern way to build web applications with .NET. Understanding its architecture and philosophy is the first step toward mastering the framework.'),
    divider(),
    exercise('Explore the Framework', 'Create a minimal API project and run it locally to understand the basic building blocks.', [
      'Install the .NET 8 SDK from dotnet.microsoft.com.',
      'Open a terminal and run: dotnet new web -n MyFirstApp',
      'Navigate into the project folder and run: dotnet run',
      'Open the URL shown in the terminal in your browser.'
    ], 'You see "Hello World" or the default response from the minimal API template.')
  ]
});

const settingUpEnvironment = mkLesson({
  id: 'lesson-aspnet-core-01-getting-started-setting-up-environment',
  slug: 'setting-up-environment',
  moduleSlug: '01-getting-started',
  title: 'Setting Up the Development Environment',
  description: 'Install the .NET SDK, choose an editor, configure your shell, and prepare your machine for building ASP.NET Core applications.',
  order: 2,
  difficulty: 'beginner',
  estimatedMinutes: 15,
  tags: ['setup', 'tools', 'sdk'],
  blocks: [
    h(2, 'Installing the .NET SDK'),
    p('The .NET SDK is the foundation for everything you will build. It includes the C# compiler, the dotnet CLI tool, and project templates for ASP.NET Core, console apps, class libraries, and more.'),
    p('When you install the SDK, you also get the runtime, which is what actually executes your compiled applications. For development, you only need the SDK. For deployment, you can install just the runtime to save space.'),
    p('You can verify your installation by running dotnet --version in a terminal. The output shows the version of the SDK you are using. You can also run dotnet --list-sdks to see all installed SDKs.'),
    example('Verifying the .NET SDK', 'dotnet --version\ndotnet --list-sdks\ndotnet --list-runtimes', 'bash'),
    h(2, 'Choosing an Editor'),
    p('You can build ASP.NET Core applications with any text editor, but the two most popular choices are Visual Studio and Visual Studio Code.'),
    p('Visual Studio is the full-featured IDE on Windows. It includes designers, profilers, and deep integration with Azure. Visual Studio for Mac is available but is being phased out in favor of Visual Studio Code and the CLI.'),
    p('Visual Studio Code is a lightweight, cross-platform editor. It works on Windows, macOS, and Linux. For C# development, you need the C# Dev Kit extension, which provides IntelliSense, debugging, and project management.'),
    table('Editor Comparison', [
      ['Feature', 'Visual Studio 2022', 'VS Code'],
      ['Platform', 'Windows, macOS', 'Windows, macOS, Linux'],
      ['Cost', 'Free (Community)', 'Free'],
      ['Designers', 'WinForms, WPF, Blazor', 'Minimal'],
      ['Debugging', 'Full-featured', 'Good (with extensions)'],
      ['Best for', 'Enterprise Windows dev', 'Cross-platform, lightweight']
    ]),
    callout('tip', 'Recommendation', 'If you are on Windows and doing enterprise development, Visual Studio 2022 Community is excellent. If you are on any platform or prefer lightweight tools, VS Code with the C# Dev Kit is the modern standard.'),
    h(2, 'Configuring Your Shell'),
    p('The dotnet CLI is your primary tool for creating, building, testing, and running ASP.NET Core applications. You will use it constantly.'),
    p('On Windows, the installer adds dotnet to your PATH automatically. On macOS, you can use Homebrew: brew install --cask dotnet-sdk. On Linux, follow the instructions at dotnet.microsoft.com for your distribution.'),
    p('After installation, restart your terminal and run dotnet --info to confirm everything is set up correctly. This command shows the OS, architecture, and installed SDKs and runtimes.'),
    h(2, 'Project Templates'),
    p('Templates are pre-built project skeletons that save you from writing boilerplate code. The .NET SDK includes templates for web apps, APIs, class libraries, and more.'),
    example('Common dotnet new templates', 'dotnet new web -n MinimalApi\n# Creates a minimal API project\n\ndotnet new mvc -n MvcApp\n# Creates an MVC project with controllers and views\n\ndotnet new webapp -n RazorApp\n# Creates a Razor Pages project\n\ndotnet new classlib -n MyLibrary\n# Creates a class library', 'bash'),
    p('You can install additional templates from NuGet. For example, the dotnet new install command can add templates for React, Angular, or Blazor.'),
    checklist([
      { text: 'Install the .NET 8 SDK (or newer)', hint: 'Verify with dotnet --version' },
      { text: 'Install VS Code and the C# Dev Kit extension', hint: 'Search in the Extensions marketplace' },
      { text: 'Run dotnet --info to confirm the setup', hint: 'All paths should be valid' },
      { text: 'Create a test project with dotnet new web', hint: 'Navigate to a new folder first' },
      { text: 'Run the project with dotnet run', hint: 'Browse to the URL shown in terminal' }
    ]),
    h(2, 'Key Takeaways'),
    summaryBox('Environment Setup Complete', [
      'The .NET SDK includes the compiler, CLI, and templates needed for development.',
      'VS Code with the C# Dev Kit is the recommended cross-platform editor.',
      'The dotnet CLI handles project creation, building, testing, and running.',
      'Templates eliminate boilerplate and help you start quickly.',
      'Always verify your setup with dotnet --info before starting a project.'
    ], 'A correctly configured environment is the foundation of productive ASP.NET Core development. Take the time to get it right before moving on.')
  ]
});
const creatingFirstProject = mkLesson({
  id: 'lesson-aspnet-core-01-getting-started-creating-first-project',
  slug: 'creating-first-project',
  moduleSlug: '01-getting-started',
  title: 'Creating Your First Project',
  description: 'Use the dotnet CLI and Visual Studio to create a new ASP.NET Core project, understand project files, and run your first application.',
  order: 3,
  difficulty: 'beginner',
  estimatedMinutes: 12,
  tags: ['project', 'cli', 'visual-studio'],
  blocks: [
    h(2, 'Using the dotnet CLI'),
    p('The dotnet new command creates a new project from a template. You specify the template name with -n for the project name and -o for the output directory.'),
    p('For a first project, try the web template. It creates a minimal API with a single GET endpoint. This is the simplest way to see ASP.NET Core in action.'),
    example('Creating and running a web project', 'mkdir FirstApp && cd FirstApp\ndotnet new web\ndotnet run', 'bash'),
    p('When you run dotnet run, the terminal shows the URLs the app is listening on, typically http://localhost:5000 and https://localhost:5001. Open one of these in a browser to see the default response.'),
    h(2, 'Understanding the Project File'),
    p('Every .NET project has a .csproj file. This XML file tells the SDK what to build, which frameworks to target, and which NuGet packages to reference.'),
    example('A minimal web project .csproj file', '<Project Sdk="Microsoft.NET.Sdk.Web">\n  <PropertyGroup>\n    <TargetFramework>net8.0</TargetFramework>\n    <Nullable>enable</Nullable>\n    <ImplicitUsings>enable</ImplicitUsings>\n  </PropertyGroup>\n</Project>', 'xml'),
    p('The Sdk attribute on the Project element determines which SDK to use. Microsoft.NET.Sdk.Web adds everything needed for web development: the HTTP server, routing, MVC, and more.'),
    p('TargetFramework specifies which version of .NET to compile against. net8.0 means .NET 8. You can target multiple frameworks simultaneously if needed.'),
    h(2, 'Visual Studio Workflow'),
    p('If you use Visual Studio, creating a project is even easier. Choose File > New > Project, search for "ASP.NET Core Web App", and follow the wizard. Visual Studio creates the project, restores NuGet packages, and opens the solution automatically.'),
    p('In Visual Studio, you can press F5 to build and run with debugging. Ctrl+F5 runs without the debugger. The built-in IIS Express or Kestrel server starts automatically.'),
    h(2, 'Project Structure Overview'),
    p('A new web project contains a Program.cs file where you configure services and the request pipeline. You will also see an wwwroot folder for static files like CSS, JavaScript, and images.'),
    p('The appsettings.json file stores configuration such as connection strings, logging levels, and feature flags. You can create appsettings.Development.json for environment-specific overrides.'),
    callout('important', 'Program.cs Is Everything', 'In modern ASP.NET Core (6.0+), Program.cs replaces the old Startup.cs pattern. All configuration, middleware, and service registration happens in one file using top-level statements.'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: '.csproj', definition: 'A C# project file that defines build settings, target frameworks, and package references.' },
      { term: 'dotnet CLI', definition: 'The command-line interface for creating, building, testing, and running .NET projects.' },
      { term: 'Template', definition: 'A pre-built project skeleton that includes files and folders for a specific type of application.' },
      { term: 'Target Framework', definition: 'The version of .NET that a project compiles against, such as net8.0.' },
      { term: 'wwwroot', definition: 'The default folder for serving static files like CSS, JavaScript, and images.' }
    ]),
    h(2, 'FAQ'),
    faqBlock('FAQ: Creating Your First Project', [
      { question: 'Do I need to install templates separately?', answer: 'No. The .NET SDK includes common templates. You can install more with dotnet new install <package>.' },
      { question: 'What is the difference between dotnet run and dotnet build?', answer: 'dotnet build compiles the project without running it. dotnet run builds and then starts the application.' },
      { question: 'Why is there no Startup.cs in my project?', answer: 'Starting with .NET 6, the top-level statements pattern moved all configuration into Program.cs for simplicity.' },
      { question: 'Can I use Visual Studio Code instead of Visual Studio?', answer: 'Yes. Install the C# Dev Kit extension for IntelliSense, debugging, and project management.' }
    ]),
    h(2, 'Summary'),
    summaryBox('First Project Summary', [
      'Use dotnet new web for the simplest ASP.NET Core project.',
      'The .csproj file controls build settings and dependencies.',
      'Program.cs is the entry point for configuration and middleware.',
      'Visual Studio provides a GUI alternative to the CLI.',
      'Static files live in wwwroot and are served automatically.'
    ], 'Creating your first project is a milestone. Once you can create, build, and run an app, you have the foundation for everything else.')
  ]
});

const understandingProjectStructure = mkLesson({
  id: 'lesson-aspnet-core-01-getting-started-understanding-project-structure',
  slug: 'understanding-project-structure',
  moduleSlug: '01-getting-started',
  title: 'Understanding Project Structure',
  description: 'Explore the files and folders in an ASP.NET Core project and understand what each one does.',
  order: 4,
  difficulty: 'beginner',
  estimatedMinutes: 12,
  tags: ['project', 'structure', 'folders'],
  blocks: [
    h(2, 'Standard ASP.NET Core Layout'),
    p('When you create a new project, the SDK generates a predictable set of files and folders. Understanding this structure helps you navigate any ASP.NET Core application.'),
    p('At the root, you will find the .csproj project file and the Program.cs entry point. Additional folders organize your code, static assets, and configuration.'),
    h(2, 'Key Files and Folders'),
    table('ASP.NET Core Project Structure', [
      ['File / Folder', 'Purpose'],
      ['Program.cs', 'App startup, DI registration, middleware configuration'],
      ['.csproj', 'Project metadata, target framework, package references'],
      ['appsettings.json', 'Application configuration (connection strings, logging)'],
      ['wwwroot', 'Static files: CSS, JS, images, fonts'],
      ['Pages/ (Razor)', 'Razor Page files (.cshtml + .cs)'],
      ['Controllers/', 'MVC controller classes'],
      ['Models/', 'Data models and DTOs'],
      ['Views/', 'Razor view templates'],
      ['Data/', 'DbContext and repository classes'],
      ['Services/', 'Business logic and external integrations']
    ]),
    p('The wwwroot folder is special: ASP.NET Core serves files from it directly. Do not put sensitive files here. The framework does not serve files outside wwwroot by default.'),
    p('Program.cs has grown in responsibility over time. In .NET 8, it typically handles service registration (builder.Services), middleware configuration (app.Use...), and endpoint mapping (app.MapGet, app.MapControllers).'),
    h(2, 'Configuration Files'),
    p('appsettings.json is the primary configuration store. It supports hierarchical JSON, so you can organize settings by section. ASP.NET Core automatically reloads appsettings.json when it changes in Development mode.'),
    example('Sample appsettings.json', '{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft.AspNetCore": "Warning"\n    }\n  },\n  "ConnectionStrings": {\n    "DefaultConnection": "Server=.;Database=MyDb;Trusted_Connection=True;"\n  }\n}', 'json'),
    callout('tip', 'Environment Files', 'Use appsettings.Development.json, appsettings.Staging.json, and appsettings.Production.json to override settings per environment. ASP.NET Core loads the correct file based on the ASPNETCORE_ENVIRONMENT variable.'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: 'wwwroot', definition: 'The web root folder where static files are stored and served.' },
      { term: 'Program.cs', definition: 'The application entry point that configures services and the middleware pipeline.' },
      { term: 'appsettings.json', definition: 'A JSON file for application configuration that supports hierarchical settings.' },
      { term: 'Razor Pages', definition: 'A page-focused framework where each .cshtml file pairs with a PageModel class.' },
      { term: 'DbContext', definition: 'The main class in Entity Framework Core that coordinates database operations.' }
    ]),
    h(2, 'FAQ'),
    faqBlock('FAQ: Project Structure', [
      { question: 'Why is wwwroot called the web root?', answer: 'Because it is the root of the web-serving file tree. Files outside it are not accessible via HTTP by default.' },
      { question: 'Do I have to use the standard folder names?', answer: 'No. They are conventions, not requirements. However, following them makes your project easier for other developers to understand.' },
      { question: 'What is the difference between root and content root?', answer: 'The content root is where appsettings.json and other content files live. The web root is where static files are served from.' }
    ]),
    h(2, 'Summary'),
    summaryBox('Project Structure Summary', [
      'Program.cs is the single entry point for app configuration.',
      'wwwroot holds static files that are publicly accessible.',
      'appsettings.json stores configuration with environment overrides.',
      'Conventional folders like Models/ and Controllers/ improve organization.',
      'The .csproj file controls build behavior and dependencies.'
    ], 'A well-organized project structure is easier to maintain, test, and scale. Stick to conventions unless you have a strong reason to deviate.')
  ]
});
const runningAndDebugging = mkLesson({
  id: 'lesson-aspnet-core-01-getting-started-running-and-debugging',
  slug: 'running-and-debugging',
  moduleSlug: '01-getting-started',
  title: 'Running and Debugging',
  description: 'Run ASP.NET Core applications from the CLI and IDE, understand hot reload, and learn debugging techniques.',
  order: 5,
  difficulty: 'beginner',
  estimatedMinutes: 12,
  tags: ['debugging', 'cli', 'hot-reload'],
  blocks: [
    h(2, 'Running from the CLI'),
    p('The dotnet run command builds and starts your application. It is the fastest way to test changes without leaving the terminal.'),
    p('When the app starts, it listens on a local URL. The terminal shows both HTTP and HTTPS endpoints. If port 5000 is already in use, .NET automatically picks the next available port.'),
    p('You can also run without building first using dotnet watch run. This watches for file changes and automatically rebuilds and restarts the app. It is essential for rapid development.'),
    example('Running with hot reload', 'dotnet watch run\n# Watches for changes and restarts automatically\n\n# In another terminal, trigger a change:\necho "// change" >> Program.cs', 'bash'),
    h(2, 'Debugging in Visual Studio'),
    p('Visual Studio provides a full-featured debugger. Set a breakpoint by clicking in the left margin next to a line of code. Press F5 to start debugging. When execution hits the breakpoint, you can inspect variables, step through code, and modify values.'),
    p('The Locals window shows all variables in the current scope. The Watch window lets you monitor specific expressions. Call Stack shows the chain of method calls that led to the current point.'),
    p('You can also debug ASP.NET Core in VS Code. Set a breakpoint in a .cs file and press F5. The C# Dev Kit extension launches the browser and attaches the debugger automatically.'),
    h(2, 'Logging'),
    p('ASP.NET Core includes a built-in logging framework. You can write logs from anywhere in your application using an ILogger instance.'),
    p('The default configuration writes logs to the console, the debug window, and optionally to EventSource or EventLog. In Development, the default log level is Information, which means most events are shown.'),
    example('Using ILogger in a controller', '[ApiController]\n[Route("[controller]")]\npublic class WeatherController : ControllerBase\n{\n    private readonly ILogger<WeatherController> _logger;\n\n    public WeatherController(ILogger<WeatherController> logger)\n    {\n        _logger = logger;\n    }\n\n    [HttpGet]\n    public IActionResult Get()\n    {\n        _logger.LogInformation("Fetching weather data at {Time}", DateTime.UtcNow);\n        return Ok(new { temp = 72, condition = "Sunny" });\n    }\n}', 'csharp'),
    callout('warning', 'Sensitive Data in Logs', 'Never log passwords, credit card numbers, or other sensitive data. Use structured logging with message templates to avoid accidentally logging secrets.'),
    h(2, 'Debugging Tips'),
    checklist([
      { text: 'Use dotnet watch run for automatic rebuilds during development', hint: 'It restarts the app when files change' },
      { text: 'Set breakpoints in VS Code with F9 or in Visual Studio by clicking the margin', hint: 'Red dot indicates an active breakpoint' },
      { text: 'Use ILogger for diagnostic output instead of Console.WriteLine', hint: 'ILogger respects log levels and sinks' },
      { text: 'Check the Developer Exception Page in Development mode', hint: 'It shows stack traces and query details for unhandled exceptions' }
    ]),
    h(2, 'Key Takeaways'),
    summaryBox('Running and Debugging', [
      'dotnet run builds and runs the app from the CLI.',
      'dotnet watch run enables hot reload for rapid development.',
      'Both Visual Studio and VS Code support full debugging with breakpoints.',
      'Use ILogger for structured, level-aware logging.',
      'The Developer Exception Page is invaluable for debugging in Development.'
    ], 'Mastering the run and debug cycle is essential. Once you can quickly identify and fix issues, your development speed increases dramatically.')
  ]
});
// 02-mvc-fundamentals
const mvcArchitecture = mkLesson({
  id: 'lesson-aspnet-core-02-mvc-fundamentals-mvc-architecture',
  slug: 'mvc-architecture',
  moduleSlug: '02-mvc-fundamentals',
  title: 'MVC Architecture',
  description: 'Learn the Model-View-Controller pattern and how it separates concerns in ASP.NET Core web applications.',
  order: 1,
  difficulty: 'beginner',
  estimatedMinutes: 15,
  tags: ['mvc', 'architecture', 'patterns'],
  blocks: [
    h(2, 'What is MVC?'),
    p('MVC stands for Model-View-Controller. It is an architectural pattern that separates an application into three interconnected components. This separation makes the code easier to maintain, test, and scale.'),
    p('Think of a restaurant: the Model is the kitchen that prepares the food (data and business logic), the View is the table setting and menu presentation (what the customer sees), and the Controller is the waiter who takes orders and coordinates between the kitchen and the customer.'),
    p('In ASP.NET Core, the Controller receives an HTTP request, uses the Model to process data, and selects a View to render the response. Each component has a single responsibility, making the application modular.'),
    mermaid('mvc-flow', 'MVC Request Flow', 'sequenceDiagram\n    participant Browser\n    participant Controller\n    participant Model\n    participant View\n    Browser->>Controller: HTTP Request\n    Controller->>Model: Fetch/Update Data\n    Model-->>Controller: Return Data\n    Controller->>View: Select View + Pass Data\n    View-->>Browser: HTML Response'),
    h(2, 'The Three Components'),
    keyTerms([
      { term: 'Model', definition: 'Represents the data and business logic of the application. It validates data and handles persistence.' },
      { term: 'View', definition: 'The user interface that displays data to the user. In ASP.NET Core, views are typically Razor .cshtml files.' },
      { term: 'Controller', definition: 'Handles user input, interacts with the Model, and selects a View to render.' },
      { term: 'Routing', definition: 'The system that maps incoming URLs to controller actions.' },
      { term: 'Action', definition: 'A public method in a controller that handles an HTTP request.' }
    ]),
    h(2, 'Benefits of MVC'),
    p('Separation of concerns means each component can be developed and tested independently. A designer can work on Views without touching Controllers. A database developer can focus on Models.'),
    p('MVC also enables parallel development. One developer can build the Controller while another creates the View. The components are connected through interfaces and conventions, not tight coupling.'),
    p('Testability is another major benefit. Controllers are plain C# classes. You can instantiate them directly in unit tests, pass mock dependencies, and verify the results without starting a web server.'),
    comparisonCards('MVC vs Other Patterns', [
      { title: 'MVC', description: 'Separates data (Model), UI (View), and logic (Controller).', pros: ['Clear separation', 'Testable', 'Parallel development'], cons: ['More files', 'Steeper learning curve'], tags: ['pattern'] },
      { title: 'Monolithic Code-Behind', description: 'UI and logic are mixed in the same file or class.', pros: ['Simple for tiny apps', 'Fewer files'], cons: ['Hard to test', 'Tight coupling', 'Does not scale'], tags: ['anti-pattern'] }
    ]),
    h(2, 'Real-World Example'),
    p('Consider an e-commerce product listing page. The Model might be a ProductRepository that fetches products from a database. The Controller calls the repository and selects a View. The View iterates over the products and renders HTML.'),
    example('A simple ProductsController', 'public class ProductsController : Controller\n{\n    private readonly IProductRepository _repository;\n\n    public ProductsController(IProductRepository repository)\n    {\n        _repository = repository;\n    }\n\n    public async Task<IActionResult> Index()\n    {\n        var products = await _repository.GetAllAsync();\n        return View(products);\n    }\n}', 'csharp'),
    h(2, 'Common Mistakes'),
    callout('warning', 'Common Mistake: Fat Controllers', 'Beginners often put business logic directly in controllers. Controllers should be thin: receive requests, call services, and return responses. Move business logic to services or the domain layer.'),
    h(2, 'FAQ'),
    faqBlock('FAQ: MVC Architecture', [
      { question: 'Is MVC still relevant in modern ASP.NET Core?', answer: 'Yes. While minimal APIs are popular, MVC is the standard for server-rendered web apps with views. Razor Pages is built on top of MVC.' },
      { question: 'Can I use MVC without Views?', answer: 'Yes. You can return JSON from controller actions, making it effectively an API controller.' },
      { question: 'What is the difference between MVC and Razor Pages?', answer: 'MVC uses Controllers to handle requests. Razor Pages use a page-based model where each .cshtml file has a corresponding PageModel class.' }
    ]),
    summaryBox('MVC Architecture Summary', [
      'MVC separates concerns into Model, View, and Controller.',
      'Controllers handle requests and coordinate between Model and View.',
      'Models contain data and business logic.',
      'Views render the user interface.',
      'The pattern improves testability and maintainability.'
    ], 'Understanding MVC is fundamental to ASP.NET Core. Even if you later use minimal APIs, the MVC pattern influences how you organize your code.')
  ]
});

const controllersAndActions = mkLesson({
  id: 'lesson-aspnet-core-02-mvc-fundamentals-controllers-and-actions',
  slug: 'controllers-and-actions',
  moduleSlug: '02-mvc-fundamentals',
  title: 'Controllers and Actions',
  description: 'Create controllers, define action methods, return different result types, and understand the controller lifecycle.',
  order: 2,
  difficulty: 'beginner',
  estimatedMinutes: 15,
  tags: ['controllers', 'actions', 'mvc'],
  blocks: [
    h(2, 'What is a Controller?'),
    p('A controller is a C# class that inherits from ControllerBase or Controller. It groups related actions together. For example, ProductsController handles everything related to products.'),
    p('ControllerBase provides core MVC functionality without view support. Controller inherits from ControllerBase and adds view-related helpers like View(), PartialView(), and Json(). Use ControllerBase for APIs and Controller for HTML apps.'),
    example('A basic controller with actions', 'using Microsoft.AspNetCore.Mvc;\n\npublic class HomeController : Controller\n{\n    public IActionResult Index()\n    {\n        ViewData["Message"] = "Welcome to ASP.NET Core!";\n        return View();\n    }\n\n    public IActionResult About()\n    {\n        return View();\n    }\n\n    [HttpGet("api/status")]\n    public IActionResult GetStatus()\n    {\n        return Ok(new { status = "healthy", version = "8.0" });\n    }\n}', 'csharp'),
    h(2, 'Action Methods'),
    p('Action methods are public methods in a controller that handle HTTP requests. The routing system maps URLs to specific actions based on the controller name and action name.'),
    p('Actions can return different result types: View() returns HTML, Json() returns JSON, Ok() returns a 200 response, NotFound() returns 404, and Redirect() sends a redirect response.'),
    table('Common IActionResult Return Types', [
      ['Return Type', 'HTTP Result', 'Use Case'],
      ['View()', '200 + HTML', 'Render a Razor view'],
      ['Json()', '200 + JSON', 'Return JSON data'],
      ['Ok()', '200', 'Return an object as JSON'],
      ['NotFound()', '404', 'Resource not found'],
      ['BadRequest()', '400', 'Invalid input'],
      ['Redirect()', '302', 'Redirect to another URL'],
      ['StatusCode()', 'Custom', 'Return a specific status code']
    ]),
    h(2, 'Action Parameters'),
    p('ASP.NET Core automatically populates action parameters from the request. This is called model binding. You can receive simple types from the query string or complex types from the request body.'),
    example('Action with parameters', '[HttpPost]\npublic IActionResult Create([FromBody] CreateProductRequest request)\n{\n    if (!ModelState.IsValid)\n    {\n        return BadRequest(ModelState);\n    }\n    // Create the product\n    var product = new Product { Name = request.Name, Price = request.Price };\n    _repository.Add(product);\n    return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);\n}', 'csharp'),
    callout('info', 'Model Binding', 'The [FromBody] attribute tells ASP.NET Core to read the parameter from the HTTP request body. Without it, complex types are bound from form data by default.'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: 'ControllerBase', definition: 'The base class for API controllers without view support.' },
      { term: 'Controller', definition: 'The base class for MVC controllers with view support.' },
      { term: 'IActionResult', definition: 'An interface representing the result of an action method.' },
      { term: 'Action Method', definition: 'A public method in a controller that handles an HTTP request.' },
      { term: 'Attribute Routing', definition: 'Routes defined using attributes on controller actions.' }
    ]),
    h(2, 'Common Mistakes'),
    callout('warning', 'Public Methods Are Actions', 'Any public method in a controller is considered an action by default. To exclude a method, use the [NonAction] attribute.'),
    h(2, 'FAQ'),
    faqBlock('FAQ: Controllers and Actions', [
      { question: 'Should I inherit from Controller or ControllerBase?', answer: 'Use ControllerBase for APIs. Use Controller when you need View(), PartialView(), or other view helpers.' },
      { question: 'Can an action return a string directly?', answer: 'Yes, but it is better to return an IActionResult for consistency and testability.' },
      { question: 'What is the difference between Ok() and Json()?', answer: 'Ok() uses content negotiation and returns the object as JSON or XML based on the Accept header. Json() always returns JSON.' }
    ]),
    summaryBox('Controllers and Actions Summary', [
      'Controllers group related actions into a single class.',
      'Actions are public methods that handle HTTP requests.',
      'IActionResult provides flexibility in the type of response returned.',
      'Model binding automatically populates action parameters from the request.',
      'Use ControllerBase for APIs and Controller for views.'
    ], 'Controllers are the entry point for handling requests in MVC. Understanding how they work is essential for building any ASP.NET Core application.')
  ]
});

const viewsAndTemplates = mkLesson({
  id: 'lesson-aspnet-core-02-mvc-fundamentals-views-and-templates',
  slug: 'views-and-templates',
  moduleSlug: '02-mvc-fundamentals',
  title: 'Views and Templates',
  description: 'Create Razor views, pass data from controllers, use layouts, and understand the view rendering pipeline.',
  order: 3,
  difficulty: 'beginner',
  estimatedMinutes: 15,
  tags: ['views', 'razor', 'templates'],
  blocks: [
    h(2, 'What is a View?'),
    p('A View is an HTML template that generates the user interface. In ASP.NET Core, views are written in Razor syntax, which lets you embed C# code directly inside HTML using the @ symbol.'),
    p('When a Controller returns View(), the framework finds the corresponding .cshtml file, executes the C# code inside it, and sends the resulting HTML to the browser.'),
    h(2, 'Razor Syntax Basics'),
    p('Razor is intelligent about transitioning between HTML and C#. A single @ symbol switches to C#. Use @: to output plain text. Use parentheses or curly braces to clarify expressions.'),
    example('Razor view examples', '<!-- Display a variable -->\n<p>Hello, @Model.Name!</p>\n\n<!-- Conditional rendering -->\n@if (Model.IsAdmin)\n{\n    <p>Welcome, Administrator</p>\n}\nelse\n{\n    <p>Welcome, User</p>\n}\n\n<!-- Loop -->\n<ul>\n@foreach (var item in Model.Items)\n{\n    <li>@item.Title</li>\n}\n</ul>\n\n<!-- Expression output -->\n<p>Price: @($"{product.Price:C}")</p>', 'razor'),
    p('Razor views are compiled into C# classes at build time. This means there is no runtime interpretation overhead. The compiled views are fast and type-safe.'),
    h(2, 'Passing Data to Views'),
    p('There are several ways to pass data from a controller to a view. The most common are ViewData, ViewBag, and strongly-typed models.'),
    table('Data Passing Methods', [
      ['Method', 'Type Safety', 'Use Case'],
      ['ViewData', 'No', 'Quick, dynamic data sharing'],
      ['ViewBag', 'No', 'Convenience wrapper around ViewData'],
      ['Model (View)', 'Yes', 'Primary method for passing data'],
      ['TempData', 'No', 'Data that persists across one redirect']
    ]),
    example('Passing a model to a view', '// Controller\npublic IActionResult Details(int id)\n{\n    var product = _repository.GetById(id);\n    return View(product); // passes product as the Model\n}\n\n// Details.cshtml\n@model Product\n\n<h1>@Model.Name</h1>\n<p>Price: @Model.Price.ToString("C")</p>', 'csharp'),
    callout('tip', 'Strongly-Typed Models', 'Always prefer strongly-typed models over ViewData or ViewBag. Strong typing gives you compile-time checking, IntelliSense, and fewer runtime errors.'),
    h(2, 'View Discovery'),
    p('By convention, ASP.NET Core looks for views in the Views/[ControllerName] folder. For the HomeController, it looks in Views/Home/. The view name matches the action name by default.'),
    p('You can also place views in Shared/ for reuse across controllers. Layouts, partial views, and view components live here.'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: 'Razor', definition: 'A templating syntax that embeds C# in HTML for dynamic web pages.' },
      { term: 'View', definition: 'A .cshtml file that generates HTML using Razor syntax.' },
      { term: 'Model', definition: 'The data object passed from a controller to a view.' },
      { term: 'Layout', definition: 'A shared template that provides the common structure for all views.' },
      { term: 'Partial View', definition: 'A reusable snippet of a view that can be rendered inside another view.' }
    ]),
    h(2, 'FAQ'),
    faqBlock('FAQ: Views and Templates', [
      { question: 'What is the difference between View() and PartialView()?', answer: 'View() renders a full page with layout. PartialView() renders a fragment without layout, typically used inside another view.' },
      { question: 'Are Razor views compiled?', answer: 'Yes. Razor views are compiled into C# classes at build time, so there is no runtime interpretation cost.' },
      { question: 'Can I use Razor in a class library?', answer: 'Yes. Razor Class Libraries (RCLs) let you package views, controllers, and pages for reuse across projects.' }
    ]),
    summaryBox('Views Summary', [
      'Razor views combine HTML and C# using @ syntax.',
      'Views are compiled for performance.',
      'Strongly-typed models are the preferred way to pass data.',
      'View discovery follows convention-based folder structure.',
      'Shared views and layouts promote reuse.'
    ], 'Views are the face of your application. Mastering Razor syntax and view patterns is essential for building polished user interfaces.')
  ]
});
const modelsAndViewData = mkLesson({
  id: 'lesson-aspnet-core-02-mvc-fundamentals-models-and-viewdata',
  slug: 'models-and-viewdata',
  moduleSlug: '02-mvc-fundamentals',
  title: 'Models and ViewData',
  description: 'Use strongly-typed models, ViewData, and ViewBag to pass data from controllers to views in ASP.NET Core.',
  order: 4,
  difficulty: 'beginner',
  estimatedMinutes: 12,
  tags: ['models', 'viewdata', 'viewbag'],
  blocks: [
    h(2, 'Understanding Models'),
    p('In MVC, the Model represents the data and business logic. In ASP.NET Core, models are typically plain C# classes called ViewModels or DTOs. They should not contain persistence logic — that belongs in a repository or service.'),
    p('A ViewModel is a model specifically designed for a view. It aggregates data from multiple sources into a shape that the view needs. For example, a ProductDetailsViewModel might contain a Product, a list of related products, and a boolean for user permissions.'),
    example('A ViewModel example', 'public class ProductDetailsViewModel\n{\n    public Product Product { get; set; }\n    public List<Product> RelatedProducts { get; set; } = new();\n    public bool CanUserEdit { get; set; }\n}\n\n// In controller\nvar viewModel = new ProductDetailsViewModel\n{\n    Product = _repository.GetById(id),\n    RelatedProducts = _repository.GetRelated(id),\n    CanUserEdit = User.IsInRole("Admin")\n};\nreturn View(viewModel);', 'csharp'),
    h(2, 'ViewData and ViewBag'),
    p('ViewData is a dictionary that passes data from controller to view. ViewBag is a dynamic wrapper around ViewData. They share the same underlying data, so data stored in one is accessible from the other.'),
    p('Use ViewData/ViewBag for small pieces of data like page titles or breadcrumbs. For complex data, use a strongly-typed model. ViewData requires casting when reading, which can cause runtime errors if the type is wrong.'),
    example('Using ViewData and ViewBag', '// Controller\npublic IActionResult Details(int id)\n{\n    ViewData["Title"] = "Product Details";\n    ViewBag.ProductId = id;\n    return View();\n}\n\n// View\n<h1>@ViewData["Title"]</h1>\n<p>Product ID: @ViewBag.ProductId</p>', 'csharp'),
    h(2, 'TempData for Redirects'),
    p('TempData stores data for the duration of a single redirect. It is useful for passing messages like "Product created successfully" after a POST-Redirect-GET pattern.'),
    p('TempData uses session state by default. In ASP.NET Core, you can configure it to use cookies instead. Keep TempData values small and transient.'),
    example('Using TempData', '[HttpPost]\npublic IActionResult Create(Product product)\n{\n    _repository.Add(product);\n    TempData["Success"] = "Product created!";\n    return RedirectToAction(nameof(Index));\n}\n\n// In Index view\n@if (TempData["Success"] != null)\n{\n    <div class="alert alert-success">@TempData["Success"]</div>\n}', 'csharp'),
    callout('important', 'Model vs ViewModel', 'The Model in MVC refers to the data layer, not necessarily the class passed to the view. Use "ViewModel" to describe classes designed specifically for views. This avoids confusion with domain models.'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: 'ViewModel', definition: 'A class designed specifically to hold data for a view.' },
      { term: 'ViewData', definition: 'A dictionary for passing data from controller to view.' },
      { term: 'ViewBag', definition: 'A dynamic object that wraps ViewData for easier access.' },
      { term: 'TempData', definition: 'A short-lived dictionary for passing data across a redirect.' },
      { term: 'DTO', definition: 'Data Transfer Object, a simple object used to carry data between layers.' }
    ]),
    h(2, 'FAQ'),
    faqBlock('FAQ: Models and ViewData', [
      { question: 'Should I use ViewData or a ViewModel?', answer: 'Use a ViewModel for most cases. ViewData is fine for simple, one-off values like page titles.' },
      { question: 'Does TempData require session state?', answer: 'Yes, by default. You can configure it to use cookies, but session state is the default.' },
      { question: 'Can I pass a ViewModel to a partial view?', answer: 'Yes. Pass the model as a parameter when calling PartialAsync().' }
    ]),
    summaryBox('Models and ViewData Summary', [
      'ViewModels are strongly-typed classes designed for views.',
      'ViewData and ViewBag are for simple, dynamic data sharing.',
      'TempData persists data across a single redirect.',
      'Strongly-typed models provide compile-time safety and IntelliSense.',
      'Avoid mixing domain models with ViewModels.'
    ], 'Choosing the right data-passing mechanism improves code clarity and reduces bugs. Strongly-typed models should be your default choice.')
  ]
});

const handlingUserInput = mkLesson({
  id: 'lesson-aspnet-core-02-mvc-fundamentals-handling-user-input',
  slug: 'handling-user-input',
  moduleSlug: '02-mvc-fundamentals',
  title: 'Handling User Input',
  description: 'Process form submissions, handle different HTTP methods, and understand how ASP.NET Core receives and validates user input.',
  order: 5,
  difficulty: 'beginner',
  estimatedMinutes: 14,
  tags: ['forms', 'input', 'http'],
  blocks: [
    h(2, 'Receiving User Input'),
    p('User input arrives in HTTP requests. It can come from the query string, route values, form fields, JSON bodies, or uploaded files. ASP.NET Core binds this data to action parameters automatically.'),
    p('For HTML forms, the default content type is application/x-www-form-urlencoded. For APIs, it is usually application/json. ASP.NET Core handles both, but you may need [FromForm] or [FromBody] to be explicit.'),
    example('Handling form input', '[HttpPost]\n[ValidateAntiForgeryToken]\npublic async Task<IActionResult> Contact(ContactForm form)\n{\n    if (!ModelState.IsValid)\n    {\n        return View(form);\n    }\n    await _emailService.SendAsync(form.Email, form.Message);\n    TempData["Success"] = "Message sent!";\n    return RedirectToAction(nameof(Index));\n}', 'csharp'),
    h(2, 'HTTP Methods'),
    p('RESTful APIs use HTTP methods to indicate the action: GET retrieves data, POST creates, PUT updates, and DELETE removes. ASP.NET Core has attributes for each: [HttpGet], [HttpPost], [HttpPut], [HttpDelete].'),
    table('HTTP Methods in MVC', [
      ['Attribute', 'HTTP Verb', 'Purpose'],
      ['[HttpGet]', 'GET', 'Retrieve data'],
      ['[HttpPost]', 'POST', 'Create new resource'],
      ['[HttpPut]', 'PUT', 'Update entire resource'],
      ['[HttpPatch]', 'PATCH', 'Partial update'],
      ['[HttpDelete]', 'DELETE', 'Remove resource']
    ]),
    callout('tip', 'POST-Redirect-GET', 'After processing a POST request, redirect to a GET page. This prevents duplicate form submissions when the user refreshes the browser.'),
    h(2, 'Anti-Forgery Tokens'),
    p('Cross-Site Request Forgery (CSRF) attacks trick users into submitting forms on sites they are authenticated to. ASP.NET Core includes anti-forgery tokens by default.'),
    p('The [ValidateAntiForgeryToken] attribute on an action checks the token. The form tag helper automatically includes a hidden token field. Always validate anti-forgery tokens on state-changing POST actions.'),
    example('Form with anti-forgery token', '<form asp-action="Contact" method="post">\n    @Html.AntiForgeryToken()\n    <input asp-for="Name" />\n    <input asp-for="Email" />\n    <textarea asp-for="Message"></textarea>\n    <button type="submit">Send</button>\n</form>', 'razor'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: 'Form Collection', definition: 'The collection of form fields sent in a POST request.' },
      { term: 'Anti-Forgery Token', definition: 'A security token that prevents CSRF attacks by verifying the request origin.' },
      { term: 'ModelState', definition: 'A dictionary that tracks validation state for bound model properties.' },
      { term: 'Route Data', definition: 'Values extracted from the URL route, such as {id} in /products/5.' },
      { term: 'Query String', definition: 'Key-value pairs appended to the URL after a ? character.' }
    ]),
    h(2, 'FAQ'),
    faqBlock('FAQ: Handling User Input', [
      { question: 'Why do I need [ValidateAntiForgeryToken]?', answer: 'It prevents CSRF attacks by ensuring the POST request came from your site, not a malicious third-party site.' },
      { question: 'What is the difference between [FromForm] and [FromBody]?', answer: '[FromForm] reads from form data. [FromBody] reads from the request body, typically JSON or XML.' },
      { question: 'Can I access raw request data?', answer: 'Yes. Inject HttpContext or use [FromServices] to access the request directly, but model binding should be your first choice.' }
    ]),
    summaryBox('Handling User Input Summary', [
      'ASP.NET Core binds request data to action parameters automatically.',
      'Use HTTP method attributes to restrict actions to specific verbs.',
      'Anti-forgery tokens protect against CSRF attacks.',
      'ModelState tracks validation errors for bound models.',
      'POST-Redirect-GET prevents duplicate submissions on refresh.'
    ], 'Understanding how ASP.NET Core receives and validates user input is essential for building secure, reliable web applications.')
  ]
});
// 03-routing-urls
const routingBasics = mkLesson({
  id: 'lesson-aspnet-core-03-routing-urls-routing-basics',
  slug: 'routing-basics',
  moduleSlug: '03-routing-urls',
  title: 'Routing Basics',
  description: 'Understand how ASP.NET Core routes URLs to controllers and actions, and learn the fundamentals of endpoint routing.',
  order: 1,
  difficulty: 'beginner',
  estimatedMinutes: 14,
  tags: ['routing', 'urls', 'endpoints'],
  blocks: [
    h(2, 'What is Routing?'),
    p('Routing is the system that maps incoming URLs to specific pieces of code. When a browser requests /products/5, the routing system figures out which controller and action should handle it, and extracts the value 5 as a parameter.'),
    p('ASP.NET Core uses endpoint routing, introduced in version 3.0. Endpoints are defined by a pattern and a handler. The routing middleware matches the incoming request path against the registered patterns and invokes the matching handler.'),
    mermaid('routing-basics', 'Endpoint routing flow', 'graph LR\n    A[Request URL] --> B[Routing Middleware]\n    B --> C{Match?}\n    C -->|Yes| D[Invoke Endpoint]\n    C -->|No| E[Next Middleware]\n    E --> F[404 Not Found]'),
    h(2, 'Conventional Routing'),
    p('Conventional routing defines patterns at the application level, typically in Program.cs. The most common pattern is {controller=Home}/{action=Index}/{id?}. This pattern means the first segment is the controller name, the second is the action name, and the optional third is the id parameter.'),
    p('With conventional routing, /Products/Details/5 maps to the Details action of ProductsController with id=5. The defaults ensure that / resolves to HomeController.Index().'),
    example('Setting up conventional routing', 'var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\n\napp.MapControllerRoute(\n    name: "default",\n    pattern: "{controller=Home}/{action=Index}/{id?}"\n);\n\napp.Run();', 'csharp'),
    h(2, 'Route Parameters'),
    p('Route parameters are placeholders in the route pattern that capture values from the URL. They are enclosed in curly braces {}. Parameters can be optional with a ? suffix.'),
    p('For example, the pattern {controller=Home}/{action=Index}/{id?} has one optional parameter. The URL /Products matches with id=null, while /Products/Details/5 captures id=5.'),
    table('Route Pattern Examples', [
      ['Pattern', 'URL', 'controller', 'action', 'id'],
      ['{controller=Home}/{action=Index}/{id?}', '/Products/Details/5', 'Products', 'Details', '5'],
      ['{controller=Home}/{action=Index}/{id?}', '/', 'Home', 'Index', null],
      ['{controller=Home}/{action=Index}/{id?}', '/Products', 'Products', 'Index', null],
      ['Products/{id}', '/Products/5', 'null', 'null', '5']
    ]),
    h(2, 'Attribute Routing'),
    p('Attribute routing defines routes directly on controller actions using attributes. This gives you full control over the URL structure and is ideal for APIs.'),
    p('You can combine attribute routing with conventional routing. The order of registration matters: more specific routes should come first.'),
    example('Attribute routing example', '[Route("products")]\npublic class ProductsController : Controller\n{\n    [HttpGet("")]\n    public IActionResult List() => View();\n\n    [HttpGet("{id}")]\n    public IActionResult Details(int id) => View(id);\n}', 'csharp'),
    callout('info', 'Routing Order', 'Routes are evaluated in the order they are added. Put specific routes before generic ones to avoid incorrect matches.'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: 'Endpoint', definition: 'A combination of a route pattern and a request handler.' },
      { term: 'Route Parameter', definition: 'A placeholder in a route pattern that captures a URL segment.' },
      { term: 'Conventional Routing', definition: 'Routing defined at the application level using a pattern.' },
      { term: 'Attribute Routing', definition: 'Routing defined directly on controllers and actions using attributes.' },
      { term: 'Route Constraint', definition: 'A rule that restricts which values a route parameter can match.' }
    ]),
    h(2, 'FAQ'),
    faqBlock('FAQ: Routing Basics', [
      { question: 'What is the default route in ASP.NET Core?', answer: '{controller=Home}/{action=Index}/{id?}. This maps URLs to controllers and actions with defaults.' },
      { question: 'When should I use attribute routing?', answer: 'Use attribute routing for APIs where you want explicit control over URLs. Use conventional routing for server-rendered apps with standard URLs.' },
      { question: 'Can I use both routing types together?', answer: 'Yes. They can coexist, but be careful about order and potential conflicts.' }
    ]),
    summaryBox('Routing Basics Summary', [
      'Routing maps URLs to controller actions.',
      'Conventional routing uses patterns defined at startup.',
      'Attribute routing defines routes directly on actions.',
      'Route parameters capture values from URLs.',
      'Route order matters — more specific routes should come first.'
    ], 'Routing is the backbone of navigation in ASP.NET Core. Master it to build clean, maintainable URL structures.')
  ]
});

const attributeRouting = mkLesson({
  id: 'lesson-aspnet-core-03-routing-urls-attribute-routing',
  slug: 'attribute-routing',
  moduleSlug: '03-routing-urls',
  title: 'Attribute Routing',
  description: 'Define routes using attributes on controllers and actions for precise URL control in ASP.NET Core.',
  order: 2,
  difficulty: 'intermediate',
  estimatedMinutes: 14,
  tags: ['routing', 'attributes', 'api'],
  blocks: [
    h(2, 'Defining Routes with Attributes'),
    p('Attribute routing puts route templates directly on controller classes and action methods. This makes the URL structure explicit and self-documenting.'),
    p('A [Route] attribute on a controller sets a prefix for all actions in that controller. An action-level [HttpGet], [HttpPost], etc. combines with the prefix to form the full route.'),
    example('Attribute routing with prefixes', '[Route("api/v1/products")]\n[ApiController]\npublic class ProductsController : ControllerBase\n{\n    [HttpGet]\n    public IActionResult GetAll() => Ok(_products);\n\n    [HttpGet("{id}")]\n    public IActionResult GetById(int id)\n    {\n        var product = _products.FirstOrDefault(p => p.Id == id);\n        return product is not null ? Ok(product) : NotFound();\n    }\n\n    [HttpPost]\n    public IActionResult Create([FromBody] CreateProductDto dto)\n    {\n        var product = new Product { Name = dto.Name, Price = dto.Price };\n        _products.Add(product);\n        return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);\n    }\n}', 'csharp'),
    h(2, 'Route Prefixes and Tokens'),
    p('The [controller] and [action] tokens in route templates are replaced by the controller name and action name at runtime. This reduces duplication.'),
    p('For example, [Route("[controller]/[action]")] on ProductsController becomes /Products/Details when applied to the Details action.'),
    table('Route Tokens', [
      ['Token', 'Replacement', 'Example'],
      ['[controller]', 'Controller class name without Controller suffix', 'Products'],
      ['[action]', 'Action method name', 'Details'],
      ['{id?}', 'Route parameter (optional)', '5']
    ]),
    h(2, 'Route Constraints'),
    p('Constraints restrict route parameters to specific patterns. For example, you can require an id to be an integer: [HttpGet("{id:int}")]. If the value does not match, the route does not match.'),
    p('Common constraints include int, bool, datetime, decimal, double, float, guid, long, and regex. You can also create custom constraints by implementing IRouteConstraint.'),
    example('Route with constraints', '[HttpGet("{id:int:min(1)}")]\npublic IActionResult GetById(int id)\n{\n    // id is guaranteed to be >= 1\n}', 'csharp'),
    callout('tip', 'API Versioning', 'Use route prefixes like api/v1/ and api/v2/ to version your APIs. Combine with [ApiVersion] attributes for clean versioning.'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: 'Route Prefix', definition: 'A base path defined on a controller that applies to all its actions.' },
      { term: 'Route Token', definition: 'A placeholder like [controller] that is replaced at runtime.' },
      { term: 'Route Constraint', definition: 'A condition that a route parameter must satisfy.' },
      { term: 'Route Order', definition: 'The priority of a route. Lower values are evaluated first.' },
      { term: 'CreatedAtAction', definition: 'Returns 201 Created with a Location header pointing to the new resource.' }
    ]),
    h(2, 'FAQ'),
    faqBlock('FAQ: Attribute Routing', [
      { question: 'Can I mix attribute and conventional routing?', answer: 'Yes, but be careful about conflicts. Attribute routes take precedence over conventional routes.' },
      { question: 'What is the [ApiController] attribute?', answer: 'It enables API-specific behaviors like automatic 400 responses for model validation errors, binding source inference, and attribute routing.' },
      { question: 'How do I make a route parameter optional?', answer: 'Append a question mark to the parameter name: {id?}. For more complex optionality, use route defaults.' }
    ]),
    summaryBox('Attribute Routing Summary', [
      'Attribute routing defines routes directly on controllers and actions.',
      '[Route] on a controller sets a prefix for all actions.',
      'Route tokens like [controller] reduce duplication.',
      'Constraints ensure parameters match expected patterns.',
      'Attribute routing is ideal for RESTful APIs.'
    ], 'Attribute routing gives you precise control over your URL structure, making APIs self-documenting and easy to maintain.')
  ]
});

const routeConstraints = mkLesson({
  id: 'lesson-aspnet-core-03-routing-urls-route-constraints',
  slug: 'route-constraints',
  moduleSlug: '03-routing-urls',
  title: 'Route Constraints',
  description: 'Use route constraints to validate route parameters and ensure URLs match expected patterns.',
  order: 3,
  difficulty: 'intermediate',
  estimatedMinutes: 12,
  tags: ['routing', 'constraints', 'validation'],
  blocks: [
    h(2, 'Why Use Constraints?'),
    p('Route constraints prevent a route from matching when the parameter does not meet the expected format. Without constraints, /Products/abc would match a route expecting an integer id, and the action would fail at runtime.'),
    p('Constraints are applied inline in the route template. They act as a filter: if the constraint fails, the route is skipped and the next route is evaluated.'),
    table('Built-in Route Constraints', [
      ['Constraint', 'Example', 'Matches'],
      ['int', '{id:int}', 'Integer values like 1, 42, -7'],
      ['bool', '{active:bool}', 'true or false'],
      ['datetime', '{date:datetime}', 'Valid date/time strings'],
      ['decimal', '{price:decimal}', 'Valid decimal values'],
      ['double', '{value:double}', 'Valid double values'],
      ['float', '{value:float}', 'Valid float values'],
      ['guid', '{id:guid}', 'Valid GUIDs'],
      ['long', '{id:long}', '64-bit integers'],
      ['min', '{id:min(1)}', 'Integers >= 1'],
      ['max', '{id:max(100)}', 'Integers <= 100'],
      ['range', '{id:range(1,100)}', 'Integers between 1 and 100'],
      ['regex', '{name:regex(^[a-z]+$)}', 'Lowercase letters only']
    ]),
    example('Applying route constraints', '[Route("products")]\npublic class ProductsController : ControllerBase\n{\n    // Matches only integer IDs >= 1\n    [HttpGet("{id:int:min(1)}")]\n    public IActionResult GetById(int id)\n    {\n        return Ok(_repository.GetById(id));\n    }\n\n    // Matches only valid GUIDs\n    [HttpGet("{id:guid}")]\n    public IActionResult GetByGuid(Guid id)\n    {\n        return Ok(_repository.GetByGuid(id));\n    }\n}', 'csharp'),
    callout('warning', 'Constraints Are Not Validation', 'Route constraints filter which routes match. They do not validate the business meaning of a value. Use validation attributes in addition to constraints for complete validation.'),
    h(2, 'Custom Route Constraints'),
    p('You can create custom constraints by implementing IRouteConstraint. This is useful for domain-specific validation, such as checking if a product code follows a specific format.'),
    example('Custom route constraint (simplified)', 'public class ProductCodeConstraint : IRouteConstraint\n{\n    public bool Match(HttpContext? httpContext, IRouter? route, \n        string routeKey, RouteValueDictionary values, \n        RouteDirection routeDirection)\n    {\n        if (!values.TryGetValue(routeKey, out var value)) return false;\n        return value is string s && Regex.IsMatch(s, @"^PC-\d{4}$");\n    }\n}\n\n// Register in Program.cs\nbuilder.Services.Configure<RouteOptions>(options =>\n{\n    options.ConstraintMap.Add("productcode", typeof(ProductCodeConstraint));\n});\n\n// Use in route\n[HttpGet("{code:productcode}")]', 'csharp'),
    h(2, 'FAQ'),
    faqBlock('FAQ: Route Constraints', [
      { question: 'What happens if a constraint fails?', answer: 'The route is skipped. The routing middleware continues checking other routes. If no route matches, a 404 is returned.' },
      { question: 'Are constraints checked before the action runs?', answer: 'Yes. Constraints are evaluated during routing, before the controller action is invoked.' },
      { question: 'Can I combine multiple constraints?', answer: 'Yes. Chain them with colons: {id:int:min(1):max(100)}.' }
    ]),
    summaryBox('Route Constraints Summary', [
      'Constraints filter routes before action execution.',
      'Built-in constraints cover common types like int, guid, and bool.',
      'Custom constraints handle domain-specific validation.',
      'Constraints improve API clarity and fail fast on invalid URLs.',
      'Use constraints alongside model validation, not as a replacement.'
    ], 'Route constraints make your routes more precise and self-documenting. They are especially valuable in public APIs.')
  ]
});

const urlGeneration = mkLesson({
  id: 'lesson-aspnet-core-03-routing-urls-url-generation',
  slug: 'url-generation',
  moduleSlug: '03-routing-urls',
  title: 'URL Generation',
  description: 'Generate URLs from route names and action names instead of hardcoding links in ASP.NET Core.',
  order: 4,
  difficulty: 'intermediate',
  estimatedMinutes: 12,
  tags: ['routing', 'url-generation', 'links'],
  blocks: [
    h(2, 'Why Avoid Hardcoded URLs?'),
    p('Hardcoding URLs like /products/details/5 creates tight coupling between your HTML and your route structure. If you change a route later, every hardcoded link breaks. URL generation keeps links in sync with routes automatically.'),
    p('ASP.NET Core provides several ways to generate URLs: IUrlHelper in controllers and views, the Url property in views, and the Link property in minimal APIs.'),
    example('URL generation in a controller', 'public IActionResult Details(int id)\n{\n    // Generate URL for the Index action of HomeController\n    var url = Url.Action("Index", "Home");\n    // url = "/Home/Index"\n\n    // Generate URL with route values\n    var productUrl = Url.Action("Details", "Products", new { id = 5 });\n    // url = "/Products/Details/5"\n\n    return View();\n}', 'csharp'),
    h(2, 'Generating URLs in Views'),
    p('In Razor views, use asp-controller and asp-action tag helpers to generate links. These generate the correct URL based on your routing configuration.'),
    example('Tag helpers for URL generation', '<a asp-controller="Products" asp-action="Details" asp-route-id="5">\n    View Product\n</a>\n\n<!-- Generates: /Products/Details/5 -->', 'razor'),
    p('You can also use asp-area for areas and asp-protocol to force HTTPS. The URL helpers automatically account for route changes, making your views resilient.'),
    h(2, 'Named Routes'),
    p('You can assign names to routes using the name parameter in MapControllerRoute or the Name property in route attributes. Named routes allow you to generate URLs by name, decoupling the URL from the controller/action structure.'),
    example('Named routes', 'app.MapControllerRoute(\n    name: "product-details",\n    pattern: "products/{id:int}",\n    defaults: new { controller = "Products", action = "Details" }\n);\n\n// Generate URL by name\nvar url = Url.RouteUrl("product-details", new { id = 5 });\n// url = "/products/5"', 'csharp'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: 'IUrlHelper', definition: 'An interface for generating URLs based on route configuration.' },
      { term: 'Tag Helper', definition: 'An attribute-like syntax in Razor that generates HTML dynamically.' },
      { term: 'Named Route', definition: 'A route with an explicit name for URL generation by reference.' },
      { term: 'Route Value', definition: 'A parameter value used to match or generate a route.' },
      { term: 'URL Generation', definition: 'Creating links dynamically based on route configuration.' }
    ]),
    h(2, 'FAQ'),
    faqBlock('FAQ: URL Generation', [
      { question: 'When should I use named routes?', answer: 'Use named routes when the URL structure might change or when you want to decouple link generation from controller/action names.' },
      { question: 'Do tag helpers work in email templates?', answer: 'No. Tag helpers require the Razor view engine. For emails, use IUrlHelper from a service or pass URLs as strings.' },
      { question: 'What is the difference between asp-action and asp-route?', answer: 'asp-action specifies the action name. asp-route specifies a named route by its name property.' }
    ]),
    summaryBox('URL Generation Summary', [
      'URL generation avoids hardcoding URLs in views and controllers.',
      'Tag helpers like asp-controller and asp-action generate links dynamically.',
      'Named routes provide decoupled URL generation.',
      'IUrlHelper is available in controllers and views.',
      'Generated URLs automatically adapt to route changes.'
    ], 'Using URL generation makes your application resilient to route changes and improves maintainability.')
  ]
});
const areaRouting = mkLesson({
  id: 'lesson-aspnet-core-03-routing-urls-area-routing',
  slug: 'area-routing',
  moduleSlug: '03-routing-urls',
  title: 'Area Routing',
  description: 'Organize large applications into areas with separate controllers, views, and routes.',
  order: 5,
  difficulty: 'intermediate',
  estimatedMinutes: 12,
  tags: ['routing', 'areas', 'organization'],
  blocks: [
    h(2, 'What are Areas?'),
    p('Areas are a way to organize a large ASP.NET Core application into smaller functional groups. Each area has its own set of controllers, views, and route configuration.'),
    p('For example, an e-commerce site might have an Admin area for store management and a Shop area for customer-facing pages. Each area can have its own layout, navigation, and URL structure.'),
    example('Area folder structure', 'Areas/\n  Admin/\n    Controllers/\n      DashboardController.cs\n      ProductsController.cs\n    Views/\n      Dashboard/\n        Index.cshtml\n      Products/\n        Index.cshtml\n  Shop/\n    Controllers/\n      HomeController.cs\n    Views/\n      Home/\n        Index.cshtml', 'text'),
    h(2, 'Configuring Areas'),
    p('To use areas, you must register them in Program.cs and use the [Area] attribute on controllers. The routing pattern must include the area token.'),
    example('Registering areas', 'var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\n\napp.MapControllerRoute(\n    name: "areas",\n    pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}"\n);\n\napp.MapControllerRoute(\n    name: "default",\n    pattern: "{controller=Home}/{action=Index}/{id?}"\n);\n\napp.Run();', 'csharp'),
    p('The :exists constraint on {area} ensures the route only matches if the area exists. The area route must be registered before the default route.'),
    h(2, 'Area Controller Attribute'),
    p('Mark controllers with [Area("Admin")] to place them in the Admin area. The area name must match the folder name under Areas/.'),
    example('Controller in an area', '[Area("Admin")]\n[Route("admin/[controller]")]\npublic class DashboardController : Controller\n{\n    public IActionResult Index()\n    {\n        return View(); // Looks in Areas/Admin/Views/Dashboard/Index.cshtml\n    }\n}', 'csharp'),
    callout('tip', 'Link Generation in Areas', 'Use asp-area="Admin" in tag helpers to generate links to areas. Without it, links to area actions will not include the area prefix.'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: 'Area', definition: 'A functional section of an application with its own controllers, views, and routes.' },
      { term: 'Area Route', definition: 'A route pattern that includes an {area} segment to route to the correct area.' },
      { term: 'Area Exists Constraint', definition: 'A route constraint that ensures the area segment matches a registered area.' }
    ]),
    h(2, 'FAQ'),
    faqBlock('FAQ: Area Routing', [
      { question: 'When should I use areas?', answer: 'Use areas when your application has distinct functional sections that benefit from separate organization, such as admin panels, user profiles, or API sections.' },
      { question: 'Can areas share layouts?', answer: 'Yes. Views in an area can use layouts from the root Views/Shared folder. You can also define area-specific layouts.' },
      { question: 'Do areas affect performance?', answer: 'No. Areas are a routing and organizational feature. They do not add runtime overhead.' }
    ]),
    summaryBox('Area Routing Summary', [
      'Areas organize large apps into functional sections.',
      'Each area has its own controllers, views, and route pattern.',
      'The [Area] attribute marks controllers as belonging to an area.',
      'Register area routes before the default route.',
      'Use asp-area tag helpers for correct link generation.'
    ], 'Areas are essential for keeping large ASP.NET Core applications organized and maintainable.')
  ]
});

// 04-model-binding-validation
const modelBindingOverview = mkLesson({
  id: 'lesson-aspnet-core-04-model-binding-validation-model-binding-overview',
  slug: 'model-binding-overview',
  moduleSlug: '04-model-binding-validation',
  title: 'Model Binding Overview',
  description: 'Learn how ASP.NET Core automatically converts incoming request data into .NET objects.',
  order: 1,
  difficulty: 'intermediate',
  estimatedMinutes: 14,
  tags: ['model-binding', 'validation', 'data'],
  blocks: [
    h(2, 'What is Model Binding?'),
    p('Model binding is the process that converts incoming HTTP request data into .NET objects that your action methods can use. It works with data from form fields, query strings, route values, and JSON bodies.'),
    p('Without model binding, you would manually parse Request.Form["name"], Request.Query["page"], and RouteData.Values["id"] for every request. Model binding automates this by matching names in the request to properties on your model classes.'),
    mermaid('model-binding-flow', 'Model binding flow', 'graph TD\n    A[HTTP Request] --> B[Routing]\n    B --> C[Model Binding]\n    C --> D{Type Match?}\n    D -->|Simple| E[From Route/Query/Form]\n    D -->|Complex| F[From Body JSON]\n    E --> G[Action Parameter]\n    F --> G'),
    h(2, 'Sources and Order'),
    p('ASP.NET Core checks several sources for each parameter, in order: form fields, the request body (for complex types), and route values. The [FromXxx] attributes override this default behavior.'),
    table('Binding Sources', [
      ['Source', 'Data Type', 'Example'],
      ['Route values', 'Simple', 'id from /products/5'],
      ['Query string', 'Simple', 'page from ?page=2'],
      ['Form fields', 'Simple', 'name from form input'],
      ['Request body', 'Complex', 'JSON payload for a DTO'],
      ['Services', 'Any', '[FromServices] for DI']
    ]),
    h(2, 'Simple vs Complex Types'),
    p('Simple types (int, string, Guid, etc.) are bound from route data and query string. Complex types (classes with multiple properties) are bound from the request body by default, using JSON serialization.'),
    p('You can override the default source with attributes. For example, [FromQuery] forces a complex type to be bound from the query string. This is useful for search filters that use GET requests.'),
    example('Binding sources in action', 'public class SearchRequest\n{\n    public string Query { get; set; }\n    public int Page { get; set; } = 1;\n}\n\n[HttpGet("search")]\npublic IActionResult Search([FromQuery] SearchRequest request)\n{\n    // Query and Page come from query string\n    var results = _searchService.Search(request.Query, request.Page);\n    return View(results);\n}', 'csharp'),
    h(2, 'Custom Model Binders'),
    p('For advanced scenarios, you can create custom model binders by implementing IModelBinder. This is useful for binding data from non-standard formats or custom request headers.'),
    callout('info', 'Model Binding vs Validation', 'Model binding happens first. It converts raw data into objects. Validation runs after binding and checks if the object meets business rules. They work together but serve different purposes.'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: 'Model Binding', definition: 'The process of converting request data into action parameters.' },
      { term: 'Binding Source', definition: 'The origin of data for a parameter: route, query, form, body, or services.' },
      { term: 'Simple Type', definition: 'Primitive types like int, string, Guid that bind from route/query.' },
      { term: 'Complex Type', definition: 'Classes with properties that bind from the request body by default.' },
      { term: 'Model Binder', definition: 'A class that implements custom binding logic for a parameter type.' }
    ]),
    h(2, 'FAQ'),
    faqBlock('FAQ: Model Binding Overview', [
      { question: 'Where can I bind parameters from?', answer: 'Route values, query string, form data, request body, services, and custom sources via [FromXxx] attributes.' },
      { question: 'Why is my complex type null?', answer: 'Check that the JSON property names match the C# property names (case-insensitive by default). Ensure the request Content-Type is application/json.' },
      { question: 'What is model binding vs model validation?', answer: 'Binding converts raw data into objects. Validation checks if the objects meet rules. Binding comes first, then validation.' }
    ]),
    summaryBox('Model Binding Summary', [
      'Model binding converts request data into .NET objects automatically.',
      'Simple types bind from route and query string.',
      'Complex types bind from the request body by default.',
      'Use [FromXxx] attributes to control the binding source.',
      'Custom binders handle non-standard data formats.'
    ], 'Model binding eliminates repetitive parsing code and makes your actions cleaner and more maintainable.')
  ]
});
const bindingSources = mkLesson({
  id: 'lesson-aspnet-core-04-model-binding-validation-binding-sources',
  slug: 'binding-sources',
  moduleSlug: '04-model-binding-validation',
  title: 'Binding Sources',
  description: 'Control where action parameters come from using binding source attributes like [FromQuery], [FromBody], [FromRoute], and [FromServices].',
  order: 2,
  difficulty: 'intermediate',
  estimatedMinutes: 12,
  tags: ['model-binding', 'attributes', 'sources'],
  blocks: [
    h(2, 'Explicit Binding Sources'),
    p('While ASP.NET Core has smart defaults, you should be explicit about where parameters come from. Explicit binding makes your API self-documenting and prevents surprises when the routing changes.'),
    table('Binding Source Attributes', [
      ['Attribute', 'Source', 'Typical Use'],
      ['[FromRoute]', 'URL route values', 'Path parameters like {id}'],
      ['[FromQuery]', 'Query string', 'Filter options, pagination'],
      ['[FromForm]', 'Form fields', 'HTML form submissions'],
      ['[FromBody]', 'Request body', 'JSON, XML payloads'],
      ['[FromServices]', 'DI container', 'Injecting services into actions'],
      ['[FromHeader]', 'Request headers', 'Authorization tokens, correlation IDs']
    ]),
    example('Using various binding sources', '[HttpGet("{id}")]\npublic IActionResult GetById([FromRoute] int id, [FromQuery] bool includeDetails)\n{\n    var product = _repository.GetById(id);\n    if (includeDetails)\n    {\n        var details = _service.GetDetails(id);\n        return Ok(new { product, details });\n    }\n    return Ok(product);\n}\n\n[HttpPost]\npublic async Task<IActionResult> Create([FromBody] CreateProductDto dto, [FromServices] IEmailService email)\n{\n    // email is injected from DI, not from request body\n    var product = _mapper.Map<Product>(dto);\n    _repository.Add(product);\n    await email.NotifyCreated(product);\n    return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);\n}', 'csharp'),
    callout('warning', 'Multiple [FromBody] Parameters', 'You can have only one [FromBody] parameter per action. The request body can only be read once. If you need multiple objects, wrap them in a single DTO.'),
    h(2, 'FromHeader Example'),
    p('Headers are useful for passing metadata like correlation IDs, API keys, or feature flags. The [FromHeader] attribute binds header values directly to parameters.'),
    example('Binding from headers', '[HttpGet]\npublic IActionResult GetStatus([FromHeader(Name = "X-Correlation-ID")] string correlationId)\n{\n    _logger.LogInformation("Request {CorrelationId}", correlationId);\n    return Ok(new { status = "ok" });\n}', 'csharp'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: 'Binding Source', definition: 'The origin of data for a model-bound parameter.' },
      { term: '[FromBody]', definition: 'Reads the parameter from the HTTP request body, typically JSON.' },
      { term: '[FromQuery]', definition: 'Reads the parameter from the query string.' },
      { term: '[FromServices]', definition: 'Resolves the parameter from the dependency injection container.' },
      { term: '[FromHeader]', definition: 'Reads the parameter from an HTTP request header.' }
    ]),
    h(2, 'FAQ'),
    faqBlock('FAQ: Binding Sources', [
      { question: 'Why is my [FromBody] parameter always null?', answer: 'Ensure the request Content-Type is application/json and the JSON property names match your C# properties.' },
      { question: 'Can I inject services into a controller action?', answer: 'Yes, use [FromServices]. However, constructor injection is preferred for better testability.' },
      { question: 'What if I need two body parameters?', answer: 'You cannot have two [FromBody] parameters. Create a single DTO that contains both objects.' }
    ]),
    summaryBox('Binding Sources Summary', [
      'Use attributes to control where parameters are bound from.',
      '[FromBody] is for JSON payloads and only one per action.',
      '[FromQuery] is ideal for filters and pagination.',
      '[FromServices] injects services but constructor injection is preferred.',
      'Explicit binding makes APIs self-documenting.'
    ], 'Explicit binding sources eliminate ambiguity and make your API behavior predictable.')
  ]
});

const validationAttributes = mkLesson({
  id: 'lesson-aspnet-core-04-model-binding-validation-validation-attributes',
  slug: 'validation-attributes',
  moduleSlug: '04-model-binding-validation',
  title: 'Validation Attributes',
  description: 'Apply built-in validation attributes to enforce data rules and provide automatic client and server validation.',
  order: 3,
  difficulty: 'intermediate',
  estimatedMinutes: 14,
  tags: ['validation', 'attributes', 'data-annotations'],
  blocks: [
    h(2, 'What are Validation Attributes?'),
    p('Validation attributes are declarative rules applied to model properties. They are part of the System.ComponentModel.DataAnnotations namespace. When model binding runs, ASP.NET Core checks these attributes and adds errors to ModelState.'),
    p('If any validation errors exist, the model is considered invalid. You can check ModelState.IsValid in your action and return a 400 response with the errors.'),
    table('Common Validation Attributes', [
      ['Attribute', 'Description', 'Example'],
      ['[Required]', 'Value must be provided', '[Required] public string Name { get; set; }'],
      ['[StringLength]', 'Max/min string length', '[StringLength(100)] public string Title { get; set; }'],
      ['[Range]', 'Numeric range', '[Range(1, 100)] public int Age { get; set; }'],
      ['[EmailAddress]', 'Valid email format', '[EmailAddress] public string Email { get; set; }'],
      ['[Phone]', 'Valid phone format', '[Phone] public string Phone { get; set; }'],
      ['[Url]', 'Valid URL format', '[Url] public string Website { get; set; }'],
      ['[Compare]', 'Match another property', '[Compare("Password")] public string ConfirmPassword { get; set; }'],
      ['[RegularExpression]', 'Regex pattern', '[RegularExpression(@"^\d{3}-\d{2}-\d{4}$")]']
    ]),
    example('Validation attributes on a model', 'public class ContactForm\n{\n    [Required(ErrorMessage = "Name is required")]\n    [StringLength(100, MinimumLength = 2)]\n    public string Name { get; set; }\n\n    [Required]\n    [EmailAddress]\n    public string Email { get; set; }\n\n    [Required]\n    [Phone]\n    public string Phone { get; set; }\n\n    [Required]\n    [StringLength(500, MinimumLength = 10)]\n    public string Message { get; set; }\n}', 'csharp'),
    h(2, 'Server-Side Validation'),
    p('On the server, ASP.NET Core automatically validates models after binding. If ModelState.IsValid is false, the action should return a validation error. The [ApiController] attribute automatically returns a 400 response with validation details.'),
    example('Server-side validation in action', '[HttpPost]\n[ValidateAntiForgeryToken]\npublic IActionResult Contact(ContactForm form)\n{\n    if (!ModelState.IsValid)\n    {\n        return View(form);\n    }\n    _emailService.Send(form.Email, form.Message);\n    TempData["Success"] = "Message sent!";\n    return RedirectToAction(nameof(Index));\n}', 'csharp'),
    h(2, 'Client-Side Validation'),
    p('ASP.NET Core can generate client-side validation scripts automatically. The jQuery Validation library (or the native HTML5 validation attributes in modern ASP.NET Core) reads the validation attributes and enforces them in the browser before the form is submitted.'),
    p('To enable client-side validation, include the appropriate scripts in your layout. Razor Pages and MVC templates include these by default.'),
    callout('important', 'Always Validate on Server', 'Client-side validation improves user experience, but it is not a security measure. Always validate on the server, because malicious users can bypass client-side checks.'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: 'Data Annotation', definition: 'An attribute that adds metadata and validation rules to model properties.' },
      { term: 'ModelState', definition: 'A dictionary that tracks the validation state of a bound model.' },
      { term: 'IValidatableObject', definition: 'An interface for implementing custom cross-property validation on a model.' },
      { term: 'ValidationAttribute', definition: 'The base class for all validation attributes.' },
      { term: 'Model Validation', definition: 'The process of checking a model against its validation rules after binding.' }
    ]),
    h(2, 'FAQ'),
    faqBlock('FAQ: Validation Attributes', [
      { question: 'Does [ApiController] automatically validate?', answer: 'Yes. It automatically returns a 400 Bad Request with validation errors if ModelState is invalid.' },
      { question: 'Can I create custom validation attributes?', answer: 'Yes. Inherit from ValidationAttribute and override the IsValid method.' },
      { question: 'How do I localize validation error messages?', answer: 'Use resource files and reference them in the ErrorMessage property: [Required(ErrorMessageResourceName = "RequiredField", ErrorMessageResourceType = typeof(Resources))]' }
    ]),
    summaryBox('Validation Attributes Summary', [
      'Data annotations provide declarative validation on model properties.',
      'ModelState.IsValid checks if the model passed all validation rules.',
      '[ApiController] automatically returns 400 for invalid models.',
      'Client-side validation improves UX but server validation is required for security.',
      'Custom validation attributes handle domain-specific rules.'
    ], 'Validation attributes are the first line of defense against invalid data. Use them consistently to keep your application robust.')
  ]
});
const customValidation = mkLesson({
  id: 'lesson-aspnet-core-04-model-binding-validation-custom-validation',
  slug: 'custom-validation',
  moduleSlug: '04-model-binding-validation',
  title: 'Custom Validation',
  description: 'Create custom validation attributes and implement IValidatableObject for complex validation scenarios.',
  order: 4,
  difficulty: 'intermediate',
  estimatedMinutes: 14,
  tags: ['validation', 'custom', 'attributes'],
  blocks: [
    h(2, 'When Built-in Attributes Are Not Enough'),
    p('Data annotations cover common scenarios, but business rules often require custom validation. For example, ensuring a discount code is not expired, or that a booking date is not in the past.'),
    p('You can create custom validation by inheriting from ValidationAttribute or implementing IValidatableObject on the model class.'),
    h(2, 'Custom Validation Attributes'),
    p('A custom validation attribute is a class that inherits from ValidationAttribute. Override the IsValid method to implement your logic. Return ValidationResult.Success for valid data, or a ValidationResult with an error message for invalid data.'),
    example('Custom validation attribute', 'public class FutureDateAttribute : ValidationAttribute\n{\n    protected override ValidationResult? IsValid(object? value, ValidationContext context)\n    {\n        if (value is not DateTime date)\n            return new ValidationResult("Invalid date format.");\n\n        if (date <= DateTime.UtcNow)\n            return new ValidationResult("Date must be in the future.");\n\n        return ValidationResult.Success;\n    }\n}\n\n// Usage\npublic class Event\n{\n    public string Title { get; set; }\n    [FutureDate]\n    public DateTime EventDate { get; set; }\n}', 'csharp'),
    h(2, 'IValidatableObject for Cross-Field Validation'),
    p('Sometimes validation depends on multiple properties. IValidatableObject lets you validate the entire model as a unit. Implement Validate to return a list of validation results.'),
    example('Cross-field validation with IValidatableObject', 'public class BookingRequest : IValidatableObject\n{\n    public DateTime StartDate { get; set; }\n    public DateTime EndDate { get; set; }\n\n    public IEnumerable<ValidationResult> Validate(ValidationContext context)\n    {\n        if (EndDate <= StartDate)\n        {\n            yield return new ValidationResult(\n                "End date must be after start date.",\n                new[] { nameof(EndDate) }\n            );\n        }\n\n        if ((EndDate - StartDate).TotalDays > 30)\n        {\n            yield return new ValidationResult(\n                "Booking cannot exceed 30 days.",\n                new[] { nameof(EndDate) }\n            );\n        }\n    }\n}', 'csharp'),
    callout('info', 'Validation Runs After Binding', 'Remember: model binding happens first. Custom validation only runs after the model has been successfully bound. If binding fails (e.g., invalid date format), validation may not run.'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: 'ValidationAttribute', definition: 'The base class for custom validation attributes.' },
      { term: 'IsValid', definition: 'The method in ValidationAttribute that performs the actual validation.' },
      { term: 'IValidatableObject', definition: 'An interface for validating an entire model object.' },
      { term: 'ValidationResult', definition: 'Represents the outcome of a validation check, including success or failure.' },
      { term: 'ValidationContext', definition: 'Provides context for a validation operation, including the object being validated.' }
    ]),
    h(2, 'FAQ'),
    faqBlock('FAQ: Custom Validation', [
      { question: 'Should I use a custom attribute or IValidatableObject?', answer: 'Use a custom attribute for single-property rules. Use IValidatableObject when validation involves multiple properties.' },
      { question: 'Can custom validation access services?', answer: 'Yes. The ValidationContext has a GetService method to resolve dependencies from DI.' },
      { question: 'Are custom validations run client-side?', answer: 'No. Custom server-side validations do not generate client-side code automatically. Use jQuery Validation adapters or Blazor for client-side custom rules.' }
    ]),
    summaryBox('Custom Validation Summary', [
      'Inherit from ValidationAttribute for single-property rules.',
      'Implement IValidatableObject for cross-field validation.',
      'Return ValidationResult.Success or a ValidationResult with an error message.',
      'Custom validation runs after model binding.',
      'Client-side custom validation requires additional setup.'
    ], 'Custom validation lets you enforce business rules that built-in attributes cannot express. Use it to keep validation logic centralized and reusable.')
  ]
});

const clientSideValidation = mkLesson({
  id: 'lesson-aspnet-core-04-model-binding-validation-client-side-validation',
  slug: 'client-side-validation',
  moduleSlug: '04-model-binding-validation',
  title: 'Client-Side Validation',
  description: 'Enable unobtrusive client-side validation in ASP.NET Core MVC and Razor Pages for better user experience.',
  order: 5,
  difficulty: 'intermediate',
  estimatedMinutes: 12,
  tags: ['validation', 'client-side', 'javascript'],
  blocks: [
    h(2, 'What is Client-Side Validation?'),
    p('Client-side validation runs in the browser before the form is submitted. It provides immediate feedback to users, reducing round-trips to the server. ASP.NET Core supports unobtrusive validation, which generates HTML5 data attributes that JavaScript reads.'),
    p('The framework uses jQuery Validation (or native HTML5 validation in newer versions) to read data-val attributes rendered by tag helpers. When a user submits a form, the scripts check the rules and prevent submission if validation fails.'),
    example('Rendered HTML with validation attributes', '<input type="text" id="Name" name="Name"\n    data-val="true"\n    data-val-required="Name is required"\n    data-val-length="Name must be between 2 and 100 characters."\n    data-val-length-min="2"\n    data-val-length-max="100" />', 'html'),
    h(2, 'Enabling Client-Side Validation'),
    p('Client-side validation is enabled by default in new MVC and Razor Pages projects. It requires three things: the validation scripts, the unobtrusive validation script, and the _ValidationScripts partial view.'),
    p('In your _Layout.cshtml, ensure you render the validation scripts partial. This loads jquery.validate, jquery.validate.unobtrusive, and any other required scripts.'),
    example('_Layout.cshtml with validation scripts', '<script src="~/lib/jquery/dist/jquery.min.js"></script>\n<script src="~/lib/jquery-validation/dist/jquery.validate.min.js"></script>\n<script src="~/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js"></script>\n@await RenderSectionAsync("Scripts", required: false)', 'html'),
    callout('tip', 'Native HTML5 Validation', 'ASP.NET Core 8+ supports native HTML5 validation for common types. You can disable unobtrusive validation and rely on browser-native validation for simple scenarios.'),
    h(2, 'Custom Client Validation'),
    p('For custom validation logic on the client, you can write jQuery Validation adapters. An adapter maps a custom data-val attribute to a jQuery validation method.'),
    p('In Blazor, client validation is handled differently using EditForm and DataAnnotationsValidator. The framework automatically runs validation and displays errors without JavaScript.'),
    h(2, 'Key Terms'),
    keyTerms([
      { term: 'Unobtrusive Validation', definition: 'Validation that uses HTML data attributes instead of inline JavaScript.' },
      { term: 'jQuery Validation', definition: 'A jQuery plugin that provides client-side form validation.' },
      { term: 'Data Annotations', definition: 'Attributes on model properties that define validation rules.' },
      { term: 'Validation Scripts Partial', definition: 'A shared partial view that includes the necessary JavaScript files.' },
      { term: 'EditForm', definition: 'A Blazor component that handles form submission and validation.' }
    ]),
    h(2, 'FAQ'),
    faqBlock('FAQ: Client-Side Validation', [
      { question: 'Is client-side validation secure?', answer: 'No. It is for user experience only. Always validate on the server.' },
      { question: 'Why is my client validation not working?', answer: 'Check that jQuery and jQuery Validation scripts are loaded, and that the validation scripts partial is rendered.' },
      { question: 'Can I use client validation without jQuery?', answer: 'Yes. ASP.NET Core supports native HTML5 validation. You can also use Blazor, which does not require jQuery.' }
    ]),
    summaryBox('Client-Side Validation Summary', [
      'Client-side validation improves user experience by catching errors early.',
      'Unobtrusive validation uses data attributes rendered by tag helpers.',
      'jQuery Validation is the default, but HTML5 native validation works too.',
      'Always keep server-side validation as the security boundary.',
      'Blazor provides built-in validation without JavaScript dependencies.'
    ], 'Client-side validation is a UX enhancement, not a security feature. Combine it with server validation for the best experience.')
  ]
});
