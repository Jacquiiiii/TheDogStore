import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAddOrderMutation } from '../store/slices/ordersApiSlice'
import { RootState } from '../store/store'
import { useDispatch } from 'react-redux'
import { clearCart } from '../store/slices/cartSlice'

const useOrder = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [createOrder] = useAddOrderMutation()

  const id = useSelector((state: RootState) => state.login.userId)
  const userId = Number(id)
  const total = Number(localStorage.getItem('cartTotal'))

  const handleCreateOrder = () => {
    try {
      createOrder({ total, userId })
      dispatch(clearCart())
      navigate('/Order-Confirmation')
    } catch (error) {
      console.error(error)
      alert('Oops, something went wrong!')
    }
  }

  return {
    handleCreateOrder
  }
}

export default useOrder
