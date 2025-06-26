const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  adminId: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  permissions: [{ type: String }],
  actionLogs: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Admin', AdminSchema); 