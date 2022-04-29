const db = require('./connection')
require('../models')
//const {User} = require('../models')


db.sync({force: true})