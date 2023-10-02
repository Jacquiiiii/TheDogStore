import { fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import { renderWithProviders } from '../../../utils/utils-for-tests'
import { logoutSuccess, setUserId } from '../../../store/slices/loginSlice'
import { clearCart } from '../../../store/slices/cartSlice'

import Header from '../Header'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}))

describe('Header', () => {
  it('renders header text', () => {
    act(() => {
      renderWithProviders(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
    })

    expect(screen.getByText('The Dog Store')).toBeInTheDocument()
  })

  it('handles logout', () => {
    const initialState: any = {
      login: { isLoggedIn: true },
      cart: []
    }

    const useDispatchMock = jest.spyOn(require('react-redux'), 'useDispatch')
    const dispatchMock = jest.fn()

    useDispatchMock.mockReturnValue(dispatchMock)

    act(() => {
      renderWithProviders(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      , { initialState }
      )
    })

    expect(screen.getByText('Logout')).toBeInTheDocument()
    
    const logoutButton = screen.getByRole('button')
    fireEvent.click(logoutButton)

    expect(dispatchMock).toHaveBeenCalledWith(logoutSuccess())
    expect(dispatchMock).toHaveBeenCalledWith(setUserId(''))
    expect(dispatchMock).toHaveBeenCalledWith(clearCart())

    expect(window.location.pathname).toBe('/')
  })
})

describe('Navigation links', () => {
  beforeEach(() => {
    act(() => {
      renderWithProviders(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
    })
  })

  it('renders navigation links', () => {
    expect(screen.getByText(/shop/i)).toBeInTheDocument()
    expect(screen.getByText(/login/i)).toBeInTheDocument()
    expect(screen.getByText(/cart/i)).toBeInTheDocument()
  })

  it('navigates to / when "The Dog Store" is clicked', () => {
    act(() => {
      userEvent.click(screen.getByText(/shop/i))
    })

    expect(window.location.pathname).toBe('/AllProducts')

    act(() => {
      userEvent.click(screen.getByText('The Dog Store'))
    })

    expect(window.location.pathname).toBe('/')
  })

  it('navigates to shop when shop link is clicked', () => {
    act(() => {
      userEvent.click(screen.getByText(/shop/i))
    })

    expect(window.location.pathname).toBe('/AllProducts')
  })

  it('navigates to login when login link is clicked', () => {
    act(() => {
      userEvent.click(screen.getByText(/login/i))
    })

    expect(window.location.pathname).toBe('/Login')
  })

  it('navigates to cart when cart link is clicked', () => {
    act(() => {
      userEvent.click(screen.getByText(/cart/i))
    })

    expect(window.location.pathname).toBe('/Cart')
  })
})

