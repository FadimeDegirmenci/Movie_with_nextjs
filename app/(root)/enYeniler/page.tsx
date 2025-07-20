// app/son-eklenenler/page.tsx

import MovieCard from '@/components/MovieCard';

export default async function EnYenilerPage() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=tr-TR&page=1`);
  const data = await res.json();
  const movies = data.results;

  return (
    <div className="min-h-screen bg-black text-white px-8 py-6">
      <h1 className="text-3xl font-bold mb-6">Son Eklenenler</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
