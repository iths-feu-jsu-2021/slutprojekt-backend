const {Sequelize} = require('sequelize')

// require('dotenv').config()

module.exports = new Sequelize({
    dialect: 'sqlite',
    storage: 'ingeBra.db',
    
})