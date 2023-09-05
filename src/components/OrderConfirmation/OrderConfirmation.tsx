import { useNavigate } from 'react-router-dom'
import { OrderConfirmationContainer, OrderConfirmationDetails, Header, BackContainer } from './styles'
import { greenButtonColor } from '../../constants/constants'
import Button from '../Button/Button'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useGetOrderByUserIdQuery } from '../../store/slices/ordersApiSlice'
import { useEffect, useState } from 'react'

const OrderConfirmation = () => {
  const navigate = useNavigate()
  const userId = useSelector((state: RootState) => state.login.userId)
  const { data: orderData, isSuccess, isError } = useGetOrderByUserIdQuery(userId)
  const [orderId, setOrderId] = useState<number | null>(null)

  const handleContinueShopping = () => {
    navigate('/AllProducts')
  }

  useEffect(() => {
    if (isSuccess && orderData) {
      const sortedData = [...orderData.orderData].sort((a: any, b: any) => b.id - a.id)
      if (sortedData.length > 0) {
        const id = sortedData[0].id
        setOrderId(id)
      }
    }
  }, [orderData, isSuccess, userId])

  return (
    <OrderConfirmationContainer>
      {isSuccess ? (
        orderData && (
          <>
            <Header>Order Confirmation</Header>
            <OrderConfirmationDetails>
              Your order confirmation number is {orderId}
            </OrderConfirmationDetails>
            <BackContainer>
              <Button buttonText="Continue Shopping" color={greenButtonColor} onClick={handleContinueShopping} />
            </BackContainer>
          </>
        )
      ) : isError ? (
        <Header>Error fetching order data.</Header>
      ) : (
        <Header>Loading...</Header>
      )}
    </OrderConfirmationContainer>
  )
}

export default OrderConfirmation