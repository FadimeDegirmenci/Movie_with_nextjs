'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import MovieCard from '@/components/MovieCard';
import { genreMap } from '@/utils/genreMap';

export default function KategoriPage({ params }: { params: { id: string } }) {
  const [movies, setMovies] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  const genreId = genreMap[params.id];

  useEffect(() => {
    if (!genreId) return;

    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=<<d0f9c9030bf632b63272bc9860403c09>>&with_genres=${genreId}`
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    fetchMovies();
  }, [genreId]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-4">{name} Filmleri</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-gray-400">Yükleniyor veya içerik yok.</p>
        )}
      </div>
    </div>
  );
}
