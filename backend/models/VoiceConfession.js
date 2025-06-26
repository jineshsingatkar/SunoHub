const mongoose = require('mongoose');

const VoiceConfessionSchema = new mongoose.Schema({
  confessionId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  audioURL: { type: String },
  transcribedText: { type: String },
  language: { type: String },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('VoiceConfession', VoiceConfessionSchema); 