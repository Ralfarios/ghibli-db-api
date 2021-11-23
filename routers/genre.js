const router = require('express').Router();

const GenreController = require('../controllers/genre');

router.delete('/:id', GenreController.deleteGenre);
router.put('/:id', GenreController.updateGenre);

router.get('/', GenreController.getGenre);
router.post('/', GenreController.createGenre);

module.exports = router;
