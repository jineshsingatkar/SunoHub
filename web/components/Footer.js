import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 py-4 flex flex-col md:flex-row items-center justify-between px-4 mt-8">
      <span className="text-gray-500">&copy; {new Date().getFullYear()} SunoHub</span>
      <div className="space-x-4 mt-2 md:mt-0">
        <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        <Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms</Link>
      </div>
    </footer>
  );
} 