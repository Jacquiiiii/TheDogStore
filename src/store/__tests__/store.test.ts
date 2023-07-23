// Store & Slices
import { store } from '../store'

describe('Redux Store', () => {
  beforeEach(() => {
    store.dispatch({ type: 'RESET_STORE' })
  })

  it('should have the correct initial cart state', () => {
    const initialState = store.getState()
    expect(initialState.cart).toEqual(JSON.parse(localStorage.getItem('cart') || '[]'))
  })
})
