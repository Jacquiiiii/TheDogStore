export const backToCart = (bool: boolean) => {
  bool ? localStorage.setItem('backToCart', 'true') : localStorage.setItem('backToCart', 'false')
}