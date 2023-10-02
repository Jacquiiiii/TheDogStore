import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Banner = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("https://4kwallpapers.com/images/wallpapers/black-dog-cute-puppies-black-background-dark-amoled-5k-3440x1440-1507.jpg");
  background-size: cover;
  background-position: center;
  div {
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: flex-end;
    span {
      color: whitesmoke;
      font-size: 30px;
      font-weight: bold;
      margin: 1em;
    }
  }
`

const ScrollWrapper = styled.div`
  display: flex;
  height: 100%
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 75%;
    height: 100vh;
  }

  @media (max-width: 650px) {
    width: 100%;
    gap: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
    div {
      height: 100%;
      margin-bottom: 1.5em;
      width: 85%;
    }
  }
`

const ProductLink = styled(Link)`
  text-decoration: none;
  color: whitesmoke;
  font-size: 16px;
  align-self: center;
  text-align: center;
  font-family: arial;
  background-color: #347474;
  padding: 1em;
  border-radius: 1em;
  align-self: flex-start;
  margin-top: 1em;
  font-weight: bold;
  width: 50%;
`

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  div {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      position: absolute;
      border-radius: 1em;
      width: 80%;
      height: auto;
    }
  }

  @media (max-width: 650px) {
    display: none;
  }
`

export { HomeContainer, ScrollWrapper, LeftSide, RightSide, Banner, ProductLink }