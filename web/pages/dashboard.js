import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StoryCard from '../components/StoryCard';
import { useState } from 'react';

// Placeholder data
const stories = [
  { id: 1, text: 'Sample story 1', reactions: 5, language: 'en', category: 'General' },
  { id: 2, text: 'Sample story 2', reactions: 2, language: 'hi', category: 'Love' },
];

export default function Dashboard() {
  const [language, setLanguage] = useState('');
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">
        {/* Online Users Count and Language Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div className="text-gray-700">Online Users: <span className="font-semibold">42</span></div>
          <div className="mt-2 md:mt-0">
            {/* Language Filter (placeholder) */}
            <input
              className="input"
              value={language}
              onChange={e => setLanguage(e.target.value)}
              placeholder="Filter by language (e.g. en)"
            />
          </div>
        </div>
        {/* Main Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button className="btn-primary">Start Random Call</button>
          <button className="btn-secondary">Write Confession</button>
          <button className="btn-secondary">Record Voice Confession</button>
          <button className="btn-secondary">Join Public Room</button>
        </div>
        {/* Story Feed */}
        <h2 className="text-xl font-semibold mb-2">Story Feed</h2>
        <div>
          {stories.map(story => <StoryCard key={story.id} story={story} />)}
        </div>
      </main>
      {/* Bottom Navbar (placeholder) */}
      <div className="w-full bg-white border-t border-gray-200 py-2 flex justify-around fixed bottom-0 left-0 right-0 md:static md:mt-8">
        <a href="/dashboard" className="text-blue-600 font-semibold">Dashboard</a>
        <a href="/public-rooms" className="text-gray-700">Rooms</a>
        <a href="/profile" className="text-gray-700">Profile</a>
        <a href="/settings" className="text-gray-700">Settings</a>
      </div>
      <Footer />
    </div>
  );
} 