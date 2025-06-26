# SunoHub Backend

Node.js + Express backend for SunoHub: REST API, real-time Socket.IO, MongoDB, and voice transcription.

## 🛠️ Setup Guide
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **MongoDB:**
   - Set up a MongoDB instance (local or Atlas)
   - Copy `.env.example` to `.env` and fill in `MONGO_URI`, `JWT_SECRET`, etc.
3. **Whisper/Google STT:**
   - For Whisper: Install [openai-whisper](https://github.com/openai/whisper) CLI and ensure it's in your PATH
   - For Google STT: Set up a Google Cloud project and credentials JSON

## 📦 Dependencies
- express, mongoose, cors, dotenv, jsonwebtoken, multer, bcryptjs, socket.io
- @google-cloud/speech, @google-cloud/translate (for STT/translation)

## 📖 API Routes Summary
- `/api/user/*` (register, login, presence)
- `/api/story/*` (post, fetch, delete)
- `/api/voice/*` (upload, transcribe, list)
- `/api/admin/*` (login, moderation)
- `/api/reports/*` (report management)

## 🔌 Socket.IO Events
- Real-time presence, call matching, public rooms
- Voice/WebRTC signaling
- Panic/abuse reporting
- See `/docs/SocketEvents.md` for full event list

## ▶️ Run the Backend
```bash
npm run dev
```

---

For API endpoints and real-time events, see the main project README. 