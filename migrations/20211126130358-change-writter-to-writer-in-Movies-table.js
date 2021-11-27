'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Movies', 'writter', 'writer');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Movies', 'writer', 'writter');
  },
};
