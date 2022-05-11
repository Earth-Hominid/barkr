const asyncHandler = require('express-async-handler');
const Message = require('../models/message');

// GET Request for messages,
// @route /chatroom/messages
// Access is public

const message_list = asyncHandler(async (req, res) => {
  const messages = await Message.find();
  res.status(200).json(messages);
});

// GET Request for messages with user identification,
// @route /chatroom/messages
// Access is private for members only.

const member_message_list = asyncHandler(async (req, res) => {
  res.status(200).json({
    messages: [
      { message: 'message1', user: user2 },
      { message: 'message2', user: user1 },
    ],
  });
});

// POST request to add message
// @route /chatroom/messages/
// Access is private for members only.

const add_message = asyncHandler(async (req, res) => {
  if (!req.body.content && !req.body.text) {
    res.status(400);
    throw new Error('Please add a message');
  }

  const message = await Message.create({
    title: req.body.title,
    content: req.body.content,
  });

  res.status(200).json(message);
});

// PUT request to update/edit a message
// @route /chatroom/messages/:id
// Access is private for members only

const edit_message = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    res.status(400);
    throw new Error('Message not found');
  }

  const editedMessage = await Message.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(editedMessage);
});

// DELETE request to delete message
// @route /chatroom/messages/:id
// Access is private for members only.

const delete_message = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    res.status(400);
    throw new Error('Message not found');
  }

  await message.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  message_list,
  member_message_list,
  add_message,
  edit_message,
  delete_message,
};
