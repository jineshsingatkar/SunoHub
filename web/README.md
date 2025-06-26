# SunoHub Web App

A modern Next.js web app for anonymous stories, random calls, public rooms, and voice confessions.

## 🌐 Setup Guide
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Environment:**
   - Copy `.env.example` to `.env` and fill in API base URL, etc.

## 🎨 Tailwind CSS
- Configured in `tailwind.config.js` for `/pages` and `/components`
- Utility classes for responsive, modern UI

## 🗺️ Routing & Pages
- `/` (Home/Dashboard)
- `/onboarding`
- `/dashboard`
- `/confession/[id]`
- `/write-confession`
- `/voice-confession`
- `/public-rooms`
- `/profile`
- `/settings`
- `/admin/*` (admin dashboard, login, moderation, etc.)

## ▶️ Run the Web App
```bash
npm run dev
```

---

For API endpoints and real-time events, see the main project README. 