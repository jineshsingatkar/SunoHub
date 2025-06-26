const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  reportId: { type: String, required: true, unique: true },
  reporterId: { type: String, required: true },
  reportedUserId: { type: String, required: true },
  type: { type: String, enum: ['panic', 'abuse'], required: true },
  relatedCallOrRoomId: { type: String },
  reason: { type: String },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ['open', 'reviewed', 'resolved'], default: 'open' }
});

module.exports = mongoose.model('Report', ReportSchema); 