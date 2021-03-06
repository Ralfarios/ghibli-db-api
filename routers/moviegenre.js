const router = require('express').Router();

const MovieGenreController = require('../controllers/moviegenre');

router.get('/:MovieId', MovieGenreController.getMovieGenreByMovie);
router.post('/', MovieGenreController.createMovieGenre);
router.delete('/:id', MovieGenreController.deleteMovieGenre);

module.exports = router;
