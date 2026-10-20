import { Metadata } from 'next';
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { getCategoryMeta, getInterviewCategories } from '@/lib/content';
import { PersonalizationClient, type LandingPageOption } from './PersonalizationClient';

export const metadata: Metadata = {
  title: 'Personalization | Interview Prep',
  description: 'Customize your learning experience.',
};

export default async function PersonalizationPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/user/login');
  }

  // Interview questions are category-first, so every category that hosts them
  // is offered as a landing destination.
  const landingPages: LandingPageOption[] = [
    { value: '/', label: 'Home' },
    { value: '/roadmaps', label: 'Roadmaps' },
    ...getInterviewCategories().map((category) => ({
      value: `/${category}/interview-questions`,
      label: `${getCategoryMeta(category).label} Interview Questions`,
    })),
  ];

  return (
    <PersonalizationClient
      user={{
        id: user.id || '',
        name: user.name ?? null,
        email: user.email ?? null,
        image: user.image ?? null,
      }}
      landingPages={landingPages}
    />
  );
}
