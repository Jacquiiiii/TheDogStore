'use strict'

const fs = require('fs')
const path = require('path')
const process = require('process')
const Sequelize = require('sequelize')
const dotenv = require('dotenv')
const configuration = require('../config/config')

dotenv.config()

const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = configuration[env]

const db = {}

const sequelize = new Sequelize(config.url, config)

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    )
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
