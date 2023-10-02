import { Link } from 'react-router-dom'
import styled from 'styled-components'

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  margin-top: 5em;
  input {
    padding: 1em;
    width: 50%;
    margin-bottom: 1em;
    border-radius: 0.25em;
    border: none;
    outline: none;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
    font-size: 16px;
    
    @media (max-width: 540px) {
      font-size: 12px;
    }
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`

const RegisterButton = styled.button`
  padding: 1em 0.75em;
  border-radius: 0.25em;
  border: none;
  background-color: #347474;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 25%;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);

  @media (max-width: 540px) {
    font-size: 12px;
  }
`

const LoginButton = styled(Link)`
  padding: 1em 0.75em;
  border-radius: 0.25em;
  border: none;
  background-color: #347474;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 25%;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
  text-align: center;
  text-decoration: none;

  @media (max-width: 540px) {
    font-size: 12px;
  }
`

export { RegisterContainer, ButtonContainer, RegisterButton, LoginButton }