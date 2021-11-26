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
  static async createMovieGenre() {}
  static async deleteMovieGenre() {}
}

module.exports = MovieGenreController;
