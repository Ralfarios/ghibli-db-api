const { Character, Genre, Movie, MovieGenre } = require('../models');

const { Op } = require('sequelize');

class MovieController {
  static async createMovie(req, res, next) {
    try {
      const input = {
        box_office: req.body.box_office,
        composer: req.body.composer,
        director: req.body.director,
        duration: req.body.duration,
        ending_theme: req.body.ending_theme,
        opening_theme: req.body.opening_theme,
        original_title: req.body.original_title,
        poster_url: req.body.poster_url,
        producer: req.body.producer,
        rating: req.body.rating,
        release_date: req.body.release_date,
        synopsis: req.body.synopsis,
        title: req.body.title,
        writer: req.body.writer,
      };

      await Movie.create(input);

      const msg = { message: 'New movie has been created.' };

      return res.status(201).json(msg);
    } catch (err) {
      next(err);
    }
  }
  static async getMovies(req, res, next) {
    const {
      keyword = '',
      limit = 0,
      page = 0,
      sort = 'title', // ('id' || 'title' || 'original_title' || 'release_date' || 'rating' || 'duration')
      sort_order = 'ASC', // ('ASC' || 'DESC')
    } = req.query;
    try {
      const [movie, count, total] = await Promise.all([
        Movie.findAll({
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          order: [[sort || 'title', sort_order || 'ASC']],
          ...(limit && { limit: Number(limit) }),
          include: [
            {
              model: Character,
              as: 'characters',
              attributes: { exclude: ['MovieId', 'createdAt', 'updatedAt'] },
            },
            {
              model: MovieGenre,
              as: 'genres',
              attributes: {
                exclude: ['GenreId', 'MovieId', 'createdAt', 'updatedAt'],
              },
              include: [
                {
                  model: Genre,
                  attributes: { exclude: ['createdAt', 'updatedAt'] },
                },
              ],
            },
          ],
          where: {
            [Op.or]: [{ title: { [Op.iLike]: '%' + keyword + '%' } }],
          },
          offset: !Number(page) ? 0 : Number(limit) * (Number(page) - 1),
        }),
        Movie.count({
          where: {
            [Op.or]: [{ title: { [Op.iLike]: '%' + keyword + '%' } }],
          },
        }),
        Movie.count(),
      ]);

      return res.status(200).json({
        count,
        total,
        limit: Number(limit),
        page: !Number(page) ? 1 : Number(page),
        data: movie,
      });
    } catch (err) {
      console.log(err, '<<<');
      next(err);
    }
  }
  static async getDetailMovie(req, res, next) {
    try {
      const movie_id = Number(req.params.id);
      const movie = await Movie.findByPk(movie_id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: Character,
            as: 'characters',
            attributes: { exclude: ['MovieId', 'createdAt', 'updatedAt'] },
          },
          {
            model: MovieGenre,
            as: 'genres',
            attributes: {
              exclude: ['GenreId', 'MovieId', 'createdAt', 'updatedAt'],
            },
            include: [
              {
                model: Genre,
                attributes: { exclude: ['createdAt', 'updatedAt'] },
              },
            ],
          },
        ],
      });

      if (!movie) throw { name: 'notFound' };

      return res.status(200).json({ data: movie });
    } catch (err) {
      next(err);
    }
  }
  static async updateMovie(req, res, next) {
    try {
      const movie_id = Number(req.params.id);
      const input = {
        box_office: req.body.box_office,
        composer: req.body.composer,
        director: req.body.director,
        duration: req.body.duration,
        ending_theme: req.body.ending_theme,
        opening_theme: req.body.opening_theme,
        original_title: req.body.original_title,
        poster_url: req.body.poster_url,
        producer: req.body.producer,
        rating: req.body.rating,
        release_date: req.body.release_date,
        synopsis: req.body.synopsis,
        title: req.body.title,
        writer: req.body.writer,
      };

      const find = await Movie.findByPk(movie_id);

      if (!find) throw { name: 'notFound' };

      await Movie.update(input, { where: { id: movie_id } });
      const msg = { message: 'Movie has been updated.' };

      return res.status(200).json(msg);
    } catch (err) {
      next(err);
    }
  }
  static async deleteMovie(req, res, next) {
    try {
      const movie_id = Number(req.params.id);
      const find = await Movie.findByPk(movie_id);

      if (!find) throw { name: 'notFound' };

      await Movie.destroy({ where: { id: movie_id } });

      const msg = { message: 'Movie has been deleted.' };

      return res.status(200).json(msg);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MovieController;
