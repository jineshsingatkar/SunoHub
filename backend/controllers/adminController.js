const Admin = require('../models/Admin');
const VoiceConfession = require('../models/VoiceConfession');
const Story = require('../models/Story');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    const { username, passwordHash } = req.body;
    const admin = await Admin.findOne({ username, passwordHash });
    if (!admin) return res.status(401).json({ success: false, message: 'Invalid credentials' });
    const token = jwt.sign({ adminId: admin.adminId }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, data: { admin, token }, message: 'Admin login successful' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.viewConfessions = async (req, res) => {
  try {
    const confessions = await VoiceConfession.find();
    res.json({ success: true, data: confessions, message: 'All confessions' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.approveStory = async (req, res) => {
  try {
    const { storyId } = req.body;
    const story = await Story.findOneAndUpdate({ storyId }, { approved: true }, { new: true });
    if (!story) return res.status(404).json({ success: false, message: 'Story not found' });
    res.json({ success: true, data: story, message: 'Story approved' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.blockUser = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findOneAndUpdate({ userId }, { blocked: true }, { new: true });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, data: user, message: 'User blocked' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.viewReports = async (req, res) => {
  try {
    // Placeholder: implement actual report fetching logic
    res.json({ success: true, data: [], message: 'Reports fetched (not implemented)' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}; 