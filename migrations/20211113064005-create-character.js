'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      char_name: {
        type: Sequelize.STRING,
      },
      char_pic: {
        type: Sequelize.STRING,
      },
      char_jp_name: {
        type: Sequelize.STRING,
      },
      seiyuu_name: {
        type: Sequelize.STRING,
      },
      va_name: {
        type: Sequelize.STRING,
      },
      MovieId: {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'Movies' },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Characters');
  },
};
