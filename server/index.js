const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./models')
const routes = require('./routes')
const port = process.env.PORT || 54321

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

app.listen(port, () => console.log(`app is listening on port ${port}`))

module.exports = app
