'use strict';
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
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
        onDelete: 'CASCADE',
        allowNull: false
      }
      )
    }
  }
  Image.init({
    fileName: DataTypes.STRING,
    description: DataTypes.STRING,
    size: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });
  Image.upload = async (img) => {
    await upload.single(img)
  }
  return Image;
};