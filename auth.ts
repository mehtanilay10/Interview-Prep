import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

const trustHost =
  Boolean(process.env.AUTH_TRUST_HOST) ||
  Boolean(process.env.AUTH_URL) ||
  Boolean(process.env.VERCEL) ||
  Boolean(process.env.CF_PAGES) ||
  process.env.NODE_ENV !== 'production';

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
  },
});
