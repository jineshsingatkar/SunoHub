import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StoryCard from '../components/StoryCard';

// Placeholder data
const stories = [
  { id: 1, text: 'Sample story 1', reactions: 5, language: 'en', category: 'General' },
  { id: 2, text: 'Sample story 2', reactions: 2, language: 'hi', category: 'Love' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      {/* Main Content */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">
        {/* SunoHub Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="SunoHub Logo" className="w-24 h-24 mb-2" />
          <h1 className="text-3xl font-bold text-blue-600">SunoHub</h1>
        </div>
        {/* Online Users Count */}
        <div className="text-center mb-4 text-gray-700">Online Users: <span className="font-semibold">42</span></div>
        {/* Main Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button className="btn-primary">Start Random Call</button>
          <button className="btn-secondary">Write Confession</button>
          <button className="btn-secondary">Record Voice Confession</button>
          <button className="btn-secondary">Join Public Room</button>
        </div>
        {/* Story Feed Preview */}
        <h2 className="text-xl font-semibold mb-2">Story Feed</h2>
        <div>
          {/* Map over stories and render StoryCard */}
          {stories.map(story => <StoryCard key={story.id} story={story} />)}
        </div>
      </main>
      <Footer />
    </div>
  );
} 