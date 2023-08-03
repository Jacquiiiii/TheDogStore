const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../models')
const secret = process.env.SECRET || 'samplesecret'

const getAllUsers = async (req, res) => {
  try {
    const usersData = await db.User.findAll()
    res.json({ usersData })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params
    const userData = await db.User.findOne({ where: { email } })
    res.json({ userData })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password1 } = req.body
    const password = await bcrypt.hash(password1, 10)
    const newUser = await db.User.create({ first_name, last_name, email, password })
    res.json({ newUser })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const existingUser = await db.User.findOne({ where: { email } })

    if (!existingUser) {
      return res.json({ msg: `No account with this email found` })
    }

    const doesPasswordMatch = bcrypt.compareSync(password, existingUser.password)

    if (!doesPasswordMatch) {
      return res.json({ msg: `Passwords did not match` })
    }

    const token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      secret,
      { expiresIn: '24h' }
    )

    res.json({ existingUser, token })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const User = {
  getAllUsers,
  getUserByEmail,
  createUser,
  login
}

module.exports = User


