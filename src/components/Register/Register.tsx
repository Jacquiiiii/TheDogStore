import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddUserMutation } from '../../store/slices/usersApiSlice'
import { RegisterContainer, ButtonContainer, RegisterButton, LoginButton } from './styles'

const Register = () => {
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

    createUser({first_name, last_name, email, password1})
    navigate('/Login')
  }

  return (
    <>
      <RegisterContainer >
        <input
          type="text"
          placeholder="Enter first name"
          name="first name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter last name"
          name="last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={(e) => setPassword1(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password again"
          name="passwordCheck"
          onChange={(e) => setPassword2(e.target.value)}
        />
      </RegisterContainer>
      <ButtonContainer>
        <RegisterButton onClick={handleRegister}>Register</RegisterButton>
        <LoginButton to="/Login">Already have an account? Login now</LoginButton>
      </ButtonContainer>
    </>
  )
}

export default Register
