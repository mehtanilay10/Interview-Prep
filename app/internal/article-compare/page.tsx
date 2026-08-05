import type { Metadata } from 'next';
import { ArticleCompareClient } from '@/components/internal/ArticleCompareClient';

export const metadata: Metadata = {
  title: 'Article Compare',
  description: 'Internal side-by-side article comparison tool.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ArticleComparePage() {
  return <ArticleCompareClient />;
}