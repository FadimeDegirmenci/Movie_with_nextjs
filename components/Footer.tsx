'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-sm text-gray-700 border-t border-gray-300 py-4 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
        {/* Sol taraf: linkler */}
        <div className="flex flex-wrap gap-4">
          <Link href="#" className="hover:underline">Hizmet Şartları</Link>
          <Link href="#" className="hover:underline">Gizlilik</Link>
          
          <Link href="#" className="hover:underline">Geliştiriciler</Link>
          <Link href="#" className="hover:underline">Hakkımızda</Link>
         
        </div>

        {/* Sağ taraf: ülke bilgisi */}
        <div className="mt-2 sm:mt-0">
          <span>Türkiye (Türkçe)</span>
        </div>
      </div>
    </footer>
  );
}
