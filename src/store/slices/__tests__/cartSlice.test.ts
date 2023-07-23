// Slices
import cartReducer, {
  addItemToCart,
  removeItemFromCart,
  clearCart,
} from '../cartSlice'

// Types
import { CartItemObj } from '../../../types/types'

describe('cartSlice', () => {
  beforeEach(() => {
    // Mocks localStorage setItem
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(),
      },
      writable: true,
    })
  })

  it('addItemToCart should add an item to the cart', () => {
    const initialState: CartItemObj[] = []
    const item: CartItemObj = {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      brand: 'Brand 1',
      image: 'image-url-1',
      price: 10.99,
      category: 'Category 1',
    }

    const nextState = cartReducer(initialState, addItemToCart(item))
    expect(nextState).toHaveLength(1)
    expect(nextState[0]).toEqual(item)

    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(nextState))
  })

  it('removeItemFromCart should remove an item from the cart', () => {
    const initialState = [
      {
        id: 2,
        name: 'Product 2',
        description: 'Description of Product 2',
        brand: 'Brand 2',
        image: 'image-url-2',
        price: 10.99,
        category: 'Category 2',
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Description of Product 3',
        brand: 'Brand 3',
        image: 'image-url-3',
        price: 10.99,
        category: 'Category 3',
      }
    ]

    const itemToRemove = {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      brand: 'Brand 2',
      image: 'image-url-2',
      price: 10.99,
      category: 'Category 2',
    }
  
    const nextState = cartReducer(initialState, removeItemFromCart(itemToRemove))
    expect(nextState).toHaveLength(1)
    expect(nextState[0]).toEqual({
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      brand: 'Brand 3',
      image: 'image-url-3',
      price: 10.99,
      category: 'Category 3',
    })

    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(nextState))
  })

  it('removeItemFromCart should not modify the cart if the item does not exist', () => {
    const initialState = [
      {
        id: 2,
        name: 'Product 2',
        description: 'Description of Product 2',
        brand: 'Brand 2',
        image: 'image-url-2',
        price: 10.99,
        category: 'Category 2',
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Description of Product 3',
        brand: 'Brand 3',
        image: 'image-url-3',
        price: 10.99,
        category: 'Category 3',
      }
    ];
  
    const nonExistentItemToRemove = {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 4',
      brand: 'Brand 4',
      image: 'image-url-4',
      price: 10.99,
      category: 'Category 4',
    }
  
    const nextState = cartReducer(initialState, removeItemFromCart(nonExistentItemToRemove))
    expect(nextState).toEqual(initialState)
  })
  

  it('clearCart should remove all items from the cart', () => {
    const initialState = [
      {
        id: 2,
        name: 'Product 2',
        description: 'Description of Product 2',
        brand: 'Brand 2',
        image: 'image-url-2',
        price: 10.99,
        category: 'Category 2',
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Description of Product 3',
        brand: 'Brand 3',
        image: 'image-url-3',
        price: 10.99,
        category: 'Category 3',
      }
    ]

    const nextState = cartReducer(initialState, clearCart())
    expect(nextState).toHaveLength(0)

    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(nextState))
  })
})
