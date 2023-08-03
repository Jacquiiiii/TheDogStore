import { useGetProductsByCategoryQuery } from '../store/slices/productsApiSlice'
import { ProductsResponse } from '../types/types'

const useProductsByCategory = (category: string) => {
  const { data: products, error, isLoading } = useGetProductsByCategoryQuery(category)

  // Defines types for product.productsData and if not undefined, assign value of products to productsData.
  let productsData: ProductsResponse | undefined
  if (products?.productsByCategory) productsData = products

  return { productsData, data: products, error, isLoading }
}

export default useProductsByCategory
