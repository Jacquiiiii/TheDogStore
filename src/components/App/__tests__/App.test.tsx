// External imports
import { screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import App from '../App'

// Store & Slices
import { renderWithProviders } from '../../../utils/utils-for-tests'

describe('App', () => {
  test('renders without crashing', () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const appElement = screen.getByTestId('app')
    expect(appElement).toBeInTheDocument()
  })
})