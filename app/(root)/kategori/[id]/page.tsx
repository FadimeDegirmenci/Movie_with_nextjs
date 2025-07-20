import { genreMap } from '@/utils/genreMap';
import MovieCard from '@/components/MovieCard';
import { notFound } from 'next/navigation';
import { searchMovies } from '@/libs/fetchMovies';

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}) {
  const genreId = genreMap[params.id];
  if (!genreId) return notFound();

  const genreName = searchParams?.name || 'Kategori';

  const randomPage = Math.floor(Math.random() * 10) + 1;

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${genreId}&language=tr-TR&page=${randomPage}`,
    { cache: 'no-store' }
  );

  const data = await res.json();
  const movies = data.results;

  return (
    <div className="min-h-screen bg-black text-white px-8 py-6">
      <h1 className="text-3xl font-bold mb-6">
        {genreName} Filmleri
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
