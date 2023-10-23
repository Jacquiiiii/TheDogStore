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
  gap: 10px;
  padding: 1em;
  width: 70%;
  border-radius: 0.25em;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
  border: none;
  span {
    align-self: center;
  }
  img {
    width: 100px;
    height: auto;
  }

  @media (max-width: 540px) {
    width: 80%;
  }
`

const EmptyCart = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  width: 70%;
  border-radius: 0.25em;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
  border: none;
  span {
    align-self: center;
  }
  img {
    width: 100px;
    height: auto;
  }

  @media (max-width: 540px) {
    width: 80%;
  }
`

const TotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 70%;
  gap: 10px;
  margin-bottom: 1em;

  @media (max-width: 540px) {
    width: 80%;
  }
`

const Header = styled.h2`
  align-self: center;
  padding-top: 1em;
  margin: 0;
  width: 70%;

  @media (max-width: 540px) {
    width: 80%;
  }
`

const CartItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-left: 0.5em;
  }
  button:active {
    transform: scale(0.95);
  }

  @media (max-width: 540px) {
    div {
      display: flex;
      justify-content: center;
      align-self: center;
    }
    div:first-child {
      width: 60%;
    }
  }
`

export { CartContainer, CartItemsList, EmptyCart, TotalContainer, Header, CartItemContainer }