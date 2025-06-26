const VoiceConfession = require('../models/VoiceConfession');
const path = require('path');

exports.uploadVoice = async (req, res) => {
  try {
    const { confessionId, userId, transcribedText, language } = req.body;
    const audioURL = req.file ? `/uploads/${req.file.filename}` : undefined;
    const confession = new VoiceConfession({ confessionId, userId, audioURL, transcribedText, language });
    await confession.save();
    res.json({ success: true, data: confession, message: 'Voice confession uploaded' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.transcribeVoice = async (req, res) => {
  try {
    // Placeholder for actual transcription logic
    const confession = await VoiceConfession.findOne({ confessionId: req.params.id });
    if (!confession) return res.status(404).json({ success: false, message: 'Confession not found' });
    // Simulate transcription
    const transcribedText = confession.transcribedText || 'Transcription not implemented.';
    res.json({ success: true, data: { confessionId: confession.confessionId, transcribedText }, message: 'Transcription result' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getAllConfessions = async (req, res) => {
  try {
    const confessions = await VoiceConfession.find();
    res.json({ success: true, data: confessions, message: 'All voice confessions fetched' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}; 