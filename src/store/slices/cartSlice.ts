import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
