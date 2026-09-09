#!/usr/bin/env python3
"""Generate AWS course lessons for modules 14-15."""

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

BEDROCK_PYTHON = '''import boto3
import json

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
    I --> B
    style C fill:#ff9900
    style F fill:#146eb4"""

AI_SERVICES_TABLE = [
    ["Rekognition", "Image and video analysis", "Object detection, face analysis, content moderation"],
    ["Textract", "Document text extraction", "Extract text and data from scanned documents"],
    ["Comprehend", "Natural language processing", "Sentiment analysis, entity recognition, topic modeling"],
    ["Transcribe", "Speech-to-text", "Convert audio to text, supports real-time streaming"],
    ["Polly", "Text-to-speech", "Convert text to lifelike speech in multiple languages"],
    ["Translate", "Language translation", "Translate text between 75+ languages"]
]

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
# MODULE 14 — AI & Machine Learning
# ============================================================

m14_l1_blocks = [
    {"type": "paragraph", "data": {"text": "Amazon Bedrock is a fully managed service that provides access to foundation models (FMs) from leading AI companies through a single API. With Bedrock, you can build generative AI applications without managing any infrastructure. It supports models from Anthropic (Claude), AI21 Labs, Cohere, Meta (Llama), Mistral AI, and Amazon's own Titan models."}},
    {"type": "heading", "data": {"level": 2, "text": "Foundation Models and Model Selection"}},
    {"type": "paragraph", "data": {"text": "Foundation models are large language models (LLMs) pre-trained on vast amounts of data. Bedrock lets you choose from different models based on your needs: **Claude** excels at complex reasoning and long documents; **Titan** is Amazon's versatile model; **Llama** is Meta's open-weight model. You select a model by its model ID in the API call."}},
    {"type": "heading", "data": {"level": 2, "text": "Prompt Engineering"}},
    {"type": "bullet-list", "data": {"title": "Prompt Engineering Best Practices", "items": [
        "Be specific and provide context — tell the model exactly what you want",
        "Use few-shot examples — show the model 2-3 examples of the desired output format",
        "Assign a role — start with 'You are an expert customer support agent...'",
        "Break complex tasks into steps — ask the model to reason through problems",
        "Control output length — set max_tokens to limit response length"
    ]}},
    {"type": "example", "data": {"title": "Call Amazon Bedrock with Python/Boto3", "language": "python", "content": "Use Boto3 to invoke a foundation model:", "code": BEDROCK_PYTHON}},
    {"type": "heading", "data": {"level": 2, "text": "Knowledge Bases and RAG"}},
    {"type": "paragraph", "data": {"text": "**Retrieval Augmented Generation (RAG)** combines the power of foundation models with your own data. Bedrock **Knowledge Bases** automatically retrieves data from your S3 documents and includes it in the prompt sent to the model. This lets you build question-answering systems that reference your company's documentation without fine-tuning a model."}},
    {"type": "heading", "data": {"level": 2, "text": "Agents and Guardrails"}},
    {"type": "bullet-list", "data": {"title": "Bedrock Capabilities", "items": [
        "**Agents** — Automate tasks by connecting models to APIs, data sources, and company systems",
        "**Guardrails** — Apply filters to block harmful content, protect PII, and enforce topic restrictions",
        "**Model Evaluation** — Evaluate model performance with built-in metrics for accuracy and safety",
        "**Custom Models** — Fine-tune models on your own dataset for domain-specific tasks"
    ]}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "Foundation model", "definition": "A large AI model pre-trained on vast amounts of data, capable of performing many tasks."},
        {"term": "Bedrock", "definition": "AWS service providing access to foundation models through a single API."},
        {"term": "Prompt engineering", "definition": "The practice of designing input prompts to get better outputs from AI models."},
        {"term": "RAG", "definition": "Retrieval Augmented Generation — enhancing model responses with retrieved documents."},
        {"term": "Knowledge Base", "definition": "A Bedrock feature that connects models to your own data in S3."},
        {"term": "Guardrail", "definition": "Filters that protect against harmful model outputs and protect sensitive data."}
    ]}},
    {"type": "callout", "data": {"variant": "tip", "title": "Start with Prompt Engineering", "text": "Before fine-tuning models or building complex RAG systems, master **prompt engineering**. Simple prompt changes often produce dramatically better results and cost far less than fine-tuning."}},
    {"type": "summary-box", "data": {"points": [
        "Bedrock provides access to multiple foundation models through a single API",
        "Prompt engineering is the fastest way to improve model outputs",
        "Knowledge Bases enable RAG by connecting models to your data in S3",
        "Guardrails and Agents help build safe, useful AI applications"
    ], "takeaway": "Bedrock makes generative AI accessible. Start with simple API calls, experiment with prompts, then add RAG and Agents as your use case demands."}}
]
write_json(f"{BASE}/14-ai-machine-learning/amazon-bedrock.json", lesson(
    "lesson-aws-amazon-bedrock", "amazon-bedrock", "14-ai-machine-learning",
    "Amazon Bedrock",
    "Use foundation models, prompt engineering, Knowledge Bases, and Agents through Amazon Bedrock.",
    1, 15, ["aws", "ai", "bedrock", "llm", "generative-ai", "rag", "prompt-engineering"],
    m14_l1_blocks
))

m14_l2_blocks = [
    {"type": "paragraph", "data": {"text": "Amazon SageMaker is a fully managed machine learning service that helps you build, train, and deploy ML models at scale. It provides an integrated development environment (SageMaker Studio) for the entire ML workflow — from data labeling and model building to training, tuning, and production deployment."}},
    {"type": "heading", "data": {"level": 2, "text": "SageMaker Studio and ML Workflow"}},
    {"type": "paragraph", "data": {"text": "SageMaker Studio is a web-based IDE for ML. It provides notebooks, a model registry, experiment tracking, and deployment pipelines all in one place. The typical SageMaker workflow is: prepare data → train model → evaluate → tune hyperparameters → deploy to endpoint → monitor in production."}},
    {"type": "mermaid", "data": {"id": "sagemaker-workflow", "caption": "The Amazon SageMaker machine learning workflow", "definition": SAGEMAKER_MERMAID}},
    {"type": "heading", "data": {"level": 2, "text": "Training Jobs and Automatic Model Tuning"}},
    {"type": "paragraph", "data": {"text": "SageMaker **training jobs** run on dedicated ML instances. You specify the algorithm, data location, and instance type, and SageMaker handles the provisioning, scaling, and cleanup. **Automatic model tuning** (hyperparameter optimization) runs multiple training jobs with different hyperparameter combinations to find the best model."}},
    {"type": "heading", "data": {"level": 2, "text": "Endpoints and Model Monitoring"}},
    {"type": "bullet-list", "data": {"title": "SageMaker Deployment Options", "items": [
        "**Real-time endpoints** — Host models for low-latency inference via HTTPS API",
        "**Batch transform** — Run inference on large datasets offline without a persistent endpoint",
        "**Serverless inference** — Pay per request, with automatic scaling to zero when idle",
        "**Automatic model monitoring** — Detect data drift and model quality degradation in production"
    ]}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "SageMaker Studio", "definition": "A web-based IDE for the entire machine learning workflow."},
        {"term": "Training job", "definition": "A SageMaker process that trains an ML model on your dataset."},
        {"term": "Hyperparameter", "definition": "A configuration parameter set before training (e.g., learning rate, batch size)."},
        {"term": "Endpoint", "definition": "A hosted model that accepts inference requests over HTTPS."},
        {"term": "Batch transform", "definition": "Run inference on a batch of data without a persistent endpoint."},
        {"term": "Model monitoring", "definition": "Tracking model performance and data drift after deployment."}
    ]}},
    {"type": "faq-block", "data": {"items": [
        {"question": "Do I need ML expertise to use SageMaker?", "answer": "SageMaker has built-in algorithms and pre-trained models that you can use without deep ML expertise. As you grow, you can bring your own algorithms and models."},
        {"question": "How much does SageMaker cost?", "answer": "You pay for the ML instances used during training and inference, plus storage. Use spot instances for training to reduce costs by up to 90%."},
        {"question": "Can I deploy models as serverless?", "answer": "Yes, SageMaker Serverless Inference lets you deploy models without managing instances. It scales automatically and you only pay for the compute used to process requests."}
    ]}},
    {"type": "summary-box", "data": {"points": [
        "SageMaker Studio provides an end-to-end ML development environment",
        "Training jobs and automatic tuning handle the heavy lifting of model training",
        "Endpoints, batch transform, and serverless inference offer flexible deployment options",
        "Model monitoring ensures deployed models stay accurate over time"
    ], "takeaway": "SageMaker removes infrastructure complexity from ML. Start with a built-in algorithm, then customize as your needs grow."}}
]
write_json(f"{BASE}/14-ai-machine-learning/amazon-sagemaker.json", lesson(
    "lesson-aws-amazon-sagemaker", "amazon-sagemaker", "14-ai-machine-learning",
    "Amazon SageMaker",
    "Build, train, and deploy machine learning models with SageMaker Studio and managed training jobs.",
    2, 15, ["aws", "ai", "sagemaker", "machine-learning", "ml", "training", "deployment"],
    m14_l2_blocks
))

m14_l3_blocks = [
    {"type": "paragraph", "data": {"text": "Beyond Bedrock and SageMaker, AWS offers a portfolio of purpose-built AI services for common use cases. These services let you add intelligence to your applications without needing to train or manage machine learning models yourself."}},
    {"type": "heading", "data": {"level": 2, "text": "AWS AI Services"}},
    {"type": "table", "data": {"headers": ["Service", "Category", "What It Does"], "rows": AI_SERVICES_TABLE}},
    {"type": "heading", "data": {"level": 2, "text": "Using Pre-built AI Services"}},
    {"type": "paragraph", "data": {"text": "Each AWS AI service is designed to solve a specific problem with a simple API call. You send input (an image, audio file, or text) and receive structured output (labels, transcript, sentiment scores). This is called **managed AI** or **AI as a Service** — the model is already trained and hosted by AWS."}},
    {"type": "bullet-list", "data": {"title": "Common AI Service Patterns", "items": [
        "**Rekognition + S3** — Trigger analysis when an image is uploaded to S3 using Lambda",
        "**Textract + DynamoDB** — Extract data from invoices and store structured data in DynamoDB",
        "**Comprehend + EventBridge** — Analyze customer feedback and route urgent issues",
        "**Transcribe + S3** — Convert meeting recordings to searchable text for compliance",
        " **Polly + CloudFront** — Generate audio versions of articles for accessibility"
    ]}},
    {"type": "callout", "data": {"variant": "info", "title": "AI Services are Serverless", "text": "All AWS AI services are fully managed and serverless. You pay only for the API calls you make, and AWS handles the infrastructure, scaling, and model updates."}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "Rekognition", "definition": "AWS service for image and video analysis."},
        {"term": "Textract", "definition": "AWS service for extracting text and data from scanned documents."},
        {"term": "Comprehend", "definition": "AWS NLP service for sentiment analysis and entity recognition."},
        {"term": "Transcribe", "definition": "AWS service for converting speech to text."},
        {"term": "Polly", "definition": "AWS service for converting text to lifelike speech."},
        {"term": "Translate", "definition": "AWS service for translating text between languages."}
    ]}},
    {"type": "faq-block", "data": {"items": [
        {"question": "Do I need ML expertise to use these services?", "answer": "No. These services provide pre-trained models accessible through simple APIs. No ML expertise is required."},
        {"question": "Are these services HIPAA eligible?", "answer": "Some AI services are HIPAA eligible. Check the AWS documentation for the latest eligibility status for each service."},
        {"question": "Can I customize the models?", "answer": "Some services (like Comprehend and Transcribe) support custom models. Check the service documentation for customization options."}
    ]}},
    {"type": "summary-box", "data": {"points": [
        "AWS AI services provide pre-built intelligence for vision, speech, and language tasks",
        "These are serverless APIs — no ML expertise or infrastructure needed",
        "Common patterns include S3 triggers with Lambda for automated processing",
        "Start with a single service, then combine them for more complex workflows"
    ], "takeaway": "AWS AI services let you add intelligence to your applications quickly. Start with one service that solves a real problem you have."}}
]
write_json(f"{BASE}/14-ai-machine-learning/aws-ai-services.json", lesson(
    "lesson-aws-aws-ai-services", "aws-ai-services", "14-ai-machine-learning",
    "AWS AI Services",
    "Use pre-built AI services for image analysis, document extraction, NLP, speech, and translation.",
    3, 15, ["aws", "ai", "rekognition", "textract", "comprehend", "transcribe", "polly", "translate"],
    m14_l3_blocks
))

m14_l4_blocks = [
    {"type": "paragraph", "data": {"text": "Generative AI architecture on AWS combines several services to build intelligent applications. A typical architecture uses API Gateway and Lambda to expose the AI functionality, Amazon Bedrock for foundation model access, a Knowledge Base for retrieval augmented generation, and S3 for document storage."}},
    {"type": "mermaid", "data": {"id": "generative-ai-architecture", "caption": "Serverless generative AI architecture with Bedrock and Knowledge Base", "definition": GENERATIVE_AI_MERMAID}},
    {"type": "heading", "data": {"level": 2, "text": "Prompt Engineering Best Practices"}},
    {"type": "bullet-list", "data": {"title": "Responsible AI Guidelines", "items": [
        "**Provide context** — Give the model the information it needs to give a good answer",
        "**Be specific** — Instead of 'write something about AWS', say 'write a 100-word summary of S3 for beginners'",
        "**Use system prompts** — Set the model's behavior with a system prompt before the user message",
        "**Validate outputs** — Always review AI-generated content before using it in production",
        "**Monitor for drift** — Model behavior can change over time; track outputs and user feedback"
    ]}},
    {"type": "heading", "data": {"level": 2, "text": "Responsible AI"}},
    {"type": "paragraph", "data": {"text": "**Responsible AI** means building AI systems that are fair, transparent, accountable, and respectful of user privacy. On AWS, use Bedrock Guardrails to filter harmful content, enable CloudWatch Logs for model inputs and outputs, and implement human review workflows for sensitive use cases."}},
    {"type": "key-terms", "data": {"terms": [
        {"term": "Knowledge Base", "definition": "A Bedrock feature that retrieves documents from S3 and provides context for RAG."},
        {"term": "RAG", "definition": "Retrieval Augmented Generation — combining retrieved documents with model responses."},
        {"term": "System prompt", "definition": "A prompt that sets the model's behavior and personality before the conversation."},
        {"term": "Guardrail", "definition": "Filters applied to model inputs and outputs to enforce content policies."},
        {"term": "Responsible AI", "definition": "Building AI systems that are ethical, transparent, and accountable."},
        {"term": "Hallucination", "definition": "When an AI model generates false or misleading information confidently."}
    ]}},
    {"type": "callout", "data": {"variant": "warning", "text": "Foundation models can produce **hallucinations** — confident but incorrect statements. Always validate AI outputs, especially when they affect decisions or are shown directly to users."}},
    {"type": "exercise", "data": {"title": "Design a RAG Architecture", "description": "Sketch the architecture for a customer support chatbot that uses Bedrock and a Knowledge Base of product documentation stored in S3.", "steps": [
        "Identify the data source (S3 bucket with PDFs)",
        "Create a Bedrock Knowledge Base connected to the S3 bucket",
        "Design a Lambda function that calls Bedrock with the Knowledge Base",
        "Expose the Lambda through API Gateway",
        "Consider how to handle user authentication"
    ], "expectedOutcome": "You have a clear architecture diagram and understanding of how Bedrock and Knowledge Bases work together."}},
    {"type": "summary-box", "data": {"points": [
        "A typical generative AI architecture uses API Gateway, Lambda, Bedrock, and Knowledge Base",
        "Prompt engineering is the most impactful skill for getting good AI outputs",
        "Guardrails protect against harmful content and hallucinations",
        "Responsible AI means validating outputs and monitoring for issues"
    ], "takeaway": "Generative AI on AWS is accessible through Bedrock. Focus on prompt engineering and RAG before considering fine-tuning."}}
]
write_json(f"{BASE}/14-ai-machine-learning/generative-ai-architecture.json", lesson(
    "lesson-aws-generative-ai-architecture", "generative-ai-architecture", "14-ai-machine-learning",
    "Generative AI Architecture",
    "Design serverless generative AI applications with API Gateway, Lambda, Bedrock, and Knowledge Base.",
    4, 15, ["aws", "ai", "bedrock", "generative-ai", "rag", "architecture", "responsible-ai"],
    m14_l4_blocks
))

print("Module 14 lessons created.")
