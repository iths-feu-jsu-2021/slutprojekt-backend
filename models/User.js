const db = require('../database/connection')
const {DataTypes} = require('sequelize')
const bcrypt = require('bcrypt')
const  jwt  = require('jsonwebtoken')

require('dotenv').config()

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

User.beforeCreate((user, options) => {
    user.password = bcrypt.hashSync(user.password, 10)
})

User.authenticate = async (username, password) => {
    const user = await User.findOne({where: {username}})

    const passwordMatch = bcrypt.compareSync(password, user.password)

    if (passwordMatch) {
        const payload = {
            username: username
        }
        return jwt.sign(payload, process.env.JWT_SECRET)
    }

}

module.exports = User