const router = require('express').Router();

const GenreController = require('../controllers/genre');

router.post('/', GenreController.createGenre);

module.exports = router;
