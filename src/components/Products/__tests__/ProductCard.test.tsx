import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { fireEvent, render, screen } from '@testing-library/react'
import { store } from '../../../store/store'
import { addItemToCart } from '../../../store/slices/cartSlice'

import ProductCard from '../ProductCard'

jest.mock('../../../store/store')
jest.mock('../../../store/slices/productsApiSlice')
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}))

describe('ProductCard', () => {
  const product = {
    id: 1,
    name: "Red Meat, Liver & Whole Oats Recipe Dog Food",
    description: "A delicious, nourishing kibble that was specially crafted to help support a shelter dogs transition from the adoption environment to their forever home.",
    brand: "Acana",
    image: "https://www.acana.com/dw/image/v2/BFDW_PRD/on/demandware.static/-/Sites-cpf-master-catalog/default/dw0eb73872/images/dogstar/ACANA%20Rescue%20Dog%20Red%20Meat%20Front%20Right%2022.5lb%20USA.png?sw=450",
    price: 44.25,
    category: "Food"
  }
  it('renders product with $44.25 price', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductCard product={product}/>
        </Provider>
      </BrowserRouter>
    )

    expect(screen.getByTestId('product-card-price')).toHaveTextContent('$44.25')
  })

  it('adds product to cart', () => {
    const useDispatchMock = jest.spyOn(require('react-redux'), 'useDispatch')
    const addItemDispatch = jest.fn()

    useDispatchMock.mockReturnValue(addItemDispatch)

    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductCard product={product}/>
        </Provider>
      </BrowserRouter>
    )

    const removeButton = screen.getByRole('button')
    fireEvent.click(removeButton)

    expect(addItemDispatch).toHaveBeenCalledWith(addItemToCart(product))
    expect(screen.getByTestId('product-card-price')).toHaveTextContent('$44.25')
  })
})
