import { searchMovies } from '@/libs/fetchMovies';
import { notFound } from 'next/navigation';
import MovieCard from '@/components/MovieCard'; 

export default async function AramaPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q;

  if (!query) return notFound();

  const results = await searchMovies(query);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-xl mb-4">Arama Sonuçları: <span className="font-semibold">{query}</span></h1>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {results.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} /> // Buraya güncel MovieCard bileşeni geldi
          ))}
        </div>
      ) : (
        <p>Sonuç bulunamadı.</p>
      )}
    </div>
  );
}
