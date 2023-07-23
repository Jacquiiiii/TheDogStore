// External imports
import { screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import App from '../components/App/App'

// Mock Store
import { renderWithProviders } from '../utils/utils-for-tests'

// Styles
import '../styles/styles.css'

describe('Index', () => {
  it('renders the app without crashing', () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const appElement = screen.getByTestId('app')
    expect(appElement).toBeInTheDocument()
  })
})