import { screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { renderWithProviders } from '../../../utils/utils-for-tests'
import { cartData } from '../../../__mocks__/data/cartData'

import Cart from '../Cart'

describe('Cart', () => {
  it('renders the my cart text', () => {
    renderWithProviders(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    )

    expect(screen.getByText('My Cart')).toBeInTheDocument()
  })

  it('renders a message when there are no items in the cart', () => {
    const initialState: any = { cart: [] }

    renderWithProviders(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>,
      { initialState }
    )
    
    expect(screen.getByTestId('empty-cart')).toBeInTheDocument()
  })
  
  it('calculates and displays the correct subtotal when there are items in cart', () => {
    const initialState: any = cartData

    renderWithProviders(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>,
      { initialState }
    )
  
    expect(screen.getByText('Subtotal: $68.41')).toBeInTheDocument()
  })

  it('renders a pay now button when there are items in the cart', () => {
    const initialState: any = cartData

    renderWithProviders(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>,
      { initialState }
    )
  
    expect(screen.getByRole('button', { name: 'Pay Now' })).toBeInTheDocument()
  })
})
