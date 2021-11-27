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
      GenreId: {
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please insert genre',
          },
        },
        type: DataTypes.INTEGER,
      },
      MovieId: {
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please insert movie title!',
          },
        },
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'MovieGenre',
    }
  );
  return MovieGenre;
};
