// Slices
import { loginSlice } from '../loginSlice'

describe('login slice', () => {
  it('should handle loginSuccess', () => {
    const initialState = {
      isLoggedIn: false,
      userId: ''
    }

    const nextState = loginSlice.reducer(initialState, loginSlice.actions.loginSuccess())
    expect(nextState.isLoggedIn).toBe(true)
  })

  it('should handle logoutSuccess', () => {
    const initialState = {
      isLoggedIn: true,
      userId: 'user123'
    }

    const nextState = loginSlice.reducer(initialState, loginSlice.actions.logoutSuccess())
    expect(nextState.isLoggedIn).toBe(false)
  })

  it('should handle setUserId', () => {
    const initialState = {
      isLoggedIn: true,
      userId: ''
    }

    const nextState = loginSlice.reducer(initialState, loginSlice.actions.setUserId('user123'))
    expect(nextState.userId).toBe('user123')
  })
})
