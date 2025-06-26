const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/online', auth, userController.getOnlineUsers);
router.post('/updatePresence', auth, userController.updatePresence);

module.exports = router; 