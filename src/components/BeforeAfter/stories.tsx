import { Story, Meta } from '@storybook/react/types-6-0'
import BeforeAfter from '.'

export default {
  title: 'BeforeAfter',
  component: BeforeAfter,
  argTypes: {
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
    },
    badgeColor: {
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

export const Default: Story = (args) => <BeforeAfter {...args} />
Default.args = {
  positionLine: 75,
  classComponent: 'py-4',
  titleSection: 'Before and After',
  subTitleSection: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
}
