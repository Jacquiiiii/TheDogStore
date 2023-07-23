// External imports
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Response = any

// Creates API queries that can be used to fetch data from /products endpoints
export const productsAPI = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:54321/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Response, any>({
      query: () => ({ url: `products`, method: 'GET' })
    }),
    getProductsByCategory: builder.query<Response, any>({
      query: (category) => ({ url: `products/category/${category}`, method: 'GET' })
    }),
    getProductsByBrand: builder.query<Response, any>({
      query: (brand) => ({ url: `products/brand/${brand}`, method: 'GET' })
    })
  }),
})

// Exports queries for use in other components
export const { useGetProductsQuery, useGetProductsByCategoryQuery, useGetProductsByBrandQuery } = productsAPI