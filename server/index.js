const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./models')
const path = require('path')
const port = process.env.PORT || 54321
const BUILD_PATH = path.resolve('./public')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(BUILD_PATH))

db.sequelize.sync().then(function () {
  console.log('connected to database')
}).catch(function (err) {
  console.log(err)
})

const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

app.use('/products', productRoutes)
app.use('/users', userRoutes)

app.listen(port, () => console.log(`app is listening on port ${port}`))

module.exports = app
