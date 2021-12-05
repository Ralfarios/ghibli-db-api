'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('Movies', 'release_date', {
      type: 'TIMESTAMP USING CAST("release_date" as TIMESTAMP)',
    });
    await queryInterface.changeColumn('Movies', 'release_date', {
      type: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('Movies', 'release_date', {
      type: Sequelize.STRING,
    });
  },
};
