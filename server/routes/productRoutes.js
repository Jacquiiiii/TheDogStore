const express = require('express')
const router = express.Router()
const Product = require('../controllers/Product')

router.get('/', Product.getAllProducts)
router.get('/category/:category', Product.getProductsByCategory)
router.get('/brand/:brand', Product.getProductsByBrand)

module.exports = router