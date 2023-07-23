// External imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Types
import { CartItemObj } from '../../types/types'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: JSON.parse(localStorage.getItem('cart') || '[]'),
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItemObj>) => {
      state.push(action.payload)
      localStorage.setItem('cart', JSON.stringify(state))
    },
    removeItemFromCart: (state, action: PayloadAction<CartItemObj>) => {
      const index = state.findIndex((item: CartItemObj) => item.id === action.payload.id)
      if (index !== -1) {
        state.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(state))
      }
    },
    clearCart: (state) => {
      state.length = 0
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

// Action creator used to dispatch action to the store to set the products state
export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions

// Reducer function passed to the store to update the state based on action dispatched
export default cartSlice.reducer
