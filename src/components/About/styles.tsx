// Styling
import styled from 'styled-components'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2em 0 1.5em 0;
  width: 60%;
`

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  img {
    border-radius: 1em;
    margin-top: 0.75em;
    width: 350px;
    height: auto;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
  }
`

export { AboutContainer, ImageContainer }