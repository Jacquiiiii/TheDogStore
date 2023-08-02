require('dotenv').config()

module.exports = {
  development: {
    dialect: 'postgres',
    url: process.env.DB_URL
  },
  test: {
    dialect: 'postgres',
    url: process.env.TEST_DB_URL,
    logging: false
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
