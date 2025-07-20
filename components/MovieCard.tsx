'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function MovieCard({ movie }: { movie: any }) {
  const slug = movie.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const imgBase = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-[1.03]">
      <Link href={`/film/${movie.id}/${slug}`} className="relative block group">
        <Image
          src={imgBase + movie.poster_path}
          alt={movie.title}
          width={200}
          height={300}
          className="w-full h-auto object-cover"
        />
        {/* Hover yazısı */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
          <span className="text-white text-sm font-medium">Detayları Gör</span>
        </div>
      </Link>

      <div className="p-3 space-y-1">
        <h2 className="text-base font-medium text-white truncate">{movie.title}</h2>
        <p className="text-xs text-gray-400">{movie.release_date}</p>

        {/* Şimdi İzle Butonu */}
        <Link
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-blue-600 hover:bg-red-600 text-white text-sm font-semibold py-1 mt-2 rounded transition"
        >
          🎬 Şimdi İzle
        </Link>
      </div>
    </div>
  );
}
