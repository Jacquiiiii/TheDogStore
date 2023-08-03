import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Response = any

const baseUrl = process.env.REACT_APP_ENV === 'production' ? '/' : 'http://localhost:54321/'

// Creates API queries that can be used to fetch data from /products endpoints
export const productsAPI = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
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

export const { useGetProductsQuery, useGetProductsByCategoryQuery, useGetProductsByBrandQuery } = productsAPI