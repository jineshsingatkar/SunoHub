const mongoose = require('mongoose');

const RandomCallRoomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  participants: [{ type: String }],
  language: { type: String },
  status: { type: String },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('RandomCallRoom', RandomCallRoomSchema); 