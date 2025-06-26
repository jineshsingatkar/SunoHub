/**
 * Panic & Abuse Flagging Handlers for Socket.IO
 *
 * Events:
 * - panicButtonPressed: { reporterId, reportedUserId, callId }
 * - abuseReported: { reporterId, reportedUserId, roomId, callId, reason }
 * - adminReviewAction: { reportId, action, userId, roomId }
 *
 * Emits:
 * - panicAlert: to admin dashboard
 * - abuseAlert: to admin dashboard
 */
const Report = require('../models/Report');

function registerPanicAbuseHandlers(io) {
  io.on('connection', (socket) => {
    // Panic Button Pressed
    socket.on('panicButtonPressed', async ({ reporterId, reportedUserId, callId }) => {
      const reportId = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const report = new Report({
        reportId,
        reporterId,
        reportedUserId,
        type: 'panic',
        relatedCallOrRoomId: callId,
        timestamp: new Date(),
        status: 'open',
      });
      await report.save();
      // Emit to admin dashboard
      io.emit('panicAlert', { reportId, reporterId, reportedUserId, callId });
      // Optionally disconnect both users
      // io.sockets.sockets.get(socket.id)?.disconnect();
      // io.sockets.sockets.get(peerSocketId)?.disconnect();
    });

    // Abuse Reported
    socket.on('abuseReported', async ({ reporterId, reportedUserId, roomId, callId, reason }) => {
      const reportId = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const report = new Report({
        reportId,
        reporterId,
        reportedUserId,
        type: 'abuse',
        relatedCallOrRoomId: roomId || callId,
        reason,
        timestamp: new Date(),
        status: 'open',
      });
      await report.save();
      // Emit to admin dashboard
      io.emit('abuseAlert', { reportId, reporterId, reportedUserId, roomId, callId, reason });
      // TODO: Log in admin logs
    });

    // Admin Review Action
    socket.on('adminReviewAction', async ({ reportId, action, userId, roomId }) => {
      // action: blockUser | closeRoom | clearReport
      const report = await Report.findOne({ reportId });
      if (!report) return;
      if (action === 'blockUser') {
        // TODO: Block user in DB
        report.status = 'resolved';
      } else if (action === 'closeRoom') {
        // TODO: Close room logic
        report.status = 'resolved';
      } else if (action === 'clearReport') {
        report.status = 'reviewed';
      }
      await report.save();
      io.emit('reportStatusUpdated', { reportId, status: report.status });
    });
  });
}

module.exports = registerPanicAbuseHandlers; 