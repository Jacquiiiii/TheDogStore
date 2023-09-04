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
    total: DataTypes.DECIMAL(10, 2),
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  })

  return Order
}