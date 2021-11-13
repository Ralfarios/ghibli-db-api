const env = process.env.NODE_ENV || 'development';
const uppercasedEnv = env.toUpperCase();

if (['development', 'test'].includes(env)) require('dotenv').config();

const username = process.env['DB_USERNAME_' + uppercasedEnv];
const password = process.env['DB_PASSWORD_' + uppercasedEnv];
const database = process.env['DB_DATABASE_' + uppercasedEnv];
const host = process.env['DB_HOST_' + uppercasedEnv];
const dialect = process.env['DB_DIALECT_' + uppercasedEnv];

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect,
  },
  test: {
    username,
    password,
    database,
    host,
    dialect,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
