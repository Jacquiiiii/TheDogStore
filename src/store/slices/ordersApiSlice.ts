import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_ENV === 'production' ? '/' : 'http://localhost:54321/'

// Creates API queries that can be used to fetch data from /orders endpoints
export const ordersAPI = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllOrders: builder.query({ query: () => 'orders' }),
    getOrderByUserId: builder.query({ query: (userId) => ({ 
      url: `orders/${userId}`, 
      method: 'GET' 
    }) }),
    addOrder: builder.mutation({ query: (body) => ({ 
      url: `orders`, 
      method: 'POST',
      body 
    }) }),
  }),
})

export const { useGetAllOrdersQuery, useGetOrderByUserIdQuery, useAddOrderMutation } = ordersAPI