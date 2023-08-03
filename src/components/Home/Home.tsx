import useNeedHelpModal from '../../hooks/useNeedHelpModal'
import { HomeContainer } from './styles'

const Home = () => {
  const { handleModalChange, showModal } = useNeedHelpModal()

  return (
    <HomeContainer>
      {!showModal &&
        <button 
          onClick={() => handleModalChange(true)} 
          data-cy="help-button">Need help?
        </button>
      }
      {showModal && 
        <button 
          onClick={() => handleModalChange(false)} 
          data-cy="contact-info">Call us at 1-800-123-4567
        </button>
      }
    </HomeContainer>
  )
}

export default Home
