import styled from 'styled-components'

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 3em;
  margin-bottom: 2em;
  input {
    padding: 1em;
    width: 40%;
    border-radius: 0.25em;
    border: none;
    outline: none;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
    font-size: 16px;
  }
  h4 {
    margin: 1em 0 0 0;
  }

  @media (max-width: 540px) {
    input {
      font-size: 12px;
    }
  }
`

const SideBySide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 75%;
  margin-bottom: 0.25em;

  @media (max-width: 540px) {
    width: 85%;
  }
`

export { CheckoutContainer, SideBySide }