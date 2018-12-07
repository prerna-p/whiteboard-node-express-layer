var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./data/db')()

const universityDao = require('./data/daos/university.dao.server')
universityDao.truncateDatabase()
universityDao.populateDatabase()

app.listen(3000);

