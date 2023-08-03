import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/utils-for-tests'

import About from '../About'

describe('About', () => {
  beforeEach(() => {
    renderWithProviders(<About />)
  })

  it('renders woman and dog watching sunset image', () => {
    expect(screen.getByAltText('woman and dog watching the sunset')).toBeInTheDocument()
  })

  it('renders woman and dog shaking hands image', () => {
    expect(screen.getByAltText('woman and dog shaking hands')).toBeInTheDocument()
  })

  it('renders man and dog hi-fiving image', () => {
    expect(screen.getByAltText('man and dog hi-fiving')).toBeInTheDocument()
  })
})
