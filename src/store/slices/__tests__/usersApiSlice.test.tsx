import type { ReactNode } from 'react'
import { renderHook, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { store } from '../../store'
import { useGetAllUsersQuery, useGetUserByEmailQuery } from '../usersApiSlice'

import { usersData, user1Data, user2Data } from '../../../__mocks__/data/usersData'

function wrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}

describe('useGetAllUsersQuery', () => {
  let server: ReturnType<typeof setupServer>

  beforeAll(() => {
    server = setupServer(
      rest.get('http://localhost:54321/users', (req, res, ctx) => {
        return res(ctx.json(usersData))
      })
    )
    server.listen()
  })

  afterAll(() => {
    server.close()
  })

  it('should fetch all users successfully', async () => {
    const { result } = renderHook(() => useGetAllUsersQuery({}), { wrapper })

    await waitFor(() => {
      const users = result.current.data.usersData

      expect(users).toHaveLength(2)
      expect(users[0].id).toBe(1)
    })
  })
})

describe('useGetUserByEmailQuery', () => {
  let server: ReturnType<typeof setupServer>

  beforeAll(() => {
    server = setupServer(
      rest.get('http://localhost:54321/users/:email', (req, res, ctx) => {
        const { email } = req.params

        let dynamicResponse: any

        if (email === 'john@john.com') {
          dynamicResponse = user1Data
        } else if (email === 'jane@jane.com') {
          dynamicResponse = user2Data
        }

        return res(ctx.json(dynamicResponse))
      })
    )
    server.listen()
  })

  afterAll(() => {
    server.close()
  })

  it('should fetch user "John" successfully', async () => {
    const { result } = renderHook(() => useGetUserByEmailQuery('john@john.com'), { wrapper })

    await waitFor(() => {
      const firstName = result.current.data.first_name

      expect(result.current.data).toBeDefined()
      expect(firstName).toBe('John')
    })
  })

  it('should fetch user "Jane" successfully', async () => {
    const { result } = renderHook(() => useGetUserByEmailQuery('jane@jane.com'), { wrapper })

    await waitFor(() => {
      const firstName = result.current.data.first_name
      
      expect(result.current.data).toBeDefined()
      expect(firstName).toBe('Jane')
    })
  })
})