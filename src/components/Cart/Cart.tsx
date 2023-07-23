// External imports
import { useSelector } from 'react-redux'

// Components
import CartItem from './CartItem'

// Store & Slices
import { RootState } from '../../store/store'

// Types
import { Product } from '../../types/types'

// Styling
import { CartContainer, CartItemsList, ProductsLink, TotalContainer, Header } from './styles'

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
          cartItems.map((product: Product) => <CartItem product={product} key={product.name} data-testid="cart-item"/>)
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