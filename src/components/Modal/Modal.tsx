import { ModalProps } from "../../types/types"
import StyledModal from "./styles"

const Modal = ({ modalText, onClick, dataCy }: ModalProps) => {
  return (
    <StyledModal onClick={onClick} data-cy={dataCy}>
      {modalText}
    </StyledModal>
  )
}
export default Modal

