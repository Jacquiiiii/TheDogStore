import { screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { renderWithProviders } from '../../../utils/utils-for-tests'

import App from '../App'

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