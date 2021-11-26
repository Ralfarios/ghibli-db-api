const { Movie } = require('../models');

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
        writter: req.body.writter,
      };

      await Movie.create(input);

      const msg = { message: 'New movie has been created.' };

      return res.status(201).json({ msg });
    } catch (err) {
      next(err);
    }
  }

  static async getMovies(req, res, next) {
    try {
      const movie = await Movie.findAll();

      return res.status(200).json(movie);
    } catch (err) {
      next(err);
    }
  }

  static async getDetailMovie(req, res, next) {
    try {
      const movie_id = Number(req.params.id);
      const movie = await Movie.findByPk(movie_id);

      if (!movie) throw { name: 'notFound' };

      return res.status(200).json(movie);
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
        writter: req.body.writter,
      };

      const movie = await Movie.findByPk(movie_id);

      if (!movie) throw { name: 'notFound' };

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

/**
 * ADA FARHAN
 */
