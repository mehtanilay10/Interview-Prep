import { NextResponse } from 'next/server';

const CSRF_COOKIE = 'interview_prep_csrf';
const CSRF_HEADER = 'x-csrf-token';

export function generateCsrfToken(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function setCsrfCookie(response: NextResponse, token: string): NextResponse {
  response.cookies.set(CSRF_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
  });
  return response;
}

export function validateCsrf(request: Request): { valid: boolean; error?: string } {
  const cookie = request.headers.get('cookie')?.split(';').find((c) => c.trim().startsWith(`${CSRF_COOKIE}=`));
  const header = request.headers.get(CSRF_HEADER);

  if (!cookie || !header) {
    return { valid: false, error: 'Missing CSRF token' };
  }

  const cookieToken = cookie.split('=')[1]?.trim();
  if (!cookieToken || cookieToken !== header) {
    return { valid: false, error: 'Invalid CSRF token' };
  }

  return { valid: true };
}
