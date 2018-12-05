const mongoose = require('mongoose')
const quizWidgetSchema = require('./quiz-widget.schema.server')
const quizWidgetModel = mongoose.model('QuizWidget', quizWidgetSchema)
module.exports = quizWidgetModel;
