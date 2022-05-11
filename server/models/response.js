const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResponseSchema = new Schema(
  {
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
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
  },
  { timestamps: true }
);

ResponseSchema.virtual('url').get(function () {
  return 'chatroom/post/response' + this._id;
});

module.exports = mongoose.model('Response', ResponseSchema);
