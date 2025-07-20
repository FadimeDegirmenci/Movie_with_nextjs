import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NextAuthSessionProvider from '@/providers/NextAuthSessionProvider';
import ToastProvider from '@/providers/ToastProvider';
import Navbar from '@/components/Navbar';     // 👈 Navbar importu
import Footer from '@/components/Footer';     // 👈 Footer importu

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moviess',
  description: 'Moviess',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <NextAuthSessionProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />                     {/* 👈 Navbar en üstte */}
            <main className="flex-1">{children}</main>
            <Footer />                     {/* 👈 Footer en altta */}
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
