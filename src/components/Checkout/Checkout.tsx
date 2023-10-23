import { Link } from "react-router-dom"
import { greenButtonColor } from "../../constants/constants"
import Button from "../Button/Button"
import { CheckoutContainer, SideBySide } from "./styles"
import useOrder from "../../hooks/useOrder"

const Checkout = () => {
  const { handleCreateOrder } = useOrder()

  return (
    <CheckoutContainer>
      <h4>Shipping Details</h4>
      <SideBySide>
        <input placeholder="First name" />
        <input placeholder="Last name" />
      </SideBySide>
      <SideBySide>
        <input placeholder="Street number" />
        <input placeholder="Street name" />
      </SideBySide>
      <SideBySide>
        <input placeholder="City" />
        <input placeholder="Postal code" />
      </SideBySide>
      <h4>Payment Details</h4>
      <SideBySide>
        <input placeholder="Credit card number" />
        <input placeholder="Expiry" />
      </SideBySide>
      <SideBySide>
        <input placeholder="CVV" />
        <input placeholder="Postal code" />
      </SideBySide>
      <SideBySide>
        <Link to="/Cart">
          <Button buttonText="Back" color={greenButtonColor} />
        </Link>
        <Button onClick={handleCreateOrder} buttonText="Submit" color={greenButtonColor} />
      </SideBySide>
    </CheckoutContainer>
  )
}

export default Checkout