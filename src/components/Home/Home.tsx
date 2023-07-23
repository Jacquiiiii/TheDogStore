// External imports
import { useState } from 'react'

// Styling
import { HomeContainer } from './styles'

const Home = () => {
  const [showModal, setShowModal] = useState(false)

  const handleButtonClick = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <HomeContainer>
      {!showModal &&
        <button onClick={handleButtonClick} data-cy="help-button">Need help?</button>
      }
      {showModal && 
        <button onClick={handleCloseModal} data-cy="contact-info">Call us at 1-800-123-4567</button>
      }
    </HomeContainer>
  )
}

export default Home
