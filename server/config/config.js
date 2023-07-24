require('dotenv').config()

module.exports = {
  development: {
    dialect: 'postgres',
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: 'localhost',
    port: 5432,
  },
  production: {
    use_env_variable: process.env.DB_CONNECTION_STRING,
    dialect: 'postgres',
    logging: false,
  },
}
