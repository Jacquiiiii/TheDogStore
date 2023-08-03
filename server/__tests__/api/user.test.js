const request = require('supertest')
const express = require('express')
const cors = require('cors')
const port = 8000
const db = require('../../models/index')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const userRoutes = require('../../routes/userRoutes')
app.use('/users', userRoutes)

const server = app.listen(port, () => console.log(`app is listening on port ${port}`))

const userData = require('../../__mocks__/userData')

beforeAll(async () => {
  await db.sequelize.sync({ force: true })
  await db.User.bulkCreate(userData)
})

describe('User Routes', () => {
  it('should return all users', async () => {
    const response = await request(app).get('/users')
    const usersList = response.body.usersData

    expect(response.status).toBe(200)
    expect(usersList.length).toEqual(2)
  })

  it('first user on list should have first name John', async () => {
    const response = await request(app).get('/users')
    const firstUser = response.body.usersData[0]

    expect(response.status).toBe(200)
    expect(firstUser.first_name).toBe('John')
  })

  it('should create a new user', async () => {
    const newUser = { first_name: 'Jacqui', last_name: 'Jacqui', email: 'jacqui@jacqui.com', password1: 'jacqui'}

    const response = await request(app).post('/users').send(newUser)

    expect(response.status).toBe(200)
    expect(response.body.newUser.first_name).toBe('Jacqui')
    expect(response.body.newUser.last_name).toBe('Jacqui')
    expect(response.body.newUser.email).toBe('jacqui@jacqui.com')
  })
})

afterAll(async () => {
  await db.User.destroy({ where: {} })
  await db.sequelize.close()

  await new Promise((resolve) => {
    server.close(resolve)
  })
})