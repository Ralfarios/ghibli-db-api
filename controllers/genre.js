const { Genre } = require('../models');

class GenreController {
  static async createGenre(req, res, next) {
    try {
      const input = {
        genre_name: req.body.genre_name,
      };

      await Genre.create(input);

      const msg = { message: 'New Genre has been created.' };

      return res.status(201).json(msg);
    } catch (err) {
      next(err);
    }
  }
  static async getGenre(_, res, next) {
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
  static async updateGenre(req, res, next) {
    try {
      const genre_id = Number(req.params.id);
      const input = {
        genre_name: req.body.genre_name,
      };

      const find = await Genre.findByPk(genre_id);

      if (!find) throw { name: 'notFound' };

      await Genre.update(input, { where: { id: genre_id } });

      const msg = { message: 'Genre has been updated.' };

      return res.status(200).json(msg);
    } catch (err) {
      next(err);
    }
  }
  static async deleteGenre(req, res, next) {
    try {
      const genre_id = Number(req.params.id);
      const find = await Genre.findByPk(genre_id);

      if (!find) throw { name: 'notFound' };

      await Genre.destroy({ where: { id: genre_id } });
      const msg = { message: 'Genre has been deleted.' };

      return res.status(200).json(msg);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = GenreController;
