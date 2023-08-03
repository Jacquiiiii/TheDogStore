import useLogin from "../../hooks/useLogin"
import { LoginContainer, ButtonContainer, LoginButton, RegisterButton } from './styles'

const Login = () => {
  const { setEmail, setPassword, handleSubmit } = useLogin()

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
