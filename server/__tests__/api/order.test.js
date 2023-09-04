const request = require('supertest')
const express = require('express')
const cors = require('cors')
const port = 8000
const db = require('../../models/index')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const orderRoutes = require('../../routes/orderRoutes')
app.use('/orders', orderRoutes)

const server = app.listen(port, () => console.log(`app is listening on port ${port}`))

const orderData = require('../../__mocks__/orderData')

beforeAll(async () => {
  await db.sequelize.sync({ force: true })
  await db.Order.bulkCreate(orderData)
})

describe('Order Routes', () => {
  // it('should return all orders', async () => {
  //   const response = await request(app).get('/orders')
  //   const ordersList = response.body.ordersData

  //   expect(response.status).toBe(200)
  //   expect(ordersList.length).toEqual(2)
  // })

  // it('first order on list should have userId 1', async () => {
  //   const response = await request(app).get('/orders')
  //   const firstOrder = response.body.ordersData[0]

  //   expect(response.status).toBe(200)
  //   expect(firstOrder.userId).toBe(1)
  // })
})

afterAll(async () => {
  await db.Order.destroy({ where: {} })
  await db.sequelize.close()

  await new Promise((resolve) => {
    server.close(resolve)
  })
})