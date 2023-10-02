import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render, screen, waitFor } from '@testing-library/react'
import { store } from '../../../store/store'
import { useGetProductsByCategoryQuery } from '../../../store/slices/productsApiSlice'
import { toysData } from '../../../__mocks__/data/productsData'

import Toys from '../Toys'

jest.mock('../../../store/slices/productsApiSlice')
jest.mock('../../../store/store')

describe('Toys', () => {
  it('renders loading message when loading', () => {
    (useGetProductsByCategoryQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true
    })

    render(<Toys />)

    expect(screen.getByTestId('products-container')).toHaveTextContent('Loading...')
  })

  it('renders error message when there is an error', () => {
    (useGetProductsByCategoryQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: { message: 'An error occurred' },
      isLoading: false
    })

    render(<Toys />)

    expect(screen.getByTestId('products-container')).toHaveTextContent('Error: An error occurred. Please try again.')
  })

  it('renders message when there are no products', () => {
    (useGetProductsByCategoryQuery as jest.Mock).mockReturnValue({
      data: { productsByCategory: undefined },
      error: undefined,
      isLoading: false
    })

    render(
      <BrowserRouter>
        <Toys />
      </BrowserRouter>
    )

    expect(screen.getByTestId('no-products')).toBeInTheDocument()
  })

  it('renders products when there are products', () => {
    (useGetProductsByCategoryQuery as jest.Mock).mockReturnValue({
      data: toysData,
      error: undefined,
      isLoading: false
    })

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Toys />
        </Provider>
      </BrowserRouter>
    )
    
    waitFor(() => {
      expect(screen.getByTestId('products-container')).toBeInTheDocument()
      expect(screen.getAllByTestId('product-card-container')).toHaveLength(4)
    })
  })
})
