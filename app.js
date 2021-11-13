if (['development', 'test'].includes(process.env.NODE_ENV))
  require('dotenv').config();
const cors = require('cors');
const express = require('express');

const errorHandler = require('./middlewares/errorHandler');
const router = require('./routers');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);

module.exports = app;
