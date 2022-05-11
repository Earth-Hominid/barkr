const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema(
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
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

PostSchema.virtual('url').get(function () {
  return 'chatroom/post' + this._id;
});

module.exports = mongoose.model('Post', PostSchema);
