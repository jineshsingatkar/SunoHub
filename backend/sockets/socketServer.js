const { Server } = require('socket.io');
const registerPresenceHandlers = require('./presenceHandlers');
const registerPanicAbuseHandlers = require('./panicAbuseHandlers');

// In-memory structures
const randomQueues = {}; // { language: [socketId, ...] }
const onlineUsers = {}; // { socketId: { userId, language, status } }
const publicRooms = {}; // { roomId: Set(socketId) }

function setupSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log(`[Socket.IO] User connected: ${socket.id}`);

    // --- Random Call Matchmaking ---
    socket.on('joinRandomQueue', ({ userId, language }) => {
      if (!randomQueues[language]) randomQueues[language] = [];
      randomQueues[language].push(socket.id);
      onlineUsers[socket.id] = { userId, language, status: 'waiting' };
      console.log(`[RandomQueue] ${userId} joined queue for ${language}`);
      // Try to match
      if (randomQueues[language].length >= 2) {
        const [sid1, sid2] = randomQueues[language].splice(0, 2);
        io.to(sid1).emit('randomCallFound', { peerSocketId: sid2 });
        io.to(sid2).emit('randomCallFound', { peerSocketId: sid1 });
        onlineUsers[sid1].status = 'in-call';
        onlineUsers[sid2].status = 'in-call';
        console.log(`[RandomQueue] Matched ${sid1} and ${sid2} in ${language}`);
      } else {
        socket.emit('waitingForRandomCall');
      }
    });

    socket.on('leaveRandomQueue', () => {
      for (const lang in randomQueues) {
        randomQueues[lang] = randomQueues[lang].filter(sid => sid !== socket.id);
      }
      if (onlineUsers[socket.id]) onlineUsers[socket.id].status = 'idle';
      console.log(`[RandomQueue] ${socket.id} left queue`);
    });

    socket.on('callEnded', () => {
      if (onlineUsers[socket.id]) onlineUsers[socket.id].status = 'idle';
      socket.emit('callEnded');
      console.log(`[RandomQueue] Call ended for ${socket.id}`);
    });

    // --- Public Audio Rooms ---
    socket.on('roomUserConnected', ({ roomId, userId }) => {
      if (!publicRooms[roomId]) publicRooms[roomId] = new Set();
      publicRooms[roomId].add(socket.id);
      socket.join(roomId);
      io.to(roomId).emit('roomUserConnected', { userId, socketId: socket.id });
      console.log(`[Room] ${userId} joined room ${roomId}`);
    });

    socket.on('roomUserDisconnected', ({ roomId, userId }) => {
      if (publicRooms[roomId]) publicRooms[roomId].delete(socket.id);
      socket.leave(roomId);
      io.to(roomId).emit('roomUserDisconnected', { userId, socketId: socket.id });
      console.log(`[Room] ${userId} left room ${roomId}`);
    });

    socket.on('voiceMessageSent', ({ roomId, userId, audioURL }) => {
      io.to(roomId).emit('voiceMessageSent', { userId, audioURL });
      console.log(`[Room] Voice message from ${userId} in room ${roomId}`);
    });

    socket.on('emojiReactionSent', ({ roomId, userId, emoji }) => {
      io.to(roomId).emit('emojiReactionSent', { userId, emoji });
      console.log(`[Room] Emoji reaction from ${userId} in room ${roomId}: ${emoji}`);
    });

    socket.on('micRequestSent', ({ roomId, userId }) => {
      io.to(roomId).emit('micRequestSent', { userId });
      console.log(`[Room] Mic request from ${userId} in room ${roomId}`);
    });

    socket.on('micRequestApproved', ({ roomId, userId }) => {
      io.to(roomId).emit('micRequestApproved', { userId });
      console.log(`[Room] Mic request approved for ${userId} in room ${roomId}`);
    });

    socket.on('panicReportSent', ({ roomId, userId, reason }) => {
      io.to(roomId).emit('panicReportSent', { userId, reason });
      console.log(`[Room] Panic report from ${userId} in room ${roomId}: ${reason}`);
    });

    // --- Online Presence ---
    socket.on('updateOnlineStatus', ({ userId, status, language }) => {
      onlineUsers[socket.id] = { userId, status, language };
      io.emit('updateOnlineStatus', { userId, status });
      console.log(`[Presence] ${userId} is now ${status}`);
    });

    socket.on('disconnect', () => {
      // Remove from random queues
      for (const lang in randomQueues) {
        randomQueues[lang] = randomQueues[lang].filter(sid => sid !== socket.id);
      }
      // Remove from public rooms
      for (const roomId in publicRooms) {
        publicRooms[roomId].delete(socket.id);
      }
      // Remove from online users
      const user = onlineUsers[socket.id];
      if (user) {
        io.emit('updateOnlineStatus', { userId: user.userId, status: 'offline' });
        delete onlineUsers[socket.id];
      }
      console.log(`[Socket.IO] User disconnected: ${socket.id}`);
    });
  });

  // Register presence event handlers
  registerPresenceHandlers(io);
  // Register panic/abuse event handlers
  registerPanicAbuseHandlers(io);

  return io;
}

module.exports = setupSocket; 