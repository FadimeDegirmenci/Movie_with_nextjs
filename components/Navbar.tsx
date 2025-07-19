'use client';

import { FaSearch, FaUser, FaTv } from 'react-icons/fa';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import LogoutBtn from './LogoutBtn'; 
export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Sol: Logo (tıklanınca ana sayfaya gider) */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
          <FaTv className="w-8 h-8 text-white" />
          <span className="text-xl font-bold">
            FİLMSS
            <span className="text-sm font-normal"></span>
          </span>
        </Link>

      <ul className="hidden md:flex space-x-6 text-sm font-medium">
  <li><Link href="/" className="hover:text-gray-300 transition">Ana Sayfa</Link></li>
  <li><Link href="/diziler" className="hover:text-gray-300 transition">Diziler</Link></li>
  <li><Link href="/filmler" className="text-white font-bold underline underline-offset-4">Filmler</Link></li>
  <li><Link href="/belgeseller" className="hover:text-gray-300 transition">Belgeseller</Link></li>
 <li className="relative group cursor-pointer">
  <span className="hover:text-gray-300 transition">Kategoriler</span>

  <div className="absolute top-full left-0 backdrop-blur-md bg-white/80 text-black mt-2 w-52 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-50">
    <ul className="p-2 space-y-1 text-sm">
      <li><Link href="/kategori/tarih" className="block px-3 py-1 rounded hover:bg-black/10">Tarih</Link></li>
      <li><Link href="/kategori/komedi" className="block px-3 py-1 rounded hover:bg-black/10">Komedi</Link></li>
      <li><Link href="/kategori/love" className="block px-3 py-1 rounded hover:bg-black/10">Aşk</Link></li>
      <li><Link href="/kategori/macera" className="block px-3 py-1 rounded hover:bg-black/10">Macera</Link></li>
      <li><Link href="/kategori/bilim-kurgu" className="block px-3 py-1 rounded hover:bg-black/10">Bilim Kurgu</Link></li>
      <li><Link href="/kategori/dram" className="block px-3 py-1 rounded hover:bg-black/10">Dram</Link></li>
      <li><Link href="/kategori/gerilim" className="block px-3 py-1 rounded hover:bg-black/10">Gerilim</Link></li>
      <li><Link href="/kategori/korku" className="block px-3 py-1 rounded hover:bg-black/10">Korku</Link></li>
      <li><Link href="/kategori/animasyon" className="block px-3 py-1 rounded hover:bg-black/10">Animasyon</Link></li>
      <li><Link href="/kategori/aile" className="block px-3 py-1 rounded hover:bg-black/10">Aile</Link></li>
    </ul>
  </div>
</li>







</ul>


        
           <div className="flex items-center space-x-4 text-lg">
          <FaSearch className="cursor-pointer hover:text-gray-300" />
          <FaUser className="cursor-pointer hover:text-gray-300" />
          <LogoutBtn /> 
        </div>
         
        </div>
      
    </nav>
  );
}
