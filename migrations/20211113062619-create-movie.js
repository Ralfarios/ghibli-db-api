'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      original_title: {
        type: Sequelize.STRING
      },
      synopsis: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.STRING
      },
      poster_url: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      },
      producer: {
        type: Sequelize.STRING
      },
      writter: {
        type: Sequelize.STRING
      },
      composer: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      box_office: {
        type: Sequelize.INTEGER
      },
      director: {
        type: Sequelize.STRING
      },
      opening_theme: {
        type: Sequelize.STRING
      },
      ending_theme: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Movies');
  }
};