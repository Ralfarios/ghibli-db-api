'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.hasMany(models.MovieGenre, { foreignKey: 'MovieId' });
      Movie.hasMany(models.Character, { foreignKey: 'MovieId' });
      models.MovieGenre.belongsTo(Movie, { foreignKey: 'MovieId' });
    }
  }
  Movie.init(
    {
      title: DataTypes.STRING,
      original_title: DataTypes.STRING,
      synopsis: DataTypes.STRING,
      release_date: DataTypes.STRING,
      poster_url: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      producer: DataTypes.STRING,
      writter: DataTypes.STRING,
      composer: DataTypes.STRING,
      duration: DataTypes.STRING,
      box_office: DataTypes.INTEGER,
      director: DataTypes.STRING,
      opening_theme: DataTypes.STRING,
      ending_theme: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Movie',
    }
  );
  return Movie;
};
