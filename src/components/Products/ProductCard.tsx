import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/slices/cartSlice'
import { ProductProps } from '../../types/types'
import { ProductCardContainer, ProductInfo } from './styles'
import { greenButtonColor } from '../../constants/constants'

import Button from '../Button/Button'

const ProductCard = (props: ProductProps) => {
  const { product } = props
  const dispatch = useDispatch()

  return (
    <ProductCardContainer data-testid="product-card-container">
      <img src={product.image} alt={product.name} />
      <ProductInfo>
        <span>{product.brand}: {product.name}</span>
        <div>
          <span data-testid="product-card-price">${product.price}</span>
          <Button buttonText="Add to cart" color={greenButtonColor} onClick={() => dispatch(addItemToCart(product))} />
        </div>
      </ProductInfo>
    </ProductCardContainer>
  )
}

export default ProductCard