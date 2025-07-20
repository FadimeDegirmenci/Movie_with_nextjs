export async function searchMovies(query: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=tr-TR`
  );

  if (!res.ok) throw new Error('Arama başarısız oldu');

  const data = await res.json();
  return data.results;
}// lib/fetchMovies.ts

export async function fetchMovies() {
  const apiKey = process.env.TMDB_API_KEY;
  const page = Math.floor(Math.random() * 10) + 1; // 1-10 arası rastgele sayfa

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=tr-TR&page=${page}`,
    { cache: 'no-store' } // bu sayede her yenilemede yeni veri gelir
  );

  if (!res.ok) throw new Error('Film verileri alınamadı');

  const data = await res.json();
  return data.results;
}
