const express = require('express');
const router = express.Router();

const {
  message_list,
  member_message_list,
  add_message,
  edit_message,
  delete_message,
} = require('../controllers/messageController');

router.route('/').get(message_list).get(member_message_list).post(add_message);
router.route('/:id').put(edit_message).delete(delete_message);

module.exports = router;
