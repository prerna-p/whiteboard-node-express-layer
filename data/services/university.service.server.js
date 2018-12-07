const universityDao = require('../daos/university.dao.server');

module.exports = app => {
    truncateDb = (req, res) => {
        universityDao.truncateDatabase().then(output => res.send("deleted all"))
    }

    populateDb = (req,res) => {
        universityDao.populateDatabase().then(output => res.send("added all"))
    }

    app.delete('/api/all', truncateDb)
    app.post('/api/populate', populateDb)
}

