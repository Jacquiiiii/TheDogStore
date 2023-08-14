import styled from 'styled-components'

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 2em;
  margin-bottom: 2em;
  input {
    padding: 1em;
    width: 30%;
    border-radius: 0.25em;
    border: none;
    outline: none;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
    font-size: 16px;
    background-color: #f2f2f2;
  }
`

export { CheckoutContainer }