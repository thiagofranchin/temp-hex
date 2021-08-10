import { Story, Meta } from '@storybook/react/types-6-0'
import Ckeditor from '.'

export default {
  title: 'Ckeditor',
  component: Ckeditor,
  argTypes: {
    eyebrowLinkColor: {
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
    }
  }
} as Meta

export const Default: Story = (args) => <Ckeditor {...args} />

Default.args = {
  eyebrow: 'Eyebrow',
  eyebrowLinkColor: 'primary',
  title: '<h1>Title</h1>',
  text:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis tempor vestibulum. Integer rutrum in lectus nec accumsan. Nulla ultricies convallis justo non tempor. Maecenas posuere imperdiet dictum. Donec luctus ex eu imperdiet finibus. Quisque placerat, nunc luctus pellentesque placerat, est est fringilla ante, id facilisis nunc enim at tellus.</p>',
  bgColor: 'transparent',
  textColor: '',
  contentIsFluid: false
}
