#!/usr/bin/env python3
"""Generate AWS course lessons for module 15."""

import json
import os

BASE = "/workspace/f9343184-f4eb-4a6e-8a7f-ec85c9efba8b/sessions/agent_23a36398-aba0-4fc6-b45d-778d317dd74c/content/courses/aws"

def write_json(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        json.dump(data, f, indent=2)
        f.write("\n")
    print(f"Wrote: {path}")

def lesson(ids, slug, moduleSlug, title, description, order, estimatedMinutes, tags, blocks):
    return {
        "id": ids,
        "slug": slug,
        "moduleSlug": moduleSlug,
        "courseSlug": "aws",
        "title": title,
        "description": description,
        "order": order,
        "difficulty": "beginner",
        "estimatedMinutes": estimatedMinutes,
        "tags": tags,
        "blocks": blocks,
        "relatedLessons": [],
        "furtherReading": []
    }

APPSYNC_RESOLVER = '''{
  "version": "2018-05-29",
  "operation": "PostQuery",
  "field": "listPosts",
  "payload": {
    "source": "post",
    "filters": {
      "status": { "eq": "PUBLISHED" }
    },
    "limit": $util.toJson($context.args.limit ?: 10),
    "nextToken": $util.toJson($context.args.nextToken)
  }
}'''

SES_PYTHON = '''import boto3

ses = boto3.client("ses", region_name="us-east-1")

response = ses.send_email(
    Source="sender@example.com",
    Destination={"ToAddresses": ["recipient@example.com"]},
    Message={
        "Subject": {"Data": "Hello from AWS SES", "Charset": "UTF-8"},
        "Body": {
            "Text": {"Data": "This is a test email sent using Amazon SES.", "Charset": "UTF-8"},
            "Html": {"Data": "<html><body><h1>Hello!</h1><p>This is a test email.</p></body></html>", "Charset": "UTF-8"}
        }
    }
)

print(f"Email sent! Message ID: {response['MessageId']}")'''

AMPLIFY_CONFIG = '''# amplify/backend/backend-config.json
{
  "api": {
    "myapp": {
      "service": "AppSync",
      "providerPlugin": "awscloudformation",
      "output": {
        "authConfig": {
          "defaultAuthentication": {
            "authenticationType": "API_KEY",
            "apiKeyConfig": {
              "apiKeyExpirationDays": 365
            }
          },
          "additionalAuthenticationProviders": [
            {
              "authenticationType": "AWS_IAM"
            }
          ]
        }
      }
    }
  },
  "auth": {
    "myapp": {
      "service": "Cognito",
      "providerPlugin": "awscloudformation",
      "customAuth": false
    }
  },
  "storage": {
    "s3images": {
      "service": "S3",
      "providerPlugin": "awscloudformation"
    }
  }
}'''

# ============================================================
# MODULE 15 — Developer Tools & Application Services
# ============================================================

m15_l1_blocks = [
    {"type": "paragraph", "data": {"text": "AWS SDKs let you interact with AWS services programmatically from your applications. AWS AppConfig (part of Systems Manager) lets you deploy application configuration dynamically without code deployments. Understanding both is essential for building maintainable, configurable applications on AWS."}},
    {"type": "heading", "data": {"level": 2, "text": "AWS SDKs"}},
    {"type": "paragraph", "data": {"text": "AWS provides SDKs for popular programming languages including Python (Boto3), JavaScript (v3), Java, Go, Ruby, PHP, and .NET. Each SDK provides language-specific interfaces for AWS services. The v3 SDKs are modular — you install only the packages for the services you use, keeping your application lightweight."}},
    {"type": "example", "data": {"title": "List S3 Buckets with Python/Boto3", "language": "python", "content": "Use the Boto3 SDK to list S3 buckets:", "code": "import boto3\n\n# Create an S3 client\ns3 = boto3.client('s3', region_name='us-east-1')\n\n# List all buckets\nresponse = s3.list_buckets()\nfor bucket in response['Buckets']:\n    print(f\"Bucket: {bucket['Name']} created on {bucket['CreationDate']}\")\n\n# List objects in a bucket\nobjects = s3.list_objects_v2(Bucket='my-bucket')\nfor obj in objects.get('Contents', []):\n    print(f\"  Object: {obj['Key']} ({obj['Size']} bytes)\")"}},
    {"type": "heading", "data": {"level": 2, "text": "AWS AppConfig"}},
    {"type": "paragraph", "data": {"text": "AWS AppConfig is a capability of AWS Systems Manager that helps you deploy application configuration safely. You can validate configuration changes, roll them out gradually (canary deployments), and roll back automatically if something goes wrong — all without deploying new code."}},
    {"type": "heading", "data": {"level": 2, "text": "Parameter Store vs. Secrets Manager vs. AppConfig"}},
    {"type": "table", "data": {"headers": ["Service", "Purpose", "Best For"], "rows": [
        ["Parameter Store", "Store config and secrets", "Non-sensitive config, simple secrets"],
        ["Secrets Manager", "Store and rotate secrets", "Database credentials, API keys with rotation"],
        ["AppConfig", "Deploy application config", "Feature flags, config changes with validation"]
    ]}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "SDK", "definition": "Software Development Kit — a library that provides language-specific access to AWS services."},
        {"term": "Boto3", "definition": "The AWS SDK for Python."},
        {"term": "AppConfig", "definition": "An AWS service for deploying application configuration safely and gradually."},
        {"term": "Feature flag", "definition": "A toggle that enables or disables features without deploying code."},
        {"term": "Canary deployment", "definition": "Rolling out a change to a small subset of users before full rollout."},
        {"term": "Validator", "definition": "An AppConfig feature that checks configuration data against a schema or Lambda function."}
    ]}},
    {"type": "callout", "data": {"variant": "tip", "title": "Use the Right Tool for Configuration", "text": "Use **Parameter Store** for static configuration, **Secrets Manager** for credentials that need rotation, and **AppConfig** for dynamic configuration that changes frequently (like feature flags)."}},
    {"type": "exercise", "data": {"title": "Use Boto3 to Create an S3 Bucket", "description": "Write a Python script using Boto3 to create an S3 bucket, list its contents, and then delete it.", "steps": [
        "Install Boto3: pip install boto3",
        "Configure AWS credentials using aws configure",
        "Write a script that creates a uniquely named bucket",
        "Add code to list objects in the bucket",
        "Add code to delete the bucket"
    ], "expectedOutcome": "You have a working Python script that uses Boto3 to interact with S3."}},
    {"type": "summary-box", "data": {"points": [
        "AWS SDKs provide language-specific access to all AWS services",
        "Boto3 is the Python SDK and is widely used in data and ML workflows",
        "AppConfig lets you deploy configuration changes safely with validation and gradual rollout",
        "Use the right configuration service for each use case"
    ], "takeaway": "SDKs are the bridge between your code and AWS. Start with Boto3 for Python projects and explore AppConfig for dynamic configuration management."}}
]
write_json(f"{BASE}/15-developer-tools-application-services/aws-sdk-appconfig.json", lesson(
    "lesson-aws-aws-sdk-appconfig", "aws-sdk-appconfig", "15-developer-tools-application-services",
    "AWS SDKs and AppConfig",
    "Interact with AWS services using SDKs and manage dynamic configuration with AppConfig.",
    1, 15, ["aws", "developer-tools", "sdk", "boto3", "appconfig", "configuration"],
    m15_l1_blocks
))

m15_l2_blocks = [
    {"type": "paragraph", "data": {"text": "Amazon Simple Email Service (SES) and Amazon Pinpoint are AWS services for email and customer engagement. SES is for sending transactional and marketing emails at scale. Pinpoint is for targeted campaigns, SMS, push notifications, and analytics."}},
    {"type": "heading", "data": {"level": 2, "text": "Amazon SES"}},
    {"type": "paragraph", "data": {"text": "SES lets you send and receive email using your own email addresses and domains. It provides high deliverability, email analytics (opens, clicks, bounces), and a cost-effective pay-as-you-go pricing model. SES integrates with IAM for access control and can send emails through Amazon's dedicated IP addresses."}},
    {"type": "example", "data": {"title": "Send Email with SES using Python/Boto3", "language": "python", "content": "Send an email using Amazon SES:", "code": SES_PYTHON}},
    {"type": "heading", "data": {"level": 2, "text": "Amazon Pinpoint"}},
    {"type": "paragraph", "data": {"text": "Pinpoint helps you engage customers through multiple channels: email, SMS, push notifications, and in-app messages. It provides campaign management, audience segmentation, A/B testing, and analytics. Pinpoint is ideal for marketing teams who need to send targeted campaigns and track engagement metrics."}},
    {"type": "bullet-list", "data": {"title": "SES vs. Pinpoint", "items": [
        "**SES** — Best for transactional emails (order confirmations, password resets) and bulk sending",
        "**Pinpoint** — Best for targeted marketing campaigns, customer journeys, and multi-channel engagement",
        "Both** — Can work together; use SES for transactional and Pinpoint for marketing in the same application"
    ]}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "SES", "definition": "Amazon Simple Email Service for sending and receiving email."},
        {"term": "Pinpoint", "definition": "AWS service for customer engagement via email, SMS, push, and in-app messages."},
        {"term": "Transactional email", "definition": "Automated emails triggered by user actions (e.g., order confirmation)."},
        {"term": "Campaign", "definition": "A targeted message sent to a specific audience segment."},
        {"term": "Segment", "definition": "A group of customers defined by attributes or behaviors in Pinpoint."},
        {"term": "Deliverability", "definition": "The ability to successfully deliver emails to recipients' inboxes."}
    ]}},
    {"type": "faq-block", "data": {"items": [
        {"question": "Do I need to verify email addresses in SES?", "answer": "In the SES sandbox (default), you must verify both sender and recipient addresses. Request production access to send to unverified addresses."},
        {"question": "Can I use my own domain with SES?", "answer": "Yes, you can verify domains in SES and set up DKIM and SPF records for better email deliverability."},
        {"question": "Does Pinpoint support two-way SMS?", "answer": "Yes, Pinpoint supports two-way SMS in supported countries, allowing you to receive replies from recipients."}
    ]}},
    {"type": "summary-box", "data": {"points": [
        "SES is for sending transactional and bulk emails at scale",
        "Pinpoint adds targeting, segmentation, and multi-channel campaigns",
        "Both services integrate with IAM and other AWS services",
        "Use SES for emails triggered by user actions, Pinpoint for marketing campaigns"
    ], "takeaway": "SES and Pinpoint complement each other. Start with SES for transactional emails and add Pinpoint when you need targeted marketing and analytics."}}
]
write_json(f"{BASE}/15-developer-tools-application-services/email-communication.json", lesson(
    "lesson-aws-email-communication", "email-communication", "15-developer-tools-application-services",
    "Email and Communication with SES and Pinpoint",
    "Send emails with Amazon SES and run campaigns with Amazon Pinpoint.",
    2, 15, ["aws", "ses", "pinpoint", "email", "sms", "notifications", "communication"],
    m15_l2_blocks
))

m15_l3_blocks = [
    {"type": "paragraph", "data": {"text": "Amazon API Gateway and AWS AppSync are two services for building APIs. API Gateway provides REST and HTTP APIs for traditional request/response patterns. AppSync provides GraphQL APIs that let clients request exactly the data they need, with real-time subscriptions and offline support."}},
    {"type": "heading", "data": {"level": 2, "text": "API Gateway Recap"}},
    {"type": "paragraph", "data": {"text": "API Gateway acts as a front door for your backend services. It handles authentication, rate limiting, caching, and request routing. You can create REST APIs, HTTP APIs (lower cost, lower latency), and WebSocket APIs for real-time communication. API Gateway integrates with Lambda for serverless backends, and with EventBridge for event-driven architectures."}},
    {"type": "heading", "data": {"level": 2, "text": "AWS AppSync"}},
    {"type": "paragraph", "data": {"text": "AppSync is a managed GraphQL service that provides a GraphQL endpoint for your data. Unlike REST APIs, GraphQL lets clients specify exactly what data they need in a single request. AppSync supports real-time data with **subscriptions** — clients can subscribe to data changes and receive updates over WebSocket connections."}},
    {"type": "example", "data": {"title": "AppSync Resolver Template (VTL)", "language": "json", "content": "An AppSync resolver that queries DynamoDB:", "code": APPSYNC_RESOLVER}},
    {"type": "heading", "data": {"level": 2, "text": "EventBridge and Webhooks"}},
    {"type": "bullet-list", "data": {"title": "API Integration Patterns", "items": [
        "**EventBridge integration** — API Gateway can send events to EventBridge for event-driven architectures",
        "**Webhooks** — Configure API Gateway as a webhook receiver for GitHub, Stripe, or other services",
        "**Lambda integration** — The most common pattern: API Gateway → Lambda → DynamoDB/RDS",
        "**Direct integrations** — API Gateway can integrate directly with S3, SNS, SQS, and other services without Lambda"
    ]}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "API Gateway", "definition": "A fully managed service for creating, publishing, and securing APIs at any scale."},
        {"term": "AppSync", "definition": "A managed GraphQL service with real-time data synchronization."},
        {"term": "GraphQL", "definition": "A query language for APIs that lets clients request exactly the data they need."},
        {"term": "Resolver", "definition": "A function that connects a GraphQL field to a data source in AppSync."},
        {"term": "Subscription", "definition": "A GraphQL operation that receives real-time updates when data changes."},
        {"term": "VTL", "definition": "Velocity Template Language — used in AppSync resolvers to map data."}
    ]}},
    {"type": "faq-block", "data": {"items": [
        {"question": "Should I use REST or GraphQL?", "answer": "Use REST for simple APIs with well-known endpoints. Use GraphQL (AppSync) when clients need flexible data queries, real-time updates, or offline support."},
        {"question": "Does AppSync require a VTL resolver?", "answer": "No, AppSync also supports pipeline resolvers and direct Lambda resolvers. VTL is used for DynamoDB and Elasticsearch data sources."},
        {"question": "Can API Gateway and AppSync work together?", "answer": "Yes, you can use API Gateway as the public-facing API and AppSync as the internal GraphQL layer, or vice versa depending on your use case."}
    ]}},
    {"type": "summary-box", "data": {"points": [
        "API Gateway provides REST, HTTP, and WebSocket APIs with built-in features",
        "AppSync provides GraphQL with real-time subscriptions and offline support",
        "Both integrate with Lambda and other AWS services",
        "EventBridge enables event-driven architectures alongside your APIs"
    ], "takeaway": "API Gateway and AppSync are complementary. Use API Gateway for REST APIs and AppSync when you need GraphQL's flexibility and real-time features."}}
]
write_json(f"{BASE}/15-developer-tools-application-services/api-integration.json", lesson(
    "lesson-aws-api-integration", "api-integration", "15-developer-tools-application-services",
    "API Integration with API Gateway and AppSync",
    "Build APIs with API Gateway, GraphQL with AppSync, and event-driven integrations with EventBridge.",
    3, 15, ["aws", "api-gateway", "appsync", "graphql", "rest", "eventbridge", "api"],
    m15_l3_blocks
))

m15_l4_blocks = [
    {"type": "paragraph", "data": {"text": "AWS Amplify is a set of tools and services for building full-stack web and mobile applications on AWS. It provides hosting, CI/CD, authentication, data storage, and more — all configured through a simple CLI and a visual editor in the Amplify console."}},
    {"type": "heading", "data": {"level": 2, "text": "Amplify Overview"}},
    {"type": "paragraph", "data": {"text": "Amplify consists of three main parts: **Amplify CLI** — a toolchain for creating and managing AWS cloud resources for your app; **Amplify Libraries** — client-side libraries for web (JavaScript) and mobile (iOS, Android, Flutter) that connect your app to AWS services; and **Amplify Hosting** — a fully managed CI/CD and hosting service for web apps."}},
    {"type": "heading", "data": {"level": 2, "text": "Amplify Data Store"}},
    {"type": "paragraph", "data": {"text": "**Amplify Data Store** provides a persistent storage solution for web and mobile apps that works online and offline. It syncs data automatically between your app and the cloud using AWS AppSync and DynamoDB. Data Store handles conflict resolution, so users can work offline and have changes sync when they reconnect."}},
    {"type": "heading", "data": {"level": 2, "text": "Authentication with Cognito"}},
    {"type": "paragraph", "data": {"text": "Amplify uses **Amazon Cognito** for user authentication. Cognito handles user sign-up, sign-in, and access control. With Amplify, you can add authentication to your app with a few CLI commands. Amplify supports email/password, social login (Google, Facebook), and enterprise SAML/SSO."}},
    {"type": "example", "data": {"title": "Amplify Backend Configuration", "language": "json", "content": "An Amplify backend configuration with API, auth, and storage:", "code": AMPLIFY_CONFIG}},
    {"type": "heading", "data": {"level": 2, "text": "CI/CD and Hosting"}},
    {"type": "bullet-list", "data": {"title": "Amplify Hosting Features", "items": [
        "**Git-based deployments** — Push to GitHub, GitLab, Bitbucket, or CodeCommit",
        "**Preview deployments** — Every pull request gets a preview URL",
        "*Custom domains* — Connect your domain with automatic SSL via ACM",
        "*Server-side rendering* — Support for Next.js, Gatsby, and other SSR frameworks",
        "*Password protection* — Restrict access to preview and production environments"
    ]}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "Amplify", "definition": "AWS tools and services for building full-stack web and mobile applications."},
        {"term": "Amplify CLI", "definition": "A command-line tool for creating and managing AWS resources for your app."},
        {"term": "Amplify Hosting", "definition": "A managed CI/CD and hosting service for web applications."},
        {"term": "Data Store", "definition": "Amplify's persistent storage with offline support and cloud sync."},
        {"term": "Cognito", "definition": "AWS service for user authentication and authorization."},
        {"term": "SSR", "definition": "Server-Side Rendering — rendering pages on the server for better SEO and performance."}
    ]}},
    {"type": "callout", "data": {"variant": "tip", "title": "Amplify is Great for MVPs", "text": "Amplify is particularly powerful for **minimum viable products** and prototypes. You can go from idea to deployed app in hours, with authentication, database, and hosting all managed by AWS."}},
    {"type": "exercise", "data": {"title": "Set Up an Amplify Project", "description": "Create a new Amplify project with authentication and an API.", "steps": [
        "Install the Amplify CLI: npm install -g @aws-amplify/cli",
        "Run amplify init to configure your project",
        "Run amplify add auth to add authentication",
        "Run amplify add api to add a GraphQL API",
        "Run amplify push to deploy to AWS",
        "Run amplify add hosting to deploy your app"
    ], "expectedOutcome": "You have a deployed web app with authentication and a GraphQL API backed by DynamoDB."}},
    {"type": "summary-box", "data": {"points": [
        "Amplify provides CLI tools, client libraries, and hosting for full-stack apps",
        "Data Store provides offline-capable data synchronization",
        "Cognito handles authentication with social and enterprise login options",
        "Amplify Hosting provides Git-based CI/CD with preview deployments"
    ], "takeaway": "Amplify is the fastest way to build and deploy full-stack apps on AWS. It handles the infrastructure so you can focus on your application code."}}
]
write_json(f"{BASE}/15-developer-tools-application-services/web-mobile-amplify.json", lesson(
    "lesson-aws-web-mobile-amplify", "web-mobile-amplify", "15-developer-tools-application-services",
    "Web and Mobile with AWS Amplify",
    "Build full-stack web and mobile applications with AWS Amplify, hosting, CI/CD, and Cognito authentication.",
    4, 15, ["aws", "amplify", "cognito", "mobile", "web", "hosting", "fullstack"],
    m15_l4_blocks
))

print("Module 15 lessons created.")
