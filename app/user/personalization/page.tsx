import { Metadata } from 'next';
import { getCategoryMeta, getInterviewCategories } from '@/lib/content';
import { PersonalizationClient, type LandingPageOption } from './PersonalizationClient';

export const metadata: Metadata = {
  title: 'Personalization | Quotient',
  description: 'Customize your learning experience.',
};

export default function PersonalizationPage() {
  // Interview questions are category-first, so every category that hosts them
  // is offered as a landing destination.
  const landingPages: LandingPageOption[] = [
    { value: '/', label: 'Home' },
    ...getInterviewCategories().map((category) => ({
      value: `/${category}/interview-questions`,
      label: `${getCategoryMeta(category).label} Interview Questions`,
    })),
  ];

  return <PersonalizationClient landingPages={landingPages} />;
}
