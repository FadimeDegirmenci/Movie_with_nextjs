'use client';

import { FaSearch, FaUser, FaTv } from 'react-icons/fa';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import LogoutBtn from './LogoutBtn';
import SearchBox from './SearchBox';
import NavbarUserIcon from './NavbarUserIcon';


const categories = [
  { id: 'tarih', name: 'Tarih' },
  { id: 'komedi', name: 'Komedi' },
  { id: 'love', name: 'Aşk' },
  { id: 'macera', name: 'Macera' },
  { id: 'bilim-kurgu', name: 'Bilim Kurgu' },
  { id: 'dram', name: 'Dram' },
  { id: 'gerilim', name: 'Gerilim' },
  { id: 'korku', name: 'Korku' },
  { id: 'animasyon', name: 'Animasyon' },
  { id: 'aile', name: 'Aile' },
  { id: 'belgesel', name: 'Belgesel' },
];

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Sol: Logo */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
          <FaTv className="w-8 h-8 text-white" />
          <span className="text-xl font-bold">FİLMSS</span>
        </Link>

        {/* Orta: Menü */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-gray-300 transition">Ana Sayfa</Link>
          </li>
          <li>
            <Link href="/enYeniler" className="hover:text-gray-300 transition">En Yeniler</Link>
          </li>
          <li>
            <Link href="/kategori/belgesel?name=Belgesel" className="hover:text-gray-300 transition">Belgeseller</Link>
          </li>
          <li className="relative group cursor-pointer">
            <span className="hover:text-gray-300 transition">Kategoriler</span>
            <div className="absolute top-full left-0 backdrop-blur-md bg-white/80 text-black mt-2 w-52 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-50">
              <ul className="p-2 space-y-1 text-sm">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={`/kategori/${cat.id}?name=${encodeURIComponent(cat.name)}`}
                      className="block px-3 py-1 rounded hover:bg-black/10"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        {/* Sağ: Arama ve Kullanıcı */}
        <div className="flex items-center space-x-4 text-lg">
          <SearchBox />
           <NavbarUserIcon />
          
          <LogoutBtn />
        </div>
      </div>
    </nav>
  );
}
