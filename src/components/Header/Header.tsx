import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store/store'
import { logoutSuccess, setUserId } from '../../store/slices/loginSlice'
import { clearCart } from '../../store/slices/cartSlice'
import { HeaderContainer, NavLink } from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartItems = useSelector((state: RootState) => state.cart)
  const isLoggedIn: boolean = useSelector((state: RootState) => state.login.isLoggedIn)

  const handleLogout = () => {
    dispatch(logoutSuccess())
    dispatch(setUserId(''))
    dispatch(clearCart())
    localStorage.setItem('jwtToken', '')
    navigate('/')
  }

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/" data-cy="home-link">Home</NavLink>
        <NavLink to="/About" data-cy="about-link">About Us</NavLink>
        <NavLink to="/AllProducts" data-cy="shop-link">Shop</NavLink>
      </div>
      <h1>The Dog Store</h1>
      <div>
        {!isLoggedIn && <NavLink to="/Login" data-cy="login-link">Login</NavLink>}
        {isLoggedIn &&
          <>
            <button onClick={handleLogout} data-cy="logout-button">Logout</button>
            <NavLink to="/Rewards" data-cy="rewards-link">Rewards</NavLink>
          </>
        }
        <NavLink to="/Cart" data-cy="cart-link">My Cart ({cartItems.length})</NavLink>
      </div>
    </HeaderContainer>
  )
}

export default Header