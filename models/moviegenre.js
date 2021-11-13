'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MovieGenre.belongsTo(models.Movie);
      MovieGenre.belongsTo(models.Genre);
    }
  }
  MovieGenre.init(
    {
      GenreId: DataTypes.INTEGER,
      MovieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'MovieGenre',
    }
  );
  return MovieGenre;
};
