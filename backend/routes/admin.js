const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');

router.post('/login', adminController.login);
router.get('/confessions', auth, adminController.viewConfessions);
router.post('/approveStory', auth, adminController.approveStory);
router.post('/blockUser', auth, adminController.blockUser);
router.get('/reports', auth, adminController.viewReports);

module.exports = router; 