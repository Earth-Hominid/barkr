const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const Post = require('../models/post');
const Response = require('../models/response');
const bcrypt = require('bcryptjs/dist/bcrypt');

// POST req to register a new user
// @route /chatroom/user
// Access is public

const register_user = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, username, password } = req.body;

  if (!first_name || !last_name || !email || !username) {
    res.status(400);
    throw new Error('A field is missing. Please ensure all fields are filled.');
  }

  // Check to see if user already exists. Use email as that is set to unique in the user model.
  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    throw new Error(
      'A user is registered with this email. Please ensure email is correct or register with a different one.'
    );
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    first_name,
    last_name,
    email,
    username,
    password: hashedPassword,
    member: false,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.first_name + ' ' + user.last_name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('User data is invalid');
  }
});
