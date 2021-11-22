const router = require('express').Router();

const genre = require('./genre');

router.use('/v1/genre', genre);

module.exports = router;
