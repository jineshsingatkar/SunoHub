const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const voiceConfessionController = require('../controllers/voiceConfessionController');
const auth = require('../middleware/auth');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.post('/upload', auth, upload.single('audio'), voiceConfessionController.uploadVoice);
router.get('/transcribe/:id', auth, voiceConfessionController.transcribeVoice);
router.get('/all', auth, voiceConfessionController.getAllConfessions);

module.exports = router; 