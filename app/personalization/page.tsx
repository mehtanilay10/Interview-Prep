import { Metadata } from 'next';
import { getCurrentUser, requireAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { PersonalizationClient } from './PersonalizationClient';

export const metadata: Metadata = {
  title: 'Personalization | Interview Prep',
  description: 'Customize your learning experience.',
};

export default async function PersonalizationPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }

  return (
    <PersonalizationClient
      user={{
        id: user.id || '',
        name: user.name ?? null,
        email: user.email ?? null,
        image: user.image ?? null,
      }}
    />
  );
}
