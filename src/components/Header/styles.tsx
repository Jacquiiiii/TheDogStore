import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  color: whitesmoke;
  background: #393e46;
  font-weight: bold;
  gap: 20px;
  h1 {
    font-size: 50px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;

    @media (max-width: 723px) {
      flex-direction: column;
      gap: 5px;
      margin: 1.5em 0;
    }
  }
  button {
    text-decoration: none;
    color: whitesmoke;
    background-color: transparent;
    border: none;
    font-size: 16px;
    font-weight: bold;
    &:hover {
    text-decoration: underline;
    }
  }

  @media (max-width: 540px) {
    div {
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
    h1 {
      font-size: 20px;
    }
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: whitesmoke;
  padding: 0.5em;

  @media (max-width: 540px) {
    padding: 0;
  }
`

export { HeaderContainer, NavLink }