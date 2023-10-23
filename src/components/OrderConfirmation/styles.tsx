import styled from 'styled-components'

const OrderConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 4em;
`

const Header = styled.h2`
  margin: 0;
`

export { OrderConfirmationContainer, Header }