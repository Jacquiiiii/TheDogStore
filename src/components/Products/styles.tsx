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

const Filter = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Header = styled.h2`
  align-self: center;
  padding-top: 0.5em;
  margin: 0;
`

const ProductCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 300px;
  padding: 1em;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
  border-radius: 0.25em;
  img {
    width: 35%;
    height: auto;
  };

  @media (max-width: 720px) {
    width: 80%;
  }
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

  @media (max-width: 720px) {
    gap: 5px;
  }
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

  @media (max-width: 540px) {
    font-size: 13px;
  }
`

export { ProductsContainer, Header, ProductCardContainer, ProductInfo, LinkContainer, NavLink, Filter }