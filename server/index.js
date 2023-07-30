const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./models')
const port = process.env.PORT || 54321

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

db.sequelize.sync().then(function() {
  console.log('connected to database')
}).catch(function(err) {
  console.log(err)
});

app.get('/', (req, res) => console.log('success'))

const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

app.use('/products', productRoutes)
app.use('/users', userRoutes)

app.listen(port, () => console.log(`app is listening on port ${port}`))

module.exports = app
