// External imports
import { render, fireEvent } from '@testing-library/react'

// Components
import Home from '../Home'

describe('Home', () => {
  it('renders without errors', () => {
    render(<Home />)
  })

  it('renders the need help button text', () => {
    const { getByText } = render(<Home />)
    expect(getByText('Need help?')).toBeInTheDocument()
  })

  it('renders contact info text when need help is clicked', () => {
    const { getByText } = render(<Home />)
    fireEvent.click(getByText('Need help?'))
    expect(getByText('Call us at 1-800-123-4567')).toBeInTheDocument()
  })

  it('renders need help text when contact info is clicked', () => {
    const { getByText } = render(<Home />)

    fireEvent.click(getByText('Need help?'))
    expect(getByText('Call us at 1-800-123-4567')).toBeInTheDocument()
    
    fireEvent.click(getByText('Call us at 1-800-123-4567'))
    expect(getByText('Need help?')).toBeInTheDocument()
  })
})
