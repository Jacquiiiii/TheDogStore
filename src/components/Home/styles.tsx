import styled from 'styled-components'

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 20px;
  overflow: hidden;
`

const ScrollWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  max-height: 100vh;
  overflow-y: scroll;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
    color: #5dacbd;
    font-weight: bold;
    min-height: 100vh;
  }
`

const RightSide = styled.div`
  width: 50%;
  position: sticky;
  top: 10px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  position: absolute;
  border-radius: 1em;
  height: 50vh;
  width: auto;
`

export { HomeContainer, ScrollWrapper, LeftSide, RightSide, Image }