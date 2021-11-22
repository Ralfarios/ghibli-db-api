'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Genre.hasMany(models.MovieGenre, { foreignKey: 'GenreId' });
      models.MovieGenre.belongsTo(Genre, { foreignKey: 'GenreId' });
    }
  }
  Genre.init(
    {
      genre_name:{
        allowNull: false,
        type:  DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please insert genre name!'
          },
          len: {
            args: [1,25],
            msg: 'The length of genre name must be less than 25 characters.'
          }
        }
      },
    },
    {
      sequelize,
      modelName: 'Genre',
    }
  );
  return Genre;
};
