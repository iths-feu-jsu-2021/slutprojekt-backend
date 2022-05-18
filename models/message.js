'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.Matter,
        {
        foreignKey: 'matterId',
        targetKey: 'id',
        allowNull: false
      }
      )
      Message.belongsTo(models.User,
        {
          foreignKey: 'senderId',
          targetKey: 'id',
          allowNull: false
        })
      // define association here
    }
  }
  Message.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Message',
    tableName: 'Messages'
  });
  return Message;
};