import { fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { renderWithProviders } from '../../../utils/utils-for-tests'
import { removeItemFromCart } from '../../../store/slices/cartSlice'

import CartItem from '../CartItem'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}))

describe('Cart', () => {
  const product = {
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    brand: 'Brand 1',
    image: 'product1.jpg',
    price: 10,
    category: 'Food'
  }
  it('removes item from cart and calculates total', () => {
    const useDispatchMock = jest.spyOn(require('react-redux'), 'useDispatch')
    const removeItemDispatch = jest.fn()

    useDispatchMock.mockReturnValue(removeItemDispatch)

    renderWithProviders(
      <BrowserRouter>
        <CartItem product={product} />
      </BrowserRouter>
    )

    const removeButton = screen.getByRole('button')
    fireEvent.click(removeButton)

    expect(removeItemDispatch).toHaveBeenCalledWith(removeItemFromCart(product))
    expect(screen.getByTestId('cart-item-price')).toHaveTextContent('$10')
  })
})