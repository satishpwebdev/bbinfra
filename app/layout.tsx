import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bablu Infracon - Building Tomorrow Today',
  description: 'Leading infrastructure development company specializing in construction, real estate, and sustainable development.',
  openGraph: {
    title: 'Bablu Infracon - Building Tomorrow Today',
    description: 'Leading infrastructure development company specializing in construction, real estate, and sustainable development.',
    url: 'https://babluinfracon.com',
    siteName: 'Bablu Infracon',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Bablu Infracon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}