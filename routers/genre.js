const router = require('express').Router();

const GenreController = require('../controllers/genre');

router.post('/', GenreController.createGenre);
router.get('/', GenreController.getGenre);

module.exports = router;
