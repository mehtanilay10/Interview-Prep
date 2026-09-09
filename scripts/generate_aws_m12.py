#!/usr/bin/env python3
"""Generate AWS course lessons for modules 12-15."""

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

KMS_KEY_POLICY = json.dumps({
    "Version": "2012-10-17",
    "Id": "key-default-1",
    "Statement": [
        {
            "Sid": "Enable IAM User Permissions",
            "Effect": "Allow",
            "Principal": {"AWS": "arn:aws:iam::123456789012:root"},
            "Action": "kms:*",
            "Resource": "*"
        },
        {
            "Sid": "Allow Application to Use the Key",
            "Effect": "Allow",
            "Principal": {"AWS": "arn:aws:iam::123456789012:role/MyAppRole"},
            "Action": ["kms:Encrypt", "kms:Decrypt", "kms:GenerateDataKey*", "kms:DescribeKey"],
            "Resource": "*"
        }
    ]
}, indent=2)

WAF_RULE_JSON = json.dumps({
    "Name": "IPBlockAndRateLimit",
    "Priority": 1,
    "Action": {"Block": {}},
    "Statement": {
        "AndStatement": {
            "Statements": [
                {"IPSetReferenceStatement": {"ARN": "arn:aws:wafv2:us-east-1:123456789012:global/ipset/suspicious-ips/abcd1234"}},
                {"RateBasedStatement": {"Limit": 2000, "AggregateKeyType": "IP"}}
            ]
        }
    },
    "VisibilityConfig": {
        "SampledRequestsEnabled": True,
        "CloudWatchMetricsEnabled": True,
        "MetricName": "IPBlockAndRateLimit"
    }
}, indent=2)

REDSHIFT_CLUSTER_JSON = json.dumps({
    "ClusterIdentifier": "my-redshift-cluster",
    "NodeType": "dc2.large",
    "NumberOfNodes": 2,
    "ClusterType": "multi-node",
    "DBName": "dev",
    "MasterUsername": "awsuser",
    "MasterUserPassword": "MySecurePassword123!",
    "Port": 5439,
    "PubliclyAccessible": False,
    "VpcSecurityGroupIds": ["sg-0123456789abcdef0"],
    "ClusterSubnetGroupName": "my-subnet-group",
    "AvailabilityZone": "us-east-1a",
    "Encrypted": True,
    "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:alias/redshift-key",
    "EnhancedVpcRouting": True
}, indent=2)

GLUE_JOB_SCRIPT = '''import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job

args = getResolvedOptions(sys.argv, ["JOB_NAME"])
sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
job.init(args["JOB_NAME"], args)

dyf = glueContext.create_dynamic_frame.from_catalog(
    database="my_database",
    table_name="raw_sales",
    transformation_ctx="dyf",
)

mapped_dyf = ApplyMapping.apply(
    frame=dyf,
    mappings=[
        ("order_id", "string", "order_id", "string"),
        ("amount", "double", "amount", "double"),
        ("order_date", "string", "order_date", "date"),
    ],
    transformation_ctx="mapped_dyf",
)

glueContext.write_dynamic_frame.from_jdbc_conf(
    frame=mapped_dyf,
    catalog_connection="my-rds-connection",
    connection_options={"dbtable": "sales_analytics", "database": "analytics"},
    transformation_ctx="datasink",
)

job.commit()'''

ATHENA_QUERY = "SELECT order_date, product_category, SUM(amount) AS total_sales\nFROM s3_object_sales\nWHERE order_date >= DATE '2024-01-01'\nGROUP BY order_date, product_category\nORDER BY total_sales DESC\nLIMIT 100"

BEDROCK_PYTHON = '''import boto3

bedrock = boto3.client("bedrock-runtime", region_name="us-east-1")

prompt = """You are a helpful assistant. Answer the user's question based on the provided context.

Context: AWS Bedrock is a fully managed service that offers a choice of high-performing foundation models from leading AI companies.

Question: What is AWS Bedrock?
Answer:"""

response = bedrock.invoke_model(
    modelId="anthropic.claude-3-haiku-20240307-v1:0",
    contentType="application/json",
    accept="application/json",
    body=json.dumps({
        "anthropic_version": "anthropic_version",
        "max_tokens": 200,
        "messages": [
            {"role": "user", "content": prompt}
        ]
    })
)

result = json.loads(response["body"].read())
print(result["content"][0]["text"])'''

SAGEMAKER_MERMAID = """graph LR
    A[Prepare Data in S3] --> B[Create Training Job]
    B --> C[Train Model on SageMaker]
    C --> D[Evaluate Model]
    D --> E{Good Enough?}
    E -->|No| B
    E -->|Yes| F[Deploy to Endpoint]
    F --> G[Monitor with CloudWatch]
    G --> H[Collect Predictions]
    H --> I[Retrain with New Data]
    I --> B"""

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

GENERATIVE_AI_MERMAID = """graph LR
    A[User] --> B[API Gateway]
    B --> C[Lambda Function]
    C --> D[Amazon Bedrock]
    D --> E[Knowledge Base]
    E --> F[S3 Document Store]
    C --> G[Response to User]
    style D fill:#ff9900
    style E fill:#146eb4"""

# ============================================================
# MODULE 12 — Security Services
# ============================================================

m12_l1_blocks = [
    {"type": "paragraph", "data": {"text": "AWS Key Management Service (KMS) and AWS Secrets Manager are two complementary services for protecting data. KMS handles encryption keys, while Secrets Manager manages secrets like database passwords and API keys."}},
    {"type": "heading", "data": {"level": 2, "text": "AWS KMS Overview"}},
    {"type": "paragraph", "data": {"text": "KMS is a managed service that makes it easy for you to create and control the encryption keys used to encrypt your data. KMS is integrated with most other AWS services, so you can use it to encrypt data stored in S3, EBS, RDS, and more. KMS uses **envelope encryption** — a master key in KMS encrypts a data key, and the data key encrypts your actual data."}},
    {"type": "heading", "data": {"level": 2, "text": "Key Types"}},
    {"type": "bullet-list", "data": {"title": "KMS Key Types", "items": [
        "**Symmetric (AES-256)** — Same key used for encrypt and decrypt; most common",
        "**Asymmetric (RSA, ECC)** — Public key for encrypt, private key for decrypt; useful for sharing",
        "**AWS managed keys** — Created and managed by AWS services (e.g., aws/s3)",
        "**Customer managed keys** — Created and managed by you; full control over policies and rotation"
    ]}},
    {"type": "heading", "data": {"level": 2, "text": "Key Policies"}},
    {"type": "paragraph", "data": {"text": "Every KMS key has a **key policy** — a JSON document that defines who can use the key and what operations they can perform. Key policies are the primary way to control access to KMS keys, working alongside IAM policies."}},
    {"type": "example", "data": {"title": "KMS Key Policy JSON", "language": "json", "content": "A sample key policy that allows a specific IAM user to use the key:", "code": KMS_KEY_POLICY}},
    {"type": "heading", "data": {"level": 2, "text": "AWS Secrets Manager"}},
    {"type": "paragraph", "data": {"text": "Secrets Manager helps you protect access to your applications, services, and IT resources. It lets you store, retrieve, and rotate database credentials, API keys, and other secrets. Unlike Parameter Store, Secrets Manager is designed specifically for sensitive data and can automatically rotate secrets."}},
    {"type": "bullet-list", "data": {"title": "Secrets Manager Features", "items": [
        "Store secrets with encryption at rest",
        "Automatic rotation for supported AWS services (RDS, Redshift)",
        "Fine-grained access control via resource policies",
        "Cross-account access with resource sharing",
        "Built-in Lambda rotation functions"
    ]}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "KMS", "definition": "AWS service for creating and managing encryption keys."},
        {"term": "Customer managed key", "definition": "A KMS key that you create, own, and manage."},
        {"term": "Envelope encryption", "definition": "Encrypting data with a data key, then encrypting the data key with a master key."},
        {"term": "Key policy", "definition": "A JSON document attached to a KMS key that controls access."},
        {"term": "Secrets Manager", "definition": "AWS service for storing and rotating secrets like database credentials."},
        {"term": "Automatic rotation", "definition": "Secrets Manager automatically changing a secret on a schedule."}
    ]}},
    {"type": "callout", "data": {"variant": "tip", "title": "When to Use Secrets Manager vs. Parameter Store", "text": "Use **Secrets Manager** when you need automatic rotation or built-in cross-account access for sensitive data. Use **Parameter Store** (part of Systems Manager) for configuration data, non-sensitive parameters, and when you want a simpler, lower-cost solution."}},
    {"type": "exercise", "data": {"title": "Create a KMS Key and Encrypt a Secret", "description": "Create a customer-managed KMS key and use it to encrypt a secret in Secrets Manager.", "steps": [
        "Open the KMS console and create a symmetric key named 'MyAppKey'",
        "Copy the key ARN",
        "Open the Secrets Manager console and create a new secret",
        "Paste the key ARN as the encryption key",
        "Store a sample database password"
    ], "expectedOutcome": "You have a KMS key and an encrypted secret stored in Secrets Manager."}},
    {"type": "summary-box", "data": {"points": [
        "KMS manages encryption keys for AWS services and your applications",
        "Envelope encryption uses a master key to protect data keys",
        "Key policies control who can use each KMS key",
        "Secrets Manager stores and automatically rotates sensitive credentials"
    ], "takeaway": "Use KMS for encryption and Secrets Manager for sensitive credentials. Never hardcode secrets in your application code."}}
]
write_json(f"{BASE}/12-security-services/aws-kms-secrets-manager.json", lesson(
    "lesson-aws-aws-kms-secrets-manager", "aws-kms-secrets-manager", "12-security-services",
    "AWS KMS and Secrets Manager",
    "Encrypt data with KMS and manage secrets with Secrets Manager.",
    1, 15, ["aws", "security", "kms", "secrets-manager", "encryption", "secrets"],
    m12_l1_blocks
))

m12_l2_blocks = [
    {"type": "paragraph", "data": {"text": "AWS Systems Manager (SSM) is a suite of services that helps you manage your AWS resources at scale. It provides visibility and control over your infrastructure, automates operational tasks, and lets you securely access resources without opening inbound ports."}},
    {"type": "heading", "data": {"level": 2, "text": "Parameter Store"}},
    {"type": "paragraph", "data": {"text": "**Parameter Store** is a managed service for storing configuration data and secrets as key-value pairs. Parameters can be plain text or encrypted with KMS. Use it for database connection strings, AMI IDs, license codes, and other configuration values."}},
    {"type": "example", "data": {"title": "Store and Retrieve a Parameter via AWS CLI", "language": "bash", "content": "Store an encrypted database URL and retrieve it:", "code": "# Store an encrypted parameter\naws ssm put-parameter \\\n  --name \"/prod/db/connection-string\" \\\n  --value \"postgresql://admin:password@db.example.com:5432/mydb\" \\\n  --type \"SecureString\" \\\n  --key-id \"arn:aws:kms:us-east-1:123456789012:alias/MyAppKey\" \\\n  --description \"Production database connection string\"\n\n# Retrieve the parameter\naws ssm get-parameter \\\n  --name \"/prod/db/connection-string\" \\\n  --with-decryption"}},
    {"type": "heading", "data": {"level": 2, "text": "Session Manager"}},
    {"type": "paragraph", "data": {"text": "**Session Manager** lets you securely connect to EC2 instances without opening SSH ports or managing SSH keys. It uses IAM for access control, logs all sessions to CloudWatch Logs or S3, and supports port forwarding — making it a more secure alternative to traditional bastion hosts."}},
    {"type": "heading", "data": {"level": 2, "text": "Run Command and Patch Manager"}},
    {"type": "bullet-list", "data": {"title": "Systems Manager Capabilities", "items": [
        "**Run Command** — Execute commands on EC2 instances at scale without SSH",
        "**Patch Manager** — Automate OS patching across your EC2 fleet",
        "**Automation** — Run predefined or custom automation workflows",
        "**State Manager** — Enforce policies like ensuring an agent is installed on all instances",
        "**Distributor** — Package and deploy software to EC2 instances"
    ]}},
    {"type": "table", "data": {"headers": ["Feature", "Use Case", "Benefit"], "rows": [
        ["Parameter Store", "Store config and secrets", "Centralized, encrypted key-value store"],
        ["Session Manager", "Access EC2 instances", "No SSH keys or open ports needed"],
        ["Run Command", "Run commands at scale", "Remote management without SSH"],
        ["Patch Manager", "Patch EC2 instances", "Automated OS patching across fleet"],
        ["Automation", "Deploy standardized changes", "Reduced human error, faster deployments"],
        ["State Manager", "Enforce instance configuration", "Ensure compliance across fleet"]
    ]}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "Parameter Store", "definition": "An SSM feature for storing configuration data and secrets."},
        {"term": "Session Manager", "definition": "A managed SSM service for secure EC2 access without SSH."},
        {"term": "Run Command", "definition": "Execute commands on managed instances at scale."},
        {"term": "Patch Manager", "definition": "Automate operating system patching on EC2 instances."},
        {"term": "Automation", "definition": "Predefined workflows for common administrative tasks."},
        {"term": "State Manager", "definition": "Enforce policies and configurations across managed instances."}
    ]}},
    {"type": "faq-block", "data": {"items": [
        {"question": "Is Parameter Store free?", "answer": "Standard parameters are free. Advanced parameters with higher throughput and larger values incur charges."},
        {"question": "Does Session Manager require an agent?", "answer": "Yes, the SSM Agent must be installed on your instance. Most Amazon Linux and Windows AMIs include it by default."},
        {"question": "Can Session Manager access private subnets?", "answer": "Yes, instances only need outbound HTTPS access to the SSM endpoints; no inbound ports are required."}
    ]}},
    {"type": "summary-box", "data": {"points": [
        "Systems Manager provides a suite of tools for managing AWS resources",
        "Parameter Store is great for configuration and secrets",
        "Session Manager replaces SSH for secure EC2 access",
        "Run Command and Patch Manager automate common operational tasks"
    ], "takeaway": "Systems Manager reduces the operational overhead of managing EC2 fleets. Start by installing the SSM Agent and using Session Manager for access."}}
]
write_json(f"{BASE}/12-security-services/systems-manager.json", lesson(
    "lesson-aws-systems-manager", "systems-manager", "12-security-services",
    "AWS Systems Manager",
    "Learn to manage EC2 instances, store parameters, and automate operations with Systems Manager.",
    2, 15, ["aws", "security", "systems-manager", "parameter-store", "session-manager", "operations"],
    m12_l2_blocks
))

m12_l3_blocks = [
    {"type": "paragraph", "data": {"text": "AWS WAF (Web Application Firewall) and AWS Shield protect your web applications from common attacks and distributed denial-of-service (DDoS) attacks. WAF filters malicious requests at the application layer, while Shield provides DDoS protection at the network and transport layers."}},
    {"type": "heading", "data": {"level": 2, "text": "AWS WAF"}},
    {"type": "paragraph", "data": {"text": "AWS WAF lets you monitor HTTP and HTTPS requests that come to CloudFront distributions, API Gateway APIs, AppSync GraphQL APIs, and Application Load Balancers. You define **rules** that identify malicious requests and tell WAF what to do with them — allow, block, or count."}},
    {"type": "heading", "data": {"level": 2, "text": "WAF Web ACLs and Rules"}},
    {"type": "bullet-list", "data": {"title": "WAF Rule Types", "items": [
        "**IP set** — Allow or block requests from specific IP addresses or ranges",
        "**String match** — Match specific strings in headers, query strings, or body",
        "**SQL injection** — Block requests containing SQL injection patterns",
        "**Cross-site scripting (XSS)** — Block requests containing XSS patterns",
        "**Size constraint** — Block requests with unusually large components",
        "**Rate-based rule** — Block IPs that exceed a request threshold"
    ]}},
    {"type": "example", "data": {"title": "WAF Rule JSON for IP Filtering and Rate Limiting", "language": "json", "content": "A WAF rule that blocks requests from suspicious IPs and rate-limits all requests:", "code": WAF_RULE_JSON}},
    {"type": "heading", "data": {"level": 2, "text": "AWS Shield"}},
    {"type": "paragraph", "data": {"text": "**AWS Shield Standard** is automatically enabled for all AWS customers at no cost. It protects against common network and transport layer DDoS attacks. **AWS Shield Advanced** provides enhanced protection, cost protection, and access to the DDoS Response Team (DRT). Shield Advanced integrates with WAF and Route 53 for a comprehensive DDoS defense."}},
    {"type": "comparison-cards", "data": {"title": "Shield Standard vs. Shield Advanced", "cards": [
        {"title": "Shield Standard", "description": "Free, automatic protection for all AWS customers.", "pros": ["No cost", "Protects against common DDoS attacks", "Works with CloudFront, Route 53, and ALB"]},
        {"title": "Shield Advanced", "description": "Paid enhanced protection for critical applications.", "pros": ["Higher DDoS cost protection", "Access to DDoS Response Team", "24/7 support", "Global threat environment dashboard"]}
    ]}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "WAF", "definition": "AWS Web Application Firewall for filtering HTTP/HTTPS requests."},
        {"term": "Web ACL", "definition": "A collection of WAF rules applied to a resource."},
        {"term": "Rule", "definition": "A single condition or set of conditions that WAF checks against requests."},
        {"term": "Shield Standard", "definition": "Free automatic DDoS protection for all AWS accounts."},
        {"term": "Shield Advanced", "definition": "Paid enhanced DDoS protection with cost protection and DRT access."},
        {"term": "DDoS", "definition": "Distributed Denial of Service — overwhelming a service with traffic from many sources."}
    ]}},
    {"type": "callout", "data": {"variant": "warning", "text": "WAF protects against application-layer attacks (Layer 7). For network-layer DDoS protection, you need Shield Advanced. Use both for comprehensive protection."}},
    {"type": "summary-box", "data": {"points": [
        "WAF filters HTTP/HTTPS requests using rules for IP, patterns, and rate limits",
        "Web ACLs are collections of rules attached to CloudFront, API Gateway, or ALB",
        "Shield Standard provides free DDoS protection; Shield Advanced adds cost protection and DRT access",
        "Rate-based rules automatically block IPs that exceed request thresholds"
    ], "takeaway": "WAF and Shield work together to protect your applications. Start with WAF managed rule groups and Shield Standard, then evaluate Shield Advanced for critical workloads."}}
]
write_json(f"{BASE}/12-security-services/waf-shield.json", lesson(
    "lesson-aws-waf-shield", "waf-shield", "12-security-services",
    "AWS WAF and Shield",
    "Protect web applications with WAF rules and defend against DDoS attacks with AWS Shield.",
    3, 15, ["aws", "security", "waf", "shield", "ddos", "firewall"],
    m12_l3_blocks
))

m12_l4_blocks = [
    {"type": "paragraph", "data": {"text": "AWS provides several services for threat detection and compliance: GuardDuty for intelligent threat detection, Inspector for vulnerability scanning, Macie for sensitive data discovery, and Security Hub for centralized security findings."}},
    {"type": "heading", "data": {"level": 2, "text": "Amazon GuardDuty"}},
    {"type": "paragraph", "data": {"text": "GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior. It analyzes VPC Flow Logs, DNS logs, and CloudTrail events using machine learning and threat intelligence. GuardDuty produces **findings** that you can act on directly or send to Security Hub."}},
    {"type": "heading", "data": {"level": 2, "text": "Amazon Inspector"}},
    {"type": "paragraph", "data": {"text": "Inspector automatically scans EC2 instances and container images for vulnerabilities and unintended network exposure. It checks for known CVEs, insecure network configurations, and missing security patches. Inspector is integrated with Amazon ECR for container scanning at build time."}},
    {"type": "heading", "data": {"level": 2, "text": "Amazon Macie"}},
    {"type": "paragraph", "data": {"text": "Macie is a data security service that uses machine learning to discover sensitive data in S3 buckets. It can identify personally identifiable information (PII), financial data, and other sensitive content. Macie also alerts you when it detects unusual access patterns to sensitive data."}},
    {"type": "heading", "data": {"level": 2, "text": "AWS Security Hub"}},
    {"type": "paragraph", "data": {"text": "Security Hub provides a comprehensive view of your security posture across AWS accounts. It aggregates findings from GuardDuty, Inspector, Macie, and other AWS services, and also supports the AWS Foundational Security Best Practices and CIS AWS Foundations Benchmark standards."}},
    {"type": "comparison-cards", "data": {"title": "AWS Threat Detection Services", "cards": [
        {"title": "GuardDuty", "description": "Intelligent threat detection using ML and threat intelligence.", "pros": ["Continuous monitoring", "VPC Flow Logs + DNS + CloudTrail analysis", "Low false-positive rate", "Findings in Security Hub"]},
        {"title": "Inspector", "description": "Automated vulnerability scanning for EC2 and containers.", "pros": ["Automated scanning", "ECR integration for containers", "CVE detection", "Remediation recommendations"]},
        {"title": "Macie", "description": "ML-powered sensitive data discovery in S3.", "pros": ["PII detection", "S3-focused", "Anomaly detection", "Data risk scoring"]},
        {"title": "Security Hub", "description": "Centralized security findings and compliance standards.", "pros": ["Aggregates findings from all services", "Compliance standards (CIS, FSBP)", "Cross-account view", "Integrated with AWS Organizations"]}
    ]}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "GuardDuty", "definition": "A threat detection service that monitors for malicious activity using ML."},
        {"term": "Finding", "definition": "A detailed record of a potential security issue detected by a security service."},
        {"term": "Inspector", "definition": "A vulnerability scanning service for EC2 instances and container images."},
        {"term": "Macie", "definition": "A data security service that discovers sensitive data in S3 using ML."},
        {"term": "Security Hub", "definition": "A service that aggregates and prioritizes security findings across accounts."}
    ]}},
    {"type": "faq-block", "data": {"items": [
        {"question": "Do I need all four services?", "answer": "GuardDuty and Security Hub complement each other well. Inspector and Macie add value if you run containers or store sensitive data in S3. Start with GuardDuty and Security Hub for broad coverage."},
        {"question": "Does GuardDuty cost money?", "answer": "GuardDuty offers a 30-day free trial. After that, you pay based on the volume of CloudTrail events, DNS logs, and VPC Flow Logs analyzed."},
        {"question": "Can Security Hub aggregate findings from multiple accounts?", "answer": "Yes, with AWS Organizations, Security Hub can aggregate findings from all member accounts into an administrator account."}
    ]}},
    {"type": "summary-box", "data": {"points": [
        "GuardDuty detects threats using ML on VPC Flow Logs, DNS logs, and CloudTrail",
        "Inspector scans EC2 instances and containers for vulnerabilities",
        "Macie discovers sensitive data in S3 buckets",
        "Security Hub aggregates findings and checks compliance standards"
    ], "takeaway": "Enable GuardDuty and Security Hub in all your accounts. They provide broad threat detection and compliance visibility with minimal setup."}}
]
write_json(f"{BASE}/12-security-services/threat-detection-compliance.json", lesson(
    "lesson-aws-threat-detection-compliance", "threat-detection-compliance", "12-security-services",
    "Threat Detection and Compliance",
    "Detect threats with GuardDuty, scan vulnerabilities with Inspector, discover sensitive data with Macie, and centralize findings with Security Hub.",
    4, 15, ["aws", "security", "guardduty", "inspector", "macie", "security-hub", "compliance"],
    m12_l4_blocks
))

print("Module 12 lessons created.")
