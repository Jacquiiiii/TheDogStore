const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./models')
const routes = require('./routes')
const loggerMiddleware = require('./middlewares/loggerMiddleware')

const port = process.env.PORT || 54321

// Middlewares
app.use(loggerMiddleware)
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('build'))

db.sequelize.sync().then(function () {
  console.log('connected to database')
}).catch(function (err) {
  console.log(err)
})

app.use('/products', routes.productRoutes)
app.use('/users', routes.userRoutes)
app.use('/orders', routes.orderRoutes)

app.listen(port, () => console.log(`app is listening on port ${port}`))

module.exports = app
