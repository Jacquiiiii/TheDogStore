import { Story, Meta } from '@storybook/react'
import { action } from "@storybook/addon-actions"
import { ModalProps } from '../../types/types'
import Modal from '../../components/Modal/Modal'

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    modalText: { control: 'text' },
    dataCy: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: Story<ModalProps> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  modalText: "Question to user",
  onClick: action("clicked"),
  dataCy: "help-button",
}

export const SecondModalView = Template.bind({})
SecondModalView.args = {
  modalText: "Answer for user",
  onClick: action("clicked"),
  dataCy: "contact-info",
}
