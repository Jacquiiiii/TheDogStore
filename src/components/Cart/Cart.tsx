import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Product } from '../../types/types'
import { CartContainer, CartItemsList, ProductsLink, TotalContainer, Header } from './styles'

import CartItem from './CartItem'

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart)

  const calculateTotal = (cartItemsResult: Product[]) => {
    let total = 0
    for (let item of cartItemsResult) {
      total += item.price
    }
    return total.toFixed(2)
  }

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
          <span>Subtotal: ${calculateTotal(cartItems)}</span>
          <button>Checkout</button>
        </TotalContainer>
      }
    </CartContainer>
  )
}

export default Cart