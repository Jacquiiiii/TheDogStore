import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  margin-top: 5em;
  input {
    padding: 1em;
    width: 60%;
    margin-bottom: 1em;
    border-radius: 0.25em;
    border: none;
    outline: none;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
    font-size: 16px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`

const LoginButton = styled.button`
  padding: 1em 0.75em;
  border-radius: 0.25em;
  border: none;
  background-color: #347474;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 30%;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
`

const RegisterButton = styled(Link)`
  padding: 1em 0.75em;
  border-radius: 0.25em;
  border: none;
  background-color: #347474;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 30%;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
  text-align: center;
  text-decoration: none;
`

export { LoginContainer, ButtonContainer, LoginButton, RegisterButton }