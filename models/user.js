'use strict';
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('worker', 'customer', 'admin')
  }, {
    sequelize,
    modelName: 'User',
  });

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
  return User;
};