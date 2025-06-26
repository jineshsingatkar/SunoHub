// Confessions Moderation Table
import { useState } from 'react';
// TODO: Add JWT-based route protection middleware

// Placeholder data
const confessions = [
  { id: 1, content: 'Sample confession...', user: 'anon123', reactions: 5, reports: 1 },
  { id: 2, content: 'Another confession...', user: 'anon456', reactions: 2, reports: 0 },
];

export default function AdminConfessions() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Confessions Moderation</h1>
      {/* Confessions Table */}
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Content</th>
            <th className="px-4 py-2 text-left">User</th>
            <th className="px-4 py-2">Reactions</th>
            <th className="px-4 py-2">Reports</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {confessions.map(c => (
            <tr key={c.id} className="border-t">
              <td className="px-4 py-2">{c.content}</td>
              <td className="px-4 py-2">{c.user}</td>
              <td className="px-4 py-2 text-center">{c.reactions}</td>
              <td className="px-4 py-2 text-center">{c.reports}</td>
              <td className="px-4 py-2 flex gap-2">
                <button className="btn-primary">Approve</button>
                <button className="btn-secondary">Delete</button>
                <button className="btn-error">Block User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 