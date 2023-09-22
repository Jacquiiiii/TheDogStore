import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 2em;
  overflow-y: scroll;
`

const CartItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  width: 60%;
  border-radius: 0.25em;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
  border: none;
  span {
    align-self: center;
  }
`

const ProductsLink = styled(Link)`
  color: red;
`

const TotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 60%;
  gap: 10px;
  margin-bottom: 1em;
`

const Header = styled.h2`
  align-self: center;
  padding-top: 1em;
  margin: 0;
  width: 60%;
`

const CartItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  button:active {
    transform: scale(0.95);
  }
`

export { CartContainer, CartItemsList, ProductsLink, TotalContainer, Header, CartItemContainer }