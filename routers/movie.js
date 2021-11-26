const router = require('express').Router();

const MovieController = require('../controllers/movie');

router.get('/', MovieController.getMovies);
router.get('/:id', MovieController.getDetailMovie);

router.post('/', MovieController.createMovie);
router.put('/:id', MovieController.updateMovie);
router.delete('/:id', MovieController.deleteMovie);

module.exports = router;
