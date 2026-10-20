import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Google from 'next-auth/providers/google';
import { prisma } from '@/lib/prisma';

const trustHost =
  Boolean(process.env.AUTH_TRUST_HOST) ||
  Boolean(process.env.AUTH_URL) ||
  Boolean(process.env.VERCEL) ||
  Boolean(process.env.CF_PAGES) ||
  process.env.NODE_ENV !== 'production';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  trustHost,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          scope: 'openid profile email',
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      const jwtToken = token as typeof token & { id?: string };

      if (user?.id) {
        jwtToken.id = user.id;
      }

      if (!jwtToken.id && jwtToken.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: jwtToken.email },
          select: { id: true },
        });

        if (dbUser) {
          jwtToken.id = dbUser.id;
        }
      }

      return token;
    },
    async session({ session, token }) {
      const jwtToken = token as typeof token & { id?: string };

      if (session.user && jwtToken.id) {
        (session.user as typeof session.user & { id: string }).id = jwtToken.id;
      }

      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});
