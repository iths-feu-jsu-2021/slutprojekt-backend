'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM('open', 'pending', 'closed'),
        defaultValue: 'pending',
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      workerId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Matters');
  }
};