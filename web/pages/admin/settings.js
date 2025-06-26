// Admin Settings Page
import { useState } from 'react';
// TODO: Add JWT-based route protection middleware

// Placeholder data
const admins = [
  { id: 1, username: 'admin1', permissions: ['all'] },
  { id: 2, username: 'admin2', permissions: ['moderate'] },
];

export default function AdminSettings() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>
      {/* Admin Users Table */}
      <h2 className="text-lg font-semibold mb-2">Admin Users</h2>
      <table className="min-w-full bg-white rounded shadow mb-8">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2">Permissions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin => (
            <tr key={admin.id} className="border-t">
              <td className="px-4 py-2">{admin.username}</td>
              <td className="px-4 py-2 text-center">{admin.permissions.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* System-wide Bans (placeholder) */}
      <h2 className="text-lg font-semibold mb-2">System-wide Bans</h2>
      <div className="bg-white rounded shadow p-4 mb-8">No banned users.</div>
      {/* Permissions Management (placeholder) */}
      <h2 className="text-lg font-semibold mb-2">Permissions Management</h2>
      <div className="bg-white rounded shadow p-4">Manage permissions here...</div>
    </div>
  );
} 