// export default function MovieCard({ movie }: { movie: any }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4">
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         alt={movie.title}
//         className="rounded-md mb-2"
//       />
//       <h2 className="text-lg font-bold">{movie.title}</h2>
//       <p className="text-sm text-gray-600">{movie.release_date}</p>
//     </div>
//   );
// }
import Link from 'next/link';
import { slugify } from '@/libs/slugify'; // yolun doğru olduğundan emin ol


export default function MovieCard({ movie }: { movie: any }) {
  const slug = movie.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return (
    <Link href={`/film/${movie.id}/${slug}`}>
      <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-md mb-2"
        />
        <h2 className="text-lg font-bold text-black">{movie.title}</h2>
        <p className="text-sm text-gray-600">{movie.release_date}</p>
      </div>
    </Link>
  );
}
