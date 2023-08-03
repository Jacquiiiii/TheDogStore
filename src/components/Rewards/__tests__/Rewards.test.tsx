import { render } from '@testing-library/react'

import Rewards from '../Rewards'

describe('Rewards', () => {
  it('renders the instruction text', () => {
    const { getByText } = render(<Rewards />)

    const instructionText = 'Click "Redeem" on one of the coupons below and the discount is automatically applied to your cart on checkout.'
    
    expect(getByText(instructionText)).toBeInTheDocument()
  })
})
