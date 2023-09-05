const db = require('../models')

const getAllOrders = async (req, res) => {
  try {
    const ordersData = await db.Order.findAll()
    res.json({ ordersData })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getOrdersByUserId = async (req, res) => {
  try {
    const { userId } = req.params
    const orderData = await db.Order.findAll({ where: { userId } })
    res.json({ orderData })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createOrder = async (req, res) => {
  try {
    const { total, userId } = req.body
    const newOrder = await db.Order.create({ total, userId })
    res.json({ newOrder })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const User = {
  getAllOrders,
  getOrdersByUserId,
  createOrder
}

module.exports = User


