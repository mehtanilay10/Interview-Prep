import { Metadata } from 'next';
import { getCurrentUser, requireAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { NotesClient } from './NotesClient';

export const metadata: Metadata = {
  title: 'Notes | Interview Prep',
  description: 'View and manage your lesson notes.',
};

export default async function NotesPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }

  return <NotesClient user={{ id: user.id || '', name: user.name ?? null, email: user.email ?? null, image: user.image ?? null }} />;
}
