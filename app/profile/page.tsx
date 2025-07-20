'use client';
import { useState, useEffect } from 'react';

export default function ProfilePage() {
  const [tab, setTab] = useState<'favorites' | 'watched' | 'later'>('favorites');
  const [favorites, setFavorites] = useState([]);
  const [watched, setWatched] = useState([]);
  const [watchLater, setWatchLater] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [favRes, watchRes, laterRes] = await Promise.all([
        fetch('/api/movie/favorite'),
        fetch('/api/movie/watched'),
        fetch('/api/movie/watch-later'),
      ]);
      setFavorites(await favRes.json());
      setWatched(await watchRes.json());
      setWatchLater(await laterRes.json());
    };
    fetchData();
  }, []);

  const renderMovies = (movies: any[], showCheck = false) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {movies.map((movie: any) => (
        <div key={movie.id} className="relative group">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
            alt={movie.title}
            className="rounded-lg shadow hover:scale-105 transition-transform duration-200"
          />
          {showCheck && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-sm px-2 py-1 rounded-full shadow-md">
              ✅
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-800 p-6 flex flex-col space-y-4 border-r border-neutral-700">
        <h2 className="text-2xl font-bold mb-4">Hesabım</h2>
        <button
          onClick={() => setTab('favorites')}
          className={`text-left px-4 py-2 rounded ${tab === 'favorites' ? 'bg-blue-600' : 'hover:bg-neutral-700'}`}
        >
          ❤️ Favoriler
        </button>
        <button
          onClick={() => setTab('watched')}
          className={`text-left px-4 py-2 rounded ${tab === 'watched' ? 'bg-blue-600' : 'hover:bg-neutral-700'}`}
        >
          ✅  İzlediklerim
        </button>
        <button
          onClick={() => setTab('later')}
          className={`text-left px-4 py-2 rounded ${tab === 'later' ? 'bg-blue-600' : 'hover:bg-neutral-700'}`}
        >
          📌 Daha Sonra İzle
        </button>

        <hr className="border-neutral-600 my-4" />

        {/* Kişisel Bilgiler */}
        <div className="text-sm text-neutral-400 space-y-1">
          <p>Üyelik Tarihi: <span className="text-white">Temmuz 2025</span></p>
          
         
        </div>

        <hr className="border-neutral-600 my-4" />

        {/* İleride aktifleşecek butonlar */}
        <button className="text-sm text-neutral-400 hover:text-white">Şifre Değiştir</button>
        <button className="text-sm text-neutral-400 hover:text-white">E-posta Güncelle</button>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">
          {tab === 'favorites' && '❤️ Favoriler'}
          {tab === 'watched' && ' ✅ İzlediklerim'}
          {tab === 'later' && '📌 Daha Sonra İzle'}
        </h1>

        {tab === 'favorites' && renderMovies(favorites)}
        {tab === 'watched' && renderMovies(watched, true)} 
        {tab === 'later' && renderMovies(watchLater)}
      </main>
    </div>
  );
}
