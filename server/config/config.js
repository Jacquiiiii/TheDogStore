require('dotenv').config()

module.exports = {
  development: {
    dialect: 'postgres',
    url: process.env.DB_URL
  },
  test: {
    dialect: 'postgres',
    url: process.env.DB_URL,
    logging: false
  },
  production: {
    url: process.env.DB_URL,
    dialect: 'postgres'
  }
}
