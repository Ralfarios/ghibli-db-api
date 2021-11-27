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
      title: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please insert movie title!',
          },
          len: {
            args: [1, 75],
            msg: 'The length of movie title must be less than 75 characters.',
          },
        },
      },
      original_title: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please insert movie original title!',
          },
          len: {
            args: [1, 75],
            msg: 'The length of movie original title must be less than 75 characters.',
          },
        },
      },
      synopsis: DataTypes.STRING,
      release_date: DataTypes.STRING,
      poster_url: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      producer: DataTypes.STRING,
      writer: DataTypes.STRING,
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
