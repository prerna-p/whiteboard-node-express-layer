module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'whiteboard-cs5610-fall-2018';
    var connectionString = 'mongodb://localhost/';
    connectionString += databaseName;
    //mongoose.connect(connectionString);
    herokuServer = 'mongodb://admin:admin123@ds227664.mlab.com:27664/heroku_jkh8stqz';
    mongoose.connect(herokuServer);
};

// IMPORTANT
// Heroku mLab add-on info
// username: admin
// password: admin123
// https://mongo-node-server.herokuapp.com/