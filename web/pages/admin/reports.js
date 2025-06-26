// Reports Table
import { useState } from 'react';
// TODO: Add JWT-based route protection middleware

// Placeholder data
const reports = [
  { id: 1, reporter: 'anon123', reported: 'anon456', type: 'abuse', timestamp: '2024-06-26 10:00' },
  { id: 2, reporter: 'anon789', reported: 'call789', type: 'panic', timestamp: '2024-06-26 10:05' },
];

export default function AdminReports() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Abuse & Panic Reports</h1>
      {/* Reports Table */}
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Reporter</th>
            <th className="px-4 py-2 text-left">Reported</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Timestamp</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(r => (
            <tr key={r.id} className="border-t">
              <td className="px-4 py-2">{r.reporter}</td>
              <td className="px-4 py-2">{r.reported}</td>
              <td className="px-4 py-2 text-center">{r.type}</td>
              <td className="px-4 py-2 text-center">{r.timestamp}</td>
              <td className="px-4 py-2 flex gap-2">
                <button className="btn-primary">Review</button>
                <button className="btn-secondary">Dismiss</button>
                <button className="btn-error">Block User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 