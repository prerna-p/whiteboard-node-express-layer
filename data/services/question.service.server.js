const universityDao = require('../daos/university.dao.server');

module.exports = app => {

    findAllQuestions = (req, res) => {
        universityDao.findAllQuestions().then(question => res.send(question))
    }
    findAllAnswers = (req, res) => {
        universityDao.findAllAnswers().then(ans => res.send(ans))
    }

    findQuestionById = (req, res) => {
        universityDao.findQuestionById(req.params['qid']).then(question => res.send(question))
    }
    updateQuestion = (req, res) => {
        universityDao.updateQuestion(req.params['qid'], req.body).then(response => res.send("updated question"))
    }
    deleteQuestion = (req, res) => {
        universityDao.deleteQuestion(req.params['qid']).then(response => res.send("deleted question"))
    }

    answerQuestion  = (req,res) => {
        universityDao.answerQuestion(req.params['sid'], req.params['qid'], req.body).then(answer => res.send(answer))

    }
    findAllAnswersByStudentAndQuestionId = (req,res) => {
        universityDao.findAnswersBySidQid(req.params['sid'], req.params['qid']).then(answer => res.send(answer))
    }

    findAllAnswersByQuestionAndStudentId = (req,res) => {
        universityDao.findAnswersBySidQid(req.params['sid'], req.params['qid']).then(answer => res.send(answer))
    }

    app.get('/api/question', findAllQuestions)
    app.get('/api/question/:qid', findQuestionById)
    app.put('/api/question/:qid', updateQuestion)
    app.delete('/api/question/:qid', deleteQuestion)
    app.post('/api/student/:sid/question/:qid/answer', answerQuestion)
    app.get('/api/answer', findAllAnswers)
    app.get('/api/student/:sid/question/:qid/answer', findAllAnswersByStudentAndQuestionId)
    app.get('/api/question/:qid/student/:sid/answer', findAllAnswersByQuestionAndStudentId)

}
