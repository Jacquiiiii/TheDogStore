'use strict'

const {
  Model
} = require('sequelize')
 
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
    }
  }

  Order.init({
    orderNumber: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  })

  return Order
}