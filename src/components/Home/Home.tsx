import { HomeContainer, ScrollWrapper, LeftSide, RightSide, Banner, ProductLink } from './styles'


const Home = () => {
  return (
    <HomeContainer>
      <Banner>
        <div>
          <span>Serious Quality for Serious Dogs.</span>
        </div>
      </Banner>
      <ScrollWrapper>
        <LeftSide>
          <div>
            <img alt="dog relaxing with a blanket" src="https://media.istockphoto.com/id/1407655089/photo/funny-pomeranian-dog-summer-ready-for-bath-wrapped-with-a-towel-and-sunglasses-isolated-on.webp?b=1&s=170667a&w=0&k=20&c=WtolW9GiJSbjjGZumohjaHMTnkYbn3r_myU87HYie3I=" />
          </div>
        </LeftSide>
        <RightSide>
          <div>
            <h2>Discover Unique Doggie Treats</h2>
            <p>Indulge your furry friend with a delectable selection of treats that will make their tails wag with joy. Our handpicked assortment is made with love and care, ensuring every bite is a taste of heaven for your precious pup.</p>
            <ProductLink to="/Treats">Shop now</ProductLink>
          </div>
          <div>
            <h2>Upgrade Your Pup's Playtime</h2>
            <p>Elevate playtime to a whole new level with our premium dog toys and accessories. From interactive toys that stimulate their minds to cozy beds for peaceful naps, we have everything your canine companion needs for endless fun and comfort.</p>
            <ProductLink to="/Toys">Shop now</ProductLink>
          </div>
          <div>
            <h2>Care and Wellness for Your Canine Companion</h2>
            <p>Your dog's health and well-being are our top priorities. Explore our range of high-quality grooming products and wellness essentials that will keep your pup looking and feeling their best. Because a happy, healthy dog is a true source of joy.</p>
            <ProductLink to="/Supplies">Shop now</ProductLink>
          </div>
        </RightSide>
      </ScrollWrapper>
    </HomeContainer>
  )
}

export default Home