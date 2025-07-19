// export async function fetchMovies() {
//   const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`);
//   if (!res.ok) throw new Error('Film verileri alınamadı');
//   const data = await res.json();
//   return data.results;
// }
export async function fetchMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
    { cache: 'no-store' } // <-- bu satırı ekle
  );
  if (!res.ok) throw new Error('Film verileri alınamadı');
  const data = await res.json();
  return data.results;
}
