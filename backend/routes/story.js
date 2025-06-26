const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storyController');
const auth = require('../middleware/auth');

router.post('/post', auth, storyController.postStory);
router.get('/all', storyController.getAllStories);
router.get('/:id', storyController.getStoryById);
router.delete('/:id', auth, storyController.deleteStory);

module.exports = router; 