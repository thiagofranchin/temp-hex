import { Story, Meta } from '@storybook/react/types-6-0'
import SimpleRow from '.'

export default {
  title: 'SimpleRow',
  component: SimpleRow,
  argTypes: {
    textAlign: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right']
      }
    },
    textColor: {
      control: {
        type: 'select',
        options: [
          'transparent',
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
    bgColor: {
      control: {
        type: 'select',
        options: [
          'transparent',
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
    borderColor: {
      control: {
        type: 'select',
        options: [
          'transparent',
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

export const Default: Story = (args) => <SimpleRow {...args} />
Default.args = {
  text: '© J. Sousa Cleaning Services 2021 | All rights reserved.',
  classComponent: 'py-3'
}
