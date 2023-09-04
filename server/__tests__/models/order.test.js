const db = require('../../models/index')

describe('Models', () => {
  beforeEach(async () => {
    await db.Order.destroy({ where: {} })
  })

  it('should create an order', async () => {
    const orderData = {
      total: 50,
      userId: 1,
    }

    const createdOrder = await db.Order.create(orderData)
    expect(createdOrder.total).toEqual(orderData.total)
    expect(createdOrder.userId).toEqual(orderData.userId)
  })
})