import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5em;
  height: 22vh;
  color: whitesmoke;
  background: #37474f;
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

  @media (max-width: 992px) {
    div {
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
    h1 {
      font-size: 30px;
    }
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: whitesmoke;
  padding: 0.5em;
  &:hover {
    text-decoration: underline;
  }
`

export { HeaderContainer, NavLink }