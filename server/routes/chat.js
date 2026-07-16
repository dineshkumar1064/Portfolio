const express = require('express');
const rateLimit = require('express-rate-limit');
const { handleChat } = require('../controllers/chatController');

const router = express.Router();

// Limit chat calls to avoid burning through the Groq quota
const chatLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20,
  message: { error: 'Too many messages, please slow down a little.' },
});

router.post('/', chatLimiter, handleChat);

module.exports = router;
