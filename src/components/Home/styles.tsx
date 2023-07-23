// Styling
import styled from 'styled-components'

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  // flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 20px;
  background-image: url('https://wallpaperaccess.com/full/527085.jpg');
  background-size: cover;
  background-position: 50% -10%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  button {
    font-weight: bold;
    font-size: 20px;
    padding: 1em 2em;
    border: none;
    border-radius: 0.5em;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.5);
    margin: 1em;
    cursor: pointer;
    background-color: whitesmoke;
  };
  button:hover {
    background-color: #E8E8E8;
  };
`

export { HomeContainer }