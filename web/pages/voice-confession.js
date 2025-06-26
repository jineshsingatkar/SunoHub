import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function VoiceConfession() {
  const [audio, setAudio] = useState(null);
  const [transcription, setTranscription] = useState('');
  const [translation, setTranslation] = useState('');

  // Placeholder for audio upload
  const handleAudioUpload = e => {
    // TODO: Handle audio file upload
    setAudio(e.target.files[0]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 max-w-md mx-auto w-full px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Voice Confession</h1>
        {/* Upload Audio Button */}
        <input type="file" accept="audio/*" className="mb-4" onChange={handleAudioUpload} />
        {/* Playback Preview (placeholder) */}
        {audio && <audio controls src={URL.createObjectURL(audio)} className="mb-4" />}
        {/* Transcribed Text Area (placeholder) */}
        <textarea
          className="input mb-4 w-full"
          rows={3}
          value={transcription}
          onChange={e => setTranscription(e.target.value)}
          placeholder="Transcribed text will appear here..."
        />
        {/* Translate Dropdown (placeholder) */}
        <input
          className="input mb-4"
          value={translation}
          onChange={e => setTranslation(e.target.value)}
          placeholder="Translate to (e.g. hi, es)"
        />
        {/* Post Button */}
        <button className="btn-primary w-full">Post</button>
      </main>
      <Footer />
    </div>
  );
} 