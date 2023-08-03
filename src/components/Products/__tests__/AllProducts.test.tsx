import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { store } from '../../../store/store'
import { useGetProductsQuery } from '../../../store/slices/productsApiSlice'
import { productsData } from '../../../__mocks__/data/productsData'

import AllProducts from '../AllProducts'

jest.mock('../../../store/store')
jest.mock('../../../store/slices/productsApiSlice')

describe('AllProducts', () => {
  it('renders loading message when loading', () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true
    })

    render(<AllProducts />)

    expect(screen.getByTestId('products-container')).toHaveTextContent('Loading...')
  })

  it('renders error message when there is an error', () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: { message: 'An error occurred' },
      isLoading: false
    })

    render(<AllProducts />)

    expect(screen.getByTestId('products-container')).toHaveTextContent('Error: An error occurred. Please try again.')
  })

  it('renders products when there are products', () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: productsData,
      error: undefined,
      isLoading: false
    })

    render(
      <BrowserRouter>
        <Provider store={store}>
          <AllProducts />
        </Provider>
      </BrowserRouter>
    )
    
    expect(screen.getByTestId('products-container')).toBeInTheDocument()
    expect(screen.getAllByTestId('product-card-container')).toHaveLength(4)
  })

  it('renders message when there are no products', () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: { productsData: undefined },
      error: undefined,
      isLoading: false
    })

    render(
      <BrowserRouter>
        <AllProducts />
      </BrowserRouter>
    )

    expect(screen.getByTestId('no-products')).toBeInTheDocument()
  })
})