#!/usr/bin/env python3
"""Generate AWS course modules 11-15 with all lessons."""

import json
import os

BASE = "/workspace/f9343184-f4eb-4a6e-8a7f-ec85c9efba8b/sessions/agent_23a36398-aba0-4fc6-b45d-778d317dd74c/content/courses/aws"

def write_json(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        json.dump(data, f, indent=2)
        f.write("\n")
    print(f"Wrote: {path}")

# ============================================================
# MODULE 11
# ============================================================
mod11 = {
  "id": "module-aws-011",
  "slug": "11-monitoring-logging-observability",
  "courseSlug": "aws",
  "title": "Monitoring, Logging & Observability",
  "description": "Learn CloudWatch, CloudTrail, X-Ray, and AWS Health. Understand metrics, logs, alarms, distributed tracing, and service health.",
  "longDescription": "This module teaches you how to monitor your AWS environment using CloudWatch, CloudTrail, X-Ray, and AWS Health. You will learn how to collect metrics, set up alarms, analyze logs, trace distributed requests, and stay informed about AWS service health.",
  "order": 11,
  "difficulty": "beginner",
  "estimatedHours": 3,
  "icon": "📊",
  "tags": ["aws", "monitoring", "cloudwatch", "cloudtrail", "x-ray", "logging"],
  "lessonSlugs": ["amazon-cloudwatch", "aws-cloudtrail", "aws-x-ray", "observability-architecture"],
  "prerequisites": [],
  "whatYouLearn": [
    "Create CloudWatch metrics, alarms, and dashboards",
    "Collect and analyze logs with CloudWatch Logs",
    "Audit API calls with CloudTrail",
    "Trace requests with X-Ray"
  ]
}
write_json(f"{BASE}/11-monitoring-logging-observability/content.json", mod11)

# ============================================================
# MODULE 12
# ============================================================
mod12 = {
  "id": "module-aws-012",
  "slug": "12-security-services",
  "courseSlug": "aws",
  "title": "Security Services",
  "description": "Learn KMS, Secrets Manager, Systems Manager, WAF, Shield, GuardDuty, Inspector, Macie, and Security Hub.",
  "longDescription": "This module covers AWS security services including KMS for encryption, Secrets Manager for secrets, Systems Manager for operations, WAF and Shield for application protection, and GuardDuty, Inspector, Macie, and Security Hub for threat detection and compliance.",
  "order": 12,
  "difficulty": "beginner",
  "estimatedHours": 3,
  "icon": "🛡️",
  "tags": ["aws", "security", "kms", "waf", "shield", "guardduty"],
  "lessonSlugs": ["aws-kms-secrets-manager", "systems-manager", "waf-shield", "threat-detection-compliance"],
  "prerequisites": [],
  "whatYouLearn": [
    "Encrypt data with KMS and envelope encryption",
    "Manage secrets with Secrets Manager and Parameter Store",
    "Protect applications with WAF and Shield",
    "Detect threats with GuardDuty and Security Hub"
  ]
}
write_json(f"{BASE}/12-security-services/content.json", mod12)

# ============================================================
# MODULE 13
# ============================================================
mod13 = {
  "id": "module-aws-013",
  "slug": "13-analytics-big-data",
  "courseSlug": "aws",
  "title": "Analytics & Big Data",
  "description": "Learn Redshift, Glue, Athena, EMR, OpenSearch, and QuickSight. Understand data warehousing, ETL, and analytics.",
  "longDescription": "This module covers AWS analytics services including Redshift for data warehousing, Glue for ETL, Athena for serverless queries, EMR for big data processing, OpenSearch for search and logs, and QuickSight for business intelligence.",
  "order": 13,
  "difficulty": "beginner",
  "estimatedHours": 3,
  "icon": "📈",
  "tags": ["aws", "analytics", "redshift", "glue", "athena", "emr", "big-data"],
  "lessonSlugs": ["amazon-redshift", "aws-glue-etl", "athena-emr", "opensearch-quicksight"],
  "prerequisites": [],
  "whatYouLearn": [
    "Design data warehouses with Redshift",
    "Build ETL pipelines with Glue",
    "Query S3 data with Athena",
    "Process big data with EMR and Spark"
  ]
}
write_json(f"{BASE}/13-analytics-big-data/content.json", mod13)

# ============================================================
# MODULE 14
# ============================================================
mod14 = {
  "id": "module-aws-014",
  "slug": "14-ai-machine-learning",
  "courseSlug": "aws",
  "title": "AI & Machine Learning",
  "description": "Discover Amazon Bedrock, SageMaker, and AWS AI services. Learn foundation models, prompt engineering, and generative AI architecture.",
  "longDescription": "This module introduces AWS AI and machine learning services. You will learn about Amazon Bedrock for foundation models, SageMaker for building and training ML models, and various AWS AI services for vision, speech, and language tasks.",
  "order": 14,
  "difficulty": "beginner",
  "estimatedHours": 3,
  "icon": "🤖",
  "tags": ["aws", "ai", "machine-learning", "bedrock", "sagemaker", "generative-ai"],
  "lessonSlugs": ["amazon-bedrock", "amazon-sagemaker", "aws-ai-services", "generative-ai-architecture"],
  "prerequisites": [],
  "whatYouLearn": [
    "Use foundation models through Amazon Bedrock",
    "Build RAG architectures with Knowledge Bases",
    "Train and deploy models with SageMaker",
    "Apply AI services for vision, speech, and language"
  ]
}
write_json(f"{BASE}/14-ai-machine-learning/content.json", mod14)

# ============================================================
# MODULE 15
# ============================================================
mod15 = {
  "id": "module-aws-015",
  "slug": "15-developer-tools-application-services",
  "courseSlug": "aws",
  "title": "Developer Tools & Application Services",
  "description": "Learn AWS SDKs, AppConfig, SES, Pinpoint, API Gateway, AppSync, and Amplify.",
  "longDescription": "This module covers AWS developer tools and application services including SDKs, AppConfig for dynamic configuration, SES and Pinpoint for communication, API Gateway and AppSync for APIs, and Amplify for full-stack web and mobile development.",
  "order": 15,
  "difficulty": "beginner",
  "estimatedHours": 2,
  "icon": "🛠️",
  "tags": ["aws", "developer-tools", "sdk", "appsync", "amplify", "ses"],
  "lessonSlugs": ["aws-sdk-appconfig", "email-communication", "api-integration", "web-mobile-amplify"],
  "prerequisites": [],
  "whatYouLearn": [
    "Interact with AWS services using SDKs",
    "Use AppConfig for dynamic configuration",
    "Send emails with SES and campaigns with Pinpoint",
    "Build GraphQL APIs with AppSync"
  ]
}
write_json(f"{BASE}/15-developer-tools-application-services/content.json", mod15)

print("All module content.json files created.")
