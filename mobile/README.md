# SunoHub Mobile App

A cross-platform React Native app for anonymous stories, random calls, public rooms, and voice confessions.

## 📱 Setup Guide
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **React Native CLI:**
   - Install [React Native CLI](https://reactnative.dev/docs/environment-setup) and Android Studio/Xcode as needed.
3. **Environment:**
   - Copy `.env.example` to `.env` and fill in API base URL, etc.

## 📦 Required Libraries
- `@react-navigation/native`, `@react-navigation/stack`, `@react-navigation/bottom-tabs`
- `react-native-paper` (UI components)
- `axios` (API calls)
- `react-native-safe-area-context`, `react-native-vector-icons`
- `socket.io-client` (real-time)

## 🗺️ Navigation & Screens
- **SplashScreen**: App logo, loading
- **OnboardingScreen**: Language, nickname, avatar
- **DashboardScreen**: Main actions, story feed
- **RandomCallScreen**: 1-to-1 call UI
- **WriteConfessionScreen**: Text confession
- **VoiceConfessionScreen**: Record/upload voice
- **PublicRoomScreen**: Audio room
- **ProfileScreen**: User profile
- **SettingsScreen**: Preferences

## ▶️ Run the App
- For Android:
  ```bash
  npm run android
  ```
- For iOS:
  ```bash
  npm run ios
  ```

---

For API endpoints and real-time events, see the main project README. 