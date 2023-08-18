import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../store/slices/cartSlice'
import { OrderConfirmationContainer, OrderConfirmationDetails, Header, BackContainer } from './styles'
import { greenButtonColor } from '../../constants/constants'

import Button from '../Button/Button'

const OrderConfirmation = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleContinueShopping = () => {
    dispatch(clearCart())
    localStorage.setItem('jwtToken', '')
    navigate('/AllProducts')
  }
  
  return (
    <OrderConfirmationContainer>
      <Header>Order Confirmation</Header>
      <OrderConfirmationDetails>
        Your hardcoded order confirmation number is #12345
      </OrderConfirmationDetails>
      <BackContainer>
        <Button buttonText="Continue Shopping" color={greenButtonColor} onClick={handleContinueShopping}/>
      </BackContainer>
    </OrderConfirmationContainer>
  )
}

export default OrderConfirmation