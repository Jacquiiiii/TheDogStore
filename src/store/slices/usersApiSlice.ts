//External imports
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Creates API queries that can be used to fetch data from /users endpoints
export const usersAPI = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:54321/' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({ query: () => 'users' }),
    getUserByEmail: builder.query({ query: (email) => ({ 
      url: `users/${email}`, 
      method: 'GET' 
    }) }),
    addUser: builder.mutation({ query: (body) => ({ 
      url: `users`, 
      method: 'POST',
      body 
    }) }),
    findUser: builder.mutation({ query: (body) => ({ 
      url: `users/login`, 
      method: 'POST',
      body 
    }) }),
  }),
})

// Exports queries for use in other components
export const { useGetAllUsersQuery, useGetUserByEmailQuery, useAddUserMutation, useFindUserMutation } = usersAPI