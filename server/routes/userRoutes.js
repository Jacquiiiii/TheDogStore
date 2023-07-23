const express = require('express')
const router = express.Router()
const User = require('../controllers/User')

router.get('/', User.getAllUsers)
router.get('/:email', User.getUserByEmail)
router.post('/', User.createUser)
router.post('/login', User.login)

module.exports = router