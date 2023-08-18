import { Link } from "react-router-dom"
import { greenButtonColor } from "../../constants/constants"
import Button from "../Button/Button"
import { CheckoutContainer, SideBySide } from "./styles"

const Checkout = () => {

  return (
    <CheckoutContainer>
      <h4>Personal Information</h4>
      <SideBySide>
        <input placeholder="Enter first name" />
        <input placeholder="Enter last name" />
      </SideBySide>
      <SideBySide>
        <input placeholder="Enter street number" />
        <input placeholder="Enter street name" />
      </SideBySide>
      <SideBySide>
        <input placeholder="Enter city" />
        <input placeholder="Enter postal code" />
      </SideBySide>
      <h4>Payment Information</h4>
      <SideBySide>
        <input placeholder="Enter credit card number" />
        <input placeholder="Enter expiry" />
      </SideBySide>
      <SideBySide>
        <input placeholder="Enter CVV" />
        <input placeholder="Enter postal code" />
      </SideBySide>
      <SideBySide>
        <Link to="/Cart">
          <Button buttonText="Back" color={greenButtonColor} />
        </Link>
        <Link to="/Order-Confirmation">
          <Button buttonText="Submit" color={greenButtonColor} />
        </Link>
      </SideBySide>
    </CheckoutContainer>
  )
}

export default Checkout