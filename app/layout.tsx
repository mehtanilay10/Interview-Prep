import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { PWARegistration } from '@/components/ui/PWARegistration';
import { ContinuePrompt } from '@/components/ui/ContinuePrompt';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/ui/SkipLink';
import { OfflineIndicator } from '@/components/ui/OfflineIndicator';
import { AuthProvider } from '@/components/auth/AuthProvider';
import { ErrorBoundaryWrapper } from '@/components/app/ErrorBoundaryWrapper';
import { ProgressProvider } from '@/components/progress/ProgressProvider';
import { BookmarkProvider } from '@/components/bookmarks/BookmarkProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Interview Prep — Interview Preparation',
    template: '%s | Interview Prep',
  },
  description:
    'Interview preparation course. Learn the skills, techniques, and strategies to succeed in technical interviews.',
  keywords: ['interview prep', 'interview skills', 'interview preparation', 'career'],
  authors: [{ name: 'Interview Prep' }],
  robots: { index: true, follow: true },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/logo-light.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo-light.svg',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Interview Prep',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Interview Prep',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex min-h-screen flex-col bg-canvas text-fg-default antialiased transition-theme">
        <SkipLink />
        <AuthProvider>
          <ProgressProvider>
            <BookmarkProvider>
              <PWARegistration />
              <ContinuePrompt />
              <ThemeProvider>
                <Navbar />
                <main id="main-content" className="flex-1">
                  <ErrorBoundaryWrapper>
                    {children}
                  </ErrorBoundaryWrapper>
                </main>
                <Footer />
                <OfflineIndicator />
              </ThemeProvider>
            </BookmarkProvider>
          </ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
