import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterContainer = styled.header`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 50px;
  padding: 1em;
  color: whitesmoke;
  background: #393e46;
  padding: 1.5em 1em;
  div {
    display: flex;
  }

  @media (max-width: 714px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 10px;
    span {
      text-align: center;
      font-size: 12px;
    }
    div {
      align-items: center;
    }
  }

  @media (max-width: 871px) {
    gap: 25px;
    padding: 1em 0.5em;
    span {
      text-align: center;
      font-size: 14px;
    }
  }
`

const InfoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  flex-direction: column;

  @media (max-width: 665px) {
    justify-content: center;
    align-items: center;
  }
`

const FooterLinks = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-family: arial;
  button {
    text-decoration: none;
    color: whitesmoke;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font-size: 16px;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: whitesmoke;
  font-size: 16px;
  align-self: center;
  text-align: center;
  font-family: arial;
  border-radius: 0.25em;
`

const ContactInfo = styled.div`
  display: flex;
  gap: 15px;
`

export { FooterContainer, NavLink, FooterLinks, ContactInfo, InfoContainer }