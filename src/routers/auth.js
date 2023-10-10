const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', authController.register);

router.post('/login', authController.login);

router.post('/user', authMiddleware, authController.user);

module.exports = router;