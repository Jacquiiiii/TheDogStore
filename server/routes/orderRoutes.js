const express = require('express')
const router = express.Router()
const Order = require('../controllers/Order')

router.get('/', Order.getAllOrders)
router.get('/:userId', Order.getOrdersByUserId)
router.post('/', Order.createOrder)

module.exports = router