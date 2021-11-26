const router = require('express').Router();

const genre = require('./genre');
const movie = require('./movie');

router.use('/v1/genre', genre);
router.use('/v1/movie', movie);

module.exports = router;
