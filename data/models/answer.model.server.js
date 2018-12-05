const mongoose = require('mongoose')
const answerSchema = require('./answer.schema.server')
const answerModel = mongoose.model('Answer', answerSchema)
module.exports = answerModel;
