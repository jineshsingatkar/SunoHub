const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  storyId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  text: { type: String },
  audioURL: { type: String },
  category: { type: String },
  moodTag: { type: String },
  language: { type: String },
  reactions: { type: Number, default: 0 },
  reports: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Story', StorySchema); 