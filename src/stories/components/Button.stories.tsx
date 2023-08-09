import { Story, Meta } from '@storybook/react'
import { ButtonProps } from '../../types/types'
import Button from '../../components/Button/Button'
import { blueButtonColor, greenButtonColor } from '../../constants/constants'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
    width: { control: 'text' },
    dataCy: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const BlueButton = Template.bind({})
BlueButton.args = {
  buttonText: 'Click Me',
  color: blueButtonColor,
}

export const GreenButton = Template.bind({})
GreenButton.args = {
  buttonText: 'Click Me',
  color: greenButtonColor,
}

export const OtherColorButton = Template.bind({})
OtherColorButton.args = {
  buttonText: 'Customize this color under controls to see how it looks',
  color: '',
}

export const OtherTextButton = Template.bind({})
OtherTextButton.args = {
  buttonText: 'Customize this text under controls to see how it looks',
  color: blueButtonColor,
}


export const WithCustomWidth = Template.bind({})
WithCustomWidth.args = {
  buttonText: 'Click Me',
  color: blueButtonColor,
  width: '400px',
}

export const WithDataAttribute = Template.bind({});
WithDataAttribute.args = {
  buttonText: 'Click Me',
  color: blueButtonColor,
  dataCy: 'custom-button',
}