import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { PWARegistration } from '@/components/ui/PWARegistration';
import { ContinuePrompt } from '@/components/ui/ContinuePrompt';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/ui/SkipLink';
import { OfflineIndicator } from '@/components/ui/OfflineIndicator';
import { AuthProvider } from '@/components/auth/AuthProvider';
import './globals.css';

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex min-h-screen flex-col bg-canvas text-fg-default antialiased transition-theme" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif' }}>
        <SkipLink />
        <AuthProvider>
          <PWARegistration />
          <ContinuePrompt />
          <ThemeProvider>
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <OfflineIndicator />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
