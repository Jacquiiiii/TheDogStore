const db = require('../models')

const getAllOrders = async (req, res) => {
  try {
    const ordersData = await db.Order.findAll()
    res.json({ ordersData })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getOrderByUserId = async (req, res) => {
  try {
    const { userId } = req.params
    const orderData = await db.Order.findOne({ where: { userId } })
    res.json({ orderData })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const User = {
  getAllOrders,
  getOrderByUserId
}

module.exports = User


