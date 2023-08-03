import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddUserMutation } from '../store/slices/usersApiSlice'

const useRegister = () => {
  const navigate = useNavigate()
  const [createUser] = useAddUserMutation()

  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const handleRegister = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (first_name === '') {
      return alert('First name cannot be blank. Please try again.')
    }
    if (last_name === '') {
      return alert('Last name cannot be blank. Please try again.')
    }
    if (email === '') {
      return alert('Email cannot be blank. Please try again.')
    }
    if (password1 === '' || password2 === '') {
      return alert('Password cannot be blank. Please try again.')
    }
    if (password1 !== password2) {
      return alert('Passwords do not match. Please try again.')
    }

    createUser({ first_name, last_name, email, password1 })
    navigate('/Login')
  }

  return {
    first_name,
    setFirstName,
    last_name,
    setLastName,
    email,
    setEmail,
    password1,
    setPassword1,
    password2,
    setPassword2,
    handleRegister,
  }
}

export default useRegister
