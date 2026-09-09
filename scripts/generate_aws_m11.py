#!/usr/bin/env python3
"""Generate AWS course lessons for modules 11-15."""

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

# ============================================================
# MODULE 11 — Monitoring, Logging & Observability
# ============================================================

m11_l1_blocks = [
    {"type": "paragraph", "data": {"text": "Amazon CloudWatch is AWS's monitoring and observability service. It collects metrics, logs, and events from your AWS resources and on-premises servers so you can monitor your applications, respond to system-wide performance changes, and optimize resource utilization."}},
    {"type": "heading", "data": {"level": 2, "text": "What CloudWatch Does"}},
    {"type": "bullet-list", "data": {"title": "CloudWatch Capabilities", "items": [
        "**Metrics** — numerical data about your resources (CPU usage, request count, latency)",
        "**Logs** — collect and search application and system log files",
        "**Alarms** — automatically notify you or take action when a metric crosses a threshold",
        "**Dashboards** — create custom visualizations of your metrics",
        "**Synthetics** — run canary tests to monitor endpoints",
        "**ServiceLens** — connect metrics, logs, and traces for service-level views"
    ]}},
    {"type": "heading", "data": {"level": 2, "text": "Metrics, Namespaces, and Dimensions"}},
    {"type": "paragraph", "data": {"text": "A **metric** is a time-ordered set of data points. Metrics belong to a **namespace** (like AWS/EC2) and are identified by **dimensions** (key-value pairs like InstanceId=i-12345). CloudWatch stores metrics for 15 months with decreasing resolution over time."}},
    {"type": "example", "data": {"title": "Create a CloudWatch Alarm via AWS CLI", "language": "bash", "content": "Create an alarm that triggers when average CPU exceeds 70% for 5 minutes:", "code": "aws cloudwatch put-metric-alarm \\\n  --alarm-name HighCPU-Alarm \\\n  --alarm-description \"Alarm when CPU exceeds 70%\" \\\n  --metric-name CPUUtilization \\\n  --namespace AWS/EC2 \\\n  --statistic Average \\\n  --period 300 \\\n  --threshold 70 \\\n  --comparison-operator GreaterThanThreshold \\\n  --dimensions Name=InstanceId,Value=i-0123456789abcdef0 \\\n  --evaluation-periods 1 \\\n  --alarm-actions arn:aws:sns:us-east-1:123456789012:MyTopic"}},
    {"type": "heading", "data": {"level": 2, "text": "CloudWatch Logs"}},
    {"type": "paragraph", "data": {"text": "CloudWatch Logs stores log data in **log groups**. A log group is a collection of log streams, and each log stream represents a sequence of log events from the same source. You can set retention policies, export logs to S3, and search logs with CloudWatch Logs Insights."}},
    {"type": "example", "data": {"title": "Create a Log Group with 30-Day Retention", "language": "bash", "content": "Set up a log group that keeps logs for 30 days:", "code": "aws logs create-log-group --log-group-name /aws/lambda/my-function\naws logs put-retention-policy --log-group-name /aws/lambda/my-function --retention-in-days 30"}},
    {"type": "heading", "data": {"level": 2, "text": "CloudWatch Agent"}},
    {"type": "paragraph", "data": {"text": "The CloudWatch Agent runs on your servers (EC2, on-premises) and collects both metrics and logs. It can gather system-level metrics like memory, disk, and CPU that are not available by default. You configure it with a JSON configuration file."}},
    {"type": "heading", "data": {"level": 2, "text": "CloudWatch Dashboards"}},
    {"type": "paragraph", "data": {"text": "Dashboards let you create customizable home pages for your metrics. You can add widgets showing line charts, number displays, logs, and text. Dashboards are great for operations teams who need a single view of application health."}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "Metric", "definition": "A time-ordered set of data points published to CloudWatch."},
        {"term": "Namespace", "definition": "A container for CloudWatch metrics (e.g., AWS/EC2, AWS/Lambda)."},
        {"term": "Dimension", "definition": "A name-value pair that uniquely identifies a metric."},
        {"term": "Alarm", "definition": "An action triggered when a metric crosses a threshold for a specified duration."},
        {"term": "Log Group", "definition": "A collection of log streams that share the same retention and access settings."},
        {"term": "CloudWatch Agent", "definition": "Software that collects metrics and logs from EC2 instances and on-premises servers."}
    ]}},
    {"type": "exercise", "data": {"title": "Create a CloudWatch Dashboard", "description": "Go to the CloudWatch console and create a dashboard named 'MyApp-Monitoring'. Add widgets showing CPU utilization for an EC2 instance and a custom metric of your choice.", "steps": [
        "Open the CloudWatch console",
        "Choose Dashboards and click Create dashboard",
        "Name it 'MyApp-Monitoring'",
        "Add a line widget for EC2 CPUUtilization",
        "Add a number widget for NetworkIn"
    ], "expectedOutcome": "You should have a dashboard with at least two widgets showing EC2 metrics."}},
    {"type": "summary-box", "data": {"points": [
        "CloudWatch collects metrics, logs, and events from AWS resources",
        "Alarms automatically notify you when something needs attention",
        "Dashboards give you a visual overview of your environment",
        "The CloudWatch Agent extends visibility to system-level metrics on servers"
    ], "takeaway": "CloudWatch is the foundation of AWS observability. Start by enabling detailed monitoring on key resources and setting up alarms for critical metrics."}}
]
write_json(f"{BASE}/11-monitoring-logging-observability/amazon-cloudwatch.json", lesson(
    "lesson-aws-amazon-cloudwatch", "amazon-cloudwatch", "11-monitoring-logging-observability",
    "Amazon CloudWatch",
    "Learn to collect metrics, set up alarms, analyze logs, and build dashboards with CloudWatch.",
    1, 15, ["aws", "monitoring", "cloudwatch", "metrics", "alarms", "dashboards", "logging"],
    m11_l1_blocks
))

m11_l2_blocks = [
    {"type": "paragraph", "data": {"text": "AWS CloudTrail is a service that enables governance, compliance, and operational auditing of your AWS account. It records every API call made in your account — who made it, when, from which IP address, and what the request was."}},
    {"type": "heading", "data": {"level": 2, "text": "How CloudTrail Works"}},
    {"type": "paragraph", "data": {"text": "CloudTrail events are delivered to an S3 bucket you specify. Each event includes the identity of the API caller, the time of the call, the request parameters, and the response elements returned by AWS. This makes CloudTrail invaluable for security analysis, resource change tracking, and compliance auditing."}},
    {"type": "heading", "data": {"level": 2, "text": "Event Types"}},
    {"type": "bullet-list", "data": {"title": "CloudTrail Event Types", "items": [
        "**Management events** — Operations performed on resources in your AWS account (default, free)",
        "**Data events** — Object-level operations on S3 objects and Lambda function invocations (paid)",
        "**Insights events** — Unusual activity in your account detected by CloudTrail Insights"
    ]}},
    {"type": "heading", "data": {"level": 2, "text": "Trails"}},
    {"type": "paragraph", "data": {"text": "A **trail** configures CloudTrail to deliver events to a specific S3 bucket. You can have up to five trails per region. Trails can be configured to log events across all regions or a single region. For organizations using AWS Organizations, you can create an **organization trail** that applies to all accounts in the organization."}},
    {"type": "example", "data": {"title": "CloudTrail Trail Configuration JSON", "language": "json", "content": "Configuration for a trail that logs management events to S3:", "code": "{\n  \"name\": \"my-org-trail\",\n  \"s3BucketName\": \"my-cloudtrail-logs-bucket\",\n  \"snsTopicName\": \"my-cloudtrail-topic\",\n  \"snsTopicARN\": \"arn:aws:sns:us-east-1:123456789012:my-cloudtrail-topic\",\n  \"includeGlobalServiceEvents\": true,\n  \"isMultiRegionTrail\": true,\n  \"enableLogFileValidation\": true,\n  \"isOrganizationTrail\": false,\n  \"eventSelectors\": [\n    {\n      \"readWriteType\": \"All\",\n      \"includeManagementEvents\": true,\n      \"dataResources\": []\n    }\n  ]\n}"}},
    {"type": "heading", "data": {"level": 2, "text": "Log File Validation"}},
    {"type": "paragraph", "data": {"text": "CloudTrail can validate log files using SHA-256 hashing and digital signatures. When you enable log file validation, CloudTrail creates a digest file every hour. You can use this to verify that log files have not been tampered with since they were delivered to your S3 bucket."}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "Event", "definition": "A record of an activity in an AWS account, including the API request and response."},
        {"term": "Trail", "definition": "A configuration that enables CloudTrail to deliver events to an S3 bucket."},
        {"term": "Management event", "definition": "An event that describes management operations on AWS resources."},
        {"term": "Data event", "definition": "An event that describes object-level operations on S3 objects or Lambda invocations."},
        {"term": "Log file validation", "definition": "A feature that creates digest files to verify CloudTrail log integrity."}
    ]}},
    {"type": "faq-block", "data": {"items": [
        {"question": "Is CloudTrail enabled by default?", "answer": "Yes, CloudTrail is enabled by default for management events in each region, delivering events to an S3 bucket if you have configured one."},
        {"question": "Does CloudTrail cost money?", "answer": "Management events are free. Data events and Insights events incur charges."},
        {"question": "Can CloudTrail log cross-region events?", "answer": "Yes, when you create a multi-region trail, events from all regions are delivered to the S3 bucket."}
    ]}},
    {"type": "summary-box", "data": {"points": [
        "CloudTrail records every API call in your AWS account",
        "Trails deliver events to S3 buckets you control",
        "Organization trails cover all accounts in an AWS Organization",
        "Log file validation lets you verify log integrity"
    ], "takeaway": "CloudTrail is essential for security, compliance, and troubleshooting. Always enable it with log file validation."}}
]
write_json(f"{BASE}/11-monitoring-logging-observability/aws-cloudtrail.json", lesson(
    "lesson-aws-aws-cloudtrail", "aws-cloudtrail", "11-monitoring-logging-observability",
    "AWS CloudTrail",
    "Learn to audit API calls, configure trails, and validate log files with CloudTrail.",
    2, 15, ["aws", "monitoring", "cloudtrail", "audit", "logging", "compliance"],
    m11_l2_blocks
))

mermaid_xray = (
    "sequenceDiagram\n"
    "    participant User\n"
    "    participant API as API Gateway\n"
    "    participant Lambda\n"
    "    participant DynamoDB\n"
    "    participant S3\n"
    "    User->>API: Request\n"
    "    API->>Lambda: Invoke\n"
    "    Lambda->>DynamoDB: Query item\n"
    "    Lambda->>S3: Read file\n"
    "    Lambda-->>API: Response\n"
    "    API-->>User: Response\n"
    "    Note over Lambda,DynamoDB: X-Ray segments & subsegments\n"
    "    Note over API,Lambda: Trace ID shared across calls"
)
m11_l3_blocks = [
    {"type": "paragraph", "data": {"text": "AWS X-Ray helps you analyze and debug distributed applications. It provides an end-to-end view of requests as they travel through your application, showing you a map of your application's underlying components and identifying performance bottlenecks."}},
    {"type": "heading", "data": {"level": 2, "text": "Core Concepts"}},
    {"type": "bullet-list", "data": {"title": "X-Ray Concepts", "items": [
        "**Segment** — An X-Ray document that describes the work done by a single component (e.g., an EC2 instance or Lambda function)",
        "**Subsegment** — A finer-grained breakdown of a segment (e.g., a database call within a function)",
        "**Trace** — A set of segments that work together to handle a single request",
        "**Service graph** — A JSON document that models your application as a graph of services connected by edges",
        "**Annotation** — Key-value pairs used to index traces and filter them in the console",
        "**Sampling** — The process of recording a subset of requests to reduce cost and data volume"
    ]}},
    {"type": "heading", "data": {"level": 2, "text": "How Tracing Works"}},
    {"type": "paragraph", "data": {"text": "When you instrument your application with the X-Ray SDK, it creates segments for each service. Each segment contains subsegments for downstream calls. X-Ray aggregates this data into a **trace**, which you can view in the X-Ray console as a timeline or service map."}},
    {"type": "mermaid", "data": {"id": "xray-trace-diagram", "caption": "How a distributed trace flows through services", "definition": mermaid_xray}},
    {"type": "heading", "data": {"level": 2, "text": "Sampling Rules"}},
    {"type": "paragraph", "data": {"text": "Not every request needs to be traced. **Sampling** lets you control how many requests X-Ray records. You can configure rules based on URL, service name, or host. The default rule traces one request per second and 5% of additional requests — a good balance for most applications."}},
    {"type": "callout", "data": {"variant": "tip", "title": "Pro Tip: Annotations vs. Metadata", "text": "Use **annotations** for data you want to index and filter on (strings, numbers, booleans). Use **metadata** for additional context that does not need indexing (arbitrary objects)."}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "Segment", "definition": "A representation of work done by a service or resource in your application."},
        {"term": "Subsegment", "definition": "A more granular unit of work within a segment, typically a downstream call."},
        {"term": "Trace", "definition": "A collection of segments that together represent an end-to-end request."},
        {"term": "Service map", "definition": "A visual representation of the services that handled a request."},
        {"term": "Sampling", "definition": "Recording a subset of requests to reduce trace data volume."}
    ]}},
    {"type": "exercise", "data": {"title": "Enable X-Ray on a Lambda Function", "description": "Enable active tracing on an existing Lambda function and view its first trace in the X-Ray console.", "steps": [
        "Open the Lambda console and select your function",
        "Go to the Configuration tab and choose Monitoring and operations tools",
        "Select X-Ray and enable Active tracing",
        "Invoke the function a few times",
        "Open the X-Ray console and find your trace"
    ], "expectedOutcome": "You should see a service map and trace timeline in the X-Ray console."}},
    {"type": "summary-box", "data": {"points": [
        "X-Ray traces requests across distributed services",
        "Segments and subsegments represent work done by components",
        "Service maps visualize your application architecture",
        "Sampling controls the volume of traced requests"
    ], "takeaway": "X-Ray is essential for debugging distributed applications. Start by enabling it on one service and expand from there."}}
]
write_json(f"{BASE}/11-monitoring-logging-observability/aws-x-ray.json", lesson(
    "lesson-aws-aws-x-ray", "aws-x-ray", "11-monitoring-logging-observability",
    "AWS X-Ray",
    "Learn distributed tracing, service maps, and request analysis with AWS X-Ray.",
    3, 15, ["aws", "monitoring", "x-ray", "tracing", "distributed-systems", "debugging"],
    m11_l3_blocks
))

dashboard_json = json.dumps({
    "widgets": [
        {
            "type": "metric",
            "properties": {
                "metrics": [
                    ["AWS/ApplicationELB", "RequestCount", "LoadBalancer", "app/my-alb/12345"],
                    [".", "TargetResponseTime", ".", "."]
                ],
                "period": 60,
                "stat": "Sum",
                "region": "us-east-1",
                "title": "ALB Request Count & Latency"
            }
        },
        {
            "type": "metric",
            "properties": {
                "metrics": [
                    ["AWS/ECS", "CPUUtilization", "ServiceName", "my-service", "ClusterName", "my-cluster"]
                ],
                "period": 60,
                "stat": "Average",
                "region": "us-east-1",
                "title": "ECS CPU Utilization"
            }
        },
        {
            "type": "metric",
            "properties": {
                "metrics": [
                    ["AWS/RDS", "CPUUtilization", "DBInstanceIdentifier", "my-db"]
                ],
                "period": 60,
                "stat": "Average",
                "region": "us-east-1",
                "title": "RDS CPU Utilization"
            }
        }
    ]
}, indent=2)

m11_l4_blocks = [
    {"type": "paragraph", "data": {"text": "Observability architecture means designing your AWS environment so you can understand its internal state from external outputs. A good observability strategy covers metrics, logs, traces, and health — not just for individual services, but for the entire request path."}},
    {"type": "heading", "data": {"level": 2, "text": "Monitoring a Web Application Stack"}},
    {"type": "paragraph", "data": {"text": "Consider a typical architecture: an Application Load Balancer (ALB) distributes traffic to ECS containers running a web API, which reads from an RDS database. Each layer produces different signals you should collect."}},
    {"type": "bullet-list", "data": {"title": "What to Monitor at Each Layer", "items": [
        "**ALB** — Request count, latency, 4xx/5xx error rates, target health",
        "**ECS** — CPU and memory utilization, task count, deployment status",
        "**RDS** — CPU, connections, read/write latency, storage, freeable memory"
    ]}},
    {"type": "heading", "data": {"level": 2, "text": "Serverless Observability"}},
    {"type": "paragraph", "data": {"text": "For a serverless stack (API Gateway → Lambda → DynamoDB), monitoring focuses on different metrics: API Gateway gives you integration latency and cache hit/miss; Lambda reports duration, errors, throttles, and iterator age; DynamoDB shows read/write capacity and throttled requests."}},
    {"type": "heading", "data": {"level": 2, "text": "AWS Health Dashboard"}},
    {"type": "paragraph", "data": {"text": "The **AWS Health Dashboard** provides information about AWS service health and your own account. It shows scheduled maintenance, service disruptions, and issues that might affect your resources. For business-critical workloads, consider the **AWS Health API** to programmatically receive notifications."}},
    {"type": "heading", "data": {"level": 2, "text": "Operational Excellence"}},
    {"type": "paragraph", "data": {"text": "The AWS Well-Architected Framework's **Operational Excellence pillar** emphasizes observability. Key practices include: monitoring with CloudWatch, logging with CloudWatch Logs, tracing with X-Ray, and responding to events with EventBridge. Automate responses where possible using CloudWatch Alarms and EventBridge rules."}},
    {"type": "example", "data": {"title": "CloudWatch Dashboard JSON Definition", "language": "json", "content": "A JSON definition for a dashboard monitoring ALB, ECS, and RDS:", "code": dashboard_json}},
    {"type": "callout", "data": {"variant": "important", "text": "Don't monitor just one layer — look at the entire request path. An ALB might be healthy while Lambda is failing silently. Correlate metrics across services using trace IDs and log correlation."}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "Observability", "definition": "The ability to understand the internal state of a system from its external outputs."},
        {"term": "Service map", "definition": "A visual representation of services and their relationships in X-Ray."},
        {"term": "AWS Health Dashboard", "definition": "AWS service providing information about service health and account-specific issues."},
        {"term": "Operational Excellence", "definition": "A Well-Architected pillar focused on running and monitoring systems to deliver value."},
        {"term": "Correlation", "definition": "Linking related signals (logs, metrics, traces) using shared identifiers like trace IDs."}
    ]}},
    {"type": "exercise", "data": {"title": "Build a Multi-Service Dashboard", "description": "Create a CloudWatch dashboard that shows ALB request count, ECS CPU utilization, and RDS connections side by side.", "steps": [
        "Open the CloudWatch console and create a new dashboard",
        "Add a line widget for ALB RequestCount",
        "Add a line widget for ECS CPUUtilization",
        "Add a line widget for RDS DatabaseConnections",
        "Set the time range to 1 hour"
    ], "expectedOutcome": "You have a dashboard showing health across three different services."}},
    {"type": "summary-box", "data": {"points": [
        "Good observability covers metrics, logs, traces, and health across all layers",
        "ALB to ECS to RDS and API Gateway to Lambda to DynamoDB are common patterns to monitor",
        "AWS Health Dashboard informs you about AWS service issues",
        "Operational Excellence means automating where possible and correlating signals"
    ], "takeaway": "Design your monitoring from the start. Observability is not an afterthought — it is how you know your system is working."}}
]
write_json(f"{BASE}/11-monitoring-logging-observability/observability-architecture.json", lesson(
    "lesson-aws-observability-architecture", "observability-architecture", "11-monitoring-logging-observability",
    "Observability Architecture",
    "Design end-to-end monitoring for ALB, ECS, Lambda, and RDS using CloudWatch and X-Ray.",
    4, 15, ["aws", "monitoring", "cloudwatch", "x-ray", "observability", "architecture"],
    m11_l4_blocks
))

print("Module 11 lessons created.")
