import { Story, Meta } from '@storybook/react/types-6-0'
import Jumbotron from '.'

export default {
  title: 'Jumbotron',
  component: Jumbotron,
  argTypes: {
    textAlign: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right']
      }
    },
    bgColor: {
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
    },
    textColor: {
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

export const Default: Story = (args) => <Jumbotron {...args} />

Default.args = {
  title: 'Title',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis tempor vestibulum. Integer rutrum in lectus nec accumsan. Nulla ultricies convallis justo non tempor. Maecenas posuere imperdiet dictum. Donec luctus ex eu imperdiet finibus. Quisque placerat, nunc luctus pellentesque placerat, est est fringilla ante, id facilisis nunc enim at tellus.',
  textAlign: '',
  textColor: 'white',
  bgColor: 'primary',
  classContainer: '',
  contentIsFluid: false
}
