// Admin Dashboard: Overview and quick actions
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// TODO: Add JWT-based route protection middleware

export default function AdminDashboard() {
  const router = useRouter();
  // Placeholder stats
  const stats = [
    { label: 'Active Users', value: 42 },
    { label: 'Active Calls', value: 5 },
    { label: 'Reported Cases', value: 3 },
    { label: 'Public Rooms Live', value: 2 },
  ];
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map(stat => (
          <div key={stat.label} className="bg-white rounded shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">{stat.value}</span>
            <span className="text-gray-600 mt-2">{stat.label}</span>
          </div>
        ))}
      </div>
      {/* Quick Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button className="btn-primary" onClick={() => router.push('/admin/confessions')}>Confessions Moderation</button>
        <button className="btn-secondary" onClick={() => router.push('/admin/reports')}>Reports</button>
        <button className="btn-secondary" onClick={() => router.push('/admin/rooms')}>Room Management</button>
      </div>
      {/* TODO: Add live system monitoring widgets */}
    </div>
  );
} 