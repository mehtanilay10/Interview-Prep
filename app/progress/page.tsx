import { Metadata } from 'next';
import { getCurrentUser, requireAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { ProgressDashboardClient } from './ProgressDashboardClient';

export const metadata: Metadata = {
  title: 'Progress Dashboard | Interview Prep',
  description: 'Track your learning progress across courses, problems, and interview questions.',
};

export default async function ProgressPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }

  return <ProgressDashboardClient user={{ id: user.id || '', name: user.name ?? null, email: user.email ?? null, image: user.image ?? null }} />;
}
