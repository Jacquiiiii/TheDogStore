import { greenButtonColor } from "../../constants/constants"
import Button from "../Button/Button"
import { CheckoutContainer } from "./styles"

const Checkout = () => {

  return (
    <CheckoutContainer>
      <input placeholder="Enter first name" />
      <input placeholder="Enter last name" />
      <input placeholder="Enter credit card number" />
      <input placeholder="Enter expiry" />
      <input placeholder="Enter CVV" />
      <input placeholder="Enter postal code" />
      <Button buttonText="Submit" color={greenButtonColor} />
    </CheckoutContainer>
  )
}

export default Checkout