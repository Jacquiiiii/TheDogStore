import useNeedHelpModal from '../../hooks/useNeedHelpModal'
import { HomeContainer } from './styles'

import Modal from '../Modal/Modal'

const Home = () => {
  const { handleModalChange, showModal } = useNeedHelpModal()

  return (
    <HomeContainer>
      {showModal ?
        <Modal
          onClick={() => handleModalChange(false)}
          modalText="Call us at 1-800-123-4567"
          dataCy="contact-info"
        />
        :
        <Modal
          onClick={() => handleModalChange(true)}
          modalText="Need help?"
          dataCy="help-button"
        />
      }
    </HomeContainer>
  )
}

export default Home
