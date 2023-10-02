import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { renderWithProviders } from '../../../utils/utils-for-tests'

import Home from '../Home'

describe('Home', () => {
  it('renders without crashing', () => {
    renderWithProviders(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })
})
