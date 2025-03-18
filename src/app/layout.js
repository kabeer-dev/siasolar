import {Geist, Geist_Mono} from 'next/font/google';
import {Analytics} from '@vercel/analytics/react';
import './globals.css';

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
    'SIA Solar provides high-quality solar solutions, including panels, inverters, and installation services in Pakistan.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
