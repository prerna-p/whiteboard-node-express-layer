var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./data/db')()

const universityDao = require('./data/daos/university.dao.server');
universityDao.truncateDatabase();
universityDao.populateDatabase();
require('./data/services/university.service.server')(app);
require('./data/services/student.service.server')(app);
require('./data/services/question.service.server')(app);
app.listen(3000);

