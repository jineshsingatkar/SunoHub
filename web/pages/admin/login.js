import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Call backend admin login API
      const res = await axios.post('/api/admin/login', { username, passwordHash: password });
      if (res.data.success && res.data.data.token) {
        // Save JWT token to localStorage
        localStorage.setItem('adminToken', res.data.data.token);
        router.push('/admin/dashboard');
      } else {
        setError(res.data.message || 'Login failed');
      }
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="bg-white p-8 rounded shadow max-w-sm w-full" onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <label className="block mb-2 font-medium">Username</label>
        <input className="input mb-4" value={username} onChange={e => setUsername(e.target.value)} required />
        <label className="block mb-2 font-medium">Password</label>
        <input className="input mb-6" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button className="btn-primary w-full" type="submit">Login</button>
      </form>
    </div>
  );
} 