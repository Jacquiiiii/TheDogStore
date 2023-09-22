import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductsContainer = styled.div`
  height: 100%;
  padding: 2em 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const Header = styled.h2`
  align-self: center;
  padding-top: 1em;
  margin: 0;
`

const ProductCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  width: 40%;
  height: 300px;
  padding: 1em;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
  border-radius: 0.25em;
  img {
    width: 50%;
    height: auto;
  };
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 50%;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
  }
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-top: 1em;
`

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0.5em;
  font-weight: bold;
  color: #232b2b;
  font-size: 17px;
  text-decoration: underline;
  &: hover {
    color: #505050;
  };
`

export { ProductsContainer, Header, ProductCardContainer, ProductInfo, LinkContainer, NavLink }