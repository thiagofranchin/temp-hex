import { Story, Meta } from '@storybook/react/types-6-0'
import SocialMedia from '.'

export default {
  title: 'SocialMedia',
  component: SocialMedia,
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
    },
    alignIcon: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right']
      }
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div>
    <SocialMedia {...args} />
  </div>
)

Default.args = {
  colorIcon: 'primary',
  alignIcon: 'center',
  widthIcon: 50,
  urlFacebook: 'https://www.facebook.com/',
  urlInstagram: 'https://www.instagram.com/',
  titleFacebook: 'Follow us on Facebook',
  titleInstagram: 'Follow us on Instagram'
}
