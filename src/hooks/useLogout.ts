import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutSuccess, setUserId } from '../store/slices/loginSlice'
import { clearCart } from '../store/slices/cartSlice'

const useLogout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logoutSuccess())
    dispatch(setUserId(''))
    dispatch(clearCart())
    localStorage.setItem('jwtToken', '')
    navigate('/')
  }

  return handleLogout
}

export default useLogout
