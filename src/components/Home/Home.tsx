import { HomeContainer, ScrollWrapper, LeftSide, RightSide, Image } from './styles'


const Home = () => {
  return (
    <HomeContainer>
      <ScrollWrapper>
      <LeftSide>
        <div>
          <h2>Content One</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div>
          <h2>Content Two</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div>
          <h2>Content Three</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </LeftSide>
      <RightSide>
        <Image alt="random" src="https://source.unsplash.com/random/400x400?sig=1" />
      </RightSide>
      </ScrollWrapper>
    </HomeContainer>
  )
}

export default Home