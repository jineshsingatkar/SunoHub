import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      {/* SunoHub Logo */}
      <Link href="/">
        <span className="font-bold text-xl text-blue-600">SunoHub</span>
      </Link>
      {/* Navigation Links */}
      <div className="space-x-4">
        <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
        <Link href="/public-rooms" className="text-gray-700 hover:text-blue-600">Rooms</Link>
        <Link href="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
        <Link href="/settings" className="text-gray-700 hover:text-blue-600">Settings</Link>
      </div>
    </nav>
  );
} 