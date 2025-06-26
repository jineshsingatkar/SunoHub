// Public Rooms Management Table
import { useState } from 'react';
// TODO: Add JWT-based route protection middleware

// Placeholder data
const rooms = [
  { id: 1, name: 'Room 1', language: 'en', users: 8, status: 'open' },
  { id: 2, name: 'Room 2', language: 'hi', users: 5, status: 'closed' },
];

export default function AdminRooms() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Public Rooms Management</h1>
      {/* Rooms Table */}
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Room Name</th>
            <th className="px-4 py-2">Language</th>
            <th className="px-4 py-2">Users</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room.id} className="border-t">
              <td className="px-4 py-2">{room.name}</td>
              <td className="px-4 py-2 text-center">{room.language}</td>
              <td className="px-4 py-2 text-center">{room.users}</td>
              <td className="px-4 py-2 text-center">{room.status}</td>
              <td className="px-4 py-2 flex gap-2">
                <button className="btn-secondary">Mute Room</button>
                <button className="btn-error">Close Room</button>
                <button className="btn-error">Ban User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 