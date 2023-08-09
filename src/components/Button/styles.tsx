import styled from "styled-components"

const StyledButton = styled.button`
  border: none;
  border-radius: 0.5em;
  font-weight: bold;
  padding: 0.75em 1em;
  color: whitesmoke;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
  margin-left: 0.5em;
  &:active {
    transform: scale(0.95);
  }
`

export default StyledButton