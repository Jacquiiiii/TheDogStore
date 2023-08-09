import { Product } from '../../types/types'
import { CartContainer, CartItemsList, ProductsLink, TotalContainer, Header } from './styles'
import useCart from '../../hooks/useCart'
import { greenButtonColor } from '../../constants/constants'

import CartItem from './CartItem'
import Button from '../Button/Button'

const Cart = () => {
  const { cartItems, total } = useCart()

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
          <Button buttonText="Checkout" color={greenButtonColor} />
        </TotalContainer>
      }
    </CartContainer>
  )
}

export default Cart