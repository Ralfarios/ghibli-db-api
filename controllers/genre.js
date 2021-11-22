const { Genre } = require('../models');

class GenreController {
  static async createGenre(req, res, next) {
    try {
      const input = {
        genre_name: req.body.genre_name,
      };

      await Genre.create(input);

      const msg = { message: 'New Genre has been created' };

      return res.status(201).json(msg);
    } catch (err) {
      next(err);
    }
  }
  static async getGenre(req, res, next) {
    try {
      const genre = await Genre.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        order: [['genre_name', 'ASC']],
      });

      return res.status(200).json(genre);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = GenreController;
