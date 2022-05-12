const Howl = require('../models/howl');
const Bark = require('../models/bark');
const Woof = require('../models/woof');
const User = require('../models/user');

const async = require('async');

exports.index = (req, res) => {
  async.parallel(
    {
      howl_count: (callback) => {
        Howl.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
      },
      bark_count: (callback) => {
        Bark.countDocuments({}, callback);
      },
      woof_count: (callback) => {
        Woof.countDocuments({}, callback);
      },
      user_count: (callback) => {
        User.countDocuments({}, callback);
      },
    },
    (err, results) => {
      res.status(200).json({
        title: 'Barker Home',
        error: err,
        data: results,
      });
    }
  );
};
