const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    _id: Number,
    gradYear: Date,
    scholarship: Number
}, {collection: 'students'});
module.exports = studentSchema;