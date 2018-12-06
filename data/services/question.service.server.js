const universityDao = require('../dao/university.dao.server')()

module.exports = app => {

    findAllQuestions = (req, res) =>
        res.json(universityDao.findAllQuestions())

    findQuestionById = (req, res) =>
        res.json(
            universityDao.findQuestionById(req.params['qid'])
        )

    updateQuestion = (req, res) =>
        res.json(
            universityDao.updateQuestion(req.params['qid'], req.body)
        )

    deleteQuestion = (req, res) =>
        res.json(
            universityDao.deleteQuestion(req.params['qid'])
        )


    answerQuestion  = (req,res) =>
        res.json(
            universityDao.answerQuestion(req.params['sid'], req.params['qid'], req.body)
        )


    app.get('/api/question', findAllQuestions)
    app.get('/api/question/:qid', findQuestionById)
    app.put('/api/question/:qid', updateQuestion)
    app.delete('/api/question/:qid', deleteQuestion)
    app.post('/api/student/:sid/question/:qid/answer', answerQuestion)
    app.get('/api/student/:sid/question/:qid/answer', findAllAnswersByStudentAndQuestionId)
    app.get('/api/question/:qid/student/:sid/answer', findAllAnswersByQuestionAndStudentId)

}
