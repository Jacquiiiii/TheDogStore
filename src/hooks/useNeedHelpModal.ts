import { useState } from 'react'

const useNeedHelpModal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleModalChange = (action: boolean) => {
    action ? setShowModal(true) : setShowModal(false)
  }

  return { handleModalChange, showModal }
}

export default useNeedHelpModal
