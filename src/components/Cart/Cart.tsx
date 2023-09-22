import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Product } from '../../types/types'
import { CartContainer, CartItemsList, ProductsLink, TotalContainer, Header } from './styles'
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
      <Header>My Cart</Header>
      <CartItemsList>
        {cartItems.length === 0 &&
          <span data-testid="empty-cart">There are currently no items in your cart. Click <ProductsLink to="/AllProducts">here</ProductsLink> to add some!</span>
        }
        {cartItems.length > 0 &&
          cartItems.map((product: Product) => <CartItem product={product} key={product.name} data-testid="cart-item" />)
        }
      </CartItemsList>
      {cartItems.length > 0 &&
        <TotalContainer>
          <span>Subtotal: ${total}</span>
          { isLoggedIn &&
            <Link to='/Checkout'>
              <Button onClick={() => backToCart(false)} buttonText="Checkout" color={greenButtonColor} data-testId="checkout-button"/>
            </Link>
          }
          { !isLoggedIn &&
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