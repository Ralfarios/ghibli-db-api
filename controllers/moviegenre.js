const { Genre, Movie, MovieGenre } = require('../models');

class MovieGenreController {
  static async getMovieGenreByMovie(req, res, next) {
    try {
      const { MovieId } = req.params;

      const moviegenre = await MovieGenre.findAll({
        attributes: {
          exclude: ['GenreId', 'MovieId', 'createdAt', 'updatedAt'],
        },
        include: [
          {
            model: Genre,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
          {
            model: Movie,
            attributes: {
              exclude: [
                'synopsis',
                'release_date',
                'poster_url',
                'rating',
                'producer',
                'writer',
                'composer',
                'duration',
                'box_office',
                'director',
                'opening_theme',
                'ending_theme',
                'createdAt',
                'updatedAt',
              ],
            },
          },
        ],
        where: { MovieId },
      });

      return res.status(200).json(moviegenre);
    } catch (err) {
      next(err);
    }
  }
  static async createMovieGenre(req, res, next) {
    try {
      const input = {
        GenreId: req.body.GenreId,
        MovieId: req.body.MovieId,
      };

      await MovieGenre.create(input);
      const msg = { message: 'New movie genre has been created.' };

      return res.status(201).json(msg);
    } catch (err) {
      next(err);
    }
  }
  static async deleteMovieGenre(req, res, next) {
    try {
      const moviegenre_id = Number(req.params.id);
      const find = await MovieGenre.findByPk(moviegenre_id);

      if (!find) throw { name: 'notFound' };

      await MovieGenre.destroy({ where: { id: moviegenre_id } });

      const msg = { message: 'Movie Genre has been deleted.' };

      return res.status(200).json(msg);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MovieGenreController;
