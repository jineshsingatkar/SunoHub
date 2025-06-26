import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function WriteConfession() {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [mood, setMood] = useState('');
  const [language, setLanguage] = useState('en');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 max-w-md mx-auto w-full px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Write a Confession</h1>
        {/* Text Input */}
        <textarea
          className="input mb-4 w-full"
          rows={4}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write your confession..."
        />
        {/* Category Selector (placeholder) */}
        <input
          className="input mb-4"
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder="Category (e.g. Love, Regret)"
        />
        {/* Mood Selector (placeholder) */}
        <input
          className="input mb-4"
          value={mood}
          onChange={e => setMood(e.target.value)}
          placeholder="Mood (e.g. Happy, Sad)"
        />
        {/* Language Selector (placeholder) */}
        <input
          className="input mb-4"
          value={language}
          onChange={e => setLanguage(e.target.value)}
          placeholder="Language (e.g. en, hi)"
        />
        {/* Post Anonymously Button */}
        <button className="btn-primary w-full">Post Anonymously</button>
      </main>
      <Footer />
    </div>
  );
} 