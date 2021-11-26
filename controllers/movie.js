class MovieController {
  static createMovie(req, res, next) {}

  static getMovies(req, res, next) {
    try {
      return res.status(200).json({ status: 'OKOKOK' });
    } catch (err) {
      next(err);
    }
  }

  static getDetailMovie(req, res, next) {
    const movie_id = Number(req.params.id);
    try {
      return res.status(200).json({ status: `OKOK ${movie_id}` });
    } catch (err) {
      next(err);
    }
  }

  static updateMovie(req, res, next) {}

  static deleteMovie(req, res, next) {}
}

module.exports = MovieController;

/**
 * ADA FARHAN
 */
