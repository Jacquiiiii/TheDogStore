import { useState } from "react"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginSuccess, setUserId } from '../../store/slices/loginSlice'
import { useFindUserMutation } from '../../store/slices/usersApiSlice'
import { LoginContainer, ButtonContainer, LoginButton, RegisterButton } from './styles'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [findUser] = useFindUserMutation()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      // TODO: add type
      const response: any = await findUser({ email, password })

      if (response.data && response.data.existingUser) {
        dispatch(loginSuccess())
        dispatch(setUserId(response.data.existingUser.id.toString()))
        localStorage.setItem('jwtToken', response.data.token)
        navigate('/')
      } else {
        alert('Invalid email address or password')
      }
    } catch (error) {
      alert('An error occurred while logging in. Please try again later.')
    }
  }

  return (
    <>
      <LoginContainer >
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
      </LoginContainer>
      <ButtonContainer>
        <LoginButton onClick={handleSubmit} data-cy="login-button">Login</LoginButton>
        <RegisterButton to="/Register">Don't have an account? Register now</RegisterButton>
      </ButtonContainer>
    </>
  )
}

export default Login
