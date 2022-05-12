const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WoofSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, 'Needs content'],
      minLength: 1,
      maxLength: 50,
    },
    howl: {
      type: Schema.Types.ObjectId,
      ref: 'Howl',
      required: true,
    },
    bark: {
      type: Schema.Types.ObjectId,
      ref: 'Bark',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

WoofSchema.virtual('url').get(function () {
  return 'chatroom/woof' + this._id;
});

model.exports = mongoose.model('Woof', WoofSchema);
