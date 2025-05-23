import {Geist, Geist_Mono} from 'next/font/google';
import {Analytics} from '@vercel/analytics/react';
import './globals.css';
import {RootLayoutProps} from '@/interfaces/general';
import ReduxProvider from '@/providers/reduxProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'SIA Solar - Solar Energy Solutions in Pakistan',
  description:
    'SIA Solar specializes in commercial solar installations, offering expert electrical inspections, consultancy, wiring test reports, earthing systems, and net metering with full verification.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          {children}
          <Analytics />
        </ReduxProvider>
      </body>
    </html>
  );
}
