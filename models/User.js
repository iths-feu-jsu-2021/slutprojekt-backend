const db = require('../database/connection')
const {DataTypes} = require('sequelize')

// class User extends Model {}
const User = db.define('User', {
    role:{
        type: DataTypes.ENUM("worker", "customer"),
        allowNull: false,
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

module.exports = User