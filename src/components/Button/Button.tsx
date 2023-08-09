import { ButtonProps } from "../../types/types"
import StyledButton from "./styles"

const Button = ({ buttonText, onClick, color, width, dataCy }: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      style={{ backgroundColor: color, width: width }}
      data-cy={dataCy}
    >
      {buttonText}
    </StyledButton>
  )
}

export default Button