'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Character.belongsTo(models.Movie, { foreignKey: 'MovieId' });
    }
  }
  Character.init(
    {
      char_name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please insert character name!',
          },
          len: {
            args: [1, 50],
            msg: 'The length of character name title must be less than 50 characters.',
          },
        },
      },
      char_pic: DataTypes.STRING,
      char_jp_name: DataTypes.STRING,
      seiyuu_name: DataTypes.STRING,
      va_name: DataTypes.STRING,
      MovieId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Character',
    }
  );
  return Character;
};
