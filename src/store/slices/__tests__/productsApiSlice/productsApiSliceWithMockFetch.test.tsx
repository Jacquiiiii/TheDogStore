// External imports
import type { ReactNode } from 'react'
import { renderHook, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import fetchMock from 'jest-fetch-mock'

// Store & Slices
import { store } from '../../../store'
import { useGetProductsQuery, useGetProductsByCategoryQuery, useGetProductsByBrandQuery } from '../../productsApiSlice'

// Mock Data
import { foodData, productsData, kongBrandData } from '../../../../__mocks__/data/productsData'

function wrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}

beforeEach(() => fetchMock.resetMocks())

describe('useGetProductByCategoryQuery', () => {
  // const endpointName = 'getProductsByCategory'
  // const category = 'Food'
  // const data = foodData

  // beforeEach(() => {
  //   fetchMock.mockOnceIf(`http://localhost:54321/products/category/${category}`, () =>
  //     Promise.resolve({
  //       status: 200,
  //       body: JSON.stringify({ data }),
  //     })
  //   )
  // })

  it('should fetch products with "Food" category', async () => {
    // const { result } = renderHook(() => useGetProductsByCategoryQuery(category), {
    //   wrapper,
    // })

    // expect(result.current).toMatchObject({
    //   status: 'pending',
    //   endpointName,
    //   isLoading: true,
    //   isSuccess: false,
    //   isError: false,
    //   isFetching: true,
    // })

    // await waitFor(() => {
    //   const foodProducts = result.current.data.data.productsByCategory
    //   const firstProductName = 'Red Meat, Liver & Whole Oats Recipe Dog Food'

    //   expect(result.current.isSuccess).toBe(true)
    //   expect(foodProducts.length).toEqual(4)
    //   expect(foodProducts[0].name).toBe(firstProductName)
    // })

    // expect(fetchMock).toBeCalledTimes(1)
  })
})

// describe('useGetProductByBrandQuery', () => {
//   const endpointName = 'getProductsByBrand'
//   const brand = 'KONG'
//   const data = kongBrandData

//   beforeEach(() => {
//     fetchMock.mockOnceIf(`http://localhost:54321/products/brand/${brand}`, () =>
//       Promise.resolve({
//         status: 200,
//         body: JSON.stringify({ data }),
//       })
//     )
//   })

//   it('should fetch products with "KONG" category', async () => {
//     const { result } = renderHook(() => useGetProductsByBrandQuery(brand), {
//       wrapper,
//     })

//     expect(result.current).toMatchObject({
//       status: 'pending',
//       endpointName,
//       isLoading: true,
//       isSuccess: false,
//       isError: false,
//       isFetching: true,
//     })

//     await waitFor(() => {
//       const brandProducts = result.current.data.data.productsByBrand
//       const firstProductName = 'Squeaky Plush Dog Toy'

//       expect(result.current.isSuccess).toBe(true)
//       expect(brandProducts.length).toEqual(4)
//       expect(brandProducts[0].name).toBe(firstProductName)
//     })

//     expect(fetchMock).toBeCalledTimes(1)
//   })
// })

// describe('useGetProductsQuery', () => {
//   const endpointName = 'getProducts'
//   const data = productsData

//   beforeEach(() => {
//     fetchMock.mockOnceIf(`http://localhost:54321/products`, () =>
//       Promise.resolve({
//         status: 200,
//         body: JSON.stringify({ data }),
//       })
//     )
//   })

//   it('should fetch all products', async () => {
//     const { result } = renderHook(() => useGetProductsQuery({}), {
//       wrapper,
//     })

//     expect(result.current).toMatchObject({
//       status: 'pending',
//       endpointName,
//       isLoading: true,
//       isSuccess: false,
//       isError: false,
//       isFetching: true,
//     })

//     await waitFor(() => {
//       const products = result.current.data.data.productsData
//       const firstProductName = 'Red Meat, Liver & Whole Oats Recipe Dog Food'

//       expect(result.current.isSuccess).toBe(true)
//       expect(products.length).toEqual(4)
//       expect(products[0].name).toBe(firstProductName)
//     })

//     expect(fetchMock).toBeCalledTimes(1)
//   })
// })