const universityDao = require('../daos/university.dao.server');

module.exports = app => {
    createStudent = (req, res) => {
        universityDao.createStudent(req.body).then(student => res.send(student))
    }

    findAllStudents = (req, res) => {
        universityDao.findAllStudents().then(student => res.send(student))
    }

    findStudentById = (req, res) => {
        universityDao.findStudentById(req.params['studentId']).then(student => res.send(student))

    }
    deleteStudent = (req, res) => {
        universityDao.deleteStudent(req.params['studentId']).then(response => res.send("deleted student"))
    }
    updateStudent = (req, res) => {
        universityDao.updateStudent(req.params['studentId'], req.body).then(response => res.send("updated student"))
    }

    app.post('/api/student', createStudent)
    app.get('/api/student', findAllStudents)
    app.get('/api/student/:studentId', findStudentById)
    app.put('/api/student/:studentId', updateStudent)
    app.delete('/api/student/:studentId', deleteStudent)

}

