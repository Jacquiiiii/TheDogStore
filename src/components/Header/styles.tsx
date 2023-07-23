// External imports
import { Link } from 'react-router-dom'

// Styling
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 1.5em;
  height: 22vh;
  color: whitesmoke;
  background: #37474f;
  font-weight: bold;
  h1 {
    font-size: 5vw;
  }
  div {
    font-size: 20px;
  }
  button {
    text-decoration: none;
    color: whitesmoke;
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-weight: bold;
    padding: 0.5em;
    &:hover {
    text-decoration: underline;
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