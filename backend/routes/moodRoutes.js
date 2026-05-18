const express = require('express');

const {
    getMoodLogs
} = require('../Controllers/moodController');

const authMiddleware =
    require('../middleware/authMiddleware');

const router = express.Router();

// GET ALL CHAT HISTORY
router.get(
    '/getmoodLog',
    authMiddleware,
    getMoodLogs
);

module.exports = router;