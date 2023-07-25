const request = require('supertest')
const express = require('express')
const cors = require('cors')
const port = 3000
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.get('/', (req, res) => res.send('success'))

// Start server
const server = app.listen(port, () => console.log(`app is listening on port ${port}`))

describe('GET /', () => {
  it('should return success', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.text).toBe('success')
  })
})

afterAll(() => {
  return new Promise((resolve) => {
    server.close(resolve)
  })
})
