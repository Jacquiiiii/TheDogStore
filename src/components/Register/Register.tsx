import useRegister from '../../hooks/useRegister'
import { RegisterContainer, ButtonContainer, RegisterButton, LoginButton } from './styles'

const Register = () => {
  const {
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
  } = useRegister()

  return (
    <>
      <RegisterContainer >
        <input
          type="text"
          placeholder="Enter first name"
          name="first name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter last name"
          name="last name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password again"
          name="passwordCheck"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </RegisterContainer>
      <ButtonContainer>
        <RegisterButton onClick={handleRegister}>Register</RegisterButton>
        <LoginButton to="/Login">Or Login</LoginButton>
      </ButtonContainer>
    </>
  )
}

export default Register
