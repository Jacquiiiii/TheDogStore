import styled from 'styled-components'

const OrderConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 2em;
  overflow-y: scroll;
`

const OrderConfirmationDetails = styled.ul`
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

  @media (max-width: 540px) {
    width: 80%;
  }
`

const BackContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 60%;
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
  width: 60%;

  @media (max-width: 540px) {
    width: 80%;
  }
`

export { OrderConfirmationContainer, OrderConfirmationDetails, BackContainer, Header }