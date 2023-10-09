const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/now_playing', authMiddleware, moviesController.nowPlaying);

router.get('/popular', authMiddleware, moviesController.nowPlaying);

router.get('/credits', authMiddleware, moviesController.credits);

module.exports = router;