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

  @media (max-width: 777px) {
    padding: 1em 0;
  }
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2em;

  @media (max-width: 777px) {
    flex-direction: column;
    gap: 30px;
  }
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
`

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0.5em;
  font-weight: bold;
  color: #232b2b;
  font-size: 16px;
  &: hover {
    text-decoration: underline;
  };
`

const SearchBar = styled.div`
  display: flex;
  gap: 10px;
  input {
    padding: 1em;
    border: none;
    border-radius: 0.25em;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
    outline: none;
    width: 300px;

    @media (max-width: 777px) {
      width: 160px;
    }
  }
  button {
    border: none;
    border-radius: 1em;
  }
`

export { ProductsContainer, ProductCardContainer, ProductInfo, LinkContainer, NavLink, FilterContainer, SearchBar }