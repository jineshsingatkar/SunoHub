// Call Logs Table
import { useState } from 'react';
// TODO: Add JWT-based route protection middleware

// Placeholder data
const calls = [
  { id: 1, participants: ['anon123', 'anon456'], duration: '03:12', language: 'en', status: 'normal' },
  { id: 2, participants: ['anon789', 'anon321'], duration: '01:45', language: 'hi', status: 'panic' },
];

export default function AdminCallLogs() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Call Logs</h1>
      {/* Call Logs Table */}
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Participants</th>
            <th className="px-4 py-2">Duration</th>
            <th className="px-4 py-2">Language</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {calls.map(call => (
            <tr key={call.id} className="border-t">
              <td className="px-4 py-2">{call.participants.join(', ')}</td>
              <td className="px-4 py-2 text-center">{call.duration}</td>
              <td className="px-4 py-2 text-center">{call.language}</td>
              <td className="px-4 py-2 text-center">{call.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 