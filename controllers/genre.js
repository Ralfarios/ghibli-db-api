class GenreController {
  static async createGenre(req, res, next) {
    try {
      const input = {
        genre_name: req.body.name,
      };

      const genre = await Genre.create(input);

      return res.status(201).json(genre);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = GenreController;
