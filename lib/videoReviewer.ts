/**
 * Reviewer authorisation for the video pipeline.
 *
 * The Prisma schema has no role concept, so review/publish access is an
 * environment allowlist of Google account emails (decision D5). The email comes
 * from the verified Google OAuth session, so it is trustworthy. This is enforced
 * server-side in every route that can change pipeline state; the client-side
 * copy (from NEXT_PUBLIC_*) only decides whether to show the links.
 */
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { logError, AuthError } from '@/lib/errorHandler';

function parseAllowlist(): string[] {
  const raw = process.env.VIDEO_REVIEWER_EMAILS ?? '';
  return raw
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter((email) => email.length > 0);
}

export function isReviewerEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return parseAllowlist().includes(email.trim().toLowerCase());
}

/** Client-visible copy of the allowlist (link visibility only, never access control). */
export function reviewerEmailsForClient(): string[] {
  const raw = process.env.NEXT_PUBLIC_VIDEO_REVIEWER_EMAILS ?? '';
  return raw
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter((email) => email.length > 0);
}

export async function getReviewerUser(): Promise<{ email: string; name?: string | null; id?: string } | null> {
  const session = await auth();
  const email = session?.user?.email;
  if (!email || !isReviewerEmail(email)) return null;
  return { email, name: session?.user?.name ?? null, ...(session?.user?.id ? { id: session.user.id } : {}) };
}

/** Page guard: redirects anyone who is not an allowlisted reviewer. */
export async function requireReviewerPage(): Promise<{ email: string; name?: string | null }> {
  const reviewer = await getReviewerUser();
  if (reviewer) return reviewer;

  const session = await auth();
  if (!session?.user) redirect('/login');
  logError('videoReviewer', new AuthError('Not authorised to review videos'));
  redirect('/login?error=AccessDenied');
}
