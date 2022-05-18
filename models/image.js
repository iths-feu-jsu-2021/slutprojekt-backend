'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.belongsTo(models.Matter,
        {
        foreignKey: 'matterId',
        targetKey: 'id',
        allowNull: false
      }),
      Image.belongsTo(models.User,{
        foreignKey: 'userId',
        targetKey: 'id',
        allowNull: false
      })
    }
  }
  Image.init({
    path: DataTypes.STRING,
    fileName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });

  return Image;
};