const Story = require('../models/Story');

exports.postStory = async (req, res) => {
  try {
    const { storyId, userId, text, audioURL, category, moodTag, language } = req.body;
    const story = new Story({ storyId, userId, text, audioURL, category, moodTag, language });
    await story.save();
    res.json({ success: true, data: story, message: 'Story posted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getAllStories = async (req, res) => {
  try {
    const { category, language } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (language) filter.language = language;
    const stories = await Story.find(filter);
    res.json({ success: true, data: stories, message: 'Stories fetched' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getStoryById = async (req, res) => {
  try {
    const story = await Story.findOne({ storyId: req.params.id });
    if (!story) return res.status(404).json({ success: false, message: 'Story not found' });
    res.json({ success: true, data: story, message: 'Story fetched' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteStory = async (req, res) => {
  try {
    const story = await Story.findOneAndDelete({ storyId: req.params.id });
    if (!story) return res.status(404).json({ success: false, message: 'Story not found' });
    res.json({ success: true, data: story, message: 'Story deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}; 