import { useGetProductsQuery } from '../../store/slices/productsApiSlice'
import { Product, ProductsResponse } from '../../types/types'
import { ProductsContainer, Header, Filter } from './styles'

import ProductCard from './ProductCard'
import ProductLinks from './ProductLinks'

const AllProducts = () => {
  const { data: products, error, isLoading } = useGetProductsQuery({})

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

  let productsData: ProductsResponse | undefined
  if (products.productsData) productsData = products

  return (
    <>
      <Filter>
        <Header>All Products</Header>
        <ProductLinks />
      </Filter>
      <ProductsContainer data-testid="products-container">
        {productsData && products.productsData.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
        {!productsData &&
          <div data-testid="no-products">Unfortunately there are no products at this time. Please check back at a later date.</div>
        }
      </ProductsContainer>
    </>
  )
}

export default AllProducts
