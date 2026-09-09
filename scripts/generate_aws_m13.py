#!/usr/bin/env python3
"""Generate AWS course lessons for modules 13-15."""

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

# ============================================================
# MODULE 13 — Analytics & Big Data
# ============================================================

m13_l1_blocks = [
    {"type": "paragraph", "data": {"text": "Amazon Redshift is a fully managed data warehouse service that makes it simple and cost-effective to analyze large datasets using standard SQL. It uses columnar storage and massively parallel processing (MPP) to deliver fast query performance on datasets ranging from gigabytes to petabytes."}},
    {"type": "heading", "data": {"level": 2, "text": "Redshift Architecture"}},
    {"type": "paragraph", "data": {"text": "A Redshift **cluster** consists of a leader node and one or more compute nodes. The leader node receives queries from client applications, parses them, and develops an execution plan. It then coordinates the parallel execution of the plan across the compute nodes, which store data and perform queries."}},
    {"type": "heading", "data": {"level": 2, "text": "Data Loading and Querying"}},
    {"type": "bullet-list", "data": {"title": "Redshift Data Loading Options", "items": [
        "**COPY command** — Load data from S3, DynamoDB, or EMR into Redshift (fastest method)",
        "**INSERT statements** — Insert individual rows (slow for large datasets)",
        "**AWS Glue integration** — Use Glue ETL jobs to transform and load data"
    ]}},
    {"type": "example", "data": {"title": "Redshift Cluster Configuration JSON", "language": "json", "content": "Create a Redshift cluster using the AWS CLI:", "code": REDSHIFT_CLUSTER_JSON}},
    {"type": "heading", "data": {"level": 2, "text": "Redshift Spectrum and Serverless"}},
    {"type": "paragraph", "data": {"text": "**Redshift Spectrum** lets you query data directly in S3 without loading it into Redshift tables. It uses the same SQL syntax and works with your existing Redshift cluster. **Redshift Serverless** automatically provisions and scales compute resources based on your workload — you don't need to manage clusters."}},
    {"type": "heading", "data": {"level": 2, "text": "Concurrency Scaling"}},
    {"type": "paragraph", "data": {"text": "Concurrency Scaling automatically adds transient compute clusters to handle spikes in query volume. When you enable it, Redshift routes queries to a concurrency scaling cluster when the main cluster's queues are full. This ensures consistent performance during peak times without manual intervention."}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "Data warehouse", "definition": "A central repository for structured data used for reporting and analytics."},
        {"term": "Leader node", "definition": "The node that receives and parses queries and coordinates compute nodes."},
        {"term": "Compute node", "definition": "A node that stores data and executes query fragments in parallel."},
        {"term": "Columnar storage", "definition": "Data is stored by column rather than by row, improving query performance for analytics."},
        {"term": "Redshift Spectrum", "definition": "Query data in S3 without loading it into Redshift tables."},
        {"term": "Concurrency scaling", "definition": "Automatically add compute clusters to handle query spikes."}
    ]}},
    {"type": "callout", "data": {"variant": "tip", "title": "Pro Tip: Use the COPY Command", "text": "Always use the **COPY command** to load data into Redshift. It loads data in parallel across all compute nodes, making it orders of magnitude faster than individual INSERT statements."}},
    {"type": "summary-box", "data": {"points": [
        "Redshift is a managed data warehouse optimized for analytics",
        "Clusters use MPP with a leader node and compute nodes",
        "Redshift Spectrum queries data in S3 without loading it",
        "Redshift Serverless automatically scales for your workload"
    ], "takeaway": "Redshift excels at analyzing large datasets with SQL. Start with a small cluster, use the COPY command for loading, and consider Serverless for variable workloads."}}
]
write_json(f"{BASE}/13-analytics-big-data/amazon-redshift.json", lesson(
    "lesson-aws-amazon-redshift", "amazon-redshift", "13-analytics-big-data",
    "Amazon Redshift",
    "Learn data warehousing concepts, cluster management, and data loading with Amazon Redshift.",
    1, 15, ["aws", "analytics", "redshift", "data-warehouse", "sql", "big-data"],
    m13_l1_blocks
))

m13_l2_blocks = [
    {"type": "paragraph", "data": {"text": "AWS Glue is a fully managed ETL (Extract, Transform, Load) service that makes it easy to prepare and load data for analytics. Glue automatically discovers your data, stores metadata in a central catalog, and generates ETL code so you can focus on your data, not the infrastructure."}},
    {"type": "heading", "data": {"level": 2, "text": "Glue Crawlers and Data Catalog"}},
    {"type": "paragraph", "data": {"text": "A **Glue crawler** connects to your data store (S3, RDS, DynamoDB, etc.), progresses through a prioritized list of classifiers to determine the schema for your data, and then populates the **Glue Data Catalog** with metadata. The Data Catalog is a persistent metadata store — like a data dictionary — that makes your data searchable and queryable."}},
    {"type": "heading", "data": {"level": 2, "text": "ETL Jobs"}},
    {"type": "paragraph", "data": {"text": "Glue ETL jobs transform and move data between data stores. Jobs can be written in Python or Scala using Apache Spark. Glue Studio provides a visual interface for creating ETL jobs without writing code. Jobs can be triggered on a schedule, on demand, or by events."}},
    {"type": "example", "data": {"title": "AWS Glue ETL Job Script (Python/Spark)", "language": "python", "content": "A Glue job that reads from S3 and writes to RDS:", "code": GLUE_JOB_SCRIPT}},
    {"type": "heading", "data": {"level": 2, "text": "Job Bookmarks and Triggers"}},
    {"type": "bullet-list", "data": {"title": "Glue Features", "items": [
        "**Job bookmarks** — Track processed data so you only process new or changed data on subsequent runs",
        "**Triggers** — Start jobs on a schedule, on demand, or when another job completes",
        "**Glue Studio** — Visual ETL editor for building jobs without code",
        "**Glue DataBrew** — Visual data preparation tool for cleaning and normalizing data",
        "**Glue Schema Registry** — Manage and validate Avro schemas for streaming data"
    ]}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "ETL", "definition": "Extract, Transform, Load — the process of moving data from sources to destinations."},
        {"term": "Crawler", "definition": "A Glue component that scans data stores and infers schemas."},
        {"term": "Data Catalog", "definition": "A central metadata repository for all your data assets."},
        {"term": "Job bookmark", "definition": "A Glue feature that tracks processed data to avoid reprocessing."},
        {"term": "Trigger", "definition": "An event that starts a Glue job — on a schedule, on demand, or on completion of another job."},
        {"term": "Glue Studio", "definition": "A visual interface for creating ETL jobs in Glue."}
    ]}},
    {"type": "faq-block", "data": {"items": [
        {"question": "Does Glue use Spark?", "answer": "Yes, Glue ETL jobs run on Apache Spark. Glue handles the Spark infrastructure for you, so you don't need to manage Spark clusters."},
        {"question": "What is a Glue job's runtime?", "answer": "Glue jobs run in a serverless Spark environment. You only pay for the compute resources consumed during the job run."},
        {"question": "Can Glue read from any data source?", "answer": "Glue supports S3, RDS, DynamoDB, Redshift, and many third-party databases via JDBC connectors."}
    ]}},
    {"type": "summary-box", "data": {"points": [
        "Glue crawlers automatically discover and catalog your data schemas",
        "The Data Catalog provides a unified view of all your data",
        "ETL jobs transform and load data using serverless Spark",
        "Job bookmarks and triggers automate incremental processing"
    ], "takeaway": "Glue removes the operational burden of ETL. Start with a crawler to catalog your data, then build ETL jobs to transform and move it."}}
]
write_json(f"{BASE}/13-analytics-big-data/aws-glue-etl.json", lesson(
    "lesson-aws-aws-glue-etl", "aws-glue-etl", "13-analytics-big-data",
    "AWS Glue and ETL",
    "Build ETL pipelines with Glue crawlers, Data Catalog, and serverless Spark jobs.",
    2, 15, ["aws", "analytics", "glue", "etl", "spark", "data-catalog"],
    m13_l2_blocks
))

m13_l3_blocks = [
    {"type": "paragraph", "data": {"text": "Amazon Athena and Amazon EMR are two services for processing and analyzing large datasets. Athena is a serverless query engine for analyzing data in S3 with standard SQL. EMR provides managed Hadoop and Spark clusters for big data processing at scale."}},
    {"type": "heading", "data": {"level": 2, "text": "Amazon Athena"}},
    {"type": "paragraph", "data": {"text": "Athena is a serverless interactive query service that lets you analyze data in S3 using standard SQL. You don't need to set up or manage any infrastructure — just point Athena at your data in S3, define a schema (or let Glue catalog it), and start querying. Athena is based on Presto and supports CSV, JSON, Parquet, ORC, and other formats."}},
    {"type": "example", "data": {"title": "Athena SQL Query", "language": "sql", "content": "Query S3 data using Athena to find top-selling product categories:", "code": ATHENA_QUERY}},
    {"type": "heading", "data": {"level": 2, "text": "Partitions and Formats"}},
    {"type": "bullet-list", "data": {"title": "Optimizing Athena Performance", "items": [
        "**Partition your data** — Organize S3 data into folders by date or category for faster queries",
        "**Use columnar formats** — Parquet and ORC are much faster than CSV or JSON",
        "**Compress your data** — Snappy or gzip compression reduces storage and query time",
        "**Use the Glue Data Catalog** — Athena can use Glue's centralized metadata for schema management"
    ]}},
    {"type": "heading", "data": {"level": 2, "text": "Amazon EMR"}},
    {"type": "paragraph", "data": {"text": "Amazon EMR (Elastic MapReduce) provides a managed Hadoop and Spark framework that makes it easy to process vast amounts of data across dynamically scalable EC2 instances. EMR clusters can include Hadoop, Spark, Hive, Presto, HBase, and other big data frameworks. You can use EMR for log processing, ETL, machine learning, and real-time streaming."}},
    {"type": "heading", "data": {"level": 2, "text": "When to Use Athena vs. EMR"}},
    {"type": "comparison-cards", "data": {"title": "Athena vs. EMR", "cards": [
        {"title": "Athena", "description": "Serverless SQL queries on S3 data.", "pros": ["No infrastructure to manage", "Pay per query", "Standard SQL", "Great for ad-hoc analysis"], "cons": ["Not suited for complex transformations", "Limited to SQL logic"]},
        {"title": "EMR", "description": "Managed big data clusters with Hadoop and Spark.", "pros": ["Full Spark/Hadoop power", "Complex ETL pipelines", "Custom frameworks", "Machine learning at scale"], "cons": ["Requires cluster management", "Higher cost for small workloads"]}
    ]}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "Athena", "definition": "Serverless SQL query service for data stored in S3."},
        {"term": "EMR", "definition": "Managed Hadoop and Spark cluster service for big data processing."},
        {"term": "Presto", "definition": "A distributed SQL query engine that powers Athena."},
        {"term": "Partition", "definition": "Dividing data into separate directories by a column value for faster queries."},
        {"term": "Parquet", "definition": "A columnar storage format that provides efficient compression and encoding."},
        {"term": "Serverless", "definition": "A cloud model where the provider automatically manages infrastructure."}
    ]}},
    {"type": "summary-box", "data": {"points": [
        "Athena lets you query S3 data with SQL without managing servers",
        "Partitioning and columnar formats dramatically improve query performance",
        "EMR provides managed Hadoop and Spark for complex big data processing",
        "Use Athena for ad-hoc queries and EMR for production big data pipelines"
    ], "takeaway": "Start with Athena for simple SQL queries on S3. Move to EMR when you need the power of Spark or Hadoop for complex data transformations."}}
]
write_json(f"{BASE}/13-analytics-big-data/athena-emr.json", lesson(
    "lesson-aws-athena-emr", "athena-emr", "13-analytics-big-data",
    "Amazon Athena and EMR",
    "Query S3 data with Athena and process big data with EMR Hadoop and Spark clusters.",
    3, 15, ["aws", "analytics", "athena", "emr", "spark", "big-data", "sql"],
    m13_l3_blocks
))

m13_l4_blocks = [
    {"type": "paragraph", "data": {"text": "Amazon OpenSearch (formerly Elasticsearch) and Amazon QuickSight are AWS services for search, log analytics, and business intelligence. OpenSearch provides a managed search and analytics engine, while QuickSight is a cloud-native business intelligence service for creating dashboards and visualizations."}},
    {"type": "heading", "data": {"level": 2, "text": "Amazon OpenSearch"}},
    {"type": "paragraph", "data": {"text": "OpenSearch is a managed search and analytics engine based on Elasticsearch and Kibana. Use it for application search, log analytics, and real-time monitoring. It supports full-text search, structured search, and time-series data. OpenSearch is often used as a backend for application search features or as a centralized logging solution alongside CloudWatch Logs."}},
    {"type": "heading", "data": {"level": 2, "text": "Amazon QuickSight"}},
    {"type": "paragraph", "data": {"text": "QuickSight is a cloud-native BI service that lets you create dashboards and visualizations from multiple data sources, including S3, RDS, Redshift, Athena, and OpenSearch. QuickSight uses **SPICE** (Super-fast, Parallel, In-memory Calculation Engine) to deliver fast, interactive queries without waiting for the underlying data source."}},
    {"type": "heading", "data": {"level": 2, "text": "Building Analytics Dashboards"}},
    {"type": "bullet-list", "data": {"title": "OpenSearch + QuickSight Workflow", "items": [
        "Ingest log data into OpenSearch using Kinesis Data Firehose or Logstash",
        "Create index patterns and visualizations in OpenSearch Dashboards",
        "Connect QuickSight to OpenSearch for business-level dashboards",
        "Use SPICE in QuickSight for fast, interactive visualizations",
        "Share dashboards with your team or embed them in applications"
    ]}},
    {"type": "comparison-cards", "data": {"title": "OpenSearch vs. QuickSight", "cards": [
        {"title": "OpenSearch", "description": "Search and analytics engine for application search and log analytics.", "pros": ["Full-text search", "Real-time log analytics", "Flexible data ingestion", "Open-source compatible"]},
        {"title": "QuickSight", "description": "Cloud BI service for dashboards and visualizations.", "pros": ["Easy dashboard creation", "SPICE for fast queries", "Multiple data sources", "Embeddable in applications"]}
    ]}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "OpenSearch", "definition": "A managed search and analytics engine based on Elasticsearch."},
        {"term": "QuickSight", "definition": "A cloud-native BI service for creating dashboards and visualizations."},
        {"term": "SPICE", "definition": "QuickSight's in-memory calculation engine for fast, interactive queries."},
        {"term": "Index", "definition": "A collection of documents in OpenSearch that share similar characteristics."},
        {"term": "Ingestion", "definition": "The process of importing data into a data store."},
        {"term": "Dashboard", "definition": "A visual display of key metrics and data for monitoring and decision-making."}
    ]}},
    {"type": "callout", "data": {"variant": "tip", "title": "Common Pattern: OpenSearch for Logs, QuickSight for Business Metrics", "text": "Use **OpenSearch** when you need full-text search, log analytics, or application search. Use **QuickSight** when you need business dashboards, KPIs, and visualizations from structured data sources."}},
    {"type": "exercise", "data": {"title": "Create a QuickSight Dashboard from Athena Data", "description": "Connect QuickSight to an Athena database and create a simple dashboard with a bar chart and a KPI.", "steps": [
        "Open the QuickSight console",
        "Go to Datasets and create a new dataset from Athena",
        "Select an Athena database and table",
        "Choose the SPICE engine for fast queries",
        "Create a bar chart showing data grouped by a dimension"
    ], "expectedOutcome": "You have a QuickSight dashboard connected to data in S3 via Athena."}},
    {"type": "summary-box", "data": {"points": [
        "OpenSearch is ideal for application search, log analytics, and real-time monitoring",
        "QuickSight provides easy dashboard creation with SPICE for fast performance",
        "Both services integrate well with the rest of the AWS analytics stack",
        "Use OpenSearch for raw search and QuickSight for business insights"
    ], "takeaway": "OpenSearch and QuickSight complement each other. OpenSearch is your search and log analytics engine; QuickSight is your BI dashboarding tool."}}
]
write_json(f"{BASE}/13-analytics-big-data/opensearch-quicksight.json", lesson(
    "lesson-aws-opensearch-quicksight", "opensearch-quicksight", "13-analytics-big-data",
    "OpenSearch and QuickSight",
    "Build search engines with OpenSearch and business dashboards with QuickSight.",
    4, 15, ["aws", "analytics", "opensearch", "quicksight", "search", "bi", "visualization"],
    m13_l4_blocks
))

print("Module 13 lessons created.")
