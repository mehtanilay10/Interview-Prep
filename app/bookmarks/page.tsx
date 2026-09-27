import { Metadata } from 'next';
import { getCurrentUser, requireAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { BookmarksClient } from './BookmarksClient';

export const metadata: Metadata = {
  title: 'Bookmarks | Interview Prep',
  description: 'View and manage your saved bookmarks.',
};

export default async function BookmarksPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }

  return <BookmarksClient user={{ id: user.id || '', name: user.name ?? null, email: user.email ?? null, image: user.image ?? null }} />;
}
