import { backToCart } from '../helpers'

describe('backToCart', () => {
  it('should set "backToCart" to "true" when passed "true"', () => {
    backToCart(true)
    expect(localStorage.getItem('backToCart')).toBe('true')
  })

  it('should set "backToCart" to "false" when passed "false"', () => {
    backToCart(false)
    expect(localStorage.getItem('backToCart')).toBe('false')
  })
})