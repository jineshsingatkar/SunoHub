# SunoHub

A full-stack, real-time, privacy-first social platform for anonymous stories, random calls, public rooms, and voice confessions.

## 📱 Platforms
- **React Native Mobile App** (`/mobile`)
- **Next.js Web App** (`/web`)
- **Node.js + Express Backend** (`/backend`)

## 📦 Tech Stack
- **Frontend:** React Native, Next.js, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Real-Time:** Socket.IO (WebRTC, presence, calls)
- **Voice:** Whisper CLI, Google Cloud Speech-to-Text
- **Admin:** Custom dashboard, JWT auth

## 📁 Folder Structure
```
SunoHub/
├── backend/           # Node.js + Express API, Socket.IO, MongoDB
├── mobile/            # React Native mobile app
├── web/               # Next.js web app
├── docs/              # Documentation (SocketEvents.md, etc.)
├── README.md          # Project overview (this file)
```

## ✨ Key Features
- Anonymous story posting and browsing
- Random 1-to-1 call matchmaking by language
- Public audio rooms with live chat and reactions
- Voice confession upload + transcription (Whisper/Google STT)
- Real-time online presence and call status
- Panic button & abuse reporting (admin alerts)
- Admin dashboard for moderation, reports, and live monitoring

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/jineshsingatkar/SunoHub.git
cd SunoHub
```

### 2. Install dependencies
```bash
cd backend && npm install
cd ../web && npm install
cd ../mobile && npm install
```

### 3. Set up environment variables
- Copy `.env.example` in each folder to `.env` and fill in your secrets (MongoDB URI, JWT, Google STT, etc.)

### 4. Run the apps
- **Backend:**
  ```bash
  cd backend
  npm run dev
  ```
- **Web:**
  ```bash
  cd web
  npm run dev
  ```
- **Mobile:**
  ```bash
  cd mobile
  npm run android # or npm run ios
  ```

## 🔗 API & WebSocket Endpoints
- **REST API:** `http://localhost:5000/api/`
- **WebSocket:** `ws://localhost:5000` (Socket.IO)
- **Key Routes:**
  - `/api/user/*` (register, login, presence)
  - `/api/story/*` (post, fetch, delete)
  - `/api/voice/*` (upload, transcribe, list)
  - `/api/admin/*` (login, moderation)
  - `/api/reports/*` (report management)

## 🛰️ Deployment Suggestions
- **Backend:** Railway, Render, Heroku (Node.js, MongoDB)
- **Web:** Vercel, Netlify (Next.js)
- **Mobile:** Expo Go, EAS, or native stores

## 🔒 Security Guidelines
- JWT authentication for all protected routes
- CORS enabled for trusted origins
- Rate limiting on API endpoints
- Input validation and file type checks
- Never commit secrets to git

---

For detailed API, Socket.IO, and event documentation, see [`/docs/SocketEvents.md`](./docs/SocketEvents.md).

---

## 👩‍💻 Contributing
Pull requests welcome! Please open issues for bugs or feature requests. 