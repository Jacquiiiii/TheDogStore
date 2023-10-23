import { useNavigate } from 'react-router-dom'
import { OrderConfirmationContainer, Header } from './styles'
import { greenButtonColor } from '../../constants/constants'
import Button from '../Button/Button'

const OrderConfirmation = () => {
  const navigate = useNavigate()

  const handleContinueShopping = () => {
    navigate('/AllProducts')
  }

  return (
    <OrderConfirmationContainer>
      <Header>Your order is confirmed!</Header>
      <Button buttonText="Continue Shopping" color={greenButtonColor} onClick={handleContinueShopping} />
    </OrderConfirmationContainer>
  )
}

export default OrderConfirmation