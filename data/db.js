module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'whiteboard-cs5610-fall-2018';
    var   connectionString =
        'mongodb://localhost/';
    connectionString += databaseName;
    mongoose.connect(connectionString);
};