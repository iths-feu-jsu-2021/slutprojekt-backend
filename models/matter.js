'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Matter.belongsTo(models.User, {
        foreignKey: 'workerId',
        targetKey: 'id',
        allowNull: false
      })
      Matter.belongsTo(models.User, {
        foreignKey: 'customerId',
        targetKey: 'id',
        allowNull: false
      })
    }
  }
  Matter.init({
    status: {
      type: DataTypes.ENUM('open', 'pending', 'closed'),
      defaultValue: 'pending',
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matter',
    tableName: 'Matters'
  });
  return Matter;
};