import { auth } from '@/auth';
import { getOrCreateUser } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { type User } from '@prisma/client';
import { AuthError, DatabaseError } from '@/lib/errorHandler';
import { logError } from '@/lib/errorHandler';

export async function getAuthenticatedUser() {
  const session = await auth();
  return session?.user ?? null;
}

export async function requireAuthenticatedUser() {
  const user = await getAuthenticatedUser();
  if (!user) {
    const error = new AuthError('Unauthorized');
    logError('authMiddleware', error);
    return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
  }
  return user;
}

export function createApiAuthHandler(
  handler: (databaseUser: User, request: Request) => Promise<NextResponse>
) {
  return async (request: Request): Promise<NextResponse> => {
    const user = await requireAuthenticatedUser();
    if (user instanceof NextResponse) {
      return user;
    }

    try {
      const databaseUser = await getOrCreateUser(user);
      if (!databaseUser) {
        const error = new AuthError('Unauthorized');
        logError('authMiddleware', error);
        return NextResponse.json({ code: error.code, message: error.message }, { status: error.statusCode });
      }

      return handler(databaseUser, request);
    } catch (error) {
      const appError = new DatabaseError('Failed to load user', error);
      logError('authMiddleware', appError);
      return NextResponse.json({ code: appError.code, message: appError.message }, { status: appError.statusCode });
    }
  };
}
