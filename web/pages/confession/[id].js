import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Placeholder for fetching story by ID
const story = {
  id: 1,
  text: 'Full confession story goes here...'
  , reactions: 7, language: 'en', category: 'General'
};

export default function ConfessionDetail() {
  const router = useRouter();
  const { id } = router.query;
  // TODO: Fetch story by ID using axios
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">
        {/* Full Story Content */}
        <h1 className="text-2xl font-bold mb-4">Confession #{id}</h1>
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <p className="text-gray-800 mb-2">{story.text}</p>
          {/* Reactions and Report */}
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-500">{story.reactions} Likes</span>
            <button className="text-red-500 hover:underline text-sm">Report</button>
          </div>
          {/* Tags */}
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">{story.language}</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">{story.category}</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 