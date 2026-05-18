const express = require('express');

const {
    chatWithAI
} = require('../Controllers/chatController');

const authMiddleware =
    require('../middleware/authMiddleware');

const router = express.Router();

router.post(
    '/',
    authMiddleware,
    chatWithAI
);

module.exports = router;