const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./models')
const path = require('path')
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

app.use(express.static(path.join(__dirname, '../build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(port, () => console.log(`app is listening on port ${port}`))

module.exports = app
