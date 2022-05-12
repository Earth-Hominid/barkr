const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BarkSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Needs a title'],
      minLength: 2,
      maxLength: 25,
    },
    description: {
      type: String,
      required: [true, 'Needs a description'],
      minLength: 2,
      maxLength: 100,
    },
    howl: {
      type: Schema.Types.ObjectId,
      ref: 'Howl',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    votes: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

BarkSchema.virtual('url').get(function () {
  return 'chatroom/bark' + this._id;
});

module.exports = mongoose.model('Bark', BarkSchema);
