import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  color: whitesmoke;
  background: #393e46;
  font-weight: bold;
  gap: 20px;
  h1 {
    font-size: 50px;

    @media (max-width: 723px) {
      font-size: 42px;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;

    @media (max-width: 723px) {
      justify-content: flex-end;
      gap: 10px;
      width: 100%;
      margin-bottom: 0.5em;
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

  @media (max-width: 723px) {
    flex-direction: column;
    align-items: center;
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