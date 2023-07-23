// Constants
import { dog1, dog2, dog3 } from '../../constants/constants'

// Styling
import { AboutContainer, ImageContainer } from './styles'

const About = () => {
  return (
    <>
      <AboutContainer>
        <p>Here at the dog store, we're passionate about providing the best possible nutrition and supplies for dogs. As dog owners ourselves, we understand how important it is to ensure that our furry friends are healthy and happy. That's why we've made it our mission to offer premium quality dog food and supplies that are tailored to meet the unique needs of each individual dog.</p>

        <p>We believe that every dog deserves the very best, which is why we source only the highest quality ingredients for our dog food products. Our team of experts carefully selects each ingredient based on its nutritional value and suitability for dogs, ensuring that our food is not only delicious but also packed with essential nutrients.</p>
      </AboutContainer>
      <ImageContainer>
        <img alt="woman and dog watching the sunset" src={dog1} />
        <img alt="woman and dog shaking hands" src={dog2} />
        <img alt="man and dog hi-fiving" src={dog3} />
      </ImageContainer>
    </>
  )
}

export default About