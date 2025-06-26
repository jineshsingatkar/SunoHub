const mongoose = require('mongoose');

const ActiveUserPresenceSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  socketId: { type: String, required: true },
  nickname: { type: String },
  language: { type: String },
  status: { type: String },
  lastSeen: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('ActiveUserPresence', ActiveUserPresenceSchema); 