import { Story, Meta } from '@storybook/react/types-6-0'
import HeroSmall from '.'

export default {
  title: 'HeroSmall',
  component: HeroSmall,
  argTypes: {
    alignText: {
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
    colorTitle: {
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
    colorSubTitle: {
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

export const Default: Story = (args) => {
  return <HeroSmall {...args} />
}

Default.args = {
  alignText: 'left',
  title: 'Title',
  subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  colorTitle: 'white',
  colorSubTitle: 'white',
  bgColor: 'primary',
  bgImageUrl:
    'https://res.cloudinary.com/jsousacleaningservices/image/upload/v1607444937/images-default/hero-small_ejdysb.jpg'
}
