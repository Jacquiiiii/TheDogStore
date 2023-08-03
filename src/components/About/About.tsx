import { dog1, dog2, dog3, aboutText1, aboutText2 } from '../../constants/constants'
import { AboutContainer, ImageContainer } from './styles'

const About = () => {
  return (
    <>
      <AboutContainer>
        <p>{aboutText1}</p>
        <p>{aboutText2}</p>
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