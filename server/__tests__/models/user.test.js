const db = require('../../models/index')

describe('Models', () => {
  beforeEach(async () => {
    await db.User.destroy({ where: {} })
  })

  it('should create a user', async () => {
    const userData = {
      first_name: 'Test',
      last_name: 'User',
      email: 'test@email.com',
      password: 'testpassword',
    }

    const createdUser = await db.User.create(userData)
    expect(createdUser.first_name).toEqual(userData.first_name)
    expect(createdUser.last_name).toEqual(userData.last_name)
    expect(createdUser.email).toEqual(userData.email)
    expect(createdUser.password).toEqual(userData.password)
  })
})