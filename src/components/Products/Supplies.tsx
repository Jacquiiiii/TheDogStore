import useProductsByCategory from '../../hooks/useProductsByCategory'
import { Product } from '../../types/types'
import { ProductsContainer, Header } from './styles'

import ProductCard from './ProductCard'
import ProductLinks from './ProductLinks'

const Supplies = () => {
  const { productsData, data: products, error, isLoading } = useProductsByCategory('Supplies')

  if (isLoading) {
    return (
      <ProductsContainer data-testid="products-container">
        Loading...
      </ProductsContainer>
    )
  }

  if (error) {
    return (
      <ProductsContainer data-testid="products-container">
        Error: An error occurred. Please try again.
      </ProductsContainer>
    )
  }

  return (
    <>
      <ProductLinks />
      <Header>Supplies</Header>
      <ProductsContainer data-testid="products-container">
        {productsData &&
          products.productsByCategory.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))
        }
        {!productsData &&
          <div data-testid="no-products">Unfortunately there are no products at this time. Please check back at a later date.</div>
        }
      </ProductsContainer>
    </>
  )
}

export default Supplies