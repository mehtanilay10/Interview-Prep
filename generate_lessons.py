#!/usr/bin/env python3
"""Generate 35 Azure lesson JSON files for modules 11, 12, 13."""
import json
import os

BASE = "/workspace/f9343184-f4eb-4a6e-8a7f-ec85c9efba8b/sessions/agent_23a36398-aba0-4fc6-b45d-778d317dd74c/content/courses/azure"

def write_lesson(path, lesson):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        json.dump(lesson, f, indent=2)
        f.write("\n")

# ─────────────────────────────────────────────────────────────
# MODULE 11 — 11-application-deployment-and-devops
# ─────────────────────────────────────────────────────────────
M11 = "11-application-deployment-and-devops"

# Lesson 1
write_lesson(f"{BASE}/{M11}/application-deployment-strategies.json", {
    "id": "lesson-azure-application-deployment-strategies",
    "slug": "application-deployment-strategies",
    "moduleSlug": M11,
    "courseSlug": "azure",
    "title": "Application Deployment Strategies",
    "description": "Understand common deployment strategies and how to choose the right approach for your Azure application.",
    "order": 1,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Deploying an application means moving code from your development environment to a place where users can access it. Azure offers several strategies that help you reduce downtime, lower risk, and recover quickly if something goes wrong."}},
        {"type": "heading", "data": {"level": 2, "text": "Why Deployment Strategy Matters"}},
        {"type": "paragraph", "data": {"text": "A good deployment strategy answers two questions: How do you minimize disruption to users? And how do you recover if the new version has a bug? Without a strategy, a bad deployment can take down your entire application for minutes or even hours."}},
        {"type": "bullet-list", "data": {"title": "Common Deployment Strategies", "items": [
            "**Basic (All-at-Once)** — Deploy to every instance simultaneously. Fast but risky; users experience downtime during the deployment.",
            "**Blue/Green** — Run two identical environments (blue = current, green = new). Switch traffic to green when ready. Instant rollback by switching back.",
            "**Canary** — Gradually route a small percentage of traffic to the new version. Monitor for errors before rolling out to everyone.",
            "**Rolling** — Replace instances one at a time or in small batches. No downtime, but the release takes longer."
        ]}},
        {"type": "example", "data": {"title": "Azure CLI — Create a Deployment Slot", "content": "Deployment slots are live apps with their own hostnames. They let you stage a deployment before swapping into production.", "language": "azurecli", "code": "az webapp deployment slot create \\\n  --resource-group MyResourceGroup \\\n  --name MyWebApp \\\n  --slot staging\n\n# Deploy to the staging slot\naz webapp deploy \\\n  --resource-group MyResourceGroup \\\n  --name MyWebApp \\\n  --slot staging \\\n  --src-path ./build-output.zip \\\n  --type zip"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Start Simple", "text": "If you are new to Azure deployments, start with deployment slots. They are the easiest way to reduce risk without changing your pipeline."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Deployment Slot", "definition": "A live application instance with its own hostname, hosted in the same App Service plan as production. You can swap slots with zero downtime."},
            {"term": "Blue/Green Deployment", "definition": "A strategy where two identical environments run simultaneously. Traffic is switched from the current (blue) environment to the new (green) one."},
            {"term": "Canary Release", "definition": "A gradual rollout where a small percentage of users see the new version first, allowing you to detect issues early."},
            {"term": "Rolling Deployment", "definition": "A strategy that replaces instances incrementally, keeping the application available throughout the update."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Choose a Deployment Strategy", "description": "Match each scenario to the best deployment strategy.", "steps": [
            "A small internal tool used by 5 people. You can tolerate a few seconds of downtime.",
            "A public e-commerce site where downtime means lost revenue.",
            "A new AI feature you want to test with 5% of users before a full rollout.",
            "A mobile app backend on App Service with hundreds of active connections."
        ], "expectedOutcome": "Answers: 1 = All-at-Once or Rolling, 2 = Blue/Green, 3 = Canary, 4 = Rolling or Blue/Green."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Deployment slots let you stage changes before swapping to production",
            "Blue/Green provides instant rollback by swapping environments",
            "Canary releases reduce risk by exposing new versions to a small audience first",
            "Rolling deployments replace instances gradually without downtime"
        ], "takeaway": "Choose the simplest strategy that meets your reliability needs. Deployment slots are the best starting point for App Service."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

# Lesson 2
write_lesson(f"{BASE}/{M11}/deployment-slots-and-slot-swapping.json", {
    "id": "lesson-azure-deployment-slots-and-slot-swapping",
    "slug": "deployment-slots-and-slot-swapping",
    "moduleSlug": M11,
    "courseSlug": "azure",
    "title": "Deployment Slots and Slot Swapping",
    "description": "Learn how to create and use deployment slots in Azure App Service and swap them for zero-downtime deployments.",
    "order": 2,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Deployment slots are one of the most useful features of Azure App Service. Each slot is a fully functional web app with its own hostname, content, and configuration. They let you validate changes before swapping them into production."}},
        {"type": "heading", "data": {"level": 2, "text": "How Slots Work"}},
        {"type": "paragraph", "data": {"text": "When you create a slot, Azure creates a separate instance of your app. Both the production slot and the staging slot share the same resources (compute, storage) but have completely separate content and settings."}},
        {"type": "mermaid", "data": {"id": "m11-slots", "caption": "How deployment slots work in App Service", "definition": "flowchart LR\n    subgraph AppServicePlan[App Service Plan]\n        direction TB\n        P[Production Slot<br/>myapp.azurewebsites.net]\n        S[Staging Slot<br/>myapp-staging.azurewebsites.net]\n    end\n    Dev[Developer Push] --> S\n    S -- Swap --> P\n    style AppServicePlan fill:#e3f2fd,stroke:#333,stroke-width:1px\n    style P fill:#c8e6c9,stroke:#333\n    style S fill:#fff9c4,stroke:#333"}},
        {"type": "example", "data": {"title": "Azure CLI — Swap Deployment Slots", "content": "Swap a staging slot into production with zero downtime.", "language": "azurecli", "code": "# Validate the staging slot before swapping\naz webapp deployment slot swap \\\n  --resource-group MyResourceGroup \\\n  --name MyWebApp \\\n  --slot staging \\\n  --target-slot production \\\n  --action swap"}},
        {"type": "bullet-list", "data": {"title": "What Swapping Does", "items": [
            "**Content swap** — The app code, binaries, and static files move between slots.",
            "**Configuration swap** — Slot-specific settings (like connection strings) stay with the slot by default. Use \"slot settings\" to mark values that should move.",
            "**Warm-up** — Azure performs an auto-swap warm-up to ensure the target slot is ready before traffic is directed to it."
        ]}},
        {"type": "example", "data": {"title": "PowerShell — List Deployment Slots", "content": "List all deployment slots for an App Service app.", "language": "powershell", "code": "Install-Module -Name Az.Websites -Scope CurrentUser -Force\nConnect-AzAccount\n$slots = Get-AzWebAppSlot -ResourceGroupName \"MyResourceGroup\" -Name \"MyWebApp\"\n$slots | Select-Object Name, State | Format-Table"}},
        {"type": "callout", "data": {"variant": "warning", "title": "Slot Settings", "text": "Only settings marked as \"slot settings\" move during a swap. Connection strings, app settings, and handler mappings can all be configured as slot settings. Always mark production connection strings as slot settings."}},
        {"type": "table", "data": {"headers": ["Property", "Production Slot", "Staging Slot"], "rows": [
            ["Hostname", "myapp.azurewebsites.net", "myapp-staging.azurewebsites.net"],
            ["Auto-swap", "Configurable", "Configurable"],
            ["Custom domains", "Yes", "Yes"],
            ["SSL bindings", "Yes", "Yes"],
            ["Scale-out settings", "Shared", "Shared with plan"]
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Create and Swap a Slot", "description": "Create a staging slot, deploy code to it, and swap it into production.", "steps": [
            "Create an App Service app if you don't already have one",
            "Create a staging slot: az webapp deployment slot create --resource-group <rg> --name <app> --slot staging",
            "Deploy the sample app to the staging slot URL",
            "Browse the staging URL and confirm the app works",
            "Swap staging to production and confirm the production URL now shows the new version"
        ], "expectedOutcome": "A working App Service app with a staging slot that you successfully swapped into production."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Deployment slots give you a full staging environment at no extra compute cost",
            "Swapping is atomic and causes zero downtime",
            "Slot settings remain bound to their slot unless explicitly configured to swap",
            "Auto-swap can be configured to automatically deploy when a new build is available"
        ], "takeaway": "Always use a staging slot before pushing changes to production. It is the simplest way to catch issues before users see them."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

# Lesson 3
write_lesson(f"{BASE}/{M11}/blue-green-canary-and-rolling-deployments.json", {
    "id": "lesson-azure-blue-green-canary-and-rolling-deployments",
    "slug": "blue-green-canary-and-rolling-deployments",
    "moduleSlug": M11,
    "courseSlug": "azure",
    "title": "Blue/Green, Canary, and Rolling Deployments",
    "description": "Implement production-grade deployment patterns in Azure using App Service slots, Traffic Manager, and load balancer rules.",
    "order": 3,
    "difficulty": "beginner",
    "estimatedMinutes": 15,
    "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "While deployment slots handle basic staging needs, larger applications benefit from more advanced patterns. Blue/Green, Canary, and Rolling deployments give you fine-grained control over how new versions reach users."}},
        {"type": "heading", "data": {"level": 2, "text": "Blue/Green Deployment"}},
        {"type": "paragraph", "data": {"text": "In a Blue/Green deployment, you maintain two identical production environments. Blue runs the current live version. Green runs the new version. When Green is validated, you redirect traffic from Blue to Green instantly."}},
        {"type": "example", "data": {"title": "Azure CLI — Configure Traffic Routing with Azure Front Door", "content": "Route traffic between two backends using Azure Front Door.", "language": "azurecli", "code": "az network front-door create \\\n  --resource-group MyResourceGroup \\\n  --name MyFrontDoor \\\n  --backend-address blue-app.azurewebsites.net \\\n  --backend-address green-app.azurewebsites.net"}},
        {"type": "heading", "data": {"level": 3, "text": "Canary Deployment"}},
        {"type": "paragraph", "data": {"text": "Canary deployments route a small percentage of traffic to the new version. If metrics look good, you increase the percentage. If something goes wrong, you route 100% back to the stable version."}},
        {"type": "mermaid", "data": {"id": "m11-canary", "caption": "Canary release traffic progression", "definition": "flowchart LR\n    U[Users] -->|5% Canary| N[New Version]\n    U -->|95% Stable| O[Old Version]\n    N -->|Pass| M[Monitor Metrics]\n    M -->|Increase to 25%| N\n    M -->|Fail| R[Rollback]\n    style N fill:#c8e6c9,stroke:#333\n    style O fill:#bbdefb,stroke:#333\n    style R fill:#ffcdd2,stroke:#333"}},
        {"type": "heading", "data": {"level": 3, "text": "Rolling Deployment"}},
        {"type": "paragraph", "data": {"text": "Rolling deployments update a subset of instances at a time. Kubernetes Deployments use rolling updates by default, updating pods one by one while keeping the service available."}},
        {"type": "example", "data": {"title": "YAML — Kubernetes Rolling Update", "content": "A Deployment resource with rolling update strategy.", "language": "yaml", "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-app\nspec:\n  replicas: 4\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 1\n      maxSurge: 1\n  selector:\n    matchLabels:\n      app: web-app\n  template:\n    metadata:\n      labels:\n        app: web-app\n    spec:\n      containers:\n        - name: web-app\n          image: myregistry.azurecr.io/web-app:v2\n          ports:\n            - containerPort: 80"}},
        {"type": "comparison-cards", "data": {"title": "Deployment Strategy Comparison", "cards": [
            {"title": "Blue/Green", "description": "Two full environments; switch traffic instantly.", "pros": ["Zero downtime", "Instant rollback", "Full test before release"], "cons": ["Double infrastructure cost", "Database migrations need care"]},
            {"title": "Canary", "description": "Gradually route traffic to new version.", "pros": ["Real user feedback", "Low blast radius", "Data-driven decisions"], "cons": ["Requires monitoring", "Longer release time"]},
            {"title": "Rolling", "description": "Update instances one at a time.", "pros": ["No extra environments", "Works at scale", "Built into Kubernetes"], "cons": ["Slower rollout", "Multiple versions run simultaneously"]}
        ]}},
        {"type": "callout", "data": {"variant": "info", "title": "Azure Front Door Canary", "text": "Azure Front Door Standard/Premium supports weighted traffic routing natively. You can send 5%, 25%, 50%, then 100% of traffic to the new backend without any custom code."}},
        {"type": "exercise", "data": {"title": "Exercise: Configure a Canary Release", "description": "Use Azure Front Door to route 10% of traffic to a new version of your app.", "steps": [
            "Deploy v2 of your app to a separate App Service",
            "Create an Azure Front Door with two backends (v1 and v2)",
            "Configure a routing rule with 90% weight to v1 and 10% to v2",
            "Monitor the v2 backend for errors in Application Insights",
            "Increase the weight to 100% once confident"
        ], "expectedOutcome": "Front Door routing traffic proportionally between two app versions."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Blue/Green uses two full environments and swaps traffic instantly",
            "Canary routes a small percentage of traffic to reduce risk",
            "Rolling updates replace instances gradually (default in Kubernetes)",
            "Azure Front Door and App Service slots both support these patterns"
        ], "takeaway": "Use Blue/Green for critical applications, Canary for gradual rollouts, and Rolling when running in Kubernetes."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

# Lesson 4
write_lesson(f"{BASE}/{M11}/azure-devops-overview.json", {
    "id": "lesson-azure-azure-devops-overview",
    "slug": "azure-devops-overview",
    "moduleSlug": M11,
    "courseSlug": "azure",
    "title": "Azure DevOps Overview",
    "description": "Explore Azure DevOps services including Boards, Repos, Pipelines, Test Plans, and Artifacts for end-to-end delivery.",
    "order": 4,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "devops", "deployment", "developer"],
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
        {"type": "example", "data": {"title": "Azure CLI — Create a DevOps Organization and Project", "content": "Create an Azure DevOps organization and project via the Azure CLI.", "language": "azurecli", "code": "az devops organization create \\\n  --organization https://dev.azure.com/myorg \\\n  --location eastus\n\naz devops project create \\\n  --organization https://dev.azure.com/myorg \\\n  --name MyAppProject \\\n  --process Agile \\\n  --visibility private"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Azure DevOps vs GitHub", "text": "Azure DevOps and GitHub are both Microsoft products. Use Azure DevOps when you need integrated project management (Boards) and on-premises options. Use GitHub Actions if you already host code on GitHub."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Pipeline", "definition": "A CI/CD pipeline is a series of steps that build, test, and deploy your code. Azure Pipelines supports both YAML-defined and classic editor pipelines."},
            {"term": "Service Connection", "definition": "A secure connection from Azure DevOps to an external service (like Azure, Docker Hub, or AWS) used by pipelines to deploy or authenticate."},
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
    "relatedLessons": [],
    "furtherReading": []
})

# Lesson 5
write_lesson(f"{BASE}/{M11}/azure-repos-and-azure-pipelines.json", {
    "id": "lesson-azure-azure-repos-and-azure-pipelines",
    "slug": "azure-repos-and-azure-pipelines",
    "moduleSlug": M11,
    "courseSlug": "azure",
    "title": "Azure Repos and Azure Pipelines",
    "description": "Use Azure Repos for version control and understand the structure of a basic Azure Pipelines build.",
    "order": 5,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Azure Repos is a version control service that hosts Git repositories. Azure Pipelines is the CI/CD engine that builds your code from those repositories. Together they form the backbone of an automated release process."}},
        {"type": "heading", "data": {"level": 2, "text": "Azure Repos Features"}},
        {"type": "bullet-list", "data": {"title": "Key Repos Features", "items": [
            "**Unlimited private Git repos** — Free for up to 5 users in the Basic plan",
            "**Pull request policies** — Require reviewers, linked work items, and passing builds before merge",
            "**Branch policies** — Enforce code review, build validation, and comment resolution on specific branches",
            "**File locking** — Prevent conflicting edits to binary files"
        ]}},
        {"type": "heading", "data": {"level": 2, "text": "Pipeline Structure"}},
        {"type": "paragraph", "data": {"text": "An Azure Pipeline is defined in a YAML file (typically `azure-pipelines.yml`) in the root of your repository. It contains one or more stages, each containing jobs, each containing steps."}},
        {"type": "example", "data": {"title": "YAML — Minimal Azure Pipeline", "content": "A basic pipeline that runs on every push to main.", "language": "yaml", "code": "trigger:\n  branches:\n    include:\n      - main\n\npool:\n  vmImage: 'ubuntu-latest'\n\nsteps:\n  - task: UseDotNet@2\n    inputs:\n      packageType: 'sdk'\n      version: '8.x'\n\n  - script: dotnet build --configuration Release\n    displayName: 'Build Solution'\n\n  - script: dotnet test --no-build --verbosity normal\n    displayName: 'Run Tests'"}},
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
            "Add a `dotnet test` step and save",
            "Run the pipeline and confirm it completes"
        ], "expectedOutcome": "A green (successful) pipeline run that builds and tests your code."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Azure Repos hosts private Git repositories with pull request policies",
            "Azure Pipelines are defined in YAML and stored in your repository",
            "A pipeline has stages, jobs, and steps that run on agents",
            "Triggers start pipeline runs automatically on code changes"
        ], "takeaway": "Store your pipeline definition in the same repo as your code for full version control."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

# Lesson 6
write_lesson(f"{BASE}/{M11}/azure-pipelines-ci-cd.json", {
    "id": "lesson-azure-azure-pipelines-ci-cd",
    "slug": "azure-pipelines-ci-cd",
    "moduleSlug": M11,
    "courseSlug": "azure",
    "title": "Azure Pipelines CI/CD",
    "description": "Build a complete CI/CD pipeline with Azure Pipelines that builds, tests, and deploys an application.",
    "order": 6,
    "difficulty": "beginner",
    "estimatedMinutes": 15,
    "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Continuous Integration (CI) automatically builds and tests code when developers commit changes. Continuous Deployment (CD) automatically deploys passing builds to an environment. Together, CI/CD reduces manual work and catches bugs early."}},
        {"type": "heading", "data": {"level": 2, "text": "Building a CI/CD Pipeline"}},
        {"type": "paragraph", "data": {"text": "A typical CI/CD pipeline in Azure has three stages: Build (compile and test), Staging (deploy to a test environment), and Production (deploy after approval)."}},
        {"type": "mermaid", "data": {"id": "m11-pipeline", "caption": "Azure Pipelines CI/CD flow", "definition": "flowchart LR\n    C[Code Commit] --> B[Build Stage]\n    B -->|Tests Pass| T[Test Stage]\n    T -->|Pass| S[Deploy to Staging]\n    S -->|Manual Approval| P[Deploy to Production]\n    B -->|Tests Fail| F[Notify Team]\n    style B fill:#e3f2fd,stroke:#333\n    style P fill:#c8e6c9,stroke:#333\n    style F fill:#ffcdd2,stroke:#333"}},
        {"type": "example", "data": {"title": "YAML — Full CI/CD Pipeline for .NET App", "content": "Multi-stage pipeline with build, test, and deploy stages.", "language": "yaml", "code": "trigger:\n  branches:\n    include: [ main ]\n\nvariables:\n  buildConfiguration: 'Release'\n  azureSubscription: 'MyAzureSubscription'\n  webAppName: 'my-web-app'\n\nstages:\n  - stage: Build\n    displayName: 'Build and Test'\n    jobs:\n      - job: Build\n        pool:\n          vmImage: 'ubuntu-latest'\n        steps:\n          - task: UseDotNet@2\n            inputs:\n              packageType: 'sdk'\n              version: '8.x'\n          - script: dotnet build --configuration $(buildConfiguration)\n            displayName: 'dotnet build'\n          - script: dotnet test --no-build --verbosity normal\n            displayName: 'dotnet test'\n          - task: PublishBuildArtifacts@1\n            inputs:\n              PathtoPublish: '$(Build.ArtifactStagingDirectory)'\n              ArtifactName: 'drop'\n\n  - stage: Deploy_Staging\n    displayName: 'Deploy to Staging'\n    dependsOn: Build\n    condition: succeeded()\n    jobs:\n      - deployment: Deploy\n        environment: 'staging'\n        pool:\n          vmImage: 'ubuntu-latest'\n        strategy:\n          runOnce:\n            deploy:\n              steps:\n                - task: AzureWebApp@1\n                  inputs:\n                    azureSubscription: $(azureSubscription)\n                    appName: $(webAppName)\n                    deployToSlotOrASE: true\n                    resourceGroupName: 'MyResourceGroup'\n                    slotName: 'staging'\n\n  - stage: Deploy_Production\n    displayName: 'Deploy to Production'\n    dependsOn: Deploy_Staging\n    condition: succeeded()\n    jobs:\n      - deployment: DeployProd\n        environment: 'production'\n        pool:\n          vmImage: 'ubuntu-latest'\n        strategy:\n          runOnce:\n            deploy:\n              steps:\n                - task: AzureWebApp@1\n                  inputs:\n                    azureSubscription: $(azureSubscription)\n                    appName: $(webAppName)\n                    packageForLinux: '$(Pipeline.Workspace)/drop/*.zip'"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Environments in Azure Pipelines", "text": "Use `environment:` in deployment jobs to create approval gates and track deployments. You can require manual approval for production deployments directly in the YAML."}},
        {"type": "bullet-list", "data": {"title": "Pipeline Best Practices", "items": [
            "Keep the pipeline definition in your repository (infrastructure as code for CI/CD)",
            "Run fast tests in the build stage and slower integration tests in the test stage",
            "Use environments for staging and production to add approval gates",
            "Publish build artifacts so later stages can consume them"
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Add a Deploy Stage", "description": "Extend an existing pipeline to deploy to Azure App Service.", "steps": [
            "Open the `azure-pipelines.yml` from the previous lesson",
            "Add a `Deploy_Staging` stage using the AzureWebApp task",
            "Add a `Deploy_Production` stage with a manual approval gate",
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
    "relatedLessons": [],
    "furtherReading": []
})

# Lesson 7
write_lesson(f"{BASE}/{M11}/github-actions-for-azure.json", {
    "id": "lesson-azure-github-actions-for-azure",
    "slug": "github-actions-for-azure",
    "moduleSlug": M11,
    "courseSlug": "azure",
    "title": "GitHub Actions for Azure",
    "description": "Set up GitHub Actions workflows to build and deploy applications to Azure services.",
    "order": 7,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "GitHub Actions is a CI/CD platform built directly into GitHub. It uses workflow files written in YAML that live in the `.github/workflows` directory of your repository. Microsoft provides official actions for deploying to Azure."}},
        {"type": "heading", "data": {"level": 2, "text": "GitHub Actions Basics"}},
        {"type": "paragraph", "data": {"text": "A workflow is triggered by an event (push, pull request, schedule). Each workflow contains jobs, and each job runs on a runner (GitHub-hosted or self-hosted)."}},
        {"type": "example", "data": {"title": "YAML — Deploy to Azure App Service with GitHub Actions", "content": "A basic workflow that builds a .NET app and deploys to Azure App Service.", "language": "yaml", "code": "name: Deploy to Azure\n\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Setup .NET\n        uses: actions/setup-dotnet@v4\n        with:\n          dotnet-version: '8.x'\n\n      - name: Restore dependencies\n        run: dotnet restore\n\n      - name: Build\n        run: dotnet build --configuration Release --no-restore\n\n      - name: Test\n        run: dotnet test --no-build --verbosity normal\n\n      - name: Deploy to Azure Web App\n        uses: azure/webapps-deploy@v3\n        with:\n          app-name: 'my-web-app'\n          slot-name: 'production'\n          publish-profile: ${{ secrets.AZUREAPPSERVICE_PUBLISHPROFILE }}\n          package: '.'"}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Workflow", "definition": "A configurable automated process defined in a YAML file inside `.github/workflows/`."},
            {"term": "Runner", "definition": "A server that runs your workflow jobs. GitHub-hosted runners are VMs provided by GitHub with common tools pre-installed."},
            {"term": "Action", "definition": "A reusable unit of code that performs a specific task. Microsoft publishes `azure/webapps-deploy` and many other Azure actions."}
        ]}},
        {"type": "bullet-list", "data": {"title": "GitHub Actions Advantages", "items": [
            "No separate service needed — workflows live in your repository",
            "Huge marketplace of community and official actions",
            "Free tier includes 2,000 minutes per month for public repos",
            "Matrix builds let you test on multiple OS/runtime versions simultaneously"
        ]}},
        {"type": "example", "data": {"title": "YAML — Matrix Build for Multiple Runtimes", "content": "Test your app on multiple .NET versions.", "language": "yaml", "code": "jobs:\n  test:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        dotnet-version: ['7.x', '8.x']\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-dotnet@v4\n        with:\n          dotnet-version: ${{ matrix.dotnet-version }}\n      - run: dotnet test --no-build"}},
        {"type": "callout", "data": {"variant": "warning", "title": "Storing Secrets", "text": "Never hardcode credentials in workflow files. Use GitHub Secrets (`Settings > Secrets and variables > Actions`) to store the Azure publish profile, service principal credentials, or any API keys."}},
        {"type": "exercise", "data": {"title": "Exercise: Create a GitHub Actions Workflow", "description": "Deploy a web app to Azure using GitHub Actions.", "steps": [
            "Push a .NET web app to a GitHub repository",
            "Create `.github/workflows/azure-deploy.yml` in your repo",
            "Add the workflow from the example above",
            "Get the Azure publish profile from the Azure Portal",
            "Add it as a GitHub Secret named `AZUREAPPSERVICE_PUBLISHPROFILE`",
            "Push the workflow file and watch the Actions tab"
        ], "expectedOutcome": "A successful workflow run that deploys your app to Azure."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "GitHub Actions workflows are YAML files in `.github/workflows/`",
            "Microsoft provides official actions for Azure services",
            "Store credentials in GitHub Secrets, not in workflow files",
            "Matrix builds let you test across multiple configurations"
        ], "takeaway": "If your code is on GitHub, GitHub Actions is the most convenient way to build a CI/CD pipeline for Azure."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

# Lesson 8
write_lesson(f"{BASE}/{M11}/github-actions-azure-authentication.json", {
    "id": "lesson-azure-github-actions-azure-authentication",
    "slug": "github-actions-azure-authentication",
    "moduleSlug": M11,
    "courseSlug": "azure",
    "title": "GitHub Actions — Azure Authentication",
    "description": "Authenticate GitHub Actions with Azure using service principals, OpenID Connect, and workload identity federation.",
    "order": 8,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "To deploy from GitHub Actions to Azure, you need to authenticate securely. The two most common approaches are publishing profiles (simple) and service principals with OpenID Connect (recommended for teams)."}},
        {"type": "heading", "data": {"level": 2, "text": "Authentication Methods"}},
        {"type": "comparison-cards", "data": {"title": "Authentication Options", "cards": [
            {"title": "Publish Profile", "description": "Download a `.publishsettings` file from the Azure Portal and store it as a GitHub Secret.", "pros": ["Simple to set up", "No Azure CLI needed"], "cons": ["Long-lived credential", "Not suitable for automation at scale"]},
            {"title": "Service Principal + Secret", "description": "Create an Azure service principal with `az ad sp create-for-rbac` and store the secret as a GitHub Secret.", "pros": ["Fine-grained RBAC", "Works across all Azure services"], "cons": ["Secret can expire and needs rotation"]},
            {"title": "OpenID Connect (OIDC)", "description": "Use federated credentials to authenticate without secrets. GitHub exchanges a short-lived OIDC token for an Azure access token.", "pros": ["No long-lived secrets", "More secure", "Auto-rotating tokens"], "cons": ["Requires Azure AD configuration"]}
        ]}},
        {"type": "example", "data": {"title": "Azure CLI — Create a Service Principal", "content": "Create a service principal for GitHub Actions with Contributor role.", "language": "azurecli", "code": "az ad sp create-for-rbac \\\n  --name \"github-actions-sp\" \\\n  --role Contributor \\\n  --scopes /subscriptions/00000000-0000-0000-0000-000000000000 \\\n  --sdk-auth\n\n# Output is a JSON object — store each value in GitHub Secrets:\n# AZURE_CLIENT_ID, AZURE_TENANT_ID, AZURE_SUBSCRIPTION_ID, AZURE_CLIENT_SECRET"}},
        {"type": "example", "data": {"title": "YAML — Authenticate with azure/login", "content": "Use the azure/login action with service principal secrets.", "language": "yaml", "code": "- name: Login to Azure\n  uses: azure/login@v2\n  with:\n    client-id: ${{ secrets.AZURE_CLIENT_ID }}\n    tenant-id: ${{ secrets.AZURE_TENANT_ID }}\n    subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}"}},
        {"type": "example", "data": {"title": "YAML — Authenticate with OpenID Connect (OIDC)", "content": "Use federated credentials for passwordless authentication.", "language": "yaml", "code": "permissions:\n  id-token: write\n  contents: read\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Login to Azure via OIDC\n        uses: azure/login@v2\n        with:\n          client-id: ${{ secrets.AZURE_CLIENT_ID }}\n          tenant-id: ${{ secrets.AZURE_TENANT_ID }}\n          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}\n          federated-credential-parameters: |\n            audience: api://AzureADTokenExchange\n            issuer: https://token.actions.githubusercontent.com/${{ github.repository_id }}\n            subject: repo:myorg/myapp:environment:production"}},
        {"type": "callout", "data": {"variant": "important", "title": "Use OIDC When Possible", "text": "OpenID Connect removes the need for long-lived secrets. Microsoft recommends OIDC for all production workflows. You configure federated credentials in the Azure AD app registration."}},
        {"type": "exercise", "data": {"title": "Exercise: Set Up OIDC Authentication", "description": "Configure GitHub Actions to authenticate to Azure without secrets.", "steps": [
            "In Azure AD, create an App Registration for GitHub Actions",
            "Add a federated credential with the audience `api://AzureADTokenExchange`",
            "Assign the appropriate RBAC role to the app registration",
            "Store the client ID and tenant ID in GitHub Secrets",
            "Add the `azure/login@v2` step to your workflow with OIDC parameters",
            "Verify the workflow can run `az account show` successfully"
        ], "expectedOutcome": "A workflow that authenticates to Azure without storing a client secret."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Use publish profiles for simple personal projects",
            "Service principals with RBAC are better for team environments",
            "OpenID Connect (OIDC) is the most secure option — no long-lived secrets",
            "Always grant the minimum RBAC role needed for the deployment"
        ], "takeaway": "OIDC authentication removes the biggest security risk in CI/CD: long-lived secrets."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

# Lesson 9
write_lesson(f"{BASE}/{M11}/ci-cd-for-app-service.json", {
    "id": "lesson-azure-ci-cd-for-app-service",
    "slug": "ci-cd-for-app-service",
    "moduleSlug": M11,
    "courseSlug": "azure",
    "title": "CI/CD for App Service",
    "description": "Build and deploy a web application to Azure App Service using Azure Pipelines or GitHub Actions.",
    "order": 9,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Azure App Service is a fully managed platform for hosting web apps, REST APIs, and mobile backends. CI/CD pipelines can automatically deploy code to App Service whenever changes are pushed."}},
        {"type": "heading", "data": {"level": 2, "text": "Deployment Options"}},
        {"type": "bullet-list", "data": {"title": "Ways to Deploy to App Service", "items": [
            "**Azure Pipelines** — Use the AzureWebApp task in a pipeline YAML",
            "**GitHub Actions** — Use `azure/webapps-deploy@v3` action",
            "**Local Git** — Push directly to an App Service Git endpoint",
            "**Zip Deploy** — Upload a ZIP package via REST API or CLI"
        ]}},
        {"type": "example", "data": {"title": "Azure CLI — Zip Deploy", "content": "Deploy a ZIP package to an App Service app using the Kudu API.", "language": "azurecli", "code": "az webapp deploy \\\n  --resource-group MyResourceGroup \\\n  --name MyWebApp \\\n  --src-path ./app.zip \\\n  --type zip\n\n# Check deployment status\naz webapp log tail \\\n  --resource-group MyResourceGroup \\\n  --name MyWebApp"}},
        {"type": "example", "data": {"title": "YAML — Azure Pipelines App Service Deployment", "content": "Deploy a .NET app to App Service using Azure Pipelines.", "language": "yaml", "code": "- stage: Deploy\n  jobs:\n    - deployment: DeployWeb\n      environment: 'production'\n      pool:\n        vmImage: 'ubuntu-latest'\n      strategy:\n        runOnce:\n          deploy:\n            steps:\n              - task: AzureWebApp@1\n                inputs:\n                  azureSubscription: 'MyAzureConnection'\n                  appType: 'webAppLinux'\n                  appName: 'my-web-app'\n                  package: '$(Build.ArtifactStagingDirectory)/**/*.zip'"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Run From Package", "text": "For Linux App Service, enable `WEBSITE_RUN_FROM_PACKAGE=1` (or set it to a URL) to mount the ZIP directly. This gives faster cold starts and atomic deployments."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Zip Deploy", "definition": "A deployment method that uploads a ZIP file containing your app to the Kudu service. The app is then extracted and started."},
            {"term": "Run From Package", "definition": "A deployment mode where the app runs directly from a mounted ZIP file, improving performance and reliability."},
            {"term": "Kudu", "definition": "The deployment engine behind Azure App Service. Access it at `https://<appname>.scm.azurewebsites.net`."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Deploy with Zip Deploy", "description": "Use Azure CLI to deploy a web app to App Service.", "steps": [
            "Create an App Service plan and web app on Linux",
            "Publish a .NET or Node.js app to a ZIP file",
            "Deploy using `az webapp deploy`",
            "Verify the app is running by browsing to the URL",
            "Enable Run From Package: `az webapp config appsettings set --resource-group <rg> --name <app> --settings WEBSITE_RUN_FROM_PACKAGE=1`"
        ], "expectedOutcome": "A running web app deployed via Zip Deploy with Run From Package enabled."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Azure Pipelines and GitHub Actions both support App Service deployment",
            "Zip Deploy is the simplest and fastest way to deploy a ZIP package",
            "Run From Package improves cold start time and prevents file lock issues",
            "Use deployment slots to stage changes before swapping to production"
        ], "takeaway": "App Service supports multiple deployment methods. Zip Deploy with Run From Package is the recommended approach for production."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

# Lesson 10
write_lesson(f"{BASE}/{M11}/ci-cd-for-functions.json", {
    "id": "lesson-azure-ci-cd-for-functions",
    "slug": "ci-cd-for-functions",
    "moduleSlug": M11,
    "courseSlug": "azure",
    "title": "CI/CD for Azure Functions",
    "description": "Deploy Azure Functions using CI/CD pipelines with deployment slots and run-from-package.",
    "order": 10,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Azure Functions are event-driven compute units. Like App Service, they benefit from deployment slots and CI/CD automation. The key difference is that Functions use `WEBSITE_RUN_FROM_PACKAGE` by default for fast, atomic deployments."}},
        {"type": "heading", "data": {"level": 2, "text": "Run From Package for Functions"}},
        {"type": "paragraph", "data": {"text": "Azure Functions apps should always deploy using Run From Package (also called Run From Zip). This mounts the deployment package as a read-only file system, which prevents file lock issues during deployment and speeds up cold starts."}},
        {"type": "example", "data": {"title": "YAML — GitHub Actions for Azure Functions (Python)", "content": "Deploy a Python Azure Function app using GitHub Actions.", "language": "yaml", "code": "name: Deploy Azure Function\n\non:\n  push:\n    branches: [ main ]\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Setup Python\n        uses: actions/setup-python@v5\n        with:\n          python-version: '3.11'\n\n      - name: Install dependencies\n        run: |\n          python -m pip install --upgrade pip\n          pip install -r requirements.txt\n\n      - name: 'Run Azure Functions action'\n        uses: Azure/functions-action@v1\n        with:\n          app-name: 'my-function-app'\n          slot-name: 'production'\n          package: '.'\n          publish-profile: ${{ secrets.AZURE_FUNCTIONAPP_PUBLISHPROFILE }}"}},
        {"type": "example", "data": {"title": "Azure CLI — Enable Run From Package for Functions", "content": "Configure a Function app to run from package.", "language": "azurecli", "code": "az functionapp config appsettings set \\\n  --resource-group MyResourceGroup \\\n  --name MyFunctionApp \\\n  --settings WEBSITE_RUN_FROM_PACKAGE=1\n\naz functionapp deployment slot create \\\n  --resource-group MyResourceGroup \\\n  --name MyFunctionApp \\\n  --slot staging\n\naz functionapp deployment source config-zip \\\n  --resource-group MyResourceGroup \\\n  --name MyFunctionApp \\\n  --slot staging \\\n  --src ./function-app.zip"},
        {"type": "bullet-list", "data": {"title": "CI/CD Best Practices for Functions", "items": [
            "Always use deployment slots for non-production environments",
            "Enable `WEBSITE_RUN_FROM_PACKAGE=1` for all deployments",
            "Use the official Azure/functions-action for GitHub Actions",
            "Run `func azure functionapp publish` locally for testing before committing"
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
            "The `Azure/functions-action` simplifies GitHub Actions deployments",
            "Test locally with `func start` before pushing to Azure"
        ], "takeaway": "Functions deploy best with Run From Package and CI/CD. Use staging slots to validate before swapping to production."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

# Lesson 11
write_lesson(f"{BASE}/{M11}/ci-cd-for-containers-and-acr.json", {
    "id": "lesson-azure-ci-cd-for-containers-and-acr",
    "slug": "ci-cd-for-containers-and-acr",
    "moduleSlug": M11,
    "courseSlug": "azure",
    "title": "CI/CD for Containers and ACR",
    "description": "Build container images, push to Azure Container Registry, and deploy to Azure Container Apps or AKS.",
    "order": 11,
    "difficulty": "beginner",
    "estimatedMinutes": 15,
    "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Container-based deployments require a slightly different CI/CD flow. Instead of deploying code directly, you build a container image, push it to a registry, and then update the running service to use the new image."}},
        {"type": "heading", "data": {"level": 2, "text": "The Container CI/CD Flow"}},
        {"type": "mermaid", "data": {"id": "m11-container-cicd", "caption": "Container CI/CD pipeline flow", "definition": "flowchart LR\n    C[Code Commit] --> B[Build Image]\n    B --> P[Push to ACR]\n    P --> D[Deploy to Container Apps / AKS]\n    D --> V[Verify Health]\n    V -->|Fail| R[Rollback]\n    style B fill:#e3f2fd,stroke:#333\n    style D fill:#c8e6c9,stroke:#333\n    style R fill:#ffcdd2,stroke:#333"}},
        {"type": "example", "data": {"title": "Dockerfile — .NET Web App Container", "content": "Multi-stage Dockerfile for a .NET app.", "language": "dockerfile", "code": "FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build\nWORKDIR /src\nCOPY [\"MyApp.csproj\", \"./\"]\nRUN dotnet restore\nCOPY . .\nRUN dotnet publish -c Release -o /app/publish\n\nFROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime\nWORKDIR /app\nCOPY --from=build /app/publish .\nEXPOSE 8080\nENV ASPNETCORE_URLS=http://+:8080\nENTRYPOINT [\"dotnet\", \"MyApp.dll\"]"}},
        {"type": "example", "data": {"title": "YAML — GitHub Actions: Build and Push to ACR", "content": "Build a container image and push to Azure Container Registry.", "language": "yaml", "code": "name: Build and Push to ACR\n\non:\n  push:\n    branches: [ main ]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    permissions:\n      contents: read\n      id-token: write\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Login to Azure\n        uses: azure/login@v2\n        with:\n          client-id: ${{ secrets.AZURE_CLIENT_ID }}\n          tenant-id: ${{ secrets.AZURE_TENANT_ID }}\n          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}\n          federated-credential-parameters: |\n            audience: api://AzureADTokenExchange\n            issuer: https://token.actions.githubusercontent.com/${{ github.repository_id }}\n            subject: repo:myorg/myapp:ref:refs/heads/main\n\n      - name: Login to ACR\n        uses: azure/docker-login@v2\n        with:\n          login-server: myregistry.azurecr.io\n\n      - name: Build and push\n        run: |\n          docker build -t myregistry.azurecr.io/myapp:${{ github.sha }} .\n          docker push myregistry.azurecr.io/myapp:${{ github.sha }}"}},
        {"type": "example", "data": {"title": "Azure CLI — Deploy Container to Container Apps", "content": "Deploy a new revision of a Container App from ACR.", "language": "azurecli", "code": "az acr login --name myregistry\n\ndocker build -t myregistry.azurecr.io/myapp:latest .\ndocker push myregistry.azurecr.io/myapp:latest\n\naz containerapp update \\\n  --name my-container-app \\\n  --resource-group MyResourceGroup \\\n  --image myregistry.azurecr.io/myapp:latest\n\n# Or create from scratch\naz containerapp create \\\n  --name my-container-app \\\n  --resource-group MyResourceGroup \\\n  --image myregistry.azurecr.io/myapp:latest \\\n  --environment my-env \\\n  --ingress external \\\n  --target-port 8080 \\\n  --cpu 0.5 --memory 1.0Gi"},
        {"type": "callout", "data": {"variant": "tip", "title": "Use Git Tags for Versions", "text": "Tag your container images with the Git commit SHA (`${{ github.sha }}`) so you can always trace a deployed image back to the exact code version. Use semantic version tags for release branches."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Azure Container Registry (ACR)", "definition": "A managed Docker registry service for storing and managing container images. Supports geo-replication, content trust, and Helm charts."},
            {"term": "Container Revision", "definition": "A specific version of a Container App's container image and configuration. Container Apps support multiple revisions for safe rollouts."},
            {"term": "Docker Login Action", "definition": "The `azure/docker-login` GitHub Action that authenticates Docker to an Azure Container Registry using a managed identity."}
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
    "relatedLessons": [],
    "furtherReading": []
})

# Lesson 12
write_lesson(f"{BASE}/{M11}/deployment-secrets-and-environment-configuration.json", {
    "id": "lesson-azure-deployment-secrets-and-environment-configuration",
    "slug": "deployment-secrets-and-environment-configuration",
    "moduleSlug": M11,
    "courseSlug": "azure",
    "title": "Deployment Secrets and Environment Configuration",
    "description": "Manage secrets, connection strings, and environment-specific settings across deployment stages.",
    "order": 12,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Every application needs different settings for development, staging, and production — database connection strings, API keys, feature flags. Managing these across environments requires a secure, repeatable process."}},
        {"type": "heading", "data": {"level": 2, "text": "Where to Store Secrets"}},
        {"type": "bullet-list", "data": {"title": "Azure Secret Storage Options", "items": [
            "**Azure Key Vault** — Centralized secrets, keys, and certificates. Access via managed identity.",
            "**App Service Application Settings** — Environment variables stored with the app (good for non-sensitive config).",
            "**Azure App Configuration** — Feature flags and key-value pairs shared across multiple apps.",
            "**Slot Settings** — App Service settings marked as \"slot setting\" stay with the environment during swap."
        ]}},
        {"type": "example", "data": {"title": "Azure CLI — Add Key Vault Reference to App Service", "content": "Reference a secret from Key Vault as an app setting.", "language": "azurecli", "code": "az keyvault set-policy \\\n  --name MyKeyVault \\\n  --secret-permissions get \\\n  --spn $(az webapp show --resource-group MyResourceGroup --name MyWebApp --query identity.principalId -o tsv)\n\naz webapp config appsettings set \\\n  --resource-group MyResourceGroup \\\n  --name MyWebApp \\\n  --settings DatabaseConnection=@Microsoft.KeyVault(SecretUri=https://mykeyvault.vault.azure.net/secrets/MyDbConnection/)"}},
        {"type": "example", "data": {"title": "JSON — App Configuration Key-Value", "content": "Store feature flags and settings in Azure App Configuration.", "language": "json", "code": "{\n  \"FeatureManagement\": {\n    \"EnableNewCheckout\": true,\n    \"MaxCartItems\": \"50\"\n  },\n  \"ConnectionStrings\": {\n    \"DefaultConnection\": \"@Microsoft.KeyVault(SecretUri=https://mykeyvault.vault.azure.net/secrets/DbConnection/)\"\n  }\n}"}},
        {"type": "callout", "data": {"variant": "warning", "title": "Never Commit Secrets", "text": "Never store secrets in code, `.env` files in Git, or pipeline YAML files. Use Azure Key Vault or GitHub Secrets, and inject them at deploy time."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Managed Identity", "definition": "An identity assigned to an Azure resource (like App Service) that lets it authenticate to other Azure services without storing credentials."},
            {"term": "Key Vault Reference", "definition": "An App Service app setting that dynamically fetches its value from Azure Key Vault at runtime using the syntax `@Microsoft.KeyVault(SecretUri=...)`."},
            {"term": "App Configuration", "definition": "An Azure service for centralizing application settings and feature flags, with support for dynamic refresh."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Move Secrets to Key Vault", "description": "Replace hardcoded connection strings with Key Vault references.", "steps": [
            "Create an Azure Key Vault in your resource group",
            "Add a secret named `DbConnection` with your connection string",
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
    "relatedLessons": [],
    "furtherReading": []
})

# Lesson 13
write_lesson(f"{BASE}/{M11}/release-validation-and-rollback.json", {
    "id": "lesson-azure-release-validation-and-rollback",
    "slug": "release-validation-and-rollback",
    "moduleSlug": M11,
    "courseSlug": "azure",
    "title": "Release Validation and Rollback",
    "description": "Validate deployments with health checks and automated tests, and roll back failed releases safely.",
    "order": 13,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "devops", "deployment", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Even with the best deployment strategy, things can go wrong. Release validation and rollback procedures ensure that bad deployments don't stay broken for long."}},
        {"type": "heading", "data": {"level": 2, "text": "Release Validation"}},
        {"type": "paragraph", "data": {"text": "Validation happens at multiple levels: the pipeline runs unit and integration tests, the deployment slot is smoke-tested, and health probes confirm the app is responding. If any check fails, the pipeline stops."}},
        {"type": "example", "data": {"title": "YAML — Health Check After Deployment", "content": "Run a health check against the staging slot after deployment.", "language": "yaml", "code": "- stage: Validate\n  dependsOn: Deploy_Staging\n  jobs:\n    - job: HealthCheck\n      steps:\n        - task: Bash@3\n          inputs:\n            targetType: 'inline'\n            script: |\n              STAGING_URL=\"https://myapp-staging.azurewebsites.net/health\"\n              STATUS=$(curl -s -o /dev/null -w \"%{http_code}\" $STAGING_URL)\n              if [ \"$STATUS\" != \"200\" ]; then\n                echo \"Health check failed with status: $STATUS\"\n                exit 1\n              fi\n              echo \"Health check passed: $STATUS\""}},
        {"type": "heading", "data": {"level": 3, "text": "Rollback Strategies"}},
        {"type": "bullet-list", "data": {"title": "How to Roll Back", "items": [
            "**Deployment Slot Swap** — Swap the staging slot (which has the old version) back into production.",
            "**Previous Image Redeploy** — In ACR, redeploy the last known good container image tag.",
            "**Git Revert + Redeploy** — Revert the bad commit with `git revert` and push to trigger a new deployment."
        ]}},
        {"type": "example", "data": {"title": "Azure CLI — Swap Back to Previous Version", "content": "If staging has the last good version, swap it back to production.", "language": "azurecli", "code": "az webapp deployment slot swap \\\n  --resource-group MyResourceGroup \\\n  --name MyWebApp \\\n  --slot staging \\\n  --target-slot production \\\n  --action swap\n\n# Or redeploy a specific package\naz webapp deploy \\\n  --resource-group MyResourceGroup \\\n  --name MyWebApp \\\n  --src-path ./last-known-good.zip \\\n  --type zip"},
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
            "Deploy a broken version to staging (e.g., change a config to an invalid value)",
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
    "relatedLessons": [],
    "furtherReading": []
})

print("Module 11 done!")

# ─────────────────────────────────────────────────────────────
# MODULE 12 — 12-infrastructure-as-code-and-automation
# ─────────────────────────────────────────────────────────────
M12 = "12-infrastructure-as-code-and-automation"

# Lesson 1
write_lesson(f"{BASE}/{M12}/infrastructure-as-code-concepts.json", {
    "id": "lesson-azure-infrastructure-as-code-concepts",
    "slug": "infrastructure-as-code-concepts",
    "moduleSlug": M12,
    "courseSlug": "azure",
    "title": "Infrastructure as Code Concepts",
    "description": "Understand the principles of Infrastructure as Code and why it matters for Azure deployments.",
    "order": 1,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "bicep", "iac", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Infrastructure as Code (IaC) means defining your cloud resources in code files instead of manually creating them through the Azure Portal. The code can be versioned, reviewed, tested, and deployed automatically."}},
        {"type": "heading", "data": {"level": 2, "text": "Why Infrastructure as Code"}},
        {"type": "bullet-list", "data": {"title": "Benefits of IaC", "items": [
            "**Repeatability** — The same template creates identical environments every time",
            "**Version control** — Track changes to your infrastructure in Git",
            "**Automation** — Deploy infrastructure as part of your CI/CD pipeline",
            "**Collaboration** — Team members can review infrastructure changes in pull requests",
            "**Documentation** — The code itself describes what your infrastructure looks like"
        ]}},
        {"type": "example", "data": {"title": "Comparison: Manual vs IaC", "content": "How the same task looks with manual clicks versus a Bicep template.", "language": "bicep", "code": "// Bicep: Create a storage account in 15 lines
param location string = resourceGroup().location
param storageAccountName string

resource storageAccount 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: storageAccountName
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    accessTier: 'Hot'
  }
}

// vs Manual: Click through the Portal, fill 8 forms, hope settings match."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "Infrastructure as Code (IaC)", "definition": "The practice of managing and provisioning cloud infrastructure through code files rather than manual processes."},
            {"term": "Declarative", "definition": "A style where you describe the desired end state, and the tool figures out how to achieve it. Bicep and ARM templates are declarative."},
            {"term": "Imperative", "definition": "A style where you write step-by-step commands to reach a desired state. PowerShell and Azure CLI scripts are imperative."},
            {"term": "Drift", "definition": "When the actual state of deployed resources differs from what the IaC template describes. IaC helps detect and prevent drift."}
        ]}},
        {"type": "mermaid", "data": {"id": "m12-iac-flow", "caption": "IaC workflow from code to Azure", "definition": "flowchart LR
    C[IaC Code in Git] --> V[Validate]
    V --> P[Plan]
    P --> A[Approval Gate]
    A --> D[Deploy to Azure]
    D --> M[Monitor & Detect Drift]
    style C fill:#e3f2fd,stroke:#333
    style D fill:#c8e6c9,stroke:#333
    style M fill:#fff9c4,stroke:#333"}},
        {"type": "callout", "data": {"variant": "tip", "title": "Start Small", "text": "You don't need to IaC everything at once. Start with one resource type (like storage accounts) and expand as you get comfortable."}},
        {"type": "exercise", "data": {"title": "Exercise: Identify IaC Candidates", "description": "Review your current Azure resources and identify which ones should be managed with IaC.", "steps": [
            "List all resource groups in your subscription",
            "Identify resources that were created manually in the Portal",
            "Pick one resource type (e.g., App Service or Storage) to convert first",
            "Write down what settings you would need in a template",
            "Estimate how much time you would save with automation"
        ], "expectedOutcome": "A prioritized list of resources to manage with IaC, starting with the easiest to convert."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "IaC treats infrastructure like software — it is versioned, tested, and deployed",
            "Declarative templates (Bicep) describe what you want, not how to build it",
            "IaC prevents configuration drift and enables team collaboration",
            "Start small and expand your IaC coverage over time"
        ], "takeaway": "If it is important, it belongs in code. Infrastructure is no exception."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

# Lesson 2
write_lesson(f"{BASE}/{M12}/bicep-overview.json", {
    "id": "lesson-azure-bicep-overview",
    "slug": "bicep-overview",
    "moduleSlug": M12,
    "courseSlug": "azure",
    "title": "Bicep Overview",
    "description": "Learn what Bicep is, how it relates to ARM templates, and how to get started writing Bicep files.",
    "order": 2,
    "difficulty": "beginner",
    "estimatedMinutes": 12,
    "tags": ["azure", "bicep", "iac", "developer"],
    "blocks": [
        {"type": "paragraph", "data": {"text": "Bicep is a domain-specific language (DSL) for deploying Azure resources. It is a transparent abstraction over Azure Resource Manager (ARM) templates, which are JSON files. Bicep is easier to read and write than raw ARM JSON, while producing the same ARM templates under the hood."}},
        {"type": "heading", "data": {"level": 2, "text": "Why Bicep Instead of ARM JSON"}},
        {"type": "comparison-cards", "data": {"title": "Bicep vs ARM JSON", "cards": [
            {"title": "ARM JSON", "description": "The native Azure deployment format.", "pros": ["No build step needed", "Full ARM API coverage"], "cons": ["Very verbose", "Hard to read and maintain", "No intellisense or type safety"]},
            {"title": "Bicep", "description": "A cleaner language that compiles to ARM JSON.", "pros": ["Much simpler syntax", "Intellisense in VS Code", "Type-safe with modules", "Same ARM capabilities"], "cons": ["Requires build/compile step", "Slight learning curve"]}
        ]}},
        {"type": "paragraph", "data": {"text": "Bicep files use the  extension. The Bicep CLI compiles them into ARM JSON templates, which Azure Resource Manager then uses to deploy resources."}},
        {"type": "example", "data": {"title": "Bicep — Minimal Resource Group", "content": "The simplest Bicep file that creates a resource group.", "language": "bicep", "code": "targetScope = 'resourceGroup'

resource rg 'Microsoft.Resources/resourceGroups@2024-03-01' = {
  name: 'my-app-rg'
  location: 'eastus'
  tags: {
    environment: 'dev'
    project: 'myapp'
  }
}

output resourceGroupName string = rg.name"}},
        {"type": "heading", "data": {"level": 2, "text": "Getting Started with Bicep"}},
        {"type": "bullet-list", "data": {"title": "Setup Steps", "items": [
            "**Install the Bicep CLI**:  (part of Azure CLI 2.49.0+)",
            "**Install VS Code extension**: Search for "Bicep" in the Extensions marketplace",
            "**Create a file**: Name it  and start coding",
            "**Build**:  produces ",
            "**Deploy**: "
        ]}},
        {"type": "callout", "data": {"variant": "tip", "title": "VS Code is Your Best Friend", "text": "The Bicep VS Code extension provides autocomplete, inline documentation, error checking, and a visualizer. Install it before writing your first template."}},
        {"type": "key-terms", "data": {"terms": [
            {"term": "targetScope", "definition": "The level at which the deployment runs: , , , or ."},
            {"term": "Resource Symbol", "definition": "A Bicep identifier (like  or ) that represents a resource in your template."},
            {"term": "Compile", "definition": "The process of converting a  file into a  ARM template using the Bicep CLI."}
        ]}},
        {"type": "exercise", "data": {"title": "Exercise: Write Your First Bicep File", "description": "Create a Bicep file that deploys a resource group and outputs its name.", "steps": [
            "Install the Bicep CLI and VS Code extension",
            "Create  with ",
            "Add a resource block for a resource group",
            "Add an output block",
            "Run  and inspect the output JSON",
            "Deploy with "
        ], "expectedOutcome": "A successfully compiled Bicep template and a deployed resource group."}},
        {"type": "summary-box", "data": {"title": "Key Takeaways", "points": [
            "Bicep is a simpler language that compiles to ARM JSON",
            " defines the deployment level",
            "The Bicep VS Code extension provides intellisense and validation",
            "Bicep is now the recommended IaC language for Azure"
        ], "takeaway": "Bicep makes Azure IaC accessible to everyone. Start with a simple file and build up."}}
    ],
    "relatedLessons": [],
    "furtherReading": []
})

print("Module 12 part 1 done!")
