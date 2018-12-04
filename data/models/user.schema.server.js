var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {type: String, required:true},
    password: String,
    firstName: String,
    lastName: String,
}, {collection: 'user'});

module.exports = userSchema;