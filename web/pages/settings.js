import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Settings() {
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 max-w-md mx-auto w-full px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        {/* App Language */}
        <label className="block mb-2 font-medium">App Language</label>
        <input
          className="input mb-4"
          value={language}
          onChange={e => setLanguage(e.target.value)}
        />
        {/* Notification Settings */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={notifications}
            onChange={e => setNotifications(e.target.checked)}
            className="mr-2"
          />
          <span>Enable Notifications</span>
        </div>
        {/* Privacy and Terms Info */}
        <div className="bg-gray-100 rounded p-4 text-sm text-gray-600">
          <p>We respect your privacy. Your data is secure and never shared.</p>
          <p className="mt-2">See our <a href="/terms" className="text-blue-600 underline">Terms</a> for more info.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 