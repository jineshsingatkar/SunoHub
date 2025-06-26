import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Profile() {
  const [nickname, setNickname] = useState('User123');
  const [language, setLanguage] = useState('en');
  const [avatar, setAvatar] = useState('/avatar-placeholder.png');

  // Placeholder for avatar picker
  const handleAvatarPick = () => {
    // TODO: Implement avatar picker
    setAvatar('/avatar-placeholder.png');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 max-w-md mx-auto w-full px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        {/* Avatar Picker */}
        <div className="mb-4 flex flex-col items-center">
          <img src={avatar} alt="Avatar" className="w-20 h-20 rounded-full mb-2" />
          <button className="btn-outline" onClick={handleAvatarPick}>Change Avatar</button>
        </div>
        {/* Nickname Input */}
        <label className="block mb-2 font-medium">Nickname</label>
        <input
          className="input mb-4"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
        />
        {/* Language Input */}
        <label className="block mb-2 font-medium">Language</label>
        <input
          className="input mb-4"
          value={language}
          onChange={e => setLanguage(e.target.value)}
        />
        <button className="btn-primary w-full">Update Profile</button>
      </main>
      <Footer />
    </div>
  );
} 