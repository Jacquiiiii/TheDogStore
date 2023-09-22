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
      <h1>The Dog Store</h1>
      <div>
        <NavLink to="/" data-cy="home-link">Home</NavLink>
        <NavLink to="/About" data-cy="about-link">About</NavLink>
        <NavLink to="/AllProducts" data-cy="shop-link">Shop</NavLink>
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
        <NavLink to="/Cart" data-cy="cart-link">Cart ({cartItems.length})</NavLink>
      </div>
    </HeaderContainer>
  )
}

export default Header