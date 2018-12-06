const universityDao = require('../dao/university.dao.server')()

module.exports = app => {
    createStudent = (req, res) =>
        res.json(universityDao.createStudent(req.body))

    findAllStudents = (req, res) =>
        res.json(universityDao.findAllStudents())

    findStudentById = (req, res) =>
        res.json(
            universityDao.findStudentById(req.params['studentId'])
        )

    deleteStudent = (req, res) =>
        res.json(
            universityDao.deleteStudent(req.params.studentId)
        )

    updateStudent = (req, res) =>
        res.json(
            universityDao.updateStudent(req.params.studentId, req.body)
        )

    app.post('/api/student', createStudent)
    app.get('/api/student', findAllStudents)
    app.get('/api/student/:studentId', findStudentById)
    app.put('/api/student/:studentId', updateStudent)
    app.delete('/api/student/:studentId', deleteStudent)

}

