const jwt = require('jsonwebtoken');

const GHIBLI_SECRET_JWT_KEY = process.env.GHIBLI_SECRET_JWT_KEY;

let genToken = (payload) => jwt.sign(payload, GHIBLI_SECRET_JWT_KEY);

let chkToken = (token) => jwt.verify(token, GHIBLI_SECRET_JWT_KEY);

module.exports = { genToken, chkToken };
