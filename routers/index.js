const router = require('express').Router();

const character = require('./character');
const genre = require('./genre');

router.use('/v1/character', character);
router.use('/v1/genre', genre);

module.exports = router;
