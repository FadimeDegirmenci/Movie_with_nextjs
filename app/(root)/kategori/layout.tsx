'use client';

import Navbar from '@/components/Navbar';

export default function KategoriLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
