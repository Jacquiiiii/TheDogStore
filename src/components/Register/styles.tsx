// External imports
import { Link } from 'react-router-dom'

// Styling
import styled from 'styled-components'

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  input {
    padding: 1em;
    width: 30%;
    margin-bottom: 1em;
    border-radius: 0.25em;
    border: none;
    outline: none;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
    font-size: 16px;
    background-color: #f2f2f2;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`

const RegisterButton = styled.button`
  padding: 0.75em;
  border-radius: 0.25em;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 15%;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
`

const LoginButton = styled(Link)`
  padding: 0.5em;
  border-radius: 0.25em;
  border: none;
  background-color: #008CBA;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 15%;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
  text-decoration: none;
  text-align: center;
`

export { RegisterContainer, ButtonContainer, RegisterButton, LoginButton }