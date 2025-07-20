'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaCheck, FaClock } from 'react-icons/fa';

export default function MovieCard({ movie }: { movie: any }) {
  const [favorites, setFavorites] = useState(false);
  const [watched, setWatched] = useState(false);
  const [watchLater, setWatchLater] = useState(false);

  const slug = movie.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const imgBase = 'https://image.tmdb.org/t/p/w500';

  const commonBody = {
    movieId: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    releaseDate: movie.release_date,
  };

  const safeFetch = async (url: string, setter: (val: boolean) => void) => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(commonBody),
      });

      if (!res.ok) throw new Error(`Sunucu hatası: ${res.status}`);
      
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};
      setter(!data.removed);
    } catch (err) {
      console.error(`${url} işlemi başarısız:`, err);
    }
  };

  const handleFavorite = () => safeFetch('/api/movie/favorite', setFavorites);
  const handleWatched = () => safeFetch('/api/movie/watched', setWatched);
  const handleWatchLater = () => safeFetch('/api/movie/watch-later', setWatchLater);

  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-200 cursor-pointer">
      <Link href={`/film/${movie.id}/${slug}`}>
        <div className="relative group">
          <Image
            src={imgBase + movie.poster_path}
            alt={movie.title}
            width={200}
            height={300}
            className="w-full h-auto object-cover"
          />
          <span className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white flex items-center justify-center text-sm font-medium transition">
            Detayları Gör
          </span>
        </div>
      </Link>

      <div className="p-3 space-y-2">
        <h2 className="text-base font-medium text-white truncate">{movie.title}</h2>
        <p className="text-xs text-gray-400">{movie.release_date}</p>

        <div className="flex justify-between items-center text-white text-sm mt-2">
          <button onClick={handleFavorite} className={`hover:text-red-400 ${favorites ? 'text-red-500' : ''}`}>
            <FaHeart />
          </button>
          <button onClick={handleWatched} className={`hover:text-green-400 ${watched ? 'text-green-500' : ''}`}>
            <FaCheck />
          </button>
          <button onClick={handleWatchLater} className={`hover:text-yellow-400 ${watchLater ? 'text-yellow-500' : ''}`}>
            <FaClock />
          </button>
        </div>
      </div>
    </div>
  );
}
