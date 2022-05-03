const db = require('../models')
// require('dotenv').config()
db.sync({force: true})