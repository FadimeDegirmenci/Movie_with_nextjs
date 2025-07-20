import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

export default function NavbarUserIcon() {
  return (
    <Link href="/profile">
      <div className="relative group">
        <FaUser className="cursor-pointer hover:text-gray-300" />
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50">
          Profile
        </span>
      </div>
    </Link>
  );
}
