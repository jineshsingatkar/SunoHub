const express = require('express');
const router = express.Router();
const uploadVoice = require('../middleware/uploadMiddleware');
const voiceConfessionController = require('../controllers/voiceConfessionController');

// POST /api/voice/upload
router.post('/upload', uploadVoice.single('audio'), voiceConfessionController.uploadVoiceConfession);

// GET /api/voice/transcribe/:id
router.get('/transcribe/:id', voiceConfessionController.transcribeVoiceConfession);

// GET /api/voice/all
router.get('/all', voiceConfessionController.getAllVoiceConfessions);

module.exports = router; 