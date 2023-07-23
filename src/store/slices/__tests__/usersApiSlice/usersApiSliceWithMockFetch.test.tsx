// External imports
import type { ReactNode } from 'react'
import { renderHook, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import fetchMock from 'jest-fetch-mock'

// Store & Slices
import { store } from '../../../store'
import { useGetAllUsersQuery, useGetUserByEmailQuery } from '../../usersApiSlice'

// Mock Data
import { user2Data, usersData } from '../../../../__mocks__/data/usersData'

function wrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}

beforeEach(() => fetchMock.resetMocks())

describe('useGetUserByEmailQuery', () => {
  // const endpointName = 'getUserByEmail'
  // const email = 'jane@jane.com'
  // const data = user2Data

  // beforeEach(() => {
  //   fetchMock.mockOnceIf(`http://localhost:54321/products/${email}`, () =>
  //     Promise.resolve({
  //       status: 200,
  //       body: JSON.stringify({ data }),
  //     })
  //   )
  // })

  it('should fetch user "Jane"', async () => {
    // const { result } = renderHook(() => useGetUserByEmailQuery(email), {
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
    //   const firstName = result.current.currentData.userData.first_name
    //   expect(result.current.isSuccess).toBe(true)
    //   expect(firstName).toBe('Jane')
    // })

    // expect(fetchMock).toBeCalledTimes(1)
  })
})

// describe('useGetProductsQuery', () => {
//   const endpointName = 'getAllUsers'
//   const data = usersData

//   beforeEach(() => {
//     fetchMock.mockOnceIf(`http://localhost:54321/users`, () =>
//       Promise.resolve({
//         status: 200,
//         body: JSON.stringify({ data }),
//       })
//     )
//   })

//   it('should fetch all users', async () => {
//     const { result } = renderHook(() => useGetAllUsersQuery({}), {
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
//       const users = result.current.data.data.usersData

//       expect(result.current.isSuccess).toBe(true)
//       expect(users.length).toEqual(2)
//     })

//     expect(fetchMock).toBeCalledTimes(1)
//   })
// })