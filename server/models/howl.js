const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HowlSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Needs a name'],
      minLength: 2,
      maxLength: 25,
    },
    description: {
      type: String,
      required: [true, 'Needs a description'],
      minLength: 2,
      maxLength: 100,
    },
  },
  { timestamps: true }
);

HowlSchema.virtual('url').get(function () {
  return 'chatroom/howl' + this._id;
});

module.exports = mongoose.model('Howl', HowlSchema);
