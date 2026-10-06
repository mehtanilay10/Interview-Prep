const fs = require('fs');
const path = require('path');

const BASE = 'D:/GitHub/Interview-Prep/content/courses/message-queues-event-streaming';

function writeJSON(dir, name, data) {
  const dirPath = path.join(BASE, dir);
  fs.mkdirSync(dirPath, { recursive: true });
  const filePath = path.join(dirPath, name);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
}

// ─── Module definitions ───
const moduleDefs = [
  { slug: 'message-queue-fundamentals', id: 'mod-mqes-01', title: 'Message Queue Fundamentals', description: 'Introduction to message queues, core concepts, and real-world message brokers.', order: 1, difficulty: 'intermediate', estimatedHours: 3, icon: '📬', tags: ['messaging', 'rabbitmq', 'sqs', 'azure', 'fundamentals'], lessonSlugs: ['rabbitmq-fundamentals','sqs-basics','azure-service-basics','message-structure','point-to-point-vs-pubsub'], whatYouLearn: ['Understand core message queue concepts','Compare RabbitMQ, SQS, and Azure Service Bus','Design effective message structures','Choose between point-to-point and pub/sub patterns'] },
  { slug: 'publish-subscribe-patterns', id: 'mod-mqes-02', title: 'Publish-Subscribe Patterns', description: 'Deep dive into pub/sub patterns, exchange types, and consumer group architectures.', order: 2, difficulty: 'intermediate', estimatedHours: 3, icon: '📢', tags: ['pubsub', 'exchanges', 'fanout', 'topic', 'consumer-groups'], lessonSlugs: ['fanout-exchange','direct-exchange','topic-exchange','header-exchange','subscription-patterns','consumer-groups'], whatYouLearn: ['Implement fanout, direct, topic, and header exchanges','Design subscription patterns for decoupled systems','Scale consumers with consumer groups','Optimize message routing'] },
  { slug: 'message-ordering-idempotency', id: 'mod-mqes-03', title: 'Message Ordering & Idempotency', description: 'Ensure correct message ordering and idempotent processing in distributed systems.', order: 3, difficulty: 'intermediate', estimatedHours: 3, icon: '🔢', tags: ['ordering', 'idempotency', 'fifo', 'deduplication', 'exactly-once'], lessonSlugs: ['ordering-challenges','fifo-queues','idempotent-processing','exactly-once-semantics','deduplication','transactional-messaging'], whatYouLearn: ['Solve ordering challenges in distributed queues','Implement FIFO queues for ordered processing','Build idempotent consumers','Achieve exactly-once processing semantics'] },
  { slug: 'dead-letter-queues', id: 'mod-mqes-04', title: 'Dead-Letter Queues', description: 'Handle failed messages gracefully with dead-letter queues and retry strategies.', order: 4, difficulty: 'intermediate', estimatedHours: 2, icon: '💀', tags: ['dlq', 'retry', 'error-handling', 'monitoring', 'rabbitmq', 'sqs'], lessonSlugs: ['dlq-concepts','dlq-retry-strategies','dlq-error-handling','dlq-monitoring','automated-dlq-processing'], whatYouLearn: ['Design DLQ patterns for resilience','Implement exponential backoff retry strategies','Handle errors without data loss','Monitor and automate DLQ processing'] },
  { slug: 'event-streaming-kafka', id: 'mod-mqes-05', title: 'Event Streaming with Kafka', description: 'Master Apache Kafka for high-throughput event streaming and log-based architectures.', order: 5, difficulty: 'intermediate', estimatedHours: 4, icon: '🌊', tags: ['kafka', 'event-streaming', 'producers', 'consumers', 'partitions'], lessonSlugs: ['kafka-fundamentals','kafka-producers-consumers','kafka-consumer-groups','kafka-vs-message-queues','kafka-configuration','kafka-exactly-once-processing'], whatYouLearn: ['Understand Kafka architecture and log segments','Produce and consume messages efficiently','Scale with consumer groups and partitions','Configure Kafka for exactly-once processing'] },
  { slug: 'stream-processing', id: 'mod-mqes-06', title: 'Stream Processing', description: 'Process real-time data streams with Kafka Streams, ksqlDB, and windowing operations.', order: 6, difficulty: 'advanced', estimatedHours: 4, icon: '⚙️', tags: ['kafka-streams', 'ksqldb', 'windowing', 'joins', 'real-time', 'analytics'], lessonSlugs: ['kafka-streams-basics','ksqldb-basics','stream-vs-table','windowing-aggregation','joining-streams','real-time-analytics'], whatYouLearn: ['Build stream processing topologies with Kafka Streams','Query streams using ksqlDB','Model streams vs tables correctly','Implement windowing and aggregation patterns'] },
  { slug: 'event-sourcing', id: 'mod-mqes-07', title: 'Event Sourcing', description: 'Implement event sourcing patterns with event stores, snapshots, and CQRS.', order: 7, difficulty: 'advanced', estimatedHours: 4, icon: '📜', tags: ['event-sourcing', 'cqrs', 'event-store', 'snapshots', 'replay'], lessonSlugs: ['event-sourcing-fundamentals','event-store-design','snapshots-replay','cqrs-with-event-sourcing','event-versioning','event-sourcing-pros-cons'], whatYouLearn: ['Design event-sourced systems','Store and query events efficiently','Use snapshots for performance','Combine CQRS with event sourcing'] },
  { slug: 'message-broker-selection', id: 'mod-mqes-08', title: 'Message Broker Selection', description: 'Evaluate and choose the right message broker for your use case.', order: 8, difficulty: 'intermediate', estimatedHours: 2, icon: '⚖️', tags: ['broker-selection', 'rabbitmq', 'kafka', 'sqs', 'evaluation'], lessonSlugs: ['rabbitmq-vs-kafka-vs-sqs','broker-decision-framework','broker-use-case-analysis','broker-performance','broker-operational-complexity','broker-migration'], whatYouLearn: ['Compare RabbitMQ, Kafka, and SQS','Apply a decision framework for broker selection','Analyze real-world broker use cases','Plan broker migrations'] }
];

moduleDefs.forEach(m => {
  writeJSON(m.slug, 'content.json', {
    id: m.id,
    slug: m.slug,
    courseSlug: 'message-queues-event-streaming',
    title: m.title,
    description: m.description,
    longDescription: m.description,
    order: m.order,
    difficulty: m.difficulty,
    estimatedHours: m.estimatedHours,
    icon: m.icon,
    tags: m.tags,
    lessonSlugs: m.lessonSlugs,
    whatYouLearn: m.whatYouLearn
  });
});

console.log('Module content.json files created.');
