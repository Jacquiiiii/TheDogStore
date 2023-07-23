const db = require('../../models/index')

describe('Models', () => {
  beforeEach(async () => {
    await db.Product.destroy({ where: {} })
  })

  it('should create product', async () => {
    const productData = {
      name: 'Test Product',
      description: 'This is a test product',
      brand: 'Test Brand',
      image: 'test-image.jpg',
      price: 99,
      category: 'Test Category'
    }

    const createdProduct = await db.Product.create(productData)
    expect(createdProduct.name).toEqual(productData.name)
    expect(createdProduct.description).toEqual(productData.description)
    expect(createdProduct.brand).toEqual(productData.brand)
    expect(createdProduct.image).toEqual(productData.image)
    expect(createdProduct.price).toEqual(productData.price)
    expect(createdProduct.category).toEqual(productData.category)
  })
})