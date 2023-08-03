import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../../../store/store'

import Register from '../Register'

describe('Register component', () => {
  it('should update first name input value when user types', () => {
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </BrowserRouter>
    )

    const firstNameInput = getByPlaceholderText('Enter first name') as HTMLInputElement
    fireEvent.change(firstNameInput, { target: { value: 'John' } })
    expect(firstNameInput.value).toBe('John')
  })

  it('should update email input value when user types', () => {
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </BrowserRouter>
    )

    const emailInput = getByPlaceholderText('Enter email') as HTMLInputElement
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } })
    expect(emailInput.value).toBe('john.doe@example.com')
  })

  it('should update password input value when user types', () => {
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </BrowserRouter>
    )

    const passwordInput = getByPlaceholderText('Enter password') as HTMLInputElement
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    expect(passwordInput.value).toBe('password123')
  })

  it('should update password check input value when user types', () => {
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </BrowserRouter>
    )

    const passwordCheckInput = getByPlaceholderText('Enter password again') as HTMLInputElement
    fireEvent.change(passwordCheckInput, { target: { value: 'password123' } })
    expect(passwordCheckInput.value).toBe('password123')
  })

  it('should update password check input value when user types', () => {
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </BrowserRouter>
    )

    const passwordCheckInput = getByPlaceholderText('Enter password again') as HTMLInputElement
    fireEvent.change(passwordCheckInput, { target: { value: 'password123' } })
    expect(passwordCheckInput.value).toBe('password123')
  })
})