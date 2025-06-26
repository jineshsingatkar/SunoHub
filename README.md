# SunoHub - Full-Stack Multi-Platform Project

A comprehensive full-stack application supporting React Native mobile app, Next.js web app, and Node.js backend.

## 🏗️ Project Structure

```
SunoHub/
├── mobile/                  # React Native Mobile App
│   ├── components/          # Reusable UI components
│   ├── screens/            # Screen components
│   ├── navigation/         # Navigation configuration
│   ├── services/           # API services and external integrations
│   ├── assets/             # Images, fonts, and static files
│   ├── utils/              # Utility functions and helpers
│   ├── App.js              # Main app component
│   └── package.json        # Dependencies and scripts
│
├── web/                     # Next.js Web App
│   ├── components/          # Reusable UI components
│   ├── pages/              # Next.js pages and routing
│   ├── public/             # Static assets
│   ├── services/           # API services and external integrations
│   ├── utils/              # Utility functions and helpers
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   ├── next.config.js      # Next.js configuration
│   └── package.json        # Dependencies and scripts
│
├── backend/                 # Node.js + Express Backend
│   ├── config/             # Configuration files
│   ├── models/             # Database models
│   ├── controllers/        # Route controllers
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── services/           # Business logic services
│   ├── sockets/            # WebSocket handlers
│   ├── webrtc/             # WebRTC functionality
│   ├── uploads/            # File upload handling
│   ├── server.js           # Main server file
│   └── package.json        # Dependencies and scripts
│
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- React Native CLI (for mobile development)
- Android Studio / Xcode (for mobile development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SunoHub
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Web App Dependencies**
   ```bash
   cd ../web
   npm install
   ```

4. **Install Mobile App Dependencies**
   ```bash
   cd ../mobile
   npm install
   ```

### Running the Applications

#### Backend Server
```bash
cd backend
npm run dev
```

#### Web Application
```bash
cd web
npm run dev
```

#### Mobile Application
```bash
cd mobile
npx react-native run-android  # For Android
npx react-native run-ios      # For iOS
```

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB/PostgreSQL
- **Authentication**: JWT
- **Real-time**: Socket.io
- **File Upload**: Multer
- **WebRTC**: PeerJS

### Web App
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit / Zustand
- **UI Components**: Headless UI / Radix UI

### Mobile App
- **Framework**: React Native
- **Navigation**: React Navigation
- **State Management**: Redux Toolkit / Zustand
- **UI Components**: React Native Elements

## 📱 Features

- **Cross-platform**: Shared business logic between web and mobile
- **Real-time communication**: WebSocket support
- **File uploads**: Image and document handling
- **Authentication**: Secure user management
- **Responsive design**: Works on all screen sizes
- **Offline support**: Mobile app offline capabilities

## 🔧 Development

### Code Style
- ESLint and Prettier for code formatting
- TypeScript for type safety
- Conventional commits for version control

### Testing
- Jest for unit testing
- React Testing Library for component testing
- Supertest for API testing

### Deployment
- Backend: Docker containers on cloud platforms
- Web: Vercel/Netlify deployment
- Mobile: App Store and Google Play Store

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support and questions, please open an issue in the repository. 