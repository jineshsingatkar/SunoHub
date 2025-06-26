const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { userId, nickname, avatar, languagePreference, isAnonymous, recoveryCode, deviceInfo } = req.body;
    const user = new User({ userId, nickname, avatar, languagePreference, isAnonymous, recoveryCode, deviceInfo, onlineStatus: true });
    await user.save();
    res.json({ success: true, data: user, message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { userId, nickname, isAnonymous } = req.body;
    let user = await User.findOne({ userId });
    if (!user) {
      user = new User({ userId, nickname, isAnonymous, onlineStatus: true });
      await user.save();
    } else {
      user.onlineStatus = true;
      await user.save();
    }
    // JWT token (optional)
    const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, data: { user, token }, message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOnlineUsers = async (req, res) => {
  try {
    const { language } = req.query;
    const filter = { onlineStatus: true };
    if (language) filter.languagePreference = language;
    const users = await User.find(filter);
    res.json({ success: true, data: users, message: 'Online users fetched' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updatePresence = async (req, res) => {
  try {
    const { userId, onlineStatus } = req.body;
    const user = await User.findOneAndUpdate({ userId }, { onlineStatus }, { new: true });
    res.json({ success: true, data: user, message: 'Presence updated' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}; 