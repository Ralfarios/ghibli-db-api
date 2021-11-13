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
      char_name: DataTypes.STRING,
      char_pic: DataTypes.STRING,
      char_jp_name: DataTypes.STRING,
      seiyuu_name: DataTypes.STRING,
      va_name: DataTypes.STRING,
      MovieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Character',
    }
  );
  return Character;
};
