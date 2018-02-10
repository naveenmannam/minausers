const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://sadmin:sadmin@ds229878.mlab.com:29878/myusers"
);

mongoose.Promise = Promise;

module.exports.User = require('./users');

