const db = require('../database/connection')
const {DataTypes} = require('sequelize')
const bcrypt = require('bcrypt')

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
    // const hashedPassword = await hashPassword(user.password);
    // user.password = hashedPassword
    // console.log(hashedPassword)
})

// function hashPassword(password) {

//     const salt = bcrypt.genSaltSync(10)
//     const hash = bcrypt.hashSync(password, salt)
//     return hash
//}
module.exports = User