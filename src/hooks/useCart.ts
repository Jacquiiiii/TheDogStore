import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Product } from '../types/types'

const useCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart)

  const calculateTotal = (cartItemsResult: Product[]) => {
    if (!Array.isArray(cartItemsResult)) {
      throw new Error('cartItemsResult should be an array of Product objects.');
    }
    
    let total = 0
    for (let item of cartItemsResult) {
      total += item.price
    }
    localStorage.setItem('cartTotal', total.toFixed(2))
    return total.toFixed(2)
  }

  const total = useMemo(() => calculateTotal(cartItems), [cartItems])
  return { cartItems, total }
}

export default useCart

