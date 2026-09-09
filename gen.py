import json, os

BASE = "/workspace/f9343184-f4eb-4a6e-8a7f-ec85c9efba8b/sessions/agent_23a36398-aba0-4fc6-b45d-778d317dd74c/content/courses/azure"

def write_lesson(path, lesson):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        json.dump(lesson, f, indent=2)
        f.write("\n")

M11 = "11-application-deployment-and-devops"
M12 = "12-infrastructure-as-code-and-automation"
M13 = "13-ai-services-for-azure-developers"

# M11 L2
write_lesson(BASE + "/" + M11 + "/deployment-slots-and-slot-swapping.json", {
    "id": "lesson-azure-deployment-slots-and-slot-swapping", "slug": "deployment-slots-and-slot-swapping", "moduleSlug": M11, "courseSlug": "azure",
    "title": "Deployment Slots and Slot Swapping",
    "description": "Learn how to create and use deployment slots in Azure App Service and swap them for zero-downtime deployments.",
    "order": 2, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Deployment slots are one of the most useful features of Azure App Service. Each slot is a fully functional web app with its own hostname, content, and configuration. They let you validate changes before swapping them into production."}},
        {"type": "heading", "data": {"level": 2, "text": "How Slots Work"}},
        {"type": "paragraph", "data": {"text": "When you create a slot, Azure creates a separate instance of your app. Both the production slot and the staging slot share the same resources but have completely separate content and settings."}},
        {"type": "mermaid", "data": {"id": "m11-slots", "caption": "How deployment slots work in App Service", "definition": "flowchart LR\n    subgraph AppServicePlan[App Service Plan]\n        direction TB\n        P[Production Slot]\n        S[Staging Slot]\n    end\n    Dev[Developer Push] --> S\n    S -- Swap --> P\n    style P fill:#c8e6c9,stroke:#333\n    style S fill:#fff9c4,stroke:#333"}},
        {"type": "example", "data": {"title": "Azure CLI - Swap Deployment Slots", "content": "Swap a staging slot into production with zero downtime.", "language": "azurecli", "code": "az webapp deployment slot swap --resource-group MyResourceGroup --name MyWebApp --slot staging --target-slot production --action swap"}},
        {"type": "bullet-list", "data": {"title": "What Swapping Does", "items": [
            "**Content swap** - The app code, binaries, and static files move between slots.",
            "**Configuration swap** - Slot-specific settings stay with the slot by default.",
            "**Warm-up** - Azure performs an auto-swap warm-up to ensure the target slot is ready."
        ]}},
        {"type": "example", "data": {"title": "PowerShell - List Deployment Slots", "content": "List all deployment slots for an App Service app.", "language": "powershell", "code": "Install-Module -Name Az.Websites -Scope CurrentUser -Force\nConnect-AzAccount\n$slots = Get-AzWebAppSlot -ResourceGroupName \"MyResourceGroup\" -Name \"MyWebApp\"\n$slots | Select-Object Name, State | Format-Table"}},
        {"type": "callout", "data": {"variant": "warning", "title": "Slot Settings", "text": "Only settings marked as slot settings move during a swap. Connection strings and app settings can be configured as slot settings. Always mark production connection strings as slot settings."}},
        {"type": "table", "data": {"headers": ["Property", "Production Slot", "Staging Slot"], "rows": [
            ["Hostname", "myapp.azurewebsites.net", "myapp-staging.azurewebsites.net"],
            ["Auto-swap", "Configurable", "Configurable"],
            ["Custom domains", "Yes", "Yes"],
            ["SSL bindings", "Yes", "Yes"]
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Create and Swap a Slot", "description": "Create a staging slot, deploy code to it, and swap it into production.", "steps": [
            "Create an App Service app if you do not already have one",
            "Create a staging slot with az webapp deployment slot create",
            "Deploy the sample app to the staging slot URL",
            "Browse the staging URL and confirm the app works",
            "Swap staging to production and confirm the production URL shows the new version"
        ], "expectedOutcome": "A working App Service app with a staging slot that you successfully swapped into production."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Deployment slots give you a full staging environment at no extra compute cost",
            "Swapping is atomic and causes zero downtime",
            "Slot settings remain bound to their slot unless explicitly configured to swap",
            "Auto-swap can automatically deploy when a new build is available"
        ], "takeaway": "Always use a staging slot before pushing changes to production."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

# M11 L3
write_lesson(BASE + "/" + M11 + "/blue-green-canary-and-rolling-deployments.json", {
    "id": "lesson-azure-blue-green-canary-and-rolling-deployments", "slug": "blue-green-canary-and-rolling-deployments", "moduleSlug": M11, "courseSlug": "azure",
    "title": "Blue/Green, Canary, and Rolling Deployments",
    "description": "Implement production-grade deployment patterns in Azure using App Service slots, Traffic Manager, and load balancer rules.",
    "order": 3, "difficulty": "beginner", "estimatedMinutes": 15, "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "While deployment slots handle basic staging needs, larger applications benefit from more advanced patterns. Blue/Green, Canary, and Rolling deployments give you fine-grained control over how new versions reach users."}},
        {"type": "heading", "data": {"level": 2, "text": "Blue/Green Deployment"}},
        {"type": "paragraph", "data": {"text": "In a Blue/Green deployment, you maintain two identical production environments. Blue runs the current live version. Green runs the new version. When Green is validated, you redirect traffic from Blue to Green instantly."}},
        {"type": "example", "data": {"title": "Azure CLI - Configure Traffic Routing with Azure Front Door", "content": "Route traffic between two backends using Azure Front Door.", "language": "azurecli", "code": "az network front-door create --resource-group MyResourceGroup --name MyFrontDoor --backend-address blue-app.azurewebsites.net --backend-address green-app.azurewebsites.net"}},
        {"type": "heading", "data": {"level": 3, "text": "Canary Deployment"}},
        {"type": "paragraph", "data": {"text": "Canary deployments route a small percentage of traffic to the new version. If metrics look good, you increase the percentage. If something goes wrong, you route 100 percent back to the stable version."}},
        {"type": "mermaid", "data": {"id": "m11-canary", "caption": "Canary release traffic progression", "definition": "flowchart LR\n    U[Users] -->|5% Canary| N[New Version]\n    U -->|95% Stable| O[Old Version]\n    N -->|Pass| M[Monitor Metrics]\n    M -->|Increase to 25%| N\n    M -->|Fail| R[Rollback]\n    style N fill:#c8e6c9,stroke:#333\n    style O fill:#bbdefb,stroke:#333\n    style R fill:#ffcdd2,stroke:#333"}},
        {"type": "heading", "data": {"level": 3, "text": "Rolling Deployment"}},
        {"type": "paragraph", "data": {"text": "Rolling deployments update a subset of instances at a time. Kubernetes Deployments use rolling updates by default, updating pods one by one while keeping the service available."}},
        {"type": "example", "data": {"title": "YAML - Kubernetes Rolling Update", "content": "A Deployment resource with rolling update strategy.", "language": "yaml", "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-app\nspec:\n  replicas: 4\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 1\n      maxSurge: 1\n  selector:\n    matchLabels:\n      app: web-app\n  template:\n    metadata:\n      labels:\n        app: web-app\n    spec:\n      containers:\n        - name: web-app\n          image: myregistry.azurecr.io/web-app:v2\n          ports:\n            - containerPort: 80"}},
        {"type": "comparison-cards", "data": {"title": "Deployment Strategy Comparison", "cards": [
            {"title": "Blue/Green", "description": "Two full environments; switch traffic instantly.", "pros": ["Zero downtime", "Instant rollback", "Full test before release"], "cons": ["Double infrastructure cost", "Database migrations need care"]},
            {"title": "Canary", "description": "Gradually route traffic to new version.", "pros": ["Real user feedback", "Low blast radius", "Data-driven decisions"], "cons": ["Requires monitoring", "Longer release time"]},
            {"title": "Rolling", "description": "Update instances one at a time.", "pros": ["No extra environments", "Works at scale", "Built into Kubernetes"], "cons": ["Slower rollout", "Multiple versions run simultaneously"]}
        ]}},
        {"type": "callout", "data": {"variant": "info", "title": "Azure Front Door Canary", "text": "Azure Front Door Standard/Premium supports weighted traffic routing natively. You can send 5 percent, 25 percent, 50 percent, then 100 percent of traffic to the new backend without any custom code."}},
        {"type": "exercise", "data": {"title": "Exercise: Configure a Canary Release", "description": "Use Azure Front Door to route 10 percent of traffic to a new version of your app.", "steps": [
            "Deploy v2 of your app to a separate App Service",
            "Create an Azure Front Door with two backends (v1 and v2)",
            "Configure a routing rule with 90 percent weight to v1 and 10 percent to v2",
            "Monitor the v2 backend for errors in Application Insights",
            "Increase the weight to 100 percent once confident"
        ], "expectedOutcome": "Front Door routing traffic proportionally between two app versions."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Blue/Green uses two full environments and swaps traffic instantly",
            "Canary routes a small percentage of traffic to reduce risk",
            "Rolling updates replace instances gradually (default in Kubernetes)",
            "Azure Front Door and App Service slots both support these patterns"
        ], "takeaway": "Use Blue/Green for critical applications, Canary for gradual rollouts, and Rolling when running in Kubernetes."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

print("M11 L2-3 done")

# M11 L4
write_lesson(BASE + "/" + M11 + "/azure-devops-overview.json", {
    "id": "lesson-azure-azure-devops-overview", "slug": "azure-devops-overview", "moduleSlug": M11, "courseSlug": "azure",
    "title": "Azure DevOps Overview",
    "description": "Explore Azure DevOps services including Boards, Repos, Pipelines, Test Plans, and Artifacts for end-to-end delivery.",
    "order": 4, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Azure DevOps is a suite of services that covers the entire software development lifecycle. It provides tools for planning work, versioning code, building and releasing applications, running tests, and hosting packages."}},
        {"type": "heading", "data": {"level": 2, "text": "Azure DevOps Services"}},
        {"type": "table", "data": {"headers": ["Service", "Purpose", "Common Use"], "rows": [
            ["Azure Boards", "Agile planning and work tracking", "Sprint planning, backlogs, Kanban boards"],
            ["Azure Repos", "Git and TFVC version control", "Hosting private Git repositories"],
            ["Azure Pipelines", "CI/CD for any platform", "Building, testing, and deploying code"],
            ["Azure Test Plans", "Manual and exploratory testing", "Test case management and bug tracking"],
            ["Azure Artifacts", "Package management", "NuGet, npm, Maven, Python feeds"]
        ]}},
        {"type": "paragraph", "data": {"text": "You can use each service independently or together as an integrated workflow. A code commit in Azure Repos can trigger a build in Azure Pipelines, which deploys to Azure and logs test results in Azure Test Plans."}},
        {"type": "example", "data": {"title": "Azure CLI - Create a DevOps Organization and Project", "content": "Create an Azure DevOps organization and project via the Azure CLI.", "language": "azurecli", "code": "az devops organization create --organization https://dev.azure.com/myorg --location eastus\naz devops project create --organization https://dev.azure.com/myorg --name MyAppProject --process Agile --visibility private"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Azure DevOps vs GitHub", "text": "Azure DevOps and GitHub are both Microsoft products. Use Azure DevOps when you need integrated project management (Boards) and on-premises options. Use GitHub Actions if you already host code on GitHub."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Pipeline", "definition": "A CI/CD pipeline is a series of steps that build, test, and deploy your code. Azure Pipelines supports both YAML-defined and classic editor pipelines."},
            {"term": "Service Connection", "definition": "A secure connection from Azure DevOps to an external service used by pipelines to deploy or authenticate."},
            {"term": "Agent", "definition": "A hosted or self-hosted machine that runs pipeline jobs. Microsoft provides free Microsoft-hosted agents with Azure DevOps."}
        ]}},
        {"type": "bullet-list", "data": {"title": "When to Use Azure DevOps", "items": [
            "You need integrated work tracking (Boards) alongside your code and pipelines",
            "Your team requires fine-grained permissions and on-premises gateways",
            "You use multiple version control systems (Git, TFVC)",
            "You need to host internal NuGet or npm packages (Artifacts)"
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Create Your First Azure DevOps Project", "description": "Set up an Azure DevOps organization and project.", "steps": [
            "Sign up for free at dev.azure.com",
            "Create an organization named after yourself or your team",
            "Create a new project called MyFirstApp with Agile process",
            "Create a new Git repository inside the project",
            "Clone the repo locally and push a README file"
        ], "expectedOutcome": "An Azure DevOps project with an empty Git repository you can clone."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Azure DevOps covers the full development lifecycle in one platform",
            "Azure Pipelines builds and deploys code from any Git repository",
            "Azure Boards, Repos, Pipelines, Test Plans, and Artifacts work together seamlessly",
            "You can use any subset of services that fits your workflow"
        ], "takeaway": "Azure DevOps is a complete platform for teams that want everything in one place."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

# M11 L5
write_lesson(BASE + "/" + M11 + "/azure-repos-and-azure-pipelines.json", {
    "id": "lesson-azure-azure-repos-and-azure-pipelines", "slug": "azure-repos-and-azure-pipelines", "moduleSlug": M11, "courseSlug": "azure",
    "title": "Azure Repos and Azure Pipelines",
    "description": "Use Azure Repos for version control and understand the structure of a basic Azure Pipelines build.",
    "order": 5, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Azure Repos is a version control service that hosts Git repositories. Azure Pipelines is the CI/CD engine that builds your code from those repositories. Together they form the backbone of an automated release process."}},
        {"type": "heading", "data": {"level": 2, "text": "Azure Repos Features"}},
        {"type": "bullet-list", "data": {"title": "Key Repos Features", "items": [
            "**Unlimited private Git repos** - Free for up to 5 users in the Basic plan",
            "**Pull request policies** - Require reviewers, linked work items, and passing builds before merge",
            "**Branch policies** - Enforce code review, build validation, and comment resolution on specific branches",
            "**File locking** - Prevent conflicting edits to binary files"
        ]}},
        {"type": "heading", "data": {"level": 2, "text": "Pipeline Structure"}},
        {"type": "paragraph", "data": {"text": "An Azure Pipeline is defined in a YAML file (typically azure-pipelines.yml) in the root of your repository. It contains one or more stages, each containing jobs, each containing steps."}},
        {"type": "example", "data": {"title": "YAML - Minimal Azure Pipeline", "content": "A basic pipeline that runs on every push to main.", "language": "yaml", "code": "trigger:\n  branches:\n    include:\n      - main\n\npool:\n  vmImage: 'ubuntu-latest'\n\nsteps:\n  - task: UseDotNet@2\n    inputs:\n      packageType: 'sdk'\n      version: '8.x'\n\n  - script: dotnet build --configuration Release\n    displayName: 'Build Solution'\n\n  - script: dotnet test --no-build --verbosity normal\n    displayName: 'Run Tests'"}},
        {"type": "callout", "data": {"variant": "info", "title": "Classic vs YAML Pipelines", "text": "Classic pipelines are configured through a visual editor in the Azure DevOps portal. YAML pipelines live in your repository alongside your code, making them version-controlled and reviewable. Use YAML pipelines for all new projects."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Trigger", "definition": "An event that starts a pipeline run. Common triggers are pushes to a branch, pull requests, or scheduled times."},
            {"term": "Pool", "definition": "A collection of agents (machines) that run your pipeline jobs. Microsoft-hosted pools provide clean VMs; self-hosted pools use your own machines."},
            {"term": "Stage", "definition": "A logical division of a pipeline (e.g., Build, Test, Deploy). Stages can run sequentially or in parallel."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Create Your First Pipeline", "description": "Connect a repo to Azure Pipelines and run a build.", "steps": [
            "Push a simple .NET or Node.js project to Azure Repos",
            "In Azure DevOps, go to Pipelines > New Pipeline",
            "Select your Azure Repos repository",
            "Choose the starter YAML template",
            "Add a dotnet test step and save",
            "Run the pipeline and confirm it completes"
        ], "expectedOutcome": "A green (successful) pipeline run that builds and tests your code."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Azure Repos hosts private Git repositories with pull request policies",
            "Azure Pipelines are defined in YAML and stored in your repository",
            "A pipeline has stages, jobs, and steps that run on agents",
            "Triggers start pipeline runs automatically on code changes"
        ], "takeaway": "Store your pipeline definition in the same repo as your code for full version control."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

# M11 L6
write_lesson(BASE + "/" + M11 + "/azure-pipelines-ci-cd.json", {
    "id": "lesson-azure-azure-pipelines-ci-cd", "slug": "azure-pipelines-ci-cd", "moduleSlug": M11, "courseSlug": "azure",
    "title": "Azure Pipelines CI/CD",
    "description": "Build a complete CI/CD pipeline with Azure Pipelines that builds, tests, and deploys an application.",
    "order": 6, "difficulty": "beginner", "estimatedMinutes": 15, "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Continuous Integration (CI) automatically builds and tests code when developers commit changes. Continuous Deployment (CD) automatically deploys passing builds to an environment. Together, CI/CD reduces manual work and catches bugs early."}},
        {"type": "heading", "data": {"level": 2, "text": "Building a CI/CD Pipeline"}},
        {"type": "paragraph", "data": {"text": "A typical CI/CD pipeline in Azure has three stages: Build (compile and test), Staging (deploy to a test environment), and Production (deploy after approval)."}},
        {"type": "mermaid", "data": {"id": "m11-pipeline", "caption": "Azure Pipelines CI/CD flow", "definition": "flowchart LR\n    C[Code Commit] --> B[Build Stage]\n    B -->|Tests Pass| T[Test Stage]\n    T -->|Pass| S[Deploy to Staging]\n    S -->|Manual Approval| P[Deploy to Production]\n    B -->|Tests Fail| F[Notify Team]\n    style B fill:#e3f2fd,stroke:#333\n    style P fill:#c8e6c9,stroke:#333\n    style F fill:#ffcdd2,stroke:#333"}},
        {"type": "example", "data": {"title": "YAML - Full CI/CD Pipeline for .NET App", "content": "Multi-stage pipeline with build, test, and deploy stages.", "language": "yaml", "code": "trigger:\n  branches:\n    include: [ main ]\n\nvariables:\n  buildConfiguration: 'Release'\n  azureSubscription: 'MyAzureSubscription'\n  webAppName: 'my-web-app'\n\nstages:\n  - stage: Build\n    displayName: 'Build and Test'\n    jobs:\n      - job: Build\n        pool:\n          vmImage: 'ubuntu-latest'\n        steps:\n          - task: UseDotNet@2\n            inputs:\n              packageType: 'sdk'\n              version: '8.x'\n          - script: dotnet build --configuration $(buildConfiguration)\n            displayName: 'dotnet build'\n          - script: dotnet test --no-build --verbosity normal\n            displayName: 'dotnet test'\n          - task: PublishBuildArtifacts@1\n            inputs:\n              PathtoPublish: '$(Build.ArtifactStagingDirectory)'\n              ArtifactName: 'drop'\n\n  - stage: Deploy_Staging\n    displayName: 'Deploy to Staging'\n    dependsOn: Build\n    condition: succeeded()\n    jobs:\n      - deployment: Deploy\n        environment: 'staging'\n        pool:\n          vmImage: 'ubuntu-latest'\n        strategy:\n          runOnce:\n            deploy:\n              steps:\n                - task: AzureWebApp@1\n                  inputs:\n                    azureSubscription: $(azureSubscription)\n                    appName: $(webAppName)\n                    deployToSlotOrASE: true\n                    resourceGroupName: 'MyResourceGroup'\n                    slotName: 'staging'\n\n  - stage: Deploy_Production\n    displayName: 'Deploy to Production'\n    dependsOn: Deploy_Staging\n    condition: succeeded()\n    jobs:\n      - deployment: DeployProd\n        environment: 'production'\n        pool:\n          vmImage: 'ubuntu-latest'\n        strategy:\n          runOnce:\n            deploy:\n              steps:\n                - task: AzureWebApp@1\n                  inputs:\n                    azureSubscription: $(azureSubscription)\n                    appName: $(webAppName)\n                    packageForLinux: '$(Pipeline.Workspace)/drop/*.zip'"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Environments in Azure Pipelines", "text": "Use environment in deployment jobs to create approval gates and track deployments. You can require manual approval for production deployments directly in the YAML."}},
        {"type": "bullet-list", "data": {"title": "Pipeline Best Practices", "items": [
            "Keep the pipeline definition in your repository",
            "Run fast tests in the build stage and slower integration tests later",
            "Use environments for staging and production to add approval gates",
            "Publish build artifacts so later stages can consume them"
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Add a Deploy Stage", "description": "Extend an existing pipeline to deploy to Azure App Service.", "steps": [
            "Open the azure-pipelines.yml from the previous lesson",
            "Add a Deploy_Staging stage using the AzureWebApp task",
            "Add a Deploy_Production stage with a manual approval gate",
            "Commit and push the YAML file",
            "Verify all three stages run and pass"
        ], "expectedOutcome": "A multi-stage pipeline that deploys to staging and production."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "CI automatically builds and tests code on every commit",
            "CD automatically deploys passing builds to environments",
            "Multi-stage YAML pipelines replace classic release pipelines",
            "Environments provide approval gates and deployment history"
        ], "takeaway": "Automate everything from code commit to production deployment. The more you automate, the fewer mistakes you make."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

# M11 L7
write_lesson(BASE + "/" + M11 + "/github-actions-for-azure.json", {
    "id": "lesson-azure-github-actions-for-azure", "slug": "github-actions-for-azure", "moduleSlug": M11, "courseSlug": "azure",
    "title": "GitHub Actions for Azure",
    "description": "Set up GitHub Actions workflows to build and deploy applications to Azure services.",
    "order": 7, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "GitHub Actions is a CI/CD platform built directly into GitHub. It uses workflow files written in YAML that live in the .github/workflows directory of your repository. Microsoft provides official actions for deploying to Azure."}},
        {"type": "heading", "data": {"level": 2, "text": "GitHub Actions Basics"}},
        {"type": "paragraph", "data": {"text": "A workflow is triggered by an event (push, pull request, schedule). Each workflow contains jobs, and each job runs on a runner (GitHub-hosted or self-hosted)."}},
        {"type": "example", "data": {"title": "YAML - Deploy to Azure App Service with GitHub Actions", "content": "A basic workflow that builds a .NET app and deploys to Azure App Service.", "language": "yaml", "code": "name: Deploy to Azure\n\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Setup .NET\n        uses: actions/setup-dotnet@v4\n        with:\n          dotnet-version: '8.x'\n      - name: Restore dependencies\n        run: dotnet restore\n      - name: Build\n        run: dotnet build --configuration Release --no-restore\n      - name: Test\n        run: dotnet test --no-build --verbosity normal\n      - name: Deploy to Azure Web App\n        uses: azure/webapps-deploy@v3\n        with:\n          app-name: 'my-web-app'\n          slot-name: 'production'\n          publish-profile: ${{ secrets.AZUREAPPSERVICE_PUBLISHPROFILE }}\n          package: '.'"}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Workflow", "definition": "A configurable automated process defined in a YAML file inside .github/workflows/."},
            {"term": "Runner", "definition": "A server that runs your workflow jobs. GitHub-hosted runners are VMs provided by GitHub with common tools pre-installed."},
            {"term": "Action", "definition": "A reusable unit of code that performs a specific task. Microsoft publishes azure/webapps-deploy and many other Azure actions."}
        ]}},
        {"type": "bullet-list", "data": {"title": "GitHub Actions Advantages", "items": [
            "No separate service needed - workflows live in your repository",
            "Huge marketplace of community and official actions",
            "Free tier includes 2,000 minutes per month for public repos",
            "Matrix builds let you test on multiple OS/runtime versions simultaneously"
        ]}},
        {"type": "example", "data": {"title": "YAML - Matrix Build for Multiple Runtimes", "content": "Test your app on multiple .NET versions.", "language": "yaml", "code": "jobs:\n  test:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        dotnet-version: ['7.x', '8.x']\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-dotnet@v4\n        with:\n          dotnet-version: ${{ matrix.dotnet-version }}\n      - run: dotnet test --no-build"}},
        {"type": "callout", "data": {"variant": "warning", "title": "Storing Secrets", "text": "Never hardcode credentials in workflow files. Use GitHub Secrets (Settings > Secrets and variables > Actions) to store the Azure publish profile, service principal credentials, or any API keys."}},
        {"type": "exercise", "data": {"title": "Exercise: Create a GitHub Actions Workflow", "description": "Deploy a web app to Azure using GitHub Actions.", "steps": [
            "Push a .NET web app to a GitHub repository",
            "Create .github/workflows/azure-deploy.yml in your repo",
            "Add the workflow from the example above",
            "Get the Azure publish profile from the Azure Portal",
            "Add it as a GitHub Secret named AZUREAPPSERVICE_PUBLISHPROFILE",
            "Push the workflow file and watch the Actions tab"
        ], "expectedOutcome": "A successful workflow run that deploys your app to Azure."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "GitHub Actions workflows are YAML files in .github/workflows/",
            "Microsoft provides official actions for Azure services",
            "Store credentials in GitHub Secrets, not in workflow files",
            "Matrix builds let you test across multiple configurations"
        ], "takeaway": "If your code is on GitHub, GitHub Actions is the most convenient way to build a CI/CD pipeline for Azure."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

print("M11 L4-7 done")

# M11 L8
write_lesson(BASE + "/" + M11 + "/github-actions-azure-authentication.json", {
    "id": "lesson-azure-github-actions-azure-authentication", "slug": "github-actions-azure-authentication", "moduleSlug": M11, "courseSlug": "azure",
    "title": "GitHub Actions - Azure Authentication",
    "description": "Authenticate GitHub Actions with Azure using service principals, OpenID Connect, and workload identity federation.",
    "order": 8, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "To deploy from GitHub Actions to Azure, you need to authenticate securely. The two most common approaches are publishing profiles (simple) and service principals with OpenID Connect (recommended for teams)."}},
        {"type": "heading", "data": {"level": 2, "text": "Authentication Methods"}},
        {"type": "comparison-cards", "data": {"title": "Authentication Options", "cards": [
            {"title": "Publish Profile", "description": "Download a publishsettings file from the Azure Portal and store it as a GitHub Secret.", "pros": ["Simple to set up", "No Azure CLI needed"], "cons": ["Long-lived credential", "Not suitable for automation at scale"]},
            {"title": "Service Principal + Secret", "description": "Create an Azure service principal with az ad sp create-for-rbac and store the secret as a GitHub Secret.", "pros": ["Fine-grained RBAC", "Works across all Azure services"], "cons": ["Secret can expire and needs rotation"]},
            {"title": "OpenID Connect (OIDC)", "description": "Use federated credentials to authenticate without secrets. GitHub exchanges a short-lived OIDC token for an Azure access token.", "pros": ["No long-lived secrets", "More secure", "Auto-rotating tokens"], "cons": ["Requires Azure AD configuration"]}
        ]}},
        {"type": "example", "data": {"title": "Azure CLI - Create a Service Principal", "content": "Create a service principal for GitHub Actions with Contributor role.", "language": "azurecli", "code": "az ad sp create-for-rbac --name \"github-actions-sp\" --role Contributor --scopes /subscriptions/00000000-0000-0000-0000-000000000000 --sdk-auth\n\n# Output is a JSON object - store each value in GitHub Secrets:\n# AZURE_CLIENT_ID, AZURE_TENANT_ID, AZURE_SUBSCRIPTION_ID, AZURE_CLIENT_SECRET"}},
        {"type": "example", "data": {"title": "YAML - Authenticate with azure/login", "content": "Use the azure/login action with service principal secrets.", "language": "yaml", "code": "- name: Login to Azure\n  uses: azure/login@v2\n  with:\n    client-id: ${{ secrets.AZURE_CLIENT_ID }}\n    tenant-id: ${{ secrets.AZURE_TENANT_ID }}\n    subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}"}},
        {"type": "example", "data": {"title": "YAML - Authenticate with OpenID Connect (OIDC)", "content": "Use federated credentials for passwordless authentication.", "language": "yaml", "code": "permissions:\n  id-token: write\n  contents: read\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Login to Azure via OIDC\n        uses: azure/login@v2\n        with:\n          client-id: ${{ secrets.AZURE_CLIENT_ID }}\n          tenant-id: ${{ secrets.AZURE_TENANT_ID }}\n          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}\n          federated-credential-parameters: |\n            audience: api://AzureADTokenExchange\n            issuer: https://token.actions.githubusercontent.com/${{ github.repository_id }}\n            subject: repo:myorg/myapp:environment:production"}},
        {"type": "callout", "data": {"variant": "important", "title": "Use OIDC When Possible", "text": "OpenID Connect removes the need for long-lived secrets. Microsoft recommends OIDC for all production workflows. You configure federated credentials in the Azure AD app registration."}},
        {"type": "exercise", "data": {"title": "Exercise: Set Up OIDC Authentication", "description": "Configure GitHub Actions to authenticate to Azure without secrets.", "steps": [
            "In Azure AD, create an App Registration for GitHub Actions",
            "Add a federated credential with the audience api://AzureADTokenExchange",
            "Assign the appropriate RBAC role to the app registration",
            "Store the client ID and tenant ID in GitHub Secrets",
            "Add the azure/login@v2 step to your workflow with OIDC parameters",
            "Verify the workflow can run az account show successfully"
        ], "expectedOutcome": "A workflow that authenticates to Azure without storing a client secret."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Use publish profiles for simple personal projects",
            "Service principals with RBAC are better for team environments",
            "OpenID Connect (OIDC) is the most secure option - no long-lived secrets",
            "Always grant the minimum RBAC role needed for the deployment"
        ], "takeaway": "OIDC authentication removes the biggest security risk in CI/CD: long-lived secrets."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

# M11 L9
write_lesson(BASE + "/" + M11 + "/ci-cd-for-app-service.json", {
    "id": "lesson-azure-ci-cd-for-app-service", "slug": "ci-cd-for-app-service", "moduleSlug": M11, "courseSlug": "azure",
    "title": "CI/CD for App Service",
    "description": "Build and deploy a web application to Azure App Service using Azure Pipelines or GitHub Actions.",
    "order": 9, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Azure App Service is a fully managed platform for hosting web apps, REST APIs, and mobile backends. CI/CD pipelines can automatically deploy code to App Service whenever changes are pushed."}},
        {"type": "heading", "data": {"level": 2, "text": "Deployment Options"}},
        {"type": "bullet-list", "data": {"title": "Ways to Deploy to App Service", "items": [
            "**Azure Pipelines** - Use the AzureWebApp task in a pipeline YAML",
            "**GitHub Actions** - Use azure/webapps-deploy@v3 action",
            "**Local Git** - Push directly to an App Service Git endpoint",
            "**Zip Deploy** - Upload a ZIP package via REST API or CLI"
        ]}},
        {"type": "example", "data": {"title": "Azure CLI - Zip Deploy", "content": "Deploy a ZIP package to an App Service app using the Kudu API.", "language": "azurecli", "code": "az webapp deploy --resource-group MyResourceGroup --name MyWebApp --src-path ./app.zip --type zip\naz webapp log tail --resource-group MyResourceGroup --name MyWebApp"}},
        {"type": "example", "data": {"title": "YAML - Azure Pipelines App Service Deployment", "content": "Deploy a .NET app to App Service using Azure Pipelines.", "language": "yaml", "code": "- stage: Deploy\n  jobs:\n    - deployment: DeployWeb\n      environment: 'production'\n      pool:\n        vmImage: 'ubuntu-latest'\n      strategy:\n        runOnce:\n          deploy:\n            steps:\n              - task: AzureWebApp@1\n                inputs:\n                  azureSubscription: 'MyAzureConnection'\n                  appType: 'webAppLinux'\n                  appName: 'my-web-app'\n                  package: '$(Build.ArtifactStagingDirectory)/**/*.zip'"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Run From Package", "text": "For Linux App Service, enable WEBSITE_RUN_FROM_PACKAGE=1 to mount the ZIP directly. This gives faster cold starts and atomic deployments."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Zip Deploy", "definition": "A deployment method that uploads a ZIP file containing your app to the Kudu service."},
            {"term": "Run From Package", "definition": "A deployment mode where the app runs directly from a mounted ZIP file, improving performance and reliability."},
            {"term": "Kudu", "definition": "The deployment engine behind Azure App Service. Access it at https://<appname>.scm.azurewebsites.net."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Deploy with Zip Deploy", "description": "Use Azure CLI to deploy a web app to App Service.", "steps": [
            "Create an App Service plan and web app on Linux",
            "Publish a .NET or Node.js app to a ZIP file",
            "Deploy using az webapp deploy",
            "Verify the app is running by browsing to the URL",
            "Enable Run From Package"
        ], "expectedOutcome": "A running web app deployed via Zip Deploy with Run From Package enabled."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Azure Pipelines and GitHub Actions both support App Service deployment",
            "Zip Deploy is the simplest and fastest way to deploy a ZIP package",
            "Run From Package improves cold start time and prevents file lock issues",
            "Use deployment slots to stage changes before swapping to production"
        ], "takeaway": "App Service supports multiple deployment methods. Zip Deploy with Run From Package is the recommended approach for production."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

print("M11 L8-9 done")

# M11 L10
write_lesson(BASE + "/" + M11 + "/ci-cd-for-functions.json", {
    "id": "lesson-azure-ci-cd-for-functions", "slug": "ci-cd-for-functions", "moduleSlug": M11, "courseSlug": "azure",
    "title": "CI/CD for Azure Functions",
    "description": "Deploy Azure Functions using CI/CD pipelines with deployment slots and run-from-package.",
    "order": 10, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Azure Functions are event-driven compute units. Like App Service, they benefit from deployment slots and CI/CD automation. The key difference is that Functions use WEBSITE_RUN_FROM_PACKAGE by default for fast, atomic deployments."}},
        {"type": "heading", "data": {"level": 2, "text": "Run From Package for Functions"}},
        {"type": "paragraph", "data": {"text": "Azure Functions apps should always deploy using Run From Package (also called Run From Zip). This mounts the deployment package as a read-only file system, which prevents file lock issues during deployment and speeds up cold starts."}},
        {"type": "example", "data": {"title": "YAML - GitHub Actions for Azure Functions (Python)", "content": "Deploy a Python Azure Function app using GitHub Actions.", "language": "yaml", "code": "name: Deploy Azure Function\n\non:\n  push:\n    branches: [ main ]\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Setup Python\n        uses: actions/setup-python@v5\n        with:\n          python-version: '3.11'\n      - name: Install dependencies\n        run: |\n          python -m pip install --upgrade pip\n          pip install -r requirements.txt\n      - name: Run Azure Functions action\n        uses: Azure/functions-action@v1\n        with:\n          app-name: 'my-function-app'\n          slot-name: 'production'\n          package: '.'\n          publish-profile: ${{ secrets.AZURE_FUNCTIONAPP_PUBLISHPROFILE }}"}},
        {"type": "example", "data": {"title": "Azure CLI - Enable Run From Package for Functions", "content": "Configure a Function app to run from package.", "language": "azurecli", "code": "az functionapp config appsettings set --resource-group MyResourceGroup --name MyFunctionApp --settings WEBSITE_RUN_FROM_PACKAGE=1\naz functionapp deployment slot create --resource-group MyResourceGroup --name MyFunctionApp --slot staging\naz functionapp deployment source config-zip --resource-group MyResourceGroup --name MyFunctionApp --slot staging --src ./function-app.zip"}},
        {"type": "bullet-list", "data": {"title": "CI/CD Best Practices for Functions", "items": [
            "Always use deployment slots for non-production environments",
            "Enable WEBSITE_RUN_FROM_PACKAGE=1 for all deployments",
            "Use the official Azure/functions-action for GitHub Actions",
            "Run func azure functionapp publish locally for testing before committing"
        ]}},
        {"type": "callout", "data": {"variant": "warning", "title": "Function App Slots Limit", "text": "On the Consumption plan, Azure Functions has a limit of 1 deployment slot (plus production). Premium and Dedicated (App Service) plans support more slots. Plan your deployment strategy accordingly."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Run From Package", "definition": "A deployment mode where the function app runs directly from a mounted ZIP file, preventing file overwrites and improving cold start performance."},
            {"term": "func azure functionapp publish", "definition": "The Azure Functions Core Tool command that packages and deploys a function app to Azure."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Deploy a Function with CI/CD", "description": "Create a pipeline that deploys an Azure Function to a staging slot.", "steps": [
            "Create a new HTTP-triggered Azure Function in Python or C#",
            "Enable Run From Package in the app settings",
            "Create a GitHub repository and push your function code",
            "Add a GitHub Actions workflow using the Azure/functions-action",
            "Store the publish profile as a GitHub Secret",
            "Push to main and verify the function deploys successfully"
        ], "expectedOutcome": "A deployed Azure Function accessible via its HTTPS trigger URL."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Azure Functions should always use Run From Package for deployments",
            "Deployment slots are available on Premium and Dedicated plans",
            "The Azure/functions-action simplifies GitHub Actions deployments",
            "Test locally with func start before pushing to Azure"
        ], "takeaway": "Functions deploy best with Run From Package and CI/CD. Use staging slots to validate before swapping to production."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

# M11 L11
write_lesson(BASE + "/" + M11 + "/ci-cd-for-containers-and-acr.json", {
    "id": "lesson-azure-ci-cd-for-containers-and-acr", "slug": "ci-cd-for-containers-and-acr", "moduleSlug": M11, "courseSlug": "azure",
    "title": "CI/CD for Containers and ACR",
    "description": "Build container images, push to Azure Container Registry, and deploy to Azure Container Apps or AKS.",
    "order": 11, "difficulty": "beginner", "estimatedMinutes": 15, "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Container-based deployments require a slightly different CI/CD flow. Instead of deploying code directly, you build a container image, push it to a registry, and then update the running service to use the new image."}},
        {"type": "heading", "data": {"level": 2, "text": "The Container CI/CD Flow"}},
        {"type": "mermaid", "data": {"id": "m11-container-cicd", "caption": "Container CI/CD pipeline flow", "definition": "flowchart LR\n    C[Code Commit] --> B[Build Image]\n    B --> P[Push to ACR]\n    P --> D[Deploy to Container Apps / AKS]\n    D --> V[Verify Health]\n    V -->|Fail| R[Rollback]\n    style B fill:#e3f2fd,stroke:#333\n    style D fill:#c8e6c9,stroke:#333\n    style R fill:#ffcdd2,stroke:#333"}},
        {"type": "example", "data": {"title": "Dockerfile - .NET Web App Container", "content": "Multi-stage Dockerfile for a .NET app.", "language": "dockerfile", "code": "FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build\nWORKDIR /src\nCOPY [\"MyApp.csproj\", \"./\"]\nRUN dotnet restore\nCOPY . .\nRUN dotnet publish -c Release -o /app/publish\n\nFROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime\nWORKDIR /app\nCOPY --from=build /app/publish .\nEXPOSE 8080\nENV ASPNETCORE_URLS=http://+:8080\nENTRYPOINT [\"dotnet\", \"MyApp.dll\"]"}},
        {"type": "example", "data": {"title": "YAML - GitHub Actions: Build and Push to ACR", "content": "Build a container image and push to Azure Container Registry.", "language": "yaml", "code": "name: Build and Push to ACR\n\non:\n  push:\n    branches: [ main ]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    permissions:\n      contents: read\n      id-token: write\n    steps:\n      - uses: actions/checkout@v4\n      - name: Login to Azure\n        uses: azure/login@v2\n        with:\n          client-id: ${{ secrets.AZURE_CLIENT_ID }}\n          tenant-id: ${{ secrets.AZURE_TENANT_ID }}\n          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}\n          federated-credential-parameters: |\n            audience: api://AzureADTokenExchange\n            issuer: https://token.actions.githubusercontent.com/${{ github.repository_id }}\n            subject: repo:myorg/myapp:ref:refs/heads/main\n      - name: Login to ACR\n        uses: azure/docker-login@v2\n        with:\n          login-server: myregistry.azurecr.io\n      - name: Build and push\n        run: |\n          docker build -t myregistry.azurecr.io/myapp:${{ github.sha }} .\n          docker push myregistry.azurecr.io/myapp:${{ github.sha }}"}},
        {"type": "example", "data": {"title": "Azure CLI - Deploy Container to Container Apps", "content": "Deploy a new revision of a Container App from ACR.", "language": "azurecli", "code": "az acr login --name myregistry\ndocker build -t myregistry.azurecr.io/myapp:latest .\ndocker push myregistry.azurecr.io/myapp:latest\naz containerapp update --name my-container-app --resource-group MyResourceGroup --image myregistry.azurecr.io/myapp:latest\n\n# Or create from scratch\naz containerapp create --name my-container-app --resource-group MyResourceGroup --image myregistry.azurecr.io/myapp:latest --environment my-env --ingress external --target-port 8080 --cpu 0.5 --memory 1.0Gi"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Use Git Tags for Versions", "text": "Tag your container images with the Git commit SHA (github.sha) so you can always trace a deployed image back to the exact code version. Use semantic version tags for release branches."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Azure Container Registry (ACR)", "definition": "A managed Docker registry service for storing and managing container images. Supports geo-replication, content trust, and Helm charts."},
            {"term": "Container Revision", "definition": "A specific version of a Container App container image and configuration. Container Apps support multiple revisions for safe rollouts."},
            {"term": "Docker Login Action", "definition": "The azure/docker-login GitHub Action that authenticates Docker to an Azure Container Registry using a managed identity."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Build and Deploy a Container", "description": "Create a CI/CD pipeline for a containerized app.", "steps": [
            "Create a simple web app with a Dockerfile",
            "Create an Azure Container Registry",
            "Add a GitHub Actions workflow that builds and pushes the image",
            "Create an Azure Container App environment",
            "Deploy the Container App using the image from ACR",
            "Browse to the Container App URL and confirm it works"
        ], "expectedOutcome": "A containerized web app deployed to Azure Container Apps, built and pushed via CI/CD."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Container CI/CD builds an image, pushes to a registry, then deploys",
            "Use ACR as your private container registry in Azure",
            "Tag images with the Git SHA for traceability",
            "Azure Container Apps and AKS both support rolling updates from new images"
        ], "takeaway": "Container deployments require a registry (ACR) and a runtime (Container Apps or AKS). Automate the full image build-and-deploy cycle."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

print("M11 L10-11 done")

# M11 L12
write_lesson(BASE + "/" + M11 + "/deployment-secrets-and-environment-configuration.json", {
    "id": "lesson-azure-deployment-secrets-and-environment-configuration", "slug": "deployment-secrets-and-environment-configuration", "moduleSlug": M11, "courseSlug": "azure",
    "title": "Deployment Secrets and Environment Configuration",
    "description": "Manage secrets, connection strings, and environment-specific settings across deployment stages.",
    "order": 12, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Every application needs different settings for development, staging, and production - database connection strings, API keys, feature flags. Managing these across environments requires a secure, repeatable process."}},
        {"type": "heading", "data": {"level": 2, "text": "Where to Store Secrets"}},
        {"type": "bullet-list", "data": {"title": "Azure Secret Storage Options", "items": [
            "**Azure Key Vault** - Centralized secrets, keys, and certificates. Access via managed identity.",
            "**App Service Application Settings** - Environment variables stored with the app (good for non-sensitive config).",
            "**Azure App Configuration** - Feature flags and key-value pairs shared across multiple apps.",
            "**Slot Settings** - App Service settings marked as slot setting stay with the environment during swap."
        ]}},
        {"type": "example", "data": {"title": "Azure CLI - Add Key Vault Reference to App Service", "content": "Reference a secret from Key Vault as an app setting.", "language": "azurecli", "code": "az keyvault set-policy --name MyKeyVault --secret-permissions get --spn $(az webapp show --resource-group MyResourceGroup --name MyWebApp --query identity.principalId -o tsv)\naz webapp config appsettings set --resource-group MyResourceGroup --name MyWebApp --settings DatabaseConnection=@Microsoft.KeyVault(SecretUri=https://mykeyvault.vault.azure.net/secrets/MyDbConnection/)"}},
        {"type": "example", "data": {"title": "JSON - App Configuration Key-Value", "content": "Store feature flags and settings in Azure App Configuration.", "language": "json", "code": "{\n  \"FeatureManagement\": {\n    \"EnableNewCheckout\": true,\n    \"MaxCartItems\": \"50\"\n  },\n  \"ConnectionStrings\": {\n    \"DefaultConnection\": \"@Microsoft.KeyVault(SecretUri=https://mykeyvault.vault.azure.net/secrets/DbConnection/)\"\n  }\n}"}},
        {"type": "callout", "data": {"variant": "warning", "title": "Never Commit Secrets", "text": "Never store secrets in code, .env files in Git, or pipeline YAML files. Use Azure Key Vault or GitHub Secrets, and inject them at deploy time."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Managed Identity", "definition": "An identity assigned to an Azure resource (like App Service) that lets it authenticate to other Azure services without storing credentials."},
            {"term": "Key Vault Reference", "definition": "An App Service app setting that dynamically fetches its value from Azure Key Vault at runtime using the syntax @Microsoft.KeyVault(SecretUri=...)."},
            {"term": "App Configuration", "definition": "An Azure service for centralizing application settings and feature flags, with support for dynamic refresh."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Move Secrets to Key Vault", "description": "Replace hardcoded connection strings with Key Vault references.", "steps": [
            "Create an Azure Key Vault in your resource group",
            "Add a secret named DbConnection with your connection string",
            "Enable managed identity on your App Service",
            "Grant the App Service access to read secrets from Key Vault",
            "Replace the app setting value with a Key Vault reference",
            "Verify the app still works after the change"
        ], "expectedOutcome": "An app that reads its database connection string from Key Vault, not from a hardcoded setting."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Store secrets in Azure Key Vault, not in code or app settings",
            "Use managed identities to avoid storing credentials",
            "Key Vault references in app settings pull secrets at runtime",
            "Azure App Configuration is ideal for feature flags and shared settings"
        ], "takeaway": "The best secret is the one you never have to write down. Use managed identities and Key Vault references."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

# M11 L13
write_lesson(BASE + "/" + M11 + "/release-validation-and-rollback.json", {
    "id": "lesson-azure-release-validation-and-rollback", "slug": "release-validation-and-rollback", "moduleSlug": M11, "courseSlug": "azure",
    "title": "Release Validation and Rollback",
    "description": "Validate deployments with health checks and automated tests, and roll back failed releases safely.",
    "order": 13, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Even with the best deployment strategy, things can go wrong. Release validation and rollback procedures ensure that bad deployments don't stay broken for long."}},
        {"type": "heading", "data": {"level": 2, "text": "Release Validation"}},
        {"type": "paragraph", "data": {"text": "Validation happens at multiple levels: the pipeline runs unit and integration tests, the deployment slot is smoke-tested, and health probes confirm the app is responding. If any check fails, the pipeline stops."}},
        {"type": "example", "data": {"title": "YAML - Health Check After Deployment", "content": "Run a health check against the staging slot after deployment.", "language": "yaml", "code": "- stage: Validate\n  dependsOn: Deploy_Staging\n  jobs:\n    - job: HealthCheck\n      steps:\n        - task: Bash@3\n          inputs:\n            targetType: 'inline'\n            script: |\n              STAGING_URL=\"https://myapp-staging.azurewebsites.net/health\"\n              STATUS=$(curl -s -o /dev/null -w \"%{http_code}\" $STAGING_URL)\n              if [ \"$STATUS\" != \"200\" ]; then\n                echo \"Health check failed with status: $STATUS\"\n                exit 1\n              fi\n              echo \"Health check passed: $STATUS\""}},
        {"type": "heading", "data": {"level": 3, "text": "Rollback Strategies"}},
        {"type": "bullet-list", "data": {"title": "How to Roll Back", "items": [
            "**Deployment Slot Swap** - Swap the staging slot (which has the old version) back into production.",
            "**Previous Image Redeploy** - In ACR, redeploy the last known good container image tag.",
            "**Git Revert + Redeploy** - Revert the bad commit with git revert and push to trigger a new deployment."
        ]}},
        {"type": "example", "data": {"title": "Azure CLI - Swap Back to Previous Version", "content": "If staging has the last good version, swap it back to production.", "language": "azurecli", "code": "az webapp deployment slot swap --resource-group MyResourceGroup --name MyWebApp --slot staging --target-slot production --action swap\naz webapp deploy --resource-group MyResourceGroup --name MyWebApp --src-path ./last-known-good.zip --type zip"}},
        {"type": "table", "data": {"headers": ["Scenario", "Action", "Time to Recover"], "rows": [
            ["Bad code deployed to staging", "Fix code, redeploy to staging", "5-15 minutes"],
            ["Bad swap to production", "Swap staging back to production", "< 1 minute"],
            ["Bad container image in ACR", "Redeploy previous image tag", "2-5 minutes"],
            ["Database migration broke things", "Restore from backup + rollback code", "15-60 minutes"]
        ]}},
        {"type": "callout", "data": {"variant": "important", "title": "Always Keep the Previous Version Available", "text": "Whether you use deployment slots, ACR tags, or a deployment history archive, always keep the previous good version accessible. Rollback time should be measured in minutes, not hours."}},
        {"type": "exercise", "data": {"title": "Exercise: Simulate and Recover from a Bad Deploy", "description": "Practice rolling back a failed deployment.", "steps": [
            "Deploy a working version of your app to staging",
            "Swap staging to production",
            "Deploy a broken version to staging",
            "Attempt to swap staging to production",
            "Detect the failure and swap back to the last good version",
            "Document the rollback steps for your team"
        ], "expectedOutcome": "A tested rollback procedure that recovers from a bad deployment in under 2 minutes."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Always validate after deployment with health checks and smoke tests",
            "Deployment slots enable near-instant rollback by swapping back",
            "Keep previous images tagged in ACR for quick redeployment",
            "Document your rollback procedure and practice it regularly"
        ], "takeaway": "A deployment is not complete until you have verified it works AND know how to undo it."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

print("M11 L12-13 done")

# M12 L1
write_lesson(BASE + "/" + M12 + "/infrastructure-as-code-concepts.json", {
    "id": "lesson-azure-infrastructure-as-code-concepts", "slug": "infrastructure-as-code-concepts", "moduleSlug": M12, "courseSlug": "azure",
    "title": "Infrastructure as Code Concepts",
    "description": "Understand the principles of Infrastructure as Code and why it matters for Azure deployments.",
    "order": 1, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "bicep", "iac", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Infrastructure as Code (IaC) means defining your cloud resources in code files instead of manually creating them through the Azure Portal. The code can be versioned, reviewed, tested, and deployed automatically."}},
        {"type": "heading", "data": {"level": 2, "text": "Why Infrastructure as Code"}},
        {"type": "bullet-list", "data": {"title": "Benefits of IaC", "items": [
            "**Repeatability** - The same template creates identical environments every time",
            "**Version control** - Track changes to your infrastructure in Git",
            "**Automation** - Deploy infrastructure as part of your CI/CD pipeline",
            "**Collaboration** - Team members can review infrastructure changes in pull requests",
            "**Documentation** - The code itself describes what your infrastructure looks like"
        ]}},
        {"type": "example", "data": {"title": "Comparison: Manual vs IaC", "content": "How the same task looks with manual clicks versus a Bicep template.", "language": "bicep", "code": "// Bicep: Create a storage account in 15 lines\nparam location string = resourceGroup().location\nparam storageAccountName string\n\nresource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {\n  name: storageAccountName\n  location: location\n  sku: {\n    name: 'Standard_LRS'\n  }\n  kind: 'StorageV2'\n  properties: {\n    accessTier: 'Hot'\n  }\n}\n\n// vs Manual: Click through the Portal, fill 8 forms, hope settings match."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Infrastructure as Code (IaC)", "definition": "The practice of managing and provisioning cloud infrastructure through code files rather than manual processes."},
            {"term": "Declarative", "definition": "A style where you describe the desired end state, and the tool figures out how to achieve it. Bicep and ARM templates are declarative."},
            {"term": "Imperative", "definition": "A style where you write step-by-step commands to reach a desired state. PowerShell and Azure CLI scripts are imperative."},
            {"term": "Drift", "definition": "When the actual state of deployed resources differs from what the IaC template describes. IaC helps detect and prevent drift."}
        ]}},
        {"type": "mermaid", "data": {"id": "m12-iac-flow", "caption": "IaC workflow from code to Azure", "definition": "flowchart LR\n    C[IaC Code in Git] --> V[Validate]\n    V --> P[Plan]\n    P --> A[Approval Gate]\n    A --> D[Deploy to Azure]\n    D --> M[Monitor and Detect Drift]\n    style C fill:#e3f2fd,stroke:#333\n    style D fill:#c8e6c9,stroke:#333\n    style M fill:#fff9c4,stroke:#333"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Start Small", "text": "You don't need to IaC everything at once. Start with one resource type (like storage accounts) and expand as you get comfortable."}},
        {"type": "exercise", "data": {"title": "Exercise: Identify IaC Candidates", "description": "Review your current Azure resources and identify which ones should be managed with IaC.", "steps": [
            "List all resource groups in your subscription",
            "Identify resources that were created manually in the Portal",
            "Pick one resource type to convert first",
            "Write down what settings you would need in a template",
            "Estimate how much time you would save with automation"
        ], "expectedOutcome": "A prioritized list of resources to manage with IaC, starting with the easiest to convert."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "IaC treats infrastructure like software - it is versioned, tested, and deployed",
            "Declarative templates (Bicep) describe what you want, not how to build it",
            "IaC prevents configuration drift and enables team collaboration",
            "Start small and expand your IaC coverage over time"
        ], "takeaway": "If it is important, it belongs in code. Infrastructure is no exception."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

# M12 L2
write_lesson(BASE + "/" + M12 + "/bicep-overview.json", {
    "id": "lesson-azure-bicep-overview", "slug": "bicep-overview", "moduleSlug": M12, "courseSlug": "azure",
    "title": "Bicep Overview",
    "description": "Learn what Bicep is, how it relates to ARM templates, and how to get started writing Bicep files.",
    "order": 2, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "bicep", "iac", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Bicep is a domain-specific language (DSL) for deploying Azure resources. It is a transparent abstraction over Azure Resource Manager (ARM) templates, which are JSON files. Bicep is easier to read and write than raw ARM JSON, while producing the same ARM templates under the hood."}},
        {"type": "heading", "data": {"level": 2, "text": "Why Bicep Instead of ARM JSON"}},
        {"type": "comparison-cards", "data": {"title": "Bicep vs ARM JSON", "cards": [
            {"title": "ARM JSON", "description": "The native Azure deployment format.", "pros": ["No build step needed", "Full ARM API coverage"], "cons": ["Very verbose", "Hard to read and maintain", "No intellisense or type safety"]},
            {"title": "Bicep", "description": "A cleaner language that compiles to ARM JSON.", "pros": ["Much simpler syntax", "Intellisense in VS Code", "Type-safe with modules", "Same ARM capabilities"], "cons": ["Requires build/compile step", "Slight learning curve"]}
        ]}},
        {"type": "paragraph", "data": {"text": "Bicep files use the .bicep extension. The Bicep CLI compiles them into ARM JSON templates, which Azure Resource Manager then uses to deploy resources."}},
        {"type": "example", "data": {"title": "Bicep - Minimal Resource Group", "content": "The simplest Bicep file that creates a resource group.", "language": "bicep", "code": "targetScope = 'resourceGroup'\n\nresource rg 'Microsoft.Resources/resourceGroups@2024-03-01' = {\n  name: 'my-app-rg'\n  location: 'eastus'\n  tags: {\n    environment: 'dev'\n    project: 'myapp'\n  }\n}\n\noutput resourceGroupName string = rg.name"}},
        {"type": "heading", "data": {"level": 2, "text": "Getting Started with Bicep"}},
        {"type": "bullet-list", "data": {"title": "Setup Steps", "items": [
            "**Install the Bicep CLI**: az bicep install (part of Azure CLI 2.49.0+)",
            "**Install VS Code extension**: Search for Bicep in the Extensions marketplace",
            "**Create a file**: Name it main.bicep and start coding",
            "**Build**: az bicep build --file main.bicep produces main.json",
            "**Deploy**: az deployment group create --resource-group <rg> --template-file main.json"
        ]}},
        {"type": "callout", "data": {"variant": "tip", "title": "VS Code is Your Best Friend", "text": "The Bicep VS Code extension provides autocomplete, inline documentation, error checking, and a visualizer. Install it before writing your first template."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "targetScope", "definition": "The level at which the deployment runs: resourceGroup, subscription, managementGroup, or tenant."},
            {"term": "Resource Symbol", "definition": "A Bicep identifier (like rg or storageAccount) that represents a resource in your template."},
            {"term": "Compile", "definition": "The process of converting a .bicep file into a .json ARM template using the Bicep CLI."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Write Your First Bicep File", "description": "Create a Bicep file that deploys a resource group and outputs its name.", "steps": [
            "Install the Bicep CLI and VS Code extension",
            "Create main.bicep with targetScope = 'resourceGroup'",
            "Add a resource block for a resource group",
            "Add an output block",
            "Run az bicep build --file main.bicep and inspect the output JSON",
            "Deploy with az deployment group create"
        ], "expectedOutcome": "A successfully compiled Bicep template and a deployed resource group."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Bicep is a simpler language that compiles to ARM JSON",
            "targetScope defines the deployment level",
            "The Bicep VS Code extension provides intellisense and validation",
            "Bicep is now the recommended IaC language for Azure"
        ], "takeaway": "Bicep makes Azure IaC accessible to everyone. Start with a simple file and build up."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

# M12 L3
write_lesson(BASE + "/" + M12 + "/bicep-resources-and-properties.json", {
    "id": "lesson-azure-bicep-resources-and-properties", "slug": "bicep-resources-and-properties", "moduleSlug": M12, "courseSlug": "azure",
    "title": "Bicep Resources and Properties",
    "description": "Learn how to declare Azure resources in Bicep, set required properties, and use the correct API versions.",
    "order": 3, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "bicep", "iac", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "A Bicep resource block declares an Azure resource and its properties. Every resource needs a name, location, and API version. Some resources also require specific properties like sku or kind."}},
        {"type": "heading", "data": {"level": 2, "text": "Resource Block Anatomy"}},
        {"type": "bullet-list", "data": {"title": "Parts of a Resource Block", "items": [
            "**Symbol** - The Bicep identifier (e.g., storageAccount)",
            "**Type** - The Azure resource type with API version (e.g., 'Microsoft.Storage/storageAccounts@2023-05-01')",
            "**Name** - The resource name (can be dynamic with uniqueString())",
            "**Location** - The Azure region (often resourceGroup().location)",
            "**Properties** - Resource-specific configuration (e.g., sku, kind, accessTier)",
            "**Tags** - Key-value pairs for organizing resources"
        ]}},
        {"type": "example", "data": {"title": "Bicep - Storage Account Resource", "content": "Declare a storage account with all required properties.", "language": "bicep", "code": "param storageAccountName string\nparam location string = resourceGroup().location\n\nresource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {\n  name: storageAccountName\n  location: location\n  sku: {\n    name: 'Standard_LRS'\n  }\n  kind: 'StorageV2'\n  properties: {\n    accessTier: 'Hot'\n    minimumTlsVersion: 'TLS1_2'\n    allowBlobPublicAccess: false\n  }\n  tags: {\n    environment: 'production'\n  }\n}\n\noutput storageAccountId string = storageAccount.id\noutput primaryBlobEndpoint string = storageAccount.properties.primaryEndpoints.blob"}},
        {"type": "callout", "data": {"variant": "warning", "title": "API Versions Matter", "text": "Always use the latest stable API version for each resource type. Check the latest version in the Azure REST API specs or use the VS Code extension to autocomplete it."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "API Version", "definition": "The version of the Azure Resource Provider API used by the resource type (e.g., @2023-05-01). Using the latest stable version ensures access to the newest features."},
            {"term": "sku", "definition": "Stock Keeping Unit - defines the pricing tier and performance level of a resource (e.g., Standard_LRS, Premium_ZRS)."},
            {"term": "kind", "definition": "Defines the sub-type of a resource. For storage accounts, kind can be StorageV2, BlobStorage, FileStorage, etc."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Declare a Key Vault", "description": "Write a Bicep resource block for an Azure Key Vault.", "steps": [
            "Look up the resource type for Key Vault in the Bicep docs or VS Code",
            "Create a Bicep file with a Key Vault resource block",
            "Set tenantId to subscription().tenantId",
            "Set sku.name to standard",
            "Add an output for the Key Vault URI",
            "Build and validate the template"
        ], "expectedOutcome": "A Bicep file with a valid Key Vault resource that compiles without errors."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Every resource block needs a type with an API version, name, and location",
            "Use the latest stable API versions for new features",
            "Output resource IDs and endpoints for use by other resources",
            "Tags help organize resources across cost centers and environments"
        ], "takeaway": "Resource blocks are the building blocks of Bicep. Master the syntax, and you can declare any Azure resource."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

print("M12 L1-3 done")

# M12 L4
write_lesson(BASE + "/" + M12 + "/bicep-parameters-variables-and-outputs.json", {
    "id": "lesson-azure-bicep-parameters-variables-and-outputs", "slug": "bicep-parameters-variables-and-outputs", "moduleSlug": M12, "courseSlug": "azure",
    "title": "Bicep Parameters, Variables, and Outputs",
    "description": "Use parameters to make templates reusable, variables for computed values, and outputs to pass values between deployments.",
    "order": 4, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "bicep", "iac", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Parameters, variables, and outputs make Bicep templates reusable and composable. Parameters let you inject values at deployment time. Variables compute values within the template. Outputs pass values back to the caller or to linked deployments."}},
        {"type": "heading", "data": {"level": 2, "text": "Parameters"}},
        {"type": "paragraph", "data": {"text": "Parameters are inputs to your Bicep file. They let you reuse the same template for different environments without changing the code. Each parameter can have a type, default value, and allowed values."}},
        {"type": "example", "data": {"title": "Bicep - Parameters with Constraints", "content": "Define parameters with types, defaults, and allowed values.", "language": "bicep", "code": "@allowed(['dev', 'staging', 'production'])\nparam environment string = 'dev'\n\nparam instanceCount int {\n  minValue: 1\n  maxValue: 10\n} = 2\n\nparam tags object = {\n  project: 'myapp'\n  deployedBy: 'bicep'\n}\n\n@secure()\nparam adminPassword string"}},
        {"type": "heading", "data": {"level": 3, "text": "Variables"}},
        {"type": "paragraph", "data": {"text": "Variables compute values inside the template. Use them for resource names, concatenated strings, or any expression that depends on parameters."}},
        {"type": "example", "data": {"title": "Bicep - Variables for Resource Naming", "content": "Use variables to generate unique resource names.", "language": "bicep", "code": "var storageAccountName = 'st${uniqueString(resourceGroup().id)}'\nvar appServicePlanName = 'plan-${environment}'\n\nresource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {\n  name: storageAccountName\n  location: resourceGroup().location\n  sku: { name: 'Standard_LRS' }\n  kind: 'StorageV2'\n}\n\nresource appServicePlan 'Microsoft.Web/serverfarms@2023-12-01' = {\n  name: appServicePlanName\n  location: resourceGroup().location\n  sku: {\n    name: 'S1'\n    capacity: 1\n  }\n  kind: 'app'\n}"}},
        {"type": "heading", "data": {"level": 3, "text": "Outputs"}},
        {"type": "paragraph", "data": {"text": "Outputs return values from a Bicep deployment. You can use outputs to pass resource IDs, connection strings, or URLs to other templates in a chain or to the caller."}},
        {"type": "example", "data": {"title": "Bicep - Outputs for Cross-Template Use", "content": "Export key values for use by other deployments.", "language": "bicep", "code": "output storageAccountId string = storageAccount.id\noutput storageAccountName string = storageAccount.name\noutput primaryBlobEndpoint string = storageAccount.properties.primaryEndpoints.blob\noutput appServicePlanId string = appServicePlan.id"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Use Parameters for Environment Differences", "text": "A single Bicep template with parameters can deploy dev, staging, and production environments. Use parameter files (.bicepparam) to store environment-specific values."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "@secure()", "definition": "A Bicep decorator that marks a parameter as secure. Its value is never stored in deployment history or logs."},
            {"term": "uniqueString()", "definition": "A Bicep function that generates a deterministic, unique string from input values. Useful for creating globally unique resource names."},
            {"term": ".bicepparam", "definition": "A Bicep parameter file that provides values for a Bicep template. You can have one per environment (dev.bicepparam, prod.bicepparam)."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Parameterize a Template", "description": "Convert a hardcoded Bicep template into a reusable, parameterized one.", "steps": [
            "Take a Bicep template that creates a storage account",
            "Add a param for the storage account name prefix",
            "Use uniqueString() to make the name unique within the subscription",
            "Add a parameter for the environment and use it in tags",
            "Add outputs for the storage account ID and primary endpoint",
            "Test with different parameter values"
        ], "expectedOutcome": "A parameterized Bicep template that can be reused across environments."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Parameters make templates reusable across environments",
            "Use @secure() for sensitive values like passwords",
            "Variables compute derived values inside the template",
            "Outputs pass values to other templates or deployment callers"
        ], "takeaway": "Good parameter design is the key to reusable infrastructure code."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

# M12 L5
write_lesson(BASE + "/" + M12 + "/bicep-modules-and-reusable-infrastructure.json", {
    "id": "lesson-azure-bicep-modules-and-reusable-infrastructure", "slug": "bicep-modules-and-reusable-infrastructure", "moduleSlug": M12, "courseSlug": "azure",
    "title": "Bicep Modules and Reusable Infrastructure",
    "description": "Create Bicep modules to share infrastructure patterns across templates and teams.",
    "order": 5, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "bicep", "iac", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Bicep modules are separate .bicep files that you can reference from a main template. They let you break large deployments into smaller, reusable pieces. A module can represent a single resource or a complete solution pattern (like a web app with its App Service plan and storage)."}},
        {"type": "heading", "data": {"level": 2, "text": "Creating and Using Modules"}},
        {"type": "paragraph", "data": {"text": "A module is just another Bicep file. You reference it from your main template using the module keyword. The module can have its own parameters and outputs."}},
        {"type": "example", "data": {"title": "Bicep - Module File (storage.bicep)", "content": "A reusable storage account module.", "language": "bicep", "code": "// storage.bicep - a reusable module\nparam storageAccountName string\nparam location string = resourceGroup().location\nparam skuName string = 'Standard_LRS'\n\nresource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {\n  name: storageAccountName\n  location: location\n  sku: {\n    name: skuName\n  }\n  kind: 'StorageV2'\n  properties: {\n    accessTier: 'Hot'\n  }\n}\n\noutput storageAccountId string = storageAccount.id\noutput primaryBlobEndpoint string = storageAccount.properties.primaryEndpoints.blob"}},
        {"type": "example", "data": {"title": "Bicep - Using the Module in main.bicep", "content": "Reference the storage module from your main template.", "language": "bicep", "code": "// main.bicep\nparam location string = resourceGroup().location\n\nmodule devStorage './storage.bicep' = {\n  name: 'devStorageDeployment'\n  params: {\n    storageAccountName: 'stdev${uniqueString(resourceGroup().id)}'\n    location: location\n    skuName: 'Standard_LRS'\n  }\n}\n\nmodule prodStorage './storage.bicep' = {\n  name: 'prodStorageDeployment'\n  params: {\n    storageAccountName: 'stprod${uniqueString(resourceGroup().id)}'\n    location: location\n    skuName: 'Premium_LRS'\n  }\n}\n\noutput devStorageId string = devStorage.outputs.storageAccountId\noutput prodStorageId string = prodStorage.outputs.storageAccountId"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Module Design Tips", "text": "Keep modules focused on a single responsibility. A storage module should only create storage accounts. A web-app module can create an App Service plan, web app, and associated resources together. Avoid modules that try to do everything."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Bicep Module", "definition": "A separate .bicep file that is referenced and deployed from another Bicep file. Modules enable reusability and separation of concerns."},
            {"term": "Module Scope", "definition": "The target scope of a module (resourceGroup, subscription, etc.). A module can target a different scope than the parent template."},
            {"term": "Module Outputs", "definition": "Values returned by a module that the parent template can use. Access them via moduleSymbol.outputs.outputName."}
        ]}},
        {"type": "bullet-list", "data": {"title": "When to Use Modules", "items": [
            "You deploy the same resource pattern in multiple templates",
            "You want to share infrastructure patterns across teams",
            "You need to target a different scope (e.g., create a resource group from a subscription-scoped template)",
            "You want to break a large template into manageable pieces"
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Create a Reusable App Service Module", "description": "Create a Bicep module that deploys an App Service plan and web app.", "steps": [
            "Create a new file called appService.bicep",
            "Add parameters for app name, location, sku, and runtime stack",
            "Add a resource block for the App Service plan (serverfarm)",
            "Add a resource block for the web app (sites)",
            "Add outputs for the web app URL and ID",
            "Reference the module from main.bicep with different parameters"
        ], "expectedOutcome": "A reusable appService.bicep module deployed from main.bicep."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Modules are .bicep files referenced from a main template",
            "Modules have their own parameters and outputs",
            "Modules can target different scopes than the parent template",
            "Keep modules focused and composable"
        ], "takeaway": "Modules are the key to scalable Bicep code. Build a library of reusable modules for your team."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

# M12 L6
write_lesson(BASE + "/" + M12 + "/bicep-dependencies-and-resource-references.json", {
    "id": "lesson-azure-bicep-dependencies-and-resource-references", "slug": "bicep-dependencies-and-resource-references", "moduleSlug": M12, "courseSlug": "azure",
    "title": "Bicep Dependencies and Resource References",
    "description": "Use the dependsOn property and resource references to control deployment order and access resource properties.",
    "order": 6, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "bicep", "iac", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "In Azure, some resources must exist before others can be created. For example, a Key Vault must exist before you can create a secret in it. Bicep handles most dependencies automatically, but you can explicitly declare them when needed."}},
        {"type": "heading", "data": {"level": 2, "text": "Implicit vs Explicit Dependencies"}},
        {"type": "paragraph", "data": {"text": "Bicep automatically detects implicit dependencies when one resource references a property of another resource. For example, if a Key Vault access policy references a storage account ID, Bicep knows to deploy the storage account first."}},
        {"type": "example", "data": {"title": "Bicep - Implicit Dependency via Resource Reference", "content": "Bicep automatically infers the dependency order from resource references.", "language": "bicep", "code": "resource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {\n  name: 'mystorage${uniqueString(resourceGroup().id)}'\n  location: resourceGroup().location\n  sku: { name: 'Standard_LRS' }\n  kind: 'StorageV2'\n}\n\n// The storageAccount.id reference creates an implicit dependency\n// Bicep will deploy storageAccount before keyVault\nresource keyVault 'Microsoft.KeyVault/vaults@2023-07-01' = {\n  name: 'my-keyvault-${uniqueString(resourceGroup().id)}'\n  location: resourceGroup().location\n  properties: {\n    tenantId: subscription().tenantId\n    sku: {\n      name: 'standard'\n      family: 'A'\n    }\n  }\n}\n\n// keyVault depends on storageAccount because we reference storageAccount.id\nresource keyVaultAccessPolicy 'Microsoft.KeyVault/vaults/accessPolicies@2023-07-01' = {\n  name: '${keyVault.name}/add'\n  properties: {\n    accessPolicies: [\n      {\n        tenantId: subscription().tenantId\n        objectId: '00000000-0000-0000-0000-000000000000'\n        permissions: {\n          secrets: ['get', 'list']\n        }\n      }\n    ]\n  }\n  dependsOn: [\n    keyVault\n  ]\n}"}},
        {"type": "heading", "data": {"level": 3, "text": "Explicit Dependencies"}},
        {"type": "paragraph", "data": {"text": "Use the dependsOn property when Bicep cannot automatically infer the dependency. This is common when two resources need to exist before a third resource can reference both."}},
        {"type": "example", "data": {"title": "Bicep - Explicit dependsOn", "content": "Declare explicit dependencies between resources.", "language": "bicep", "code": "resource appServicePlan 'Microsoft.Web/serverfarms@2023-12-01' = {\n  name: 'my-plan'\n  location: resourceGroup().location\n  sku: {\n    name: 'S1'\n    capacity: 1\n  }\n  kind: 'app'\n}\n\nresource webApp 'Microsoft.Web/sites@2023-12-01' = {\n  name: 'my-web-app'\n  location: resourceGroup().location\n  properties: {\n    serverFarmId: appServicePlan.id\n  }\n  dependsOn: [\n    appServicePlan\n  ]\n}"}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Implicit Dependency", "definition": "A dependency that Bicep automatically detects when a resource property references another resource symbol."},
            {"term": "Explicit Dependency", "definition": "A dependency declared with the dependsOn property. Use it when Bicep cannot infer the dependency automatically."},
            {"term": "Resource Reference", "definition": "Accessing a property of a deployed resource using the dot notation (e.g., storageAccount.id, keyVault.properties.vaultUri)."}
        ]}},
        {"type": "callout", "data": {"variant": "info", "title": "Prefer Implicit Dependencies", "text": "Always prefer implicit dependencies (resource references) over explicit dependsOn. Implicit dependencies are easier to maintain and automatically update when you rename resources."}},
        {"type": "exercise", "data": {"title": "Exercise: Deploy Dependent Resources", "description": "Create a Bicep template that deploys a storage account and a web app that references it.", "steps": [
            "Create a storage account resource",
            "Create a web app resource",
            "Reference the storage account in the web app's app settings using storageAccount.properties.primaryEndpoints.blob",
            "Verify Bicep deploys the storage account first (implicit dependency)",
            "Add an explicit dependsOn for a secondary resource if needed"
        ], "expectedOutcome": "A Bicep template where resources deploy in the correct order without explicit dependsOn everywhere."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Bicep automatically infers dependencies from resource references",
            "Use dependsOn only when Bicep cannot automatically detect the dependency",
            "Resource references use dot notation (resourceSymbol.property)",
            "Implicit dependencies are easier to maintain than explicit ones"
        ], "takeaway": "Let Bicep manage deployment order through resource references. Use dependsOn sparingly."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

print("M12 L4-6 done")

# M12 L7
write_lesson(BASE + "/" + M12 + "/bicep-deployment-and-validation.json", {
    "id": "lesson-azure-bicep-deployment-and-validation", "slug": "bicep-deployment-and-validation", "moduleSlug": M12, "courseSlug": "azure",
    "title": "Bicep Deployment and Validation",
    "description": "Validate Bicep templates before deploying and use deployment modes to manage existing resources.",
    "order": 7, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "bicep", "iac", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Before deploying a Bicep template, you should validate it to catch errors early. Azure Resource Manager provides what-if analysis to preview changes, and the Bicep CLI can catch syntax errors before deployment."}},
        {"type": "heading", "data": {"level": 2, "text": "Validation Steps"}},
        {"type": "bullet-list", "data": {"title": "Pre-Deployment Validation", "items": [
            "**Bicep build** - Run az bicep build to catch syntax errors",
            "**Bicep lint** - Run az bicep lint to check for best practice violations",
            "**What-if analysis** - Run az deployment group what-if to preview changes without deploying",
            "**Test deployment** - Deploy to a test resource group first"
        ]}},
        {"type": "example", "data": {"title": "Azure CLI - Validate and Preview Deployment", "content": "Build, lint, and preview a Bicep deployment.", "language": "azurecli", "code": "# Step 1: Build to check syntax\naz bicep build --file main.bicep\n\n# Step 2: Lint for best practices\naz bicep lint --file main.bicep\n\n# Step 3: What-if analysis (preview changes without deploying)\naz deployment group what-if \\\n  --resource-group MyResourceGroup \\\n  --template-file main.json\n\n# Step 4: Actual deployment\naz deployment group create \\\n  --resource-group MyResourceGroup \\\n  --template-file main.json \\\n  --parameters storageAccountName=mystorage123"}},
        {"type": "heading", "data": {"level": 3, "text": "Deployment Modes"}},
        {"type": "paragraph", "data": {"text": "Azure Resource Manager supports two deployment modes: Incremental (adds or updates resources, ignores deletions) and Complete (adds, updates, AND deletes resources not in the template)."}},
        {"type": "table", "data": {"headers": ["Mode", "Creates", "Updates", "Deletes"], "rows": [
            ["Incremental (default)", "Yes", "Yes", "No - ignores resources not in template"],
            ["Complete", "Yes", "Yes", "Yes - deletes resources not in template"]
        ]}},
        {"type": "callout", "data": {"variant": "warning", "title": "Be Careful with Complete Mode", "text": "Complete mode deletes any resource in the resource group that is NOT in your template. Always use what-if analysis before running a complete deployment, and deploy to a dedicated resource group."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "What-If Analysis", "definition": "A preview of the changes a deployment would make, without actually deploying. Shows Create, Update, Delete, and NoChange for each resource."},
            {"term": "Incremental Mode", "definition": "The default deployment mode. Adds new resources and updates existing ones, but does not delete resources that are not in the template."},
            {"term": "Complete Mode", "definition": "A deployment mode that deletes resources in the resource group that are not in the template. Use with caution."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Validate a Bicep Template", "description": "Run the full validation workflow before deploying.", "steps": [
            "Write a Bicep template with at least 3 resources",
            "Run az bicep build --file main.bicep",
            "Run az bicep lint --file main.bicep",
            "Run az deployment group what-if with the compiled JSON",
            "Review the what-if output for any unexpected changes",
            "Deploy to a test resource group"
        ], "expectedOutcome": "A validated and successfully deployed Bicep template."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Always build and lint before deploying",
            "What-if analysis shows exactly what will change before you commit",
            "Use Incremental mode for most deployments",
            "Use Complete mode only when you want the template to be the source of truth for all resources"
        ], "takeaway": "Validate before you deploy. What-if analysis is your safety net against accidental changes."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

# M12 L8
write_lesson(BASE + "/" + M12 + "/bicep-with-managed-identities-and-rbac.json", {
    "id": "lesson-azure-bicep-with-managed-identities-and-rbac", "slug": "bicep-with-managed-identities-and-rbac", "moduleSlug": M12, "courseSlug": "azure",
    "title": "Bicep with Managed Identities and RBAC",
    "description": "Assign managed identities and RBAC roles to Azure resources using Bicep.",
    "order": 8, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "bicep", "iac", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Most Azure services support managed identities, which let the resource authenticate to other services without storing credentials. Bicep makes it easy to enable managed identities and assign RBAC roles at deployment time."}},
        {"type": "heading", "data": {"level": 2, "text": "Managed Identities"}},
        {"type": "paragraph", "data": {"text": "There are two types of managed identities: System-assigned (tied to a single resource, deleted when the resource is deleted) and User-assigned (standalone, can be assigned to multiple resources)."}},
        {"type": "example", "data": {"title": "Bicep - System-Assigned Managed Identity on App Service", "content": "Enable a system-assigned managed identity on an App Service.", "language": "bicep", "code": "resource webApp 'Microsoft.Web/sites@2023-12-01' = {\n  name: 'my-web-app'\n  location: resourceGroup().location\n  identity: {\n    type: 'SystemAssigned'\n  }\n  properties: {\n    serverFarmId: appServicePlan.id\n  }\n}\n\n// Access the managed identity's principal ID\noutput webAppPrincipalId string = webApp.identity.principalId"}},
        {"type": "example", "data": {"title": "Bicep - Assign RBAC Role to Managed Identity", "content": "Grant the Storage Blob Data Contributor role to the App Service managed identity.", "language": "bicep", "code": "param storageAccountId string\nparam webAppPrincipalId string\n\nresource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {\n  name: 'mystorage${uniqueString(resourceGroup().id)}'\n  location: resourceGroup().location\n  sku: { name: 'Standard_LRS' }\n  kind: 'StorageV2'\n}\n\nresource blobRoleAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {\n  name: '${storageAccount.name}-blob-access'\n  scope: storageAccount\n  properties: {\n    roleDefinitionId: '${subscription().subscriptionId}/providers/Microsoft.Authorization/roleDefinitions/ba92f5b4-2d11-453d-a403-e96b0029c9fe'\n    principalId: webAppPrincipalId\n    principalType: 'ServicePrincipal'\n  }\n}\n\noutput storageAccountId string = storageAccount.id"}},
        {"type": "callout", "data": {"variant": "important", "title": "Role Definition IDs", "text": "RBAC role definitions have fixed GUIDs. Use az role definition list to find the ID for any built-in role. For example, Storage Blob Data Contributor is ba92f5b4-2d11-453d-a403-e96b0029c9fe."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Managed Identity", "definition": "An identity managed by Azure AD that is assigned to an Azure resource. No credentials to manage or rotate."},
            {"term": "System-Assigned Identity", "definition": "A managed identity tied to a single Azure resource. It is created and deleted with the resource."},
            {"term": "RBAC Role Assignment", "definition": "An assignment of a role (like Contributor or Storage Blob Data Contributor) to a principal (user, group, or managed identity) at a specific scope."}
        ]}},
        {"type": "bullet-list", "data": {"title": "Common RBAC Roles for Developers", "items": [
            "**Storage Blob Data Contributor** - Read/write blobs and containers",
            "**Azure Key Vault Secrets User** - Read secrets from Key Vault",
            " **Contributor** - Full management of resources (use sparingly)",
            "**Azure App Service Contributor** - Manage App Service apps"
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Assign a Managed Identity Role", "description": "Enable a managed identity and grant it access to Key Vault.", "steps": [
            "Create a web app with a system-assigned managed identity",
            "Create a Key Vault",
            "Create a role assignment that gives the web app access to secrets in the Key Vault",
            "Deploy the template and verify the role assignment exists",
            "From the web app, access the Key Vault secret using the managed identity"
        ], "expectedOutcome": "A web app with a managed identity that can read secrets from Key Vault without storing any credentials."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Managed identities eliminate the need to store credentials in code",
            "System-assigned identities are tied to one resource; user-assigned can be shared",
            "Use Microsoft.Authorization/roleAssignments in Bicep to grant RBAC permissions",
            "Always use the minimum required role for security"
        ], "takeaway": "Managed identities are the foundation of secure Azure architecture. Use them everywhere."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

# M12 L9
write_lesson(BASE + "/" + M12 + "/bicep-with-app-service-functions-and-storage.json", {
    "id": "lesson-azure-bicep-with-app-service-functions-and-storage", "slug": "bicep-with-app-service-functions-and-storage", "moduleSlug": M12, "courseSlug": "azure",
    "title": "Bicep with App Service, Functions, and Storage",
    "description": "Deploy App Service, Azure Functions, and Storage accounts together in a single Bicep template.",
    "order": 9, "difficulty": "beginner", "estimatedMinutes": 12, "tags": ["azure", "bicep", "iac", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "A common pattern is deploying an App Service (or Functions app) together with the supporting resources it needs: an App Service plan, a storage account, and optionally a Key Vault for secrets."}},
        {"type": "heading", "data": {"level": 2, "text": "Deploying a Complete Web App Stack"}},
        {"type": "paragraph", "data": {"text": "In this lesson, we will create a Bicep template that deploys a complete web application stack: a resource group, App Service plan, web app, storage account, and Key Vault."}},
        {"type": "example", "data": {"title": "Bicep - Complete Web App Stack", "content": "Deploy a resource group, App Service plan, web app, and storage account.", "language": "bicep", "code": "targetScope = 'resourceGroup'\n\nparam location string = resourceGroup().location\nparam appName string\nparam environment string = 'dev'\n\n// App Service Plan\nresource appServicePlan 'Microsoft.Web/serverfarms@2023-12-01' = {\n  name: '${appName}-plan'\n  location: location\n  sku: {\n    name: environment == 'production' ? 'P1v3' : 'S1'\n    capacity: environment == 'production' ? 3 : 1\n  }\n  kind: 'app'\n  properties: {\n    reserved: false\n  }\n}\n\n// Web App\nresource webApp 'Microsoft.Web/sites@2023-12-01' = {\n  name: appName\n  location: location\n  properties: {\n    serverFarmId: appServicePlan.id\n    httpsOnly: true\n    siteConfig: {\n      netFrameworkVersion: 'v8.0'\n      minTlsVersion: '1.2'\n    }\n  }\n  tags: {\n    environment: environment\n  }\n}\n\n// Storage Account for Functions / Blobs\nresource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {\n  name: 'st${uniqueString(resourceGroup().id)}'\n  location: location\n  sku: { name: 'Standard_LRS' }\n  kind: 'StorageV2'\n  properties: {\n    accessTier: 'Hot'\n    minimumTlsVersion: 'TLS1_2'\n  }\n}\n\noutput webAppUrl string = webApp.properties.defaultHostName\noutput storageAccountId string = storageAccount.id"}},
        {"type": "example", "data": {"title": "Bicep - Azure Functions with Consumption Plan", "content": "Deploy a Function app on the Consumption plan.", "language": "bicep", "code": "resource functionApp 'Microsoft.Web/sites@2023-12-01' = {\n  name: '${appName}-func'\n  location: location\n  kind: 'functionapp'\n  identity: {\n    type: 'SystemAssigned'\n  }\n  properties: {\n    serverFarmId: consumptionPlan.id\n    httpsOnly: true\n    storageAccountName: storageAccount.name\n    storageAccountKey: storageAccount.listKeys().keys[0].value\n  }\n}\n\nresource consumptionPlan 'Microsoft.Web/serverfarms@2023-12-01' = {\n  name: '${appName}-func-plan'\n  location: location\n  sku: {\n    name: 'Y1'\n    tier: 'Dynamic'\n  }\n  kind: 'functionapp'\n}"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Deploy as a Unit", "text": "Keep related resources in the same template. A web app, its plan, and its storage account are usually deployed together and should not be split across templates."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "listKeys()", "definition": "A Bicep function that returns the access keys for a storage account. Use it to pass the storage key to the Function app."},
            {"term": "Consumption Plan", "definition": "A serverless hosting plan for Azure Functions where you pay only for execution time. SKU name is Y1."},
            {"term": "App Service Plan", "definition": "A set of compute resources (VMs) that host one or more App Service apps. SKU determines the size and features."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Deploy a Web App Stack", "description": "Deploy a complete web application infrastructure with Bicep.", "steps": [
            "Create a Bicep template with targetScope = 'resourceGroup'",
            "Add an App Service plan with S1 sku",
            "Add a web app linked to the plan",
            "Add a storage account for diagnostics",
            "Deploy to a test resource group",
            "Browse to the web app URL"
        ], "expectedOutcome": "A deployed web application stack with App Service plan, web app, and storage account."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Group related resources in the same Bicep template",
            "Use listKeys() to get storage account keys for Function apps",
            "targetScope = 'resourceGroup' is the most common scope for application infrastructure",
            "Output the web app URL for easy access after deployment"
        ], "takeaway": "A single Bicep template can deploy an entire application stack. Keep it organized by grouping related resources."}}
    ],
    "relatedLessons": [], "furtherReading": []
})

print("M12 L7-9 done")

# M12 L10
write_lesson(BASE + "/" + M12 + "/bicep-with-networking-and-private-endpoints.json", {
    "id": "lesson-azure-bicep-with-networking-and-private-endpoints",
    "slug": "bicep-with-networking-and-private-endpoints",
    "moduleSlug": M12,
    "courseSlug": "azure",
    "title": "Bicep with Networking and Private Endpoints",
    "description": "Deploy virtual networks, subnets, and private endpoints for secure Azure resource connectivity.",
    "order": 10,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "bicep", "iac", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Private endpoints let you connect to Azure services over a private IP address in your virtual network, eliminating exposure to the public internet. Bicep makes it straightforward to deploy VNets, subnets, and private endpoints together."}},
        {"type": "heading", "data": {"level": 2, "text": "Private Endpoint Architecture"}},
        {"type": "mermaid", "data": {"id": "m12-pe", "caption": "Private endpoint connecting VNet to Azure Storage", "definition": "flowchart LR\n    subgraph VNet[Virtual Network]\n        direction TB\n        SN[Subnet 10.0.1.0/24]\n        PE[Private Endpoint]\n    end\n    subgraph Azure[Azure Public]\n        ST[Storage Account]\n    end\n    PE -- Private Link --> ST\n    APP[App in VNet] --> PE\n    style VNet fill:#e3f2fd,stroke:#333\n    style Azure fill:#fff9c4,stroke:#333\n    style PE fill:#c8e6c9,stroke:#333"}},
        {"type": "example", "data": {"title": "Bicep - VNet, Subnet, and Private Endpoint for Storage", "content": "Deploy a VNet with a private endpoint to a storage account.", "language": "bicep", "code": "param location string = resourceGroup().location\nparam storageAccountId string\n\nresource vnet 'Microsoft.Network/virtualNetworks@2023-11-01' = {\n  name: 'my-vnet'\n  location: location\n  properties: {\n    addressSpace: {\n      addressPrefixes: ['10.0.0.0/16']\n    }\n  }\n}\n\nresource subnet 'Microsoft.Network/virtualNetworks/subnets@2023-11-01' = {\n  name: '${vnet.name}/private-endpoints-subnet'\n  properties: {\n    addressPrefix: '10.0.1.0/24'\n    privateEndpointNetworkPolicies: 'Disabled'\n  }\n  dependsOn: [vnet]\n}\n\nresource privateEndpoint 'Microsoft.Network/privateEndpoints@2023-11-01' = {\n  name: '${storageAccountId}-pe'\n  location: location\n  properties: {\n    subnet: { id: subnet.id }\n    privateLinkServiceConnections: [\n      {\n        name: 'storage-connection'\n        privateLinkServiceId: storageAccountId\n        groupIds: ['blob']\n      }\n    ]\n  }\n  dependsOn: [subnet]\n}"}},
        {"type": "callout", "data": {"variant": "important", "title": "Private Endpoint DNS", "text": "Private endpoints require DNS zone groups or custom DNS to resolve the service hostname to the private IP. Use the privateDnsZoneGroups property on the private endpoint resource to automate DNS configuration."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Private Endpoint", "definition": "A network interface that connects you privately and securely to an Azure service using a private IP address in your VNet."},
            {"term": "Private Link", "definition": "The underlying technology that powers private endpoints, providing private connectivity to Azure PaaS services."},
            {"term": "Service Endpoint", "definition": "A simpler alternative to private endpoints that routes traffic over the Azure backbone but uses a public IP."}
        ]}},
        {"type": "bullet-list", "data": {"title": "Private Endpoint Benefits", "items": [
            "Traffic stays on the Azure private network (no public internet exposure)",
            "Data exfiltration is blocked by default",
            "You can use network security groups to control access",
            "Compliance requirements (PCI, HIPAA) are easier to meet"
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Deploy a Private Endpoint", "description": "Create a Bicep template with a VNet and private endpoint for a storage account.", "steps": [
            "Create a resource group and storage account",
            "Write a Bicep template that creates a VNet and subnet",
            "Add a private endpoint pointing to the storage account",
            "Deploy the template",
            "Verify the private endpoint has a private IP in your VNet"
        ], "expectedOutcome": "A storage account accessible only through a private IP in your VNet."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Private endpoints give services a private IP in your VNet",
            "Use privateDnsZoneGroups to automate DNS resolution",
            "Disable public network access for the most secure configuration",
            "Bicep can deploy the entire private endpoint setup in one template"
        ], "takeaway": "Private endpoints are essential for zero-trust networking in Azure. Always use them for production workloads."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

print("M12 L10 done")

# M12 L11
write_lesson(BASE + "/" + M12 + "/bicep-with-databases-and-messaging.json", {
    "id": "lesson-azure-bicep-with-databases-and-messaging",
    "slug": "bicep-with-databases-and-messaging",
    "moduleSlug": M12,
    "courseSlug": "azure",
    "title": "Bicep with Databases and Messaging",
    "description": "Deploy Azure SQL Database, Cosmos DB, Service Bus, and Event Grid using Bicep.",
    "order": 11,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "bicep", "iac", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Data and messaging services are core parts of most applications. Bicep can deploy Azure SQL, Cosmos DB, Service Bus queues and topics, and Event Grid topics alongside your application infrastructure."}},
        {"type": "heading", "data": {"level": 2, "text": "Deploying Data Services"}},
        {"type": "example", "data": {"title": "Bicep - Azure SQL Database and Server", "content": "Deploy an Azure SQL server and database with firewall rules.", "language": "bicep", "code": "param sqlServerName string\nparam sqlAdminLogin string\nparam sqlAdminPassword string\nparam location string = resourceGroup().location\n\nresource sqlServer 'Microsoft.Sql/servers@2021-11-01' = {\n  name: sqlServerName\n  location: location\n  properties: {\n    administratorLogin: sqlAdminLogin\n    administratorLoginPassword: sqlAdminPassword\n    minimalTlsVersion: '1.2'\n    publicNetworkAccess: 'Enabled'\n  }\n}\n\nresource sqlDatabase 'Microsoft.Sql/servers/databases@2021-11-01' = {\n  name: '${sqlServer.name}/myapp-db'\n  location: location\n  sku: {\n    name: 'S0'\n    tier: 'Standard'\n  }\n  dependsOn: [sqlServer]\n}\n\nresource firewallRule 'Microsoft.Sql/servers/firewallRules@2021-11-01' = {\n  name: '${sqlServer.name}/AllowAzureServices'\n  properties: {\n    startIpAddress: '0.0.0.0'\n    endIpAddress: '0.0.0.0'\n  }\n  dependsOn: [sqlServer]\n}"}},
        {"type": "example", "data": {"title": "Bicep - Service Bus Namespace and Queue", "content": "Deploy a Service Bus namespace with a queue.", "language": "bicep", "code": "resource serviceBus 'Microsoft.ServiceBus/namespaces@2023-01-01-preview' = {\n  name: 'myapp-sb-${uniqueString(resourceGroup().id)}'\n  location: resourceGroup().location\n  sku: {\n    name: 'Standard'\n    tier: 'Standard'\n    capacity: 1\n  }\n}\n\nresource serviceBusQueue 'Microsoft.ServiceBus/namespaces/queues@2023-01-01-preview' = {\n  name: '${serviceBus.name}/orders-queue'\n  properties: {\n    maxSizeInMegabytes: 1024\n    lockDuration: 'PT30S'\n    maxDeliveryCount: 10\n  }\n  dependsOn: [serviceBus]\n}"}},
        {"type": "callout", "data": {"variant": "warning", "title": "SQL Admin Password", "text": "Never hardcode the SQL admin password in a Bicep template. Use a secure parameter or retrieve it from Key Vault using the reference() function."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Azure SQL Database", "definition": "A fully managed relational database service. Deploy it as a server plus database pair in Bicep."},
            {"term": "Cosmos DB", "definition": "A globally distributed, multi-model database service. Supports SQL, MongoDB, Cassandra, Gremlin, and Table APIs."},
            {"term": "Service Bus Queue", "definition": "A messaging primitive that stores messages until a consumer receives them. Supports at-least-once delivery and dead-letter queues."},
            {"term": "Event Grid Topic", "definition": "An event routing service that delivers events from publishers to subscribers using a pub/sub model."}
        ]}},
        {"type": "bullet-list", "data": {"title": "Common Data and Messaging Services in Bicep", "items": [
            "Microsoft.Sql/servers and Microsoft.Sql/servers/databases for Azure SQL",
            "Microsoft.DocumentDB/databaseAccounts for Cosmos DB",
            "Microsoft.ServiceBus/namespaces for Service Bus",
            "Microsoft.EventGrid/topics for Event Grid"
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Deploy a Database and Queue", "description": "Create a Bicep template with an Azure SQL database and a Service Bus queue.", "steps": [
            "Create a Bicep template with a SQL server parameter",
            "Add a SQL database resource",
            "Add a firewall rule to allow Azure services",
            "Add a Service Bus namespace and queue",
            "Output the SQL server name and Service Bus connection string",
            "Deploy and verify both resources exist"
        ], "expectedOutcome": "A deployed Azure SQL database and Service Bus queue with connection details in the deployment outputs."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Azure SQL requires a server resource before creating databases",
            "Service Bus uses namespace plus queue/topic resources",
            "Use firewall rules to control SQL access",
            "Output connection strings for use by application deployments"
        ], "takeaway": "Data and messaging services are first-class citizens in Bicep. Deploy them alongside your application infrastructure."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

# M12 L12
write_lesson(BASE + "/" + M12 + "/infrastructure-automation-with-ci-cd.json", {
    "id": "lesson-azure-infrastructure-automation-with-ci-cd",
    "slug": "infrastructure-automation-with-ci-cd",
    "moduleSlug": M12,
    "courseSlug": "azure",
    "title": "Infrastructure Automation with CI/CD",
    "description": "Integrate Bicep deployments into your CI/CD pipeline with Azure Pipelines or GitHub Actions.",
    "order": 12,
    "difficulty": "beginner",
    "estimatedMinutes": 15,
    "tags": ["azure", "bicep", "iac", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Infrastructure as Code is only valuable when it is automated. CI/CD pipelines can build, validate, and deploy Bicep templates every time the infrastructure code changes, ensuring that production always matches the code in your repository."}},
        {"type": "heading", "data": {"level": 2, "text": "CI/CD Pipeline for Infrastructure"}},
        {"type": "mermaid", "data": {"id": "m12-iac-cicd", "caption": "Infrastructure CI/CD pipeline", "definition": "flowchart LR\n    C[Infra Code Changed] --> B[Build and Lint Bicep]\n    B -->|Pass| W[What-If Analysis]\n    W -->|No Surprises| A[Approval Gate]\n    A --> D[Deploy to Environment]\n    W -->|Unexpected Changes| N[Notify Team]\n    style B fill:#e3f2fd,stroke:#333\n    style D fill:#c8e6c9,stroke:#333\n    style N fill:#ffcdd2,stroke:#333"}},
        {"type": "example", "data": {"title": "YAML - GitHub Actions for Bicep Deployment", "content": "Build, validate, and deploy a Bicep template using GitHub Actions.", "language": "yaml", "code": "name: Deploy Infrastructure\n\non:\n  push:\n    branches: [ main ]\n    paths:\n      - 'infra/**'\n  pull_request:\n    branches: [ main ]\n    paths:\n      - 'infra/**'\n\npermissions:\n  id-token: write\n  contents: read\n\njobs:\n  validate:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: azure/login@v2\n        with:\n          client-id: ${{ secrets.AZURE_CLIENT_ID }}\n          tenant-id: ${{ secrets.AZURE_TENANT_ID }}\n          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}\n          federated-credential-parameters: |\n            audience: api://AzureADTokenExchange\n            issuer: https://token.actions.githubusercontent.com/${{ github.repository_id }}\n            subject: repo:myorg/myapp:ref:refs/heads/main\n      - uses: azure/CLI@v1\n        with:\n          inlineScript: |\n            az bicep build --file infra/main.bicep\n            az bicep lint --file infra/main.bicep\n            az deployment group what-if \\\n              --resource-group MyResourceGroup \\\n              --template-file infra/main.json"}},
        {"type": "example", "data": {"title": "YAML - Azure Pipelines for Bicep Deployment", "content": "Deploy Bicep infrastructure using Azure Pipelines.", "language": "yaml", "code": "trigger:\n  paths:\n    include:\n      - infra/**\n\npool:\n  vmImage: 'ubuntu-latest'\n\nvariables:\n  azureSubscription: 'MyAzureSubscription'\n  resourceGroup: 'MyResourceGroup'\n\nsteps:\n  - task: AzureCLI@2\n    inputs:\n      azureSubscription: $(azureSubscription)\n      scriptType: 'bash'\n      scriptLocation: 'inlineScript'\n      inlineScript: |\n        az bicep build --file infra/main.bicep\n        az deployment group what-if \\\n          --resource-group $(resourceGroup) \\\n          --template-file infra/main.json\n        az deployment group create \\\n          --resource-group $(resourceGroup) \\\n          --template-file infra/main.json"}},
        {"type": "bullet-list", "data": {"title": "Infrastructure CI/CD Best Practices", "items": [
            "Run Bicep lint in every pull request to catch issues before merge",
            "Use what-if analysis in PR checks to detect unexpected changes",
            "Deploy to dev/staging first, then production with approval gates",
            "Tag releases so you can trace which code version is deployed"
        ]}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Drift Detection", "definition": "Comparing the actual Azure resources against what the IaC template describes. What-if analysis is a form of drift detection."},
            {"term": "Plan Phase", "definition": "The step in a pipeline that previews what will change before actually deploying. Use what-if to preview changes."},
            {"term": "Infrastructure Pipeline", "definition": "A CI/CD pipeline specifically for deploying infrastructure code (Bicep, Terraform, etc.) rather than application code."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Automate Infrastructure Deployment", "description": "Create a GitHub Actions workflow for your Bicep infrastructure.", "steps": [
            "Organize your Bicep files in an infra/ folder",
            "Create a GitHub Actions workflow that runs on infra/ changes",
            "Add a build step that runs az bicep build",
            "Add a what-if step that deploys to a test resource group",
            "Add a deploy step for production with environment protection rules",
            "Make a change to main.bicep and verify the pipeline runs"
        ], "expectedOutcome": "A GitHub Actions workflow that automatically builds, validates, and deploys your Bicep infrastructure."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Infrastructure pipelines should validate (lint, what-if) before deploying",
            "Use path filters to trigger infrastructure pipelines only when IaC files change",
            "Deploy to non-production environments first for validation",
            "Tag infrastructure deployments for auditability"
        ], "takeaway": "Treat infrastructure code the same as application code: test it, review it, and deploy it automatically."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

print("M12 L11-12 done")

# M13 L1
write_lesson(BASE + "/" + M13 + "/azure-ai-services-overview.json", {
    "id": "lesson-azure-azure-ai-services-overview",
    "slug": "azure-ai-services-overview",
    "moduleSlug": M13,
    "courseSlug": "azure",
    "title": "Azure AI Services Overview",
    "description": "Explore the range of Azure AI services available to developers, from language understanding to vision and speech.",
    "order": 1,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "ai", "openai", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Azure AI Services is a collection of cloud-based AI capabilities that developers can add to their applications with a few lines of code. These services cover natural language processing, computer vision, speech, decision support, and generative AI."}},
        {"type": "heading", "data": {"level": 2, "text": "Azure AI Services Portfolio"}},
        {"type": "table", "data": {"headers": ["Service", "Category", "Common Use"], "rows": [
            ["Azure OpenAI Service", "Generative AI", "Chat, completions, embeddings, code generation"],
            ["Azure AI Language", "Natural Language", "Text analysis, sentiment, entity recognition, translation"],
            ["Azure AI Vision", "Computer Vision", "Image analysis, OCR, object detection"],
            ["Azure AI Speech", "Speech", "Speech-to-text, text-to-speech, translation, speaker ID"],
            ["Azure AI Search", "Search", "Full-text search, vector search, RAG over your data"],
            ["Azure AI Document Intelligence", "Document Processing", "Extract text and structure from PDFs and forms"],
            ["Azure AI Content Safety", "Safety", "Detect harmful content in text and images"],
            ["Azure AI Foundry", "Platform", "Build, deploy, and manage AI solutions"]
        ]}},
        {"type": "paragraph", "data": {"text": "All Azure AI services share common patterns: REST APIs, SDKs in multiple languages, pay-as-you-go pricing, and enterprise-grade security with private endpoints and managed identities."}},
        {"type": "example", "data": {"title": "C# - Call Azure AI Language Sentiment API", "content": "Analyze sentiment of text using the Azure AI Language SDK.", "language": "csharp", "code": "using Azure;\nusing Azure.AI.TextAnalytics;\n\n// Create client using endpoint and key from Azure\nvar client = new TextAnalyticsClient(\n    new Uri(\"https://my-language-service.cognitiveservices.azure.com/\"),\n    new AzureKeyCredential(\"my-api-key\")\n);\n\n// Analyze sentiment of a single document\nDocumentSentiment result = await client.AnalyzeSentimentAsync(\n    \"I love using Azure AI Services! They make building intelligent apps so easy.\"\n);\n\nConsole.WriteLine(\"Sentiment: \" + result.Value.Sentiment);\nConsole.WriteLine(\"Confidence: \" + result.Value.ConfidenceScores.Positive);"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Single Resource vs Multi-Service", "text": "You can create individual resources for each AI service, or a single multi-service resource that provides access to multiple services under one key and endpoint. Use multi-service for development; use individual resources for production to control costs and access per service."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Azure AI Foundry", "definition": "A platform for building, deploying, and managing AI solutions. Formerly called Azure AI Studio."},
            {"term": "Cognitive Services", "definition": "The former name for Azure AI Services. The services are the same; the branding changed to reflect the AI focus."},
            {"term": "REST API", "definition": "Every Azure AI service exposes a REST API. SDKs (C#, Python, JavaScript, Java) wrap these APIs for easier integration."},
            {"term": "Pay-as-you-go", "definition": "Pricing model where you are charged per API call or per unit of usage (e.g., per 1,000 text records). No upfront cost."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Create an Azure AI Language Resource", "description": "Provision an Azure AI Language resource and call the sentiment API.", "steps": [
            "In the Azure Portal, create an Azure AI Language resource",
            "Copy the endpoint and API key",
            "Install the Azure.AI.TextAnalytics NuGet package",
            "Write a C# console app that calls AnalyzeSentimentAsync",
            "Run the app and confirm it returns a sentiment result",
            "Try different sentences (positive, negative, mixed) and observe the scores"
        ], "expectedOutcome": "A working C# app that calls the Azure AI Language sentiment API and prints results."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Azure AI Services cover language, vision, speech, search, and generative AI",
            "All services have REST APIs and SDKs in multiple languages",
            "Use a multi-service resource for development, individual resources for production",
            "Pricing is pay-as-you-go with no upfront commitment"
        ], "takeaway": "Azure AI Services let you add intelligence to your app without being a machine learning expert."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

print("M13 L1 done")

# M13 L2
write_lesson(BASE + "/" + M13 + "/azure-ai-foundry-and-model-based-development.json", {
    "id": "lesson-azure-azure-ai-foundry-and-model-based-development",
    "slug": "azure-ai-foundry-and-model-based-development",
    "moduleSlug": M13,
    "courseSlug": "azure",
    "title": "Azure AI Foundry and Model-Based Development",
    "description": "Use Azure AI Foundry to build, deploy, and manage AI models and agents.",
    "order": 2,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "ai", "openai", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Azure AI Foundry (formerly Azure AI Studio) is the unified platform for building AI applications on Azure. It provides tools for prompt experimentation, model fine-tuning, deploying models as endpoints, and building AI agents with the Agent Service."}},
        {"type": "heading", "data": {"level": 2, "text": "Azure AI Foundry Components"}},
        {"type": "bullet-list", "data": {"title": "Key Components", "items": [
            "**Playground** - Experiment with prompts against foundation models",
            "**Deployments** - Deploy models as real-time endpoints with managed compute",
            "**Fine-tuning** - Customize foundation models on your own data",
            "**Evaluations** - Measure model quality with built-in evaluation metrics",
            "**Agent Service** - Build autonomous agents that can use tools and retrieve data",
            "**Prompt Flow** - Visual tool for building and debugging LLM-powered workflows"
        ]}},
        {"type": "example", "data": {"title": "Azure CLI - Deploy a Model via AI Foundry", "content": "Deploy a GPT-4 model as an online endpoint using Azure ML.", "language": "azurecli", "code": "az ml model list --registry-name azureml --name GPT-4\naz ml online-endpoint create --name gpt4-endpoint\naz ml online-deployment create --name gpt4-deployment --endpoint-name gpt4-endpoint --model azureml:GPT-4:1 --instance-type Standard_DS3_v2 --instance-count 1"}},
        {"type": "callout", "data": {"variant": "info", "title": "Azure OpenAI vs AI Foundry", "text": "Azure OpenAI Service is for using OpenAI models (GPT-4, DALL-E, etc.). Azure AI Foundry is the broader platform for building with ANY model - including OpenAI, open-source models from Hugging Face, and your own fine-tuned models."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Azure AI Foundry", "definition": "Microsoft's unified platform for building, evaluating, and deploying AI solutions. It includes the web portal (formerly AI Studio), SDK, and CLI."},
            {"term": "Foundation Model", "definition": "A large pre-trained model (like GPT-4) that can be used directly or fine-tuned for specific tasks."},
            {"term": "Online Endpoint", "definition": "A real-time REST API endpoint that wraps a deployed model."},
            {"term": "Prompt Flow", "definition": "A visual, graph-based tool for building and debugging LLM-powered workflows."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Explore Azure AI Foundry", "description": "Get hands-on with the Azure AI Foundry playground.", "steps": [
            "Create an Azure AI Foundry account in the Azure Portal",
            "Navigate to the AI Foundry web portal",
            "Open the Playground and select a GPT-4 deployment",
            "Experiment with system prompts and user messages",
            "View the API request and response format",
            "Copy the REST endpoint and key for use in your application"
        ], "expectedOutcome": "A working Azure OpenAI deployment accessible via REST API from your application."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Azure AI Foundry is the unified platform for all Azure AI development",
            "Deploy models as online endpoints for real-time inference",
            "Use Prompt Flow for visual workflow building",
            "Fine-tune foundation models on your own data for better accuracy"
        ], "takeaway": "AI Foundry is your one-stop shop for building AI applications on Azure."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

# M13 L3
write_lesson(BASE + "/" + M13 + "/azure-openai-service-overview.json", {
    "id": "lesson-azure-azure-openai-service-overview",
    "slug": "azure-openai-service-overview",
    "moduleSlug": M13,
    "courseSlug": "azure",
    "title": "Azure OpenAI Service Overview",
    "description": "Learn about Azure OpenAI Service, available models, responsible AI practices, and content filtering.",
    "order": 3,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "ai", "openai", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Azure OpenAI Service brings OpenAI's powerful language models (GPT-4, GPT-4o, o1, DALL-E, Whisper, Embeddings) to the Azure cloud. It provides enterprise-grade security, compliance, and regional availability while maintaining the same API interface as OpenAI."}},
        {"type": "heading", "data": {"level": 2, "text": "Available Models"}},
        {"type": "table", "data": {"headers": ["Model Family", "Use Case", "Context Length"], "rows": [
            ["GPT-4o", "General-purpose chat and completions", "128K tokens"],
            ["GPT-4o mini", "Cost-effective chat for high-volume apps", "128K tokens"],
            ["o1", "Advanced reasoning and complex problem-solving", "200K tokens"],
            ["DALL-E 3", "Image generation from text descriptions", "N/A"],
            ["Whisper", "Speech-to-text transcription and translation", "25MB audio"],
            ["text-embedding-3-large", "High-quality embeddings for RAG", "3072 dimensions"],
            ["text-embedding-3-small", "Cost-effective embeddings", "1536 dimensions"]
        ]}},
        {"type": "example", "data": {"title": "Azure CLI - Create an Azure OpenAI Resource", "content": "Create an Azure OpenAI Service resource and deploy a model.", "language": "azurecli", "code": "az cognitiveservices account create --name my-openai-service --resource-group MyResourceGroup --kind OpenAI --sku S0 --location eastus --yes\naz cognitiveservices account list-models --name my-openai-service --resource-group MyResourceGroup --output table\naz cognitiveservices account deployment create --name my-openai-service --resource-group MyResourceGroup --deployment-name gpt4o --model-name gpt-4o --model-version 2024-08-06 --model-format OpenAI --sku-name Standard --capacity 10"}},
        {"type": "heading", "data": {"level": 2, "text": "Content Filtering and Responsible AI"}},
        {"type": "paragraph", "data": {"text": "Azure OpenAI Service includes a content filtering system that detects and blocks harmful content in both prompts and completions. You can configure the severity levels for different content categories (hate, sexual, violence, self-harm)."}},
        {"type": "callout", "data": {"variant": "important", "title": "Content Filters Are On by Default", "text": "Azure OpenAI Service enables content filtering by default. You can adjust the filter severity but cannot completely disable the hate and violence categories in production deployments. This is a key difference from using OpenAI's API directly."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Model Deployment", "definition": "A specific instance of a model (e.g., gpt-4o) that you can call via API. Each deployment has its own name, capacity, and configuration."},
            {"term": "Provisioned Throughput Units (PTU)", "definition": "A capacity model for Azure OpenAI that guarantees throughput at a fixed cost, ideal for predictable production workloads."},
            {"term": "Content Filter", "definition": "Azure OpenAI's built-in safety system that detects harmful content in prompts and responses across four categories: hate, sexual, violence, and self-harm."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Deploy GPT-4o and Test the API", "description": "Create an Azure OpenAI resource and make your first API call.", "steps": [
            "Create an Azure OpenAI resource in the Azure Portal",
            "Deploy the gpt-4o model with a deployment name like gpt4o",
            "Copy the endpoint and API key from the Keys and Endpoint blade",
            "Use curl to call the chat completions API",
            "Observe the response and note the token usage",
            "Try a prompt that would trigger the content filter and observe the result"
        ], "expectedOutcome": "A working Azure OpenAI deployment that responds to chat prompts via the API."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Azure OpenAI provides the same models as OpenAI, hosted in Azure",
            "Deploy models using the Azure Portal, CLI, or ARM/Bicep templates",
            "Content filtering is enabled by default and cannot be fully disabled",
            "Use PTUs for predictable production costs, pay-as-you-go for experimentation"
        ], "takeaway": "Azure OpenAI is the enterprise gateway to OpenAI's models. Use it when you need compliance, regional data residency, or Azure integration."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

print("M13 L2-3 done")

# M13 L4
write_lesson(BASE + "/" + M13 + "/azure-openai-chat-and-completions.json", {
    "id": "lesson-azure-azure-openai-chat-and-completions",
    "slug": "azure-openai-chat-and-completions",
    "moduleSlug": M13,
    "courseSlug": "azure",
    "title": "Azure OpenAI Chat and Completions",
    "description": "Use the Azure OpenAI Chat Completions API to build conversational AI applications with GPT-4 and GPT-4o.",
    "order": 4,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "ai", "openai", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "The Chat Completions API is the primary interface for working with GPT models. You send a list of messages (system, user, assistant) and receive a generated response. This pattern powers chatbots, code assistants, and content generation tools."}},
        {"type": "heading", "data": {"level": 2, "text": "Chat Message Roles"}},
        {"type": "bullet-list", "data": {"title": "Message Roles in Chat Completions", "items": [
            "**system** - Sets the behavior and personality of the assistant (e.g., 'You are a helpful customer support agent')",
            "**user** - The input from the end user or your application",
            "**assistant** - The model's previous responses (used to maintain conversation context)"
        ]}},
        {"type": "example", "data": {"title": "C# - Chat Completions with Azure OpenAI", "content": "Call the Azure OpenAI Chat Completions API using C#.", "language": "csharp", "code": "using Azure;\nusing Azure.AI.OpenAI;\nusing OpenAI;\n\nvar openAIClient = new OpenAIClient(\n    new Uri(\"https://my-openai.openai.azure.com/\"),\n    new AzureKeyCredential(\"my-api-key\")\n);\n\nvar chatCompletionsOptions = new ChatCompletionsOptions()\n{\n    DeploymentName = \"gpt4o\",\n    Messages =\n    {\n        new ChatMessage(ChatRole.System, \"You are a helpful assistant that answers questions about Azure.\"),\n        new ChatMessage(ChatRole.User, \"What is an App Service plan?\")\n    },\n    Temperature = 0.7f,\n    MaxTokens = 500\n};\n\nResponse<ChatCompletions> response = await openAIClient.GetChatCompletionsAsync(chatCompletionsOptions);\nChatCompletions completions = response.Value;\n\nConsole.WriteLine(completions.Choices[0].Message.Content);\nConsole.WriteLine(\"Tokens used: \" + completions.Usage.TotalTokens);"}},
        {"type": "example", "data": {"title": "JSON - Raw Chat Completions Request", "content": "The raw REST API request body for chat completions.", "language": "json", "code": "{\n  \"messages\": [\n    {\n      \"role\": \"system\",\n      \"content\": \"You are a helpful assistant.\"\n    },\n    {\n      \"role\": \"user\",\n      \"content\": \"Explain Azure App Service in one sentence.\"\n    }\n  ],\n  \"temperature\": 0.7,\n  \"max_tokens\": 100,\n  \"top_p\": 0.95\n}"}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Chat Completions API", "definition": "The Azure OpenAI endpoint for conversational AI. Accepts a list of messages and returns a generated assistant message."},
            {"term": "Deployment Name", "definition": "The name you gave to your model deployment in Azure (e.g., 'gpt4o'). This is different from the model name ('gpt-4o')."},
            {"term": "Temperature", "definition": "A parameter that controls randomness. Lower values (0.2) make output more focused and deterministic. Higher values (0.8) make it more creative."},
            {"term": "Max Tokens", "definition": "The maximum number of tokens to generate in the response. One token is roughly 4 characters in English."}
        ]}},
        {"type": "callout", "data": {"variant": "tip", "title": "Use Streaming for Better UX", "text": "For chat applications, use streaming (SendChatMessageStreamingAsync in C#) to show the response token-by-token as it is generated. This feels much faster to users than waiting for the full response."}},
        {"type": "exercise", "data": {"title": "Exercise: Build a Simple Chat App", "description": "Create a console app that calls the Azure OpenAI Chat Completions API.", "steps": [
            "Deploy a gpt-4o model in Azure OpenAI Service",
            "Create a .NET console app",
            "Install the Azure.AI.OpenAI NuGet package",
            "Write code that sends a system message and a user message",
            "Print the assistant's response to the console",
            "Experiment with temperature and max_tokens values"
        ], "expectedOutcome": "A console app that returns AI-generated responses to user questions."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Chat Completions uses a message list with system, user, and assistant roles",
            "The deployment name is how you reference a specific model deployment",
            "Temperature controls randomness; max_tokens controls response length",
            "Use streaming for better user experience in chat applications"
        ], "takeaway": "Chat Completions is the foundation of most generative AI applications. Master it, and you can build anything from chatbots to code assistants."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

print("M13 L4 done")

# M13 L5
write_lesson(BASE + "/" + M13 + "/azure-openai-embeddings-and-grounding.json", {
    "id": "lesson-azure-azure-openai-embeddings-and-grounding",
    "slug": "azure-openai-embeddings-and-grounding",
    "moduleSlug": M13,
    "courseSlug": "azure",
    "title": "Azure OpenAI Embeddings and Grounding",
    "description": "Generate text embeddings for semantic search and implement grounding to make AI responses more accurate and relevant.",
    "order": 5,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "ai", "openai", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Embeddings are vector representations of text that capture semantic meaning. Similar texts have similar embeddings. Grounding provides the model with factual, up-to-date information so it can answer questions accurately instead of relying on its training data."}},
        {"type": "heading", "data": {"level": 2, "text": "Text Embeddings"}},
        {"type": "paragraph", "data": {"text": "The text-embedding-3-large model converts text into a 3072-dimensional vector. These vectors can be stored in a vector database and searched for similarity. This is the foundation of Retrieval Augmented Generation (RAG)."}},
        {"type": "example", "data": {"title": "C# - Generate Text Embeddings", "content": "Generate embeddings for text using Azure OpenAI.", "language": "csharp", "code": "using Azure;\nusing Azure.AI.OpenAI;\n\nvar client = new OpenAIClient(\n    new Uri(\"https://my-openai.openai.azure.com/\"),\n    new AzureKeyCredential(\"my-api-key\")\n);\n\nEmbeddingsOptions options = new EmbeddingsOptions()\n{\n    DeploymentName = \"text-embedding-3-large\",\n    Input = { \"Azure App Service is a fully managed platform for hosting web apps.\" }\n};\n\nResponse<Embeddings> response = await client.GetEmbeddingsAsync(options);\nReadOnlyMemory<float> embedding = response.Value.Data[0].Embedding;\n\nConsole.WriteLine(\"Embedding dimensions: \" + embedding.Length);\nConsole.WriteLine(\"First 5 values: \" + string.Join(\", \", embedding.Span.Slice(0, 5).ToArray()));"}},
        {"type": "heading", "data": {"level": 3, "text": "Grounding with Your Data"}},
        {"type": "paragraph", "data": {"text": "Grounding gives the AI model access to your specific data. Instead of relying on its training data (which may be outdated), the model can look up facts from your knowledge base. Azure provides two main approaches: using the on-your-data feature in Azure OpenAI, or building a custom RAG solution with Azure AI Search."}},
        {"type": "mermaid", "data": {"id": "m13-rag", "caption": "Retrieval Augmented Generation (RAG) flow", "definition": "flowchart LR\n    Q[User Question] --> E[Embed Query]\n    E --> S[Search Vector DB]\n    S --> T[Top K Documents]\n    T --> P[Build Prompt with Context]\n    P --> M[Call LLM with Grounding]\n    M --> A[Grounded Answer]\n    style E fill:#e3f2fd,stroke:#333\n    style S fill:#fff9c4,stroke:#333\n    style M fill:#c8e6c9,stroke:#333\n    style A fill:#bbdefb,stroke:#333"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Why Grounding Matters", "text": "Without grounding, GPT models can hallucinate facts or give outdated information. Grounding with your own data ensures the model references your current documentation, policies, and knowledge base."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Text Embedding", "definition": "A vector of numbers that represents the semantic meaning of a piece of text. Similar texts produce similar vectors."},
            {"term": "Vector Database", "definition": "A database optimized for storing and searching high-dimensional vectors (embeddings). Azure AI Search supports vector search natively."},
            {"term": "Grounding", "definition": "Providing an AI model with external factual data so it can answer questions based on that data rather than relying on its training data."},
            {"term": "RAG (Retrieval Augmented Generation)", "definition": "An AI pattern where relevant documents are retrieved from a knowledge base and injected into the prompt before calling the language model."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Generate and Compare Embeddings", "description": "Generate embeddings for related and unrelated texts and compare their similarity.", "steps": [
            "Deploy the text-embedding-3-large model in Azure OpenAI",
            "Generate embeddings for two similar sentences (e.g., about Azure storage)",
            "Generate embeddings for two unrelated sentences",
            "Calculate the cosine similarity between the similar pair and the unrelated pair",
            "Observe that similar texts have higher similarity scores"
        ], "expectedOutcome": "A clear demonstration that embeddings capture semantic similarity between texts."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Embeddings convert text to vectors that capture semantic meaning",
            "text-embedding-3-large provides 3072-dimensional embeddings",
            "Grounding gives the model access to your specific data",
            "RAG combines embeddings, search, and LLMs for accurate answers"
        ], "takeaway": "Embeddings and grounding are the foundation of production-quality AI applications. Without them, your AI is just guessing."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

print("M13 L5 done")

# M13 L6
write_lesson(BASE + "/" + M13 + "/azure-ai-search-overview.json", {
    "id": "lesson-azure-azure-ai-search-overview",
    "slug": "azure-ai-search-overview",
    "moduleSlug": M13,
    "courseSlug": "azure",
    "title": "Azure AI Search Overview",
    "description": "Use Azure AI Search to add powerful search capabilities to your applications, including full-text and vector search.",
    "order": 6,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "ai", "openai", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Azure AI Search (formerly Azure Cognitive Search) is a cloud search service that adds full-text search, vector search, and hybrid search to your applications. It is the backbone of most RAG (Retrieval Augmented Generation) architectures on Azure."}},
        {"type": "heading", "data": {"level": 2, "text": "Key Components"}},
        {"type": "bullet-list", "data": {"title": "Azure AI Search Components", "items": [
            "**Search Service** - The top-level resource that hosts your indexes and search capabilities",
            "**Index** - Defines the schema of your searchable data (fields, types, analyzers)",
            "**Indexer** - Automatically pulls data from Azure data sources (Blob Storage, Cosmos DB, SQL) into the index",
            "**Skillset** - AI enrichments that run during indexing (OCR, entity recognition, key phrase extraction)",
            "**Data Source** - Connection to your underlying data store",
            "**Synonyms Map** - Define synonyms so users find results even when they use different terms"
        ]}},
        {"type": "example", "data": {"title": "Azure CLI - Create an Azure AI Search Service", "content": "Create a search service and prepare it for indexing.", "language": "azurecli", "code": "# Create the search service (takes a few minutes)\naz search service create \\\n  --name my-search-service \\\n  --resource-group MyResourceGroup \\\n  --location eastus \\\n  --sku standard\n\n# Get the admin API key\naz search admin-key show \\\n  --service-name my-search-service \\\n  --resource-group MyResourceGroup\n\n# Create a data source (Azure Blob Storage)\naz search datasource create \\\n  --name my-blob-datasource \\\n  --service-name my-search-service \\\n  --resource-group MyResourceGroup \\\n  --type azureblob \\\n  --connection-string \"DefaultEndpointsProtocol=https;AccountName=mystorage;AccountKey=...;EndpointSuffix=core.windows.net\" \\\n  --container-name documents"}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Search Index", "definition": "A searchable collection of documents. Each index has a schema that defines the fields (text, numeric, date, etc.) and how they are searched."},
            {"term": "Indexer", "definition": "A pipeline that extracts data from a data source, optionally enriches it with AI skills, and loads it into a search index."},
            {"term": "Skillset", "definition": "A set of AI enrichments (OCR, language detection, entity extraction) that transform raw data into searchable content during indexing."},
            {"term": "Semantic Search", "definition": "A ranking algorithm that goes beyond keyword matching to understand the semantic meaning of the query and results."}
        ]}},
        {"type": "callout", "data": {"variant": "info", "title": "When to Use Azure AI Search", "text": "Use Azure AI Search when you need to search across documents (PDFs, Word docs, HTML), e-commerce catalogs, or knowledge bases. For simple app data lookups, a database query may be sufficient."}},
        {"type": "exercise", "data": {"title": "Exercise: Create a Search Index", "description": "Set up an Azure AI Search service and index some sample data.", "steps": [
            "Create an Azure AI Search service in the Azure Portal",
            "Create a data source connected to a Blob Storage container",
            "Create an index with fields for title, content, and category",
            "Create an indexer to pull data from the blob container",
            "Run the indexer and verify documents are indexed",
            "Query the index using the Search Explorer in the Portal"
        ], "expectedOutcome": "A search index with documents that you can query using keywords and filters."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Azure AI Search provides full-text and vector search over your data",
            "Indexers automate the process of pulling data from Azure sources",
            "Skillsets add AI enrichment during indexing",
            "Semantic search improves ranking by understanding query intent"
        ], "takeaway": "Azure AI Search turns your data into a searchable knowledge base. It is the foundation of RAG architectures on Azure."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

# M13 L7
write_lesson(BASE + "/" + M13 + "/ai-search-indexes-and-vector-search.json", {
    "id": "lesson-azure-ai-search-indexes-and-vector-search",
    "slug": "ai-search-indexes-and-vector-search",
    "moduleSlug": M13,
    "courseSlug": "azure",
    "title": "AI Search Indexes and Vector Search",
    "description": "Create search indexes with vector fields and build semantic search experiences with Azure AI Search.",
    "order": 7,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "ai", "openai", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Vector search lets you find results based on semantic similarity rather than exact keyword matches. Azure AI Search supports vector fields natively, letting you store embeddings alongside traditional fields and search both with a single query."}},
        {"type": "heading", "data": {"level": 2, "text": "Creating a Search Index with Vector Fields"}},
        {"type": "paragraph", "data": {"text": "A search index schema defines each field's type. For vector search, you use the Collection(Edm.Single) type and specify the vector dimensions. Azure AI Search also supports hybrid search (combining vector and keyword search) and semantic ranking."}},
        {"type": "example", "data": {"title": "JSON - Search Index with Vector Field", "content": "Define a search index with a vector field for embeddings.", "language": "json", "code": "{\n  \"name\": \"documents-index\",\n  \"fields\": [\n    {\n      \"name\": \"id\",\n      \"type\": \"Edm.String\",\n      \"key\": true,\n      \"filterable\": true\n    },\n    {\n      \"name\": \"title\",\n      \"type\": \"Edm.String\",\n      \"searchable\": true,\n      \"analyzer\": \"en.microsoft\"\n    },\n    {\n      \"name\": \"content\",\n      \"type\": \"Edm.String\",\n      \"searchable\": true\n    },\n    {\n      \"name\": \"contentVector\",\n      \"type\": \"Collection(Edm.Single)\",\n      \"searchable\": true,\n      \"dimensions\": 1536,\n      \"vectorSearchProfile\": \"my-vector-profile\"\n    },\n    {\n      \"name\": \"category\",\n      \"type\": \"Edm.String\",\n      \"filterable\": true,\n      \"facetable\": true\n    }\n  ],\n  \"vectorSearch\": {\n    \"profiles\": [\n      {\n        \"name\": \"my-vector-profile\",\n        \"algorithm\": \"my-hnsw-algorithm\"\n      }\n    ],\n    \"algorithms\": [\n      {\n        \"name\": \"my-hnsw-algorithm\",\n        \"kind\": \"hnsw\"\n      }\n    ]\n  }\n}"}},
        {"type": "example", "data": {"title": "C# - Hybrid Search with Azure AI Search SDK", "content": "Search using both vector similarity and full-text search.", "language": "csharp", "code": "using Azure;\nusing Azure.Search.Documents;\nusing Azure.Search.Documents.Models;\n\nvar endpoint = new Uri(\"https://my-search-service.search.windows.net/\");\nvar credential = new AzureKeyCredential(\"my-admin-key\");\nvar client = new SearchClient(endpoint, \"documents-index\", credential);\n\n// Generate embedding for the query (using Azure OpenAI)\nfloat[] queryEmbedding = await GetEmbeddingAsync(\"How do I deploy to Azure?\");\n\nvar options = new SearchOptions\n{\n    VectorSearch = new VectorSearchOptions\n    {\n        Queries =\n        {\n            new RawVectorQuery\n            {\n                Vector = queryEmbedding,\n                KNearestNeighborsCount = 5,\n                Fields = { \"contentVector\" }\n            }\n        }\n    },\n    Size = 5\n};\n\nSearchResults<SearchDocument> results = await client.SearchAsync<SearchDocument>(\n    \"deployment azure tutorial\", options);\n\nawait foreach (SearchResult<SearchDocument> result in results.Value.GetResultsAsync())\n{\n    Console.WriteLine(result.Document[\"title\"] + \" (score: \" + result.Score + \")\");\n}"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Hybrid Search Is Best", "text": "Always use hybrid search (keyword plus vector) for the best results. Pure vector search can miss exact keyword matches, while pure keyword search misses semantic similarity. Azure AI Search's hybrid mode combines both."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Vector Search", "definition": "A search method that finds results by comparing the similarity of vector embeddings rather than matching keywords."},
            {"term": "Hybrid Search", "definition": "Combining keyword search and vector search in a single query for better results."},
            {"term": "HNSW", "definition": "Hierarchical Navigable Small World - an algorithm for efficient approximate nearest neighbor search in high-dimensional spaces."},
            {"term": "Semantic Ranking", "definition": "A post-processing step that re-ranks hybrid search results using a cross-encoder model for better relevance."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Set Up Vector Search", "description": "Create a search index with a vector field and perform a vector search.", "steps": [
            "Create an Azure AI Search service",
            "Deploy text-embedding-3-small in Azure OpenAI",
            "Create a search index with a Collection(Edm.Single) vector field (1536 dimensions)",
            "Upload documents with their embeddings to the index",
            "Perform a vector search query using the Search Explorer",
            "Compare results with and without the vector component"
        ], "expectedOutcome": "A search index that returns semantically similar results using vector search."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Vector fields use Collection(Edm.Single) with specified dimensions",
            "Hybrid search combines keyword and vector search for best results",
            "Use HNSW algorithm for approximate nearest neighbor search",
            "Semantic ranking improves result quality with a cross-encoder model"
        ], "takeaway": "Vector search is the missing piece for intelligent search. Combine it with keyword search for production-quality results."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

print("M13 L6-7 done")

# M13 L8
write_lesson(BASE + "/" + M13 + "/azure-ai-services-vision-language-and-speech.json", {
    "id": "lesson-azure-azure-ai-services-vision-language-and-speech",
    "slug": "azure-ai-services-vision-language-and-speech",
    "moduleSlug": M13,
    "courseSlug": "azure",
    "title": "Azure AI Services: Vision, Language, and Speech",
    "description": "Use Azure AI Vision, Language, and Speech services to analyze images, process text, and transcribe audio.",
    "order": 8,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "ai", "openai", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Azure AI Vision, Language, and Speech services provide pre-built AI capabilities that you can add to your applications without training custom models. They are ideal for common tasks like image analysis, text translation, and speech transcription."}},
        {"type": "heading", "data": {"level": 2, "text": "Azure AI Vision"}},
        {"type": "paragraph", "data": {"text": "Azure AI Vision can analyze images to extract objects, text (OCR), descriptions, tags, and adult content scores. It also provides face detection (without recognition) and thumbnail generation."}},
        {"type": "example", "data": {"title": "C# - Analyze an Image with Azure AI Vision", "content": "Analyze an image and extract tags and description.", "language": "csharp", "code": "using Azure;\nusing Azure.AI.Vision.ImageAnalysis;\n\nvar client = new ImageAnalysisClient(\n    new Uri(\"https://my-vision-service.cognitiveservices.azure.com/\"),\n    new AzureKeyCredential(\"my-api-key\")\n);\n\nUri imageUri = new Uri(\"https://example.com/photo.jpg\");\n\nImageAnalysisResult result = await client.AnalyzeAsync(\n    imageUri,\n    VisualFeatures.Tags | VisualFeatures.Caption | VisualFeatures.Objects,\n    new ImageAnalysisOptions { GenderNeutralCaption = true });\n\nConsole.WriteLine(\"Caption: \" + result.Value.Caption.Text);\nforeach (var tag in result.Value.Tags.Values)\n{\n    Console.WriteLine(\"Tag: \" + tag.Name + \" (\" + tag.Confidence + \")\");\n}"}},
        {"type": "heading", "data": {"level": 3, "text": "Azure AI Language"}},
        {"type": "paragraph", "data": {"text": "Azure AI Language provides text analysis capabilities including sentiment analysis, key phrase extraction, entity recognition, language detection, and text translation across 100+ languages."}},
        {"type": "example", "data": {"title": "C# - Translate Text with Azure AI Translation", "content": "Translate text from English to French.", "language": "csharp", "code": "using Azure;\nusing Azure.AI.Translation.Text;\n\nvar translator = new TextTranslationClient(\n    new Uri(\"https://api.cognitive.microsofttranslator.com/\"),\n    new AzureKeyCredential(\"my-api-key\")\n);\n\nResponse<IReadOnlyList<TranslatedText>> response =\n    await translator.TranslateAsync(\n        new[] { \"Hello, how are you?\" },\n        \"fr\",\n        \"en\");\n\nforeach (var translation in response.Value)\n{\n    Console.WriteLine(\"Translated: \" + translation.Text);\n}"}},
        {"type": "heading", "data": {"level": 3, "text": "Azure AI Speech"}},
        {"type": "paragraph", "data": {"text": "Azure AI Speech provides speech-to-text (transcription), text-to-speech (synthesis), speech translation, and speaker recognition. It supports real-time streaming for live transcription and batch processing for recorded audio."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "OCR", "definition": "Optical Character Recognition - the process of extracting text from images or scanned documents."},
            {"term": "Sentiment Analysis", "definition": "A Language service feature that classifies text as positive, negative, or neutral, with confidence scores."},
            {"term": "Text-to-Speech (TTS)", "definition": "Converts written text into natural-sounding speech. Azure supports multiple voices, languages, and speaking styles."},
            {"term": "Speech-to-Text (STT)", "definition": "Converts spoken audio into text. Supports real-time streaming and batch transcription."}
        ]}},
        {"type": "callout", "data": {"variant": "info", "title": "Single Multi-Service Resource", "text": "You can use a single Azure AI Services multi-service resource for Vision, Language, and Speech. This simplifies key management for development. Use individual resources in production for cost tracking and access control."}},
        {"type": "exercise", "data": {"title": "Exercise: Build a Multi-Modal AI App", "description": "Combine Vision, Language, and Speech services in one application.", "steps": [
            "Create a .NET console app",
            "Use Azure AI Vision to analyze an image and extract tags",
            "Use Azure AI Language to analyze the sentiment of a review",
            "Use Azure AI Speech to convert a text string to speech (save to audio file)",
            "Display all results in the console",
            "Deploy the app and test with different inputs"
        ], "expectedOutcome": "A console app that demonstrates image analysis, text sentiment, and text-to-speech."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Azure AI Vision analyzes images for objects, text, and descriptions",
            "Azure AI Language processes text for sentiment, entities, and translation",
            "Azure AI Speech converts between audio and text",
            "All three services can share a multi-service resource for development"
        ], "takeaway": "Vision, Language, and Speech services let you add multimodal AI to your app without training any models."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

# M13 L9
write_lesson(BASE + "/" + M13 + "/securing-ai-services-with-managed-identity.json", {
    "id": "lesson-azure-securing-ai-services-with-managed-identity",
    "slug": "securing-ai-services-with-managed-identity",
    "moduleSlug": M13,
    "courseSlug": "azure",
    "title": "Securing AI Services with Managed Identity",
    "description": "Secure access to Azure AI services using managed identities instead of API keys.",
    "order": 9,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "ai", "openai", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "API keys are the default way to authenticate to Azure AI services, but they have a major problem: if exposed, anyone can use them. Managed identities let your Azure resources (App Service, Functions, VMs) authenticate to AI services without storing any credentials."}},
        {"type": "heading", "data": {"level": 2, "text": "How Managed Identity Works for AI Services"}},
        {"type": "paragraph", "data": {"text": "When you enable a managed identity on an App Service, it gets an identity in Azure AD. You then grant this identity a role (like Cognitive Services User) on the AI service. The app can now call the AI service using the managed identity token instead of an API key."}},
        {"type": "example", "data": {"title": "Bicep - Enable Managed Identity and Grant AI Access", "content": "Enable a managed identity on a web app and grant it access to Azure OpenAI.", "language": "bicep", "code": "param location string = resourceGroup().location\nparam openAIResourceId string\n\nresource webApp 'Microsoft.Web/sites@2023-12-01' = {\n  name: 'my-web-app'\n  location: location\n  identity: {\n    type: 'SystemAssigned'\n  }\n  properties: {\n    serverFarmId: appServicePlan.id\n  }\n}\n\n// Grant the web app's managed identity access to Azure OpenAI\nresource openAIRoleAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {\n  name: '${webApp.name}-openai-access'\n  scope: openAIResourceId\n  properties: {\n    roleDefinitionId: '${subscription().subscriptionId}/providers/Microsoft.Authorization/roleDefinitions/a97a65e1-6c7d-4d2e-9d2c-6c7e3d2a1b0f'\n    principalId: webApp.identity.principalId\n    principalType: 'ServicePrincipal'\n  }\n}\n\noutput webAppPrincipalId string = webApp.identity.principalId"}},
        {"type": "example", "data": {"title": "C# - Authenticate to Azure OpenAI with Managed Identity", "content": "Use DefaultAzureCredential to authenticate without an API key.", "language": "csharp", "code": "using Azure;\nusing Azure.AI.OpenAI;\nusing Azure.Identity;\n\n// DefaultAzureCredential automatically uses managed identity in Azure\n// and falls back to local development credentials (VS, Azure CLI)\nvar credential = new DefaultAzureCredential();\n\nvar openAIClient = new OpenAIClient(\n    new Uri(\"https://my-openai.openai.azure.com/\"),\n    credential);\n\nvar chatCompletionsOptions = new ChatCompletionsOptions()\n{\n    DeploymentName = \"gpt4o\",\n    Messages =\n    {\n        new ChatMessage(ChatRole.User, \"What is Azure App Service?\")\n    }\n};\n\nChatCompletions response = await openAIClient.GetChatCompletionsAsync(chatCompletionsOptions);\nConsole.WriteLine(response.Choices[0].Message.Content);"}},
        {"type": "bullet-list", "data": {"title": "Benefits of Managed Identity for AI Services", "items": [
            "No API keys to store, rotate, or protect in code",
            "Azure AD handles authentication and authorization",
            "Access can be audited through Azure AD sign-in logs",
            "If the identity is compromised, revoke access instantly in Azure AD",
            "Works with App Service, Functions, AKS, and VMs"
        ]}},
        {"type": "callout", "data": {"variant": "important", "title": "Disable API Key Authentication", "text": "For production workloads, disable API key authentication on your AI services after enabling managed identity. In the Azure Portal, go to the Keys and Endpoint blade and select 'Disable' for local authentication."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "DefaultAzureCredential", "definition": "An Azure SDK credential class that tries multiple authentication methods in order. It uses managed identity in Azure and falls back to local credentials (Azure CLI, Visual Studio) for development."},
            {"term": "Cognitive Services User", "definition": "The RBAC role that grants read and query access to Azure AI services without exposing admin keys."},
            {"term": "Local Authentication Disabled", "definition": "A setting on Azure AI resources that blocks API key and AAD user authentication, allowing only managed identity access."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Migrate from API Key to Managed Identity", "description": "Replace API key authentication with managed identity in an existing app.", "steps": [
            "Enable a system-assigned managed identity on your App Service",
            "Create a role assignment granting Cognitive Services User role on your Azure OpenAI resource",
            "Install the Azure.Identity package",
            "Replace the API key authentication with DefaultAzureCredential",
            "Test the app locally (uses Azure CLI credentials) and deployed (uses managed identity)",
            "Disable local authentication on the Azure OpenAI resource"
        ], "expectedOutcome": "An app that authenticates to Azure AI services using managed identity, with no API keys in code."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Managed identities eliminate the need for API keys in your code",
            "DefaultAzureCredential works locally and in Azure without code changes",
            "Grant the minimum RBAC role needed for each AI service",
            "Disable local authentication for production workloads"
        ], "takeaway": "Never hardcode AI service API keys in production. Managed identity is the secure, standard way to access Azure services."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

print("M13 L8-9 done")

# M13 L10
write_lesson(BASE + "/" + M13 + "/integrating-ai-services-into-azure-applications.json", {
    "id": "lesson-azure-integrating-ai-services-into-azure-applications",
    "slug": "integrating-ai-services-into-azure-applications",
    "moduleSlug": M13,
    "courseSlug": "azure",
    "title": "Integrating AI Services into Azure Applications",
    "description": "Combine multiple Azure AI services into a complete, production-ready application with error handling and monitoring.",
    "order": 10,
    "difficulty": "beginner",
    "estimatedMinutes": 15,
    "tags": ["azure", "ai", "openai", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Building a production AI application means combining multiple services: a web app (App Service), an AI model (Azure OpenAI), a knowledge base (AI Search), and monitoring (Application Insights). This lesson ties everything together."}},
        {"type": "heading", "data": {"level": 2, "text": "Application Architecture"}},
        {"type": "mermaid", "data": {"id": "m13-arch", "caption": "Full-stack AI application architecture on Azure", "definition": "flowchart TD\n    U[User] -->|HTTPS| FE[Frontend / Web App]\n    FE -->|API Calls| API[App Service API]\n    API -->|Chat| OAI[Azure OpenAI]\n    API -->|Search| AIS[Azure AI Search]\n    API -->|Embeddings| OAI\n    AIS -->|Vector Results| API\n    API -->|Logs| AI[Application Insights]\n    API -->|Secrets| KV[Key Vault]\n    API -->|Auth| MI[Managed Identity]\n    style API fill:#e3f2fd,stroke:#333\n    style OAI fill:#c8e6c9,stroke:#333\n    style AIS fill:#fff9c4,stroke:#333\n    style KV fill:#ffcdd2,stroke:#333"}},
        {"type": "heading", "data": {"level": 2, "text": "Error Handling and Retry Logic"}},
        {"type": "paragraph", "data": {"text": "AI service APIs can fail due to rate limiting, model capacity, or transient errors. Always implement retry logic with exponential backoff and circuit breaker patterns."}},
        {"type": "example", "data": {"title": "C# - Retry Logic for Azure OpenAI", "content": "Implement retry logic when calling Azure OpenAI.", "language": "csharp", "code": "using Azure;\nusing Azure.AI.OpenAI;\nusing Azure.Identity;\nusing Polly;\nusing Polly.Retry;\n\nvar credential = new DefaultAzureCredential();\nvar client = new OpenAIClient(\n    new Uri(\"https://my-openai.openai.azure.com/\"),\n    credential);\n\n// Define retry policy: 3 retries with exponential backoff\nRetryPolicy retryPolicy = Policy\n    .Handle<RequestFailedException>(ex => ex.Status == 429 || ex.Status >= 500)\n    .WaitAndRetryAsync(3, retryAttempt =>\n        TimeSpan.FromSeconds(Math.Pow(2, retryAttempt)));\n\nvar chatOptions = new ChatCompletionsOptions\n{\n    DeploymentName = \"gpt4o\",\n    Messages = { new ChatMessage(ChatRole.User, \"Explain Azure Functions.\") }\n};\n\n// Execute with retry\nvar response = await retryPolicy.ExecuteAsync(async () =>\n{\n    var result = await client.GetChatCompletionsAsync(chatOptions);\n    return result.Value;\n});\n\nConsole.WriteLine(response.Choices[0].Message.Content);"}},
        {"type": "example", "data": {"title": "YAML - Deploy AI Application Infrastructure with Bicep", "content": "Deploy the complete AI application stack using Bicep.", "language": "bicep", "code": "targetScope = 'resourceGroup'\n\nparam location string = resourceGroup().location\nparam appName string\n\n// App Service Plan\nresource appServicePlan 'Microsoft.Web/serverfarms@2023-12-01' = {\n  name: '${appName}-plan'\n  location: location\n  sku: { name: 'S1', capacity: 1 }\n  kind: 'app'\n}\n\n// Web App with Managed Identity\nresource webApp 'Microsoft.Web/sites@2023-12-01' = {\n  name: appName\n  location: location\n  identity: { type: 'SystemAssigned' }\n  properties: { serverFarmId: appServicePlan.id }\n}\n\n// Key Vault for secrets\nresource keyVault 'Microsoft.KeyVault/vaults@2023-07-01' = {\n  name: 'kv-${uniqueString(resourceGroup().id)}'\n  location: location\n  properties: {\n    tenantId: subscription().tenantId\n    sku: { name: 'standard' }\n    enableRbacAuthorization: true\n  }\n}\n\n// Grant web app access to Key Vault secrets\nresource kvAccessPolicy 'Microsoft.Authorization/roleAssignments@2022-04-01' = {\n  name: '${webApp.name}-kv-access'\n  scope: keyVault\n  properties: {\n    roleDefinitionId: '${subscription().subscriptionId}/providers/Microsoft.Authorization/roleDefinitions/4633458b-17de-408a-b874-0445c86b69e6'\n    principalId: webApp.identity.principalId\n    principalType: 'ServicePrincipal'\n  }\n}"}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Application Insights", "definition": "Azure's Application Performance Management (APM) service. It monitors live applications, detects anomalies, and helps diagnose issues."},
            {"term": "Polly", "definition": "A .NET resilience library that implements retry, circuit breaker, timeout, and fallback policies for handling transient failures."},
            {"term": "Transient Error", "definition": "A temporary failure that is likely to succeed if retried (e.g., network blip, rate limiting, temporary service unavailability)."}
        ]}},
        {"type": "bullet-list", "data": {"title": "Production AI App Checklist", "items": [
            "Use managed identities instead of API keys",
            "Implement retry logic with exponential backoff",
            "Log all AI calls to Application Insights for debugging",
            "Set up alerts for high error rates or latency spikes",
            "Use Key Vault for any remaining secrets",
            "Implement rate limiting to control costs"
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Build a Production-Ready AI App", "description": "Deploy a complete AI application to Azure with monitoring.", "steps": [
            "Create a Bicep template for the full AI app stack",
            "Deploy the infrastructure to a resource group",
            "Deploy an ASP.NET Core web app with an AI chat endpoint",
            "Configure Application Insights monitoring",
            "Add retry logic to the AI service calls",
            "Test the deployed app and verify logs appear in Application Insights"
        ], "expectedOutcome": "A deployed web app with AI capabilities, monitoring, and production-ready error handling."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Production AI apps need the same reliability patterns as any other app",
            "Use Polly or similar libraries for retry logic",
            "Application Insights is essential for monitoring AI service calls",
            "Managed identity and Key Vault keep your app secure"
        ], "takeaway": "A great AI demo is just the beginning. Production AI applications need monitoring, retry logic, and enterprise-grade security."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

print("M13 L10 done")
print("ALL LESSONS CREATED!")
