// External imports
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render, screen, waitFor } from '@testing-library/react'

// Components
import Treats from '../Treats'

// Store & Slices
import { store } from '../../../store/store'
import { useGetProductsByCategoryQuery } from '../../../store/slices/productsApiSlice'

// Data
import { treatsData } from '../../../__mocks__/data/productsData'

// Mocks
jest.mock('../../../store/slices/productsApiSlice')
jest.mock('../../../store/store')

describe('Supplies', () => {
  it('renders loading message when loading', () => {
    (useGetProductsByCategoryQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true
    })

    render(<Treats />)

    expect(screen.getByTestId('products-container')).toHaveTextContent('Loading...')
  })

  it('renders error message when there is an error', () => {
    (useGetProductsByCategoryQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: { message: 'An error occurred' },
      isLoading: false
    })

    render(<Treats />)

    expect(screen.getByTestId('products-container')).toHaveTextContent('Error: An error occurred. Please try again.')
  })

  it('renders products when there are products', () => {
    (useGetProductsByCategoryQuery as jest.Mock).mockReturnValue({
      data: treatsData,
      error: undefined,
      isLoading: false
    })

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Treats />
        </Provider>
      </BrowserRouter>
    )
    
    waitFor(() => {
      expect(screen.getByTestId('products-container')).toBeInTheDocument()
      expect(screen.getAllByTestId('product-card-container')).toHaveLength(4)
    })
  })

  it('renders message when there are no products', () => {
    (useGetProductsByCategoryQuery as jest.Mock).mockReturnValue({
      data: { productsData: undefined },
      error: undefined,
      isLoading: false
    })

    render(
      <BrowserRouter>
        <Treats />
      </BrowserRouter>
    )

    expect(screen.getByTestId('no-products')).toBeInTheDocument()
  })

  it('displays header "Treats"', () => {
    (useGetProductsByCategoryQuery as jest.Mock).mockReturnValue({
      data: treatsData,
      error: undefined,
      isLoading: false
    })

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Treats />
        </Provider>
      </BrowserRouter>
    )

    const header = screen.getByRole('heading', { name: 'Treats' })
    expect(header).toBeInTheDocument()
  })
})

