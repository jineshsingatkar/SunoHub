import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

export default function Onboarding() {
  const router = useRouter();
  const [language, setLanguage] = useState('en');
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState(null);

  // Placeholder for avatar picker
  const handleAvatarPick = () => {
    // TODO: Implement avatar picker
    setAvatar('/avatar-placeholder.png');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 max-w-md mx-auto w-full px-4 py-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6">Welcome to SunoHub</h1>
        {/* Language Dropdown (placeholder) */}
        <label className="block mb-2 font-medium">Select Language</label>
        <input
          className="input mb-4"
          value={language}
          onChange={e => setLanguage(e.target.value)}
          placeholder="e.g. en, hi, es"
        />
        {/* Nickname Input */}
        <label className="block mb-2 font-medium">Nickname</label>
        <input
          className="input mb-4"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
          placeholder="Enter your nickname"
        />
        {/* Avatar Picker */}
        <label className="block mb-2 font-medium">Avatar</label>
        <div className="mb-4 flex flex-col items-center">
          <img src={avatar || '/avatar-placeholder.png'} alt="Avatar" className="w-16 h-16 rounded-full mb-2" />
          <button className="btn-outline" onClick={handleAvatarPick}>Choose Avatar</button>
        </div>
        {/* Continue Button */}
        <button className="btn-primary w-full" onClick={() => router.push('/dashboard')}>Continue</button>
      </main>
    </div>
  );
} 