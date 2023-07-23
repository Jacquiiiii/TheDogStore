const db = require('../models')

const getAllProducts = async (req, res) => {
  try {
    const productsData = await db.Product.findAll()
    res.json({ productsData })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params
    const productsByCategory = await db.Product.findAll({ where: { category } })
    res.json({ productsByCategory })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getProductsByBrand = async (req, res) => {
  try {
    const { brand } = req.params
    const productsByBrand = await db.Product.findAll({ where: { brand } })
    res.json({ productsByBrand })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const Product = {
  getAllProducts,
  getProductsByCategory,
  getProductsByBrand
}

module.exports = Product