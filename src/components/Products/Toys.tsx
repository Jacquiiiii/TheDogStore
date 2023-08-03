import { useGetProductsByCategoryQuery } from '../../store/slices/productsApiSlice'
import { Product, ProductsResponse } from '../../types/types'
import { ProductsContainer, Header } from './styles'

import ProductCard from './ProductCard'
import ProductLinks from './ProductLinks'

const Toys = () => {
  const { data: products, error, isLoading } = useGetProductsByCategoryQuery('Toys')

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

  // Defines types for product.productsData and if not undefined, assign value of products to productsData. This is used to render products on the page if any exist.
  let productsData: ProductsResponse | undefined
  if (products.productsByCategory) productsData = products

  return (
    <>
      <ProductLinks />
      <Header>Toys</Header>
      <ProductsContainer data-testid="products-container">
        {productsData && products.productsByCategory.map((product: Product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
        {!productsData &&
          <div data-testid="no-products">Unfortunately there are no products at this time. Please check back at a later date.</div>
        }
      </ProductsContainer>
    </>
  )
}

export default Toys