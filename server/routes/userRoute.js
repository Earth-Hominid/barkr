const express = require('express');
const router = express.Router();

const {
  register_user,
  login_user,
  user_info,
} = require('../controllers/userController');

router.post('/', register_user);
router.post('/login', login_user);
router.get('/my-info', user_info);

module.exports = router;
