// External imports
import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// Components
import Login from '../Login'

// Store & Slices
import { store } from '../../../store/store'
import { useFindUserMutation } from '../../../store/slices/usersApiSlice'
import { loginSuccess, setUserId } from '../../../store/slices/loginSlice'

// Mocks
jest.mock('../../../store/slices/usersApiSlice')
jest.mock('../../../store/store')
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}))
window.alert = jest.fn()

describe('Login', () => {
  const userData = {
    "id": 2,
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "jane@jane.com",
    "password1": "password456"
  }

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI2LCJlbWFpbCI6InZ2dnYiLCJpYXQiOjE2ODk5MTUwMTQsImV4cCI6MTY5MDAwMTQxNH0.7OXUxzjuTBgHKEcUz7cQW6BasDwluSI9xcp5k7Ef9Ys'

  it('renders login button', () => {
    (useFindUserMutation as jest.Mock).mockReturnValue([
      jest.fn(),
      { isLoading: false, isError: false }
    ])

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    )

    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })

  it('logs in and routes to home if username and password are valid', async () => {
    const response = {
      data: {
        existingUser: {
          id: userData.id.toString(),
        },
        token,
      },
    };

    (useFindUserMutation as jest.Mock).mockReturnValue([
      jest.fn().mockResolvedValue(response),
      { isLoading: false, isError: false }
    ])


    const useDispatchMock = jest.spyOn(require('react-redux'), 'useDispatch')
    const dispatchMock = jest.fn()

    useDispatchMock.mockReturnValue(dispatchMock)

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    )

    const loginButton = screen.getByRole('button', { name: 'Login' })
    const emailInput = screen.getByPlaceholderText('Enter email')
    const passwordInput = screen.getByPlaceholderText('Enter password')

    act(() => {
      userEvent.type(emailInput, userData.email)
      userEvent.type(passwordInput, userData.password1)
    })

    expect(loginButton).not.toBeDisabled()
    userEvent.click(loginButton)

    await waitFor(() => {
      expect(dispatchMock).toHaveBeenCalledWith(loginSuccess())
      expect(dispatchMock).toHaveBeenCalledWith(setUserId(userData.id.toString()))
    })
  })

  it('alert pops up if username and password are invalid', async () => {
    const response = {
      error: { message: 'Invalid email address or password' },
    };

    (useFindUserMutation as jest.Mock).mockReturnValue([
      jest.fn().mockResolvedValue(response),
      { isLoading: false, isError: true },
    ])

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    )

    const loginButton = screen.getByRole('button', { name: 'Login' })
    const emailInput = screen.getByPlaceholderText('Enter email')
    const passwordInput = screen.getByPlaceholderText('Enter password')

    act(() => {
      userEvent.type(emailInput, 'blah')
      userEvent.type(passwordInput, 'blah')
    })

    expect(loginButton).not.toBeDisabled()
    userEvent.click(loginButton)

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Invalid email address or password')
    })
  })

  it('displays an error alert when login fails', async () => {
    const findUser = jest.fn(() => {
      throw new Error('Test error')
    });
    
    (useFindUserMutation as jest.Mock).mockReturnValue([
      findUser,
      { isLoading: false, isError: true },
    ])
  
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    )
  
    const loginButton = screen.getByRole('button', { name: 'Login' })
    const emailInput = screen.getByPlaceholderText('Enter email')
    const passwordInput = screen.getByPlaceholderText('Enter password')
  
    act(() => {
      userEvent.type(emailInput, 'test@example.com')
      userEvent.type(passwordInput, 'password123')
      userEvent.click(loginButton)
    })
  
    await waitFor(() => {})
  
    expect(window.alert).toHaveBeenCalledWith(
      'An error occurred while logging in. Please try again later.'
    )
  })
})
