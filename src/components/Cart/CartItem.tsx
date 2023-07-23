// External imports
import { useDispatch } from 'react-redux'

// Store & Slices
import { removeItemFromCart } from '../../store/slices/cartSlice'

// Types
import { ProductProps } from '../../types/types'

// Styling
import { CartItemContainer } from './styles'

const CartItem = (props: ProductProps) => {
  const { product } = props
  const dispatch = useDispatch()

  return (
    <CartItemContainer>
      <div>
        <span>{product.brand}: {product.name} </span>
      </div>
      <div>
        <span data-testid="cart-item-price">${product.price}</span>
        <button onClick={() => dispatch(removeItemFromCart(product))}>🗑️</button>
      </div>
    </CartItemContainer>
  )
}

export default CartItem