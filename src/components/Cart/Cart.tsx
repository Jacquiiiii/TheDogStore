import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Product } from '../../types/types'
import { CartContainer, CartItemsList, TotalContainer, Header, EmptyCart } from './styles'
import useCart from '../../hooks/useCart'
import { greenButtonColor } from '../../constants/constants'

import CartItem from './CartItem'
import Button from '../Button/Button'
import { backToCart } from '../../utils/helpers'

const Cart = () => {
  const { cartItems, total } = useCart()
  const isLoggedIn: boolean = useSelector((state: RootState) => state.login.isLoggedIn)

  return (
    <CartContainer>
      <Header>Cart</Header>
      {cartItems.length > 0 &&
        <CartItemsList>
          {cartItems.map((product: Product) => <CartItem product={product} key={product.name} data-testid="cart-item" />)}
        </CartItemsList>
      }
      {cartItems.length === 0 &&
        <EmptyCart>
          <img alt="empty shopping cart" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" />
          <span data-testid="empty-cart">Your cart is currently empty.</span>
        </EmptyCart>
      }
      {cartItems.length === 0 &&
        <TotalContainer>
          <Link to="/AllProducts">
            <Button buttonText="Continue shopping" color={greenButtonColor} data-testId="continue-shopping-button" />
          </Link>
        </TotalContainer>
      }
      {cartItems.length > 0 &&
        <TotalContainer>
          <span>Total: ${total}</span>
          {isLoggedIn &&
            <Link to='/Checkout'>
              <Button onClick={() => backToCart(false)} buttonText="Checkout" color={greenButtonColor} data-testId="checkout-button" />
            </Link>
          }
          {!isLoggedIn &&
            <Link to='/Login'>
              <Button onClick={() => backToCart(true)} buttonText="Login to proceed to checkout" color={greenButtonColor} data-testId="checkout-button" />
            </Link>
          }
        </TotalContainer>
      }
    </CartContainer>
  )
}

export default Cart