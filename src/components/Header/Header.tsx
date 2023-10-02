import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { HeaderContainer, NavLink } from './styles'
import useLogout from '../../hooks/useLogout'

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart)
  const isLoggedIn: boolean = useSelector((state: RootState) => state.login.isLoggedIn)

  const handleLogout = useLogout()

  return (
    <HeaderContainer>
      <NavLink to="/" data-cy="home-link">
        <h1>The Dog Store</h1>
      </NavLink>
      <div>
        <NavLink to="/AllProducts" data-cy="shop-link">Shop</NavLink>
        <NavLink to="/Cart" data-cy="cart-link">Cart ({cartItems.length})</NavLink>
        {!isLoggedIn && 
          <NavLink to="/Login" data-cy="login-link">Login</NavLink>
        }
        {isLoggedIn &&
          <>
            <NavLink to="/">
              <button onClick={handleLogout} data-cy="logout-button">Logout</button>
            </NavLink>
            <NavLink to="/Rewards" data-cy="rewards-link">Rewards</NavLink>
          </>
        }
      </div>
    </HeaderContainer>
  )
}

export default Header