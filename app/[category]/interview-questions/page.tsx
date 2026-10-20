import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { InterviewTechnologyCard } from '@/components/interview/InterviewTechnologyCard';
import { getCategoryMeta, getInterviewCategories, getInterviewTechnologies } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

interface Params {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getInterviewCategories().map((category) => ({ category }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  const meta = getCategoryMeta(category);
  const technologies = getInterviewTechnologies(category);
  if (technologies.length === 0) return {};
  return buildMetadata({
    title: `${meta.label} Interview Questions`,
    description: `${technologies.length} ${meta.label} interview question topics with detailed answers.`,
    path: `/${category}/interview-questions`,
  });
}

export default async function CategoryInterviewQuestionsPage({ params }: Params) {
  const { category } = await params;
  const technologies = getInterviewTechnologies(category);
  if (technologies.length === 0) notFound();

  const meta = getCategoryMeta(category);
  const questionCount = technologies.reduce((sum, tech) => sum + tech.questionCount, 0);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow={`${meta.icon} ${meta.label}`}
        title={`${meta.label} Interview Questions`}
        description={`${questionCount} questions across ${technologies.length} topics — answers written the way an interviewer expects them.`}
        titleAs="h1"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => (
          <InterviewTechnologyCard
            key={tech.slug}
            slug={tech.slug}
            title={tech.title}
            description={tech.description}
            icon={tech.icon}
            category={tech.category}
            difficulty={tech.difficulty}
            estimatedHours={tech.estimatedHours}
            questionCount={tech.questionCount}
          />
        ))}
      </div>
    </div>
  );
}
