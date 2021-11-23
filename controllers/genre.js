const { Op } = require('sequelize');

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
  static async getGenre(req, res, next) {
    const {
      keyword = '',
      limit = 0,
      page = 0,
      sort = 'genre_name', // ('id' || 'genre_name')
      sort_order = 'ASC', // ('ASC' || 'DESC')
    } = req.query;

    try {
      const [genre, count, total] = await Promise.all([
        await Genre.findAll({
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          order: [[sort || 'genre_name', sort_order || 'ASC']],
          ...(limit && { limit: Number(limit) }),
          where: {
            [Op.or]: [{ genre_name: { [Op.iLike]: '%' + keyword + '%' } }],
          },
          offset: !Number(page) ? 0 : Number(limit) * (Number(page) - 1),
        }),
        await Genre.count({
          where: {
            [Op.or]: [{ genre_name: { [Op.iLike]: '%' + keyword + '%' } }],
          },
        }),
        await Genre.count(),
      ]);

      return res.status(200).json({
        count,
        total,
        limit: Number(limit),
        page: !Number(page) ? 1 : Number(page),
        data: genre,
      });
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
