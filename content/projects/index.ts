import type { MiniProject } from '@/types';

import personalKnowledgeBase from './personal-knowledge-base.json';
import aiWritingWorkflow from './ai-writing-workflow.json';
import aiResearchAssistant from './ai-research-assistant.json';
import meetingNotesAutomation from './meeting-notes-automation.json';
import productComparison from './product-comparison.json';
import personalWeeklyPlanner from './personal-weekly-planner.json';
import studyNotesGenerator from './study-notes-generator.json';
import emailResponseTemplates from './email-response-templates.json';
import presentationOutlineBuilder from './presentation-outline-builder.json';
import travelPlannerWorkflow from './travel-planner-workflow.json';
import promptTestingExperiment from './prompt-testing-experiment.json';
import hallucinationHunt from './hallucination-hunt.json';
import aiWritingStyleAnalysis from './ai-writing-style-analysis.json';
import noCodeAutomationBuild from './no-code-automation-build.json';
import agentResearchTask from './agent-research-task.json';
import ragKnowledgeBaseDesign from './rag-knowledge-base-design.json';
import privacyAudit from './privacy-audit.json';
import compareThreeTools from './compare-three-tools.json';
import aiForCodeBeginners from './ai-for-code-beginners.json';
import localAiSetup from './local-ai-setup.json';
import personalAiStackDesign from './personal-ai-stack-design.json';
import aiDocumentSummarizer from './ai-document-summarizer.json';
import aiWorkflowMap from './ai-workflow-map.json';
import mcpExploration from './mcp-exploration.json';
import courseCapstone from './course-capstone.json';

const rawProjects = [
  personalKnowledgeBase,
  aiWritingWorkflow,
  aiResearchAssistant,
  meetingNotesAutomation,
  productComparison,
  personalWeeklyPlanner,
  studyNotesGenerator,
  emailResponseTemplates,
  presentationOutlineBuilder,
  travelPlannerWorkflow,
  promptTestingExperiment,
  hallucinationHunt,
  aiWritingStyleAnalysis,
  noCodeAutomationBuild,
  agentResearchTask,
  ragKnowledgeBaseDesign,
  privacyAudit,
  compareThreeTools,
  aiForCodeBeginners,
  localAiSetup,
  personalAiStackDesign,
  aiDocumentSummarizer,
  aiWorkflowMap,
  mcpExploration,
  courseCapstone,
];

export const projects: MiniProject[] = rawProjects as unknown as MiniProject[];

export function getProjectBySlug(slug: string): MiniProject | undefined {
  return projects.find((p) => p.slug === slug);
}
