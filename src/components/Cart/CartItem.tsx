import { useDispatch } from 'react-redux'
import { removeItemFromCart } from '../../store/slices/cartSlice'
import { ProductProps } from '../../types/types'
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
        <span data-testid="cart-item-price">${product.price.toFixed(2)}</span>
        <button onClick={() => dispatch(removeItemFromCart(product))}>🗑️</button>
      </div>
    </CartItemContainer>
  )
}

export default CartItem