import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Placeholder data
const rooms = [
  { id: 1, title: 'Room 1', users: 8 },
  { id: 2, title: 'Room 2', users: 5 },
];

export default function PublicRooms() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Public Rooms</h1>
        {/* List of Rooms */}
        <div className="space-y-4">
          {rooms.map(room => (
            <div key={room.id} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
              <div>
                <div className="font-semibold text-lg">{room.title}</div>
                <div className="text-gray-500 text-sm">Online Users: {room.users}</div>
              </div>
              <button className="btn-primary">Join Room</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 