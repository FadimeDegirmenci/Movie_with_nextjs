import Image from 'next/image';
import Link from 'next/link';

interface Props {
  params: {
    id: string;
    slug: string;
  };
}

export default async function FilmPage({ params }: Props) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.TMDB_API_KEY}&language=tr-TR`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Film bulunamadı.');
  }

  const data = await res.json();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">

        {/* 🎬 Poster + Hover Efekti */}
        <Link
          href={`https://www.themoviedb.org/movie/${params.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[220px] md:w-[280px] flex-shrink-0 rounded overflow-hidden group relative shadow-lg"
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
            width={280}
            height={420}
            className="rounded transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded">
            <span className="text-white text-lg font-semibold">🎬 Şimdi İzle</span>
          </div>
        </Link>

        {/* Bilgi Bloğu */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="text-gray-400 italic">{data.tagline}</p>
          <p className="text-sm text-gray-400">
            {data.release_date} • {data.runtime} dk • {data.original_language.toUpperCase()}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {data.genres.map((g: any) => (
              <span
                key={g.id}
                className="bg-white/20 text-white px-3 py-1 text-xs rounded-full"
              >
                {g.name}
              </span>
            ))}
          </div>

          <p className="text-gray-300 mt-4 leading-relaxed">
            {data.overview || 'Açıklama bulunamadı.'}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm mt-6">
            <div>
              <span className="text-gray-400">IMDB Puanı:</span>
              <p>{data.vote_average.toFixed(1)} / 10</p>
            </div>
            <div>
              <span className="text-gray-400">Bütçe:</span>
              <p>{data.budget > 0 ? `$${data.budget.toLocaleString()}` : 'Bilinmiyor'}</p>
            </div>
            <div>
              <span className="text-gray-400">Gelir:</span>
              <p>{data.revenue > 0 ? `$${data.revenue.toLocaleString()}` : 'Bilinmiyor'}</p>
            </div>
            <div className="col-span-2">
              <span className="text-gray-400">Yapımcılar:</span>
              <p className="text-sm text-gray-200">
                {data.production_companies.map((p: any) => p.name).join(', ') || 'Yok'}
              </p>
            </div>
          </div>

          {/* 🎬 Şimdi İzle Butonu */}
          <div className="mt-8">
            <Link
              href={`https://www.themoviedb.org/movie/${params.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-red-700 transition text-white font-semibold py-2 px-4 rounded"
            >
              🎬 Şimdi İzle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
