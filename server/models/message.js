const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      minLength: 2,
      maxLength: 25,
    },
    content: {
      type: String,
      required: [true, 'Please add a message'],
      minLength: 1,
      maxLength: 1000,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'Member',
      required: true,
    },
  },
  { timestamps: true }
);

MessageSchema.virtual('url').get(function () {
  return 'chatroom/message' + this._id;
});

module.exports = mongoose.model('Message', MessageSchema);
