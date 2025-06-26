// Real-Time User Presence Handlers for Socket.IO
const ActiveUserPresence = require('../models/ActiveUserPresence');

// In-memory map: socketId -> user presence info
const onlineUsersMap = new Map();

// Helper: Broadcast online users and counts
async function broadcastOnlineUsers(io) {
  // Get all users from memory
  const users = Array.from(onlineUsersMap.values());
  // Count per language
  const counts = users.reduce((acc, user) => {
    acc[user.language] = (acc[user.language] || 0) + 1;
    return acc;
  }, {});
  io.emit('onlineUsersUpdated', {
    total: users.length,
    perLanguage: counts,
    users,
  });
}

function registerPresenceHandlers(io) {
  io.on('connection', (socket) => {
    // userOnline: user connects
    socket.on('userOnline', async ({ userId, nickname, language, status }) => {
      const presence = {
        userId,
        nickname,
        socketId: socket.id,
        language,
        status: status || 'available',
        lastSeen: new Date(),
      };
      onlineUsersMap.set(socket.id, presence);
      // Upsert in DB
      await ActiveUserPresence.findOneAndUpdate(
        { userId },
        presence,
        { upsert: true, new: true }
      );
      await broadcastOnlineUsers(io);
    });

    // updateOnlineStatus: update status/lastSeen
    socket.on('updateOnlineStatus', async ({ status }) => {
      const user = onlineUsersMap.get(socket.id);
      if (user) {
        user.status = status;
        user.lastSeen = new Date();
        onlineUsersMap.set(socket.id, user);
        await ActiveUserPresence.findOneAndUpdate(
          { userId: user.userId },
          { status, lastSeen: user.lastSeen }
        );
        await broadcastOnlineUsers(io);
      }
    });

    // disconnect: remove from memory and DB
    socket.on('disconnect', async () => {
      const user = onlineUsersMap.get(socket.id);
      if (user) {
        onlineUsersMap.delete(socket.id);
        await ActiveUserPresence.deleteOne({ userId: user.userId });
        await broadcastOnlineUsers(io);
      }
    });
  });
}

module.exports = registerPresenceHandlers; 