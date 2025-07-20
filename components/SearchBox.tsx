'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim() === '') return;
    router.push(`/arama?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="flex items-center border-2 border-black rounded-full px-3 py-1 bg-white">
      <input
        type="text"
        placeholder="Arama.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className="flex-1 outline-none bg-transparent text-black placeholder-gray-500"
      />
      <FaSearch
        onClick={handleSearch}
        className="cursor-pointer text-black hover:text-gray-700 ml-2"
      />
    </div>
  );
}
