import { Story, Meta } from '@storybook/react'
import { ButtonProps } from '../../types/types'
import Button from '../../components/Button/Button'
import { greenButtonColor } from '../../constants/constants'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
  color: greenButtonColor,
}

export const GreenButton = Template.bind({})
GreenButton.args = {
  buttonText: 'Click Me',
  color: greenButtonColor,
}

export const OtherColorButton = Template.bind({})
OtherColorButton.args = {
  buttonText: 'Customize this color under controls to see how it looks',
  color: 'purple',
}

export const OtherTextButton = Template.bind({})
OtherTextButton.args = {
  buttonText: 'Customize this text under controls to see how it looks',
  color: greenButtonColor,
}


export const WithCustomWidth = Template.bind({})
WithCustomWidth.args = {
  buttonText: 'Click Me',
  color: greenButtonColor,
  width: '400px',
}

export const WithDataAttribute = Template.bind({});
WithDataAttribute.args = {
  buttonText: 'Click Me',
  color: greenButtonColor,
  dataCy: 'custom-button',
}