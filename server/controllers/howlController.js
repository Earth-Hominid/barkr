const Howl = require('../models/howl');

// Display all howls

exports.howl_list = (req, res, next) => {
  Howl.find({}, 'name')
    .populate()
    .exec((err, results) => {
      if (err) () => next(err);
      // successful, thus render results
      res.status(200).json({
        title: 'Howls',
        howl_list: results,
      });
    });
};
