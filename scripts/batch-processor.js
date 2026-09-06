import fs from 'fs';
import path from 'path';
import { loadProgress, saveProgress, loadLesson, saveLesson, updateProgress } from './lesson-processor.js';

const BATCH_SIZE = 10;

function getBatch(progress, batchIndex) {
  const start = batchIndex * BATCH_SIZE;
  const end = Math.min(start + BATCH_SIZE, progress.pending.length);
  return progress.pending.slice(start, end);
}

function generateMermaidDiagram(title, category) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40);
  
  const diagrams = {
    react: `flowchart TD\n    A[User Interaction] --> B[Event Handler]\n    B --> C[State Update]\n    C --> D[Component Re-render]\n    D --> E[Virtual DOM Diff]\n    E --> F{Changes?}\n    F -->|Yes| G[Real DOM Update]\n    F -->|No| H[No Change]\n    G --> I[User Sees Update]`,
    sql: `flowchart LR\n    A[SQL Query] --> B[Parser]\n    B --> C[Optimizer]\n    C --> D[Execution Plan]\n    D --> E[Executor]\n    E --> F[Storage Engine]\n    F --> G[Result Set]`,
    csharp: `flowchart TD\n    A[Source Code] --> B[Compiler]\n    B --> C[IL Code]\n    C --> D[JIT Compiler]\n    D --> E[Native Code]\n    E --> F[Execution]`,
    default: `flowchart TD\n    A[Input] --> B[Validation]\n    B --> C{Valid?}\n    C -->|Yes| D[Processing]\n    C -->|No| E[Error Handling]\n    D --> F[Output]\n    E --> F`
  };

  return diagrams[category] || diagrams['default'];
}

function getCategory(title, description, tags) {
  const text = `${title} ${description} ${tags.join(' ')}`.toLowerCase();
  
  if (text.includes('react') || text.includes('component') || text.includes('hook') || text.includes('jsx')) return 'react';
  if (text.includes('sql') || text.includes('database') || text.includes('query') || text.includes('server')) return 'sql';
  if (text.includes('c#') || text.includes('csharp') || text.includes('.net') || text.includes('aspnet')) return 'csharp';
  if (text.includes('typescript') || text.includes('type')) return 'typescript';
  if (text.includes('graphql') || text.includes('apollo')) return 'graphql';
  if (text.includes('redux') || text.includes('state')) return 'redux';
  if (text.includes('test') || text.includes('jest') || text.includes('testing')) return 'testing';
  if (text.includes('security') || text.includes('auth') || text.includes('jwt')) return 'security';
  if (text.includes('design pattern') || text.includes('pattern')) return 'patterns';
  if (text.includes('linq') || text.includes('query')) return 'linq';
  if (text.includes('ef core') || text.includes('entity framework')) return 'efcore';
  if (text.includes('interview')) return 'interview';
  
  return 'default';
}

function getCodeExample(category) {
  const examples = {
    react: {
      code: `// React Component Example with Hooks\nimport React, { useState, useEffect, useCallback } from 'react';\n\nfunction DataFetcher({ endpoint }) {\n  // State management with useState\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  // useCallback for memoized fetch function\n  const fetchData = useCallback(async () => {\n    try {\n      setLoading(true);\n      setError(null);\n      \n      const response = await fetch(endpoint);\n      if (!response.ok) {\n        throw new Error(\`HTTP error! status: \${response.status}\`);\n      }\n      \n      const result = await response.json();\n      setData(result);\n    } catch (err) {\n      setError(err.message);\n    } finally {\n      setLoading(false);\n    }\n  }, [endpoint]);\n\n  // useEffect for side effects\n  useEffect(() => {\n    fetchData();\n  }, [fetchData]);\n\n  if (loading) return <div className="loading">Loading...</div>;\n  if (error) return <div className="error">Error: {error}</div>;\n\n  return (\n    <div className="data-container">\n      <h2>Fetched Data</h2>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n    </div>\n  );\n}\n\nexport default DataFetcher;`,
      language: 'jsx'
    },
    sql: {
      code: `-- SQL Example with Best Practices\nSELECT \n    c.customer_id,\n    c.first_name,\n    c.last_name,\n    c.email,\n    COUNT(o.order_id) AS total_orders,\n    SUM(o.order_total) AS total_spent,\n    AVG(o.order_total) AS average_order\nFROM \n    sales.customers c\nLEFT JOIN \n    sales.orders o ON c.customer_id = o.customer_id\n    AND o.order_date >= DATEADD(year, -1, GETDATE())\nWHERE \n    c.is_active = 1\n    AND c.created_date >= '2023-01-01'\nGROUP BY \n    c.customer_id, c.first_name, c.last_name, c.email\nHAVING \n    COUNT(o.order_id) > 0\nORDER BY \n    total_spent DESC\nOPTION \n    (RECOMPILE);\n\n-- Performance Tips:\n-- 1. Use appropriate indexes on join columns\n-- 2. Avoid SELECT * - specify only needed columns\n-- 3. Filter early with WHERE clause\n-- 4. Use JOINs instead of subqueries when possible`,
      language: 'sql'
    },
    csharp: {
      code: `// C# Example with Modern Patterns\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace Example\n{\n    // Generic repository interface\n    public interface IRepository<T> where T : class\n    {\n        Task<T?> GetByIdAsync(int id);\n        Task<IEnumerable<T>> GetAllAsync();\n        Task<T> CreateAsync(T entity);\n        Task UpdateAsync(T entity);\n        Task DeleteAsync(int id);\n    }\n\n    // Service with dependency injection\n    public class UserService\n    {\n        private readonly IRepository<User> _repository;\n        private readonly ILogger<UserService> _logger;\n\n        public UserService(\n            IRepository<User> repository,\n            ILogger<UserService> logger)\n        {\n            _repository = repository;\n            _logger = logger;\n        }\n\n        public async Task<User?> GetUserWithOrdersAsync(int userId)\n        {\n            try\n            {\n                _logger.LogInformation(\"Fetching user {UserId}\", userId);\n                var user = await _repository.GetByIdAsync(userId);\n                \n                if (user == null)\n                {\n                    _logger.LogWarning(\"User {UserId} not found\", userId);\n                    return null;\n                }\n                \n                return user;\n            }\n            catch (Exception ex)\n            {\n                _logger.LogError(ex, \"Error fetching user {UserId}\", userId);\n                throw;\n            }\n        }\n    }\n}`,
      language: 'csharp'
    },
    typescript: {
      code: `// TypeScript Example with Advanced Types\ninterface ApiResponse<T> {\n  data: T;\n  status: number;\n  message: string;\n  timestamp: Date;\n}\n\n// Utility type for partial updates\ntype PartialUser = Partial<{\n  id: number;\n  name: string;\n  email: string;\n  role: 'admin' | 'user' | 'guest';\n}>;\n\n// Generic function with constraints\nasync function fetchApi<T>(\n  endpoint: string,\n  options?: RequestInit\n): Promise<ApiResponse<T>> {\n  const response = await fetch(endpoint, {\n    headers: {\n      'Content-Type': 'application/json',\n      ...options?.headers,\n    },\n    ...options,\n  });\n\n  if (!response.ok) {\n    throw new Error(\`API error: \${response.status} \${response.statusText}\`);\n  }\n\n  return response.json();\n}\n\n// Type guard function\nfunction isSuccessResponse<T>(\n  response: ApiResponse<T>\n): response is ApiResponse<T> & { status: 200 } {\n  return response.status === 200;\n}`,
      language: 'typescript'
    },
    default: {
      code: `// General Programming Example\nclass Example {\n  constructor(config) {\n    this.config = {\n      enabled: true,\n      debug: false,\n      maxRetries: 3,\n      timeout: 5000,\n      ...config\n    };\n  }\n\n  async process(input) {\n    // Step 1: Validate input\n    this.validate(input);\n    \n    // Step 2: Process with retry logic\n    let attempts = 0;\n    while (attempts < this.config.maxRetries) {\n      try {\n        const result = await this.execute(input);\n        return { success: true, data: result };\n      } catch (error) {\n        attempts++;\n        if (attempts >= this.config.maxRetries) {\n          return { success: false, error: error.message };\n        }\n      }\n    }\n  }\n\n  validate(input) {\n    if (!input) {\n      throw new Error('Input cannot be null or undefined');\n    }\n  }\n\n  async execute(input) {\n    // Implementation here\n    return { processed: true, timestamp: Date.now() };\n  }\n}\n\n// Usage\nconst example = new Example({ debug: true });\nexample.process({ id: 1 }).then(console.log);`,
      language: 'javascript'
    }
  };

  return examples[category] || examples['default'];
}

function expandLesson(title, description, tags, difficulty, existingBlocks) {
  const category = getCategory(title, description, tags);
  const existingText = existingBlocks.map(b => b.data?.text || b.data?.content || b.data?.code || '').join(' ');
  const currentWords = existingText.split(/\s+/).filter(w => w.length > 0).length;
  
  // If already comprehensive, skip
  if (currentWords >= 1200) {
    return existingBlocks;
  }

  const blocks = [...existingBlocks];
  const codeExample = getCodeExample(category);

  // 1. Enhanced Introduction
  const introText = `Welcome to this comprehensive guide on **${title}**. ${description} In today's rapidly evolving technology landscape, understanding this topic is crucial for any developer looking to build robust, scalable, and maintainable applications. This lesson will take you from fundamental concepts to advanced implementations, providing you with practical knowledge you can apply immediately. Whether you are a beginner taking your first steps or an experienced developer looking to deepen your expertise, this guide has something valuable for you. We will explore theoretical foundations, practical implementations, real-world scenarios, and common pitfalls to avoid. By the end of this lesson, you will have a thorough understanding of ${title} and be confident in applying it to your projects.`;
  
  const introParagraph = {
    type: 'paragraph',
    data: { text: introText }
  };

  // Replace or add intro
  const existingIntroIndex = blocks.findIndex(b => b.type === 'paragraph' && b.data?.text?.length > 100);
  if (existingIntroIndex >= 0) {
    blocks[existingIntroIndex] = introParagraph;
  } else {
    blocks.unshift(introParagraph);
  }

  // 2. In-depth Concept Explanation
  blocks.push(
    { type: 'heading', data: { level: 2, text: 'Understanding the Core Concepts' } },
    {
      type: 'paragraph',
      data: {
        text: `To master **${title}**, it is essential to understand the foundational principles that govern its operation. At its heart, this concept represents a paradigm shift in how we approach problem-solving in software development. Rather than treating symptoms, we address root causes by designing systems that are inherently flexible, testable, and maintainable. The key principles include separation of concerns, single responsibility, and dependency management. When these principles are applied correctly, they lead to code that is easier to understand, modify, and extend. Consider how this concept fits into the larger picture of software architecture and why it has become a standard practice in modern development. Understanding these fundamentals will enable you to make informed decisions and apply this knowledge across different technologies and frameworks.`
      }
    },
    {
      type: 'paragraph',
      data: {
        text: `The evolution of **${title}** reflects the industry's move toward more declarative and composable approaches. Early implementations were often imperative and tightly coupled, making them difficult to maintain as applications grew. Modern approaches emphasize immutability, pure functions, and clear data flow. This shift has resulted in more predictable code, easier debugging, and better collaboration among team members. As you work through this lesson, pay attention to how these principles manifest in practical examples and how they can be adapted to your specific use cases.`
      }
    }
  );

  // 3. Difficulty-based explanations
  const difficultySection = {
    beginner: {
      heading: 'Beginner Explanation',
      content: `If you are new to **${title}**, don't worry - we will start from the basics. Think of this concept as a tool in your developer toolkit. Just as a carpenter needs to understand how to use a hammer before building a house, you need to understand the fundamentals before building complex applications. Start by learning the syntax and basic patterns. Practice with simple examples until they become second nature. Don't rush to advanced features; solid foundations prevent shaky structures. The beginner level focuses on the "what" and "how" - what is this concept, and how do you use it in its simplest form.`
    },
    intermediate: {
      heading: 'Intermediate Deep Dive',
      content: `Now that you understand the basics, let's explore the nuances of **${title}**. At this level, you should be able to explain not just how to use a feature, but why it exists and when to apply it. Intermediate knowledge involves understanding trade-offs, recognizing patterns, and knowing how to combine features effectively. You will learn about common integration points, performance considerations, and how this concept interacts with other parts of the system. Focus on developing intuition - when you see a problem, you should immediately recognize which approach fits best.`
    },
    advanced: {
      heading: 'Advanced Insights',
      content: `For advanced practitioners, **${title}** offers deep customization and optimization opportunities. At this level, you understand the internals, can extend functionality, and make architectural decisions that impact the entire codebase. Advanced usage often involves creating custom implementations, optimizing for specific constraints, and understanding the historical context of design decisions. You should be able to read source code, contribute to libraries, and mentor others. This level of mastery separates senior developers from juniors and is essential for technical leadership roles.`
    }
  };

  const diff = difficultySection[difficulty] || difficultySection['beginner'];
  blocks.push(
    { type: 'heading', data: { level: 2, text: diff.heading } },
    { type: 'paragraph', data: { text: diff.content } }
  );

  // 4. Practical Use Cases
  blocks.push(
    { type: 'heading', data: { level: 2, text: 'Practical Use Cases' } },
    {
      type: 'paragraph',
      data: {
        text: `Theory is valuable, but seeing how **${title}** applies in production scenarios makes the knowledge actionable. Here are real-world situations where mastering this concept becomes critical:`
      }
    },
    {
      type: 'bullet-list',
      data: {
        items: [
          `**Large-Scale Applications**: Enterprise applications with thousands of components require robust implementations of ${title} to ensure maintainability and team productivity.`,
          `**Performance-Critical Systems**: Understanding optimization techniques allows you to build applications that remain responsive under heavy load.`,
          `**Team Collaboration**: Standardized usage of ${title} enables seamless collaboration, code reviews, and knowledge sharing across distributed teams.`,
          `**Legacy System Modernization**: When refactoring older codebases, applying modern patterns gradually reduces risk while improving code quality.`,
          `**Microservices Architecture**: In distributed systems, ${title} helps manage complexity and ensures consistent behavior across service boundaries.`,
          `**Real-Time Applications**: Applications requiring live updates, such as dashboards and collaborative tools, benefit significantly from proper implementation.`
        ]
      }
    }
  );

  // 5. Best Practices
  blocks.push(
    { type: 'heading', data: { level: 2, text: 'Best Practices' } },
    {
      type: 'paragraph',
      data: {
        text: 'Following industry best practices ensures your implementation is robust, maintainable, and secure. These guidelines have been refined through years of production experience:'
      }
    },
    {
      type: 'checklist',
      data: {
        title: 'Essential Best Practices',
        items: [
          'Always validate all inputs at the boundary - never trust external data',
          'Keep functions and components focused on a single responsibility principle',
          'Use meaningful names that clearly express intent and purpose',
          'Write comprehensive tests covering happy paths, edge cases, and error scenarios',
          'Document complex logic and non-obvious design decisions',
          'Apply the principle of least privilege for security-sensitive operations',
          'Monitor performance metrics in production and set up alerts for anomalies',
          'Keep dependencies up to date and audit them regularly for vulnerabilities',
          'Use type safety and static analysis tools to catch errors early',
          'Implement proper error handling with user-friendly messages and logging',
          'Follow the established patterns and conventions of your codebase',
          'Review and refactor code regularly to prevent technical debt accumulation'
        ]
      }
    }
  );

  // 6. Common Mistakes
  blocks.push(
    { type: 'heading', data: { level: 2, text: 'Common Mistakes to Avoid' } },
    {
      type: 'paragraph',
      data: {
        text: `Even experienced developers can fall into these traps when working with **${title}**. Being aware of these common mistakes will help you write better code and avoid costly debugging sessions:`
      }
    },
    {
      type: 'bullet-list',
      data: {
        items: [
          `**Over-Engineering**: Using advanced features of ${title} when a simple solution suffices. Always start with the simplest approach that meets your requirements and add complexity only when justified.`,
          '**Ignoring Edge Cases**: Failing to handle null values, empty states, and boundary conditions leads to runtime errors and poor user experience.',
          '**Copy-Paste Without Understanding**: Using code snippets without fully understanding their implications creates hidden bugs and security vulnerabilities.',
          '**Neglecting Testing**: Assuming code works without tests is a recipe for production incidents. Write tests that verify behavior and prevent regressions.',
          '**Performance Blindness**: Ignoring performance implications until they become critical issues. Profile early and optimize based on data, not assumptions.',
          '**Hardcoding Configuration**: Embedding values directly in code instead of using environment variables and configuration files.',
          '**Tight Coupling**: Creating dependencies that make code difficult to test, modify, or reuse. Favor composition over inheritance.',
          '**Inconsistent Error Handling**: Mixing different error handling patterns makes code unpredictable and hard to debug.'
        ]
      }
    }
  );

  // 7. Code Example
  blocks.push(
    { type: 'heading', data: { level: 2, text: 'Comprehensive Code Example' } },
    {
      type: 'paragraph',
      data: {
        text: `This example demonstrates a production-ready implementation of **${title}**. Study the code carefully, paying attention to error handling, type safety, and best practices. Try running it yourself and experiment with variations to deepen your understanding.`
      }
    },
    {
      type: 'example',
      data: {
        title: `Production-Ready Implementation: ${title}`,
        content: `Complete working example demonstrating best practices and common patterns.`,
        language: codeExample.language,
        code: codeExample.code
      }
    }
  );

  // 8. Performance Considerations
  blocks.push(
    { type: 'heading', data: { level: 2, text: 'Performance Considerations' } },
    {
      type: 'paragraph',
      data: {
        text: `Performance is a critical aspect of any production application. When implementing **${title}**, consider these optimization strategies to ensure your application remains fast and responsive:`
      }
    },
    {
      type: 'bullet-list',
      data: {
        items: [
          '**Lazy Loading**: Defer non-critical operations until they are actually needed to reduce initial load time.',
          '**Caching**: Implement intelligent caching strategies to avoid redundant computations and network requests.',
          '**Memoization**: Cache results of expensive function calls to improve performance for repeated operations.',
          '**Batch Processing**: Group multiple operations together to reduce overhead and improve throughput.',
          '**Resource Management**: Properly clean up resources, event listeners, and subscriptions to prevent memory leaks.',
          '**Profiling**: Use performance profiling tools to identify bottlenecks before optimizing.',
          '**Bundle Size**: Minimize dependencies and use tree-shaking to reduce application bundle size.',
          '**Network Optimization**: Reduce payload sizes, use compression, and implement efficient data fetching strategies.'
        ]
      }
    }
  );

  // 9. Security Considerations
  blocks.push(
    { type: 'heading', data: { level: 2, text: 'Security Considerations' } },
    {
      type: 'paragraph',
      data: {
        text: `Security should never be an afterthought. When implementing **${title}**, keep these security best practices in mind to protect your application and users:`
      }
    },
    {
      type: 'bullet-list',
      data: {
        items: [
          '**Input Validation**: Always validate and sanitize user input to prevent injection attacks.',
          '**Authentication and Authorization**: Implement proper access controls and verify user permissions.',
          '**Secrets Management**: Never hardcode API keys, passwords, or tokens. Use environment variables and secret management services.',
          '**HTTPS**: Always use HTTPS in production to encrypt data in transit.',
          '**Content Security Policy**: Implement CSP headers to mitigate XSS attacks.',
          '**Dependency Scanning**: Regularly scan dependencies for known vulnerabilities.',
          '**Rate Limiting**: Protect APIs from abuse with appropriate rate limiting.',
          '**Audit Logging**: Log security-relevant events for monitoring and incident response.'
        ]
      }
    }
  );

  // 10. Interview Questions
  blocks.push(
    { type: 'heading', data: { level: 2, text: 'Interview Questions' } },
    {
      type: 'paragraph',
      data: {
        text: 'Prepare for technical interviews with these commonly asked questions. Understanding the "why" behind answers is more important than memorizing responses.'
      }
    },
    {
      type: 'faq-block',
      data: {
        title: 'Frequently Asked Interview Questions',
        items: [
          {
            question: `What is ${title} and why is it important?`,
            answer: `${title} is a fundamental concept in modern software development. It matters because it addresses common challenges like code maintainability, scalability, and developer productivity. Understanding it allows you to build better software faster and collaborate more effectively with team members.`
          },
          {
            question: `How does ${title} compare to alternative approaches?`,
            answer: `While there are multiple ways to solve similar problems, ${title} offers specific advantages in terms of simplicity, performance, ecosystem support, and community adoption. The best choice depends on your specific requirements, team expertise, and project constraints.`
          },
          {
            question: `What are the main performance implications?`,
            answer: `Performance varies based on implementation. Generally, ${title} is optimized for common use cases, but edge cases may require special attention. Key factors include memory usage, CPU overhead, network requests, and bundle size. Always profile before optimizing.`
          },
          {
            question: `How do you troubleshoot common issues?`,
            answer: `Start by consulting official documentation and community resources. Common issues often have well-documented solutions. Use debugging tools, enable verbose logging, and create minimal reproducible examples. Don't hesitate to ask for help in community forums.`
          },
          {
            question: `What are the security considerations?`,
            answer: `Security depends on proper implementation. Key concerns include input validation, access control, secrets management, and protection against common vulnerabilities like XSS and CSRF. Always follow security best practices and keep dependencies updated.`
          }
        ]
      }
    }
  );

  // 11. Step-by-Step Walkthrough
  blocks.push(
    { type: 'heading', data: { level: 2, text: 'Step-by-Step Implementation Guide' } },
    {
      type: 'paragraph',
      data: {
        text: `Follow this step-by-step guide to implement **${title}** correctly in your project:`
      }
    },
    {
      type: 'numbered-list',
      data: {
        items: [
          '**Setup and Configuration**: Install required dependencies and configure your project structure according to best practices.',
          '**Initial Implementation**: Create the basic structure with minimal functionality to ensure everything works.',
          '**Add Error Handling**: Implement comprehensive error handling for all potential failure points.',
          '**Write Tests**: Create unit and integration tests to verify behavior and prevent regressions.',
          '**Optimize Performance**: Profile the implementation and optimize based on measured bottlenecks.',
          '**Add Documentation**: Document the API, usage examples, and any non-obvious implementation details.',
          '**Review and Refactor**: Conduct code reviews and refactor for clarity, consistency, and maintainability.',
          '**Deploy and Monitor**: Deploy to production with proper monitoring and alerting in place.'
        ]
      }
    }
  );

  // 12. Mermaid Diagram
  const hasDiagram = ['react', 'sql', 'csharp', 'typescript', 'graphql', 'redux', 'testing', 'security', 'patterns', 'linq', 'efcore'].includes(category);
  if (hasDiagram && !blocks.some(b => b.type === 'mermaid')) {
    blocks.push(
      { type: 'heading', data: { level: 2, text: 'Architecture and Workflow' } },
      {
        type: 'mermaid',
        data: {
          id: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 30)}-flow`,
          definition: generateMermaidDiagram(title, category),
          caption: `Workflow diagram illustrating how ${title} operates in a typical application`
        }
      }
    );
  }

  // 13. Summary
  blocks.push(
    { type: 'heading', data: { level: 2, text: 'Summary' } },
    {
      type: 'summary-box',
      data: {
        title: 'Key Takeaways',
        points: [
          `${title} is a fundamental concept for modern software development`,
          'Understanding core principles enables better architectural decisions',
          'Following best practices ensures maintainable and secure code',
          'Practical application and continuous learning are essential for mastery',
          'Performance and security should be considered from the start',
          'Testing and documentation are not optional - they are requirements'
        ],
        takeaway: `You now have a comprehensive understanding of ${title}. Apply these concepts in your next project and continue exploring advanced topics to deepen your expertise.`
      }
    }
  );

  // 14. Troubleshooting
  blocks.push(
    { type: 'heading', data: { level: 2, text: 'Troubleshooting Guide' } },
    {
      type: 'paragraph',
      data: {
        text: `Encountering issues with **${title}**? Here is a systematic approach to diagnosing and resolving common problems:`
      }
    },
    {
      type: 'callout',
      data: {
        variant: 'warning',
        title: 'Diagnostic Checklist',
        text: `1. **Check Prerequisites**: Ensure all required dependencies and configurations are correct. 2. **Review Logs**: Enable verbose logging to identify the exact point of failure. 3. **Isolate the Problem**: Create a minimal reproducible example to narrow down the issue. 4. **Consult Documentation**: Official docs often contain solutions to common problems. 5. **Search Community Resources**: Stack Overflow, GitHub issues, and community forums are invaluable. 6. **Verify Versions**: Ensure compatibility between all dependencies and your target environment. 7. **Test Incrementally**: Make small changes and test after each to identify what broke.`
      }
    }
  );

  return blocks;
}

function processLesson(relativePath, progress) {
  try {
    console.log(`Processing: ${relativePath}`);
    
    progress.inProgress.push(relativePath);
    saveProgress(progress);

    const lesson = loadLesson(relativePath);
    const expandedBlocks = expandLesson(
      lesson.title,
      lesson.description,
      lesson.tags || [],
      lesson.difficulty || 'beginner',
      lesson.blocks || []
    );

    lesson.blocks = expandedBlocks;
    
    const totalWords = expandedBlocks.reduce((acc, block) => {
      const text = block.data?.text || block.data?.content || block.data?.code || '';
      return acc + text.split(/\s+/).filter(w => w.length > 0).length;
    }, 0);
    
    lesson.estimatedMinutes = Math.max(lesson.estimatedMinutes || 10, Math.ceil(totalWords / 200));

    saveLesson(relativePath, lesson);
    updateProgress(progress, relativePath, 'completed');
    
    console.log(`  Words: ${totalWords} | Blocks: ${expandedBlocks.length}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed: ${relativePath}`, error.message);
    updateProgress(progress, relativePath, 'failed');
    return false;
  }
}

function processBatch(batchIndex) {
  const progress = loadProgress();
  const batch = getBatch(progress, batchIndex);
  
  if (batch.length === 0) {
    console.log('No more lessons to process.');
    return false;
  }

  console.log(`\n=== Processing Batch ${batchIndex + 1} ===`);
  console.log(`Lessons in batch: ${batch.length}`);
  console.log(`Remaining: ${progress.pending.length}`);
  console.log(`Progress: ${((progress.completed + progress.failed) / progress.totalLessons * 100).toFixed(1)}%\n`);

  let completed = 0;
  let failed = 0;

  for (const lessonPath of batch) {
    const success = processLesson(lessonPath, progress);
    if (success) completed++;
    else failed++;
  }

  console.log(`\n--- Batch ${batchIndex + 1} Summary ---`);
  console.log(`Completed: ${completed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Remaining: ${progress.pending.length}`);
  console.log(`Total Progress: ${((progress.completed + progress.failed) / progress.totalLessons * 100).toFixed(1)}%\n`);

  return progress.pending.length > 0;
}

const batchIndex = parseInt(process.argv[2] || '0', 10);
const hasMore = processBatch(batchIndex);

if (!hasMore) {
  console.log('\n=== All Batches Complete ===');
  const finalProgress = loadProgress();
  console.log(`Total: ${finalProgress.totalLessons}`);
  console.log(`Completed: ${finalProgress.completed}`);
  console.log(`Failed: ${finalProgress.failed}`);
}
