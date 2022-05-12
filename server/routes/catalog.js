const express = require('express');
const router = express.Router();

const howl_controller = require('../controllers/howlController');
const bark_controller = require('../controllers/barkController');
const woof_controller = require('../controllers/woofController');
const user_controller = require('../controllers/userController');

// Bark Routes

// GET catalog home page.
router.get('/', bark_controller.index);

module.exports = router;
