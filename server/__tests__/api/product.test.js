const request = require('supertest')
const express = require('express')
const cors = require('cors')
const port = 3000
const db = require('../../models/index')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
const productRoutes = require('../../routes/productRoutes')
app.use('/products', productRoutes)

// Start server
const server = app.listen(port, () => console.log(`app is listening on port ${port}`))

// Mock data
const productData = require('../../__mocks__/productData')

beforeAll(async () => {
  await db.sequelize.sync({ force: true })
  await db.Product.bulkCreate(productData)
})

describe('Product Routes', () => {
  it('should return all products', async () => {
    const response = await request(app).get('/products')
    const productsList = response.body.productsData

    expect(response.status).toBe(200)
    expect(productsList.length).toEqual(3)
  })

  it('should return correct brand', async () => {
    const response = await request(app).get('/products')
    const firstItem = response.body.productsData[0]

    expect(response.status).toBe(200)
    expect(firstItem.brand).toBe('Acana')
  })

  it('should return products by category Food', async () => {
    const response = await request(app).get('/products/category/Food')
    const foodProductsList = response.body.productsByCategory

    const categoryCheck = (arr) => {
      return arr.every(obj => obj.category === arr[0].category)
    }

    expect(response.status).toBe(200)
    expect(foodProductsList.length).toEqual(3)
    expect(categoryCheck(foodProductsList)).toBeTruthy()
  })
})

afterAll(async () => {
  await db.Product.destroy({ where: {} })
  await db.sequelize.close()

  await new Promise((resolve) => {
    server.close(resolve)
    console.log('app is closed')
  })
})
