import { Story, Meta } from '@storybook/react/types-6-0'
import Container from '../Container'
import CardIcon from '.'

export default {
  title: 'CardIcon',
  component: CardIcon,
  argTypes: {
    colorIcon: {
      control: {
        type: 'select',
        options: [
          'white',
          'primary',
          'secondary',
          'success',
          'info',
          'warning',
          'danger',
          'super-light',
          'light',
          'dark',
          'super-dark'
        ]
      }
    }
  }
} as Meta

export const Default: Story = (args) => (
  <Container isFluid>
    <CardIcon {...args} />
  </Container>
)

Default.args = {
  classComponent: '',
  cardLeftTitle: 'Opening Hours',
  cardLeftText: '8:00AM - 6:00PM',
  cardRightTitle: 'Contact Us',
  cardRightText: '014 7422 866',
  colorIcon: 'primary'
}
