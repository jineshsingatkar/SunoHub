/**
 * WebRTC Signaling Handlers for Socket.IO
 *
 * Handles peer-to-peer audio/video signaling for random and room-based calls.
 *
 * Events:
 * - webrtc_offer: Caller sends SDP offer to callee
 * - webrtc_answer: Callee sends SDP answer to caller
 * - webrtc_ice_candidate: Exchange ICE candidates
 * - webrtc_disconnect: User leaves call
 *
 * Usage:
 *   const registerWebRTCSignaling = require('./webrtc/signalingHandlers');
 *   registerWebRTCSignaling(io);
 */

// In-memory map to track peer connections: { socketId: peerSocketId }
const peerConnections = {};

function registerWebRTCSignaling(io) {
  io.on('connection', (socket) => {
    // Listen for offer from caller
    socket.on('webrtc_offer', ({ to, offer }) => {
      // Save peer mapping
      peerConnections[socket.id] = to;
      peerConnections[to] = socket.id;
      // Forward offer to callee
      io.to(to).emit('webrtc_offer', { from: socket.id, offer });
      console.log(`[WebRTC] Offer from ${socket.id} to ${to}`);
    });

    // Listen for answer from callee
    socket.on('webrtc_answer', ({ to, answer }) => {
      io.to(to).emit('webrtc_answer', { from: socket.id, answer });
      console.log(`[WebRTC] Answer from ${socket.id} to ${to}`);
    });

    // Listen for ICE candidates
    socket.on('webrtc_ice_candidate', ({ to, candidate }) => {
      io.to(to).emit('webrtc_ice_candidate', { from: socket.id, candidate });
      console.log(`[WebRTC] ICE candidate from ${socket.id} to ${to}`);
    });

    // Handle disconnect or explicit signaling disconnect
    function handleDisconnect() {
      const peerId = peerConnections[socket.id];
      if (peerId) {
        io.to(peerId).emit('webrtc_disconnect', { from: socket.id });
        delete peerConnections[peerId];
        delete peerConnections[socket.id];
        console.log(`[WebRTC] ${socket.id} disconnected from ${peerId}`);
      }
    }

    socket.on('webrtc_disconnect', handleDisconnect);
    socket.on('disconnect', handleDisconnect);
  });
}

module.exports = registerWebRTCSignaling; 