import { Story, Meta } from '@storybook/react/types-6-0'
import MainMenu from '.'

export default {
  title: 'MainMenu',
  component: MainMenu,
  argTypes: {
    bgColorMenu: {
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
          'dark'
        ]
      }
    },
    colorTextMenu: {
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
          'dark'
        ]
      }
    }
  }
} as Meta

export const Default: Story = (args) => <MainMenu {...args} />
